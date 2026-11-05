import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const pages = [
  'android-ide', 'android-ssh-client', 'blink-shell-alternative', 'claude-code-from-phone',
  'code-from-phone', 'codex-from-phone', 'ipad-coding', 'iphone-ssh-client',
  'mobile-ai-coding', 'mobile-ide', 'remote-coding', 'ssh-ide', 'termius-alternative'
]
const stockPhrases = [/\bseamless(?:ly)?\b/i, /\brevolutionary\b/i, /\bgame[- ]changing\b/i, /\bunlock(?:s|ing)?\b/i]
const failures = []

for (const page of pages) {
  const file = resolve('docs', `${page}.md`)
  const source = readFileSync(file, 'utf8')
  if (source.includes('<ImagePlaceholder')) failures.push(`${page}: replace ImagePlaceholder with an approved image before publishing`)
  if (/Replace with|Image placeholder/i.test(source)) failures.push(`${page}: contains unfinished media copy`)
  if (!/<figcaption>|<ImagePlaceholder/.test(source)) failures.push(`${page}: needs a captioned editorial image`)
  for (const phrase of stockPhrases) if (phrase.test(source)) failures.push(`${page}: contains stock marketing language (${phrase})`)
}

if (failures.length) {
  console.error(failures.join('\n'))
  process.exit(1)
}
console.log(`Editorial quality checks passed for ${pages.length} English product guides.`)
