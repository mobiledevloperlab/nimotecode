---
answer: "手机可以作为 Agent 操作 SSH 主机的界面。项目命令在主机上运行，用户仍需审查改动与验证结果。"
title: "AI Agent 真的能在手机上编程吗？"
description: "NimoteCode 内的一次真实 AI Agent 演示：通过 SSH 在手机上规划任务、创建和编辑代码、运行命令、验证结果并提交改动。"
date: "2026-08-30"
lastUpdated: "2026-11-03"
author: "NimoteCode 团队"
tags: ["ai agent", "移动开发", "ssh", "效率"]
---

# AI Agent 真的能在手机上编程吗？

这是一次在 [NimoteCode](/zh/mobile-ide) 内完成的真实 AI Agent 演示。它从一个近乎空白的 [SSH 工作区](/zh/docs/ssh) 开始：规划任务、创建并编辑代码、运行命令、验证结果，最后提交改动。

所有环节都发生在一个移动工作区里，而不是把代码片段贴进独立的聊天窗口。

<figure>
  <video controls playsinline preload="metadata" poster="/videos/nimotecode-poster.jpg">
    <source src="/videos/nimotecode.mp4" type="video/mp4">
  </video>
  <figcaption>NimoteCode 团队的移动 Agent 工作流演示；单次演示不代表跨项目成功率。</figcaption>
</figure>

## 先复现小任务，再委托更大的任务

文中演示说明一种工作流，不能代表跨仓库的成功率。先在临时分支上选择边界明确的任务，例如修复已记录的输入校验问题。写清预期行为、允许修改的文件和用于验证结果的命令。

执行前阅读计划运行的命令；执行后检查 `git status` 和 diff，确认验证确实运行，并调查失败原因。命令退出成功只说明该命令的结果；生成的测试可能复述实现本身的错误。审查后再提交，把推送和发布作为独立决策。[AI 指南](/zh/docs/ai)说明产品行为和审批控制。

## Agent 处理了什么

- 跨越多个步骤的长时 AI 编程任务
- 面向真实主机的 SSH 远程开发
- 在同一上下文中的终端、Git 与代码编辑器
- 自动验证与代码提交

在工作区内运行 Agent，而不是在独立聊天窗口中运行，意义在于它能持续连接项目文件、终端输出和 Git 状态；它交还的是可审查的结果，而不是一条未经审查的建议。

## 在手机上试试看

NimoteCode 现已在 Google Play 上线，iOS 下载入口请见下载页。搜索 NimoteCode，即可随时开始编程。

若想了解受控 Agent 如何融入可审查的交付闭环，请阅读 [AI Agent 演示](/zh/use-cases/) 与 [AI Chat 和 Agent](/zh/docs/ai) 指南。想进一步了解这一方向的发展，可参阅 [移动 AI 编程](/zh/mobile-ai-coding)。

## 相关内容

- [移动 AI 编程工作区](/zh/mobile-ai-coding) —— 了解 Agent、编辑器和 Git 如何在手机上共享上下文
- [在手机上使用 Claude Code](/zh/claude-code-from-phone) —— 在自己的 SSH 主机上运行远程 Agent 工作流

<div class="seo-cta">
  <p><strong>关于作者</strong> · 正在构建 <a href="/zh/">NimoteCode</a>，一款使用 Flutter 和 Rust 开发、移动优先的 IDE。可在 <a href="https://dev.to/ma_dev">DEV.to</a> · <a href="https://github.com/mobiledevloperlab">GitHub</a> · <a href="https://x.com/mobiledevlab">X</a> 关注项目。</p>
  <p class="seo-cta-actions"><a href="/zh/download?utm_source=blog&utm_medium=organic&utm_campaign=agent_from_phone_download" class="home-page-btn primary">下载 NimoteCode</a><a href="/zh/mobile-ai-coding?utm_source=blog&utm_medium=organic&utm_campaign=agent_from_phone_workflow" class="home-page-btn secondary">了解移动 AI 编程</a></p>
</div>
