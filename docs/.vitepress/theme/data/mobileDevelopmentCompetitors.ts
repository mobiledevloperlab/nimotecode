/** Audited, first-party evidence for the mobile tools comparison. Review date is
 * the date the cited page was inspected, not the product's release date. */
export type Locale = 'en' | 'zh'
export type Localized = Record<Locale, string>
export type CellStatus = 'Native' | 'Integrated' | 'CLI-only' | 'Conditional' | 'Not verified' | 'Not supported'
export type FeatureKey = 'nativeSsh' | 'sshIde' | 'mosh' | 'sftp' | 'nativeEditor' | 'remoteIde' | 'lsp' | 'debugger' | 'gitCli' | 'gitUi' | 'conflictUi' | 'builtInAgent' | 'externalCli' | 'agentUi' | 'acpMcp' | 'autoReconnect' | 'hostPersistence' | 'webPreview' | 'desktopPreview' | 'androidLinux' | 'externalFolders' | 'desktopRequired' | 'openSource'
export interface Evidence { url: string; excerpt: string; date: string; confidence: 'high' | 'medium' }
export interface FeatureCell {
  status: CellStatus
  implementation: string
  note: Localized
  requiresPro: boolean | null
  requiresHostSetup: boolean | null
  platformRestriction: string
  evidence: Evidence | null
}
export interface FeatureRow { key: FeatureKey; label: Localized; group: Localized }
export interface Competitor {
  id: string; name: string; website: string; positioning: Localized; summary: Localized
  platforms: string; version: string; lastVerified: string
  features: Record<FeatureKey, FeatureCell>
}
export const REVIEW_DATE = '2026-10-19'
const enzh = (en: string, zh: string): Localized => ({ en, zh })
const row = (key: FeatureKey, en: string, zh: string, group: Localized): FeatureRow => ({ key, label: enzh(en, zh), group })
const connection = enzh('Connection and files', '连接与文件')
const editing = enzh('Editing and Git', '编辑与 Git')
const agents = enzh('Agents and protocols', 'Agent 与协议')
const runtime = enzh('Sessions and preview', '会话与预览')
const access = enzh('Platform and access', '平台与访问')
export const featureRows: FeatureRow[] = [
  row('nativeSsh','Native SSH client','原生 SSH 客户端',connection), row('sshIde','Integrated SSH IDE workspace','集成 SSH IDE 工作区',connection),
  row('mosh','Mosh transport','Mosh 传输',connection), row('sftp','SFTP / file explorer','SFTP / 文件浏览',connection),
  row('nativeEditor','Native code editor','原生代码编辑器',editing), row('remoteIde','Remote IDE integration','远程 IDE 集成',editing),
  row('lsp','LSP','LSP',editing), row('debugger','Debugger','调试器',editing), row('gitCli','Git via CLI','通过 CLI 使用 Git',editing),
  row('gitUi','Git / diff interface','Git / Diff 图形界面',editing), row('conflictUi','Conflict resolution UI','冲突解决界面',editing),
  row('builtInAgent','Built-in AI agent','内置 AI Agent',agents), row('externalCli','External CLI agents','外部 CLI Agent',agents),
  row('agentUi','Agent-aware UI','Agent 感知界面',agents), row('acpMcp','ACP / MCP integration','ACP / MCP 集成',agents),
  row('autoReconnect','Connection recovery','连接恢复',runtime), row('hostPersistence','Persistent host processes','主机进程持续运行',runtime),
  row('webPreview','Web / app preview','Web / App 预览',runtime), row('desktopPreview','Remote desktop preview','远程桌面预览',runtime),
  row('androidLinux','Android Local Linux','Android 本地 Linux',access), row('externalFolders','External device folders','设备外部目录',access),
  row('desktopRequired','Desktop companion required','需要桌面 Companion',access), row('openSource','Open-source license','开源许可证',access)
]
const unknown = (): FeatureCell => ({ status:'Not verified', implementation:'Not verified', note:enzh('',''), requiresPro:null, requiresHostSetup:null, platformRestriction:'Not verified', evidence:null })
type Claim = [CellStatus, string, string, string, string, string, boolean?, boolean?, string?, ('high'|'medium')?]
/** Claim tuple: status, implementation, English note, Chinese note, URL, evidence excerpt, Pro, host setup, platform, confidence. */
const claim = (c: Claim): FeatureCell => ({ status:c[0], implementation:c[1], note:enzh(c[2],c[3]), requiresPro:c[6] ?? null, requiresHostSetup:c[7] ?? null, platformRestriction:c[8] ?? 'All listed platforms', evidence:{url:c[4],excerpt:c[5],date:REVIEW_DATE,confidence:c[9] ?? 'high'} })
function product(id:string,name:string,website:string,positioning:Localized,summary:Localized,platforms:string,version:string,claims:Partial<Record<FeatureKey,Claim>>):Competitor {
  const features = Object.fromEntries(featureRows.map(r=>[r.key,claims[r.key] ? claim(claims[r.key]!) : unknown()])) as Record<FeatureKey,FeatureCell>
  return {id,name,website,positioning,summary,platforms,version,lastVerified:REVIEW_DATE,features}
}
const N='https://nimotecode.com', T='https://termius.com', B='https://docs.blink.sh', R='https://redock.dev', O='https://www.onorca.dev', S='https://servercc.app', M='https://getmoshi.app'
export const competitors:Competitor[] = [
  product('nimotecode','NimoteCode',N,enzh('Mobile development workspace','移动开发工作区'),enzh('Mobile editor, Git review, SSH workspace and Android Local Linux. Built-in Agent and configured remote language tools require Pro.','移动编辑器、Git 审查、SSH 工作区和 Android 本地 Linux；内置 Agent 与远程语言工具需 Pro。'),'Android / iOS / iPadOS; desktop builds documented','1.2.4',{
    nativeSsh:['Native','App SSH transport','SSH connection','SSH 连接',N+'/docs/ssh','Connect to a remote Mac or Linux host through SSH.'],
    sshIde:['Integrated','Remote workspace','Editor, Explorer, terminal and Git share a remote workspace','编辑器、文件浏览、终端与 Git 共用远程工作区',N+'/docs/ssh','Use Explorer, Editor, Terminal, Source Control and project tools in the SSH workspace.'],
    sftp:['Integrated','Workspace Explorer','Remote files in Explorer','Explorer 中的远程文件',N+'/docs/ssh','Browse remote project files in the Explorer.'],
    nativeEditor:['Native','Nimote Editor / Monaco','Monaco on tablets and desktop; Nimote Editor on phones','平板与桌面支持 Monaco；手机使用 Nimote Editor',N+'/releases/1.2.0','Monaco on desktop and tablets; phones retain the Nimote Editor.',false,false,'Android / iOS / iPadOS; Monaco: tablets / desktop'],
    lsp:['Integrated','Remote language server','Configured server on host; Pro','主机配置语言服务器；需 Pro',N+'/docs/lsp','LSP is a Pro workflow and needs a compatible language server on the remote host.',true,true],
    debugger:['Integrated','Remote debug adapter','Configured adapter; Pro','需配置调试适配器；需 Pro',N+'/docs/debug','Remote debugging requires a configured debug adapter and Pro.',true,true],
    gitCli:['CLI-only','Workspace terminal','Git command when installed in workspace','工作区安装 Git 后可通过终端运行',N+'/docs/local-linux','The bundled environment includes Bash, Git and SSH.',false,true,'Android Local Linux / configured SSH host'],
    gitUi:['Native','Source Control','Status, diff and history free; writes Pro','状态、Diff 与历史免费；写入需 Pro',N+'/docs/source-control','Repository status, diffs and history are available to all users; Git writes require Pro.'],
    conflictUi:['Native','Landscape editor conflict page','Landscape Git conflict page','横屏 Git 冲突页面',N+'/releases/1.2.2','Git diffs, commit diffs and conflict-resolution pages open in the landscape editor.'],
    builtInAgent:['Native','Built-in Agent','Pro; own AI provider account','需 Pro 与自有 AI 服务账号',N+'/docs/ai','AI Agent is available through Early Access Pro; model access uses your own provider.',true],
    externalCli:['CLI-only','SSH terminal','CLI installed on host','需在主机安装 CLI',N+'/docs/ai','External CLIs share the remote account login environment.',false,true,'SSH / Local Linux'],
    agentUi:['Integrated','Built-in and ACP conversation UI','Permissions and progress in workspace','工作区显示权限与进度',N+'/docs/ai','External ACP agents appear in the same conversation experience.',true,true,'SSH workspace for ACP'],
    acpMcp:['Integrated','ACP client','External ACP runtime on SSH host; MCP not verified','SSH 主机需 ACP 运行时；MCP 未核实',N+'/docs/ai','A compatible ACP runtime on the SSH host can be selected alongside the built-in Agent.',true,true,'SSH workspace'],
    autoReconnect:['Integrated','SSH recovery','Checks transport after brief interruption','短暂中断后检查传输状态',N+'/releases/1.2.2','A genuinely dead session reconnects.'],
    webPreview:['Integrated','HTML snapshot / development server','Unsaved HTML snapshot; app URL preview','未保存 HTML 快照；应用 URL 预览',N+'/releases/1.1.7','Preview the current HTML editor contents, including unsaved changes, with workspace assets.'],
    androidLinux:['Native','Bundled PRoot Ubuntu','Android only; no root; toolchains installed separately','仅 Android；免 root；工具链需另装',N+'/docs/local-linux','Local Linux provides bundled Ubuntu through PRoot; language toolchains are not bundled.',false,false,'Android'],
    externalFolders:['Conditional','System file provider','Edit granted folders; Git, LSP, Debug, Tasks, watcher and Agent need native path','可编辑授权目录；Git、LSP、调试、Tasks、监听器及 Agent 需原生路径',N+'/releases/1.2.2','Features that need a native filesystem path are reported up front.',false,false,'Android / iOS / iPadOS'],
    desktopRequired:['Not supported','Standalone mobile app','SSH requires a reachable host; Local Linux runs on Android','SSH 需要可访问主机；Android Local Linux 在设备运行',N+'/docs/local-linux','Android Local Linux is a third workspace choice alongside local and SSH.'],
    openSource:['Not verified','Application license','','',N+'/docs/local-linux-source','The bundled Linux environment components have their own licenses; this does not establish an app-wide license.']
  }),
  product('termius','Termius',T,enzh('SSH and infrastructure access','SSH 与基础设施访问'),enzh('SSH/SFTP client with host management and AI command autocomplete; CLI tools can run on the host.','支持主机管理与 AI 命令补全的 SSH/SFTP 客户端；可运行主机 CLI。'),'iOS / Android / desktop','Version not verified',{
    nativeSsh:['Native','SSH client','SSH in free Starter','免费 Starter 含 SSH',T+'/pricing','Starter includes SSH and SFTP.'],
    mosh:['Native','Mosh client','','',T+'/free-ssh-client-for-android','Connect with SSH, SFTP, Mosh, Telnet and Serial.',false,false,'Android page; other platforms not verified'],
    sftp:['Native','SFTP browser','Free Starter','免费 Starter',T+'/pricing','Starter includes SSH and SFTP.'],
    gitCli:['CLI-only','Remote shell','Host Git installation','主机需安装 Git',T+'/','Terminal offers remote shell access.',false,true,'All listed platforms','medium'],
    externalCli:['CLI-only','Remote shell','Host agent CLI and account','主机需 Agent CLI 与账号',T+'/','SSH terminal reaches programs installed on a host.',false,true,'All listed platforms','medium'],
    desktopRequired:['Not supported','Mobile SSH client','','',T+'/free-ssh-client-for-android','Android app can connect directly to a host.']
  }),
  product('blink-shell','Blink Shell','https://blink.sh',enzh('iPhone/iPad terminal and Blink Code','iPhone/iPad 终端与 Blink Code'),enzh('SSH/Mosh terminal plus Blink Code for local/remote files and remote VS Code services.','SSH/Mosh 终端，Blink Code 可编辑本地/远程文件并接入远程 VS Code 服务。'),'iOS / iPadOS','Version not verified',{
    nativeSsh:['Native','SSH client','','',B+'/','Blink supports SSH.'], mosh:['Native','Mosh client','Host mosh server required','主机需 Mosh 服务',B+'/','Install mosh on the destination before connecting.',false,true],
    sftp:['Native','Blink Files / SFTP','','',B+'/advanced/code','Blink Code edits remote files using Blink Files and SFTP paths.'],
    nativeEditor:['Integrated','Blink Code','Edits local or remote files; not a desktop-native IDE','可编辑本地或远程文件；并非桌面原生 IDE',B+'/advanced/code','Work on local projects, or edit remote files as if on-device.'],
    remoteIde:['Integrated','VS Code web / code-server','Remote service required','需远程服务',B+'/advanced/code','Connects to VSCode web, Codespaces, GitPod or code-server.',false,true],
    lsp:['Conditional','Remote VS Code service','Depends on remote IDE extensions','取决于远程 IDE 扩展',B+'/advanced/code','Blink Code connects to an existing remote VS Code environment.',false,true],
    gitCli:['CLI-only','Remote terminal','Host Git installation','主机需 Git',B+'/','SSH terminal connects to a remote host.',false,true,'All listed platforms','medium'],
    gitUi:['Conditional','Blink Code / remote IDE','GitHub repository editing documented; native Git UI not established','文档有 GitHub 仓库编辑；原生 Git UI 未确认',B+'/advanced/code','Blink Code can edit GitHub repositories and commit changes.',false,true],
    externalCli:['CLI-only','Remote terminal','Host agent CLI','主机需 Agent CLI',B+'/','SSH terminal exposes the remote shell.',false,true,'All listed platforms','medium'],
    autoReconnect:['Conditional','Mosh roaming','Network roaming is distinct from process persistence','网络漫游不等于进程持续运行',B+'/','Mosh handles intermittent connectivity.',false,true],
    desktopRequired:['Not supported','Standalone iOS client','','',B+'/','Blink runs on iPhone and iPad.'],
    openSource:['Native','GPL-3.0 source repository','','','https://github.com/blinksh/blink','Official repository declares GPL-3.0 license.']
  }),
  product('redock','Redock',R,enzh('Mobile SSH terminal for host agents','面向主机 Agent 的移动 SSH 终端'),enzh('Project-aware SSH/Mosh terminal for host-side agents, with SFTP and tmux entry points.','面向主机 Agent 的项目感知 SSH/Mosh 终端，提供 SFTP 与 tmux 入口。'),'iOS / iPadOS / Android','Version not verified',{
    nativeSsh:['Native','SSH client','','',R+'/','Connect over SSH or Mosh.'], mosh:['Native','Mosh client','Host setup','主机配置',R+'/','Connections: SSH / Mosh.',false,true],
    sftp:['Native','SFTP file access','','',R+'/','Files: SFTP.'], gitCli:['CLI-only','Remote terminal','Host Git','主机 Git',R+'/','Saved actions can run git status.',false,true],
    externalCli:['CLI-only','Host CLI agent','Claude Code, Codex and OpenCode run on host','Claude Code、Codex、OpenCode 在主机运行',R+'/faq/','Coding agents run in your development environment.',false,true],
    agentUi:['Integrated','Agent chat / notifications','Host agent process','需主机 Agent 进程',R+'/','Agent Chat View and Agent Notifications.',false,true],
    autoReconnect:['Integrated','Connection recovery','Returns to saved sessions after interruption','中断后可返回已保存会话',R+'/','Recovery and session-history controls return users to a session after disconnect.'],
    hostPersistence:['Conditional','tmux / herdr / psmux','Host tmux keeps jobs running after Redock disconnects','Redock 断开后，主机 tmux 仍可保持任务运行','https://redock.dev/features/tmux/','Agents and long-running jobs keep going after Redock disconnects.',false,true],
    webPreview:['Integrated','SSH port forward','Forwards a host development port into an in-app preview','将主机开发端口转发到应用内预览','https://redock.dev/features/web-preview/','Forward a development port and open the local web service inside Redock.',false,true],
    desktopRequired:['Not supported','Mobile SSH client','A development host is required, not a desktop companion app','需开发主机，但不需专用桌面 Companion',R+'/','Connect to Mac, Linux or Windows hosts over SSH or Mosh.']
  }),
  product('orca','Orca',O,enzh('Desktop agent environment with mobile companion','桌面 Agent 环境与移动 Companion'),enzh('Desktop-hosted worktrees and agents with mobile control, file browsing, Source Control and browser view; mobile is in beta.','桌面托管 worktree 与 Agent；移动端可控制、浏览文件、操作 Source Control 和查看网页；移动端处于 Beta。'),'Desktop + iOS / Android beta companion','Version not verified',{
    nativeSsh:['Conditional','Desktop SSH targets','SSH target configured on desktop; mobile pairs to Orca','SSH 目标在桌面配置；移动端配对 Orca',O+'/docs/ways-to-run','Editor, diff and UI stay on the laptop when worktrees run on SSH hosts.',false,true,'Desktop'],
    sftp:['Integrated','Mobile file tree','Via paired desktop','通过配对桌面端',O+'/docs/mobile','Browse the workspace full file tree from mobile.',false,true,'Mobile beta'],
    gitUi:['Integrated','Mobile Source Control','Review, stage/unstage, commit on paired host','在配对主机上审查、暂存和提交',O+'/docs/mobile','Mobile Source Control can inspect paths, stage or unstage and commit.',false,true,'Mobile beta'],
    externalCli:['Integrated','Desktop agent orchestration','Agent runs on host','Agent 在主机运行',O+'/docs/mobile','Start an agent from the phone; its tab appears on desktop.',false,true],
    agentUi:['Integrated','Mobile companion','Status, chat and terminal scrollback','状态、对话与终端滚动记录',O+'/docs/mobile','Mobile shows agent status and recent terminal scrollback.',false,true],
    nativeEditor:['Not supported','Mobile companion','Mobile is a remote control, not a full editor','移动端是远程控制端，并非完整编辑器',O+'/docs/mobile','The mobile app is intentionally not a full editor.',false,false,'Mobile beta'],
    autoReconnect:['Integrated','Paired desktop recovery','Phone reconnects when the desktop app reopens','桌面端重新打开后，手机会自动重连',O+'/docs/mobile','Closing the desktop app drops the connection; reopen desktop and the phone reconnects automatically.',false,true,'Mobile beta'],
    hostPersistence:['Conditional','Desktop/remote runtime','Host must keep running','主机需持续运行',O+'/docs/mobile','Closing desktop app drops the connection.',false,true],
    webPreview:['Integrated','Paired browser session','Web/Mobile view from desktop browser','桌面浏览器提供 Web/Mobile 视图',O+'/docs/mobile','Open a browser session in Web or Mobile view.',false,true],
    desktopRequired:['Native','Paired desktop / server','Desktop is source of truth','桌面端是事实来源',O+'/docs/mobile','The desktop is always the source of truth.',false,true],
    openSource:['Native','MIT repository','','','https://github.com/stablyai/orca','Official repository lists MIT license.']
  }),
  product('servercc','ServerCC',S,enzh('Mobile SSH workspace for host agents','面向主机 Agent 的移动 SSH 工作区'),enzh('SSH coding-agent control with SFTP, Git diff, persistent tmux sessions, port preview and VNC.','支持 SFTP、Git Diff、tmux 持续会话、端口预览和 VNC 的 SSH Agent 控制工具。'),'iOS / iPadOS / Android','Version not verified',{
    nativeSsh:['Native','SSH client','','',S+'/','Connect to a server over SSH.'], sftp:['Native','SFTP file browser','','',S+'/docs','Browse, upload and preview files on remote servers.'],
    gitCli:['CLI-only','Remote terminal','Host Git','主机 Git',S+'/docs/workspaces','If Git is installed on server, workspace can clone a repository.',false,true],
    gitUi:['Native','Git diff viewer','Compare against HEAD or a branch','对比 HEAD 或分支',S+'/docs','Review agent changes GitHub-style.'],
    externalCli:['Integrated','Host CLI agent launcher','Seven documented agents; host installation','文档列出七种 Agent；需主机安装',S+'/docs/agents','ServerCC runs seven coding agents on your own server over SSH.',false,true],
    agentUi:['Integrated','Agent View / notifications','Running, idle and background state','运行、空闲与后台状态',S+'/docs/running','Notifications fire for launched, tmux and takeover sessions.',false,true],
    acpMcp:['Integrated','Agent MCP configuration','MCP belongs to host agents; ACP not verified','MCP 属于主机 Agent；ACP 未核实',S+'/docs','Configure MCP servers for Claude Code/Codex.',false,true],
    hostPersistence:['Conditional','tmux / supervisor','Server-side process continues','服务端进程持续运行',S+'/docs','Persistent Sessions powered by tmux; supervisor-managed bg sessions.',false,true],
    autoReconnect:['Integrated','Connection pooling and heartbeat','Dropped SSH connections are automatically re-established','断开的 SSH 连接会自动重新建立',S+'/docs/servers','A 30-second heartbeat keeps connections alive; dropped connections are automatically re-established.'],
    webPreview:['Integrated','SSH port preview','Host dev server required','需主机开发服务器',S+'/docs','Open a listening server port over HTTP on iPhone.',false,true],
    desktopPreview:['Integrated','VNC client','Pro, with limited trial; VNC host required','需 Pro，有限试用；主机需 VNC',S+'/docs/vnc','VNC Remote Desktop is Pro; non-subscribers get two limited sessions per day.',true,true,'iPhone / iPad documented'],
    desktopRequired:['Not supported','Mobile SSH client','Remote server required','需远程服务器',S+'/','App connects directly to servers over SSH.']
  }),
  product('moshi','Moshi',M,enzh('Agent-aware SSH/Mosh terminal','Agent 感知 SSH/Mosh 终端'),enzh('Host-side coding agents in a mobile terminal, with hook-based inbox, diff and preview; key gateway features require Pro.','移动终端控制主机 Agent；hook 提供收件箱、Diff 和预览；主要网关功能需 Pro。'),'iOS / Android','Version not verified',{
    nativeSsh:['Native','SSH terminal','Free tier','免费层',M+'/docs/subscription','Free includes SSH terminal.'],
    mosh:['Native','Mosh transport','Pro; host mosh server','需 Pro；主机需 Mosh 服务',M+'/docs/subscription','Pro unlocks mosh.',true,true],
    sftp:['Conditional','Hook-backed repo browser','Read-only source browser; Pro','只读源码浏览；需 Pro',M+'/docs/diff-viewer','Browse tab walks the file tree and opens syntax-highlighted source; viewer requires Pro.',true,true,'iOS documented'],
    gitCli:['CLI-only','Host terminal','Host Git','主机 Git',M+'/docs/introduction','Git credentials and processes remain on the host.',false,true],
    gitUi:['Integrated','Host-served diff viewer','Pro and moshi-hook; read-only diff','需 Pro 和 moshi-hook；只读 Diff',M+'/docs/diff-viewer','Diff viewer is served by moshi-hook and requires Pro.',true,true,'iOS documented'],
    externalCli:['CLI-only','Host CLI agents','Agents and subscriptions stay on host','Agent 与订阅留在主机',M+'/docs/introduction','Moshi does not run agent CLI on the phone.',false,true],
    agentUi:['Integrated','Hook inbox / approvals','Free monitoring; host hook needed','免费监控；需主机 hook',M+'/docs/introduction','moshi-hook feeds approvals, tool activity and turn completion to inbox.',false,true],
    autoReconnect:['Integrated','SSH / Mosh recovery','Automatic tmux reattach requires Pro','自动重附着 tmux 需 Pro',M+'/docs/subscription','Pro unlocks automatic tmux and Herdr reattach.',true,true],
    hostPersistence:['Conditional','Host tmux / Herdr','Pro automatic pairing; host process','自动配对需 Pro；进程在主机',M+'/docs/subscription','Pro unlocks multiplexer pairing and automatic reattach.',true,true],
    webPreview:['Integrated','Hook gateway / SSH tunnel','Pro and moshi-hook','需 Pro 与 moshi-hook',M+'/docs/browser-preview','Browser preview requires moshi-hook and Pro.',true,true],
    desktopPreview:['Conditional','Simulator / emulator stream','Pro; a Mac host runs iOS Simulator or Android Emulator through moshi-hook','需 Pro；Mac 主机经 moshi-hook 运行 iOS 模拟器或 Android 模拟器','https://getmoshi.app/docs/simulator-preview','Open iOS Simulators and Android emulators on your Mac inside Moshi.',true,true,'Mac host; Moshi 4.0.1+'],
    desktopRequired:['Not supported','Mobile SSH terminal','Existing machine required; no special companion app','需已有主机；不需专用 Companion',M+'/docs/introduction','Moshi connects to a machine you already control.']
  })
]
export const allCompetitors = competitors
export const accessNotes:Record<string,{note:Localized;evidence:Evidence}> = {
  nimotecode:{note:enzh('Free: local/SSH workspace, editor, terminal, Git review and AI Chat. Early Access Pro: Agent, Git writes, LSP, Debug and multi-terminal. Bring your own AI provider.','免费：本地/SSH 工作区、编辑器、终端、Git 审查与 AI Chat。Early Access Pro：Agent、Git 写入、LSP、调试与多终端。AI 服务账号自备。'),evidence:{url:N+'/pro',excerpt:'Free workspace and Early Access Pro workflow boundaries.',date:REVIEW_DATE,confidence:'high'}},
  termius:{note:enzh('Starter includes SSH/SFTP; Pro adds cloud vault, cross-device sync, session logs and snippets.','Starter 含 SSH/SFTP；Pro 增加云保险库、跨设备同步、会话日志和代码片段。'),evidence:{url:T+'/pricing',excerpt:'Starter includes SSH and SFTP; Pro adds personal cloud vault and sync.',date:REVIEW_DATE,confidence:'high'}},
  'blink-shell':{note:enzh('Blink+ is paid with a trial; limited-seat Community Edition is available separately. Exact feature entitlement by tier was not verified.','Blink+ 为付费产品并提供试用；另有限席位 Community Edition。各层具体功能权限未核实。'),evidence:{url:B+'/faq',excerpt:'Free trial and limited-seat Community Edition; prior freemium phased out.',date:REVIEW_DATE,confidence:'high'}},
  redock:{note:enzh('Free tier covers everyday use; Pro adds advanced features including Apple iCloud sync and agent-usage tracking. Exact entitlement of other rows is unverified.','免费层覆盖日常使用；Pro 增加包括 Apple iCloud 同步与 Agent 用量跟踪在内的高级功能。其他行的权限未核实。'),evidence:{url:R+'/faq/',excerpt:'Free version covers most everyday workflows; Pro unlocks advanced features.',date:REVIEW_DATE,confidence:'high'}},
  orca:{note:enzh('Desktop is described as free and open source; mobile companion is beta. Host and agent-provider accounts remain separate requirements.','桌面端官方称免费开源；移动 Companion 处于 Beta。主机和 Agent 服务账号仍需自备。'),evidence:{url:O+'/download',excerpt:'Free and open source for macOS, Windows and Linux; mobile companion downloads.',date:REVIEW_DATE,confidence:'high'}},
  servercc:{note:enzh('Free: one server, five workspaces, SSH, all seven agents, files, MCP and persistent tmux. Pro: more servers/workspaces, Background Run, worktrees, takeover and unlimited VNC.','免费：一台服务器、五个工作区、SSH、七种 Agent、文件、MCP 和 tmux 持续会话。Pro：更多主机/工作区、后台运行、worktree、接管与无限 VNC。'),evidence:{url:S+'/',excerpt:'FAQ lists free limits and Pro unlocks.',date:REVIEW_DATE,confidence:'high'}},
  moshi:{note:enzh('Free: SSH terminal, monitoring, push and inbox. Pro: Mosh, multiplexer pairing/reattach, diff viewer and browser preview.','免费：SSH 终端、监控、推送和收件箱。Pro：Mosh、复用器配对/重附着、Diff 查看器和浏览器预览。'),evidence:{url:M+'/docs/subscription',excerpt:'Free SSH and inbox; Pro unlocks Mosh, multiplexer pairing, diff and preview.',date:REVIEW_DATE,confidence:'high'}}
}
export const statusSymbols:Record<CellStatus,string> = {Native:'✓',Integrated:'◎','CLI-only':'⌘',Conditional:'◐','Not verified':'?','Not supported':'—'}
export const statusLabels:Record<Locale,Record<CellStatus,string>> = {
  en:{Native:'Native',Integrated:'Integrated','CLI-only':'CLI-only',Conditional:'Conditional','Not verified':'Not verified','Not supported':'Not supported'},
  zh:{Native:'原生',Integrated:'集成','CLI-only':'仅 CLI',Conditional:'有条件','Not verified':'未核实','Not supported':'不支持'}
}
export function featureDetail(cell:FeatureCell,locale:Locale):string {
  const note=cell.note[locale].trim()
  return [
    note,
    cell.requiresPro && !/pro/i.test(note) ? (locale==='zh'?'需 Pro':'Pro') : '',
    cell.requiresHostSetup && !/host|主机/i.test(note) ? (locale==='zh'?'需主机配置':'Host setup') : '',
    cell.platformRestriction==='All listed platforms'||cell.platformRestriction==='Not verified' ? '' : cell.platformRestriction
  ].filter(Boolean).join(' · ')
}
