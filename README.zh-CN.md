<p align="center">
  <img src="docs/public/app_icon_round.png" alt="NimoteCode 标志" width="72" height="72">
</p>

<h1 align="center">NimoteCode</h1>

<p align="center"><strong>面向真实开发的移动 IDE</strong></p>

<p align="center">项目、终端、Git、调试器与 AI Agent ——<br>都在同一移动工作区。</p>

<p align="center">随时编码，随时交付。</p>

<p align="center">SSH · Android 本地 Linux · AI Agent · Git · LSP · 调试</p>

<p align="center">
  <a href="https://nimotecode.com/zh/"><img src="https://img.shields.io/badge/官网-nimotecode.com-4f46e5?style=flat-square" alt="NimoteCode 官网"></a>
  <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode"><img src="https://img.shields.io/badge/Google_Play-安装-34A853?style=flat-square&logo=googleplay&logoColor=white" alt="从 Google Play 安装 NimoteCode"></a>
  <a href="https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253"><img src="https://img.shields.io/badge/App_Store-下载-0D96F6?style=flat-square&logo=appstore&logoColor=white" alt="从 App Store 下载 NimoteCode"></a>
  <a href="https://nimotecode.com/zh/docs/quick-start"><img src="https://img.shields.io/badge/文档-快速开始-24292f?style=flat-square&logo=readthedocs&logoColor=white" alt="NimoteCode 文档"></a>
</p>

<p align="center">
  <img src="docs/public/screenshots/p1.png" alt="NimoteCode 移动工作区，包含代码编辑器、Android 本地 Linux、SSH 与 AI Agent" width="860">
</p>

## 一个工作区。完整开发闭环。

**探索 → 编辑 → 运行 → AI → 调试 → 审查 → 交付**

Explorer、编辑器、搜索、终端、任务、诊断、调试器、Git、预览与 AI，全部在一个工作区中。

## 像 IDE 一样构建，而不只是 SSH 终端

| 编码 | 运行 | 理解 | 交付 |
| --- | --- | --- | --- |
| Explorer | 终端 | LSP 诊断 | Git 状态 |
| 编辑器 | Tasks | 代码操作 | Diff 审查 |
| 项目搜索 | 多终端 | 调试器 | 提交 / 分支 |
| 预览 | Commands | AI 辅助修复 | Push |

许多移动工具只提供 shell。NimoteCode 还保留了围绕它的 IDE 工作流。相关配置和套餐要求适用。

## 一个 IDE。三种环境。

| 本地工作区 | Android 本地 Linux | 远程 SSH |
| --- | --- | --- |
| 直接使用本地文件 | Ubuntu + PRoot，无 Android root | Mac / Linux / VPS |
| 快速编辑 | ARM64 / x86_64 | 将重型工具链留在主机 |
| 编辑器、Git 与 AI | 同一 IDE | 同一工作流 |

切换环境，不必切换开发工作流。

## 按你的方式使用 AI Agent

```text
内置 Agent
      │
      ├── 项目感知 AI
      ├── SSH 工作区中的 ACP Agent
      └── 通过终端使用 Claude Code / Codex
```

可选择内置 Agent、兼容的 ACP Agent，或在自己的主机上运行 Claude Code / Codex，同时保留移动端的编辑器、终端与 Git 工作流。

## 演示

<p align="center">
  <video src="https://github.com/user-attachments/assets/531d62fc-4874-41b9-96af-1ac9d2ad6fd6" controls muted playsinline width="420" poster="docs/public/videos/nimotecode-poster.jpg">
    打开 <a href="https://github.com/user-attachments/assets/531d62fc-4874-41b9-96af-1ac9d2ad6fd6">AI Agent 演示视频</a>。
  </video>
</p>

## 直接在 Android 上进行 Linux 开发

通过 PRoot 运行 Ubuntu，无需 Android root。

**ARM64 · x86_64 · Ubuntu 24.04**

[本地 Linux 文档](https://nimotecode.com/zh/docs/local-linux) · [Linux Presets](https://github.com/mobiledevloperlab/nimote-linux-presets)

## 开发者资源

[资源](resources/README.md) · [示例](examples/README.md) · [文档](https://nimotecode.com/zh/docs/quick-start)

## 关注移动开发的未来

如果你关注完整 IDE 工作流、Android Linux、远程开发和移动端 AI 编程，⭐ 为 NimoteCode 点 Star 以关注项目。

[![Star NimoteCode](https://img.shields.io/github/stars/mobiledevloperlab/nimotecode?style=social)](https://github.com/mobiledevloperlab/nimotecode)

## 社区

[Discord](https://discord.gg/tTxbpqYmhR) · [GitHub Issues](https://github.com/mobiledevloperlab/nimote_issues/issues) · [X](https://x.com/mobiledevlab)

## 开发

公开网站、文档与开发者资源；应用源码不在此发布。构建：

```bash
npm ci
npm run docs:build
npm run docs:check
```

使用 `npm run docs:dev` 本地预览。

## 许可证

除非另有声明，内容为网站与文档。 [本地 Linux 源码与许可证](https://nimotecode.com/zh/docs/local-linux-source) · Linux Presets：[MIT](https://github.com/mobiledevloperlab/nimote-linux-presets/blob/master/LICENSE)。
