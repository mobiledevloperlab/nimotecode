<p align="center">
  <img src="docs/public/app_icon_round.png" alt="NimoteCode logo" width="88" height="88">
</p>

<h1 align="center">NimoteCode — Mobile IDE for Android &amp; iOS</h1>

<p align="center"><a href="README.zh-CN.md">简体中文</a> · English</p>

<p align="center">
  <strong>Your projects, on your phone or tablet.</strong><br>
  Edit local projects or connect over SSH. Write code, run commands, review Git diffs,<br>
  and work with AI in one mobile workspace.
</p>

<p align="center"><sub>Code Editor&nbsp;&nbsp;•&nbsp;&nbsp;SSH Terminal&nbsp;&nbsp;•&nbsp;&nbsp;Git&nbsp;&nbsp;•&nbsp;&nbsp;AI Coding<br>Root-free Ubuntu on supported Android devices</sub></p>

<p align="center">
  <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode"><img src="https://img.shields.io/badge/Google_Play-Install-34A853?style=for-the-badge&amp;logo=googleplay&amp;logoColor=white" alt="Install NimoteCode for Android from Google Play"></a>
  <a href="https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253"><img src="https://img.shields.io/badge/App_Store-Download-0D96F6?style=for-the-badge&amp;logo=appstore&amp;logoColor=white" alt="Download NimoteCode for iPhone and iPad from the App Store"></a>
</p>

<p align="center"><sub>
  <a href="#demo">Watch demo</a> ·
  <a href="#compare-mobile-development-tools">Compare tools</a> ·
  <a href="https://nimotecode.com/docs/quick-start?utm_source=github&amp;utm_medium=referral&amp;utm_campaign=readme&amp;utm_content=en_quick_start">Quick start</a> ·
  <a href="#whats-new-in-125">What's new in 1.2.5</a>
</sub></p>

<p align="center"><sub>Free to start. AI setup is optional.<br>Commercial, closed-source app · Official documentation and community resources</sub></p>

<p align="center">
  <img src="docs/public/screenshots/nimote-pro.webp" alt="NimoteCode code editor, project explorer and AI workspace on a tablet and phone" width="1000">
</p>

---

## Demo

<div align="center" style="padding: 24px 16px; background: radial-gradient(ellipse at center, rgba(56, 139, 253, 0.16) 0%, rgba(56, 139, 253, 0) 72%);">
  <video src="https://github.com/user-attachments/assets/531d62fc-4874-41b9-96af-1ac9d2ad6fd6" controls muted playsinline width="420" poster="docs/public/videos/nimotecode-poster.jpg" style="display: block; max-width: 100%; margin: 0 auto; border: 1px solid rgba(56, 139, 253, 0.28); border-radius: 16px; box-shadow: 0 12px 32px rgba(27, 31, 35, 0.18);">
    Open the <a href="https://github.com/user-attachments/assets/531d62fc-4874-41b9-96af-1ac9d2ad6fd6">AI Agent demo video</a>.
  </video>
</div>

<p align="center">
  <a href="https://github.com/user-attachments/assets/531d62fc-4874-41b9-96af-1ac9d2ad6fd6">Watch the AI Agent product demo</a> ·
  <a href="https://nimotecode.com/videos/ai-agent-demo-small.mp4">Alternative MP4 video</a>
</p>

## Develop wherever your project lives

NimoteCode brings a code editor, SSH terminal, Git review and AI workflows to Android, iPhone and iPad. Inspect a project, make a focused change, run the available checks and review the result without switching between separate mobile tools.

<a id="choose-your-first-development-task"></a>

- **Edit a local project.** Open a folder on your device with the system picker, browse files and start editing. No remote host is needed to get started; running code depends on the tools available in your workspace.
- **Connect to your development host over SSH.** Work with remote project files, use the host's terminal and inspect Git changes. Follow the [SSH remote development guide](resources/remote-development-from-phone.md) to edit and verify a change. Requires a reachable, configured SSH host.
- **Run Linux on Android without root.** Use bundled Ubuntu through PRoot, with Bash, Git and SSH, on supported Android 8+ ARM64 / x86_64 devices. Share app-local projects with Linux at `/mnt/local`. [Try your first Linux script](resources/android-linux-development.md). Local Linux is unavailable on iPhone and iPad.

