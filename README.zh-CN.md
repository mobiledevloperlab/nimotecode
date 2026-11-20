<p align="center">
  <img src="docs/public/app_icon_rounded.png" alt="NimoteCode logo" width="88" height="88">
</p>

<h1 align="center">NimoteCode — 移动 AI IDE 与 SSH 开发工作区</h1>

<p align="center"><a href="README.md">English</a> · <strong>简体中文</strong> · <a href="README.es.md">Español</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a></p>

<p align="center">
  <strong>把项目带到手机和平板，随时继续开发。</strong><br>
  代码编辑器、SSH 终端、Git 与 AI Agent，在 Android、iPhone 和 iPad 上协同工作。
</p>

<p align="center">
  <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode"><img src="https://img.shields.io/badge/Google_Play-Install-34A853?style=for-the-badge&amp;logo=googleplay&amp;logoColor=white" alt="Install NimoteCode for Android"></a>
  <a href="https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253"><img src="https://img.shields.io/badge/App_Store-Download-0D96F6?style=for-the-badge&amp;logo=appstore&amp;logoColor=white" alt="Download NimoteCode for iPhone and iPad"></a>
</p>

<p align="center">
  <a href="https://nimotecode.com/zh/releases/2.4.1"><img src="https://img.shields.io/badge/NimoteCode-2.4.1-2563EB?style=flat-square" alt="NimoteCode 2.4.1"></a>
  <a href="https://nimotecode.com/zh/docs"><img src="https://img.shields.io/badge/docs-中文-2563EB?style=flat-square" alt="Documentation"></a>
  <a href="https://github.com/mobiledevloperlab/nimotehost"><img src="https://img.shields.io/badge/NimoteHost-Apache--2.0-64748B?style=flat-square" alt="NimoteHost companion license: Apache-2.0"></a>
</p>

<p align="center">
  <a href="#演示">观看演示</a> ·
  <a href="#workflow">实景工作流</a> ·
  <a href="#workspace-modes">四种模式</a> ·
  <a href="#quick-start">快速开始</a> ·
  <a href="#latest-release">2.4.1 新功能</a> ·
  <a href="#nimotehost">NimoteHost</a> ·
  <a href="https://nimotecode.com/zh/docs">文档</a> ·
  <a href="https://github.com/mobiledevloperlab/nimote_issues/issues">反馈问题</a>
</p>

<p align="center">
  <img src="docs/public/screenshots/nimote-pro-framed.svg?v=6d554a40db88" alt="NimoteCode 2.4.1 远程项目文件树与 Python 编辑器" width="1000">
</p>

NimoteCode 是面向**本地与 SSH 项目的移动 IDE**。从浏览源码、编辑文件到执行项目命令、审查 Git Diff，在同一工作区完成。你可以连接自己的 AI 服务商使用编程助手，也可以接入开发电脑上运行的 Agent。

**四种工作模式 · 沿用自己的开发环境 · AI 按需配置**

## 演示

