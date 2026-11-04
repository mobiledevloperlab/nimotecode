---
title: AI 与连接配置 | NimoteCode
description: "AI 与连接配置的配置、操作步骤与界面说明。"
---

# AI 与连接配置

## 添加模型配置

打开 **AI Configuration**，点击 **Add Model** 并选择 Provider。可使用 OpenAI、Anthropic、Google Gemini、xAI Grok、DeepSeek、阿里云 Qwen、OpenRouter、Groq、SiliconFlow、StepFun、智谱 AI/GLM、Moonshot AI、Ollama 或兼容 OpenAI 接口的模板。填写显示名称、需要时的 API Key、Base URL 和模型名称后保存。模型须对你的 Provider 账户开放；NimoteCode 不包含模型 Token 额度。

<div class="doc-screenshots">
  <DocScreenshot file="ai-provider-overview.png" caption="AI Configuration 中已保存的模型与通用设置。" />
  <DocScreenshot file="ai-provider-settings.jpg" caption="模型配置表单，API Key 已掩码显示，并提供连接测试。" />
</div>

## 测试对话连接

点击 **Test chat connection** 发送简短测试提示词。测试不发送工作区文件或配置中的系统提示词，输出上限为 1024 Token，可能产生 Provider 费用。成功只说明模型能够返回文本，并不验证 Agent 工具能力、外部 Agent 兼容性或上下文容量。

## 通用设置

AI Configuration 提供对话历史自动保存和 AI 隐私设置。这些设置与模型采样参数、输出设置相互独立。MCP 工具服务器设置见[AI Chat、Agent、MCP 与外部 Agent](/zh/docs/ai#谨慎连接-mcp-工具)。SSH 主机配置见[本地与 SSH 工作区](/zh/docs/ssh)。
