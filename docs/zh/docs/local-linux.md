---
title: Android 免 root 运行 Ubuntu｜本地 Linux | NimoteCode
description: 在 Android 手机上免 root 使用 Ubuntu、Bash、Git 和 SSH。了解本地 Linux 的设备要求、适用场景，以及何时选择远程开发。
---

# Android 本地 Linux

在 Android 手机上的 Ubuntu 环境运行小脚本、使用 Git 和轻量开发工具。无需获取 Android Root 权限。

[安装并运行第一条命令](/zh/docs/local-linux/getting-started)

需要 Docker、长期运行的服务，或已有电脑工具链时，请使用 [SSH 工作区](/zh/docs/ssh)。[本地 Linux 的限制](/zh/docs/local-linux/compatibility)

<div id="local-linux-requirements"></div>

## 使用条件

- **设备**：Android 8+，使用 ARM64 或 x86_64 的 64 位应用；不支持 iPhone、iPad 和 32 位 ARM。
- 支持的 Android 设备可免费运行基础本地 Linux。开发工具管理与共享目录导入需要 Pro。
- **工具**：内置 Ubuntu、Bash、Git 和 SSH；语言工具链、语言服务、调试工具和外部 Agent CLI 需另行配置。

环境通过 PRoot 共享 Android 内核，不是虚拟机，也不会授予 Android root 权限。后台任务受 Android 进程管理影响。

## 接下来

- **[故障排查](/zh/docs/local-linux/troubleshooting)**：处理安装、软件包和后台停止问题。
- **[运行原理](/zh/docs/local-linux/architecture)** · **[安全与校验](/zh/docs/local-linux/security-integrity)** · **[源码与许可证](/zh/docs/local-linux-source)**
