import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { resolve, relative } from 'node:path'

const dist = resolve(process.cwd(), 'docs/.vitepress/dist')
const site = 'https://nimotecode.com'
const failures = []
const redirects = new Set(
  readFileSync(resolve(process.cwd(), 'docs/public/_redirects'), 'utf8')
    .split('\n')
    .map((line) => line.trim().split(/\s+/)[0])
    .filter((source) => source && !source.startsWith('#'))
)

function files(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = resolve(directory, entry.name)
    return entry.isDirectory() ? files(path) : [path]
  })
}

function targetExists(href) {
  const path = href.replace(site, '').replace(/[?#].*$/, '') || '/'
  if (path.startsWith('/assets/') || path.startsWith('/images/') || path.startsWith('/screenshots/')) return true
  if (redirects.has(path)) return true
  const normalized = path.replace(/^\//, '').replace(/\/$/, '')
  return [
    resolve(dist, normalized || 'index.html'),
    resolve(dist, `${normalized}.html`),
    resolve(dist, normalized, 'index.html')
  ].some(existsSync)
}

function valuesByValue(items, label) {
  const seen = new Map()
  for (const item of items) {
    if (!item.value) failures.push(`${label} missing: ${item.file}`)
    else if (seen.has(item.value)) failures.push(`${label} duplicated: ${item.file} and ${seen.get(item.value)}`)
    else seen.set(item.value, item.file)
  }
}

const htmlFiles = files(dist).filter((file) => file.endsWith('.html'))
const indexable = []

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8')
  const name = relative(dist, file)
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const href = match[1].replaceAll('&amp;', '&')
    if (/^(?:https?:|mailto:|tel:|#|data:)/.test(href) || href.startsWith('//')) continue
    if (!targetExists(href)) failures.push(`Broken internal asset/link in ${name}: ${href}`)
  }

  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)
  const title = html.match(/<title>([^<]+)<\/title>/)
  const description = html.match(/<meta name="description" content="([^"]*)"/)
  const isNoindex = /<meta name="robots" content="noindex, follow"/.test(html)
  const isDocs = /^(?:zh\/)?(?:docs|blog|use-cases)(?:\/|\.html|$)/.test(name)

  if (!isDocs && /(?:VPSidebar|VPDocAside|VPDocFooter)/.test(html)) {
    failures.push(`Marketing page contains content-layout chrome: ${name}`)
  }
  if (!isNoindex) indexable.push({ file: name, value: canonical?.[1], title: title?.[1], description: description?.[1] })

  for (const alternate of html.matchAll(/hreflang="[^"]+" href="([^"]+)"/g)) {
    if (!targetExists(alternate[1])) failures.push(`Broken hreflang target in ${name}: ${alternate[1]}`)
  }
}

valuesByValue(indexable.map(({ file, value }) => ({ file, value })), 'Canonical')
valuesByValue(indexable.map(({ file, title }) => ({ file, value: title })), 'Title')
valuesByValue(indexable.map(({ file, description }) => ({ file, value: description })), 'Description')

if (failures.length) {
  console.error(failures.join('\n'))
  process.exit(1)
}

console.log(`Site checks passed for ${htmlFiles.length} routes (${indexable.length} indexable).`)
