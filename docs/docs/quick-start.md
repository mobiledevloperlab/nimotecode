---
title: Quick Start | NimoteCode Mobile IDE
description: Open a local, Android Local Linux, or SSH workspace in NimoteCode, edit a file, run a verification command and choose the next mobile development workflow.
---

# Quick Start

Use this guide to prove the workflow first: open a project, make one small edit and verify it in the terminal. It works with a local project, an SSH workspace, or Android Local Linux on a supported device.

<figure class="quick-start-hero">
  <img src="/images/placeholders/Start_Overview.png" width="1400" height="900" alt="NimoteCode overview showing the welcome screen and options for demo, Local Linux, remote SSH, and local workspaces" loading="lazy" decoding="async">
  <figcaption>Start with a demo, Local Linux, a remote SSH host, or files already on your device.</figcaption>
</figure>

## 1. Open a workspace

Choose **Open Local Workspace** for a project on your device, **Connect Remote Workspace** for a remote host, or **Local Linux** for bundled Ubuntu on a supported Android 8+ ARM64/x86_64 device. You can also use **Try Demo Workspace** to explore a sample project immediately. Local Linux needs no root access and is not available on iOS; see [Android Local Linux](/docs/local-linux) for its setup and lifecycle. For an SSH workspace, enter the host, port and username; then choose password, key file or pasted private key authentication. Confirm the project root before you start working.

<figure class="seo-media-placeholder seo-media-placeholder--device-pair has-image has-single-device-image">
  <div class="seo-media-placeholder__device-pair">
    <div class="seo-media-placeholder__device seo-media-placeholder__device--phone">
      <img class="seo-media-placeholder__image" src="/images/placeholders/Getting_Started.jpg" width="930" height="2048" alt="NimoteCode welcome screen with options to open a demo, Local Linux, remote, or local workspace" loading="lazy" decoding="async">
    </div>
  </div>
  <figcaption class="seo-media-placeholder__caption">Choose the workspace that matches where your project runs; AI configuration can be changed later.</figcaption>
</figure>

## 2. Open, edit and save a file

Select a file in Explorer or from [Search](/docs/search). It opens in the tabbed editor. Make a small change, save it, and keep the file active if you plan to ask AI about it.

## 3. Verify in Terminal

Open [Terminal](/docs/terminal) in the same workspace and run a harmless command such as `pwd`, `ls`, or your project’s test command. Use output search if the result is long.

## 4. Choose the next step

<div class="product-card-grid">
  <div class="product-card"><strong>Review a change</strong><span>Open <a href="/docs/source-control">Source Control</a> to inspect the diff and stage it; committing or pushing needs Pro access.</span></div>
  <div class="product-card"><strong>Ask for help</strong><span>Use <a href="/docs/ai">AI Chat or Agent</a> to explain code, plan a change or assist controlled multi-step work.</span></div>
  <div class="product-card"><strong>Diagnose more deeply · Pro</strong><span>Use configured <a href="/docs/lsp">LSP</a>, <a href="/docs/debug">Debug</a> and <a href="/docs/terminal">Terminal</a> workflows.</span></div>
  <div class="product-card"><strong>Reuse a command</strong><span>Save an established remote procedure in <a href="/docs/tasks">Tasks</a>.</span></div>
</div>

> For remote production environments, begin with read-only inspection and review every command, AI suggestion and Git change before it is applied.

Continue with [SSH Workspace](/docs/ssh), [Editor](/docs/editor), or [Watch Demo](/demo?utm_source=quick_start&utm_medium=website&utm_campaign=watch_demo).
