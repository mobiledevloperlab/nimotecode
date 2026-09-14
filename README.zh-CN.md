<p align="center">
  <img src="docs/public/app_icon_round.png" alt="NimoteCode 标志" width="72" height="72">
</p>

<h1 align="center">NimoteCode</h1>

<p align="center">简体中文 · <a href="README.md">English</a></p>

<p align="center">项目、终端、Git、调试器与 AI Agent ——<br>都在同一移动工作区。</p>

<p align="center">
  <a href="https://nimotecode.com/zh/"><img src="https://img.shields.io/badge/官网-nimotecode.com-4f46e5?style=flat-square" alt="NimoteCode 官网"></a>
  <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode"><img src="https://img.shields.io/badge/Google_Play-安装-34A853?style=flat-square&logo=googleplay&logoColor=white" alt="从 Google Play 安装 NimoteCode"></a>
  <a href="https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253"><img src="https://img.shields.io/badge/App_Store-下载-0D96F6?style=flat-square&logo=appstore&logoColor=white" alt="从 App Store 下载 NimoteCode"></a>
  <a href="https://nimotecode.com/zh/docs/quick-start"><img src="https://img.shields.io/badge/文档-快速开始-24292f?style=flat-square&logo=readthedocs&logoColor=white" alt="NimoteCode 文档"></a>
</p>

> [!IMPORTANT]
> **请从商店安装。** 当前 GitHub Release 附带的安装包是较早的构建，不包含 1.1.6–1.1.7 的重要更新。新版 NimoteCode 正在通过 [Google Play](https://play.google.com/store/apps/details?id=com.nimote.nimotecode) 和 [App Store](https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253) 推送；在你所在地区可用后，请前往商店下载或更新。
>
> **本轮重点更新：**1.1.6 加入首次启动引导，并提升编辑器、浏览器、Git 与 iOS 输入的可靠性；1.1.7 带来 Android 本地 Linux、HTML 快照预览、外部 ACP Agent 和统一 SSH 登录环境。1.1.8 将开启 **Early Access Pro**，面向希望提前体验 Pro 工作流并参与后续打磨的用户。[查看发布说明](https://github.com/mobiledevloperlab/nimotecode/releases)。

<p align="center">
  <img src="docs/public/screenshots/nimote-pro-framed.webp" alt="NimoteCode 移动 IDE，在平板和手机上展示本地与 SSH 工作区" width="1000">
</p>

## 一个工作区。完整开发闭环。

**探索 → 编辑 → 运行 → AI → 调试 → 审查 → 交付**

Explorer、编辑器、搜索、终端、任务、诊断、调试器、Git、预览与 AI，都在一个工作区中。

## 演示

<div align="center" style="padding: 24px 16px; background: radial-gradient(ellipse at center, rgba(56, 139, 253, 0.16) 0%, rgba(56, 139, 253, 0) 72%);">
  <video src="https://github.com/user-attachments/assets/531d62fc-4874-41b9-96af-1ac9d2ad6fd6" controls muted playsinline width="420" poster="docs/public/videos/nimotecode-poster.jpg" style="display: block; max-width: 100%; margin: 0 auto; border: 1px solid rgba(56, 139, 253, 0.28); border-radius: 16px; box-shadow: 0 12px 32px rgba(27, 31, 35, 0.18);">
    打开 <a href="https://github.com/user-attachments/assets/531d62fc-4874-41b9-96af-1ac9d2ad6fd6">AI Agent 演示视频</a>。
  </video>
</div>

## 像 IDE 一样构建，而不只是 SSH 终端

| 编码 | 运行 | 理解 | 交付 |
| --- | --- | --- | --- |
| Explorer | 终端 | LSP 诊断 | Git 状态 |
| 编辑器 | Tasks | 代码操作 | Diff 审查 |
| 项目搜索 | 多终端 | 调试器 | 提交 / 分支 |
| 预览 | Commands | AI 辅助修复 | Push |

许多移动工具只提供 shell。NimoteCode 还保留了围绕它的 IDE 工作流。

## 一个 IDE。三种环境。

| 本地工作区 | Android 本地 Linux | 远程 SSH |
| --- | --- | --- |
| 直接使用本地文件 | Ubuntu + PRoot，无 Android root | Mac / Linux / VPS |
| 快速编辑 | ARM64 / x86_64 | 将重型工具链留在主机 |
| 编辑器、Git 与 AI | 同一 IDE | 同一工作流 |

切换环境，不必切换开发工作流。

> [!NOTE]
> **按任务选择工作区。** 快速处理文件可使用本地工作区；支持的 Android 设备可通过 Android 本地 Linux 获得免 root 的 Ubuntu 环境；项目或工具链已在另一台设备上时，使用远程 SSH。

## 按你的方式使用 AI Agent

| 内置 Agent | ACP Agent | CLI Agent |
| --- | --- | --- |
| 项目感知 AI | 兼容的 ACP Agent | Claude Code / Codex |
| 文件、终端与 Git 上下文 | 统一的移动工作流 | 在自己的主机上运行 |
| 集成式体验 | SSH 工作区集成 | 通过终端使用 |

可选择内置 Agent、兼容的 ACP Agent，或在自己的主机上运行 Claude Code / Codex，同时在移动端保留编辑器、终端与 Git 工作流。

> [!TIP]
> **按需选择 Agent 路径。** 希望获得一体化体验时，直接使用内置 Agent；在 SSH 工作区中使用兼容的外部 Agent 时选择 ACP；也可以在自己的主机终端中运行 Claude Code / Codex。

## 直接在 Android 上进行 Linux 开发

Ubuntu 通过 PRoot 运行，无需 Android root。

**ARM64 · x86_64 · Ubuntu 24.04**

[本地 Linux 文档](https://nimotecode.com/zh/docs/local-linux) · [Linux Presets](https://github.com/mobiledevloperlab/nimote-linux-presets)

## 开发者资源

移动开发 · Android Linux · 远程开发 · AI 编程

[浏览资源](resources/README.md) · [移动工作流指南](resources/mobile-coding-workflows.md) · [示例](examples/README.md) · [文档](https://nimotecode.com/zh/docs/quick-start)

🗒️ [产品更新说明](https://github.com/mobiledevloperlab/nimotecode/releases)

## 关注移动开发的未来

NimoteCode 探索完整移动 IDE 工作流、Android Linux、远程开发与移动端 AI 编程。

⭐ Star 项目，关注它的进展。

[![Star NimoteCode](https://img.shields.io/github/stars/mobiledevloperlab/nimotecode?style=social)](https://github.com/mobiledevloperlab/nimotecode)

## 社区

💬 [Discord](https://discord.gg/tTxbpqYmhR) · [GitHub Issues](https://github.com/mobiledevloperlab/nimote_issues/issues) · [X](https://x.com/mobiledevlab)

## 开发

NimoteCode 应用源码不在此仓库发布。本仓库包含官方网站、文档、开发者资源、工作流示例和产品更新说明。可按以下方式构建网站与文档：

```bash
npm ci
npm run docs:build
npm run docs:check
```

使用 `npm run docs:dev` 在本地预览。

## 许可证

除非另有声明，内容为网站与文档。 [本地 Linux 源码与许可证](https://nimotecode.com/zh/docs/local-linux-source) · Linux Presets：[MIT](https://github.com/mobiledevloperlab/nimote-linux-presets/blob/master/LICENSE)。