> ⭐ **Useful for your mobile workflow? Star this repository to keep the guides and examples handy.**

## Compare mobile development tools

**Edit → Run checks → Review the diff, in one mobile workspace.** These selected capabilities from our detailed comparison help you choose the right tool for your workflow.

✅ Documented built-in or integrated capability · ◐ Conditional · ? Not verified, **not an absence claim** · — Explicitly unsupported

| Key capability | **NimoteCode** | Termius | Blink Shell | ServerCC |
| --- | :---: | :---: | :---: | :---: |
| SSH connection | ✅ | ✅ | ✅ | ✅ |
| Code editor | ✅ | ? | ✅ | ? |
| Git / diff UI | ✅ ¹ | ? | ◐ | ✅ |
| Built-in AI agent | ✅ ¹ | ? | ? | ? |
| LSP diagnostics | ✅ ¹ | ? | ◐ | ? |
| Web / app preview | ✅ | ? | ? | ✅ |
| Android Local Linux | ✅ ² | ? | ? | ? |
| Mosh transport | ? | ✅ | ✅ | ? |

<details>
<summary>Compare Redock, Orca and Moshi</summary>

| Key capability | **NimoteCode** | Redock | Orca | Moshi |
| --- | :---: | :---: | :---: | :---: |
| SSH connection | ✅ | ✅ | ◐ | ✅ |
| Code editor | ✅ | ? | — | ? |
| Git / diff UI | ✅ ¹ | ? | ✅ | ✅ |
| Built-in AI agent | ✅ ¹ | ? | ? | ? |
| LSP diagnostics | ✅ ¹ | ? | ? | ? |
| Web / app preview | ✅ | ✅ | ✅ | ✅ |
| Android Local Linux | ✅ ² | ? | ? | ? |
| Mosh transport | ? | ✅ | ? | ✅ |

Orca mobile requires its desktop companion. Moshi's diff and web preview require Pro and a host hook. Redock's preview uses a host development server.

</details>

¹ **Early Access:** NimoteCode’s built-in Agent, Git writes and LSP are available through Early Access; Git status, diffs and history are free. Check the app for current availability. ² Local Linux requires supported Android 8+ ARM64 / x86_64 devices. The built-in Agent needs your own AI provider; LSP needs a configured host language server.

A check does not mean free, setup-free or available on every platform. Blink integrates editing through Blink Code; Git / LSP depend on repository or remote IDE configuration. Termius Mosh is verified here for Android only. See the full comparison for each product's setup and plan requirements.

