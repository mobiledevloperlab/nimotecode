import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { resolve, extname, basename } from 'node:path'
import sharp from 'sharp'

const digest = buffer => createHash('sha256').update(buffer).digest('hex')
const root = resolve('docs/public/images/placeholders')
const manifest = JSON.parse(readFileSync(resolve(root, 'sources.json'), 'utf8'))
const imageFiles = readdirSync(root).filter(file => /\.(?:png|jpe?g|webp|avif)$/i.test(file)).sort()
assert.equal(manifest.targetVersion, '2.4.1', 'Review the screenshot target when updating application versions')
assert.deepEqual(manifest.pendingRecapture, [], 'Finish recapturing legacy screenshots before publishing')
assert.deepEqual(manifest.images.map(image => image.file).sort(), imageFiles, 'Update the screenshot inventory when adding or removing an image')
const thumbnails = readdirSync(resolve(root, 'thumbs')).filter(file => file.endsWith('.webp')).sort()
const expectedThumbnails = imageFiles.map(file => `${basename(file, extname(file))}.webp`).sort()
assert.equal(new Set(expectedThumbnails).size, imageFiles.length, 'Screenshot basenames must be unique')
assert.deepEqual(thumbnails, expectedThumbnails, 'Remove orphan thumbnails or run npm run images:thumbnails')
for (const item of manifest.images) {
  assert.equal(item.captureVersion, manifest.targetVersion, `${item.file}: stale capture version`)
  assert.equal(item.versionCode, 66, `${item.file}: unverified Android build`)
  const original = readFileSync(resolve(root, item.file))
  assert.equal(digest(original), item.sha256, `${item.file}: source changed; review the screenshot and update its provenance`)
  const metadata = await sharp(original).metadata()
  assert.equal(metadata.width, item.width, `${item.file}: incorrect source width`)
  assert.equal(metadata.height, item.height, `${item.file}: incorrect source height`)
  const expected = await sharp(original).resize({ width: 720, withoutEnlargement: true }).webp({ quality: 82, effort: 6 }).toBuffer()
  const thumbnail = readFileSync(resolve(root, 'thumbs', `${basename(item.file, extname(item.file))}.webp`))
  assert.equal(digest(thumbnail), digest(expected), `${item.file}: stale thumbnail; run npm run images:thumbnails -- --force`)
}

function files(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    if (['.vitepress', 'public'].includes(entry.name)) return []
    const path = resolve(dir, entry.name)
    return entry.isDirectory() ? files(path) : entry.name.endsWith('.md') ? [path] : []
  })
}
const known = new Set(imageFiles)
for (const path of files(resolve('docs'))) {
  const text = readFileSync(path, 'utf8')
  for (const match of text.matchAll(/<DocScreenshot\b[^>]*\bfile="([^"]+)"/g)) {
    assert.ok(known.has(match[1]), `${path}: unknown screenshot ${match[1]}`)
  }
}
const retired = readFileSync('scripts/retired-screenshot-paths.txt', 'utf8').trim().split('\n')
for (const path of retired) assert.ok(!existsSync(path), `Retired image returned: ${path}`)
// Include the theme registry and blog generator, where images can be referenced indirectly.
const sourceFiles = [...files(resolve('docs')), resolve('docs/.vitepress/theme/image-registry.ts'), resolve('blog/prepare-posts.mjs')]
for (const path of sourceFiles) {
  const text = readFileSync(path, 'utf8')
  for (const retiredPath of retired) {
    const url = retiredPath.replace('docs/public', '')
    assert.ok(!text.includes(url) && !text.includes(`file="${basename(retiredPath)}"`), `${path}: retired screenshot reference ${url}`)
  }
}
const iosRoot = resolve('docs/public/images/ios')
const ios = JSON.parse(readFileSync(resolve(iosRoot, 'sources.json'), 'utf8'))
assert.equal(ios.appVersion, manifest.targetVersion, 'iOS and Android screenshot versions must match')
for (const item of ios.images) {
  assert.equal(item.captureVersion, ios.appVersion, `${item.file}: stale iOS capture`)
  const file = readFileSync(resolve(iosRoot, item.file))
  assert.equal(digest(file), item.sha256, `${item.file}: review and update iOS capture provenance`)
  const metadata = await sharp(file).metadata()
  assert.equal(metadata.width, item.width)
  assert.equal(metadata.height, item.height)
}
const hero = manifest.hero
assert.equal(hero.captureVersion, manifest.targetVersion)
const heroFile = readFileSync(resolve('docs/public', hero.file.replace(/^\//, '')))
assert.equal(digest(heroFile), hero.sha256, 'Review and update the main workspace capture')
const heroMetadata = await sharp(heroFile).metadata()
assert.equal(heroMetadata.width, hero.width)
assert.equal(heroMetadata.height, hero.height)
const editorial = JSON.parse(readFileSync('docs/public/screenshots/editorial-sources.json', 'utf8'))
for (const item of editorial.images) {
  assert.equal(item.captureVersion, manifest.targetVersion, `${item.file}: stale editorial figure`)
  assert.equal(digest(readFileSync(resolve('docs/public', item.file))), item.sha256, `${item.file}: stale editorial figure`)
}
if (process.argv.includes('--verify-store') && ios.sourceType !== 'ios-simulator') {
  const response = await fetch(ios.verificationSource, { signal: AbortSignal.timeout(15000) })
  assert.ok(response.ok, `Apple lookup failed: HTTP ${response.status}`)
  const listing = (await response.json()).results?.[0]
  assert.ok(listing, 'Apple lookup returned no listing')
  assert.equal(listing.version, ios.appVersion, 'App Store version changed; review the published screenshots')
  const identities = new Set([...listing.screenshotUrls, ...listing.ipadScreenshotUrls].map(url => url.slice(0, url.lastIndexOf('/'))))
  for (const item of ios.images) assert.ok(identities.has(item.source.slice(0, item.source.lastIndexOf('/'))), `${item.file}: image no longer appears in the public listing`)
  console.log(`App Store screenshot sources verified against version ${listing.version}.`)
}
if (process.argv.includes('--verify-store') && ios.sourceType === 'ios-simulator') {
  console.log('iOS captures are from the documented local simulator build; App Store verification does not apply.')
}
console.log(`Screenshot checks passed: ${imageFiles.length} Android source/thumbnail pairs, ${ios.images.length} iOS captures, ${editorial.images.length} editorial figures, main workspace capture and ${retired.length} retired paths.`)
