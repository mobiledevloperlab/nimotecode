// A reviewed snapshot, not an automatically refreshed feed. Keep review dates
// honest: recheck official sources before advancing this date.
export const reviewedAt = '2026-11-19'
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
const cell = (en, zh = en, url = null) => ({ text: pair(en, zh), url })
// Every positive/conditional cell links to the relevant first-party evidence.
const yes = url => cell('✅', '✅', url)
const partial = url => cell('◐', '◐', url)
const unknown = () => cell('—')
const host = () => cell('✅ Host', '✅ Host', n + 'host')
export const rows = [
  [pair('Android', 'Android'), [yes('https://nimotecode.com/download'), unknown(), yes(t), yes(a + 'user-guide/'), yes(r + 'platforms/mobile-app'), partial(g + 'developing-in-a-codespace/developing-in-a-codespace')]],
  [pair('iOS / iPadOS', 'iOS / iPadOS'), [yes('https://nimotecode.com/download'), yes(b), yes(t), cell('◐ Beta / soon', '◐ Beta / 待发布', 'https://acode.app/ai-coding-ios'), yes(r + 'platforms/mobile-app'), partial(g + 'developing-in-a-codespace/developing-in-a-codespace')]],
  [pair('SSH terminal', 'SSH 终端'), [yes(n + 'ssh'), yes(b), yes(t), yes('https://github.com/Acode-Foundation/Acode#readme'), unknown(), cell('◐ Cloud shell', '◐ 云端 Shell', g + 'developing-in-a-codespace/developing-in-a-codespace')]],
  [pair('Mosh', 'Mosh'), [unknown(), yes(b + 'advanced/advanced-mosh'), yes(t + 'pricing'), unknown(), unknown(), unknown()]],
  [pair('Graphical code editor', '图形代码编辑器'), [yes(n + 'editor'), yes(b + 'advanced/code'), unknown(), yes(a + 'user-guide/'), yes(r + 'platforms/mobile-app'), yes(g + 'developing-in-a-codespace/developing-in-a-codespace')]],
  [pair('On-device Linux environment', '设备本地 Linux 环境'), [cell('✅ Android', '✅ Android', n + 'local-linux'), cell('◐ Unix tools', '◐ Unix 工具', b + 'advanced/unix-roundup'), unknown(), cell('✅ Android', '✅ Android', a + 'user-guide/terminal'), unknown(), unknown()]],
  [pair('Graphical Git operations', 'Git 图形操作'), [yes(n + 'source-control'), partial(b + 'advanced/code'), unknown(), partial('https://acode.app/llms.txt'), yes(r + 'workspace-tools/git-interface'), yes(g + 'developing-in-a-codespace/using-source-control-in-your-codespace')]],
  [pair('LSP code intelligence', 'LSP 智能提示'), [yes(n + 'lsp'), partial(b + 'advanced/code'), unknown(), yes(a + 'user-guide/language-servers'), partial(r + 'platforms/mobile-app'), yes(g + 'developing-in-a-codespace/developing-in-a-codespace')]],
  [pair('AI coding', 'AI 编程'), [yes(n + 'ai'), partial(b + 'advanced/code'), partial(t + 'pricing'), cell('◐ Official plugin', '◐ 官方插件', a + 'tutorials/ai-agent'), yes(r + 'platforms/mobile-app'), partial(g + 'developing-in-a-codespace/developing-in-a-codespace')]],
  [pair('VS Code extensions', 'VS Code 扩展'), [unknown(), partial(b + 'advanced/code'), unknown(), unknown(), unknown(), yes(g + 'developing-in-a-codespace/developing-in-a-codespace')]],
  [pair('Develop on your own computer', '自有电脑远程开发'), [yes(n + 'ssh'), yes(b + 'advanced/code'), partial(t), partial('https://github.com/Acode-Foundation/Acode#readme'), unknown(), unknown()]],
  [pair('Persistent terminal sessions', '持久终端会话'), [host(), partial(b + 'advanced/advanced-mosh'), partial(t + 'pricing'), partial(a + 'user-guide/terminal'), partial(r + 'workspace-tools/ssh'), partial(g + 'developing-in-a-codespace/developing-in-a-codespace')]],
  [pair('Agent session recovery and approvals', 'Agent 会话恢复与审批'), [host(), partial(b + 'advanced/code'), unknown(), partial(a + 'tutorials/ai-agent'), partial(r + 'agent/task-lifecycle'), partial(g + 'developing-in-a-codespace/developing-in-a-codespace')]],
  [pair('Project task inbox', '项目任务收件箱'), [host(), unknown(), unknown(), unknown(), partial(r + 'agent/task-lifecycle'), partial('https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-coding-agent')]]
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
  pair('This is a vendor-authored, documentation-based snapshot, reviewed on the date above (UTC), not a live feed or a performance benchmark. ✅ means officially documented support, including named integrations; ◐ means partial support, an extension, a remote environment or setup is required; — means a corresponding native capability was not confirmed. Click a status for its official source. A dash does not rule out third-party solutions, and partial support does not imply the same experience.', '这是 NimoteCode 团队根据公开文档整理的快照，按上方日期（UTC）核实，并非实时数据源或性能评测。✅ 表示官方明确支持（含注明的集成）；◐ 表示部分支持，或依赖插件、远程环境及配置；— 表示未确认有对应的原生能力。点击状态可查看官方来源。“—”不代表无法借助第三方工具实现，“◐”也不代表体验相同。'),
  pair('NimoteCode is checked against 2.4.1 and the current Host documentation. NimoteHost remains a developer preview: recovery, approvals and Task Inbox depend on the Host version, configuration and compatible Agent. The computer, Host and managed process must stay running; a Host or OS restart does not restore the original process. Local Linux requires supported Android hardware and Pro; LSP needs a configured server and Pro, and Git write operations need Pro. See Free and Pro for access boundaries.', 'NimoteCode 按 2.4.1 与当前 Host 文档核对。NimoteHost 仍为开发预览；恢复、审批与 Task Inbox 取决于 Host 版本、配置及 Agent 兼容性。电脑、Host 与托管进程需要持续运行；Host 或系统重启不会恢复原进程。Local Linux 需要受支持的 Android 设备与 Pro，LSP 需要配置服务器与 Pro，Git 写入操作需要 Pro。权限边界参见免费与 Pro。'),
  pair('Blink Code integrates VS Code services; language tools, extensions, Git and Agent workflows depend on the connected environment. Its local Unix commands do not constitute a full Linux environment. Mosh roaming and tmux reattachment have different requirements from structured Agent recovery.', 'Blink Code 集成 VS Code 服务；语言工具、扩展、Git 与 Agent 工作流取决于所连接的环境。本地 Unix 命令工具不等于完整 Linux 环境。Mosh 网络漫游、tmux 重附着与结构化 Agent 恢复各有不同条件。'),
  pair('Acode documents Android Alpine Linux and native LSP integration; language servers still need enabling or installation. Its official AI Agent is a separate plugin with provider setup, saved chats and approvals. iPhone/iPad is marked Coming soon with a beta entry, rather than a confirmed general release.', 'Acode 已明确提供 Android Alpine Linux 与原生 LSP 集成；具体语言服务器仍需启用或安装。官方 AI Agent 需另装插件、配置服务商，提供会话保存与审批。iPhone/iPad 标为 Coming soon 并有 Beta 入口，不能当作已正式发布。'),
  pair('Replit documents mobile project editing, a Git pane and Agent task review. Its SSH documentation describes connecting into a Replit cloud app, rather than a mobile SSH client for your own computer. Mobile LSP coverage was not confirmed. Codespaces is a cloud development environment accessed through a browser or VS Code; phone browser availability does not promise a native mobile app or identical usability. Copilot and its task workflows require separate access and do not constitute a native Codespaces task inbox.', 'Replit 官方已说明手机项目编辑、Git 面板与 Agent 任务审查；其 SSH 文档说明的是连接到 Replit 云端应用，并非连接自有电脑的手机 SSH 客户端。移动端 LSP 覆盖范围未确认。Codespaces 是通过浏览器或 VS Code 访问的云开发环境；手机浏览器可访问不代表有原生移动应用或相同易用性。Copilot 及其任务工作流需要单独权限，也不等于 Codespaces 原生任务收件箱。'),
  pair('The SSH workflow table describes a typical terminal-led setup, not every feature of Blink Shell or Termius. Remote development and AI coding are not exclusive to NimoteCode. The combination to evaluate is running work on your own computer while using your phone to inspect code, manage terminals, recover compatible Agent sessions and handle approvals.', 'SSH 场景表描述典型的终端工作流，不代表 Blink Shell 或 Termius 的全部功能。远程开发与 AI 编程并非 NimoteCode 独有。值得评估的是这组组合体验：在自己的电脑上运行开发任务，在手机上查看代码、管理终端、恢复兼容 Agent 会话并处理审批。')
]
