import assert from 'node:assert/strict'
import { mkdtemp, readFile, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import test from 'node:test'
import { refreshManifest, validateManifest } from './nimote-connect-manifest.mjs'

const tag = 'v1.2.0'
const digest = 'a'.repeat(64)
const linuxFile = 'nimote-connect-1.2.0-linux-arm64.tar.gz'
const windowsFile = 'nimote-connect-commercial-1.2.0-windows-amd64.zip'
const apiPage = 'https://api.github.com/repos/mobiledevloperlab/nimote-connect/releases?per_page=100&page=1'

function asset(name = linuxFile, overrides = {}, releaseTag = tag) {
  return {
    name,
    browser_download_url: `https://github.com/mobiledevloperlab/nimote-connect/releases/download/${releaseTag}/${name}`,
    size: 123,
    state: 'uploaded',
    digest: `sha256:${digest}`,
    ...overrides,
  }
}

function release(assets, overrides = {}) {
  return { tag_name: tag, draft: false, prerelease: false, published_at: '2026-11-27T00:00:00Z', assets, ...overrides }
}

async function setup(t, releases) {
  const directory = await mkdtemp(join(tmpdir(), 'nimote-connect-test-'))
  t.after(() => rm(directory, { recursive: true, force: true }))
  return {
    path: join(directory, 'releases.json'),
    request: async url => {
      assert.equal(url, apiPage)
      return Response.json(releases)
    },
  }
}

test('uses stable releases while excluding drafts, prereleases and unpublished entries', async t => {
  const { path, request } = await setup(t, [
    release(null, { draft: true, tag_name: 'v9.0.0' }),
    release(null, { prerelease: true, tag_name: 'v2.0.0-rc.1' }),
    release(null, { published_at: null, tag_name: 'v3.0.0' }),
    release([asset(), asset(windowsFile)]),
  ])
  const manifest = await refreshManifest(path, { request })
  assert.deepEqual(manifest.packages, [
    {
      tag, version: '1.2.0', os: 'linux', arch: 'arm64', packageType: 'cli', prerelease: false,
      fileName: linuxFile, downloadUrl: asset().browser_download_url, sizeBytes: 123, sha256: digest,
    },
    {
      tag, version: '1.2.0', os: 'windows', arch: 'amd64', packageType: 'gui', prerelease: false,
      fileName: windowsFile, downloadUrl: asset(windowsFile).browser_download_url, sizeBytes: 123, sha256: digest,
    },
  ])
  assert.deepEqual(JSON.parse(await readFile(path, 'utf8')), manifest)
})

test('skips missing digests, misnamed archives and incomplete uploads with diagnostics', async t => {
  const missingDigest = 'nimote-connect-1.2.0-darwin-arm64.tar.gz'
  const wrongVersion = 'nimote-connect-1.1.0-linux-arm64.tar.gz'
  const wrongExtension = 'nimote-connect-1.2.0-windows-arm64.tar.gz'
  const wrongArch = 'nimote-connect-1.2.0-linux-x64.tar.gz'
  const notUploaded = 'nimote-connect-1.2.0-darwin-amd64.tar.gz'
  const { path, request } = await setup(t, [release([
    asset(), asset(missingDigest, { digest: null }), asset(wrongVersion), asset(wrongExtension),
    asset(wrongArch), asset(notUploaded, { state: 'starter' }),
  ])])
  const warnings = []
  const manifest = await refreshManifest(path, { request, warn: message => warnings.push(message) })
  assert.deepEqual(manifest.packages.map(pkg => pkg.fileName), [linuxFile])
  for (const name of [missingDigest, wrongVersion, wrongExtension, wrongArch, notUploaded]) {
    assert.ok(warnings.some(message => message.includes(name)), name)
  }
})

test('uses a matching checksum sidecar without sending API credentials to the download server', async t => {
  const sidecar = asset(`${linuxFile}.sha256`)
  const { path } = await setup(t)
  const request = async (url, options) => {
    if (url === apiPage) {
      assert.equal(options.headers.Authorization, 'Bearer fixture-token')
      return Response.json([release([asset(linuxFile, { digest: null }), sidecar])])
    }
    assert.equal(url, sidecar.browser_download_url)
    assert.equal(options.headers, undefined)
    return new Response(`${digest.toUpperCase()}  ${linuxFile}\n`)
  }
  const manifest = await refreshManifest(path, { request, token: 'fixture-token' })
  assert.equal(manifest.packages[0].sha256, digest)

  const wrongChecksum = async (url, options) => url === apiPage
    ? request(url, options)
    : new Response(`${digest}  another-file.tar.gz\n`)
  await assert.rejects(refreshManifest(path, {
    request: wrongChecksum, token: 'fixture-token', warn: () => {},
  }), /at least one stable package/)
})

test('preserves the previous manifest when the API, attachment URL or generated manifest fails validation', async t => {
  const { path, request } = await setup(t, [release([asset()])])
  await refreshManifest(path, { request })
  const previous = await readFile(path, 'utf8')

  for (const url of [
    asset().browser_download_url.replace('nimote-connect/releases', 'another-repo/releases'),
    asset().browser_download_url.replace('/v1.2.0/', '/v1.1.0/'),
    asset().browser_download_url.replace(linuxFile, windowsFile),
  ]) {
    await assert.rejects(refreshManifest(path, {
      request: async () => Response.json([release([asset(linuxFile, { browser_download_url: url })])]),
    }), /does not match the official GitHub release attachment/)
  }
  await assert.rejects(refreshManifest(path, {
    request: async () => new Response('', { status: 503 }),
  }), /GitHub Releases API page 1 returned HTTP 503/)
  await assert.rejects(refreshManifest(path, {
    request: async () => Response.json([]),
  }), /at least one stable package/)
  assert.equal(await readFile(path, 'utf8'), previous)

  const corrupt = JSON.parse(previous)
  corrupt.packages[0].sha256 = 'invalid'
  assert.throws(() => validateManifest(corrupt), /Invalid stable package/)
})

test('reads additional GitHub Releases pages', async t => {
  const { path } = await setup(t)
  const requested = []
  const manifest = await refreshManifest(path, {
    request: async url => {
      requested.push(url)
      return url === apiPage
        ? Response.json(Array(100).fill(release([], { draft: true })))
        : Response.json([release([asset()])])
    },
  })
  assert.deepEqual(requested, [apiPage, apiPage.replace('&page=1', '&page=2')])
  assert.equal(manifest.packages.length, 1)
})
