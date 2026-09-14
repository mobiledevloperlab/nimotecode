#!/usr/bin/env python3
"""Upload a file to Cloudflare R2 through the S3 API.

`wrangler r2 object put` refuses anything over 300 MiB and no S3 client is
installed on the release machine, so publication falls back to this: a
multipart upload built on the Python standard library alone. The SigV4 signer
is checked against the official AWS test vector by `--self-test`.

Credentials come from the environment (or the matching flags):
    R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY
    R2_ACCOUNT_ID   (or CLOUDFLARE_ACCOUNT_ID, or R2_ENDPOINT)
"""
from __future__ import annotations

import argparse
import datetime
import hashlib
import hmac
import os
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ElementTree

ALGORITHM = 'AWS4-HMAC-SHA256'
EMPTY_SHA256 = hashlib.sha256(b'').hexdigest()
DEFAULT_PART_SIZE = 64 * 1024 * 1024
RETRIES = 4


def sign(key: bytes, message: str) -> bytes:
    return hmac.new(key, message.encode('utf-8'), hashlib.sha256).digest()


def signing_key(secret: str, date: str, region: str, service: str) -> bytes:
    key = ('AWS4' + secret).encode('utf-8')
    for part in (date, region, service, 'aws4_request'):
        key = sign(key, part)
    return key


def uri_encode(value: str, encode_slash: bool = True) -> str:
    safe = '-_.~' if encode_slash else '-_.~/'
    out = []
    for char in value:
        if char.isalnum() or char in safe:
            out.append(char)
        else:
            out.append(''.join(f'%{byte:02X}' for byte in char.encode('utf-8')))
    return ''.join(out)


def canonical_query(params: dict[str, str]) -> str:
    return '&'.join(f'{uri_encode(k)}={uri_encode(v)}' for k, v in sorted(params.items()))


class R2:
    def __init__(self, endpoint: str, access_key: str, secret_key: str, region: str = 'auto'):
        self.endpoint = endpoint.rstrip('/')
        self.access_key = access_key
        self.secret_key = secret_key
        self.region = region

    def request(self, method: str, path: str, params: dict[str, str] | None = None,
                body: bytes = b'', headers: dict[str, str] | None = None) -> tuple[int, dict, bytes]:
        params = dict(params or {})
        headers = dict(headers or {})
        parsed = urllib.parse.urlsplit(self.endpoint)
        host = parsed.netloc
        canonical_uri = '/' + uri_encode(path.lstrip('/'), encode_slash=False)

        now = datetime.datetime.now(datetime.timezone.utc)
        amz_date = now.strftime('%Y%m%dT%H%M%SZ')
        date = now.strftime('%Y%m%d')
        payload_hash = hashlib.sha256(body).hexdigest()

        signed = {
            'host': host,
            'x-amz-content-sha256': payload_hash,
            'x-amz-date': amz_date,
            **{k.lower(): v for k, v in headers.items()},
        }
        signed_headers = ';'.join(sorted(signed))
        canonical_headers = ''.join(f'{k}:{signed[k].strip()}\n' for k in sorted(signed))
        canonical_request = '\n'.join([
            method, canonical_uri, canonical_query(params),
            canonical_headers, signed_headers, payload_hash,
        ])
        scope = f'{date}/{self.region}/s3/aws4_request'
        string_to_sign = '\n'.join([
            ALGORITHM, amz_date, scope,
            hashlib.sha256(canonical_request.encode('utf-8')).hexdigest(),
        ])
        signature = hmac.new(signing_key(self.secret_key, date, self.region, 's3'),
                             string_to_sign.encode('utf-8'), hashlib.sha256).hexdigest()

        url = f'{self.endpoint}{canonical_uri}'
        if params:
            url += '?' + urllib.parse.urlencode(params)
        request_headers = {
            **headers,
            'x-amz-content-sha256': payload_hash,
            'x-amz-date': amz_date,
            'Authorization': (
                f'{ALGORITHM} Credential={self.access_key}/{scope}, '
                f'SignedHeaders={signed_headers}, Signature={signature}'
            ),
        }
        request = urllib.request.Request(url, data=body or None, headers=request_headers, method=method)
        try:
            with urllib.request.urlopen(request, timeout=900) as response:
                return response.status, dict(response.headers), response.read()
        except urllib.error.HTTPError as error:
            return error.code, dict(error.headers or {}), error.read()

    def call(self, method: str, path: str, **kwargs) -> bytes:
        """Retry transient failures; raise on anything the service rejects."""
        delay = 2
        for attempt in range(1, RETRIES + 1):
            try:
                status, headers, body = self.request(method, path, **kwargs)
            except (urllib.error.URLError, TimeoutError, ConnectionError) as error:
                if attempt == RETRIES:
                    raise SystemExit(f'FAIL: {method} {path} unreachable: {error}')
                print(f'  retrying after transport error ({error})', file=sys.stderr)
                time.sleep(delay); delay *= 2
                continue
            if 200 <= status < 300:
                return body
            if status >= 500 and attempt < RETRIES:
                print(f'  retrying after HTTP {status}', file=sys.stderr)
                time.sleep(delay); delay *= 2
                continue
            detail = body.decode('utf-8', 'replace').strip()
            raise SystemExit(f'FAIL: {method} /{path} returned HTTP {status}\n{detail}')
        raise SystemExit(f'FAIL: {method} /{path} exhausted retries')


