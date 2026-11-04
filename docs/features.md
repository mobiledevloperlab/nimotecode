---
title: NimoteCode features | Mobile development workspace
description: "NimoteCode brings local and SSH workspaces, Android Local Linux, editing, terminal, Git and GitHub workflows, AI, custom plugins, language services, debugging, search, tasks and project transfer to a mobile development workspace."
---

# NimoteCode features

NimoteCode is a mobile development workspace for working with an existing project from a phone or tablet. It does not replace your repository, server, package manager, model provider, or project toolchain. Instead, it brings the parts of that workflow together: files, an editor, a shell environment, version control, and optional AI assistance.

<div class="guide-actions">

[Get started](/docs/quick-start) · [Read the documentation](/docs) · [Download NimoteCode](/download)

</div>

## Choose the environment that fits the work

| Workspace | What it is for | Important boundary |
| --- | --- | --- |
| **Local workspace** | Open a folder that the operating system lets NimoteCode access. Edit files and inspect a Git repository on the device. | A local folder alone does not supply a Linux shell, compiler, or project runtime. |
| **SSH workspace** | Work on a project and tools that already live on a remote host. | Commands run with the selected remote account and its permissions. The host remains responsible for its tools, dependencies, and access controls. |
| **Android Local Linux** | Run a rootless Ubuntu userspace on supported Android devices, with Bash, Git, and SSH available to the workspace. | Android only; toolchains and project dependencies are installed separately. It is not an Android-root environment. |
| **Demo workspace** | Explore the interface with sample files before connecting a project. | It is a sample project, not a deployable development environment. |

See [Local and SSH workspaces](/docs/ssh) and [Android Local Linux](/docs/local-linux) for setup and compatibility details.

## Build, inspect, and review in one workspace

| Capability | What you can do |
| --- | --- |
| **[Code editor](/docs/editor)** | Open local or remote files, work across tabs or split panes, edit with undo/redo and clipboard controls, navigate symbols when language support is available, and preview Markdown or static HTML. |
| **[Terminal](/docs/terminal)** | Run commands in SSH and Local Linux workspaces, search and copy output, keep named terminal sessions, and refresh a remote login environment after changing shell configuration. |
| **[Source Control](/docs/source-control)** | Inspect status, staged changes, diffs, branches, and history. Where write access is available, use the normal Git workflow to create branches, commit, push, or stash. |
| **[GitHub workflows](/docs/source-control#use-github-from-your-workspace)** | Sign in, browse repositories, clone to device storage, Local Linux, or an SSH host, and work with issues, pull requests, reviews, checks, workflow runs, and artifacts according to your GitHub permissions. |
| **[Tasks](/docs/tasks)** | Save named commands and run them from the connected SSH or Local Linux project directory. |
| **[Workspace search](/docs/search)** | Search file contents in an SSH workspace, with case-sensitive and regular-expression options. |

The project controls what a command, build, test, or Git operation actually does. Always verify the working directory, command, diff, and remote before an operation that changes files or publishes code.

## Use AI with explicit context and control

AI is optional and uses a model configuration you provide. NimoteCode includes templates for OpenAI, Anthropic, Google Gemini, xAI Grok, DeepSeek, Alibaba Qwen, OpenRouter, Groq, SiliconFlow, StepFun, Zhipu AI/GLM, Moonshot AI, Ollama, and compatible OpenAI-style endpoints. Your provider account, network access, model availability, and usage charges remain separate from NimoteCode.

- **[AI Chat](/docs/ai)** can answer questions with the context you choose, including a workspace or selected text.
- **Nimote Agent** can plan and carry out multi-step workspace work. Confirm mode presents the plan and asks for approval before tool execution; the timeline records the work it performs.
- **External ACP agents** can be enabled deliberately for a compatible runtime on an SSH or Local Linux environment. These are third-party processes with their own credentials, policies, and capabilities.
- **MCP servers** can be configured as a local/remote command process or an HTTP server. Add only servers you trust and review their requested credentials and every tool action.

AI output is assistance, not a guarantee of correctness, security, or successful execution. Review generated code, commands, and explanations before relying on them.

## Extend the workspace around your project

| Capability | What it does |
| --- | --- |
| **[Custom plugins](/docs/plugins)** | Build a reusable panel with workspace data, forms, file actions, HTTP requests, and user-confirmed commands or scripts. |
| **[Language services (LSP)](/docs/lsp)** | Show diagnostics and language-server code actions when a compatible language server is installed and configured on the workspace target. |
| **[Debugging](/docs/debug)** | Connect a configured debug adapter to inspect breakpoints, variables, watches, call stacks, and program output. |
| **[Sync and Cache](/docs/sync-cache)** | Transfer project content between local storage and a remote workspace after you choose the direction and verify the paths. |

Plugins and language/debug tools do not silently install dependencies or grant new host permissions. Scripts run with the authority of the selected SSH or Local Linux account; plugin file, network, and execution actions require user confirmation.

## Access and availability

NimoteCode’s feature availability can vary by platform, app version, account entitlement, release channel, and store region. The app shows the access state for the current account; where a feature is offered as Pro, it is gated at the relevant operation rather than changing the authority of your remote host. [Account and subscription](/docs/account-subscription) explains how to check or restore access.

For the precise setup steps and limitations of a workflow, use the linked product documentation rather than relying on this overview.

## Interface at a glance

The screenshots below illustrate the workspace, code review, diagnostics, and project-transfer surfaces described above.

<div class="feature-showcase" role="region" tabindex="0" aria-label="NimoteCode feature highlights">
  <div class="feature-showcase__track">
    <figure class="feature-showcase__item"><img src="/screenshots/p1.png" alt="Local files, SSH, code editing and AI Agent in NimoteCode" width="1604" height="901" loading="eager"><figcaption>Workspaces, editing and AI Agent</figcaption></figure>
    <figure class="feature-showcase__item"><img src="/screenshots/p2.png" alt="SSH terminal, Source Control and code diagnostics in NimoteCode" width="1597" height="896" loading="lazy"><figcaption>Terminal, Git and diagnostics</figcaption></figure>
    <figure class="feature-showcase__item"><img src="/screenshots/p3.png" alt="NimoteCode debugging, remote workspace sync, and smart caching" width="1598" height="893" loading="lazy"><figcaption>Debugging and workspace sync</figcaption></figure>
    <figure class="feature-showcase__item" aria-hidden="true"><img src="/screenshots/p1.png" alt="" width="1604" height="901" loading="lazy"><figcaption>Workspaces, editing and AI Agent</figcaption></figure>
    <figure class="feature-showcase__item" aria-hidden="true"><img src="/screenshots/p2.png" alt="" width="1597" height="896" loading="lazy"><figcaption>Terminal, Git and diagnostics</figcaption></figure>
    <figure class="feature-showcase__item" aria-hidden="true"><img src="/screenshots/p3.png" alt="" width="1598" height="893" loading="lazy"><figcaption>Debugging and workspace sync</figcaption></figure>
  </div>
</div>
