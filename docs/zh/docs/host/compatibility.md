---
title: "硬件支持与版本选择 | NimoteHost"
description: "请按运行 NimoteHost 的电脑／服务器的操作系统和 CPU 架构选择安装包，即使你正在手机上下载，也应以 Host 主机为准。然后按需选择 CLI 或桌面版，并确认该发行版本与 NimoteCode 客户端兼容。"
---

# 硬件支持与版本选择

请按**运行 NimoteHost 的电脑／服务器的操作系统和 CPU 架构**选择安装包，即使你正在手机上下载，也应以 Host 主机为准。然后按需选择 CLI 或桌面版，并确认该发行版本与 NimoteCode 客户端兼容。

## 当前发行支持矩阵

以 NimoteHost Community 2.5.0 为基准。下表表示当前发行构建目标；完整原生平台与手机／Agent 实机验收仍待完成。下载时以所选 Release 实际提供的附件为准。

| Host 系统／CPU | 安装包标记 | CLI | 桌面版 |
| --- | --- | --- | --- |
| Linux · Intel/AMD x64 | `linux-amd64` | ✓ | ✓ |
| Linux · ARM64 | `linux-arm64` | ✓ | ✓ |
| Linux · x86 (32-bit) | `linux-386` | ✓ | — |
| macOS · Apple Silicon | `darwin-arm64` | ✓ | ✓ |
| macOS · Intel | `darwin-amd64` | ✓ | ✓ |
| Windows · Intel/AMD x64 | `windows-amd64` | ✓ | ✓ |
| Windows · ARM64 | `windows-arm64` | ✓ | ✓ |
| Windows · x86 (32-bit) | `windows-386` | ✓ | — |

## 如何确认 Host 架构

Linux／macOS：在 Host 上运行 `uname -m`。`x86_64` 对应 `amd64`；`aarch64` 或 `arm64` 对应 `arm64`；`i386` 或 `i686` 为 32 位 x86（`386`，这里只适用于 Linux CLI）。Windows：打开「设置 → 系统 → 系统信息／关于 → 系统类型」，同时确认处理器和已安装系统的位数。64 位 CPU 上安装了 32 位系统时，应选 32 位包。

`amd64` 同时适用于 Intel 和 AMD 的 x64 处理器；`arm64` 是 64 位 ARM，包括 Apple 芯片。当前不提供 32 位 ARM、32 位桌面包或 32 位 macOS。ARM64 硬件还需运行匹配的 64 位系统，不能仅凭设备品牌判断支持情况。

## 系统条件与支持边界

无桌面的服务器选 CLI；需要图形管理器时选桌面包，桌面包已包含 CLI，并要求匹配的原生桌面环境。Linux 桌面版要求 glibc 2.35 或更新版本，不能据此认定 Alpine／musl 系统可用。macOS 包目前尚未签名或公证。

目前未公布统一的最低内存、磁盘空间或 GPU 指标，应按项目工具链、并发任务和 Agent 工具需求准备资源。接入云端 Agent 不代表必须在 Host 上运行本地模型或配备 GPU；各工具的硬件要求需另行核对。

后台服务需要 Linux systemd 用户管理器、macOS 已登录的图形会话或 Windows 用户登录计划任务。缺少对应环境时可先以前台 CLI 试运行。SSH 需另外配置，主机应保持唤醒且网络可达。

[源码与构建目标](https://github.com/mobiledevloperlab/nimotehost/blob/master/README.md) · [发行版本](https://github.com/mobiledevloperlab/nimotehost/releases/tag/community-v2.5.0) · [待完成验收](https://github.com/mobiledevloperlab/nimotehost/blob/master/docs/pending.md)

[下载与安装](/zh/docs/host/getting-started)
