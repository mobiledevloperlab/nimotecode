---
title: AI Agent 构建演示 | NimoteCode 工作流
description: 观看 NimoteCode AI Agent 在手机上构建、测试、修复并提交开发者任务看板应用。
---

# AI Agent 在手机上构建开发者任务看板

这段工作流记录了 NimoteCode AI Agent 如何把一条产品需求变成可运行的开发者任务看板。演示使用 DeepSeek-v4-flash：Agent 先规划，再创建项目、验证结果并记录完成的改动，开发者无需在多个移动应用之间来回切换。

<figure class="agent-demo">
  <video controls playsinline preload="metadata">
    <source src="/videos/ai-agent-demo-small.mp4" type="video/mp4">
    当前浏览器不支持内嵌视频。
  </video>
  <figcaption>AI Agent 在 NimoteCode 移动工作区中构建并验证开发者任务看板。</figcaption>
</figure>

## 从需求到可执行计划

演示从一条任务看板需求开始：React、TypeScript、Vite、可编辑任务、优先级、本地持久化、深色开发者风格和自动化测试。Agent 在改动工作区前先生成有序计划，将环境准备、实现、测试和交付检查拆成清晰步骤。

## 在工作区中完成应用

Agent 检查 Node.js 环境，创建 Vite 项目，并以小模块组织应用。任务状态与持久化、表单与列表、进度反馈和看板视觉层都在同一工作区中完成；文件、终端输出与 Git 状态始终保持关联。

## 验证、修复与交付

验证不是最后才做的步骤。测试出现导入或断言问题时，Agent 会读取失败信息，定位相关代码，完成修正后再次运行检查。随后它执行生产构建、补充项目说明，并在收到指令后提交完成的工作。

## 这个工作流说明了什么

- **在同一闭环中规划、执行与检查。** Agent 可以从目标出发，经过文件和终端操作，回到测试与构建证据。
- **完整的移动开发界面。** Explorer、编辑器、终端、Source Control 和 AI 面板都围绕同一个项目上下文工作。
- **自动化仍然可审查。** 命令、文件改动、测试输出和最终 diff 都保留给开发者检查。

> Agent 能加速多步骤开发，但不能代替工程判断。尤其是工作区具备生产环境访问权限时，请审查计划、命令、测试证据与 Git diff。

<div class="product-card-grid">
  <div class="product-card"><strong><a href="/zh/use-cases/mobile-workspace-demo">移动工作区演示</a></strong><span>直接在网站中观看本地与 SSH 工作流：检查、编辑、验证与审查都在同一处完成。</span></div>
  <div class="product-card"><strong><a href="/zh/use-cases/terminal-ai-tools">终端 AI 工具</a></strong><span>在当前工作区中直接运行 Codex、Claude、Kimi 等 AI 编程工具。</span></div>
</div>

<p class="seo-cta-actions">
  <a href="/zh/download?utm_source=zh_workflows&utm_medium=website&utm_campaign=ai_agent_build_demo" class="home-page-btn primary">体验 NimoteCode</a>
  <a href="/zh/docs/ai" class="home-page-btn secondary">阅读 AI Agent 指南</a>
</p>