> [**See all seven tools and feature-by-feature official evidence →**](https://nimotecode.com/compare/mobile-ai-development-tools?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=en_comparison) · Evidence baseline: 2026-10-19; NimoteCode 1.2.5.

**Try the workflow yourself:** [install NimoteCode](https://nimotecode.com/download?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=en_compare_download) and open a demo or local project. No AI setup needed to start.

## Why try NimoteCode?

- **Edit and navigate:** browse and search project files, use split editor panes, and preview Markdown and web output.
- **Run and inspect:** use the terminal and project tasks in a compatible workspace, with mobile extra keys and terminal focus mode.
- **Review with Git:** inspect status, diffs and history; use Early Access workflows to commit, pull, push and resolve conflicts.
- **Use language tools:** connect supported language servers for editor diagnostics and configured remote debug adapters for debugging. LSP and debugging are available through Early Access and require the appropriate environment tools.
- **Work with AI:** ask about code, delegate a bounded task to the built-in Agent, or use compatible agents on your SSH host.

System-granted external folders support browsing and editing; Git, LSP, debugging, Tasks, file watching and Agent workflows need a native filesystem path. Tool availability depends on the workspace, installed tools and plan. See the [feature reference](https://nimotecode.com/features?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=en_features) for details.

## AI coding, your way

| Workflow | How to use it |
| --- | --- |
| **AI Chat** | Explain code and terminal output with workspace context. Connect your own AI provider and API key. |
| **Built-in Agent** | Inspect files, plan changes, edit and run checks in a supported workspace. Available through Early Access. |
| **External ACP agent** | Connect a compatible runtime on your SSH host; review permissions and progress in the app's conversation view. |
| **Claude Code / Codex over SSH** | Run a CLI installed on your own host through the terminal. Follow the [Claude Code on phone](resources/claude-code-on-phone.md) or [Codex on mobile](examples/codex-over-ssh/README.md) guide. |

AI model access and tokens are not included. Provider charges are separate. External agents and CLIs require their own installation, authentication and service access; Claude Code and Codex are not bundled with NimoteCode. Review commands and diffs before accepting AI-generated changes.

## Start with your first project

1. **Install:** [Android — Google Play](https://play.google.com/store/apps/details?id=com.nimote.nimotecode) · [iPhone / iPad — App Store](https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253).
2. **Open a workspace:** choose a local project, connect an SSH host, or explore the Demo workspace. Supported Android devices can also use Local Linux. You can start without configuring AI.
3. **Make one small change:** open a file, edit it, run a check if your environment supports it, then inspect the Git diff in a Git repository.

> [**Follow the quick start →**](https://nimotecode.com/docs/quick-start?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=en_get_started)

**Free to start, with advanced workflows through Early Access:** Free includes local, SSH and Android Local Linux workspaces, the editor, baseline terminal, Git review, AI Chat and basic Tasks. Advanced workflows such as AI Agent, remote content search, multiple terminals, Git writes, LSP and debugging are available through Early Access. Check [Early Access details](https://nimotecode.com/pro?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=en_plans) and the app for current availability and terms.

Store availability and release timing may differ by platform and region. See [download and platform requirements](https://nimotecode.com/download?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=en_download); the version offered by your store may differ from the release documented below.

## What's new in 1.2.5

**Manage projects more efficiently. Keep every workspace in sync.**

- **Work with several files at once:** select files or folders in Explorer to copy, move, or delete them together, wherever the workspace supports it.
- **Scan projects more easily:** Explorer shows file sizes and loaded-item counts for expanded folders.
- **Start AI work faster:** begin a conversation or open AI configuration directly from an empty chat.
- **See clearer feedback:** SSH connects with immediate progress and blocks duplicate attempts, while panels, toolbars, Markdown preview, notifications, and mobile navigation are more consistent.

> [Read the full 1.2.5 release notes](https://nimotecode.com/releases/1.2.5?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=en_release) · [Earlier releases](https://nimotecode.com/releases/)

## Guides and resources

- [Mobile development guides](resources/README.md) — local editing, remote development, Git and AI workflows.
- [Workflow examples](examples/README.md) — SSH, Claude Code, Codex and Android Local Linux.
- [Android Local Linux documentation](https://nimotecode.com/docs/local-linux) — setup, compatibility and troubleshooting.
- [Linux Presets](https://github.com/mobiledevloperlab/nimote-linux-presets) — optional environments with versioned manifests and verification scripts; see the [preset overview](presets/README.md).
- [Official website](https://nimotecode.com?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=en_website) — product details and documentation.

## Community

Share a bug, ask a question or suggest a workflow you would like to see supported.

<p align="center">
  <a href="https://discord.gg/tTxbpqYmhR">Discord</a> ·
  <a href="https://github.com/mobiledevloperlab/nimote_issues/issues">Report an issue</a> ·
  <a href="https://x.com/mobiledevlab">X</a>
</p>

<p align="center">
  <b>Star to bookmark these mobile development resources and support NimoteCode.</b><br>
  <a href="https://github.com/mobiledevloperlab/nimotecode"><img src="https://img.shields.io/github/stars/mobiledevloperlab/nimotecode?style=social" alt="Star NimoteCode"></a>
</p>

## About this repository

NimoteCode is a commercial, closed-source application. This repository contains official documentation, tutorials, workflow examples and release notes. The application source code is not published here. Linux presets are maintained in a separate repository, and bug reports use the issue tracker linked above.

Published [Local Linux source bundles and license notices](https://nimotecode.com/docs/local-linux-source) cover third-party components; they do not make the NimoteCode application open source. The separate [Linux Presets MIT license](https://github.com/mobiledevloperlab/nimote-linux-presets/blob/master/LICENSE) applies to that repository, not to the app or all content here.

<details>
<summary>Maintain the website and docs</summary>

```bash
npm ci
npm run docs:build
npm run docs:check
```

Use `npm run docs:dev` to preview locally.

</details>
