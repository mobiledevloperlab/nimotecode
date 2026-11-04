import { readFileSync, writeFileSync } from 'node:fs'
import { competitors, accessNotes, featureRows, statusLabels, statusSymbols, REVIEW_DATE } from '../docs/.vitepress/theme/data/mobileDevelopmentCompetitors.ts'

// Keep the article's readable tables tied to the same evidence as /compare.
const start = '<!-- mobile-tool-tables:start -->'
const end = '<!-- mobile-tool-tables:end -->'
const escape = text => text.replaceAll('|', '&#124;').replaceAll('\n', ' ')
const table = (headers, rows, matrix = false) => `<div class="tool-comparison${matrix ? ' tool-comparison-matrix' : ''}">\n\n| ${headers.join(' | ')} |\n| ${headers.map(() => '---').join(' | ')} |\n${rows.map(row => `| ${row.map(escape).join(' | ')} |`).join('\n')}\n\n</div>`
const environments = {
  nimotecode: ['Android / iPhone / iPad', 'Device files, SSH host, or supported Android Local Linux', '设备文件、SSH 主机，或受支持的 Android Local Linux'],
  termius: ['Android / iPhone / iPad', 'SSH host; host tools run remotely', 'SSH 主机；项目工具在远端运行'],
  'blink-shell': ['iPhone / iPad', 'Local/remote files; remote terminal or configured Code environment', '本地或远程文件；远程终端或已配置的 Code 环境'],
  redock: ['Android / iPhone / iPad', 'SSH/Mosh host; agents and tmux run on the host', 'SSH/Mosh 主机；Agent 与 tmux 在主机运行'],
  orca: ['iOS / Android Beta', 'Paired Orca desktop or remote Orca Server', '配对的 Orca 桌面端或远程 Orca Server'],
  servercc: ['Android / iPhone / iPad', 'SSH host; agents and persistent sessions run on the host', 'SSH 主机；Agent 与持续会话在主机运行'],
  moshi: ['iOS / Android', 'SSH/Mosh host; advanced views require moshi-hook', 'SSH/Mosh 主机；进阶视图需要 moshi-hook']
}
function matrix(keys, locale) {
  return table([locale === 'zh' ? '能力' : 'Capability', ...competitors.map(p => p.name)], keys.map(key => {
    const row = featureRows.find(row => row.key === key)
    return [row.label[locale], ...competitors.map(product => {
      const cell = product.features[key]
      const label = `${statusSymbols[cell.status]} ${statusLabels[locale][cell.status]}`
      const source = cell.evidence ? `[${label}](${cell.evidence.url})` : label
      return source + (cell.requiresPro ? ' · P' : '') + (cell.requiresHostSetup ? ' · H' : '')
    })]
  }), true)
}
for (const locale of ['zh', 'en']) {
  const zh = locale === 'zh'
  const path = `docs/${zh ? 'zh/' : ''}blog/best-ssh-clients.md`
  const original = readFileSync(path, 'utf8')
  const block = `${start}
## ${zh ? '七款工具横向对比：先看差异，再读评测' : 'Seven tools side by side: compare before you read'}

${zh ? `资料核实：**${REVIEW_DATE}**。以下四组表与完整 compare 页使用同一份能力和权益数据。手机上可横向滑动表格；点击能力状态可查看对应官方依据。` : `Evidence reviewed: **${REVIEW_DATE}**. These four tables use the same capability and access data as the full comparison. Scroll wide tables horizontally on a phone; capability links open the official evidence.`}

${zh ? '**图例：** ✓ 原生；◎ 集成；⌘ 仅通过 CLI；◐ 有条件；? 未核实（不代表不支持）；— 官方明确不支持。**P** 表示该能力或其进阶操作需要 Pro，**H** 表示需要主机工具或运行时配置。没有 P 不等于免费，请同时看第四张权益表。' : '**Legend:** ✓ Native; ◎ Integrated; ⌘ CLI-only; ◐ Conditional; ? Not verified (not an absence claim); — Explicitly unsupported. **P** means the capability or its advanced operations require Pro; **H** means host tooling/runtime setup. No P does not establish free access; read the fourth table too.'}

### ${zh ? '1. 平台与执行环境' : '1. Platforms and execution environment'}

${table([zh ? '产品' : 'Product', zh ? '移动平台' : 'Mobile platforms', zh ? '项目与命令在哪里运行' : 'Where projects and commands live'], competitors.map(p => [`[${p.name}](${p.website})`, environments[p.id][0], environments[p.id][zh ? 2 : 1]]))}

${zh ? '**先排除环境不合适的选项：** Blink Shell 面向 iPhone / iPad；Orca 移动端依赖配对运行时；NimoteCode 的 Local Linux 仅限兼容的 Android 设备。SSH 工作区需要可访问的主机，普通本地文件夹不提供 Linux 工具链。' : '**Filter by environment first:** Blink Shell targets iPhone/iPad; Orca Mobile needs a paired runtime; NimoteCode Local Linux requires compatible Android hardware. SSH workspaces need a reachable host, and an ordinary local folder is not a Linux toolchain.'}

### ${zh ? '2. SSH、代码编辑与 Git：能否自己完成修改' : '2. SSH, editing and Git: can you make the change yourself?'}

${matrix(['nativeSsh','nativeEditor','gitUi','lsp','debugger','androidLinux'], locale)}

${zh ? 'NimoteCode 的 Git 状态、Diff 与历史免费，分支与写入操作需 Early Access Pro。Blink Code 是编辑器集成，Git / LSP 依赖接入的仓库或远程 IDE。Moshi 的 Diff 需 Pro 与主机 hook，当前所引文档说明的是 iOS 视图。Orca“不是完整移动编辑器”的结论仅针对移动 Companion，不针对其桌面编辑器。' : 'NimoteCode Git status, diffs and history are free; branch operations and writes need Early Access Pro. Blink Code is an editor integration, with Git/LSP depending on the repository or remote IDE. Moshi diff needs Pro and a host hook; its cited viewer guide covers iOS. Orca’s editor limitation applies to its mobile companion, not its desktop editor.'}

### ${zh ? '3. AI、预览与任务继续运行' : '3. AI, previews and continuing work'}

${matrix(['builtInAgent','externalCli','agentUi','acpMcp','webPreview','hostPersistence'], locale)}

${zh ? '“外部 CLI Agent”表示能使用主机上的工具，不等于手机内置模型。ACP / MCP 一行必须区分协议：NimoteCode 此处依据为 SSH 上的 ACP；ServerCC 此处依据为五种主机 Agent 的 MCP 配置。Moshi 收件箱监控和操作权限不同，前 5 次操作试用后需 Pro。tmux、Orca Server 等仍依赖主机持续运行；问号不代表不能手动配置。' : 'External CLI access does not mean an on-device model. Read the protocols separately: NimoteCode’s cited evidence covers ACP over SSH; ServerCC’s covers MCP configuration for five host agents. Moshi monitoring and inbox actions have different access rules, with Pro required after five trial actions. tmux and Orca Server still need a running host; a question mark does not rule out manual setup.'}

### ${zh ? '4. 免费版与付费边界：哪些能力需要额外投入' : '4. Free versus paid: what requires additional access?'}

${table([zh ? '产品' : 'Product', zh ? '免费、试用与进阶权益' : 'Free, trial and advanced access', zh ? '核对来源' : 'Check the source'], competitors.map(p => [p.name, accessNotes[p.id].note[locale], `[${zh ? '官方说明' : 'Official terms'}](${accessNotes[p.id].evidence.url})`]))}

${zh ? '**应用权益、主机和模型服务分开计算。**能免费安装应用，不代表包含云主机、Agent 订阅或模型额度。这里比较权限边界；实际价格以账号、地区和购买渠道的结算界面为准。' : '**App access, hosting and model services are separate costs.** A free app download does not include a cloud host, agent subscription or model credits. This compares access boundaries; checkout determines the price for your account, region and channel.'}
${end}`
  let updated
  if (original.includes(start)) updated = original.slice(0, original.indexOf(start)) + block + original.slice(original.indexOf(end) + end.length)
  else {
    const heading = zh ? '## 先看你想在手机上完成什么' : '## Choose the job before the app'
    updated = original.replace(heading, block + '\n\n' + heading)
  }
  if (process.argv.includes('--check')) {
    if (updated !== original) throw new Error(`${path}: stale tables; run node scripts/sync-blog-comparison.mjs`)
  } else writeFileSync(path, updated)
}
console.log('Blog comparison tables match the shared comparison data (2 languages).')
