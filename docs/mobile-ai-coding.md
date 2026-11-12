---
title: "Mobile AI Coding: Chat, Agent & ACP Workflows | NimoteCode"
description: "Choose AI Chat, Nimote Agent or an external ACP agent for a mobile project. Learn provider setup, tool approvals, execution environments and Git verification."
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# Mobile AI coding with the right mode and runtime

Want an explanation of a function, or an agent to inspect files and run checks? These are different tasks. NimoteCode provides AI Chat, a built-in Nimote Agent, and compatible external ACP agents alongside the project editor, terminal, and Git tools. Choose the mode and execution environment before sending a task.

## Choose between Chat and an Agent

| Mode | Use it for | Setup and control |
| --- | --- | --- |
| Chat | Explain selected code, interpret an error, discuss a plan | Configure a model provider; Chat does not itself execute workspace changes |
| Nimote Agent | Inspect files, propose edits, run available workspace tools | Provider setup and feature access; Confirm mode reviews the plan before a run |
| External ACP agent | Use a compatible separately installed agent runtime | Runtime, credentials, and its own tool policy on the execution target |

A normal editor or terminal is enough when you already know the exact change. AI is optional; opening a project and using SSH does not require configuring a model.

## Configure the provider and workspace

Follow [model configuration](/docs/configuration) to add a provider and test access. Open the intended workspace and confirm its root. A local folder does not automatically provide command execution. SSH uses the host’s environment; supported Android devices can use [Local Linux](/docs/local-linux). iPhone and iPad do not have NimoteCode Local Linux.

<figure class="seo-phone-capture">
  <a href="/images/ios/iphone-agents.webp" target="_blank" rel="noopener">
    <img src="/images/ios/iphone-agents.webp" width="660" height="1433" alt="NimoteCode on iPhone showing built-in and external agent choices." loading="lazy" decoding="async">
  </a>
  <figcaption>NimoteCode on iPhone showing built-in and external agent choices. Source: NimoteCode App Store listing. Promotional screenshot, not a continuous recording.</figcaption>
</figure>

## Try a read-only task first

Ask: “Find the entry point and explain how this configuration is loaded. Do not change files.” Check the referenced paths in the editor. For a task that needs tools, select Nimote Agent and review its plan in Confirm mode before approving. A good answer still needs verification against the actual files.

## Review execution and the result

Follow the execution timeline, read outputs, and send a correction or stop the run if its scope changes. After edits, inspect the saved files, run project checks, and review the diff in [Source Control](/docs/source-control). External agents have their own permissions; the built-in Agent’s Confirm mode does not control a CLI started manually in Terminal.

## Connect an external runtime when needed

The [AI and ACP reference](/docs/ai) covers compatible runtime commands and MCP tools. For direct terminal access rather than an ACP conversation, use the separate [Claude Code](/claude-code-from-phone) or [Codex](/codex-from-phone) SSH tutorials. Keep provider keys in configuration rather than prompts; NimoteCode does not include model credits.

Start with local or SSH editing and the basic terminal. Some capabilities require Pro access; check [Free and Pro](/pro) and the access shown in the app. AI requires your own model provider, whose usage is billed separately.

<div class="seo-cta">
  <p><strong>Download NimoteCode</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="/docs/quick-start" class="home-page-btn secondary">Quick start</a>
  </p>
</div>
