import { readFileSync, writeFileSync } from 'node:fs'
import { reviewedAt, products, rows, strengths, workflows, notes } from '../docs/.vitepress/theme/data/majorCompetitors.mjs'

const start = '<!-- major-comparison:start -->'
const end = '<!-- major-comparison:end -->'
const check = process.argv.includes('--check')
const table = (headers, values) => `| ${headers.join(' | ')} |\n| ${headers.map(() => '---').join(' | ')} |\n${values.map(row => `| ${row.join(' | ')} |`).join('\n')}`

for (const lang of ['en', 'zh']) {
  const zh = lang === 'zh'
  const choose = (en, cn) => zh ? cn : en
  const prefix = zh ? '/zh' : ''
  const sourceUrl = url => zh ? url.replace('https://nimotecode.com/docs/', 'https://nimotecode.com/zh/docs/').replace('https://nimotecode.com/download', 'https://nimotecode.com/zh/download') : url
  const heading = choose('NimoteCode vs five major alternatives', 'NimoteCode vs 五款主要竞品')
  const content = `${start}
## ${heading}

${choose('Evidence reviewed', '资料核实')}：**${reviewedAt} (UTC)** · ${choose('Official documentation, websites and public release information', '依据官方文档、官网与公开发布信息')}。

**${choose('Run development tasks on your own computer; use your phone to inspect code, manage terminals, recover compatible AI sessions and handle approvals.', '在自己的电脑上运行开发任务，在手机上查看代码、管理终端、恢复兼容 AI 会话并处理审批。')}**

${notes[0][lang]}

### ${choose('Core capabilities', '核心功能对比')}

${table([choose('Capability', '功能'), ...products.map(([name, url]) => `[${name}](${sourceUrl(url)})`)], rows.map(([label, cells]) => [label[lang], ...cells.map(({ text, url }) => url ? `[${text[lang]}](${sourceUrl(url)})` : text[lang])]))}

### ${choose('Requirements and interpretation', '使用条件与对比说明')}

${notes.slice(1, 5).map(note => note[lang]).join('\n\n')}

[${choose('NimoteCode access boundaries', 'NimoteCode 免费与 Pro 权限')}](${`https://nimotecode.com${prefix}/pro`}) · [${choose('Host requirements', 'Host 使用条件')}](${`https://nimotecode.com${prefix}/docs/host`}) · [${choose('Acode iOS availability', 'Acode iOS 发布状态')}](https://acode.app/ai-coding-ios) · [${choose('Replit SSH direction', 'Replit SSH 连接方向')}](https://docs.replit.com/features/workspace-tools/ssh)

### ${choose('Continuing work from a phone', '从手机继续开发的差异')}

${table([choose('Workflow', '使用场景'), choose('Typical SSH setup', '典型 SSH 工作流'), 'NimoteCode + Host'], workflows.map(row => row.map(value => value[lang])))}

${notes[5][lang]}

### ${choose('Competitor strengths and product priorities', '竞品优势与产品改进优先级')}

${choose('The following priorities are the NimoteCode team’s product judgments, not measured market shares or performance rankings. Feature claims can be checked using the sources above.', '以下优先级是 NimoteCode 团队的产品判断，不是市场份额或性能排名。功能依据可通过上表官方来源核对。')}

${table([choose('Alternative', '竞品'), choose('Strength', '主要竞争点'), choose('NimoteCode focus', 'NimoteCode 改进重点'), choose('Priority', '优先级')], strengths.map(([name, ...values]) => [name, ...values.map(value => value[lang])]))}
${end}`

  for (const path of [zh ? 'README.zh-CN.md' : 'README.md', `docs/${zh ? 'zh/' : ''}compare/mobile-ai-development-tools.md`]) {
    const original = readFileSync(path, 'utf8')
    let updated
    if (original.includes(start)) {
      if (!original.includes(end)) throw new Error(`${path}: missing comparison end marker`)
      updated = original.slice(0, original.indexOf(start)) + content + original.slice(original.indexOf(end) + end.length)
    } else if (path.startsWith('README')) {
      const anchor = zh ? '## 文档与实用指南' : '## Guides and documentation'
      if (!original.includes(anchor)) throw new Error(`${path}: missing insertion point`)
      updated = original.replace(anchor, `${content}\n\n${anchor}`)
    } else throw new Error(`${path}: add comparison markers first`)
    if (check) {
      if (updated !== original) throw new Error(`${path}: stale comparison; run npm run compare:sync`)
    } else if (updated !== original) writeFileSync(path, updated)
  }
}
console.log('Major comparison synchronized: 6 products, 14 capabilities, English/Chinese README and website.')
