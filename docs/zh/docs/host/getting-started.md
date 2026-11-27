---
title: "安装 Nimote Connect 以使用 Host 会话 | NimoteCode"
description: "Nimote Connect 会安装运行托管终端、任务和兼容 Agent 会话所需的 NimoteHost 服务。请使用有权访问项目的 SSH 账号，并保持电脑和 Host 服务运行。App 内的 Host 会话需要 Pro。"
---

# 安装 Nimote Connect 以使用 Host 会话

Nimote Connect 会安装运行托管终端、任务和兼容 Agent 会话所需的 NimoteHost 服务。请使用有权访问项目的 SSH 账号，并保持电脑和 Host 服务运行。App 内的 Host 会话需要 Pro。

## 从 NimoteCode 安装 {#install-over-ssh}

在 NimoteCode 中打开 **开发主机**，选择该电脑的 SSH 连接，再打开 **Host**。缺少 Host 时，点击 **安装 Nimote Connect**。向导会选择 SSH 主机、下载匹配的安装包并校验安装结果。出现设备批准提示时按提示操作。App 内自动安装与更新适用于受支持的 64 位 macOS 和 Linux。

## 手动安装 {#host-install}

如果向导无法加载安装包，或目标电脑运行 Windows，请直接在电脑上安装 Nimote Connect。从[官方发布页](https://github.com/mobiledevloperlab/nimote-connect/releases)下载匹配的安装包和 SHA-256 文件，校验后解压。使用与 SSH 相同的用户，在 macOS 或 Linux 运行 `./install.sh`，在 Windows PowerShell 运行 `.\install.ps1`。完成后重新连接并打开 **Host**。

## NimoteHost 源码 {#host-source}

[NimoteHost 源码仓库](https://github.com/mobiledevloperlab/nimotehost)仍提供源码和独立社区版。NimoteCode 的安装流程使用 Nimote Connect。

[概览](/zh/docs/host) · [安装包兼容性](/zh/docs/host/compatibility)
