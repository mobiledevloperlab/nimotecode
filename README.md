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
> **Install from the stores.** The package attached to the current GitHub Release is an older build and does not include the major 1.1.6–1.1.7 updates. The newest NimoteCode build is rolling out through [Google Play](https://play.google.com/store/apps/details?id=com.nimote.nimotecode) and the [App Store](https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253); download or update there when it is available in your region.
>
> **What’s new:** 1.1.6 adds first-launch onboarding and improves editor, browser, Git, and iOS input reliability. 1.1.7 introduces Android Local Linux, HTML snapshot preview, external ACP agents, and a unified SSH login environment. Version 1.1.8 begins **Early Access Pro**—an early rollout for users who want to try Pro workflows and help shape what comes next. [Read the release notes](https://github.com/mobiledevloperlab/nimotecode/releases).

<p align="center">
  <img src="docs/public/screenshots/nimote-pro-framed.webp" alt="NimoteCode mobile IDE with local and SSH workspaces on tablet and phone" width="1000">
</p>

## One workspace. The whole development loop.

**Explore → Edit → Run → AI → Debug → Review → Ship**

Explorer, editor, search, terminal, tasks, diagnostics, debugger, Git, preview, and AI in one workspace.

## Demo

<div align="center" style="padding: 24px 16px; background: radial-gradient(ellipse at center, rgba(56, 139, 253, 0.16) 0%, rgba(56, 139, 253, 0) 72%);">
  <video src="https://github.com/user-attachments/assets/531d62fc-4874-41b9-96af-1ac9d2ad6fd6" controls muted playsinline width="420" poster="docs/public/videos/nimotecode-poster.jpg" style="display: block; max-width: 100%; margin: 0 auto; border: 1px solid rgba(56, 139, 253, 0.28); border-radius: 16px; box-shadow: 0 12px 32px rgba(27, 31, 35, 0.18);">
    Open the <a href="https://github.com/user-attachments/assets/531d62fc-4874-41b9-96af-1ac9d2ad6fd6">AI Agent demo video</a>.
  </video>
</div>

## Built like an IDE — not just an SSH terminal

| Code | Run | Understand | Ship |
| --- | --- | --- | --- |
| Explorer | Terminal | LSP diagnostics | Git status |
| Editor | Tasks | Code actions | Diff review |
| Project search | Multi-terminal | Debugger | Commit / branch |
| Preview | Commands | AI-assisted fixes | Push |

Many mobile tools give you a shell. NimoteCode keeps the surrounding IDE workflow with it.

## One IDE. Three environments.

| Local Workspace | Android Local Linux | Remote SSH |
| --- | --- | --- |
| Work with local files | Ubuntu + PRoot, no Android root | Mac / Linux / VPS |
| Quick editing | ARM64 / x86_64 | Keep heavy toolchains on the host |
| Editor, Git and AI | Same IDE | Same workflow |

Switch environments without switching your development workflow.

> [!NOTE]
> **Choose the workspace that fits the job.** Use Local Workspace for quick file work, Android Local Linux for a root-free Ubuntu environment on supported Android devices, and Remote SSH when your project or toolchain already lives on another machine.

## AI agents, your way

| Built-in Agent | ACP Agents | CLI Agents |
| --- | --- | --- |
| Project-aware AI | Compatible ACP agents | Claude Code / Codex |
| Files + terminal + Git context | Unified mobile workflow | Run on your own host |
| Integrated experience | SSH workspace integration | Use through Terminal |

Choose the built-in agent, compatible ACP agents, or Claude Code / Codex on your own host—while keeping the surrounding editor, terminal and Git workflow on mobile.

> [!TIP]
> **Pick an agent path.** Start with the built-in agent for an integrated workflow; choose ACP for a compatible external agent in an SSH workspace; or run Claude Code / Codex in Terminal on your own host.

## Linux development directly on Android

Ubuntu through PRoot, no Android root.

**ARM64 · x86_64 · Ubuntu 24.04**

[Local Linux Docs](https://nimotecode.com/docs/local-linux) · [Linux Presets](https://github.com/mobiledevloperlab/nimote-linux-presets)

## Developer Resources

Mobile Development · Android Linux · Remote Development · AI Coding

[Browse Resources](resources/README.md) · [Mobile workflow guide](resources/mobile-coding-workflows.md) · [Examples](examples/README.md) · [Documentation](https://nimotecode.com/docs/quick-start)

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
