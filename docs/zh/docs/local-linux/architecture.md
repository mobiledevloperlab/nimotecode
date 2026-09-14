---
title: Android 本地 Linux 架构 | NimoteCode
description: 了解 Android、PRoot、Ubuntu 与回环 SSH 如何构成 NimoteCode 本地 Linux 工作区。
---

# Android 本地 Linux 架构

本地 Linux 有四层边界：Android 管理应用存储与生命周期；PRoot 呈现 Linux 用户空间；Ubuntu 提供 root filesystem 与 APT 软件包；NimoteCode 通过本地 SSH 连接打开工作区。

## PRoot 的作用与限制

PRoot 可让进程看到替代 root 目录并映射部分文件系统预期，但不授予 Android root。它不是虚拟机，因此依赖 ptrace、特殊挂载、特权网络或精确 `/proc` 语义的工具，不应默认与桌面 Linux 完全一致。

## 本地 SSH 边界

内置 SSH 服务只监听设备回环地址，供 NimoteCode 将 Explorer、编辑器、终端、Git、AI、Tasks、LSP 与 Debug 接入同一环境；它不是对外暴露的网络 SSH 服务。

Android 可能暂停或停止后台工作。返回应用后可重新启动本地 Linux；需要长时间服务或桌面级资源的工作应放在远程主机。参见[兼容性](/zh/docs/local-linux/compatibility)与[故障排查](/zh/docs/local-linux/troubleshooting)。
