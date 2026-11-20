import { readFileSync, writeFileSync } from 'node:fs'
import { reviewedAtUtc, products, rows, strengths, workflows, notes } from '../docs/.vitepress/theme/data/majorCompetitors.mjs'
import { comparisonLocales, comparisonTranslations } from '../docs/.vitepress/theme/data/majorComparisonTranslations.mjs'
import productCopy from '../docs/.vitepress/theme/i18n/product-comparison.json' with { type: 'json' }

const start = '<!-- major-comparison:start -->'
const end = '<!-- major-comparison:end -->'
const check = process.argv.includes('--check')
const table = (headers, values) => `| ${headers.join(' | ')} |\n| ${headers.map(() => '---').join(' | ')} |\n${values.map(row => `| ${row.join(' | ')} |`).join('\n')}`
const baseCopy = {
  heading: ['NimoteCode vs five major alternatives', 'NimoteCode vs 五款主要竞品'],
  reviewed: ['Evidence reviewed', '资料核实'],
  sources: ['Official documentation, websites and public release information', '依据官方文档、官网与公开发布信息'],
  tagline: ['Run development tasks on your own computer; use your phone to inspect code, manage terminals, recover compatible AI sessions and handle approvals.', '在自己的电脑上运行开发任务，在手机上查看代码、管理终端、恢复兼容 AI 会话并处理审批。'],
  core: ['Core capabilities', '核心功能对比'],
  requirements: ['Requirements and interpretation', '使用条件与对比说明'],
  access: ['NimoteCode access boundaries', 'NimoteCode 免费与 Pro 权限'],
  hostRequirements: ['Host requirements', 'Host 使用条件'],
  acodeIos: ['Acode iOS availability', 'Acode iOS 发布状态'],
  replitSsh: ['Replit SSH direction', 'Replit SSH 连接方向'],
  workflow: ['Continuing work from a phone', '从手机继续开发的差异'],
  scenario: ['Workflow', '使用场景'],
  traditional: ['Typical SSH setup', '典型 SSH 工作流'],
  strengths: ['Competitor strengths and product priorities', '竞品优势与产品改进优先级'],
  judgment: ['These priorities are product judgments by the NimoteCode team, not measured market shares or performance rankings. Feature claims can be checked using the official sources.', '以下优先级是 NimoteCode 团队的产品判断，不是市场份额或性能排名。功能依据可通过官方来源核对。'],
  competitor: ['Alternative', '竞品'],
  strength: ['Strength', '主要竞争点'],
  focus: ['NimoteCode focus', 'NimoteCode 改进重点'],
  priority: ['Priority', '优先级'],
  productRequirements: ['Product-specific requirements and evidence', '各产品的使用条件与依据'],
  readmeAnchor: ['## Guides and documentation', '## 文档与实用指南']
}
const readmes = { en: 'README.md', zh: 'README.zh-CN.md', ja: 'README.ja.md', ko: 'README.ko.md', es: 'README.es.md' }

for (const lang of comparisonLocales) {
  const prefix = lang === 'en' ? '' : `/${lang}`
  const ui = comparisonTranslations[lang]?.ui || Object.fromEntries(Object.entries(baseCopy).map(([key, values]) => [key, values[lang === 'zh' ? 1 : 0]]))
  for (const key of Object.keys(baseCopy)) if (!ui[key]) throw new Error(`${lang}: missing comparison copy ${key}`)
  const sourceUrl = url => url.replace(/^https:\/\/nimotecode\.com\/(docs\/|download)/, `https://nimotecode.com${prefix}/$1`)
  const requirements = notes.slice(1, 5).map(note => note[lang]).join('\n\n')
  const access = `[${ui.access}](https://nimotecode.com${prefix}/pro)`
  const workflow = `## ${ui.workflow}\n\n${table([ui.scenario, ui.traditional, 'NimoteCode + Host'], workflows.map(row => row.map(value => value[lang])))}\n\n${notes[5][lang]}`
  const strategy = `${ui.judgment}\n\n${table([ui.competitor, ui.strength, ui.focus, ui.priority], strengths.map(([name, ...values]) => [name, ...values.map(value => value[lang])]))}`

  // All five READMEs retain portable Markdown; websites share the interactive
  // component. Translation never changes statuses, URLs or audit timestamps.
  const readmeContent = `${start}
## ${ui.heading}

${ui.reviewed}: **${reviewedAtUtc.replace('T', ' ').replace('Z', '')} (UTC)** · ${ui.sources}

**${ui.tagline}**

${notes[0][lang]}

### ${ui.core}

${table([productCopy[lang].capability, ...products.map(([name, url]) => `[${name}](${sourceUrl(url)})`)], rows.map(([label, cells]) => [label[lang], ...cells.map(({ text, url }) => url ? `[${text[lang]}](${sourceUrl(url)})` : text[lang])]))}

### ${ui.requirements}

${requirements}

${access} · [${ui.hostRequirements}](https://nimotecode.com${prefix}/docs/host) · [${ui.acodeIos}](https://acode.app/ai-coding-ios) · [${ui.replitSsh}](https://docs.replit.com/features/workspace-tools/ssh)

${workflow.replace(/^## /, '### ')}

### ${ui.strengths}

${strategy}
${end}`

  const siteContent = `${start}
<ProductComparison full />

<details class="major-comparison-details">
<summary>${ui.productRequirements}</summary>

${requirements}

${access}

</details>

${workflow}

<details class="major-comparison-details">
<summary>${ui.strengths}</summary>

${strategy}

</details>
${end}`

  for (const [path, block] of [[readmes[lang], readmeContent], [`docs/${prefix ? `${lang}/` : ''}compare/mobile-ai-development-tools.md`, siteContent]]) {
    const original = readFileSync(path, 'utf8')
    let updated
    if (original.includes(start)) {
      if (!original.includes(end)) throw new Error(`${path}: missing comparison end marker`)
      updated = original.slice(0, original.indexOf(start)) + block + original.slice(original.indexOf(end) + end.length)
    } else if (path.startsWith('README')) {
      if (!original.includes(ui.readmeAnchor)) throw new Error(`${path}: missing insertion point`)
      updated = original.replace(ui.readmeAnchor, `${block}\n\n${ui.readmeAnchor}`)
    } else throw new Error(`${path}: add comparison markers first`)
    if (check) {
      if (updated !== original) throw new Error(`${path}: stale comparison; run npm run compare:sync`)
    } else if (updated !== original) writeFileSync(path, updated)
  }
}
console.log(`Major comparison synchronized: 6 products, 14 capabilities, ${comparisonLocales.length} README and website languages.`)
