import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const pages = [
  'android-ide', 'android-ssh-client', 'blink-shell-alternative', 'claude-code-from-phone',
  'code-from-phone', 'codex-from-phone', 'ipad-coding', 'iphone-ssh-client',
  'mobile-ai-coding', 'mobile-ide', 'remote-coding', 'ssh-ide', 'termius-alternative'
]
const stockPhrases = [/\bseamless(?:ly)?\b/i, /\brevolutionary\b/i, /\bgame[- ]changing\b/i, /\bunlock(?:s|ing)?\b/i]
const failures = []
const locales = ['', 'zh', 'ja', 'ko', 'es']

for (const page of pages) {
  const english = readFileSync(resolve('docs', `${page}.md`), 'utf8')
  for (const locale of locales) {
    const label = `${locale || 'en'}/${page}`
    const source = readFileSync(resolve('docs', locale, `${page}.md`), 'utf8')
    if (source.includes('<ImagePlaceholder')) failures.push(`${label}: replace ImagePlaceholder with an approved image before publishing`)
    if (/Replace with|Image placeholder/i.test(source)) failures.push(`${label}: contains unfinished media copy`)
    if (!/<figcaption>|<DocScreenshot\b[^>]*\bcaption="[^"]+"/.test(source)) failures.push(`${label}: needs a captioned editorial image`)
    if (/^noindex:\s*true\s*$/m.test(source)) failures.push(`${label}: product landing page must be indexable`)
    for (const field of ['title', 'description']) {
      const value = source.match(new RegExp(`^${field}:\\s*(.+)$`, 'm'))?.[1]
      if (!value) failures.push(`${label}: missing ${field}`)
      if (locale && value === english.match(new RegExp(`^${field}:\\s*(.+)$`, 'm'))?.[1]) {
        failures.push(`${label}: ${field} still uses the English metadata`)
      }
    }
    if (locale && /\]\(\/(?:docs\/|pro[)#?]|download[)#?])/.test(source)) failures.push(`${label}: link leaves the selected language`)
    if (!locale) for (const phrase of stockPhrases) if (phrase.test(source)) failures.push(`${label}: contains stock marketing language (${phrase})`)
  }
}

if (failures.length) {
  console.error(failures.join('\n'))
  process.exit(1)
}
console.log(`Editorial quality checks passed for ${pages.length * locales.length} product guides in ${locales.length} languages.`)
