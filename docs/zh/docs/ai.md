---
title: AI Chat 与 Agent | NimoteCode
description: 使用 NimoteCode AI Chat 理解代码与错误，使用 AI Agent 在 Provider 配置和工作区上下文中完成受控的多步骤工作。
---

# AI Chat 与 Agent

NimoteCode 将直接的 AI 问答与 AI 辅助执行分开。**AI Chat** 适合在上下文中得到答案；**AI Agent** 适合跨文件、终端或 Git 工具的明确步骤。

<ImagePlaceholder image-key="aiAssistant" alt="NimoteCode AI 面板">
  <strong>图片占位符 —— 带工作区上下文的 AI 协助</strong>
  <span>请替换为 AI 面板解释当前文件或规划小范围可审查改动的截图。</span>
</ImagePlaceholder>

## 用 AI Chat 做下一步决策

可让 Chat 解释陌生代码、分析终端输出、列出重构方案，或在修改前提供审查清单。保持相关文件激活，能让对话使用合适的工作区上下文。Chat 会展示最近任务和工作区上下文；切换面板时，全局紧凑状态条会持续显示正在运行的 Agent。

## 用 AI Agent 推进受控步骤

当工作需要检查文件、提出计划、执行编辑、运行检查并汇总结果时，Agent 更适合。它可在按设备计算的 14 天试用期间使用，也可通过 Pro 使用；并非按量提供的免费额度。

## 在 SSH 工作区使用外部 ACP Agent

当 SSH 主机上已有兼容的 ACP 运行时，可与内置 Agent 一起选择使用。NimoteCode 会在同一套对话体验中呈现它的能力、权限请求、会话状态和运行进度。在输入框键入 `/`，即可使用内置会话操作以及当前 ACP 会话上报的命令。运行时仍位于 SSH 主机上，请先在主机中配置好命令和环境。

<ImagePlaceholder image-key="agentRunLog" alt="NimoteCode 手机上的 AI Agent 执行日志">
  <strong>Agent 执行日志</strong>
</ImagePlaceholder>

<ImagePlaceholder image-key="agentRunPythonBenchmark" alt="NimoteCode 手机上的 AI Agent Python 基准测试">
  <strong>Agent 执行 Python 基准测试</strong>
</ImagePlaceholder>

<ImagePlaceholder image-key="agentAlgorithmBenchmarkResults" alt="NimoteCode 手机上的 AI Agent 基准测试结果">
  <strong>Agent 基准测试结果</strong>
</ImagePlaceholder>

## 谨慎配置 Provider

Provider 配置档包含端点、API 凭据、模型、流式和上下文行为等设置。你需要连接自己的 AI 提供商与 API key；NimoteCode 不捆绑模型访问或额度。保留一个稳定主配置与一个已测试的备选配置。实用设置方法见 [配置指南](/zh/docs/configuration)。

在 SSH 工作区中，Terminal、外部 ACP Agent、Tasks、Debug、语言服务、Git 与外部 CLI 共享远程账户的登录环境。更改 Shell 配置后，可从 Terminal 菜单使用“刷新远程环境”；SSH 重连后也会自动刷新。诊断输出会隐藏 API Key、Token、Secret 和密码。

> 面对远程或生产相关工作区，应在应用前审查每条命令和每处文件修改。应用内的校验与锁定机制用于让流程更可控，而不是取代使用者的责任。

继续了解：[AI Agent 工作流](/zh/use-cases/ai-agent) · [手机 AI 编程](/zh/mobile-ai-coding)
