---
title: "SSH IDE for Remote Files, Terminal & Git | NimoteCode"
description: "Explore NimoteCode SSH IDE capabilities: SFTP project browsing, code editing, host terminal, Git and configured language tools. Understand host and access requirements."
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# SSH IDE: files, tools, and review around one project

An SSH terminal is enough to run a known command. An SSH IDE helps when you need to navigate the repository behind that command, edit a file, and inspect the patch. NimoteCode combines a remote project explorer, code editor, terminal, Git, and optional AI for Android, iPhone, and iPad.

## Understand the three layers

| Layer | Purpose | Requirement |
| --- | --- | --- |
| SSH connection | Reach and authenticate to the host | A reachable server and permitted account |
| SFTP file access | Browse, open, and save remote files | Working server subsystem and file permissions |
| Host tools | Run Git, checks, language services, or an agent | Installed dependencies, credentials, and execution rights |

A working shell does not prove SFTP works, and opening a file does not install a toolchain. Keep those checks separate.

<figure class="seo-phone-capture">
  <a href="/images/ios/iphone-editor.webp" target="_blank" rel="noopener">
    <img src="/images/ios/iphone-editor.webp" width="660" height="1433" alt="iPhone code editor with source tabs and keyboard." loading="lazy" decoding="async">
  </a>
  <figcaption>iPhone code editor with source tabs and keyboard. Source: NimoteCode App Store listing. Promotional screenshot, not a continuous recording.</figcaption>
</figure>

## What the workspace provides

Use Explorer to choose a project root and editor tabs or split panes to inspect related files. Save before running commands. Source Control shows changes and history; Git write and GitHub operations depend on feature access and repository permissions. Language servers and debug adapters require compatible configuration on the execution target.

## Match the host environment

Windows workspaces use PowerShell and SFTP; see [Windows setup](/docs/windows-ssh-sftp). Mac and Linux hosts use their configured shell and tools. Keep the project on a host with the dependencies it needs, and ensure it stays awake. A network connection does not maintain host processes.

## Set up or troubleshoot the connection

For a complete setup sequence, use [remote coding](/remote-coding) and the [SSH reference](/docs/ssh). To decide between on-device and remote execution, start with [Mobile IDE](/mobile-ide). For AI runtime choices, use [mobile AI coding](/mobile-ai-coding).

Start with local or SSH editing and the basic terminal. Some capabilities require Pro access; check [Free and Pro](/pro) and the access shown in the app. AI requires your own model provider, whose usage is billed separately.

<div class="seo-cta">
  <p><strong>Download NimoteCode</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="/docs/quick-start" class="home-page-btn secondary">Quick start</a>
  </p>
</div>