def tag(element) -> str:
    return element.tag.rsplit('}', 1)[-1]


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument('file')
    parser.add_argument('--bucket', required=True)
    parser.add_argument('--key', required=True)
    parser.add_argument('--account-id', default=os.environ.get('R2_ACCOUNT_ID') or os.environ.get('CLOUDFLARE_ACCOUNT_ID'))
    parser.add_argument('--endpoint', default=os.environ.get('R2_ENDPOINT'))
    parser.add_argument('--access-key-id', default=os.environ.get('R2_ACCESS_KEY_ID'))
    parser.add_argument('--secret-access-key', default=os.environ.get('R2_SECRET_ACCESS_KEY'))
    parser.add_argument('--part-size', type=int, default=DEFAULT_PART_SIZE)
    parser.add_argument('--content-type')
    parser.add_argument('--cache-control')
    parser.add_argument('--self-test', action='store_true',
                        help='verify the SigV4 signer against the AWS test vector and exit')
    args = parser.parse_args()

    if args.self_test:
        key = signing_key('wJalrXUtnFEMI/K7MDENG+bPxRfiCYEXAMPLEKEY', '20150830', 'us-east-1', 'service')
        canonical = '\n'.join(['GET', '/', '',
                               'host:example.amazonaws.com\nx-amz-date:20150830T123600Z\n',
                               'host;x-amz-date', EMPTY_SHA256])
        string_to_sign = '\n'.join(['AWS4-HMAC-SHA256', '20150830T123600Z',
                                    '20150830/us-east-1/service/aws4_request',
                                    hashlib.sha256(canonical.encode()).hexdigest()])
        actual = hmac.new(key, string_to_sign.encode(), hashlib.sha256).hexdigest()
        expected = '5fa00fa31553b73ebf1942676e86291e8372ff2a2260956d9b8aae1d763fbf31'
        print('self-test:', 'passed' if actual == expected else f'FAILED ({actual})')
        return 0 if actual == expected else 1

    endpoint = args.endpoint or (f'https://{args.account_id}.r2.cloudflarestorage.com' if args.account_id else None)
    missing = [name for name, value in (
        ('--endpoint or --account-id', endpoint),
        ('--access-key-id', args.access_key_id),
        ('--secret-access-key', args.secret_access_key),
    ) if not value]
    if missing:
        raise SystemExit('FAIL: missing ' + ', '.join(missing))

    path = f'{args.bucket}/{args.key}'
    size = os.path.getsize(args.file)
    metadata = {}
    if args.content_type:
        metadata['Content-Type'] = args.content_type
    if args.cache_control:
        metadata['Cache-Control'] = args.cache_control
    client = R2(endpoint, args.access_key_id, args.secret_access_key)

    if size <= args.part_size:
        print(f'uploading {size} bytes in a single request')
        with open(args.file, 'rb') as handle:
            body = handle.read()
        client.call('PUT', path, body=body, headers=metadata)
    else:
        parts = (size + args.part_size - 1) // args.part_size
        print(f'uploading {size} bytes as {parts} parts of {args.part_size} bytes')
        root = ElementTree.fromstring(client.call('POST', path, params={'uploads': ''}, headers=metadata))
        upload_id = next(node.text for node in root.iter() if tag(node) == 'UploadId')
        print(f'  uploadId {upload_id}')
        completed = []
        try:
            with open(args.file, 'rb') as handle:
                for number in range(1, parts + 1):
                    chunk = handle.read(args.part_size)
                    _, headers, _ = client.request(
                        'PUT', path, params={'partNumber': str(number), 'uploadId': upload_id}, body=chunk)
                    etag = headers.get('ETag') or headers.get('etag')
                    if not etag:
                        raise SystemExit(f'FAIL: part {number} returned no ETag')
                    completed.append((number, etag))
                    print(f'  part {number}/{parts} ok ({len(chunk)} bytes, {etag})', flush=True)
            body = (
                '<CompleteMultipartUpload>'
                + ''.join(f'<Part><PartNumber>{n}</PartNumber><ETag>{e}</ETag></Part>' for n, e in completed)
                + '</CompleteMultipartUpload>'
            ).encode()
            client.call('POST', path, params={'uploadId': upload_id}, body=body)
        except BaseException:
            client.call('DELETE', path, params={'uploadId': upload_id})
            raise
        print(f'  completed {len(completed)} parts')

    status, headers, _ = client.request('HEAD', path)
    remote = headers.get('Content-Length') or headers.get('content-length')
    print(f'HEAD {args.bucket}/{args.key} -> HTTP {status}, {remote} bytes')
    if status != 200 or str(remote) != str(size):
        raise SystemExit(f'FAIL: remote object is {remote} bytes, expected {size}')
    return 0


if __name__ == '__main__':
    sys.exit(main())
