---
title: Android 本地 Linux 兼容性 | NimoteCode
description: 在 Android 上使用 NimoteCode 本地 Linux 前，检查设备、架构、runtime 与工作负载的兼容性预期。
---

# Android 本地 Linux 兼容性

本地 Linux 支持 Android 8+ 的 64 位 ARM64 和 x86_64 设备，不支持 iOS 与 32 位 ARM。内置环境的输入目标为这两种架构上的 Ubuntu 24.04；精确 runtime 与 preset 声明应以已发布 manifest 为准。

## 适合的本地工作

- Shell 脚本、小型工具、学习和聚焦的项目任务。
- 安装后使用 Git 操作和轻量语言工具。
- 希望文件与命令留在设备上的任务。

## 更适合远程开发的情况

- 构建需要移动设备难以稳定提供的 CPU、内存、存储或持久服务。
- 项目依赖桌面容器、公司网络、硬件或既有主机工具链。
- 工具尚未在 PRoot 下验证，尤其涉及调试、ptrace 或进程控制。

独立的 [Linux Presets](/zh/docs/local-linux/presets) 仓库记录可选 preset 的架构、Ubuntu 版本与测试策略；container 成功不等于 Android PRoot 兼容。
