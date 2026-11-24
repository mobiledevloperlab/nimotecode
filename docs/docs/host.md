---
title: "NimoteHost Community | NimoteCode"
description: "Install NimoteHost Community on your Linux, macOS, or Windows computer. Managed work continues after you disconnect. Reconnect over SSH from NimoteCode to review output, respond to Agent approvals, and continue working."
---

# NimoteHost Community

Install NimoteHost Community on your Linux, macOS, or Windows computer. Managed work continues after you disconnect. Reconnect over SSH from NimoteCode to review output, respond to Agent approvals, and continue working.

NimoteHost Community is available under Apache-2.0 and runs independently through its CLI or desktop manager. Using Host mode from the phone requires a compatible NimoteCode build (2.4.1 or later) and Pro access.

## Download NimoteHost Community {#download-nimotehost}

<HostDownload />

NimoteHost Community manages terminals, tasks, compatible coding agents, and community plugins. GitHub Issue dispatch is available with the Host bundled with Nimote Connect. For upgrades and edition changes, see the [Community guide](https://github.com/mobiledevloperlab/nimotehost/blob/master/docs/community.md).

[Hardware and package selection](/docs/host/compatibility) · [Download and installation](/docs/host/getting-started) · [Connections, terminals and tasks](/docs/host/sessions) · [Agents and task inbox](/docs/host/agents) · [Service management and updates](/docs/host/maintenance) · [Troubleshooting](/docs/host/troubleshooting)

## What Host brings to your workflow

Host turns your development computer into a workspace you can return to from your phone. Start work where the project and tools already live, let the computer do the execution, and use NimoteCode to check progress and make decisions.

| Capability | What you gain |
| --- | --- |
| Managed terminals and tasks | Start builds, tests, scripts, or an interactive shell. Client disconnection does not end the managed process; reconnect to review retained output and continue work. |
| Structured coding Agents | Use compatible Codex, Claude Code, and OpenCode installations. Read conversations and tool results, respond to approvals, and send follow-up instructions where supported. |
| Sessions and task inbox | Search, filter, and pin work; find pending approvals, failed tasks, and results awaiting review without reopening each session. |
| Verification and code review | Inspect actual test records, exit codes, and diffs before accepting a result. |
| Your own environment | Run against the project's existing toolchain and files on Linux, macOS, or Windows. Choose a server CLI or a desktop manager using the same Host service. |
| Open-source customization | Review the full Host source, compile your own build, change its behavior, add integrations, and contribute improvements under Apache-2.0. |

For example, start your project's test command before leaving your desk, then check its exit code from your phone. Ask an Agent for a focused fix, review the tool calls and permission requests, and return later to inspect the diff and verification. Host keeps execution on the computer while the client supplies your view and controls.

Host and its processes must stay running. A Host or OS restart does not restore the original processes. Agent, inbox, verification, Issue, and plugin controls depend on the connected Host and installed tools. Install Host on the computer running the project before connecting the phone.

## NimoteCode and NimoteHost

**NimoteCode is the client; NimoteHost runs the work on your computer.** NimoteHost is a standalone CLI and optional desktop manager for Linux, macOS, and Windows. Its complete source is licensed under Apache-2.0 in the [NimoteHost repository](https://github.com/mobiledevloperlab/nimotehost). NimoteCode remains a commercial, closed-source app. Host can also run independently of NimoteCode, with RPC, a Go client package, and an opt-in MCP interface for other integrations.

The connection is: **NimoteCode → your existing SSH connection → NimoteHost → project tools and Agents**. There is no additional Nimote account, public relay, or Host port to open. Host authenticates its local API and keeps its credentials on the computer. Commands run with the Host account's permissions; use separate OS accounts when you need separate users or trust boundaries.

| Choose | When it fits |
| --- | --- |
| Ordinary SSH workspace | Edit remote files, use a terminal, and review Git without installing Host. |
| Host mode | Leave tasks running after the client disconnects, return to their output, and manage compatible structured Agent conversations and approvals. |
| Host CLI | Deploy on a server or manage the service from a shell. No desktop environment needed. |
| Host desktop bundle | Manage service status, sessions, devices, settings, and diagnostics on the computer. Includes the CLI. |

The screenshots show earlier Android and Host builds, including NimoteCode 2.3.1 (build 64) and a local Host 2.4.0 build. Controls vary with the connected Host, app version, and installed tools.

## Fully open-source Host: inspect, customize, and contribute

**NimoteHost's complete source is licensed under Apache-2.0**, including the Host runtime, CLI, desktop manager, and integration SDKs. This gives you a concrete way to inspect how remote execution, credentials, and session persistence work, build the software yourself, and adapt it to your environment. The license covers NimoteHost; the NimoteCode client remains commercial and closed source.

- **Review and build:** read the implementation and dependencies, inspect the license notices, and build from source using the [source installation guide](/docs/host/getting-started#host-source).
- **Customize your deployment:** fork the repository, modify Host behavior or the desktop manager, and maintain your own build. Keep your changes compatible with the app's protocol and capabilities.
- **Extend your workflow:** create community plugins with `pkg/pluginsdk`, connect your tools through RPC or MCP, or use `pkg/hostclient` for a Go integration. MCP is read-only by default; writes require explicit opt-in.
- **Contribute upstream:** open issues with reproducible problems or proposals, and submit pull requests for fixes, Agent adapters, plugins, translations, and documentation. Discuss substantial protocol or architecture changes first and run the checks in the contribution guide.

[Browse the source](https://github.com/mobiledevloperlab/nimotehost) · [Apache-2.0 license](https://github.com/mobiledevloperlab/nimotehost/blob/master/LICENSE) · [Contribution guide](https://github.com/mobiledevloperlab/nimotehost/blob/master/CONTRIBUTING.md) · [Plugin SDK](https://github.com/mobiledevloperlab/nimotehost/blob/master/docs/plugin-system/plugin-sdk.md)

### Transparent implementation and controlled access

Host uses your authenticated SSH connection; its HTTP API listens only on loopback and requires local authentication. Host credentials remain on the computer, so there is no additional Nimote relay or public API port to manage. You choose where it runs and can review or modify the code that handles access.

Commands run with the Host OS account's authority. Use an appropriately scoped account, review Agent and plugin permissions, and keep dependencies current. Agent prompts and project context may be sent to the model provider configured in that Agent. Open source makes independent review possible; it is not a guarantee of zero vulnerabilities or a claim of a completed independent audit. See the [security policy and private reporting process](https://github.com/mobiledevloperlab/nimotehost/blob/master/SECURITY.md).

## Download and installation {#host-install}

[Download and installation](/docs/host/getting-started#host-install)

### Install from source {#host-source}

[Download and installation](/docs/host/getting-started#host-source)
