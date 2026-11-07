---
title: AI Chat、Agent、MCP 与外部 Agent | NimoteCode
description: "配置 NimoteCode 的 AI Chat 和 Agent，审查计划与工具操作，并安全使用 MCP 服务器或兼容的外部 ACP Agent。"
---

# AI Chat、Agent、MCP 与外部 Agent

AI 为可选功能。发送请求前，请在[AI 与连接配置](/zh/docs/configuration)中配置自己控制的服务商。NimoteCode 不提供模型额度，也不会自动保证模型输出正确。

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

Agent 选择器提供 Nimote Agent 和外部 Agent。Nimote Agent 适合需要检查项目、提出编辑建议或运行经批准工具的多步骤任务。外部 Agent 是独立进程，需要在选定环境安装或配置兼容的 ACP 运行时；其凭据、网络访问、工具策略和行为由该运行时决定。只有明确需要使用时才启用外部 Agent。运行时提供的会话命令可通过斜杠命令补全使用。

</div>

<div class="doc-screenshots">
  <DocScreenshot file="ai-agent-selector.jpg" caption="Agent 选择器：当前选择 Nimote Agent，外部 Agent 已关闭。" />
</div>

</div>

## 审批计划与查看执行过程

在 **Confirm** 模式下，先审查计划，再选择 **Approve this run** 允许工具执行。时间线显示当前步骤、已完成的工具调用和输出。运行中可追加指令或回答问题；达到步骤上限时，可检查已有结果后决定是否继续。

自动执行模式（如当前版本和工作区可用）会减少审批提示，并不意味着操作没有风险。接受执行结果前，请检查改动文件、运行项目检查并审阅 Git diff。

<div class="doc-screenshots">
  <DocScreenshot file="ai-plan-approval.jpg" caption="Confirm 模式下等待审批的项目检查计划。" />
  <DocScreenshot file="ai-plan-running.jpg" caption="获批后读取文件的任务，时间线记录已完成的检查步骤。" />
</div>

## 阅读执行结果

下列截图展示同一次“解释项目”请求的回答：项目概览、示例命令，以及缺失文件和基准测试方法的注意事项。这些是生成回答的不同部分，并非独立的分析模式。使用结果前，应结合当前项目核对引用的文件与命令。

### 先了解项目结构

先阅读项目概览，了解回答归纳的主要组件及其关系，再与当前工作区中的文件对应核对。

<div class="doc-screenshots">
  <DocScreenshot file="ai-analysis-overview.jpg" caption="AI 回答中的项目概览与主要组件。" />
</div>

### 再核对示例命令

阅读同一回答中的命令示例，确认它们适用于当前项目和运行环境，再决定是否执行。

<div class="doc-screenshots">
  <DocScreenshot file="ai-analysis-workflow.jpg" caption="同一回答中的项目命令示例。" />
</div>

### 最后检查限制与注意事项

留意缺失文件、当前检出范围和基准测试方法等限制。不要将这次回答的结论直接套用到其他版本或环境。

<div class="doc-screenshots">
  <DocScreenshot file="ai-analysis-caveats.jpg" caption="针对当前检出文件和基准测试结果的注意事项。" />
</div>

## 谨慎连接 MCP 工具

MCP 支持两类服务器传输方式：**stdio** 会在所选目标环境（自动选择、远程 SSH、Local Linux 或本机设备）启动命令；**Streamable HTTP** 会直接连接配置的 HTTP 或 HTTPS 服务。应在 MCP 配置中保存服务器密钥，而不要写入提示词。

仅添加可信服务器：stdio 服务器会在目标环境中运行命令，HTTP 服务器会接收应用请求。启动 stdio 服务器和调用工具均需要批准；继续 Agent 任务前，请检查每次工具调用的输入和输出。

## 隐私与审查

- 选择适合所发送数据的服务商账户和模型。
- 不要在提示词、代码片段、终端输出或插件表单中放入 API Key、密码、私钥或生产密钥。
- 批准操作前，检查工作区根目录、Agent 计划、命令和文件差异。
- 将生成代码和工具输出视为未验证内容，测试后再使用。

## 继续执行中的 ACP 任务

支持后续指令的 ACP Agent 可在任务运行期间接收新指令。可在会话时间线查看送达状态，并在其中回答交互式问题；具体能力取决于 Agent 运行时。
