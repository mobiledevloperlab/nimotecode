<p align="center">
  <img src="docs/public/app_icon_round.png" alt="NimoteCode 标志" width="72" height="72">
</p>

<h1 align="center">NimoteCode</h1>

<p align="center">简体中文 · <a href="README.md">English</a></p>

<p align="center">为真实开发打造的移动 IDE<br>项目、终端、Git、调试器与 AI Agent —— 都在同一移动工作区。</p>

<p align="center"><b>Early Access Pro —— 登录免费获得</b><br>登录即可在 Early Access 期间解锁 Pro 功能。</p>

<p align="center">
  <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode"><img src="https://img.shields.io/badge/Google_Play-安装-34A853?style=flat-square&logo=googleplay&logoColor=white" alt="从 Google Play 安装 NimoteCode"></a>
  <a href="https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253"><img src="https://img.shields.io/badge/App_Store-下载-0D96F6?style=flat-square&logo=appstore&logoColor=white" alt="从 App Store 下载 NimoteCode"></a>
  <a href="https://nimotecode.com/zh/"><img src="https://img.shields.io/badge/官网-nimotecode.com-4f46e5?style=flat-square" alt="NimoteCode 官网"></a>
  <a href="https://nimotecode.com/zh/docs/quick-start"><img src="https://img.shields.io/badge/文档-快速开始-24292f?style=flat-square&logo=readthedocs&logoColor=white" alt="NimoteCode 文档"></a>
</p>

<p align="center">
  <img src="docs/public/screenshots/nimote-pro.webp" alt="NimoteCode 移动 IDE，在平板和手机上展示本地与 SSH 工作区" width="1000">
</p>

## 一个工作区。完整开发闭环。

**探索 → 编辑 → 运行 → AI → 调试 → 审查 → 交付**

选定工作区、完成修改、运行验证、审查 diff，改动就绪即可交付 —— 全程无需离开 App。

## 演示

> [!TIP]
> **NimoteCode 持续迭代，并由开发者反馈共同塑造。**欢迎通过 [GitHub Issues](https://github.com/mobiledevloperlab/nimote_issues/issues) 提交建议、问题或 Bug；我们会阅读并回复每一条反馈。

<div align="center" style="padding: 24px 16px; background: radial-gradient(ellipse at center, rgba(56, 139, 253, 0.16) 0%, rgba(56, 139, 253, 0) 72%);">
  <video src="https://github.com/user-attachments/assets/531d62fc-4874-41b9-96af-1ac9d2ad6fd6" controls muted playsinline width="420" poster="docs/public/videos/nimotecode-poster.jpg" style="display: block; max-width: 100%; margin: 0 auto; border: 1px solid rgba(56, 139, 253, 0.28); border-radius: 16px; box-shadow: 0 12px 32px rgba(27, 31, 35, 0.18);">
    打开 <a href="https://github.com/user-attachments/assets/531d62fc-4874-41b9-96af-1ac9d2ad6fd6">AI Agent 演示视频</a>。
  </video>
</div>

## 为什么选择 NimoteCode？

**不只是远程终端。**

| 能力 | SSH 客户端 | AI Agent 终端 | NimoteCode |
| --- | :---: | :---: | :---: |
| 远程 SSH | ✅ | ✅ | ✅ |
| 代码编辑器 | — | — | ✅ |
| Git 工作流 | — | — | ✅ |
| AI Agent | — | ✅ | ✅ |
| Android 本地 Linux | — | — | ✅ |
| LSP / 诊断 | — | — | ✅ |
| 调试 | — | — | ✅ |
| 网页预览 | — | — | ✅ |

以上为各类方案的常见能力，实际取决于你正在使用的工具。

## 三种开发方式

| 方式 | 适用场景 | 你将获得 |
| --- | --- | --- |
| **远程 SSH** | 项目在 Mac、Linux 主机或 VPS 上。 | 直接操作真实主机，重型工具链与服务留在主机端。 |
| **Android 本地 Linux** | 希望在设备本身使用 Linux 工具。 | 在支持 ARM64 与 x86_64 的 Android 设备上，通过 PRoot 使用免 root 的 Ubuntu。 |
| **本地工作区** | 文件已在手机或平板上。 | 快速编辑文件，并使用同一套编辑器、终端、Git 与 AI 工作流。 |

切换工作区后，浏览、编辑、运行与审查项目的方式保持不变。

## 按你的习惯使用 AI

| 方式 | 如何工作 |
| --- | --- |
| **内置 Agent** | 理解项目上下文的助手，可结合文件、终端与 Git 信息。 |
| **ACP Agent** | 在 SSH 工作区接入兼容的外部 Agent，权限与进度集中在一条时间线中查看。 |
| **Claude Code / Codex** | 在自己的主机上运行，通过终端使用。 |

## 核心能力

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

## 立即体验 NimoteCode

NimoteCode 目前处于 Early Access。

登录即可解锁 Early Access Pro，在 Early Access 期间无需额外费用，体验完整的开发流程。

<p>
  <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode"><img src="https://img.shields.io/badge/Google_Play-安装-34A853?style=flat-square&logo=googleplay&logoColor=white" alt="从 Google Play 安装 NimoteCode"></a>
  <a href="https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253"><img src="https://img.shields.io/badge/App_Store-下载-0D96F6?style=flat-square&logo=appstore&logoColor=white" alt="从 App Store 下载 NimoteCode"></a>
</p>

## 移动开发指南

面向离开桌面环境的开发场景，覆盖本地、远程、Android Linux、Git 与 AI 工作流。

- [移动开发资源](resources/README.md) —— 完整指南索引
- [工作流示例](examples/README.md) —— SSH、Codex、Claude Code 与 Android 本地 Linux 配置
- [NimoteCode 文档](https://nimotecode.com/zh/docs/quick-start) —— 安装与功能参考

## Linux Presets

Android 本地 Linux 的可选环境预设（含版本化清单与校验脚本）位于独立仓库。

[Linux Presets](https://github.com/mobiledevloperlab/nimote-linux-presets) · [预设概览](presets/README.md) · [Android 本地 Linux 文档](https://nimotecode.com/zh/docs/local-linux)

## 最新更新

近期版本新增首次启动引导、Android 本地 Linux、HTML 快照预览、外部 ACP Agent 与灵活的工作区目录；并修复了 SSH 凭据、Tasks、Source Control 与 Diff、Git 刷新、终端、AI 和 Local Linux 的可靠性问题。1.1.8 同时开启 **Early Access Pro**。

商店版本即为当前版本，GitHub Release 附带的构建可能较旧。

🗒️ [查看发布说明](https://github.com/mobiledevloperlab/nimotecode/releases)

## 社区

欢迎提问、反馈 Bug 或提出想法 —— 每一条反馈我们都会阅读。

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

NimoteCode 应用源码不在此仓库发布。

在本地构建网站与文档：

```bash
npm ci
npm run docs:build
npm run docs:check
```

使用 `npm run docs:dev` 在本地预览。

## 许可证

除非另有声明，内容为网站与文档。 [本地 Linux 源码与许可证](https://nimotecode.com/zh/docs/local-linux-source) · Linux Presets：[MIT](https://github.com/mobiledevloperlab/nimote-linux-presets/blob/master/LICENSE)。
