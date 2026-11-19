import { createHash } from 'node:crypto'
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

// The optimizer itself keys entries only by filename. Give each set of input
// images and encoding settings its own namespace so those entries stay valid.
export function imageOptimizerCacheKey(publicDirectory, options, dependencyLock) {
  const hash = createHash('sha256')
  const add = value => {
    const bytes = Buffer.from(value)
    hash.update(`${bytes.length}:`)
    hash.update(bytes)
  }
  add('image-optimizer-cache-v1')
  add(JSON.stringify(options))
  add(dependencyLock)

  function visit(directory, relative = '') {
    const entries = readdirSync(directory, { withFileTypes: true })
      .sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)
    for (const entry of entries) {
      const file = join(directory, entry.name)
      const name = relative ? `${relative}/${entry.name}` : entry.name
      if (entry.isDirectory()) visit(file, name)
      else if (entry.isFile() && /\.(jpe?g|png|gif|webp|avif)$/i.test(entry.name)) {
        add(name)
        add(readFileSync(file))
      }
    }
  }
  visit(publicDirectory)
  return hash.digest('hex')
}
