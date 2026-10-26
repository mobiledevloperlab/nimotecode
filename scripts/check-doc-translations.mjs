import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

// Structural parity complements editorial translation review. Keep the core
// guides synchronized without requiring literal translations of their prose.
const pages = [
  'account-subscription', 'ai', 'configuration', 'debug', 'editor', 'faq',
  'local-linux', 'lsp', 'notifications', 'plugins', 'quick-start', 'search',
  'security', 'settings', 'source-control', 'ssh', 'sync-cache', 'tasks', 'terminal'
]
const locales = ['zh', 'ja', 'ko', 'es']
const root = resolve('docs')
const failures = []
const extract = (text, pattern) => [...text.matchAll(pattern)].map(match => match[1] ?? match[0])
const read = (locale, page) => readFileSync(resolve(root, locale, 'docs', `${page}.md`), 'utf8')
const structures = {
  headings: /^(#{1,6}) /gm,
  steps: /^(\d+)\. /gm,
  screenshots: /<DocScreenshot file="([^"]+)"/g,
  images: /<img src="([^"]+)"/g,
  commands: /`([^`]+)`/g,
  layout: /<\/?div(?: class="[^"]+")?>/g
}

for (const page of pages) {
  const english = read('', page)
  for (const locale of locales) {
    const target = resolve(root, locale, 'docs', `${page}.md`)
    if (!existsSync(target)) {
      failures.push(`${locale}/${page}: missing translation`)
      continue
    }
    const translated = read(locale, page)
    for (const [label, pattern] of Object.entries(structures)) {
      if (JSON.stringify(extract(english, pattern)) !== JSON.stringify(extract(translated, pattern))) {
        failures.push(`${locale}/${page}: ${label} differ from English`)
      }
    }
    if (/\]\(\/docs(?:\/|\))/.test(translated)) {
      failures.push(`${locale}/${page}: documentation link leaves the current language`)
    }
    const englishCaptions = extract(english, /caption="([^"]+)"/g)
    const captions = extract(translated, /caption="([^"]+)"/g)
    if (captions.length !== englishCaptions.length || captions.some((caption, i) => caption === englishCaptions[i])) {
      failures.push(`${locale}/${page}: missing or untranslated screenshot caption`)
    }
  }
}

const screenshots = readdirSync(resolve(root, 'public/images/placeholders'))
  .filter(file => /\.(png|jpe?g|webp)$/i.test(file))
for (const locale of ['', ...locales]) {
  const used = new Set(pages.flatMap(page => extract(read(locale, page), structures.screenshots)))
  for (const file of screenshots) {
    if (!used.has(file)) failures.push(`${locale || 'en'}: screenshot has no core guide: ${file}`)
  }
  for (const file of used) {
    if (!screenshots.includes(file)) failures.push(`${locale || 'en'}: missing screenshot: ${file}`)
  }
}

if (failures.length) {
  console.error(failures.join('\n'))
  process.exitCode = 1
} else {
  console.log(`Translation structure checks passed: ${pages.length} guides in 5 languages; ${screenshots.length} screenshots covered in each language.`)
}
