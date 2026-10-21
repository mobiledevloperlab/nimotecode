---
title: "SSH + 移动编程仍然支离破碎，所以我自己做了一款 IDE"
description: "多数移动编程工具只能编辑代码或只提供终端；真实开发需要 SSH、文件、终端与 Git 协同，因此我做了一款移动 IDE。"
author: "NimoteCode 团队"
date: "2026-06-11"
lastUpdated: "2026-06-11"
tags: ["ssh", "flutter", "移动 ide", "devops"]
image: /blog/ssh-mobile-coding-is-still-broken-so-i-built-my-own-ide/image-1.png
---

# SSH + 移动编程仍然支离破碎，所以我自己做了一款 IDE

<p class="article-meta">发布于 2026-06-11 · NimoteCode 团队</p>

我试过很多移动编程工具——SSH 应用、代码编辑器、云 IDE。它们大多有用却并不完整：要么只能编辑代码，要么只提供终端，要么像是把桌面工具硬塞进手机。

但真实开发并不只是「写代码」，而是 SSH、文件、终端和 Git 必须同时在场。

因此，我开始构建一款移动优先的 IDE：**NimoteCode**。想法很简单：

> 一个工作区应该包含完整所需能力，而不是一堆彼此分离的应用。

- 本地与 SSH 工作区
- 内置终端
- 在同一位置查看代码与项目结构
- 移动优先的体验，而非桌面端的复制品

<img src="/blog/ssh-mobile-coding-is-still-broken-so-i-built-my-own-ide/image-1.png" width="1604" height="901" alt="Android 上连接远程项目的 NimoteCode SSH 工作区" loading="lazy" decoding="async">

<img src="/blog/ssh-mobile-coding-is-still-broken-so-i-built-my-own-ide/image-2.png" width="1597" height="896" alt="移动端 NimoteCode 远程文件资源管理器与代码编辑器" loading="lazy" decoding="async">

<img src="/blog/ssh-mobile-coding-is-still-broken-so-i-built-my-own-ide/image-3.png" width="1598" height="893" alt="移动端 NimoteCode 内置终端与 Git 视图" loading="lazy" decoding="async">

## 设计最终落点

与其复制桌面工具，工作区应把核心循环放在一起：通过 [SSH 工作区](/zh/docs/ssh)连接，在 Explorer 中检查项目，在[编辑器](/zh/docs/editor)编辑文件，在[终端](/zh/docs/terminal)运行并验证命令，再在[源代码管理](/zh/docs/source-control)中审查结果。

它既不是纯终端客户端，也不是独立编辑器；它为开发者离开桌面时真正会做的、聚焦且可审查的工作而建。完整模型请参阅 [SSH IDE](/zh/ssh-ide) 和 [SSH 远程开发工作流](/zh/docs/ssh)。

## 试试看

NimoteCode 已在 Google Play 面向 Android 上线，App Store 版本也即将推出。请从[下载](/zh/download)页面获取。

> 你怎么看：今天的移动开发已经实用，还是本质上仍然碎片化？

这篇文章也是构建故事的一部分：继续阅读[为什么现有 Flutter 代码编辑器会失效](/zh/blog/why-existing-flutter-code-editors-broke-down-when-i-built-a-mobile-ide)，以及[为什么我选择做一款移动 IDE，而不是另一个 AI App](/zh/blog/why-i-decided-to-build-a-mobile-ide-instead-of-another-ai-app)。

## 相关内容

- [面向远程开发的 SSH IDE](/zh/ssh-ide) —— 通过 SSH 浏览项目、编辑代码和审查 Git
- [用手机或平板远程编程](/zh/remote-coding) —— 远程优先工作流的实践方式
- [为什么现有 Flutter 代码编辑器会失效](/zh/blog/why-existing-flutter-code-editors-broke-down-when-i-built-a-mobile-ide) —— 编辑器重建背后的故事

<div class="seo-cta">
  <p><strong>关于作者</strong> · 正在构建 <a href="/zh/">NimoteCode</a>，一款使用 Flutter 和 Rust 开发、移动优先的 IDE。可在 <a href="https://dev.to/ma_dev">DEV.to</a> · <a href="https://github.com/mobiledevloperlab">GitHub</a> · <a href="https://x.com/mobiledevlab">X</a> 关注项目。</p>
  <p class="seo-cta-actions"><a href="/zh/download?utm_source=blog&utm_medium=organic&utm_campaign=ssh_broken_download" class="home-page-btn primary">下载 NimoteCode</a><a href="/zh/ssh-ide?utm_source=blog&utm_medium=organic&utm_campaign=ssh_broken_workflow" class="home-page-btn secondary">了解远程开发</a></p>
</div>
