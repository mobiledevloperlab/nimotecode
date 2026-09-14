<p align="center">
  <img src="docs/public/app_icon_round.png" alt="NimoteCode logo" width="72" height="72">
</p>

<h1 align="center">NimoteCode</h1>

<p align="center"><a href="README.zh-CN.md">简体中文</a> · English</p>

<p align="center">Mobile IDE for Real Development<br>Your project, terminal, Git, debugger and AI agents — in one mobile workspace.</p>

<p align="center">
  <a href="https://nimotecode.com"><img src="https://img.shields.io/badge/Website-nimotecode.com-4f46e5?style=flat-square" alt="NimoteCode website"></a>
  <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode"><img src="https://img.shields.io/badge/Google_Play-Install-34A853?style=flat-square&logo=googleplay&logoColor=white" alt="Get NimoteCode on Google Play"></a>
  <a href="https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253"><img src="https://img.shields.io/badge/App_Store-Download-0D96F6?style=flat-square&logo=appstore&logoColor=white" alt="Get NimoteCode on the App Store"></a>
  <a href="https://nimotecode.com/docs/quick-start"><img src="https://img.shields.io/badge/Docs-Quick_Start-24292f?style=flat-square&logo=readthedocs&logoColor=white" alt="NimoteCode documentation"></a>
</p>

> [!IMPORTANT]
> **Install from your store.** The GitHub Release package is an older build; get NimoteCode from [Google Play](https://play.google.com/store/apps/details?id=com.nimote.nimotecode) or the [App Store](https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253).
>
> **1.1.6–1.1.8 highlights:** First-launch onboarding, Android Local Linux, HTML snapshot preview, external ACP agents, and flexible workspace directories. Reliability fixes improve SSH credentials, Tasks, Source Control and Diff, Git refresh, Terminal, AI, and Local Linux. Version 1.1.8 also begins **Early Access Pro**. [Read the release notes](https://github.com/mobiledevloperlab/nimotecode/releases).

<p align="center">
  <img src="docs/public/screenshots/nimote-pro-framed.webp" alt="NimoteCode mobile IDE with local and SSH workspaces on tablet and phone" width="1000">
</p>

## One workspace. The whole development loop.

**Explore → Edit → Run → AI → Debug → Review → Ship**

Explorer, editor, search, terminal, tasks, diagnostics, debugger, Git, preview, and AI in one workspace.

## Demo

> [!TIP]
> **Built in the open, and continuously improving.** Our goal is to build the most capable IDE for mobile development. Share ideas, questions, or bugs in [GitHub Issues](https://github.com/mobiledevloperlab/nimote_issues/issues); we read and reply to every report.

<div align="center" style="padding: 24px 16px; background: radial-gradient(ellipse at center, rgba(56, 139, 253, 0.16) 0%, rgba(56, 139, 253, 0) 72%);">
  <video src="https://github.com/user-attachments/assets/531d62fc-4874-41b9-96af-1ac9d2ad6fd6" controls muted playsinline width="420" poster="docs/public/videos/nimotecode-poster.jpg" style="display: block; max-width: 100%; margin: 0 auto; border: 1px solid rgba(56, 139, 253, 0.28); border-radius: 16px; box-shadow: 0 12px 32px rgba(27, 31, 35, 0.18);">
    Open the <a href="https://github.com/user-attachments/assets/531d62fc-4874-41b9-96af-1ac9d2ad6fd6">AI Agent demo video</a>.
  </video>
</div>

## From project to completed change

NimoteCode keeps the essential development loop together on mobile: choose a workspace, make an edit, run a check, review the diff, and ship when the change is ready.

| Start here | Then | Finish with |
| --- | --- | --- |
| Open a local folder, Android Local Linux, or an SSH project | Edit in the Editor and verify in Terminal or Tasks | Review Git status and Diff before a commit or push |
| Search the project or use AI for a focused task | Inspect the resulting files and command output | Keep the decision and delivery steps visible |

## Choose the workspace for your project

| If your project is… | Choose | What you get |
| --- | --- | --- |
| Already on your phone or tablet | **Local Workspace** | Fast file editing with the same Editor, Terminal, Git, and AI workflow |
| Best handled with Linux tools on Android | **Android Local Linux** | Root-free Ubuntu through PRoot on supported ARM64 and x86_64 Android devices |
| On a Mac, Linux machine, or VPS | **Remote SSH** | Work against the real host while keeping heavy toolchains and services there |

Switch workspaces without changing the way you browse, edit, run, or review a project.

## Choose an AI workflow

| When you need… | Use | Best for |
| --- | --- | --- |
| An integrated, project-aware assistant | **Built-in Agent** | Focused tasks across files, Terminal, and Git context |
| A compatible external Agent in an SSH workspace | **ACP Agent** | Reviewing permissions and progress in one mobile timeline |
| Claude Code or Codex on your own host | **CLI Agent** | Keeping the agent and its authentication on the remote machine, accessed through Terminal |

Start with the built-in Agent for the simplest path. Choose ACP when you already use a compatible external runtime, or use a CLI Agent when your existing workflow runs on the remote host.

## Go deeper when you need it

Android Local Linux runs Ubuntu 24.04 through PRoot without Android root. For setup and next steps, explore [Local Linux Docs](https://nimotecode.com/docs/local-linux), [Linux Presets](https://github.com/mobiledevloperlab/nimote-linux-presets), [mobile workflow guides](resources/mobile-coding-workflows.md), [examples](examples/README.md), and the [documentation](https://nimotecode.com/docs/quick-start).

🗒️ [Product release notes](https://github.com/mobiledevloperlab/nimotecode/releases)

## Follow the future of mobile development

NimoteCode explores full mobile IDE workflows, Android Linux, remote development and AI coding from mobile devices.

⭐ Star the project to follow its progress.

[![Star NimoteCode](https://img.shields.io/github/stars/mobiledevloperlab/nimotecode?style=social)](https://github.com/mobiledevloperlab/nimotecode)

## Community

💬 [Discord](https://discord.gg/tTxbpqYmhR) · [GitHub Issues](https://github.com/mobiledevloperlab/nimote_issues/issues) · [X](https://x.com/mobiledevlab)

## Development

The NimoteCode application source code is not published in this repository. This repository contains the official website, documentation, developer resources, workflow examples, and product release notes. Build the website and docs with:

```bash
npm ci
npm run docs:build
npm run docs:check
```

Use `npm run docs:dev` to preview locally.

## License

Website and docs unless stated otherwise. [Local Linux source and licenses](https://nimotecode.com/docs/local-linux-source) · Linux Presets: [MIT](https://github.com/mobiledevloperlab/nimote-linux-presets/blob/master/LICENSE).
