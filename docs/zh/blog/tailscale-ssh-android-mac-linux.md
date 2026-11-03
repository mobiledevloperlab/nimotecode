---
answer: "将 Android 与开发主机接入同一 tailnet，开启主机 SSH 服务，再使用主机地址和本地账号连接。这是 Tailscale 网络上的普通 SSH。"
title: "Android 远程开发：通过 Tailscale 与 SSH 连接 Mac 或 Linux"
description: "通过 Tailscale 与普通 SSH 将 Android 连接到 Mac 或 Linux，并验证编辑、检查与重连。"
date: "2026-09-04"
lastUpdated: "2026-11-03"
author: "NimoteCode 团队"
---

# Android 远程开发：通过 Tailscale 与 SSH 连接 Mac 或 Linux

本文使用 Tailscale 网络上的普通 SSH，将 Android 连接到 Mac 或 Linux 开发主机，不启用单独的 [Tailscale SSH 服务端功能](https://tailscale.com/docs/features/tailscale-ssh)。你需要一台保持唤醒的主机、同一 tailnet 的访问权限、SSH 账号，以及允许连接的网络策略。

## 1. 将两台设备接入网络

通过[官方下载入口](https://tailscale.com/download)在 Android 与主机上安装 Tailscale，登录同一 tailnet 并开启连接。从应用中复制主机的 Tailscale IPv4 地址。如果命令行工具可用，也可以运行：

```bash
tailscale ip -4
tailscale status
```

这里需要主机地址，不是手机地址。能看到设备，不代表 SSH 流量一定被允许。

## 2. 开启主机 SSH 服务

macOS 打开“系统设置 → 通用 → 共享 → 远程登录”，仅允许预期用户访问。登录时使用主机的本地账号名，它可能与 Tailscale 身份不同。

在使用 systemd 的 Ubuntu/Debian 系统上，安装并启动 OpenSSH：

```bash
sudo apt update
sudo apt install openssh-server
sudo systemctl enable --now ssh
sudo systemctl status ssh
```

[Ubuntu OpenSSH 指南](https://ubuntu.com/server/docs/how-to/security/openssh-server/)介绍服务安装与认证配置。其他发行版的包名或服务名可能不同。主机防火墙需允许预期的 tailnet 流量；本教程不要求在路由器上开放 22 端口。

## 3. 在 NimoteCode 中创建连接

按照 [SSH 工作区指南](/zh/docs/ssh)创建连接，填写以下信息：

| 字段 | 内容 |
| --- | --- |
| Host | 主机的 Tailscale 地址 |
| Port | SSH 服务配置的端口，通常为 22 |
| Username | Mac 或 Linux 主机上的本地账号 |
| Authentication | 主机接受的密钥或密码 |

首次接受连接前，将显示的主机密钥指纹与从主机获得的可信信息核对。不要关闭验证来绕过不匹配问题。Tailscale 连通性与 SSH 认证是两个独立检查环节。

## 4. 验证一个完整开发步骤

打开仓库根目录，确认当前分支，在临时分支上修改一个小文件，运行项目的常规检查。提交前审查 diff。编译发生在主机上，因此主机需要预先安装项目依赖。

随后关闭 Wi-Fi，改用移动数据测试。重连后确认工作目录与已保存内容。长时间运行的进程可能需要独立的会话保持策略；SSH 能连接不代表进程一定能在断线后存活。

## 5. 按失败层次排查

| 现象 | 优先检查 |
| --- | --- |
| 超时 | 主机休眠、tailnet 连通性、策略与防火墙 |
| 连接被拒绝 | SSH 服务与端口 |
| 权限被拒绝 | 主机用户名、授权公钥与允许的登录方式 |
| 登录后命令失败 | 工作目录、依赖与主机权限 |

配置完成后，仍需维护主机更新与访问权限。网络通路让机器可达，不会代替你维护开发环境。

## 操作演示

<figure>
  <video controls playsinline preload="metadata" aria-label="Android SSH 配置演示">
    <source src="/videos/android_ssh_public_guide.mp4" type="video/mp4">
    当前浏览器不支持内嵌视频。
  </video>
  <figcaption>NimoteCode 团队提供的 Android SSH 工作流演示。即使录制时已完成前置配置，也请按文字步骤核对。</figcaption>
</figure>
