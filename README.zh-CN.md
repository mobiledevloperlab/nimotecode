<p align="center">
  <img src="docs/public/app_icon_round.png" alt="NimoteCode 标志" width="72" height="72">
</p>

<h1 align="center">NimoteCode</h1>

<p align="center">简体中文 · <a href="README.md">English</a></p>

<p align="center"><b>Android / iOS 移动 IDE</b><br>在手机和平板上连接开发主机、编辑代码、运行测试并审查 Git 改动。</p>

<p align="center">SSH · Code Editor · Terminal · Git · Debug · AI Agent<br>Android Local Linux（免 root，仅限 Android）</p>

<p align="center">商业闭源应用 · 本仓库提供官方文档、教程与社区资源，不包含应用源码。</p>

<p align="center">
  <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode"><img src="https://img.shields.io/badge/Google_Play-安装-34A853?style=for-the-badge&logo=googleplay&logoColor=white" alt="从 Google Play 安装 NimoteCode"></a>
  <a href="https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253"><img src="https://img.shields.io/badge/App_Store-下载-0D96F6?style=for-the-badge&logo=appstore&logoColor=white" alt="从 App Store 下载 NimoteCode"></a>
</p>

<p align="center"><a href="#演示">观看演示</a> · <a href="https://nimotecode.com/zh/docs/quick-start?utm_source=github&amp;utm_medium=referral&amp;utm_campaign=developer_workflows&amp;utm_content=readme_zh_quick_start">快速开始</a> · <a href="https://nimotecode.com/zh/?utm_source=github&amp;utm_medium=referral&amp;utm_campaign=developer_workflows&amp;utm_content=readme_zh_website">官网</a><br>Early Access Pro：登录后可在 Early Access 期间免费使用全部功能。</p>

<p align="center">
  <img src="docs/public/screenshots/nimote-pro.webp" alt="NimoteCode 移动 IDE，在平板和手机上展示本地与 SSH 工作区" width="1000">
</p>

## 演示

<div align="center" style="padding: 24px 16px; background: radial-gradient(ellipse at center, rgba(56, 139, 253, 0.16) 0%, rgba(56, 139, 253, 0) 72%);">
  <video src="https://github.com/user-attachments/assets/531d62fc-4874-41b9-96af-1ac9d2ad6fd6" controls muted playsinline width="420" poster="docs/public/videos/nimotecode-poster.jpg" style="display: block; max-width: 100%; margin: 0 auto; border: 1px solid rgba(56, 139, 253, 0.28); border-radius: 16px; box-shadow: 0 12px 32px rgba(27, 31, 35, 0.18);">
    打开 <a href="https://github.com/user-attachments/assets/531d62fc-4874-41b9-96af-1ac9d2ad6fd6">AI Agent 演示视频</a>。
  </video>
</div>

