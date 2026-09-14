---
title: Android 本地 Linux 故障排查 | NimoteCode
description: 排查 Android 上 NimoteCode 本地 Linux 常见的安装、软件包、架构与生命周期问题。
---

# Android 本地 Linux 故障排查

## 看不到或无法安装本地 Linux

确认设备为 Android 8+，且应用环境为 64 位 ARM64 或 x86_64；检查剩余存储和网络后重试。iOS 和 32 位 ARM 不支持本地 Linux。

## 软件包安装失败

先阅读完整 APT 错误。常见原因包括存储不足、软件包索引不可用、网络/DNS 失败或并发的软件包事务。不要删除 lock 文件或运行任意恢复命令；等待活动事务结束，并按包管理器报告的状态处理。

## container 能运行、Android 上不能运行

PRoot 不是虚拟机。重新检查架构、软件包可用性，以及 ptrace、`/proc`、进程创建、符号链接和可执行位等假设。若工具以 preset 提供，优先参考 [Presets 仓库的 runtime 兼容性与测试记录](https://github.com/mobiledevloperlab/nimote-linux-presets/tree/main/docs)。

## 应用切到后台后环境停止

Android 可能暂停或结束后台进程。回到本地 Linux 页面重新启动并连接工作区。若任务需要长期服务或桌面级资源，请使用远程 SSH 主机。

许可证问题请见[本地 Linux 对应源码与许可证](/zh/docs/local-linux-source)；安全与校验请见[安全与完整性](/zh/docs/local-linux/security-integrity)。
