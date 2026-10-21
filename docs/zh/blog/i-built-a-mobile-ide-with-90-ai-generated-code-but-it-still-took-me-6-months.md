---
title: "用约 90% AI 生成的代码做了一款移动 IDE，仍然花了 6 个月"
description: "一款移动 IDE 的发布故事：约 90% 的代码由 AI 生成，仍花了六个月。AI 加速了什么，又没有替你完成什么？"
author: "NimoteCode 团队"
date: "2026-06-20"
lastUpdated: "2026-06-20"
tags: ["ai 编程", "独立开发", "移动 ide", "工程"]
image: /blog/i-built-a-mobile-ide-with-90-ai-generated-code-but-it-still-took-me-6-months/image-1.png
---

# 用约 90% AI 生成的代码做了一款移动 IDE，仍然花了 6 个月

<p class="article-meta">发布于 2026-06-20 · NimoteCode 团队</p>

我最近在 Google Play 发布了一款移动 IDE。**约 90% 的代码由 AI 工具生成；架构、产品决策、测试与迭代由我负责。**

这听上去理应很快，现实却是：它仍然花了大约 **6 个月的持续工作**。

<img src="/blog/i-built-a-mobile-ide-with-90-ai-generated-code-but-it-still-took-me-6-months/image-1.png" width="968" height="605" alt="开发中的 NimoteCode 移动 IDE 界面" loading="lazy" decoding="async">

## AI 实际帮上了什么

AI 显著加快了样板代码、UI 实现、功能骨架、重构建议和调试辅助。它减少了逐行敲代码的时间。

## 但哪些事情依然耗时

即使大量使用 AI，系统设计与架构决策、保证功能之间的正确性、测试边界条件下的 UI 行为、修复 AI 生成逻辑的不一致，以及整合 SSH、Git 和远程执行等复杂工作流，仍然占用了大量时间。

## 关键现实

对于复杂应用，AI 并不会移除开发中最难的部分；它改变了工作负载。你不再主要花时间编写代码，而会花更多时间验证输出、纠正假设、清晰定义约束，并反复测试真实世界中的行为。

## 我学到的事

今天的 AI 非常擅长加速实现，但距离取代系统级思考、产品决策、正确性保证和端到端测试还很远。实际感受更像是「AI 替你提高作为开发者的吞吐量」，而不是「AI 替你构建软件」。

## 这个应用

最终产物是一款提供 SSH 远程开发环境、Git 工作流支持、移动代码编辑和 AI 辅助编程能力的移动 IDE。它已在 Google Play 上线，可从[下载](/zh/download)页面获取。

## 最后的想法

AI 没有降低对开发者的需求；它改变了开发者花时间的地方。

这正是编辑器、SSH、终端和 Git 必须作为一个系统构建的起点。可继续阅读[为什么现有 Flutter 代码编辑器会失效](/zh/blog/why-existing-flutter-code-editors-broke-down-when-i-built-a-mobile-ide)，以及[为什么我选择做一款移动 IDE，而不是另一个 AI App](/zh/blog/why-i-decided-to-build-a-mobile-ide-instead-of-another-ai-app)。产品总览请参阅 [NimoteCode 功能特性](/zh/features) 与 [移动 IDE](/zh/mobile-ide)。

## 相关内容

- [移动 IDE 总览](/zh/mobile-ide) —— 这段构建故事最终产出的工作区
- [为什么现有 Flutter 代码编辑器会失效](/zh/blog/why-existing-flutter-code-editors-broke-down-when-i-built-a-mobile-ide) —— 编辑器重建背后的原因
- [NimoteCode 功能特性](/zh/features) —— 当前的 SSH、终端、Git、LSP 与调试能力

<div class="seo-cta">
  <p><strong>关于作者</strong> · 正在构建 <a href="/zh/">NimoteCode</a>，一款使用 Flutter 和 Rust 开发、移动优先的 IDE。可在 <a href="https://dev.to/ma_dev">DEV.to</a> · <a href="https://github.com/mobiledevloperlab">GitHub</a> · <a href="https://x.com/mobiledevlab">X</a> 关注项目。</p>
  <p class="seo-cta-actions"><a href="/zh/download?utm_source=blog&utm_medium=organic&utm_campaign=90percent_ai_download" class="home-page-btn primary">下载 NimoteCode</a><a href="/zh/docs/quick-start?utm_source=blog&utm_medium=organic&utm_campaign=90percent_ai_quickstart" class="home-page-btn secondary">阅读快速开始</a></p>
</div>