[观看 AI Agent 产品演示](https://github.com/user-attachments/assets/531d62fc-4874-41b9-96af-1ac9d2ad6fd6) · [备用 MP4 视频](https://nimotecode.com/videos/ai-agent-demo-small.mp4)

## 为什么选择 NimoteCode？

NimoteCode 将 SSH、代码编辑、终端、Git 审查与 AI Agent 放在同一个移动工作区中，方便从查看项目一路完成修改、验证与审查。结合 [1.2.3 发布说明](https://github.com/mobiledevloperlab/nimotecode/releases)，它进一步支持与 Local Linux 共享本地项目、在应用外显示任务状态、可配置终端控制与更具韧性的 SSH 会话。下表比较常见工作流；具体能力取决于客户端及主机工具配置，已有能力不代表本版本新增。窄屏可横向滑动表格查看完整对比。

| 能力 | SSH 终端工作流 | AI Agent 终端工作流 | NimoteCode |
| --- | --- | --- | --- |
| 远程 SSH | 连接主机并运行命令 | 经 SSH 使用主机上的 Agent | SSH Explorer、编辑器与终端共享项目上下文 |
| 代码编辑与项目目录 | 使用主机编辑器或客户端文件工具 | Agent 修改文件，人工检查依赖配套工具 | 内置编辑器；支持通过系统选择器打开沙盒外项目目录 |
| Git 审查 | 使用 Git 命令或配套界面 | Agent 可调用 Git，仍需人工审查 | 横屏编辑器内查看 Diff、提交与冲突；Git 状态随文件变化刷新 |
| AI Agent | 单独安装并认证 CLI | 使用已配置的 Agent CLI | 内置 Agent、兼容 ACP Agent；Claude Code / Codex CLI 需在自己的主机上单独安装和认证，并非内置 |
| Android Local Linux | 取决于客户端是否提供本地运行环境 | 取决于 CLI 与本地环境兼容性 | 支持的 Android 设备上通过 PRoot 运行免 root Ubuntu；iOS 不支持 |
| LSP / 诊断 | 取决于编辑器与语言工具 | 通过配套编辑器或检查命令 | 支持语言的编辑器诊断，需配置相应语言工具 |
| 调试 | 使用主机调试器或配套工具 | 可辅助排查，交互调试依赖其他工具 | 工作区内调试，需相应运行时与调试工具 |
| 网页预览 | 使用浏览器及所需网络配置 | 启动服务后通过浏览器检查 | 应用内网页预览，包括 HTML 快照 |

<a id="选择你的第一个开发任务"></a>

## Real Workflows：三个实际开发案例

**打开项目 → 编辑 → 运行检查 → 审查 Git diff**

1. **远程 SSH：修复一个失败测试**

   按[SSH 远程开发教程](resources/remote-development-from-phone.md)连接主机，先运行原有测试，再编辑、重跑并审查 diff。**适用：Android / iOS，需要可访问的开发主机。**

2. **AI Coding：检查并修复一个问题**

   使用[Claude Code on Phone](resources/claude-code-on-phone.md)或[Codex on Mobile](examples/codex-over-ssh/README.md)，让主机上的 CLI 先检查问题，再审查修改并运行项目检查。**CLI 并非内置，需单独安装和认证；服务访问权限与费用另计。**

3. **Android Local Linux：运行第一个脚本**

   按[Android 免 root Linux 教程](resources/android-linux-development.md)，在新目录中运行 Bash 示例，检查输出后编辑并重跑。**适用：Android 8+ ARM64 / x86_64 支持设备；基于 PRoot，iOS 不支持。**

文件已在设备上？也可以从本地工作区开始编辑。语言工具链、LSP 和调试器所需工具取决于所选环境。

## 按你的习惯使用 AI

| 方式 | 如何工作 |
| --- | --- |
| **内置 Agent** | 理解项目上下文的助手，可结合文件、终端与 Git 信息。 |
| **ACP Agent** | 在 SSH 工作区接入兼容的外部 Agent，权限与进度集中在一条时间线中查看。 |
| **Claude Code / Codex** | 在自己的主机上运行，通过终端使用。 |

<details>
<summary>查看全部核心能力</summary>

| 模块 | 你可以做什么 |
| --- | --- |
| 资源管理器与搜索 | 浏览并搜索项目文件。 |
| 编辑器 | 编辑文件，并查看受支持语言的 LSP 诊断。 |
| 终端 | 在本地、Android 本地 Linux 或远程主机上运行命令与任务。 |
| Tasks | 运行并查看项目任务。 |
| 源代码管理 | 查看 Git 状态与 diff，进行提交、拉取与推送。 |
| 调试器 | 使用调试器逐步排查代码。 |
| 预览 | 预览网页输出，包括 HTML 快照。 |
| AI | 使用内置 Agent、ACP Agent，或经 SSH 使用 Claude Code / Codex。 |

</details>

## 开始使用 NimoteCode

[**Android — Google Play 下载**](https://play.google.com/store/apps/details?id=com.nimote.nimotecode) · [**iPhone / iPad — App Store 下载**](https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253)

查看[平台要求与下载说明](https://nimotecode.com/zh/download?utm_source=github&utm_medium=referral&utm_campaign=developer_workflows&utm_content=readme_zh_download)。

**版本发布节奏：**Android 会先发布。受 App Store 审核影响，iPhone 和 iPad 版本通常会比 Android 晚一个版本。

安装后，按[快速开始](https://nimotecode.com/zh/docs/quick-start)打开本地项目或连接 SSH 主机；支持的 Android 设备也可以选择 Local Linux。

## 移动开发指南

面向离开桌面环境的开发场景，覆盖本地、远程、Android Linux、Git 与 AI 工作流。

- [移动开发资源](resources/README.md) —— 完整指南索引
- [工作流示例](examples/README.md) —— SSH、Codex、Claude Code 与 Android 本地 Linux 配置
- [NimoteCode 文档](https://nimotecode.com/zh/docs/quick-start) —— 安装与功能参考

## Linux Presets

Android 本地 Linux 的可选环境预设（含版本化清单与校验脚本）位于独立仓库。

[Linux Presets](https://github.com/mobiledevloperlab/nimote-linux-presets) · [预设概览](presets/README.md) · [Android 本地 Linux 文档](https://nimotecode.com/zh/docs/local-linux)

## 最新更新

**1.2.3 亮点**

- 在 Android Local Linux 的 `/mnt/local` 与应用本地项目共享同一份文件。
- 在 iPhone/iPad 实时活动或可关闭的 Android 通知中查看已观测到的 AI 与终端任务状态。
- 选择紧凑或扩展终端扩展按键行，使用专注模式，并在短暂中断后保留 SSH 会话。

<details>
<summary>查看 1.1.5–1.2.3 的更多更新</summary>

### 1.2.3 重点更新

- **共享 Local Linux 项目（Android）：** 在 Local Linux 中开启「共享本地项目」后，可在 Linux 工作区的 `/mnt/local` 打开与应用本地项目完全相同的文件；也可将手机目录导入为共享项目，或导出项目副本。
- **应用外的任务状态：** iPhone 和 iPad 可通过实时活动显示已观测到的 AI 与终端任务；Android 可通过可关闭的通知显示。它们只展示最近一次状态，不会让任务在后台持续运行。
- **移动端终端控制：** 可选择紧凑或扩展的扩展按键行，使用单次或锁定修饰键，并通过专注模式为终端腾出更多空间。
- **更具韧性的 SSH 与更深邃的深色主题：** 进入后台不再立即丢弃仍存活的 SSH 会话或 Explorer 状态；默认深色主题现采用 AMOLED 纯黑画布，并调整表面与对比度颜色。

### 1.2.1–1.2.2 重点更新

- **打开应用沙盒外的项目目录：** 在 Android 和 iPadOS/iPhone 上，可通过系统选择器打开应用自身文档目录之外的项目目录；NimoteCode 会记住授权，并通过安全的文件 Provider 读写。
- **横屏编辑器内的 Git 页面：** 在停靠式横屏工作区中，Git Diff、提交 Diff 与冲突解决页面直接在编辑器区域打开，与设置页、Markdown 预览位置一致。
- **近乎实时的 Git 状态：** Explorer 装饰与源代码管理会随终端、Explorer 或外部工具引起的文件变化即时更新，而不再等待轮询。
- **更统一、更聚焦的 IDE：** 面板、标签页、编辑器 Chrome、终端表面与 AI 视图共享统一的视觉系统，横屏工作区更聚焦，大屏可读性更好。
- **更精细的默认值与可靠性：** 更紧凑的 Explorer 默认值、点击不再收起键盘的 “/” 终端预置、可承受短暂中断的 SSH 会话，新安装默认使用英文。

### 1.1.5–1.2.0 重点更新

从 1.1.5 到 1.2.0，NimoteCode 围绕 Android 与 iOS 的移动开发体验完成了多项重要更新：

- **更完整的移动工作区：** 支持编辑器双栏分屏、应用内浏览器与媒体预览、Git 历史和 Diff 审查，并提升终端与 SSH 工作流的可靠性。
- **AI 与 Agent 工作流：** AI 工作区提供更丰富的上下文和最近任务、全局 Agent 状态提示、外部 ACP Agent、斜杠命令，并让 Claude Code、Codex 等工具共享一致的远程环境。
- **Android 本地 Linux：** 在支持的 Android 设备上，可免 root 使用包含 Bash、Git 和 SSH 的 Ubuntu 环境；iOS 暂不支持此功能。
- **更精细的移动界面：** 布局会根据可用空间自适应；界面缩放、Explorer 显示偏好、主题与 AI 时间线让信息更清晰、操作更可控。
- **更好的触控与键盘编辑：** Android 平板和 iPad 可使用 Monaco；手机继续使用 Nimote Editor，文本选择、剪贴板、Diff、外接键盘、CJK 输入与软键盘处理均有提升。

</details>

🗒️ [查看发布说明](https://github.com/mobiledevloperlab/nimotecode/releases)

## 社区

NimoteCode 持续迭代。欢迎提交问题、Bug 或建议，你的反馈将帮助改进产品。

💬 [Discord](https://discord.gg/tTxbpqYmhR) · [GitHub Issues](https://github.com/mobiledevloperlab/nimote_issues/issues) · [X](https://x.com/mobiledevlab)

⭐ Star 本仓库，关注 NimoteCode 与新的移动开发资源。

[![Star NimoteCode](https://img.shields.io/github/stars/mobiledevloperlab/nimotecode?style=social)](https://github.com/mobiledevloperlab/nimotecode)

## 关于本仓库

NimoteCode 是商业闭源应用。本公共仓库是以下内容的官方入口：

- 产品文档
- 移动开发指南
- 工作流示例
- Android Linux 预设
- 发布说明
- 社区 Issue 与反馈

NimoteCode 应用源码不在此仓库发布。已公开的 Local Linux 源码包与许可声明属于第三方组件，不代表 NimoteCode 应用开源。

<details>
<summary>维护本站文档</summary>

在本地构建网站与文档：

```bash
npm ci
npm run docs:build
npm run docs:check
```

使用 `npm run docs:dev` 在本地预览。

</details>

## 许可证

除非另有声明，内容为网站与文档。 [本地 Linux 源码与许可证](https://nimotecode.com/zh/docs/local-linux-source) · Linux Presets：[MIT](https://github.com/mobiledevloperlab/nimote-linux-presets/blob/master/LICENSE)。
