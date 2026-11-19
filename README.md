<p align="center">
  <img src="docs/public/app_icon_rounded.png" alt="NimoteCode logo" width="88" height="88">
</p>

<h1 align="center">NimoteCode — Mobile AI IDE &amp; SSH Workspace</h1>

<p align="center"><strong>English</strong> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.es.md">Español</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a></p>

<p align="center">
  <strong>Your projects. Your tools. Wherever you code.</strong><br>
  Code editor, SSH terminal, Git and AI agents for Android, iPhone and iPad.
</p>

<p align="center">
  <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode"><img src="https://img.shields.io/badge/Google_Play-Install-34A853?style=for-the-badge&amp;logo=googleplay&amp;logoColor=white" alt="Install NimoteCode for Android"></a>
  <a href="https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253"><img src="https://img.shields.io/badge/App_Store-Download-0D96F6?style=for-the-badge&amp;logo=appstore&amp;logoColor=white" alt="Download NimoteCode for iPhone and iPad"></a>
</p>

<p align="center">
  <a href="https://nimotecode.com/releases/2.4.1"><img src="https://img.shields.io/badge/NimoteCode-2.4.1-2563EB?style=flat-square" alt="NimoteCode 2.4.1"></a>
  <a href="https://nimotecode.com/docs"><img src="https://img.shields.io/badge/docs-online-2563EB?style=flat-square" alt="Documentation"></a>
  <a href="https://github.com/mobiledevloperlab/nimotehost"><img src="https://img.shields.io/badge/NimoteHost-Apache--2.0-64748B?style=flat-square" alt="NimoteHost companion license: Apache-2.0"></a>
</p>

<p align="center">
  <a href="#demo">Watch demo</a> ·
  <a href="#workflow">See the workflow</a> ·
  <a href="#workspace-modes">Four modes</a> ·
  <a href="#quick-start">Quick start</a> ·
  <a href="#latest-release">What’s new in 2.4.1</a> ·
  <a href="#nimotehost">NimoteHost</a> ·
  <a href="https://nimotecode.com/docs">Documentation</a> ·
  <a href="https://github.com/mobiledevloperlab/nimote_issues/issues">Report an issue</a>
</p>

<p align="center">
  <img src="docs/public/screenshots/nimote-pro-framed.svg?v=6d554a40db88" alt="NimoteCode 2.4.1 remote project files and Python editor" width="1000">
</p>

NimoteCode is a **mobile IDE for local and SSH projects**. Browse source files, make an edit, run project commands and review the Git diff in one workspace. Use optional AI assistance with your own provider, or connect to coding agents on your development machine.

**Four workspace modes · Your own development environment · Optional AI**

## Demo

