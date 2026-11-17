import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const sourceDirectory = path.resolve('docs/public/images/placeholders')
const outputDirectory = path.join(sourceDirectory, 'thumbs')
const supportedExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif'])
const thumbnailWidth = 720

const files = (await readdir(sourceDirectory, { withFileTypes: true }))
  .filter(entry => entry.isFile() && supportedExtensions.has(path.extname(entry.name).toLowerCase()))
  .map(entry => entry.name)

await mkdir(outputDirectory, { recursive: true })

let generated = 0
let skipped = 0
for (const file of files) {
  const source = path.join(sourceDirectory, file)
  const output = path.join(outputDirectory, `${path.parse(file).name}.webp`)
  const thumbnail = await sharp(source)
    .resize({ width: thumbnailWidth, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toBuffer()

  // Compare content: a checkout or copied image can have a misleading mtime.
  const existing = await readFile(output).catch(error => {
    if (error.code !== 'ENOENT') throw error
    return null
  })
  if (!process.argv.includes('--force') && existing?.equals(thumbnail)) {
    skipped += 1
    continue
  }
  await writeFile(output, thumbnail)
  generated += 1
}

console.log(`Screenshot thumbnails: generated ${generated}, up to date ${skipped}.`)
