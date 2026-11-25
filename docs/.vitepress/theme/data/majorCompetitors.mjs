// A reviewed snapshot, not an automatically refreshed feed. Keep review dates
// honest: recheck official sources before advancing this date.
import { sourceEvidence } from './majorCompetitorEvidence.mjs'
import { comparisonTranslations } from './majorComparisonTranslations.mjs'
export const reviewedAt = '2026-11-25'
// Manual audit completion time; never replace this with build time.
export const reviewedAtUtc = '2026-11-25T13:50:25Z'
export const reviewWindowHours = 24
export const products = [
  ['NimoteCode', 'https://nimotecode.com/docs/host'],
  ['Blink Shell', 'https://docs.blink.sh/advanced/code'],
  ['Termius', 'https://www.termius.com/'],
  ['Acode', 'https://docs.acode.app/user-guide/'],
  ['Replit', 'https://docs.replit.com/features/platforms/mobile-app'],
  ['Codespaces', 'https://docs.github.com/en/codespaces/about-codespaces/what-are-codespaces']
]
const pair = (en, zh) => ({ en, zh })
const n = 'https://nimotecode.com/docs/'
const b = 'https://docs.blink.sh/'
const a = 'https://docs.acode.app/'
const r = 'https://docs.replit.com/features/'
const g = 'https://docs.github.com/en/codespaces/'
const t = 'https://www.termius.com/'
const cell = (en, zh = en, url = null) => {
  if (url && !sourceEvidence[url]) throw new Error(`Missing reviewed evidence: ${url}`)
  return { text: pair(en, zh), url, evidence: url ? { ...sourceEvidence[url], reviewedAtUtc } : null }
}
// Every positive/conditional cell links to the relevant first-party evidence.
const yes = url => cell('✅', '✅', url)
const partial = url => cell('◐', '◐', url)
const unknown = () => cell('—')
const host = () => cell('✅ Host · Pro', '✅ Host · Pro', n + 'host')
export const rows = [
  [pair('Android', 'Android'), [yes('https://nimotecode.com/download'), unknown(), yes(t + 'free-ssh-client-for-android'), yes(a + 'user-guide/'), yes(r + 'platforms/mobile-app'), cell('◐ Browser', '◐ 浏览器', g + 'about-codespaces/codespaces-features')]],
  [pair('iOS / iPadOS', 'iOS / iPadOS'), [yes('https://nimotecode.com/download'), yes(b), yes(t + 'free-ssh-client-for-iphone'), cell('— Coming soon', '— 待发布', 'https://acode.app/ai-coding-ios'), yes(r + 'platforms/mobile-app'), cell('◐ Browser', '◐ 浏览器', g + 'about-codespaces/codespaces-features')]],
  [pair('SSH terminal', 'SSH 终端'), [yes(n + 'ssh'), yes(b), yes(t + 'free-ssh-client-for-android'), yes('https://github.com/Acode-Foundation/Acode#readme'), unknown(), unknown()]],
  [pair('Mosh', 'Mosh'), [unknown(), yes(b + 'advanced/advanced-mosh'), yes(t + 'free-ssh-client-for-android'), unknown(), unknown(), unknown()]],
  [pair('Graphical code editor', '图形代码编辑器'), [yes(n + 'editor'), yes(b + 'advanced/code'), unknown(), yes(a + 'user-guide/'), yes(r + 'platforms/mobile-app'), yes(g + 'developing-in-a-codespace/developing-in-a-codespace')]],
  [pair('On-device Linux environment', '设备本地 Linux 环境'), [cell('✅ Android · Basic free', '✅ Android · 基础免费', n + 'local-linux'), unknown(), unknown(), cell('✅ Android', '✅ Android', a + 'user-guide/terminal'), unknown(), unknown()]],
  [pair('Graphical Git operations', 'Git 图形操作'), [cell('✅ Basic commits free', '✅ 基础提交免费', n + 'source-control'), partial(b + 'advanced/code'), unknown(), unknown(), cell('✅ Project Editor', '✅ 项目编辑器', r + 'workspace-tools/git-interface'), yes(g + 'developing-in-a-codespace/using-source-control-in-your-codespace')]],
  [pair('LSP code intelligence', 'LSP 智能提示'), [cell('✅ Basic free', '✅ 基础免费', n + 'lsp'), unknown(), unknown(), yes(a + 'user-guide/language-servers'), unknown(), cell('◐ Language extension', '◐ 语言扩展', 'https://code.visualstudio.com/docs/remote/codespaces')]],
  [pair('AI coding', 'AI 编程'), [cell('✅ Limited free Agent', '✅ 免费 Agent 有次数限制', n + 'ai'), unknown(), cell('◐ Command autocomplete', '◐ 命令补全', t + 'pricing'), cell('◐ Official plugin', '◐ 官方插件', a + 'tutorials/ai-agent'), yes(r + 'platforms/mobile-app'), cell('◐ Copilot extension', '◐ Copilot 扩展', g + 'reference/using-github-copilot-in-github-codespaces')]],
  [pair('VS Code extensions', 'VS Code 扩展'), [unknown(), partial(b + 'advanced/code'), unknown(), unknown(), unknown(), yes('https://code.visualstudio.com/docs/remote/codespaces')]],
  [pair('Develop on your own computer', '自有电脑远程开发'), [yes(n + 'ssh'), yes(b + 'advanced/code'), cell('◐ SSH terminal', '◐ SSH 终端', t + 'free-ssh-client-for-android'), partial(a + 'user-guide/remote-access'), unknown(), unknown()]],
  [pair('Persistent terminal sessions', '持久终端会话'), [host(), cell('◐ Mosh', '◐ Mosh', b + 'advanced/advanced-mosh'), cell('◐ Mosh', '◐ Mosh', t + 'free-ssh-client-for-android'), cell('◐ Android service', '◐ Android 服务', a + 'user-guide/terminal'), unknown(), cell('◐ Active codespace', '◐ 运行中工作区', g + 'about-codespaces/understanding-the-codespace-lifecycle')]],
  [pair('Agent session recovery and approvals', 'Agent 会话恢复与审批'), [host(), unknown(), unknown(), cell('◐ Official plugin', '◐ 官方插件', a + 'tutorials/ai-agent'), unknown(), unknown()]],
  [pair('Project task inbox', '项目任务收件箱'), [host(), unknown(), unknown(), unknown(), cell('✅ Cloud task board', '✅ 云端任务看板', r + 'agent/task-board'), unknown()]]
]
export const strengths = [
  ['Acode', pair('Android editor, Linux, plugins, AI and open-source ecosystem', 'Android 编辑器、Linux、插件、AI 与开源生态'), pair('Compare mobile IDE completeness; demonstrate Host workflows and remote Agent approvals', '对标移动 IDE 完整度，展示 Host 工作流与远程 Agent 审批'), pair('Very high', '极高')],
  ['Blink Shell', pair('Mosh, terminal and keyboard workflows, Blink Code', 'Mosh、终端与键盘工作流、Blink Code'), pair('Improve terminal usability; show Host and Git together', '提升终端体验，展示 Host 与 Git 集成'), pair('Very high', '极高')],
  ['Termius', pair('Host management, sync, SFTP, Mosh and team access', '主机管理、同步、SFTP、Mosh 与团队访问'), pair('Simplify connection setup and continuing real project work', '简化连接与继续处理真实项目的流程'), pair('High', '高')],
  ['GitHub Codespaces', pair('Hosted development environment and VS Code ecosystem', '托管开发环境与 VS Code 生态'), pair('Show development on the user’s existing computer and toolchain', '展示自有电脑与已有工具链的开发体验'), pair('Medium', '中')],
  ['Replit', pair('AI app creation, hosting and publishing', 'AI 应用生成、托管与发布'), pair('Focus on continuing existing projects with review and approvals', '聚焦已有项目的持续开发、审查与审批'), pair('Medium', '中')]
]
export const workflows = [
  [pair('Connect a phone to a computer', '手机连接电脑'), pair('SSH', 'SSH'), pair('SSH + Host workspace', 'SSH + Host 工作区')],
  [pair('Read project code', '查看项目代码'), pair('Often terminal tools or a separate editor', '通常使用终端工具或另配编辑器'), pair('Built-in graphical editor', '内置图形编辑器')],
  [pair('Edit and review changes', '修改代码并审查'), pair('Git CLI or other tools', 'Git CLI 或其他工具'), pair('Editor + Git Diff', '编辑器 + Git Diff')],
  [pair('Continue after leaving the app', '手机退出后继续运行'), pair('Host setup such as tmux or Mosh', '依赖 tmux、Mosh 等主机配置'), pair('Host-managed tasks and sessions', 'Host 管理的任务与会话')],
  [pair('Return to AI results', '回来查看 AI 结果'), pair('Reopen the CLI or reattach a session', '重新进入 CLI 或恢复会话'), pair('Recover compatible Agent conversations', '恢复兼容 Agent 的结构化对话')],
  [pair('Handle Agent approvals', '处理 Agent 审批'), pair('Depends on the CLI in use', '依赖所使用的 CLI'), pair('Compatible approvals in Host', 'Host 集中展示兼容审批')],
  [pair('Find work needing attention', '发现待处理任务'), pair('Check sessions or logs manually', '手动查看日志或会话'), pair('Task Inbox', 'Task Inbox')]
]
export const notes = [
  pair('This is a vendor-authored, documentation-based snapshot, reviewed on the date above (UTC), not a live feed or a performance benchmark. We have not tested every app on matching devices and store builds; documentation can precede a public release. ✅ means officially documented support, including named integrations; ◐ means partial support, an extension, a remote environment or setup is required; — means a corresponding native capability was not confirmed. Click a status for its official source. A dash does not rule out third-party solutions, and partial support does not imply the same experience.', '这是 NimoteCode 团队根据公开文档整理的快照，按上方日期（UTC）核实，并非实时数据源或性能评测。未对所有应用的相同设备及商店版本进行实测，文档也可能先于正式上架。✅ 表示官方明确支持（含注明的集成）；◐ 表示部分支持，或依赖插件、远程环境及配置；— 表示未确认有对应的原生能力。点击状态可查看官方来源。“—”不代表无法借助第三方工具实现，“◐”也不代表体验相同。'),
  pair('NimoteCode access labels follow the published plan comparison for the upcoming 2.5.0 release and the Host documentation. Check your installed version for account-specific access. With NimoteHost Community, recovery, approvals and Task Inbox depend on the Host version, configuration and compatible Agent. The computer, Host and managed process must stay running; a Host or OS restart does not restore the original process. NimoteHost, persistent remote terminals and cross-device AI session takeover require an active Pro entitlement, including a valid trial or Early Access grant. Basic Local Linux runs on supported Android devices. Development tool management and shared-folder imports require Pro. Free includes Git status, diffs, staging, unstaging and commits. Graphical push, pull, branch and stash operations, Git AI and advanced GitHub integration require Pro. Basic LSP completion, diagnostics and navigation are free with configured language tools; code actions, guided server installation and debugging need Pro. See Free and Pro for access boundaries.', 'NimoteCode 权益标签依据即将发布的 2.5.0 方案对比和 Host 文档。实际账号权益请以已安装版本为准。使用 NimoteHost 社区版时，恢复、审批与 Task Inbox 取决于 Host 版本、配置及 Agent 兼容性。电脑、Host 与托管进程需要持续运行；Host 或系统重启不会恢复原进程。NimoteHost、持久化远程终端与 AI 会话跨设备接管需要有效的 Pro 权益，包括有效试用和 Early Access。 支持的 Android 设备可免费运行基础本地 Linux。开发工具管理与共享目录导入需要 Pro。 Free 支持查看 Git 状态与差异、暂存、取消暂存和提交。图形化推送、拉取、分支、Stash、Git AI 及 GitHub 高级集成需要 Pro。基础 LSP 补全、诊断与导航免费，需配置语言工具；代码操作、引导安装语言服务器与调试需要 Pro。权限边界参见免费与 Pro。'),
  pair('Blink Code integrates VS Code services; documented repository editing and extension access depend on the connected environment. LSP and AI Agent workflows were not independently confirmed for Blink and are not credited merely because it can open a remote IDE. Its local Unix commands do not constitute a full Linux environment. Mosh roaming and tmux reattachment have different requirements from structured Agent recovery.', 'Blink Code 集成 VS Code 服务；已记录的仓库编辑和扩展访问取决于所连接的环境。Blink 的 LSP 和 AI Agent 工作流未获逐项确认，不因其可打开远程 IDE 就直接计为支持。本地 Unix 命令工具不等于完整 Linux 环境。Mosh 网络漫游、tmux 重附着与结构化 Agent 恢复各有不同条件。'),
  pair('Acode documents Android Alpine Linux and native LSP integration; language servers still need enabling or installation. Its official AI Agent requires version code 1002+ and a separate plugin with provider setup, saved chats and approvals. iPhone/iPad remains marked Coming soon; no generally released iOS capability is credited. Android terminal background execution depends on its foreground service and OS process management. Graphical Git operations were not confirmed; Git CLI access alone is insufficient evidence.', 'Acode 已明确提供 Android Alpine Linux 与原生 LSP 集成；具体语言服务器仍需启用或安装。官方 AI Agent 需要 version code 1002+、另装插件并配置服务商，提供会话保存与审批。iPhone/iPad 仍标为 Coming soon，不计作已正式发布的 iOS 能力。Android 终端后台运行受前台服务和系统进程管理约束。Git 图形操作尚未确认，不能仅凭可用 Git CLI 就计为支持。'),
  pair('Replit documents mobile project editing, a Git pane and Agent task review. Its SSH documentation describes connecting into a Replit cloud app, rather than a mobile SSH client for your own computer. Mobile LSP coverage, persistent terminal processes and structured Agent recovery with approvals were not confirmed. Its task board is explicitly documented, including mobile access through the Tasks pane. Codespaces is a cloud development environment accessed through a browser or VS Code; phone browser availability does not promise a native mobile app or identical usability. Copilot requires a separate extension and access. Codespaces persistence applies only to an active environment: idle timeout and the documented maximum lifetime stop processes. A cloud shell is not a native SSH client, and Copilot task management is not credited as a Codespaces-native inbox or Agent recovery feature.', 'Replit 官方已说明手机项目编辑、Git 面板与 Agent 任务审查；其 SSH 文档说明的是连接到 Replit 云端应用，并非连接自有电脑的手机 SSH 客户端。移动端 LSP、持久终端进程与带审批的结构化 Agent 恢复尚未确认；任务看板已有明确文档，手机可通过 Tasks 面板访问。Codespaces 是通过浏览器或 VS Code 访问的云开发环境；手机浏览器可访问不代表有原生移动应用或相同易用性。Copilot 需要单独扩展与权限。Codespaces 的持续运行仅限活动工作区，空闲超时和文档规定的最长运行时限会停止进程。云端 Shell 不等于原生 SSH 客户端，Copilot 任务管理也不计作 Codespaces 原生收件箱或 Agent 恢复能力。'),
  pair('The SSH workflow table describes a typical terminal-led setup, not every feature of Blink Shell or Termius. Remote development and AI coding are not exclusive to NimoteCode. The combination to evaluate is running work on your own computer while using your phone to inspect code, manage terminals, recover compatible Agent sessions and handle approvals.', 'SSH 场景表描述典型的终端工作流，不代表 Blink Shell 或 Termius 的全部功能。远程开发与 AI 编程并非 NimoteCode 独有。值得评估的是这组组合体验：在自己的电脑上运行开发任务，在手机上查看代码、管理终端、恢复兼容 Agent 会话并处理审批。')
]

for (const [locale, translation] of Object.entries(comparisonTranslations)) {
  if (translation.labels.length !== rows.length || translation.notes.length !== notes.length || translation.workflows.length !== workflows.length || translation.strengths.length !== strengths.length) {
    throw new Error(`${locale}: incomplete major comparison translation`)
  }
  rows.forEach(([label, cells], index) => {
    label[locale] = translation.labels[index]
    for (const cell of cells) {
      const symbol = cell.text.en.match(/^(✅|◐|—)/u)[0]
      const suffix = cell.text.en.slice(symbol.length).trim()
      if (suffix && !translation.suffixes[suffix]) throw new Error(`${locale}: missing status translation for ${suffix}`)
      cell.text[locale] = symbol + (suffix ? ` ${translation.suffixes[suffix]}` : '')
    }
  })
  notes.forEach((note, index) => { note[locale] = translation.notes[index] })
  workflows.forEach((row, index) => row.forEach((value, column) => { value[locale] = translation.workflows[index][column] }))
  strengths.forEach(([, ...values], index) => values.forEach((value, column) => { value[locale] = translation.strengths[index][column] }))
}
