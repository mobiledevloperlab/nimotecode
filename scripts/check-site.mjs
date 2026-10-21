import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { resolve, relative, dirname } from 'node:path'

const dist = resolve(process.cwd(), 'docs/.vitepress/dist')
const site = 'https://nimotecode.com'
const failures = []
const redirectRules = readFileSync(resolve(process.cwd(), 'docs/public/_redirects'), 'utf8')
  .split('\n').map((line) => line.trim()).filter((line) => line && !line.startsWith('#'))
  .map((line) => line.split(/\s+/))
const redirects = new Map(redirectRules.filter(([source]) => !source.includes('*'))
  .map(([source, target]) => [source, target]))
const wildcardRedirects = redirectRules
  .filter(([source]) => source.includes('*'))
  .map(([source, target]) => ({ source, target }))

function redirectTarget(pathname) {
  const exact = redirects.get(pathname)
  if (exact) return exact

  for (const { source, target } of wildcardRedirects) {
    // The standard _redirects syntax supports a single splat. Keep the
    // checker aligned with the host so valid locale fallbacks are not
    // reported as missing static files.
    const [prefix, suffix] = source.split('*')
    if (!pathname.startsWith(prefix) || !pathname.endsWith(suffix)) continue
    const splat = pathname.slice(prefix.length, pathname.length - suffix.length || undefined)
    return target.replaceAll(':splat', splat)
  }
  return null
}

function files(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = resolve(directory, entry.name)
    return entry.isDirectory() ? files(path) : [path]
  })
}

function outputFile(href, from = '/') {
  const url = new URL(href, `${site}${from}`)
  if (url.origin !== site) return null
  const normalized = decodeURIComponent(url.pathname).replace(/^\//, '').replace(/\/$/, '')
  return [
    resolve(dist, normalized || 'index.html'),
    resolve(dist, `${normalized}.html`),
    resolve(dist, normalized, 'index.html')
  ].find((file) => file.startsWith(`${dist}/`) && existsSync(file) && statSync(file).isFile()) || null
}

function targetExists(href, from = '/', seen = new Set()) {
  const url = new URL(href, `${site}${from}`)
  if (url.origin !== site) return true
  if (seen.has(url.pathname)) return false
  seen.add(url.pathname)
  const redirect = redirectTarget(url.pathname)
  if (redirect) return targetExists(redirect, '/', seen)
  return Boolean(outputFile(url.href))
}

for (const [source, target, status] of redirectRules) {
  if (!['301', '302', '307', '308'].includes(status)) failures.push(`Invalid redirect status: ${source}`)
  if (!source.includes('*') && !targetExists(target, '/', new Set([source]))) {
    failures.push(`Broken or cyclic redirect: ${source} -> ${target}`)
  }
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
  for (const match of html.matchAll(/(?:href|src|poster)="([^"]+)"/g)) {
    const href = match[1].replaceAll('&amp;', '&')
    if (/^(?:mailto:|tel:|#|data:|javascript:)/.test(href)) continue
    if (!targetExists(href, `/${name}`)) failures.push(`Broken internal asset/link in ${name}: ${href}`)
  }

  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)
  const title = html.match(/<title>([^<]+)<\/title>/)
  const description = html.match(/<meta name="description" content="([^"]*)"/)
  const isNoindex = /<meta name="robots" content="noindex, follow"/.test(html)
  const isDocs = /^(?:(?:zh|ja|ko|es)\/)?(?:docs|blog|use-cases)(?:\/|\.html|$)/.test(name)

  if (!isDocs && /(?:VPSidebar|VPDocAside|VPDocFooter)/.test(html)) {
    failures.push(`Marketing page contains content-layout chrome: ${name}`)
  }
  if (canonical && (!targetExists(canonical[1]) || new URL(canonical[1]).search || new URL(canonical[1]).hash || new URL(canonical[1]).origin !== site)) failures.push(`Invalid canonical in ${name}: ${canonical[1]}`)
  if (!isNoindex) indexable.push({ file: name, value: canonical?.[1], title: title?.[1], description: description?.[1] })

  for (const alternate of html.matchAll(/hreflang="[^"]+" href="([^"]+)"/g)) {
    if (!targetExists(alternate[1])) failures.push(`Broken hreflang target in ${name}: ${alternate[1]}`)
  }
}

valuesByValue(indexable.map(({ file, value }) => ({ file, value })), 'Canonical')
valuesByValue(indexable.map(({ file, title }) => ({ file, value: title })), 'Title')
valuesByValue(indexable.map(({ file, description }) => ({ file, value: description })), 'Description')

const sitemap = readFileSync(resolve(dist, 'sitemap.xml'), 'utf8')
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
const canonicalUrls = new Set(indexable.filter(({ value }) => value).map(({ value }) => new URL(value).href))
if (!sitemapUrls.length) failures.push('Sitemap has no URLs')
if (new Set(sitemapUrls).size !== sitemapUrls.length) failures.push('Sitemap has duplicate URLs')
for (const url of sitemapUrls) {
  const path = new URL(url).pathname
  if (redirects.has(path) || !canonicalUrls.has(url) || !outputFile(url)) {
    failures.push(`Sitemap URL is redirected, missing or not an indexable canonical: ${url}`)
  }
}
for (const url of canonicalUrls) {
  if (!sitemapUrls.includes(url)) failures.push(`Indexable canonical missing from sitemap: ${url}`)
}

// GitHub tutorials live outside the VitePress build. Check their relative links
// and media here as well. Fragment navigation is checked in the browser review.
const repoDocs = [resolve('README.md'), resolve('README.zh-CN.md'),
  ...files(resolve('resources')), ...files(resolve('examples'))].filter((file) => file.endsWith('.md'))
const bodies = new Map()
for (const file of repoDocs) {
  const source = readFileSync(file, 'utf8')
  const normalized = source.replace(/\s+/g, ' ').trim()
  if (bodies.has(normalized)) failures.push(`Duplicate document: ${relative(process.cwd(), file)}`)
  bodies.set(normalized, file)
  for (const match of source.matchAll(/\]\(([^\s)]+)\)|(?:href|src|poster)="([^"]+)"/g)) {
    const href = match[1] || match[2]
    if (/^(?:https?:|mailto:|data:|#)/.test(href)) continue
    const target = resolve(dirname(file), decodeURIComponent(href.split(/[?#]/)[0]))
    if (!existsSync(target)) failures.push(`Broken repository link in ${relative(process.cwd(), file)}: ${href}`)
  }
}

if (failures.length) {
  console.error(failures.join('\n'))
  process.exit(1)
}

console.log(`Site checks passed for ${htmlFiles.length} routes (${indexable.length} indexable), ${sitemapUrls.length} sitemap URLs and ${repoDocs.length} repository documents.`)
