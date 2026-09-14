---
title: 在终端运行 AI 编程工具 | NimoteCode 工作流
description: 在手机上的 NimoteCode 终端中直接运行 Codex、Claude、Kimi 等 AI 编程工具。
---

# 在终端直接运行 AI 编程工具

NimoteCode 的 Terminal 不只用于普通 Shell 命令。它支持在当前工作区中直接运行 **Codex**、**Claude**、**Kimi** 等 AI 编程工具，让命令、输出、文件与下一次编辑都留在同一个移动开发环境中。

<figure class="agent-demo">
  <video controls playsinline preload="metadata">
    <source src="/videos/terminalClaude.mp4" type="video/mp4">
    当前浏览器不支持内嵌视频。
  </video>
  <figcaption>在 NimoteCode Terminal 中直接运行 AI 编程工具。</figcaption>
</figure>

## 让 AI 工具留在项目上下文中

在当前项目目录中运行工具，再结合 Explorer、编辑器和 Source Control 检查输出。这样更容易跟进工具生成的命令、理解它涉及的文件，并审查产生的 diff。

## 一条实用的移动终端路径

1. 打开目标本地或 SSH 工作区，并确认项目根目录。
2. 在 Terminal 中运行 Codex、Claude、Kimi 或其他已配置的命令行 AI 工具。
3. 阅读输出、检查改动文件，并运行项目自己的验证命令。
4. 提交或交付前审查 diff。

> 命令行 AI 工具会使用工作区中已有的凭据、权限和环境。特别是在远程或生产相关主机上，请在应用前审查它们的命令与文件改动。

<p class="seo-cta-actions">
  <a href="/zh/docs/terminal" class="home-page-btn secondary">阅读终端指南</a>
  <a href="/zh/download?utm_source=zh_workflows&utm_medium=website&utm_campaign=terminal_ai_tools" class="home-page-btn primary">体验 NimoteCode</a>
</p>
