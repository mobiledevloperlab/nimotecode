---
title: AI and connection configuration | NimoteCode
description: "Configuration, procedures, and interface reference for ai and connection configuration."
---

# AI and connection configuration

## Add a model configuration

Open **AI Configuration**, select **Add Model**, and choose a provider. Enter a display name, API key, Base URL, and model name, then save. The model must be accessible through your provider account. NimoteCode does not include provider tokens.

<div class="doc-screenshots">
  <DocScreenshot file="ai-provider-overview.png" caption="AI Configuration with a saved model and general settings." />
  <DocScreenshot file="ai-provider-settings.jpg" caption="Model configuration form with masked API key and connection test." />
</div>

## Test the chat connection

Select **Test chat connection** to send a short test prompt. The test does not send workspace files or the configured system prompt; output is limited to 1024 tokens. Provider charges may apply. Success confirms a text response, not Agent tool support or the model’s context capacity.

## General settings

AI Configuration includes MCP tool-server settings, chat-history autosave, and AI privacy settings. Review these separately from the model’s sampling and output settings. For SSH host configuration, follow [Local and SSH workspaces](/docs/ssh).
