import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs'
import { resolve } from 'node:path'

// VitePress 1.6.x generates sitemap.xml from every built page, including the
// 404 page. A 404 page must never be listed as an indexable URL, so we strip
// any <url> block whose <loc> resolves to /404 or /404.html after the build.
const sitemapPath = resolve(process.cwd(), 'docs/.vitepress/dist/sitemap.xml')

if (!existsSync(sitemapPath)) {
  console.warn('[filter-sitemap] sitemap.xml not found, skipping')
  process.exit(0)
}

const raw = readFileSync(sitemapPath, 'utf8')

function noindexRoutes(directory, relative = '') {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (entry.name === '.vitepress' || entry.name === 'public') return []
    const child = resolve(directory, entry.name)
    const childRelative = `${relative}/${entry.name}`
    if (entry.isDirectory()) return noindexRoutes(child, childRelative)
    if (!entry.name.endsWith('.md')) return []
    const source = readFileSync(child, 'utf8')
    if (!/^---[\s\S]*?^noindex:\s*true\s*$/m.test(source)) return []
    const route = childRelative
      .replace(/^\//, '')
      .replace(/(?:^|\/)index\.md$/, '')
      .replace(/\.md$/, '')
    return [`/${route}` || '/']
  })
}

// Sitemap generation occurs before frontmatter is applied. Derive exclusions
// from source files so every noindex page stays out without a hand-maintained
// list drifting from the content.
const noindexSlugs = noindexRoutes(resolve(process.cwd(), 'docs'))

const strip = raw.replace(/<url>[\s\S]*?<\/url>/g, (block) => {
  const loc = block.match(/<loc>([^<]*)<\/loc>/)
  if (!loc) return block
  const u = loc[1]
  if (/(?:^|\/)(?:404|404\.html)$/.test(u)) return ''
  if (noindexSlugs.some((suffix) => u.endsWith(suffix))) return ''
  return block
})

if (strip === raw) {
  console.log('[filter-sitemap] no noindex/404 entries found')
} else if (!strip.includes('<loc>')) {
  console.warn('[filter-sitemap] filtered sitemap would be empty, aborting')
  process.exit(1)
} else {
  writeFileSync(sitemapPath, strip)
  console.log('[filter-sitemap] removed noindex/404 entries from sitemap.xml')
}
