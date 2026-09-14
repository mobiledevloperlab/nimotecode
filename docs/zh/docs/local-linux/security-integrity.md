---
title: Android 本地 Linux 安全与完整性 | NimoteCode
description: 在 Android 上验证本地 Linux 资产，并使用安全的软件包、SSH、凭据与 PRoot 实践。
---

# Android 本地 Linux 安全与完整性

本地 Linux 是开发用户空间，而不是 Android root 机制。应将其视为独立的文件与软件包环境，同时保护 Android、SSH 与 Provider 凭据。

## 验证安装内容

- 使用 preset 或 runtime bundle 前阅读 release manifest。
- 对下载的资产和脚本核对发布的 SHA-256。
- 使用有文档记录的 APT 源；安装软件包会改变环境，并可能需要网络。
- 不要将 rootfs、`.zst` 资产或 release bundle 复制到官网仓库。

## 保护访问

- 将 Provider 凭据保存于受保护存储，避免粘贴到日志或 AI prompt 中。
- 远程主机使用最小权限 SSH 账号；本地 Linux 的 SSH 仅监听回环地址。
- 接受 AI 修改前审查命令与 Git Diff。

Preset 的 manifest、脚本哈希与验证说明见 [Linux Presets](/zh/docs/local-linux/presets)；内置环境的对应源码和许可证说明见[本地 Linux 对应源码与许可证](/zh/docs/local-linux-source)。
