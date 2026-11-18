import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const root = 'docs/.vitepress/'
const translations = JSON.parse(readFileSync(`${root}theme/i18n/explore.json`, 'utf8'))
const latestVersion = readFileSync(`${root}theme/data/releases.ts`, 'utf8').match(/"version":\s*"([^"]+)"/)[1]
const read = path => readFileSync(`${root}dist/${path}`, 'utf8')
const links = html => [...html.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map(match => match[1].replaceAll('&amp;', '&'))

for (const [locale, copy] of Object.entries(translations)) {
  const prefix = locale === 'en' ? '' : `/${locale}`
  const filePrefix = prefix ? `${locale}/` : ''
  const expected = ['features', 'pro', 'resources/', 'docs/quick-start', 'releases/', 'download'].map(path => `${prefix}/${path}`)
  for (const page of ['index.html', 'features.html', 'pro.html', 'resources/index.html', 'docs/quick-start.html', 'use-cases/index.html', 'compare/mobile-ai-development-tools.html']) {
    const html = read(`${filePrefix}${page}`)
    const menu = html.match(/<nav\b[^>]*class="VPNavBarMenu menu"[^>]*>([\s\S]*?)<\/nav>/)?.[1]
    assert.ok(menu, `${locale}/${page}: primary navigation missing`)
    assert.deepEqual(links(menu).map(href => href.split('?')[0]), expected, `${locale}/${page}: primary destinations changed`)
    if (/^(resources|use-cases|compare)\//.test(page)) {
      assert.ok(new RegExp(`class="[^"]*VPNavBarMenuLink active" href="${prefix}/resources/"`).test(menu), `${locale}/${page}: Explore must remain active`)
    }
  }

  const hub = read(`${filePrefix}resources/index.html`)
  assert.equal((hub.match(/<h1(?:\s|>)/g) || []).length, 1, `${locale}: hub needs one main heading`)
  for (const section of copy.sections) {
    assert.ok(hub.includes(`id="${section.id}"`), `${locale}: missing topic destination`)
    for (const item of section.items) {
      const href = item.link === '/blog/' && !['en', 'zh'].includes(locale) ? '/blog/' : prefix + item.link
      assert.ok(hub.includes(`href="${href}"`), `${locale}: missing guide ${item.link}`)
      assert.ok(hub.includes(item.title), `${locale}: guide title missing`)
    }
  }
  const footer = hub.match(/<footer class="nimote-site-footer">([\s\S]*?)<\/footer>/)?.[1]
  assert.ok(footer, `${locale}: shared footer missing`)
  const footerLinks = links(footer).filter(href => href.startsWith('/'))
  assert.equal(new Set(footerLinks).size, footerLinks.length, `${locale}: duplicate footer destinations`)
  assert.ok(footerLinks.includes(`${prefix}/pro`), `${locale}: footer Pro link missing`)

  // Historical notes must not display the current release's metadata or jump links.
  for (const version of ['2.1.0', '2.2.0']) {
    assert.ok(!read(`${filePrefix}releases/${version}.html`).includes('class="release-detail-header"'), `${locale}/${version}: misleading current-version header`)
  }
  assert.ok(read(`${filePrefix}releases/index.html`).includes(latestVersion), `${locale}: current release missing from archive`)
}

console.log('Explore, Pro, locale navigation, footer destinations and release metadata verified in 5 languages.')
