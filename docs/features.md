---
title: NimoteCode Features | Mobile AI Development Workspace
description: "Explore NimoteCode’s mobile development capabilities: Android Local Linux, local and SSH workspaces, split editing, HTML preview, terminal, Git, AI Chat and Agent, LSP, debugging, tasks and sync/cache."
---

# NimoteCode Features

NimoteCode keeps the essential development loop in one mobile workspace: **Explorer → Editor → Preview → Terminal → Git → AI**. Start with a project on your device, an SSH host, or bundled Ubuntu through Android Local Linux. This page lists what every feature does and whether it is included in the free tier or requires Pro.

<div class="feature-showcase" role="region" aria-label="NimoteCode feature highlights">
  <div class="feature-showcase__track">
    <figure class="feature-showcase__item"><img src="/screenshots/p1.png" alt="Local files, SSH, code editing and AI Agent in NimoteCode" width="1604" height="901" loading="eager"><figcaption>Workspaces, editing and AI Agent</figcaption></figure>
    <figure class="feature-showcase__item"><img src="/screenshots/p2.png" alt="SSH terminal, Source Control and code diagnostics in NimoteCode" width="1597" height="896" loading="lazy"><figcaption>Terminal, Git and diagnostics</figcaption></figure>
    <figure class="feature-showcase__item"><img src="/screenshots/p3.png" alt="NimoteCode debugging, remote workspace sync, and smart caching" width="1598" height="893" loading="lazy"><figcaption>Debugging and workspace sync</figcaption></figure>
    <figure class="feature-showcase__item" aria-hidden="true"><img src="/screenshots/p1.png" alt="" width="1604" height="901" loading="lazy"><figcaption>Workspaces, editing and AI Agent</figcaption></figure>
    <figure class="feature-showcase__item" aria-hidden="true"><img src="/screenshots/p2.png" alt="" width="1597" height="896" loading="lazy"><figcaption>Terminal, Git and diagnostics</figcaption></figure>
    <figure class="feature-showcase__item" aria-hidden="true"><img src="/screenshots/p3.png" alt="" width="1598" height="893" loading="lazy"><figcaption>Debugging and workspace sync</figcaption></figure>
  </div>
</div>

## Everything you get for free

The free tier is a full workspace, not a preview. Everything below works without a Pro subscription unless marked **Pro**.

| Feature | What it gives you | Access |
| --- | --- | --- |
| **Local, [Local Linux](/docs/local-linux) & SSH workspaces** | Open a local project, connect to a saved SSH workspace, or use bundled Ubuntu on supported Android 8+ ARM64/x86_64 devices without root. Local Linux is Android-only. | Free |
| **Code editor** | Tabs or split panes, save, preview images and supported media, clipboard, undo/redo, cursor tracking and structural context. | Free |
| **Web & media preview** | Open a local or remote web project in-app, preview the current HTML contents before saving, or open a URL from Terminal, AI replies, or tool output. | Free |
| **Terminal** | Run commands in the active workspace, search output, use shortcuts and recover after a remote reconnect. | Free |
| **Git review** | Inspect repository status, diffs, branch state and history. | Free |
| **AI Chat** | Explain code, inspect error output and plan the next change with current-file, task and Agent context. | Free |
| **Tasks** | Save repeated remote commands, group them and run them from the workspace. | Free |

## Pro features

A 14-day, per-device Pro trial unlocks every Pro feature below. Pro adds:

| Feature | What it gives you | Access |
| --- | --- | --- |
| **AI Agent** | Controlled multi-step workflows across files, terminal and Git tools; in an SSH workspace, select a compatible external ACP runtime when configured. | Trial · Pro |
| **Git write** | Commit, push and stash, plus branch/checkout/merge actions — with review before you act. | Trial · Pro |
| **Remote search** | Global content search across a remote workspace. | Trial · Pro |
| **Multi-terminal** | Keep parallel sessions for logs, tests, services and deployments. | Trial · Pro |
| **LSP** | Configured remote language-server diagnostics, code actions and navigation. | Trial · Pro |
| **Debugger** | Breakpoints and runtime inspection through a configured debug adapter. | Trial · Pro |
| **Sync / Cache** | Move project content between local and remote workspaces with explicit direction and history. | Trial · Pro |

## A practical way to use the features

1. Connect through [SSH Workspace](/docs/ssh), open a local project, or use [Android Local Linux](/docs/local-linux) on a supported device.
2. Locate and edit the file in [Editor](/docs/editor).
3. Verify it in [Terminal](/docs/terminal); search output or remote content when needed.
4. Ask [AI Chat and Agent](/docs/ai) to explain an error or plan a change.
5. Use [Source Control](/docs/source-control) to review the result; Pro is required when the delivery step needs a gated Git write action.

> Features are deliberately permission- and environment-aware. For example, LSP and Debug depend on the language server or debug adapter being set up on the remote host, and AI output should be reviewed before use on sensitive systems.

## Explore the SSH workflow

If you are evaluating how these features fit an SSH session, see the [Android SSH client](/android-ssh-client) workflow, compare [SSH clients](/blog/best-ssh-clients), or read the [SSH IDE overview](/ssh-ide) for the full remote development loop.
