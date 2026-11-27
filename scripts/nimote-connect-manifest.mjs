import { mkdtemp, mkdir, readFile, rename, rm, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const repository = 'mobiledevloperlab/nimote-connect'
const releasesApi = `https://api.github.com/repos/${repository}/releases`
const manifestPath = fileURLToPath(new URL('../docs/public/downloads/nimote-connect/releases.json', import.meta.url))
const stableTag = /^v((?:0|[1-9]\d*)(?:\.(?:0|[1-9]\d*)){2})$/
const archiveName = /^nimote-connect-(commercial-)?(\d+\.\d+\.\d+)-(darwin|linux|windows)-(amd64|arm64)\.(tar\.gz|zip)$/
const sha256 = /^[a-f0-9]{64}$/
const requestTimeout = 15_000

function packageInfo(tag, fileName) {
  const match = archiveName.exec(fileName)
  if (!match) return
  const [, commercial, version, os, arch, extension] = match
  if (`v${version}` !== tag || (os === 'windows' ? extension !== 'zip' : extension !== 'tar.gz')) return
  return { version, os, arch, packageType: commercial ? 'gui' : 'cli' }
}

function downloadUrl(tag, fileName) {
  return `https://github.com/${repository}/releases/download/${encodeURIComponent(tag)}/${encodeURIComponent(fileName)}`
}

function checkDownloadUrl(tag, asset) {
  if (asset.browser_download_url !== downloadUrl(tag, asset.name)) {
    throw new Error(`${tag}/${asset.name}: download URL does not match the official GitHub release attachment`)
  }
}

async function fetchReleases(request, token) {
  const headers = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  }
  if (token) headers.Authorization = `Bearer ${token}`
  const releases = []
  for (let page = 1; ; page++) {
    const response = await request(`${releasesApi}?per_page=100&page=${page}`, {
      headers, redirect: 'error', signal: AbortSignal.timeout(requestTimeout),
    })
    if (!response.ok) throw new Error(`GitHub Releases API page ${page} returned HTTP ${response.status}`)
    const batch = await response.json()
    if (!Array.isArray(batch)) throw new Error(`GitHub Releases API page ${page} did not return an array`)
    releases.push(...batch)
    if (batch.length < 100) return releases
  }
}

async function assetDigest(tag, asset, assets, request) {
  const digest = /^sha256:([a-f0-9]{64})$/i.exec(asset.digest)?.[1]
  if (digest) return digest.toLowerCase()

  const sidecar = assets.find(({ name }) => name === `${asset.name}.sha256`)
  if (sidecar?.state !== 'uploaded' || !Number.isSafeInteger(sidecar.size) ||
      sidecar.size <= 0 || sidecar.size > 1024) return
  checkDownloadUrl(tag, sidecar)
  const response = await request(sidecar.browser_download_url, { signal: AbortSignal.timeout(requestTimeout) })
  if (!response.ok) throw new Error(`${tag}/${sidecar.name}: checksum download returned HTTP ${response.status}`)
  const [hash, name, ...extra] = (await response.text()).trim().split(/\s+/)
  if (extra.length === 0 && name?.replace(/^\*/, '') === asset.name && sha256.test(hash.toLowerCase())) {
    return hash.toLowerCase()
  }
}

export function validateManifest(manifest) {
  if (manifest?.schemaVersion !== 1 || typeof manifest.generatedAt !== 'string' ||
      !Number.isFinite(Date.parse(manifest.generatedAt)) ||
      new Date(manifest.generatedAt).toISOString() !== manifest.generatedAt ||
      !Array.isArray(manifest.packages) || manifest.packages.length === 0) {
    throw new Error('Expected schemaVersion 1, a UTC generatedAt timestamp and at least one stable package')
  }

  const seen = new Set()
  for (const entry of manifest.packages) {
    const info = entry && packageInfo(entry.tag, entry.fileName)
    if (!info || !stableTag.test(entry.tag) || entry.prerelease !== false ||
        Object.entries(info).some(([key, value]) => entry[key] !== value) ||
        entry.downloadUrl !== downloadUrl(entry.tag, entry.fileName) ||
        !Number.isSafeInteger(entry.sizeBytes) || entry.sizeBytes <= 0 ||
        typeof entry.sha256 !== 'string' || !sha256.test(entry.sha256)) {
      throw new Error(`Invalid stable package: ${entry?.tag}/${entry?.fileName}`)
    }
    if (seen.has(entry.downloadUrl)) throw new Error(`Duplicate package: ${entry.downloadUrl}`)
    seen.add(entry.downloadUrl)
  }
}

export async function refreshManifest(output, {
  request = fetch, token, warn = console.warn,
} = {}) {
  const packages = []
  for (const release of await fetchReleases(request, token)) {
    const { tag_name: tag, assets } = release
    if (release.draft !== false || release.prerelease !== false || !release.published_at) continue
    if (!stableTag.test(tag) || !Array.isArray(assets)) {
      throw new Error(`Invalid stable release metadata: ${tag}`)
    }

    for (const asset of assets) {
      const info = packageInfo(tag, asset.name)
      if (!info) {
        if (/^nimote-connect-.*\.(?:tar\.gz|zip)$/.test(asset.name)) {
          warn(`Skipping ${tag}/${asset.name}: invalid archive name for this release`)
        }
        continue
      }
      if (asset.state !== 'uploaded' || !Number.isSafeInteger(asset.size) || asset.size <= 0) {
        warn(`Skipping ${tag}/${asset.name}: attachment is not an uploaded, nonempty file`)
        continue
      }
      checkDownloadUrl(tag, asset)
      const digest = await assetDigest(tag, asset, assets, request)
      if (!digest) {
        warn(`Skipping ${tag}/${asset.name}: no valid SHA-256 for this attachment`)
        continue
      }
      packages.push({
        tag, ...info, prerelease: false, fileName: asset.name,
        downloadUrl: asset.browser_download_url, sizeBytes: asset.size, sha256: digest,
      })
    }
  }

  const manifest = { schemaVersion: 1, generatedAt: new Date().toISOString(), packages }
  validateManifest(manifest)

  const directory = dirname(output)
  await mkdir(directory, { recursive: true })
  const temporaryDirectory = await mkdtemp(join(directory, '.nimote-connect-'))
  try {
    const temporaryFile = join(temporaryDirectory, 'releases.json')
    await writeFile(temporaryFile, JSON.stringify(manifest, null, 2) + '\n')
    await rename(temporaryFile, output)
  } finally {
    await rm(temporaryDirectory, { recursive: true, force: true })
  }
  return manifest
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const [command, file = manifestPath] = process.argv.slice(2)
    if (command === 'refresh') {
      const manifest = await refreshManifest(file, { token: process.env.NIMOTE_CONNECT_RELEASES_TOKEN })
      console.log(`Generated ${file} with ${manifest.packages.length} stable packages`)
    } else if (command === 'check') {
      validateManifest(JSON.parse(await readFile(file, 'utf8')))
      console.log(`Verified Nimote Connect manifest at ${file}`)
    } else {
      throw new Error('Usage: node scripts/nimote-connect-manifest.mjs <refresh|check> [file]')
    }
  } catch (error) {
    console.error(`Nimote Connect manifest: ${error.message}`)
    process.exitCode = 1
  }
}
