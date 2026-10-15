<p align="center">
  <img src="docs/public/app_icon_round.png" alt="NimoteCode logo" width="72" height="72">
</p>

<h1 align="center">NimoteCode</h1>

<p align="center"><a href="README.zh-CN.md">简体中文</a> · English</p>

<p align="center"><b>Mobile IDE for Android / iOS</b><br>Connect to your development host, edit code, run tests and review changes from your phone or tablet.</p>

<p align="center">SSH · Code Editor · Terminal · Git · Debug · AI Agent<br>Root-free Local Linux on Android only</p>

<p align="center">Commercial, closed-source app · This repository provides official docs, tutorials and community resources, not app source.</p>

<p align="center">
  <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode"><img src="https://img.shields.io/badge/Google_Play-Install-34A853?style=for-the-badge&logo=googleplay&logoColor=white" alt="Get NimoteCode on Google Play"></a>
  <a href="https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253"><img src="https://img.shields.io/badge/App_Store-Download-0D96F6?style=for-the-badge&logo=appstore&logoColor=white" alt="Get NimoteCode on the App Store"></a>
</p>

<p align="center"><a href="#demo">Watch demo</a> · <a href="https://nimotecode.com/docs/quick-start?utm_source=github&amp;utm_medium=referral&amp;utm_campaign=developer_workflows&amp;utm_content=readme_en_quick_start">Quick start</a> · <a href="https://nimotecode.com?utm_source=github&amp;utm_medium=referral&amp;utm_campaign=developer_workflows&amp;utm_content=readme_en_website">Website</a><br>Early Access Pro: sign in to use all features free during Early Access.</p>

<p align="center">
  <img src="docs/public/screenshots/nimote-pro.webp" alt="NimoteCode mobile IDE with local and SSH workspaces on tablet and phone" width="1000">
</p>

## Demo

<div align="center" style="padding: 24px 16px; background: radial-gradient(ellipse at center, rgba(56, 139, 253, 0.16) 0%, rgba(56, 139, 253, 0) 72%);">
  <video src="https://github.com/user-attachments/assets/531d62fc-4874-41b9-96af-1ac9d2ad6fd6" controls muted playsinline width="420" poster="docs/public/videos/nimotecode-poster.jpg" style="display: block; max-width: 100%; margin: 0 auto; border: 1px solid rgba(56, 139, 253, 0.28); border-radius: 16px; box-shadow: 0 12px 32px rgba(27, 31, 35, 0.18);">
    Open the <a href="https://github.com/user-attachments/assets/531d62fc-4874-41b9-96af-1ac9d2ad6fd6">AI Agent demo video</a>.
  </video>
</div>

