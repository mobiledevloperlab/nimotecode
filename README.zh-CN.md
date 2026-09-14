<p align="center">
  <img src="docs/public/app_icon.png" alt="NimoteCode 标志" width="72" height="72">
</p>

<h1 align="center">NimoteCode</h1>

<p align="center"><strong>面向真实开发的移动 IDE</strong></p>

<p align="center">随时写代码，随时交付。</p>

<p align="center">从 SSH 连接或 AI 请求，到已验证的 Git 变更——始终保留项目上下文。</p>

<p align="center">SSH · AI 编程 · Git · 终端 · Android 本地 Linux</p>

<p align="center">
  <a href="https://nimotecode.com/zh/"><img src="https://img.shields.io/badge/官网-nimotecode.com-4f46e5?style=flat-square" alt="NimoteCode 官网"></a>
  <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode"><img src="https://img.shields.io/badge/Google_Play-安装-34A853?style=flat-square&logo=googleplay&logoColor=white" alt="从 Google Play 安装 NimoteCode"></a>
  <a href="https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253"><img src="https://img.shields.io/badge/App_Store-下载-0D96F6?style=flat-square&logo=appstore&logoColor=white" alt="从 App Store 下载 NimoteCode"></a>
  <a href="https://nimotecode.com/zh/docs/quick-start"><img src="https://img.shields.io/badge/文档-快速开始-24292f?style=flat-square&logo=readthedocs&logoColor=white" alt="NimoteCode 文档"></a>
</p>

<p align="center">
  <img src="docs/public/screenshots/p1.png" alt="NimoteCode 移动工作区，包含代码编辑器、Android 本地 Linux、SSH 与 AI Agent" width="860">
</p>

## 完成完整的开发闭环

多数移动工具止步于终端或聊天窗口。NimoteCode 将当前项目、Explorer、编辑器、终端、Git 审查、预览和 AI 辅助置于同一个移动工作区，让你可以完成检查、编辑、运行、审查到交付的真实改动。

让源代码、凭据、工具链和长时间运行的任务留在合适的主机上；使用手机或平板在完整项目上下文中完成聚焦的修改。

## 三种工作方式

| 远程开发 | Android 本地 Linux | AI 编程 |
| --- | --- | --- |
| **SSH → Mac / Linux / VPS**<br>将远程连接变成可工作的项目：浏览、编辑、运行检查并原地审查 Diff。 | **Ubuntu + PRoot → ARM64 / x86_64**<br>需要在设备上使用工具时，获得免 root 的本地环境，而不只是远程访问。 | **内置 AI Agent**<br>让 AI 处于其需要的文件、终端输出和 Git 变更旁；也可在自己的主机上使用 Claude Code 与 Codex。 |
| [手机远程开发指南](resources/remote-development-from-phone.md) · [SSH 文档](https://nimotecode.com/zh/docs/ssh) | [本地 Linux 文档](https://nimotecode.com/zh/docs/local-linux) · [工作流示例](examples/android-local-linux/README.md) | [移动 AI 编程](resources/mobile-ai-coding.md) · [Claude Code](examples/claude-code-over-ssh/README.md) · [Codex](examples/codex-over-ssh/README.md) |

## 演示

<p align="center">
  <video src="https://github.com/user-attachments/assets/531d62fc-4874-41b9-96af-1ac9d2ad6fd6" controls muted playsinline width="420" poster="docs/public/videos/nimotecode-poster.jpg">
    你的浏览器不支持嵌入式视频。请改为打开 <a href="https://github.com/user-attachments/assets/531d62fc-4874-41b9-96af-1ac9d2ad6fd6">AI Agent 演示视频</a>。
  </video>
</p>

## 始终保持连接的能力

| 项目上下文 | 开发闭环 | 可控的 AI |
| --- | --- | --- |
| 本地项目<br>SSH 工作区<br>Android 本地 Linux | Explorer 与编辑器<br>终端、Tasks、Git、搜索<br>LSP、调试、预览 | AI Chat 与 AI Agent<br>Provider 配置<br>通过 SSH 使用 Claude Code / Codex |

## Android 本地 Linux

在受支持的 Android 设备上直接使用 Ubuntu 开发环境，由 PRoot 驱动，无需 Android root。

**ARM64 · x86_64 · Ubuntu 24.04**

[本地 Linux 文档](https://nimotecode.com/zh/docs/local-linux) · [Linux Presets](https://github.com/mobiledevloperlab/nimote-linux-presets) · [Presets 概览](presets/README.md)

Linux Presets 负责技术 manifest、安装器、验证记录与发布资产。兼容性和安装细节请前往该仓库查看。

## 开发者资源

- [移动开发](resources/mobile-development.md)
- [Android Linux 开发](resources/android-linux-development.md)
- [从手机进行远程开发](resources/remote-development-from-phone.md)
- [移动 AI 编程](resources/mobile-ai-coding.md)
- [在手机上使用 Claude Code](resources/claude-code-on-phone.md)

更多任务导向的配置请见 [examples](examples/README.md)；产品文档请访问 [nimotecode.com/docs](https://nimotecode.com/zh/docs/quick-start)。

## 对移动开发感兴趣？

⭐ 为 NimoteCode 点 Star，关注项目进展，也帮助更多开发者发现实用的移动开发工作流。

[![Star NimoteCode](https://img.shields.io/github/stars/mobiledevloperlab/nimotecode?style=social)](https://github.com/mobiledevloperlab/nimotecode)

## 社区

[Discord](https://discord.gg/tTxbpqYmhR) · [GitHub Issues](https://github.com/mobiledevloperlab/nimote_issues/issues) · [X](https://x.com/mobiledevlab)

## 开发

本仓库包含公开网站、文档和开发者资源；应用源码不在此发布。进行网站开发时：

```bash
npm ci
npm run docs:build
npm run docs:check
```

使用 `npm run docs:dev` 本地预览。Linux Preset 的修改请遵循 [Linux Presets 仓库](https://github.com/mobiledevloperlab/nimote-linux-presets)中的贡献说明。

## 许可证

除非文件另有声明，本仓库包含 NimoteCode 网站与文档内容。Android 本地 Linux 的对应源码和第三方许可证声明请见[本地 Linux 对应源码与许可证](https://nimotecode.com/zh/docs/local-linux-source)。Linux Presets 使用独立的 [MIT 许可证](https://github.com/mobiledevloperlab/nimote-linux-presets/blob/master/LICENSE)。
