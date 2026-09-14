<p align="center">
  <img src="docs/public/app_icon_round.png" alt="NimoteCode logo" width="72" height="72">
</p>

<h1 align="center">NimoteCode</h1>

<p align="center"><strong>Mobile IDE for Real Development</strong></p>

<p align="center">Your project, terminal, Git, debugger and AI agents —<br>in one mobile workspace.</p>

<p align="center">Code anywhere. Ship anywhere.</p>

<p align="center">SSH · Android Linux · AI Agents · Git · LSP · Debug</p>

<p align="center">
  <a href="https://nimotecode.com"><img src="https://img.shields.io/badge/Website-nimotecode.com-4f46e5?style=flat-square" alt="NimoteCode website"></a>
  <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode"><img src="https://img.shields.io/badge/Google_Play-Install-34A853?style=flat-square&logo=googleplay&logoColor=white" alt="Get NimoteCode on Google Play"></a>
  <a href="https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253"><img src="https://img.shields.io/badge/App_Store-Download-0D96F6?style=flat-square&logo=appstore&logoColor=white" alt="Get NimoteCode on the App Store"></a>
  <a href="https://nimotecode.com/docs/quick-start"><img src="https://img.shields.io/badge/Docs-Quick_Start-24292f?style=flat-square&logo=readthedocs&logoColor=white" alt="NimoteCode documentation"></a>
</p>

<p align="center">
  <img src="docs/public/screenshots/p1.png" alt="NimoteCode mobile workspace with code editor, Android Local Linux, SSH, and AI Agent" width="860">
</p>

## One workspace. The whole development loop.

**Explore → Edit → Run → AI → Debug → Review → Ship**

One workspace holds Explorer, editor, search, terminal, tasks, diagnostics, debugger, Git, preview, and AI.

## Built like an IDE — not just an SSH terminal

| Code | Run | Understand | Ship |
| --- | --- | --- | --- |
| Explorer | Terminal | LSP diagnostics | Git status |
| Editor | Tasks | Code actions | Diff review |
| Project search | Multi-terminal | Debugger | Commit / branch |
| Preview | Commands | AI-assisted fixes | Push |

Many mobile tools give you a shell. NimoteCode keeps the surrounding IDE workflow with it. Configuration and plan requirements apply.

## One IDE. Three environments.

| Local Workspace | Android Local Linux | Remote SSH |
| --- | --- | --- |
| Work with local files | Ubuntu + PRoot, no Android root | Mac / Linux / VPS |
| Quick editing | ARM64 / x86_64 | Keep heavy toolchains on the host |
| Editor, Git and AI | Same IDE | Same workflow |

Switch environments without switching your development workflow.

## AI agents, your way

```text
Built-in Agent
      │
      ├── Project-aware AI
      ├── ACP agents in SSH workspaces
      └── Claude Code / Codex via Terminal
```

Choose the built-in agent, compatible ACP agents, or Claude Code / Codex on your host—without leaving the mobile editor, terminal, and Git workflow.

## Demo

<p align="center">
  <video src="https://github.com/user-attachments/assets/531d62fc-4874-41b9-96af-1ac9d2ad6fd6" controls muted playsinline width="420" poster="docs/public/videos/nimotecode-poster.jpg">
    Open the <a href="https://github.com/user-attachments/assets/531d62fc-4874-41b9-96af-1ac9d2ad6fd6">AI Agent demo video</a>.
  </video>
</p>

## Linux development directly on Android

Run Ubuntu through PRoot without Android root.

**ARM64 · x86_64 · Ubuntu 24.04**

[Local Linux Docs](https://nimotecode.com/docs/local-linux) · [Linux Presets](https://github.com/mobiledevloperlab/nimote-linux-presets)

## Developer Resources

[Resources](resources/README.md) · [Examples](examples/README.md) · [Documentation](https://nimotecode.com/docs/quick-start)

## Follow the future of mobile development

If you are interested in full IDE workflows, Android Linux, remote development and AI coding from mobile devices, ⭐ Star NimoteCode to follow the project.

[![Star NimoteCode](https://img.shields.io/github/stars/mobiledevloperlab/nimotecode?style=social)](https://github.com/mobiledevloperlab/nimotecode)

## Community

[Discord](https://discord.gg/tTxbpqYmhR) · [GitHub Issues](https://github.com/mobiledevloperlab/nimote_issues/issues) · [X](https://x.com/mobiledevlab)

## Development

Public website, documentation, and developer resources; application source is not published. Build:

```bash
npm ci
npm run docs:build
npm run docs:check
```

Use `npm run docs:dev` for a local preview.

## License

Website and docs unless stated otherwise. [Local Linux source and licenses](https://nimotecode.com/docs/local-linux-source) · Linux Presets: [MIT](https://github.com/mobiledevloperlab/nimote-linux-presets/blob/master/LICENSE).
