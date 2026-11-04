---
title: AI and connection configuration | NimoteCode
description: "Configuration, procedures, and interface reference for ai and connection configuration."
---

# AI and connection configuration

AI provider configuration is separate from your NimoteCode account and subscription. You supply the provider credentials, endpoint, model name, and network access; provider usage charges and model availability are determined by that provider.

## Add a model configuration

Open **AI Configuration**, select **Add Model**, and choose a provider. Templates are available for OpenAI, Anthropic, Google Gemini, xAI Grok, DeepSeek, Alibaba Qwen, OpenRouter, Groq, SiliconFlow, StepFun, Zhipu AI/GLM, Moonshot AI, and Ollama, as well as a custom OpenAI-compatible endpoint. Enter a display name, API key where required, Base URL, and model name, then save. The model must be accessible through your provider account. NimoteCode does not include provider tokens.

<div class="doc-screenshots">
  <DocScreenshot file="ai-provider-overview.png" caption="AI Configuration with a saved model and general settings." />
  <DocScreenshot file="ai-provider-settings.jpg" caption="Model configuration form with masked API key and connection test." />
</div>

## Test the chat connection

Select **Test chat connection** to send a short test prompt. The test does not send workspace files or the configured system prompt; output is limited to 1024 tokens. Provider charges may apply. Success confirms a text response, not Agent tool support, external-agent compatibility, or the model’s context capacity.

## General settings

AI Configuration also includes chat-history autosave and AI privacy settings. MCP tool-server settings are covered in [AI Chat, Agent, MCP, and external agents](/docs/ai#connect-mcp-tools-carefully). Review these separately from the model’s sampling and output settings. For SSH host configuration, follow [Local and SSH workspaces](/docs/ssh).
