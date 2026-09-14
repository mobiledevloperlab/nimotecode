---
title: 移动开发技术资源 | NimoteCode
description: 关于移动开发、Android Linux、PRoot、SSH 远程开发、移动 AI 编程与编码 Agent 工作流的实用技术资源。
---

# 移动开发技术资源

本页为开发者选择工作环境、理解手机如何进入真实工程闭环提供技术起点。内容先解释取舍；当你需要将移动编辑器、SSH 终端、Git 审查和本地 Linux 工作区组合起来时，NimoteCode 才是其中的产品选择。

## 选择开发环境

| 问题 | 资源 | 下一步 |
| --- | --- | --- |
| 该在本地、远程还是云环境完成工作？ | [移动开发：选择工作区](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/mobile-development.md) | [示例与工作流](https://github.com/mobiledevloperlab/nimotecode/tree/main/examples) |
| Termux、PRoot、AVF、SSH 和云开发环境如何不同？ | [Android Linux 开发](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/android-linux-development.md) | [本地 Linux 概览](/zh/docs/local-linux) |
| 什么时候应让代码继续留在远程主机？ | [从手机进行远程开发](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/remote-development-from-phone.md) | [SSH 工作区](/zh/docs/ssh) |

## AI 编程与 SSH 工作流

- [移动 AI 编程](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/mobile-ai-coding.md) 说明如何让 Agent 工作保持可检查、可测试。
- [SSH 开发工具](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/ssh-development-tools.md) 将安全连接与编辑器、终端、Git 审查能力对应起来。
- [在手机上使用 Claude Code](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/claude-code-on-phone.md) 描述主机安装 Agent 的流程，不暗示 NimoteCode 会安装或代理该工具。
- [Claude Code](https://github.com/mobiledevloperlab/nimotecode/tree/main/examples/claude-code-over-ssh) 与 [Codex](https://github.com/mobiledevloperlab/nimotecode/tree/main/examples/codex-over-ssh) 示例将这些原则整理成可审查的 SSH 闭环。

## Android 本地 Linux 与 Presets

Android 本地 Linux 在支持的 Android 设备上通过 PRoot 使用 Ubuntu。先阅读[概览](/zh/docs/local-linux)，再查看[架构](/zh/docs/local-linux/architecture)、[兼容性](/zh/docs/local-linux/compatibility)和[安全与完整性](/zh/docs/local-linux/security-integrity)。可选工具集、manifest、哈希和测试记录由独立的 [NimoteCode Linux Presets](https://github.com/mobiledevloperlab/nimote-linux-presets) 仓库维护。

全部英文技术资源源文件均版本化保存在[主仓库](https://github.com/mobiledevloperlab/nimotecode/tree/main/resources)；针对性的修正或补充请通过 [NimoteCode Issues](https://github.com/mobiledevloperlab/nimote_issues/issues) 提出。