[Watch the AI Agent product demo](https://github.com/user-attachments/assets/531d62fc-4874-41b9-96af-1ac9d2ad6fd6) · [Alternative MP4 video](https://nimotecode.com/videos/ai-agent-demo-small.mp4)

## Why NimoteCode?

NimoteCode brings SSH, code editing, Terminal, Git review and AI agents into one mobile workspace, so you can inspect a project, make a change, run checks and review the result. The [1.2.1–1.2.2 release notes](https://github.com/mobiledevloperlab/nimotecode/releases) add access to folders outside the app sandbox, Git review in the landscape editor and Git status updates as files change. The table compares common workflows; capabilities depend on the client and host tools, and existing features are not all new in this release. On narrow screens, swipe the table horizontally to see all columns.

| Capability | SSH terminal workflow | AI agent terminal workflow | NimoteCode |
| --- | --- | --- | --- |
| Remote SSH | Connect to a host and run commands | Access a host-installed agent over SSH | SSH Explorer, editor and terminal share project context |
| Code editing and project folders | Use a host editor or client file tools | Agent edits files; manual inspection needs supporting tools | Built-in editor; open folders outside the app sandbox with the system picker |
| Git review | Git commands or a separate interface | Agent can invoke Git; human review still needed | Diffs, commits and conflicts in the landscape editor; Git status refreshes as files change |
| AI Agent | Install and authenticate a CLI separately | Use a configured agent CLI | Built-in Agent and compatible ACP agents; Claude Code / Codex CLI require separate host installation and authentication and are not bundled |
| Android Local Linux | Depends on the client's local runtime | Depends on CLI and local runtime compatibility | Root-free Ubuntu through PRoot on supported Android devices; unavailable on iOS |
| LSP / diagnostics | Depends on editor and language tools | Use a supporting editor or check commands | Editor diagnostics for supported languages with the required tools configured |
| Debugging | Host debugger or supporting tools | Can help investigate; interactive debugging needs other tools | Debug within the workspace with the required runtime and debugger tools |
| Web preview | Browser with the required network setup | Start a service, then inspect it in a browser | In-app web preview, including HTML snapshots |

<a id="choose-your-first-development-task"></a>

## Real Workflows

**Open a project → Edit → Run checks → Review the Git diff**

1. **Remote SSH: fix a failing test**

   Follow [SSH remote development](resources/remote-development-from-phone.md): run the existing check on your host, edit, rerun and review the diff. **Android / iOS; requires a reachable development host.**

2. **AI Coding: investigate a bounded issue**

   Use [Claude Code on Phone](resources/claude-code-on-phone.md) or [Codex on Mobile](examples/codex-over-ssh/README.md): ask the host-installed CLI to inspect first, then review changes and run checks. **CLIs are not bundled; separate installation, authentication and provider access are required. Provider charges are separate.**

3. **Android Local Linux: run a first script**

   Follow [Android Linux without root](resources/android-linux-development.md): run the Bash exercise in a fresh directory, inspect its output, edit and rerun. **Supported Android 8+ ARM64 / x86_64 devices only; uses PRoot, unavailable on iOS.**

Files already on your device? Start editing in a local workspace. Language toolchains, LSP and debugger tools depend on the selected environment.

## AI, your way

| Option | How it works |
| --- | --- |
| **Built-in Agent** | A project-aware assistant with file, terminal, and Git context. |
| **ACP Agent** | Connect a compatible external agent in an SSH workspace and follow permissions and progress in one timeline. |
| **Claude Code / Codex** | Run them on your own host and work with them through the terminal. |

<details>
<summary>Explore all core capabilities</summary>

| Area | What you can do |
| --- | --- |
| Explorer and Search | Browse and search a project. |
| Editor | Edit files with LSP diagnostics for supported languages. |
| Terminal | Run commands and tasks locally, on Android Local Linux, or on a remote host. |
| Tasks | Run and review project tasks. |
| Source Control | Check Git status and diffs, then commit, pull, and push. |
| Debugger | Step through code with the debugger. |
| Preview | Preview web output, including HTML snapshots. |
| AI | Use the built-in agent, an ACP agent, or Claude Code / Codex on your own host. |

</details>

## Start using NimoteCode

[**Android — Get it on Google Play**](https://play.google.com/store/apps/details?id=com.nimote.nimotecode) · [**iPhone / iPad — Download on the App Store**](https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253)

See [platform requirements and download instructions](https://nimotecode.com/download?utm_source=github&utm_medium=referral&utm_campaign=developer_workflows&utm_content=readme_en_download).

After installing, follow the [quick start](https://nimotecode.com/docs/quick-start) to open a local project or connect an SSH host. Supported Android devices can also choose Local Linux.

## Mobile Development Guides

Technical notes for developing away from a desk, covering local, remote, Android Linux, Git, and AI workflows.

- [Mobile development resources](resources/README.md) — the full guide index
- [Workflow examples](examples/README.md) — SSH, Codex, Claude Code, and Android Local Linux setups
- [NimoteCode documentation](https://nimotecode.com/docs/quick-start) — setup and feature reference

## Linux Presets

Optional Android Local Linux environments, with versioned manifests and verification scripts, live in a separate repository.

[Linux Presets](https://github.com/mobiledevloperlab/nimote-linux-presets) · [Preset overview](presets/README.md) · [Android Local Linux docs](https://nimotecode.com/docs/local-linux)

## What's New

**1.2.2 highlights**

- Open project folders outside the app sandbox with the system picker.
- Review Git diffs, commits and conflicts in the landscape editor.
- See Git status refresh in Explorer and Source Control as files change.

<details>
<summary>More updates from 1.1.5–1.2.2</summary>

### 1.2.1–1.2.2 highlights

- **Open project folders outside the app sandbox:** on Android and iPadOS/iPhone, open a project directory outside the app's own documents folder with the system picker. NimoteCode remembers the grant across relaunches and reads and writes through the secure file provider.
- **Git in the landscape editor:** Git diffs, commit diffs, and conflict resolution now open in the editor area of a docked landscape workspace, in the same place as Settings and Markdown preview.
- **Near real-time Git status:** Explorer decorations and Source Control update as files change from the terminal, Explorer, or external tools, instead of waiting for the next poll.
- **A calmer, more focused IDE:** panels, tabs, editor chrome, terminal surfaces, and AI views now share one visual system, with a more focused landscape workspace and better large-screen readability.
- **Refined defaults and reliability:** denser Explorer defaults, a "/" terminal preset that no longer dismisses the soft keyboard, SSH sessions that survive short interruptions, and new installs that default to English.

### 1.1.5–1.2.0 highlights

From 1.1.5 through 1.2.0, NimoteCode added major mobile-development capabilities across Android and iOS:

- **A more complete mobile workspace:** split editor panes, in-app browser and media preview, Git history and Diff review, plus more dependable Terminal and SSH workflows.
- **AI and agent workflows:** richer workspace context and recent tasks, a persistent agent-status indicator, external ACP agents, slash commands, and consistent remote-environment support for tools such as Claude Code and Codex.
- **Android Local Linux:** on supported Android devices, run a root-free Ubuntu environment with Bash, Git, and SSH directly from the workspace. This feature is not available on iOS.
- **A refined mobile interface:** layouts adapt to the available space; interface scale, Explorer display preferences, themes, and the AI timeline make work easier to scan and control.
- **Better touch and keyboard editing:** Android tablets and iPad can use Monaco; phones retain Nimote Editor, with stronger selection, clipboard, Diff, external-keyboard, CJK-input, and soft-keyboard handling.

</details>

🗒️ [Read the release notes](https://github.com/mobiledevloperlab/nimotecode/releases)

## Community

NimoteCode is actively developed. Share questions, bugs or ideas to help shape the next improvements.

💬 [Discord](https://discord.gg/tTxbpqYmhR) · [GitHub Issues](https://github.com/mobiledevloperlab/nimote_issues/issues) · [X](https://x.com/mobiledevlab)

⭐ Star the repository to follow NimoteCode and new mobile development resources.

[![Star NimoteCode](https://img.shields.io/github/stars/mobiledevloperlab/nimotecode?style=social)](https://github.com/mobiledevloperlab/nimotecode)

## About this repository

NimoteCode is a commercial, closed-source application. This public repository is the official home for:

- Product documentation
- Mobile development guides
- Workflow examples
- Android Linux presets
- Release notes
- Community issues and feedback

The NimoteCode application source code is not published in this repository. Published Local Linux source bundles and license notices cover third-party components; they do not make the NimoteCode app open source.

<details>
<summary>Maintain the website and docs</summary>

Build the website and docs locally:

```bash
npm ci
npm run docs:build
npm run docs:check
```

Use `npm run docs:dev` to preview locally.

</details>

## License

Website and docs unless stated otherwise. [Local Linux source and licenses](https://nimotecode.com/docs/local-linux-source) · Linux Presets: [MIT](https://github.com/mobiledevloperlab/nimote-linux-presets/blob/master/LICENSE).
