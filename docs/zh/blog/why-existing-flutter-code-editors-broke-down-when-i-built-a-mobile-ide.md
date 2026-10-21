---
title: "在构建移动 IDE 时，为什么现有 Flutter 代码编辑器会失效"
description: "我在构建移动 IDE 时发现：一旦加入 SSH、LSP、Git diff 和远程文件，现有 Flutter 代码编辑器包便会失效。本文解释为何我重建了编辑器核心。"
author: "NimoteCode 团队"
date: "2026-06-11"
lastUpdated: "2026-06-11"
tags: ["flutter", "rust", "ide", "工程"]
image: /blog/why-existing-flutter-code-editors-broke-down-when-i-built-a-mobile-ide/image-2.png
---

# 在构建移动 IDE 时，为什么现有 Flutter 代码编辑器会失效

<p class="article-meta">发布于 2026-06-11 · NimoteCode 团队</p>

开始构建 NimoteCode 时，我没有打算自己写代码编辑器。我的假设很简单：Flutter 已经有代码编辑器包，选一个用就好。

有几个很不错的选择：`code_text_field`、`flutter_code_editor`、`re_editor`。它们都很好地解决了类似的问题：如何在 Flutter 内显示和编辑代码。

于是我做了大多数人都会做的事：尝试集成其中一个，把重心放在「真正的产品」——SSH、终端、Git 和 AI 工作流上。这个假设很快就破灭了。

## 问题不在于编辑代码

问题在于：我不是在构建代码编辑器，而是在构建移动 IDE。这两者本质上是不同的系统。

## 现有编辑器从何处开始失效

从表面看，现有 Flutter 编辑器已经很完整：语法高亮、折叠、自动补全和基础选择处理。但一旦接入真实 IDE 功能，裂缝就开始出现：

- SSH 远程文件，而非本地字符串
- LSP 需要完整的文档生命周期同步
- Git diff 依赖编辑器状态
- 多面板 UI 共享同一文档
- 大文件需要流式加载，而不是一次性读入

到这一步，编辑器不再是一个组件；它变成了共享基础设施。

## 关键的架构差异

大多数编辑器包围绕**文本渲染**构建。移动 IDE 需要的是**编辑器核心**，这个差异会改变一切。

与其拥有一个「编辑文本的 Widget」，你需要的是文档模型、布局系统、状态引擎，以及和外部系统同步的层。当多个系统依赖编辑器状态时，它就不能再是被动的，必须成为单一事实来源。

<img src="/blog/why-existing-flutter-code-editors-broke-down-when-i-built-a-mobile-ide/image-1.png" width="1344" height="2992" alt="移动设备上的 NimoteCode 代码编辑器" loading="lazy" decoding="async">

## 为什么最终自己构建编辑器

这个决定与性能或缺少功能无关，而是为了掌控模型。现有编辑器假定本地文本、单文件上下文和 UI 驱动更新；我的需求不同：统一的本地与 SSH 远程文件、与编辑器状态紧密绑定的 LSP 生命周期、按标签页跟踪 Git diff、分块流式读取大文件，以及移动优先的选择与交互模型。

这些约束与 Widget 层架构冲突。因此，与其扩展一个编辑器，我重建了核心抽象。

## 我实际构建的内容

编辑器围绕一个共享核心构建：

- 以 `EditorState` 作为单一事实来源
- 使用 `FileLoader` 抽象统一本地与远程文件
- 支持大文件的流式摄取
- Tree-sitter 与 LSP 混合分析管线
- 将 Diff、CodeLens 和符号绑定到文档模型
- 移动优先的选择与坐标系统

关键理念是：一切都依赖同一个文档模型，而不是 UI。

<img src="/blog/why-existing-flutter-code-editors-broke-down-when-i-built-a-mobile-ide/image-2.png" width="1414" height="878" alt="平板上的 NimoteCode 代码编辑器" loading="lazy" decoding="async">

## 自建的真正优势

重写编辑器不是为了增加功能，而是解锁了结构性优势：

1. **远程优先是原生能力，而非补丁** —— SSH 文件是一等文档，不是适配器。
2. **LSP 成为生命周期的一部分** —— 它与编辑器状态同步，而不是一个独立服务。
3. **Git diff 感知状态** —— 按标签页感知，而不是基于快照。
4. **移动编辑经过专门设计，而非简单适配** —— 选择、拖拽手柄和滚动采用自定义坐标系统。
5. **所有 IDE 功能共享一个模型** —— 面板之间没有重复状态。

这正是长期来看实际降低复杂度的地方。

## 一个意料之外的结论

我最初以为使用现有编辑器能节省时间，实际结果恰恰相反：使用现有编辑器只会把复杂度转移到别处。问题不是语法高亮，而是系统设计。一旦把编辑器当作基础设施而非 Widget，重建它就成为最简单、最一致的选择。

我替换的不是一个代码编辑器，而是「代码编辑器足以构成移动 IDE」这一假设。

这些决定塑造了各部件协同工作的方式——请参阅[编辑器](/zh/docs/editor)、[LSP](/zh/docs/lsp)、[源代码管理](/zh/docs/source-control)和[SSH 工作区](/zh/docs/ssh)指南。想了解更广的图景，可阅读[用约 90% AI 生成的代码做了一款移动 IDE](/zh/blog/i-built-a-mobile-ide-with-90-ai-generated-code-but-it-still-took-me-6-months)和[SSH + 移动编程仍然支离破碎](/zh/blog/ssh-mobile-coding-is-still-broken-so-i-built-my-own-ide)。

## 相关内容

- [移动 IDE 总览](/zh/mobile-ide) —— 将编辑器、SSH、终端和 Git 作为一个系统
- [用约 90% AI 生成的代码做了一款移动 IDE](/zh/blog/i-built-a-mobile-ide-with-90-ai-generated-code-but-it-still-took-me-6-months) —— 完整构建故事
- [SSH + 移动编程仍然支离破碎](/zh/blog/ssh-mobile-coding-is-still-broken-so-i-built-my-own-ide) —— 为什么这些部件必须一起构建

<div class="seo-cta">
  <p><strong>关于作者</strong> · 正在构建 <a href="/zh/">NimoteCode</a>，一款使用 Flutter 和 Rust 开发、移动优先的 IDE。可在 <a href="https://dev.to/ma_dev">DEV.to</a> · <a href="https://github.com/mobiledevloperlab">GitHub</a> · <a href="https://x.com/mobiledevlab">X</a> 关注项目。</p>
  <p class="seo-cta-actions"><a href="/zh/download?utm_source=blog&utm_medium=organic&utm_campaign=flutter_editors_download" class="home-page-btn primary">下载 NimoteCode</a><a href="/zh/docs/quick-start?utm_source=blog&utm_medium=organic&utm_campaign=flutter_editors_quickstart" class="home-page-btn secondary">阅读快速开始</a></p>
</div>
