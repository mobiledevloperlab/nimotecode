---
title: Android 免 root 运行 Ubuntu｜本地 Linux | NimoteCode
description: 在 Android 手机上免 root 使用 Ubuntu、Bash、Git 和 SSH。了解本地 Linux 的设备要求、适用场景，以及何时选择远程开发。
---

# Android 本地 Linux

Local Linux 将 Ubuntu 开发环境带到 Android 设备，无需 root。在 NimoteCode 中编辑文件、使用 Bash、Git 和 SSH，让代码与命令留在同一个工作区。

[安装并运行第一条命令](/zh/docs/local-linux/getting-started)

## 可以用来做什么

- 在设备上运行 Shell 脚本和轻量项目任务。
- 编辑文件，检查 Git 状态与代码差异。
- 按项目需要安装语言工具，或选择可选的 [Linux Presets 工具集](/zh/docs/local-linux/presets)。

已有服务器环境、Docker 工作负载或长时间构建，建议使用 [SSH 工作区](/zh/docs/ssh)。选择本地工具前，可先查看[兼容性与运行限制](/zh/docs/local-linux/compatibility)。

<div id="local-linux-requirements"></div>

## 使用条件

- **设备**：Android 8+，使用 ARM64 或 x86_64 的 64 位应用；不支持 iPhone、iPad 和 32 位 ARM。
- **权益**：需要 Early Access Pro，具体可用性见应用内[当前账号状态](/zh/docs/account-subscription)。
- **工具**：内置 Ubuntu、Bash、Git 和 SSH；语言工具链、语言服务、调试工具和外部 Agent CLI 需另行配置。

环境通过 PRoot 共享 Android 内核，不是虚拟机，也不会授予 Android root 权限。后台任务受 Android 进程管理影响。

## 接下来

- **[故障排查](/zh/docs/local-linux/troubleshooting)**：处理安装、软件包和后台停止问题。
- **[运行原理](/zh/docs/local-linux/architecture)** · **[安全与校验](/zh/docs/local-linux/security-integrity)** · **[源码与许可证](/zh/docs/local-linux-source)**
