# NimoteCode Local Linux — corresponding source

NimoteCode Local Linux bundles an Ubuntu root filesystem with the Android app.
That root filesystem contains GPL/LGPL and other copyleft components, so the
complete corresponding source for every shipped binary is published here.

## Where the source archive lives

The complete bundle is several hundred megabytes. It is **not** stored in this
repository and **not** part of the website build: it is uploaded to Cloudflare
R2 and downloaded from there.

`source-download.json` is the release of record. It carries the current version,
the Ubuntu distribution and architectures, the bundle filename, its size, its
SHA-256 and the download URL, and the download page renders from it.

## Layout

```
README.md                 this file
source-download.json      current release: version, size, sha256, download URL
<version>/
  README.md
  source-download.json    the same metadata, pinned to this version
  SHA256SUMS              checksum of the source bundle itself
  THIRD_PARTY_SOURCE.md   what the bundle covers, and what it does not
  source-manifest.json    every source package the rootfs requires source for
  checksums/SHA256SUMS    checksums of everything published below this version
  licenses/               third-party notices and PRoot/talloc licence texts
  manifests/              package inventories and fetched source artifacts
  provenance/             rootfs provenance and the recorded build inputs
```

`licenses/`, `manifests/`, `provenance/` and `checksums/` are small text files
and are served directly from the website. The archive they describe is not.

## Publishing a release

```bash
./scripts/publish-local-linux-source.sh <version>
```

The script reuses the existing Local Linux build chain, refuses to publish an
archive that does not match the version it is labelled with, writes the
metadata below `docs/public/opensource/local-linux/`, uploads the archive to the
`nimotecode-opensource` R2 bucket and only then rewrites the live
`source-download.json`. Run it with `--help` for the full option list.

Credentials are read from a file outside the repository, passed with
`--credentials`:

```sh
CLOUDFLARE_API_TOKEN=…        # Cloudflare API token, Workers R2 Storage: Edit
CLOUDFLARE_ACCOUNT_ID=…       # account that owns the bucket
R2_ACCESS_KEY_ID=…            # R2 S3 token, Object Read & Write
R2_SECRET_ACCESS_KEY=…
```

`wrangler r2 object put` refuses objects over 300 MiB, and a Local Linux bundle
is larger than that, so the upload goes through `scripts/r2-upload.py`, a
multipart S3 uploader built on the Python standard library. The wrangler path
stays available for smaller objects via `--uploader wrangler`.

The download host is `https://opensource-downloads.nimotecode.com/`; override it
with `LOCAL_LINUX_SOURCE_BASE_URL` if the distribution changes.