Watch NimoteCode in action below, or [open the demo video](https://github.com/user-attachments/assets/14c8bab8-ae16-4e15-8a8a-926ef2c747f4).

<div align="center">
  <video src="https://github.com/user-attachments/assets/14c8bab8-ae16-4e15-8a8a-926ef2c747f4" controls muted playsinline width="420"></video>
</div>

## Why NimoteCode

| Your workflow | What NimoteCode brings together |
| --- | --- |
| **Continue a project from your phone** | Remote files over SSH/SFTP, a code editor and a terminal using your host’s existing tools. |
| **Work comfortably on a tablet** | Project Explorer, split editor panes, workspace search, Markdown and web previews, and landscape layouts. |
| **Make and verify a change** | Git status, diffs and history alongside terminal commands and discovered project tasks. |
| **Work with AI in context** | AI Chat, the built-in Agent, MCP tools and compatible external ACP agents. |
| **Return to remote work** | Optional NimoteHost keeps managed terminal and Agent sessions on your own computer after the client disconnects. |
| **Develop locally on Android** | PRoot-based Ubuntu with Bash, Git and SSH, without rooting your device. |

<a id="workspace-modes"></a>

## Four modes, from one command to a whole project

Mobile development means moving between files, commands, changes and Agent tasks. NimoteCode gives each workflow a focused view, with the surrounding project within reach.

<table>
  <tr>
    <td rowspan="5" width="180" align="center" valign="middle"><a href="docs/public/images/placeholders/host-mode.png?v=8ed6f40a441c"><img src="docs/public/screenshots/host-mode-framed.svg?v=0b26255ed795" alt="NimoteCode mode selection: Full IDE, Quick Terminal, AI Workspace and Host" width="160"></a></td>
    <th>Mode</th>
    <th>When to use it</th>
    <th>What you work with</th>
  </tr>
  <tr>
    <td valign="top"><strong>IDE · Project workbench</strong></td>
    <td valign="top">Read, edit and review a project.</td>
    <td valign="top">Explorer, search, split editors, terminal and Git in one workbench.</td>
  </tr>
  <tr>
    <td valign="top"><strong>AI · Agent collaboration</strong></td>
    <td valign="top">Ask questions, delegate a task and follow execution.</td>
    <td valign="top">Workspace context, Chat or Agent conversations, tool output, approvals and results.</td>
  </tr>
  <tr>
    <td valign="top"><strong>Terminal · Command focus</strong></td>
    <td valign="top">Run builds, shell commands and interactive CLIs.</td>
    <td valign="top">A terminal-focused layout, extra keys, history search and your host’s installed tools.</td>
  </tr>
  <tr>
    <td valign="top"><strong>Host · Remote continuity</strong></td>
    <td valign="top">Return to work running on your computer.</td>
    <td valign="top">NimoteHost-managed terminals, compatible Agent sessions, tasks and verification records.</td>
  </tr>
</table>

**IDE, Terminal and AI retain your project and Explorer state when switching; Host connects to NimoteHost-managed sessions.** Inspect a problem in IDE, run a check in Terminal, ask AI to work on a change, or return to a remote task through Host.

NimoteCode connects SSH access with project editing, Git review, Agent execution and session recovery. Extend that workflow with Docker, Dev Containers, language services, debugging and custom workspace plugins.

[Explore features](https://nimotecode.com/features) · [Watch the demo](#demo) · [See an Agent build a project](https://nimotecode.com/use-cases/)

<a id="workflow"></a>

## One project, from code to review

A mobile workflow you can follow: open your SSH project, inspect the code, work with an Agent, run commands on the host and review the resulting changes.

<table>
  <tr>
    <th width="25%" align="center">1 · Inspect the code</th>
    <th width="25%" align="center">2 · Work with an Agent</th>
    <th width="25%" align="center">3 · Run commands</th>
    <th width="25%" align="center">4 · Review changes</th>
  </tr>
  <tr>
    <td width="25%" align="center" valign="top"><a href="docs/public/images/placeholders/editor-code-selection.png?v=3bc86359abb3"><img src="docs/public/screenshots/editor-code-selection-framed.svg?v=5419f1211a45" alt="1 · Inspect the code" width="220"></a></td>
    <td width="25%" align="center" valign="top"><a href="docs/public/images/placeholders/ai-plan-running.jpg?v=7cdbc72fe334"><img src="docs/public/screenshots/ai-plan-running-framed.svg?v=50b2a9e2632d" alt="2 · Work with an Agent" width="220"></a></td>
    <td width="25%" align="center" valign="top"><a href="docs/public/images/placeholders/terminal-command-output.png?v=8a8c20322c4e"><img src="docs/public/screenshots/terminal-command-output-framed.svg?v=62963867fed1" alt="3 · Run commands" width="220"></a></td>
    <td width="25%" align="center" valign="top"><a href="docs/public/images/placeholders/source-control-changes.png?v=f08e4471badb"><img src="docs/public/screenshots/source-control-changes-framed.svg?v=15712f667c09" alt="4 · Review changes" width="220"></a></td>
  </tr>
  <tr>
    <td valign="top">Read and edit project files with syntax highlighting and line numbers.</td>
    <td valign="top">Follow the Agent’s plan, file reads and tool activity in the execution timeline.</td>
    <td valign="top">Use your host’s shell and installed tools to run the project’s checks.</td>
    <td valign="top">Inspect changed files in Source Control, then open diffs before committing.</td>
  </tr>
</table>

<sub>NimoteCode 2.4.1 Android screenshots captured over ADB. Click an image for the full-size view.</sub>

Need to step away? [Host mode](#nimotehost) lets you return to compatible sessions managed by NimoteHost on your computer.

<a id="quick-start"></a>

## Start with one small change

1. **Install** from [Google Play](https://play.google.com/store/apps/details?id=com.nimote.nimotecode) or the [App Store](https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253).
2. **Open a project.** Choose a local folder, connect to a configured SSH host, or explore the Demo workspace. No AI setup is required.
3. **Edit → run → review.** Change a file, run a project check where tools are available, then inspect the diff in a Git repository.

[Follow the quick start →](https://nimotecode.com/docs/quick-start)

### Choose where your code runs

| Workspace | Where files and tools live | What you need |
| --- | --- | --- |
| **Local files** | On your device; start with browsing and editing. | A folder you can open. System-granted external folders have tool limitations. |
| **SSH workspace** | On your Linux, macOS or Windows development host. | A reachable SSH server, an accessible project and the host’s development tools. |
| **Android Local Linux** | In bundled Ubuntu on the Android device; app-local projects are shared at `/mnt/local`. | Supported Android 8+ ARM64 / x86_64 hardware. |
| **Host workspace** | On your own computer, managed by NimoteHost. | SSH and a compatible running NimoteHost. |

Local Linux is unavailable on iPhone and iPad; use an SSH host for development commands. Git, LSP, debugging, Tasks, file watching and Agent workflows need a native filesystem path. Runtime and language support depend on the tools installed in your workspace.

<a id="latest-release"></a>

## What’s new in 2.4.1

**NimoteCode 2.4.1 is released.** This update focuses on a redesigned workbench, remote sessions and moving files between workspaces.

- **Refreshed interface and tablet layouts:** improved landscape editing, editor controls, mobile Git review and Git status colors in Explorer.
- **Host workspace and Agent tasks:** browse and resume compatible terminal and Agent sessions; review approvals, task results and diffs.
- **File and folder transfers:** transfer between your device and SSH workspaces, or import and export locally.
- **Project task discovery:** find supported tasks in npm, Taskfile, Makefile, justfile and VS Code task definitions.
- **Better terminal and remote workflows:** retained-history search, improved selection and clipboard handling, GitHub CI step logs and more reliable remote saves.

[Read the full 2.4.1 release notes →](https://nimotecode.com/releases/2.4.1)

Download availability and store rollout can vary by platform and region. Use the [official download page](https://nimotecode.com/download) for current distribution channels and requirements.

<a id="nimotehost"></a>

## NimoteHost: leave the app, return to your work

**NimoteHost** is the optional, self-hosted companion for Linux, macOS and Windows. Start a terminal or compatible coding Agent from your phone, disconnect, and return to the work running on your computer through SSH.

- Resume managed terminal sessions and compatible **Codex, Claude Code and OpenCode** conversations.
- Review structured tool output, permission requests, task verification and diffs, depending on Host capabilities.
- Use a standalone CLI or desktop manager, or build and extend the complete **Apache-2.0** source yourself.

Install a compatible Host bundle on your development computer, keep it running, and connect through **Host → SSH connections** in NimoteCode 2.4.1 or later. Choose the bundle for the computer’s OS and CPU. Host and OS restarts interrupt running processes; Agent runtimes and authentication are configured separately. Ordinary SSH workspaces work without Host.

[Setup guide](https://nimotecode.com/docs/host/getting-started) · [Host source](https://github.com/mobiledevloperlab/nimotehost) · [Host downloads](https://github.com/mobiledevloperlab/nimotehost/releases)

## AI with your own tools and providers

| Option | Use it for |
| --- | --- |
| **AI Chat** | Explain code or terminal output with workspace context. |
| **Built-in Agent** | Inspect a project, plan edits, change files and run checks in a supported workspace. |
| **MCP servers** | Give the built-in Agent access to configured tools, with approval for tool calls. |
| **External ACP agents** | Use a separately installed compatible runtime from the app’s conversation view. |
| **Agent CLIs over SSH** | Run Claude Code, Codex or other installed tools directly in your host terminal. |

Connect your own provider and credentials. **Model credits and provider subscriptions are separate from NimoteCode.** External agents need their own installation and authentication. Review Agent changes and project checks before committing.

[Configure AI](https://nimotecode.com/docs/configuration) · [Agent and MCP guide](https://nimotecode.com/docs/ai) · [Claude Code from your phone](resources/claude-code-on-phone.md)

## Guides and documentation

| Start here | Go further |
| --- | --- |
| [Quick start](https://nimotecode.com/docs/quick-start) | [SSH and SFTP](https://nimotecode.com/docs/ssh) |
| [Editor and navigation](https://nimotecode.com/docs/editor) | [Git and GitHub](https://nimotecode.com/docs/source-control) |
| [Terminal](https://nimotecode.com/docs/terminal) | [Project tasks](https://nimotecode.com/docs/tasks) |
| [Android Local Linux](https://nimotecode.com/docs/local-linux) | [Docker and Dev Containers](https://nimotecode.com/docs/docker) |
| [AI and MCP](https://nimotecode.com/docs/ai) | [Custom plugins](https://nimotecode.com/docs/plugins) |
| [FAQ](https://nimotecode.com/docs/faq) | [Troubleshooting Host](https://nimotecode.com/docs/host/troubleshooting) |

[All documentation](https://nimotecode.com/docs) · [Practical mobile development guides](resources/README.md) · [Linux presets](presets/README.md) · [Mobile development tool comparison](https://nimotecode.com/compare/mobile-ai-development-tools)

## Community and contributions

[Report a bug or request a feature](https://github.com/mobiledevloperlab/nimote_issues/issues) · [Discord](https://discord.gg/tTxbpqYmhR) · [X](https://x.com/mobiledevlab) · [Website](https://nimotecode.com)

For bug reports, include your app version, device and OS, workspace type, reproduction steps and relevant logs with credentials removed. Documentation fixes, translations and workflow examples are welcome as pull requests here. For Host code contributions, visit the [NimoteHost repository](https://github.com/mobiledevloperlab/nimotehost).

## About this repository

**NimoteCode is a commercial, closed-source app.** This repository contains its official website, documentation, guides and release notes; it does not contain application source code.

The separate [NimoteHost](https://github.com/mobiledevloperlab/nimotehost) source is licensed under Apache-2.0. [Linux Presets](https://github.com/mobiledevloperlab/nimote-linux-presets/blob/master/LICENSE) uses MIT. Published [Local Linux source bundles and license notices](https://nimotecode.com/docs/local-linux-source) cover third-party components. Those licenses apply to their respective components, not to the NimoteCode application or all content in this repository.

<details>
<summary>Maintain the website and docs</summary>

```bash
nvm install
nvm use
npm ci
npm ci --prefix blog
node scripts/generate-readme-screenshot.mjs
npm run docs:build
npm run docs:check
```

Use Node 24 (`.nvmrc`), matching deployment. Astro requires Node >=22.23.4; Node 20 is unsupported. Run `nvm use` after opening a new terminal in this repository.

Use `npm run docs:dev` to preview locally.

</details>

---

## Help make NimoteCode better

If NimoteCode helps you code on the go, give this repository a [⭐ Star](https://github.com/mobiledevloperlab/nimotecode) to help other developers discover it.

Have an idea, a feature request or a bug to report? Send feedback in the app or open a [GitHub Issue](https://github.com/mobiledevloperlab/nimote_issues/issues). Your experience helps shape future improvements.