在下方观看 NimoteCode 的实际操作，或[直接打开演示视频](https://github.com/user-attachments/assets/14c8bab8-ae16-4e15-8a8a-926ef2c747f4)。

<div align="center">
  <video src="https://github.com/user-attachments/assets/14c8bab8-ae16-4e15-8a8a-926ef2c747f4" controls muted playsinline width="420"></video>
</div>

## 为什么选择 NimoteCode

| 你要完成的工作 | NimoteCode 提供的工作流 |
| --- | --- |
| **在手机上继续项目** | 通过 SSH/SFTP 访问远程文件，将代码编辑器与主机终端放在一起，沿用电脑上的开发工具。 |
| **在平板上舒适地开发** | 项目文件树、编辑器分屏、工作区搜索、Markdown 与网页预览，以及横屏布局。 |
| **修改、验证并审查代码** | 在终端与项目任务旁查看 Git 状态、Diff 和历史，让每次修改都有据可查。 |
| **结合项目上下文使用 AI** | AI Chat、内置 Agent、MCP 工具，以及兼容的外部 ACP Agent。 |
| **断线后接续远程工作** | 可选的 NimoteHost 在自己的电脑上托管终端与 Agent 会话，客户端断线后仍可返回。 |
| **在 Android 本机运行开发工具** | 通过 PRoot 使用 Ubuntu、Bash、Git 和 SSH，无需 root。 |

<a id="workspace-modes"></a>

## 四种模式，从一条命令到完整项目

在手机上开发，常常需要同时处理文件、命令、代码变更与 Agent 任务。NimoteCode 为这些工作提供四种专用视图，让你按当前任务选择工作方式。

<table>
  <tr>
    <td rowspan="5" width="180" align="center" valign="middle"><a href="docs/public/images/placeholders/host-mode.png?v=8ed6f40a441c"><img src="docs/public/screenshots/host-mode-framed.svg?v=0b26255ed795" alt="NimoteCode 四种模式入口：Full IDE、Quick Terminal、AI Workspace 和 Host" width="160"></a></td>
    <th>模式</th>
    <th>面向什么工作</th>
    <th>核心体验</th>
  </tr>
  <tr>
    <td valign="top"><strong>IDE · 项目开发</strong></td>
    <td valign="top">阅读、修改和审查项目</td>
    <td valign="top">文件树、搜索、编辑器分屏、终端与 Git 在同一工作台中衔接。</td>
  </tr>
  <tr>
    <td valign="top"><strong>AI · Agent 协作</strong></td>
    <td valign="top">提问、委派任务与跟进执行</td>
    <td valign="top">结合项目上下文使用 Chat 或 Agent，查看工具输出、处理授权并审查结果。</td>
  </tr>
  <tr>
    <td valign="top"><strong>Terminal · 终端专注</strong></td>
    <td valign="top">运行命令、构建与交互式 CLI</td>
    <td valign="top">将屏幕留给终端，配合扩展按键、历史搜索与主机已有工具。</td>
  </tr>
  <tr>
    <td valign="top"><strong>Host · 远程接续</strong></td>
    <td valign="top">返回电脑上持续运行的工作</td>
    <td valign="top">通过 NimoteHost 浏览、恢复托管终端和兼容 Agent 会话，查看任务与验证记录。</td>
  </tr>
</table>

**IDE、Terminal、AI 切换时保留项目与文件浏览器状态；Host 连接由 NimoteHost 托管的会话。** 例如：在 IDE 查看问题，在 Terminal 运行检查，转到 AI 完成修改，再通过 Host 接续远程任务。

从 SSH 连接深入到项目编辑、Git 审查、AI 执行与会话接续，是 NimoteCode 的完整工作流。还可以通过 Docker、Dev Container、语言服务、调试和自定义插件扩展工作台。

[查看完整功能](https://nimotecode.com/zh/features) · [观看演示](#演示) · [观看 Agent 构建项目](https://nimotecode.com/zh/use-cases/)

<a id="workflow"></a>

## 一个项目，从代码到审查

在手机上也能走完一条清晰的开发流程：打开 SSH 项目，查看代码，和 Agent 协作，在主机运行命令，再审查最终改动。

<table>
  <tr>
    <th width="25%" align="center">1 · 查看与编辑代码</th>
    <th width="25%" align="center">2 · 与 Agent 协作</th>
    <th width="25%" align="center">3 · 运行项目命令</th>
    <th width="25%" align="center">4 · 审查代码改动</th>
  </tr>
  <tr>
    <td width="25%" align="center" valign="top"><a href="docs/public/images/placeholders/editor-code-selection.png?v=3bc86359abb3"><img src="docs/public/screenshots/editor-code-selection-framed.svg?v=5419f1211a45" alt="1 · 查看与编辑代码" width="220"></a></td>
    <td width="25%" align="center" valign="top"><a href="docs/public/images/placeholders/ai-plan-running.jpg?v=7cdbc72fe334"><img src="docs/public/screenshots/ai-plan-running-framed.svg?v=50b2a9e2632d" alt="2 · 与 Agent 协作" width="220"></a></td>
    <td width="25%" align="center" valign="top"><a href="docs/public/images/placeholders/terminal-command-output.png?v=8a8c20322c4e"><img src="docs/public/screenshots/terminal-command-output-framed.svg?v=62963867fed1" alt="3 · 运行项目命令" width="220"></a></td>
    <td width="25%" align="center" valign="top"><a href="docs/public/images/placeholders/source-control-changes.png?v=f08e4471badb"><img src="docs/public/screenshots/source-control-changes-framed.svg?v=15712f667c09" alt="4 · 审查代码改动" width="220"></a></td>
  </tr>
  <tr>
    <td valign="top">使用语法高亮与行号阅读、编辑项目文件。</td>
    <td valign="top">在执行时间线中跟进 Agent 的计划、文件读取与工具活动。</td>
    <td valign="top">使用主机终端与已安装的工具，运行项目所需的检查。</td>
    <td valign="top">在 Source Control 查看变更文件，提交前打开 Diff 审查。</td>
  </tr>
</table>

<sub>NimoteCode 2.4.1 Android 实机截图，通过 ADB 采集；点击图片查看原图。</sub>

需要暂时离开？通过 [Host 模式](#nimotehost)，可以返回电脑上由 NimoteHost 托管的兼容会话。

<a id="quick-start"></a>

## 从一次小修改开始

1. **安装应用：**前往 [Google Play](https://play.google.com/store/apps/details?id=com.nimote.nimotecode) 或 [App Store](https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253)。
2. **打开项目：**选择本地目录、连接已配置的 SSH 主机，或先体验 Demo 工作区，无需先配置 AI。
3. **编辑 → 运行 → 审查：**修改一个文件，在环境支持时执行项目检查，再在 Git 仓库中查看 Diff。

[跟随快速开始教程 →](https://nimotecode.com/zh/docs/quick-start)

### 选择代码运行的位置

| 工作区 | 文件与工具在哪里 | 使用条件 |
| --- | --- | --- |
| **本地文件** | 设备本机，可先浏览和编辑。 | 可以打开的目录；系统授权的外部目录存在工具使用限制。 |
| **SSH 工作区** | Linux、macOS 或 Windows 开发主机。 | 可访问的 SSH 服务、项目目录及主机上的开发工具。 |
| **Android Local Linux** | Android 设备内置的 Ubuntu；通过 `/mnt/local` 共享应用本地项目。 | 受支持的 Android 8+ ARM64 / x86_64 设备。 |
| **Host 工作区** | 由 NimoteHost 管理的自己的电脑。 | SSH 连接及持续运行的兼容 NimoteHost。 |

iPhone 和 iPad 不支持 Local Linux，可通过 SSH 主机运行开发命令。Git、LSP、调试、Tasks、文件监听和 Agent 工作流需要原生文件路径；语言与运行能力取决于工作区已安装的工具。

<a id="latest-release"></a>

## 2.4.1 已发布

**NimoteCode 2.4.1 现已发布。** 本次更新聚焦重新设计的工作台、远程会话与工作区文件传输。

- **全新界面与平板布局：**优化横屏编辑、编辑器控件与移动端 Git 审查，文件浏览器显示 Git 状态颜色。
- **Host 工作区与 Agent 任务：**浏览并恢复兼容终端和 Agent 会话，处理权限请求，查看任务结果与 Diff。
- **文件与目录传输：**在设备和 SSH 工作区之间传输，或在本地导入、导出。
- **项目任务发现：**识别 npm、Taskfile、Makefile、justfile 和 VS Code 任务定义中的受支持任务。
- **终端与远程体验改进：**保留历史搜索、选择与剪贴板优化、GitHub CI 步骤日志，以及更可靠的远程保存。

[阅读完整 2.4.1 发布说明 →](https://nimotecode.com/zh/releases/2.4.1)

下载渠道与商店推送进度可能因平台和地区不同；请在[官方下载页](https://nimotecode.com/zh/download)查看当前渠道与平台要求。

<a id="nimotehost"></a>

## NimoteHost：离开应用，回来继续

**NimoteHost** 是可选的自部署配套服务，支持 Linux、macOS 和 Windows。从手机启动终端或兼容编程 Agent，断开连接后，再通过 SSH 返回电脑上仍在运行的工作。

- 恢复托管终端，以及兼容的 **Codex、Claude Code、OpenCode** 对话。
- 根据 Host 能力查看结构化工具输出、权限请求、任务验证结果和 Diff。
- 使用独立 CLI 或桌面管理器，也可以基于完整的 **Apache-2.0 开源代码**自行构建与扩展。

在开发电脑上安装兼容的 Host 包并保持运行，在 NimoteCode 2.4.1 或更新版本中通过 **Host → SSH connections** 连接。安装包需匹配电脑的系统和 CPU。Host 或系统重启会中断运行中的进程；Agent 运行时与认证需要单独配置。普通 SSH 工作区无需安装 Host。

[安装指南](https://nimotecode.com/zh/docs/host/getting-started) · [Host 源码](https://github.com/mobiledevloperlab/nimotehost) · [Host 下载](https://github.com/mobiledevloperlab/nimotehost/releases)

## 用自己的工具与服务商开展 AI 编程

| 方式 | 适合的任务 |
| --- | --- |
| **AI Chat** | 结合工作区上下文解释代码与终端输出。 |
| **内置 Agent** | 在受支持的工作区中检查项目、规划修改、编辑文件并运行检查。 |
| **MCP 服务器** | 为内置 Agent 配置扩展工具，调用工具时进行授权确认。 |
| **外部 ACP Agent** | 从应用对话界面使用单独安装的兼容运行时。 |
| **SSH 终端中的 Agent CLI** | 在主机终端直接运行已安装的 Claude Code、Codex 等工具。 |

连接自己的服务商与凭据。**模型额度和服务商订阅不包含在 NimoteCode 中**，外部 Agent 需要单独安装和认证。提交代码前，请审查 Agent 改动并运行项目检查。

[配置 AI](https://nimotecode.com/zh/docs/configuration) · [Agent 与 MCP 指南](https://nimotecode.com/zh/docs/ai) · [在手机上使用 Claude Code](resources/claude-code-on-phone.md)

<!-- major-comparison:start -->
## NimoteCode vs 五款主要竞品

资料核实: **2026-11-20 04:12:58 (UTC)** · 依据官方文档、官网与公开发布信息

**在自己的电脑上运行开发任务，在手机上查看代码、管理终端、恢复兼容 AI 会话并处理审批。**

这是 NimoteCode 团队根据公开文档整理的快照，按上方日期（UTC）核实，并非实时数据源或性能评测。未对所有应用的相同设备及商店版本进行实测，文档也可能先于正式上架。✅ 表示官方明确支持（含注明的集成）；◐ 表示部分支持，或依赖插件、远程环境及配置；— 表示未确认有对应的原生能力。点击状态可查看官方来源。“—”不代表无法借助第三方工具实现，“◐”也不代表体验相同。

### 核心功能对比

| 功能 | [NimoteCode](https://nimotecode.com/zh/docs/host) | [Blink Shell](https://docs.blink.sh/advanced/code) | [Termius](https://www.termius.com/) | [Acode](https://docs.acode.app/user-guide/) | [Replit](https://docs.replit.com/features/platforms/mobile-app) | [Codespaces](https://docs.github.com/en/codespaces/about-codespaces/what-are-codespaces) |
| --- | --- | --- | --- | --- | --- | --- |
| Android | [✅](https://nimotecode.com/zh/download) | — | [✅](https://www.termius.com/free-ssh-client-for-android) | [✅](https://docs.acode.app/user-guide/) | [✅](https://docs.replit.com/features/platforms/mobile-app) | [◐ 浏览器](https://docs.github.com/en/codespaces/about-codespaces/codespaces-features) |
| iOS / iPadOS | [✅](https://nimotecode.com/zh/download) | [✅](https://docs.blink.sh/) | [✅](https://www.termius.com/free-ssh-client-for-iphone) | [— 待发布](https://acode.app/ai-coding-ios) | [✅](https://docs.replit.com/features/platforms/mobile-app) | [◐ 浏览器](https://docs.github.com/en/codespaces/about-codespaces/codespaces-features) |
| SSH 终端 | [✅](https://nimotecode.com/zh/docs/ssh) | [✅](https://docs.blink.sh/) | [✅](https://www.termius.com/free-ssh-client-for-android) | [✅](https://github.com/Acode-Foundation/Acode#readme) | — | — |
| Mosh | — | [✅](https://docs.blink.sh/advanced/advanced-mosh) | [✅](https://www.termius.com/free-ssh-client-for-android) | — | — | — |
| 图形代码编辑器 | [✅](https://nimotecode.com/zh/docs/editor) | [✅](https://docs.blink.sh/advanced/code) | — | [✅](https://docs.acode.app/user-guide/) | [✅](https://docs.replit.com/features/platforms/mobile-app) | [✅](https://docs.github.com/en/codespaces/developing-in-a-codespace/developing-in-a-codespace) |
| 设备本地 Linux 环境 | [✅ Android · Pro](https://nimotecode.com/zh/docs/local-linux) | — | — | [✅ Android](https://docs.acode.app/user-guide/terminal) | — | — |
| Git 图形操作 | [✅ 写入需 Pro](https://nimotecode.com/zh/docs/source-control) | [◐](https://docs.blink.sh/advanced/code) | — | — | [✅ 项目编辑器](https://docs.replit.com/features/workspace-tools/git-interface) | [✅](https://docs.github.com/en/codespaces/developing-in-a-codespace/using-source-control-in-your-codespace) |
| LSP 智能提示 | [✅ 基础免费](https://nimotecode.com/zh/docs/lsp) | — | — | [✅](https://docs.acode.app/user-guide/language-servers) | — | [◐ 语言扩展](https://code.visualstudio.com/docs/remote/codespaces) |
| AI 编程 | [✅ Agent · Pro](https://nimotecode.com/zh/docs/ai) | — | [◐ 命令补全](https://www.termius.com/pricing) | [◐ 官方插件](https://docs.acode.app/tutorials/ai-agent) | [✅](https://docs.replit.com/features/platforms/mobile-app) | [◐ Copilot 扩展](https://docs.github.com/en/codespaces/reference/using-github-copilot-in-github-codespaces) |
| VS Code 扩展 | — | [◐](https://docs.blink.sh/advanced/code) | — | — | — | [✅](https://code.visualstudio.com/docs/remote/codespaces) |
| 自有电脑远程开发 | [✅](https://nimotecode.com/zh/docs/ssh) | [✅](https://docs.blink.sh/advanced/code) | [◐ SSH 终端](https://www.termius.com/free-ssh-client-for-android) | [◐](https://docs.acode.app/user-guide/remote-access) | — | — |
| 持久终端会话 | [✅ Host · Pro](https://nimotecode.com/zh/docs/host) | [◐ Mosh](https://docs.blink.sh/advanced/advanced-mosh) | [◐ Mosh](https://www.termius.com/free-ssh-client-for-android) | [◐ Android 服务](https://docs.acode.app/user-guide/terminal) | — | [◐ 运行中工作区](https://docs.github.com/en/codespaces/about-codespaces/understanding-the-codespace-lifecycle) |
| Agent 会话恢复与审批 | [✅ Host · Pro](https://nimotecode.com/zh/docs/host) | — | — | [◐ 官方插件](https://docs.acode.app/tutorials/ai-agent) | — | — |
| 项目任务收件箱 | [✅ Host · Pro](https://nimotecode.com/zh/docs/host) | — | — | — | [✅ 云端任务看板](https://docs.replit.com/features/agent/task-board) | — |

### 使用条件与对比说明

NimoteCode 按 2.4.1 与当前 Host 文档核对。NimoteHost 仍为开发预览；恢复、审批与 Task Inbox 取决于 Host 版本、配置及 Agent 兼容性。电脑、Host 与托管进程需要持续运行；Host 或系统重启不会恢复原进程。Host、Android Local Linux 与 Git 写入需要 Pro。基础 LSP 补全、诊断与导航免费，需配置语言工具；代码操作、引导安装语言服务器与调试需要 Pro。权限边界参见免费与 Pro。

Blink Code 集成 VS Code 服务；已记录的仓库编辑和扩展访问取决于所连接的环境。Blink 的 LSP 和 AI Agent 工作流未获逐项确认，不因其可打开远程 IDE 就直接计为支持。本地 Unix 命令工具不等于完整 Linux 环境。Mosh 网络漫游、tmux 重附着与结构化 Agent 恢复各有不同条件。

Acode 已明确提供 Android Alpine Linux 与原生 LSP 集成；具体语言服务器仍需启用或安装。官方 AI Agent 需要 version code 1002+、另装插件并配置服务商，提供会话保存与审批。iPhone/iPad 仍标为 Coming soon，不计作已正式发布的 iOS 能力。Android 终端后台运行受前台服务和系统进程管理约束。Git 图形操作尚未确认，不能仅凭可用 Git CLI 就计为支持。

Replit 官方已说明手机项目编辑、Git 面板与 Agent 任务审查；其 SSH 文档说明的是连接到 Replit 云端应用，并非连接自有电脑的手机 SSH 客户端。移动端 LSP、持久终端进程与带审批的结构化 Agent 恢复尚未确认；任务看板已有明确文档，手机可通过 Tasks 面板访问。Codespaces 是通过浏览器或 VS Code 访问的云开发环境；手机浏览器可访问不代表有原生移动应用或相同易用性。Copilot 需要单独扩展与权限。Codespaces 的持续运行仅限活动工作区，空闲超时和文档规定的最长运行时限会停止进程。云端 Shell 不等于原生 SSH 客户端，Copilot 任务管理也不计作 Codespaces 原生收件箱或 Agent 恢复能力。

[NimoteCode 免费与 Pro 权限](https://nimotecode.com/zh/pro) · [Host 使用条件](https://nimotecode.com/zh/docs/host) · [Acode iOS 发布状态](https://acode.app/ai-coding-ios) · [Replit SSH 连接方向](https://docs.replit.com/features/workspace-tools/ssh)

### 从手机继续开发的差异

| 使用场景 | 典型 SSH 工作流 | NimoteCode + Host |
| --- | --- | --- |
| 手机连接电脑 | SSH | SSH + Host 工作区 |
| 查看项目代码 | 通常使用终端工具或另配编辑器 | 内置图形编辑器 |
| 修改代码并审查 | Git CLI 或其他工具 | 编辑器 + Git Diff |
| 手机退出后继续运行 | 依赖 tmux、Mosh 等主机配置 | Host 管理的任务与会话 |
| 回来查看 AI 结果 | 重新进入 CLI 或恢复会话 | 恢复兼容 Agent 的结构化对话 |
| 处理 Agent 审批 | 依赖所使用的 CLI | Host 集中展示兼容审批 |
| 发现待处理任务 | 手动查看日志或会话 | Task Inbox |

SSH 场景表描述典型的终端工作流，不代表 Blink Shell 或 Termius 的全部功能。远程开发与 AI 编程并非 NimoteCode 独有。值得评估的是这组组合体验：在自己的电脑上运行开发任务，在手机上查看代码、管理终端、恢复兼容 Agent 会话并处理审批。

### 竞品优势与产品改进优先级

以下优先级是 NimoteCode 团队的产品判断，不是市场份额或性能排名。功能依据可通过官方来源核对。

| 竞品 | 主要竞争点 | NimoteCode 改进重点 | 优先级 |
| --- | --- | --- | --- |
| Acode | Android 编辑器、Linux、插件、AI 与开源生态 | 对标移动 IDE 完整度，展示 Host 工作流与远程 Agent 审批 | 极高 |
| Blink Shell | Mosh、终端与键盘工作流、Blink Code | 提升终端体验，展示 Host 与 Git 集成 | 极高 |
| Termius | 主机管理、同步、SFTP、Mosh 与团队访问 | 简化连接与继续处理真实项目的流程 | 高 |
| GitHub Codespaces | 托管开发环境与 VS Code 生态 | 展示自有电脑与已有工具链的开发体验 | 中 |
| Replit | AI 应用生成、托管与发布 | 聚焦已有项目的持续开发、审查与审批 | 中 |
<!-- major-comparison:end -->

## 文档与实用指南

| 从这里开始 | 深入使用 |
| --- | --- |
| [快速开始](https://nimotecode.com/zh/docs/quick-start) | [SSH 与 SFTP](https://nimotecode.com/zh/docs/ssh) |
| [编辑器与导航](https://nimotecode.com/zh/docs/editor) | [Git 与 GitHub](https://nimotecode.com/zh/docs/source-control) |
| [终端](https://nimotecode.com/zh/docs/terminal) | [项目任务](https://nimotecode.com/zh/docs/tasks) |
| [Android Local Linux](https://nimotecode.com/zh/docs/local-linux) | [Docker 与 Dev Container](https://nimotecode.com/zh/docs/docker) |
| [AI 与 MCP](https://nimotecode.com/zh/docs/ai) | [自定义插件](https://nimotecode.com/zh/docs/plugins) |
| [常见问题](https://nimotecode.com/zh/docs/faq) | [Host 故障排查](https://nimotecode.com/zh/docs/host/troubleshooting) |

[全部文档](https://nimotecode.com/zh/docs) · [移动开发实用教程](resources/README.md) · [Linux 预设](presets/README.md) · [移动开发工具对比](https://nimotecode.com/zh/compare/mobile-ai-development-tools)

## 社区与贡献

[反馈 Bug 或功能建议](https://github.com/mobiledevloperlab/nimote_issues/issues) · [Discord](https://discord.gg/tTxbpqYmhR) · [X](https://x.com/mobiledevlab) · [官方网站](https://nimotecode.com/zh/)

反馈问题时，请提供应用版本、设备与系统、工作区类型、复现步骤，以及移除凭据后的相关日志。欢迎通过 Pull Request 改进本文档、翻译和工作流示例；Host 代码贡献请前往 [NimoteHost 仓库](https://github.com/mobiledevloperlab/nimotehost)。

## 关于本仓库

**NimoteCode 是商业闭源应用。** 本仓库提供官方网站、文档、教程与发布说明，不包含应用源代码。

独立的 [NimoteHost](https://github.com/mobiledevloperlab/nimotehost) 源码采用 Apache-2.0，[Linux Presets](https://github.com/mobiledevloperlab/nimote-linux-presets/blob/master/LICENSE) 采用 MIT。公开的 [Local Linux 源码包与许可声明](https://nimotecode.com/zh/docs/local-linux-source)适用于第三方组件。这些许可分别适用于对应项目或组件，不代表 NimoteCode 应用或本仓库全部内容采用相同许可。

<details>
<summary>维护本站文档</summary>

```bash
nvm install
nvm use
npm ci
npm ci --prefix blog
node scripts/generate-readme-screenshot.mjs
npm run docs:build
npm run docs:check
```

使用与部署环境一致的 Node 24（见 `.nvmrc`）。Astro 要求 Node >=22.23.4，不支持 Node 20。在新终端进入本仓库后，先运行 `nvm use`。

使用 `npm run docs:dev` 在本地预览。

详细竞品表的共享数据位于 `docs/.vitepress/theme/data/majorCompetitors.mjs`。核对官方来源后更新数据，再运行 `npm run compare:sync` 同步五种语言的 README 与网站；完成构建后运行 `npm run compare:check`。核实时间记录人工来源审计，不是自动更新的数据源。`npm run compare:audit` 要求 24 小时内完成复核，并检查 NimoteCode 文档的已审核哈希。只有重新核对上游官方来源与依据摘要后，才更新核实时间或本地文档基线；构建或链接检查成功不能自动延长核实有效期。

</details>

---

## 一起让 NimoteCode 更好用

如果 NimoteCode 对你有帮助，欢迎点亮 [⭐ Star](https://github.com/mobiledevloperlab/nimotecode)，让更多开发者发现它。

有改进建议、功能需求或遇到问题？欢迎通过应用内反馈，或在 [GitHub Issues](https://github.com/mobiledevloperlab/nimote_issues/issues) 告诉我们。你的真实使用体验，会帮助我们持续改进 NimoteCode。
