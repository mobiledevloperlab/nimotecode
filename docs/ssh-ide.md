---
title: "SSH IDE for Remote Files, Terminal & Git | NimoteCode"
description: "Explore NimoteCode SSH IDE capabilities: SFTP project browsing, code editing, host terminal, Git and configured language tools. Understand host and access requirements."
lastUpdated: "2026-11-17"
pageClass: "seo-product-guide"
---

# SSH IDE for editing and checking remote projects

NimoteCode opens a remote project over SSH on Android, iPhone and iPad. Browse files through SFTP, edit source in tabs or split panes, run commands on the host, and review Git changes in the same workspace. The host keeps the repository, dependencies and runtime.

## Understand the three layers

| Layer | Purpose | Requirement |
| --- | --- | --- |
| SSH connection | Reach and authenticate to the host | A reachable server and permitted account |
| SFTP file access | Browse, open, and save remote files | Working server subsystem and file permissions |
| Host tools | Run Git, checks, language services, or an agent | Installed dependencies, credentials, and execution rights |

A working shell does not prove SFTP works, and opening a file does not install a toolchain. Keep those checks separate.

<div class="doc-screenshots">
  <DocScreenshot file="remote-workspace-connected.jpg" caption="Remote Explorer showing the SSH host, account and selected repository root." />
</div>

## What the workspace provides

Use Explorer to choose a project root and editor tabs or split panes to inspect related files. Save before running commands. Source Control shows changes and history; Git write and GitHub operations depend on feature access and repository permissions. Language servers and debug adapters require compatible configuration on the execution target.

## Match the host environment

Windows workspaces use PowerShell and SFTP; see [Windows setup](/docs/windows-ssh-sftp). Mac and Linux hosts use their configured shell and tools. Keep the project on a host with the dependencies it needs, and ensure it stays awake. A network connection does not maintain host processes.

## Check the selected repository before editing

Confirm the host, account and root path in Remote Explorer. Open Terminal and check its working directory and branch separately; editor navigation does not change the shell’s directory. On a Linux or macOS host:

```sh
pwd
git status --short --branch
```

Save files before running the repository’s documented test or build command. Review the diff and any existing changes before committing. If the terminal works but file access fails, check the SFTP subsystem and directory permissions; if a command is missing, check the host installation and PATH.

## Plan for disconnections

For long-running jobs, use a host-side session manager and check the job after reconnecting. On Linux or macOS, a configured tmux session can survive an SSH disconnect while the host remains running. Locking a phone or switching apps can interrupt the client connection; a sleeping or restarted host can still stop the job.

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
