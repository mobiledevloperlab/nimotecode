import { spawnSync } from 'node:child_process'
import { cpSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { resolve, join } from 'node:path'

const root = process.cwd()
const output = resolve(root, 'docs/.vitepress/dist')
for (const lang of ['en', 'zh']) {
  const result = spawnSync('npm', ['run', 'build'], {
    cwd: resolve(root, 'blog'), stdio: 'inherit',
    env: { ...process.env, BLOG_LANG: lang, ASTRO_TELEMETRY_DISABLED: '1' }
  })
  if (result.status !== 0) process.exit(result.status || 1)
  cpSync(resolve(root, 'blog/dist'), resolve(output, ...(lang === 'zh' ? ['zh', 'blog'] : ['blog'])), { recursive: true })
  if (lang === 'en') cpSync(resolve(root, 'blog/dist/rss.xml'), resolve(output, 'feed.xml'))
}
// The root sitemap must include both generators' final canonical URLs.
function htmlFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const path = join(dir, entry.name)
    return entry.isDirectory() ? htmlFiles(path) : entry.name.endsWith('.html') ? [path] : []
  })
}
const urls = htmlFiles(output).flatMap(file => {
  const html = readFileSync(file, 'utf8')
  if (/<meta name="robots" content="noindex, follow"/.test(html)) return []
  const url = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1]
  return url ? [new URL(url).href] : []
})
writeFileSync(resolve(output, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(url => `  <url><loc>${url.replaceAll('&', '&amp;')}</loc></url>`).join('\n')}\n</urlset>\n`)
