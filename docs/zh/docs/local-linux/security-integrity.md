---
title: "本地 Linux 安全：软件包、校验与凭据保护 | NimoteCode"
description: "核对本地 Linux 下载内容和 Presets 的 SHA-256，选择可信软件源，保护 SSH 与 AI 服务商凭据。"
---

# Android 本地 Linux 安全与完整性

使用可信的软件包，并保护在本地 Linux 中使用的账号与凭据。

## 验证安装内容

- 使用 preset 或 runtime bundle 前阅读 release manifest。
- 对下载的资产和脚本核对发布的 SHA-256。
- 使用有文档记录的 APT 源；安装软件包会改变环境，并可能需要网络。

## 保护访问

- 将 Provider 凭据保存于受保护存储，避免粘贴到日志或 AI prompt 中。
- 远程主机使用最小权限 SSH 账号；本地 Linux 的 SSH 仅监听回环地址。
- 接受 AI 修改前审查命令与 Git Diff。

Preset 的 manifest、脚本哈希与验证说明见 [Linux Presets](/zh/docs/local-linux/presets)；内置环境的对应源码和许可证说明见[本地 Linux 对应源码与许可证](/zh/docs/local-linux-source)。
