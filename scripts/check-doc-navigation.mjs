import assert from 'node:assert/strict'
import { readFileSync, readdirSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve('docs')
const navigation = JSON.parse(readFileSync(resolve(root, '.vitepress/theme/i18n/docs-navigation.json'), 'utf8'))
const routes = navigation.groups.flatMap(group => group.routes)
assert.equal(new Set(routes).size, routes.length, 'A document must have one sidebar destination')

function documents(directory, prefix = '') {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = `${prefix}${entry.name}`
    return entry.isDirectory() ? documents(resolve(directory, entry.name), `${path}/`)
      : entry.name.endsWith('.md') ? [path.slice(0, -3)] : []
  })
}

for (const [locale, copy] of Object.entries(navigation.locales)) {
  const prefix = locale === 'en' ? '' : `/${locale}`
  const localeRoot = resolve(root, locale === 'en' ? '' : locale)
  const inventory = ['', ...documents(resolve(localeRoot, 'docs'))].sort()
  assert.deepEqual([...routes].sort(), inventory, `${locale}: every published document must be reachable from the sidebar`)
  assert.equal(copy.groups.length, navigation.groups.length, `${locale}: missing group translation`)
  for (const route of routes) {
    assert.ok(copy.pages[route]?.trim(), `${locale}/${route}: missing navigation label`)
  }
  // The overview and specialized guides must all receive the same complete menu.
  for (const page of ['docs', 'docs/quick-start', 'docs/host/sessions', 'docs/local-linux/getting-started']) {
    const output = resolve(root, '.vitepress/dist', locale === 'en' ? '' : locale, `${page}.html`)
    const html = readFileSync(output, 'utf8')
    const sidebar = html.match(/<aside\b[^>]*class="[^"]*\bVPSidebar\b[^"]*"[^>]*>([\s\S]*?)<\/aside>/)?.[1]
    assert.ok(sidebar, `${locale}/${page}: documentation sidebar missing`)
    const destinations = [...sidebar.matchAll(/<a\b[^>]*href="([^"]+)"/g)]
      .map(match => match[1]).filter(link => link.startsWith(`${prefix}/docs`))
    assert.equal(new Set(destinations).size, destinations.length, `${locale}/${page}: duplicate sidebar destination`)
    assert.deepEqual([...destinations].sort(), routes.map(route => `${prefix}/docs${route ? `/${route}` : ''}`).sort(), `${locale}/${page}: sidebar is incomplete or leaves the selected language`)
  }
}
console.log(`Documentation navigation verified: ${routes.length} destinations in every language; overview and specialized sidebars are complete.`)
