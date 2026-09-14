---
title: "如何使用 Android 作为远程 IDE：借助 Tailscale 和 NimoteCode 免费 SSH 访问 Mac 与 Linux"
description: "学习如何将 Android 用作远程 IDE，借助 Tailscale 和 NimoteCode 免费 SSH 访问 Mac 与 Linux；无需公网 IP 或路由器端口映射。"
date: "2026-09-04"
lastUpdated: "2026-09-04"
author: "NimoteCode 团队"
---

# 如何使用 Android 作为远程 IDE：借助 Tailscale 和 NimoteCode 免费 SSH 访问 Mac 与 Linux

<p class="article-meta">发布于 2026-09-04 · NimoteCode 团队</p>

这是一套最短可执行的教程：通过 Tailscale 和 SSH，让 Android 上的 NimoteCode 连接到 Mac 或 Linux。你不需要公网 IP，也不需要配置路由器端口映射。

<div class="home-page-video blog-post-video">
  <figure class="home-page-video-shell blog-post-video-shell">
    <video class="home-page-video-player blog-post-video-player" controls preload="metadata" playsinline aria-label="如何使用 Android 作为远程 IDE 的 SSH 指南">
      <source src="/videos/android_ssh_public_guide.mp4" type="video/mp4">
      您的浏览器不支持内嵌视频。
    </video>
    <figcaption>Android SSH 远程 IDE 指南演示</figcaption>
  </figure>
</div>

<style>
.blog-post-video,
.blog-post-video-shell {
  width: 100%;
}

.blog-post-video {
  margin-top: 24px;
}

.blog-post-video-shell {
  max-width: 960px;
  padding: 0;
  aspect-ratio: auto;
  min-height: 0;
}

.blog-post-video-player {
  width: 100%;
  height: auto;
  max-height: none;
  display: block;
  object-fit: contain;
}
</style>

## macOS：用命令安装 Tailscale

先确认是否已安装 Homebrew：

```bash
brew --version
```

如果没有 Homebrew，先安装：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

然后安装 Tailscale：

```bash
brew install --cask tailscale
```

启动 Tailscale：

```bash
open -a Tailscale
```

首次启动会打开登录页面。登录你的 Tailscale 账号后，查看本机 Tailscale IPv4 地址：

```bash
tailscale ip -4
```

通常会得到类似地址：

```text
100.80.12.34
```

确认连接状态：

```bash
tailscale status
```

## macOS：确认 SSH 已开启

打开“远程登录”：

```bash
sudo systemsetup -setremotelogin on
```

确认状态：

```bash
sudo systemsetup -getremotelogin
```

应该看到：

```text
Remote Login: On
```

你也可以测试本机 SSH。请将 `your_username` 替换为你的 macOS 用户名：

```bash
ssh your_username@localhost
```

## Linux：只需命令行

Linux 不需要图形界面。安装一次 Tailscale 客户端和后台服务后，它会持续在后台运行。以 Ubuntu 或 Debian 为例：

```bash
curl -fsSL https://tailscale.com/install.sh | sh
```

启动并登录 Tailscale：

```bash
sudo tailscale up
```

命令会给出一个登录链接；在浏览器中完成授权后，查看 Tailscale IP 和连接状态：

```bash
tailscale ip -4
tailscale status
```

Linux 服务器尤其适合这种方式：**安装一次 → 后台运行 → 之后基本不用管理**。随后在 NimoteCode 中使用该 `100.x.x.x` 地址、端口 `22`、Linux 用户名以及密码或 SSH 密钥即可。

## Android：安装 Tailscale 并连接 NimoteCode

在 Google Play 搜索并安装 **Tailscale**，然后：

1. 打开 Tailscale。
2. 使用与 Mac 相同的账号登录。
3. 点击开启连接。
4. 确认设备列表中可以看到你的 Mac。

接着在 Android 上打开 NimoteCode，新建 SSH 连接：

```text
Host: 100.x.x.x
Port: 22
Username: 你的 macOS 用户名
Auth: Password 或 SSH Key
```

其中 `100.x.x.x` 就是 Mac 上执行 `tailscale ip -4` 得到的地址。

最后建议关闭手机 Wi-Fi，使用 **4G/5G** 再测试一次。如果 NimoteCode 仍能 SSH 连接 Mac，就说明已成功实现：

**Android 手机 → Tailscale → 家里/办公室 Mac → SSH**

## 在 NimoteCode 中使用 Tailscale 连接

Tailscale 为 Android 设备与 Mac 或 Linux 提供一条私有网络路径；NimoteCode 则将这条私有 SSH 连接变成完整的移动开发工作区。

在 NimoteCode 创建连接后，你可以：

- 打开远程项目根目录，通过 Explorer 浏览文件，无需记忆路径。
- 在手机或平板上直接编辑 Mac 或 Linux 机器上的源代码。
- 在内置 SSH 终端中运行测试、构建、Git 命令与诊断命令。
- 在发布改动前审查 Git diff、分支和提交记录。
- 在同一项目上下文中使用 AI Chat 与 Agent，结合远程文件、终端输出和代码进行工作。

这就是“能远程访问”和“能在外完成真实开发工作”之间的区别。Tailscale 负责安全的私有网络通路，NimoteCode 则把文件、编辑器、终端、Git 审查和 AI 辅助放在同一个工作区。

<div class="seo-cta">
  <p><strong>将你的 Tailscale 设备连接到 NimoteCode，在 Android 上把远程代码、终端和 Git 工作流放在一起。</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode&utm_source=nimotecode&utm_medium=organic&utm_campaign=tailscale_ssh_guide" class="home-page-btn primary" target="_blank" rel="noreferrer">下载 NimoteCode Android 版</a>
    <a href="/zh/demo?utm_source=tailscale_ssh_guide&utm_medium=organic&utm_campaign=watch_demo" class="home-page-btn secondary">观看演示</a>
  </p>
</div>

## 这套方案能带来什么

有了 Tailscale 和 NimoteCode，即使 Android 与 Mac 或 Linux 位于不同网络，你也能安全地在移动端完成开发工作，无需将 SSH 直接暴露到公网，也无需配置路由器端口映射。
