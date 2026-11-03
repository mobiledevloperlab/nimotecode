---
answer: "AI 帮助生成实现代码，但架构、集成与验收仍需持续投入。文中的 90% 是回顾性估计，不是测量得出的生产力提升。"
title: "用约 90% AI 生成的代码做了一款移动 IDE，仍然花了 6 个月"
description: "一款移动 IDE 的发布故事：约 90% 的代码由 AI 生成，仍花了六个月。AI 加速了什么，又没有替你完成什么？"
author: "NimoteCode 团队"
date: "2026-06-20"
lastUpdated: "2026-11-03"
tags: ["ai 编程", "独立开发", "移动 ide", "工程"]
image: /blog/i-built-a-mobile-ide-with-90-ai-generated-code-but-it-still-took-me-6-months/image-1.png
---

# 用约 90% AI 生成的代码做了一款移动 IDE，仍然花了 6 个月

我最近在 Google Play 发布了一款移动 IDE。**约 90% 的代码由 AI 工具生成；架构、产品决策、测试与迭代由我负责。**

这听上去理应很快，现实却是：它仍然花了大约 **6 个月的持续工作**。

<figure>
  <img src="/blog/i-built-a-mobile-ide-with-90-ai-generated-code-but-it-still-took-me-6-months/image-1.png" width="968" height="605" alt="NimoteCode 产品展示图；多个界面组合，不代表一次连续操作" loading="lazy" decoding="async">
  <figcaption>NimoteCode 产品展示图；多个界面组合，不代表一次连续操作。 来源：NimoteCode 团队。</figcaption>
</figure>

## 如何理解 90% 这个数字

“约 90%”是作者对 AI 辅助生成代码的回顾性估计，并非对最终代码行数的审计，也不是受控生产力实验。六个月是项目历时，不是与纯人工开发的对照。这两个数字都不能证明 AI 节省了多少时间。

更有用的评估方法是记录任务、生成改动、人工修正、测试结果和验收耗时，并把返工计入成本。生成得快不等于集成得快。对这个项目而言，可复用的经验是缩小每次改动，让架构、错误处理和跨功能行为始终处于可审查范围。

## AI 实际帮上了什么

在我的使用体验中，AI 加快了样板代码、UI 实现、功能骨架、重构建议和调试辅助。它减少了逐行敲代码的时间。

## 但哪些事情依然耗时

即使大量使用 AI，系统设计与架构决策、保证功能之间的正确性、测试边界条件下的 UI 行为、修复 AI 生成逻辑的不一致，以及整合 SSH、Git 和远程执行等复杂工作流，仍然占用了大量时间。

## 关键现实

对于复杂应用，AI 并不会移除开发中最难的部分；它改变了工作负载。你不再主要花时间编写代码，而会花更多时间验证输出、纠正假设、清晰定义约束，并反复测试真实世界中的行为。

## 我学到的事

今天的 AI 非常擅长加速实现，但距离取代系统级思考、产品决策、正确性保证和端到端测试还很远。实际感受更像是「AI 替你提高作为开发者的吞吐量」，而不是「AI 替你构建软件」。

## 这个应用

最终产物是一款提供 SSH 远程开发环境、Git 工作流支持、移动代码编辑和 AI 辅助编程能力的移动 IDE。它已在 Google Play 上线，可从[下载](/zh/download)页面获取。

## 最后的想法

在这个项目中，AI 改变了我的精力分配；架构、集成与验收仍由我负责。

这正是编辑器、SSH、终端和 Git 必须作为一个系统构建的起点。可继续阅读[为什么现有 Flutter 代码编辑器会失效](/zh/blog/why-existing-flutter-code-editors-broke-down-when-i-built-a-mobile-ide)，以及[为什么我选择做一款移动 IDE，而不是另一个 AI App](/zh/blog/why-i-decided-to-build-a-mobile-ide-instead-of-another-ai-app)。产品总览请参阅 [NimoteCode 功能特性](/zh/features) 与 [移动 IDE](/zh/mobile-ide)。

## 相关内容

- [移动 IDE 总览](/zh/mobile-ide) —— 这段构建故事最终产出的工作区
- [为什么现有 Flutter 代码编辑器会失效](/zh/blog/why-existing-flutter-code-editors-broke-down-when-i-built-a-mobile-ide) —— 编辑器重建背后的原因
- [NimoteCode 功能特性](/zh/features) —— 当前的 SSH、终端、Git、LSP 与调试能力

<div class="seo-cta">
  <p><strong>关于作者</strong> · 正在构建 <a href="/zh/">NimoteCode</a>，一款使用 Flutter 和 Rust 开发、移动优先的 IDE。可在 <a href="https://dev.to/ma_dev">DEV.to</a> · <a href="https://github.com/mobiledevloperlab">GitHub</a> · <a href="https://x.com/mobiledevlab">X</a> 关注项目。</p>
  <p class="seo-cta-actions"><a href="/zh/download?utm_source=blog&utm_medium=organic&utm_campaign=90percent_ai_download" class="home-page-btn primary">下载 NimoteCode</a><a href="/zh/docs/quick-start?utm_source=blog&utm_medium=organic&utm_campaign=90percent_ai_quickstart" class="home-page-btn secondary">阅读快速开始</a></p>
</div>
