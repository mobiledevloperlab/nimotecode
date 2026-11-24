---
title: "下载与安装 | NimoteHost"
description: "NimoteHost 下载与安装说明与操作步骤。"
---

# 下载与安装

**NimoteHost 目前仅支持局域网连接。** **请将手机和运行 Host 的电脑接入同一局域网，并使用电脑的局域网地址通过 SSH 连接。

## 开始前

准备一台能通过 SSH 登录的 Linux、macOS 或 Windows 电脑，以及 SSH 账号有权访问的项目目录。用同一个账号安装和连接。手机端需要 NimoteCode 2.4.1 或更新版本、Pro 权益及兼容的 Host。

## 从 NimoteCode 安装 {#install-over-ssh}

在 NimoteCode 2.5.0 中打开 **Host** 并建立 SSH 连接。出现安装提示时按提示操作，电脑需要能访问 GitHub Releases。通过 Nimote Connect 部署的 Host，请使用其对应的安装或更新入口。

## 手动安装发布包 {#host-install}

社区版 2.5.0 提供 CLI 和桌面包。如果 App 没有显示安装入口，或无法下载发布包，请按下文手动安装。

从[社区版发布页](https://github.com/mobiledevloperlab/nimotehost/releases/tag/community-v2.5.0)下载与电脑匹配的完整压缩包。服务器选 **CLI**，需要图形界面则选包含 CLI 的 **桌面包**。不确定系统或 CPU 时，查看[安装包选择](/zh/docs/host/compatibility)。先核对压缩包的 SHA-256，再完整解压。[校验方法](https://github.com/mobiledevloperlab/nimotehost/blob/master/docs/deployment.md#install-from-a-website-download) 在发布页，CLI 压缩包以 `nimotehost-` 开头，桌面压缩包以 `nimotehost-gui-` 开头。

使用 SSH 登录时的同一账号，在解压目录打开终端。Linux 和 macOS 上，运行安装命令时无需 `sudo`。

### Linux 或 macOS

```sh
./nimotehost setup
./nimotehost deploy status
```

### Windows PowerShell

```powershell
.\nimotehost.exe setup
.\nimotehost.exe deploy status
```

`setup` 安装完整包并启动当前用户的后台服务。`deploy status` 检查安装状态。看到 `"running": true` 后，在 NimoteCode 中打开 **Host**，选择 SSH 连接并填写电脑上的项目目录。

后台服务在 Linux 上需要 systemd 用户管理器，在 macOS 或 Windows 上需要已登录桌面的用户。仅想试用或没有用户服务环境时，在解压目录运行 `./nimotehost start`（Windows：`.\nimotehost.exe start`），并保持终端窗口打开。

### 从源码构建 {#host-source}

所需环境和构建命令见[仓库的源码构建指南](https://github.com/mobiledevloperlab/nimotehost#build-and-run)。

[概览](/zh/docs/host) · [连接、终端与任务](/zh/docs/host/sessions)
