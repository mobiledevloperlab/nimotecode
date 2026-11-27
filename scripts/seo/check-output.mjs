import assert from 'node:assert/strict'
import { gzipSync } from 'node:zlib'
import { readFileSync } from 'node:fs'
import productLinks from '../../docs/.vitepress/theme/data/product-links.json' with { type: 'json' }

const dist = 'docs/.vitepress/dist'
const site = 'https://nimotecode.com'
const read = path => readFileSync(`${dist}/${path}`, 'utf8')
const sitemap = new Set([...read('sitemap.xml').matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]))
const locales = new Map([['', 'en-US'], ['zh/', 'zh-CN'], ['ja/', 'ja-JP'], ['ko/', 'ko-KR'], ['es/', 'es-ES']])

const searchableCore = ['index.html', 'features.html', 'pro.html', 'download.html', 'docs.html',
  'docs/quick-start.html', 'docs/faq.html', 'releases/index.html']
const pages = new Map()
const visibleText = html => html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '')
  .replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&#x27;/g, "'")
  .replace(/\s+/g, ' ')
const routeFile = url => {
  const path = decodeURIComponent(new URL(url).pathname).slice(1)
  return path === '' || path.endsWith('/') ? `${path}index.html` : `${path}.html`
}

for (const url of sitemap) {
  const html = read(routeFile(url))
  const lang = html.match(/<html\b[^>]*\blang="([^"]+)"/)?.[1]
  const alternates = new Map()
  for (const [, language, href] of html.matchAll(/<link[^>]*\bhreflang="([^"]+)" href="([^"]+)"/g)) {
    assert.ok(!alternates.has(language), `${url}: duplicate hreflang ${language}`)
    alternates.set(language, new URL(href).href)
  }
  const schema = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .flatMap(([, json]) => JSON.parse(json))
  assert.ok(schema.length && lang, `${url}: missing JSON-LD or document language`)
  for (const item of schema) {
    assert.equal(item['@context'], 'https://schema.org', `${url}: schema context`)
    assert.ok(item['@type'], `${url}: schema type`)
    if (item['@type'] !== 'BreadcrumbList') continue
    for (const [index, crumb] of item.itemListElement.entries()) {
      assert.equal(crumb.position, index + 1, `${url}: breadcrumb position`)
      assert.ok(crumb.name?.trim(), `${url}: breadcrumb label`)
      assert.ok(sitemap.has(new URL(crumb.item).href), `${url}: breadcrumb points outside sitemap: ${crumb.item}`)
    }
    assert.equal(new URL(item.itemListElement.at(-1).item).href, url, `${url}: breadcrumb does not end at canonical`)
  }
  pages.set(url, { lang, alternates, schema })
}

for (const [url, { lang, alternates }] of pages) {
  if (!alternates.size) continue
  assert.equal(alternates.get(lang), url, `${url}: missing self hreflang`)
  if (alternates.has('x-default')) assert.equal(alternates.get('x-default'), alternates.get('en-US'), url)
  for (const [language, target] of alternates) {
    const alternate = pages.get(target)
    assert.ok(alternate, `${url}: hreflang outside sitemap: ${target}`)
    if (language === 'x-default') continue
    assert.equal(alternate.lang, language, target)
    assert.equal(alternate.alternates.get(lang), url, `${target}: missing reciprocal hreflang to ${url}`)
  }
}

for (const [prefix, lang] of locales) {
  for (const path of searchableCore) {
    const route = path.replace(/index\.html$/, '').replace(/\.html$/, '')
    const url = `${site}/${prefix}${route}`
    const page = pages.get(url)
    assert.equal(page?.lang, lang, `${url}: missing core language route`)
    assert.equal(page.alternates.size, locales.size + 1, `${url}: incomplete locale coverage`)
  }
  for (const route of ['', 'download']) {
    const url = `${site}/${prefix}${route}`
    const app = pages.get(url).schema.find(item => item['@type'] === 'SoftwareApplication')
    assert.equal(app?.['@id'], `${site}/#application`)
    assert.deepEqual(app.downloadUrl, [productLinks.android, productLinks.ios])
    assert.equal(app.offers.price, '0')
    assert.ok(!app.aggregateRating && !app.review, `${url}: unsupported ratings`)
  }
  for (const [route, count] of [['docs/faq', 6], ['android-ide', 4]]) {
    const url = `${site}/${prefix}${route}`
    const faq = pages.get(url).schema.find(item => item['@type'] === 'FAQPage')
    assert.equal(faq?.mainEntity.length, count, `${url}: FAQ coverage`)
    const body = visibleText(read(routeFile(url)))
    for (const { name, acceptedAnswer } of faq.mainEntity) {
      assert.ok(body.includes(name) && body.includes(acceptedAnswer.text), `${url}: FAQ differs from visible content: ${name}`)
    }
  }
  const download = read(`${prefix}download.html`)
  for (const url of Object.values(productLinks)) {
    assert.ok(download.includes(`href="${url}`), `${prefix}/download: missing SSR destination ${url}`)
  }
}

const references = ['llms.txt', 'llms-full.txt'].map(read)
for (const [index, file] of references.entries()) {
  assert.match(file, /^# NimoteCode\n\n> /)
  assert.doesNotMatch(file, /are Early Access features|\/use-cases\/(?:remote-hotfix|on-call-diagnostics|ai-agent)\b/)
  for (const [, href] of file.matchAll(/\]\((https:\/\/nimotecode\.com\/[^\s)]+)\)/g)) {
    assert.ok(sitemap.has(href) || (index === 0 && href === `${site}/llms-full.txt`), href)
  }
}
assert.notEqual(references[0], references[1])
for (const path of ['docs/account-subscription.html', 'pro.html', 'download.html', 'llms-full.txt']) {
  assert.match(read(path), /(?:14 days|14-day)/i, `${path}: trial length missing`)
}
assert.match(references[1], /public internet access is planned/i)
for (const locale of ['', 'zh/', 'ja/', 'ko/', 'es/']) {
  const connectGuide = read(`${locale}docs/connect.html`)
  assert.match(connectGuide, /github\.com\/mobiledevloperlab\/nimote-connect\/releases/)
  assert.match(connectGuide, /nimotecode\.com.*GitHub/)
  assert.match(connectGuide, /install\.ps1/)
  assert.doesNotMatch(connectGuide, /v0\.2\.0-local\.8b06897/)
}
assert.match(read('releases/2.5.0.html'), /Upcoming/)
assert.ok(![...sitemap].some(url => url.includes('/website-optimization/')))

const byteBudgets = { 'index.html': 28000, 'download.html': 20000, 'pro.html': 21000 }
for (const [route, limit] of Object.entries(byteBudgets)) {
  const html = read(route)
  const bytes = gzipSync(html).length
  assert.ok(bytes <= limit, `${route}: ${bytes} gzip HTML bytes exceeds ${limit}`)
  const initialAssets = new Set([...html.split('</head>')[0].matchAll(/(?:href|src)="(\/assets\/[^"]+\.(?:js|css))"/g)]
    .map(match => match[1].slice(1)))
  assert.ok(initialAssets.size > 0, `${route}: expected first-load JS/CSS entries`)
  const assetBytes = [...initialAssets].reduce((total, path) => total + gzipSync(read(path)).length, 0)
  assert.ok(assetBytes <= 250000, `${route}: ${assetBytes} gzip JS/CSS bytes exceeds 250000`)
  console.log(`${route}: ${bytes} gzip HTML bytes and ${assetBytes} gzip first-load JS/CSS bytes`)
}
console.log(`SEO output checks passed for ${pages.size} URLs across ${locales.size} locale routes.`)
