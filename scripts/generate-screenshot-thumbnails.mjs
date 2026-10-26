import { mkdir, readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const sourceDirectory = path.resolve('docs/public/images/placeholders')
const outputDirectory = path.join(sourceDirectory, 'thumbs')
const supportedExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif'])
const thumbnailWidth = 720

const files = (await readdir(sourceDirectory, { withFileTypes: true }))
  .filter((entry) => entry.isFile() && supportedExtensions.has(path.extname(entry.name).toLowerCase()))
  .map((entry) => entry.name)

await mkdir(outputDirectory, { recursive: true })

let generated = 0
let skipped = 0
for (const file of files) {
  const source = path.join(sourceDirectory, file)
  const output = path.join(outputDirectory, `${path.parse(file).name}.webp`)

  try {
    const [sourceStats, outputStats] = await Promise.all([stat(source), stat(output)])
    if (outputStats.mtimeMs >= sourceStats.mtimeMs) {
      skipped += 1
      continue
    }
  } catch {
    // The thumbnail does not exist yet.
  }

  await sharp(source)
    .resize({ width: thumbnailWidth, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(output)
  generated += 1
}

console.log(`Screenshot thumbnails: generated ${generated}, up to date ${skipped}.`)
