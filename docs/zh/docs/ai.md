---
title: AI Chat 与 Agent | NimoteCode
description: "AI Chat 与 Agent 的配置、操作步骤与界面说明。"
---

# AI Chat 与 Agent

<div class="doc-section">
<div class="doc-section__copy">

## 开始对话

在 AI 面板选择已配置的模型并输入问题。询问项目相关问题前，先打开对应工作区。Provider 凭据和模型访问请参阅[配置指南](/zh/docs/configuration)。

</div>

<div class="doc-screenshots">
  <DocScreenshot file="ai-chat-welcome.png" caption="尚未打开工作区的 AI 面板。" />
</div>

</div>

<div class="doc-section">
<div class="doc-section__copy">

## 选择 Agent

Agent 选择器提供 Nimote Agent 和外部 Agent。外部 Agent 在 SSH 主机上运行，需要先安装并配置兼容的 ACP 运行时。运行时提供的会话命令可通过斜杠命令补全使用。

</div>

<div class="doc-screenshots">
  <DocScreenshot file="ai-agent-selector.jpg" caption="Agent 选择器：当前选择 Nimote Agent，外部 Agent 已关闭。" />
</div>

</div>

## 审批计划与查看执行过程

在 **Confirm** 模式下，先审查计划，再选择 **Approve this run** 允许工具执行。时间线显示当前步骤、已完成的工具调用和输出。运行中可追加指令或回答问题；达到步骤上限时，可检查已有结果后决定是否继续。

<div class="doc-screenshots">
  <DocScreenshot file="ai-plan-approval.jpg" caption="Confirm 模式下等待审批的项目检查计划。" />
  <DocScreenshot file="ai-plan-running.jpg" caption="获批后读取文件的任务，时间线记录已完成的检查步骤。" />
</div>

## 阅读执行结果

下列截图展示同一次“解释项目”请求的回答：项目概览、示例命令，以及缺失文件和基准测试方法的注意事项。这些是生成回答的不同部分，并非独立的分析模式。使用结果前，应结合当前项目核对引用的文件与命令。

<div class="doc-screenshots">
  <DocScreenshot file="ai-analysis-overview.jpg" caption="AI 回答中的项目概览与主要组件。" />
  <DocScreenshot file="ai-analysis-workflow.jpg" caption="同一回答中的项目命令示例。" />
  <DocScreenshot file="ai-analysis-caveats.jpg" caption="针对当前检出文件和基准测试结果的注意事项。" />
</div>
