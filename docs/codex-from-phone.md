---
title: "Use Codex From Your Phone over SSH | NimoteCode"
description: "Run Codex on your development host and access it from Android or iPhone with NimoteCode. Follow setup, session recovery, Git review and troubleshooting steps."
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# Use Codex From Your Phone over SSH

Want to continue a Codex task from your phone while the repository stays on your development machine? This guide uses an SSH terminal to reach the CLI on a Linux or macOS host. NimoteCode supplies file navigation, editing, terminal access, and Git review around that session.

SSH is one approach, not the only mobile interface. Check the agent vendor’s current web, mobile, and remote-access options if you only need to follow an agent task. NimoteCode is useful when you also want direct access to the host’s files and project commands.

## 1. Prepare the host and account

Use an awake host with an SSH server, a repository you can access, and the project dependencies installed. Install and authenticate the agent on that host using its official instructions before relying on a phone connection. The agent’s account, usage limits, permissions, and credentials remain separate from NimoteCode.

For Codex, use the official installation method for your host. Example:

```sh
npm install -g @openai/codex
codex --version
```

[Codex CLI](https://learn.chatgpt.com/docs/codex/cli) · [CLI reference](https://learn.chatgpt.com/docs/developer-commands?surface=cli)

For a host without a browser, `codex login --device-auth` is an official device-code option where enabled. Finish authentication using the vendor’s guidance; a phone browser’s localhost is not the remote host.

## 2. Open the repository from your phone

Create an [SSH workspace](/docs/ssh), verify the host-key fingerprint, and select the repository root. In Terminal, change to that same path and inspect existing work. The path below is an example, not a directory created by NimoteCode.

The shell examples below target a Linux or macOS SSH host. Replace the project path. Windows hosts need commands appropriate to PowerShell; see [Windows SSH and SFTP](/docs/windows-ssh-sftp).

```sh
cd /path/to/project
pwd
git status --short --branch
```

<figure class="seo-phone-capture">
  <a href="/images/ios/iphone-terminal.webp" target="_blank" rel="noopener">
    <img src="/images/ios/iphone-terminal.webp" width="660" height="1433" alt="NimoteCode iPhone SSH terminal showing shell commands. This screenshot illustrates the terminal, not a recorded Codex run." loading="lazy" decoding="async">
  </a>
  <figcaption>NimoteCode iPhone SSH terminal showing shell commands. This screenshot illustrates the terminal, not a recorded Codex run. Source: NimoteCode App Store listing. Promotional screenshot, not a continuous recording.</figcaption>
</figure>

## 3. Start a task in a host-side session

If tmux is installed on the Linux or macOS host, it can keep a terminal session on that host when the phone disconnects. Start or attach to a named session, then start the agent inside it. If an agent is already running after reattachment, continue there instead of launching a second instance.

```sh
tmux new-session -A -s mobile-codex
codex
```

Start with a narrow request:

> Find where this configuration value is read. Explain the relevant files and suggest one check. Do not modify files yet.

## 4. Reconnect or resume deliberately

To detach from tmux, press Ctrl+B, then D. After reconnecting by SSH, attach to the named session. If the agent has exited but saved a conversation, use its resume command from the same repository instead. A saved conversation and a still-running process are different things.

```sh
tmux attach-session -t mobile-codex
```

```sh
codex resume
```

[tmux](https://github.com/tmux/tmux/wiki/Getting-Started)

## 5. Verify outside the agent conversation

Open the changed files in NimoteCode, save any editor changes, run the repository’s documented test or build, and read the Git diff. These commands help inspect a patch; they are not a substitute for the project’s checks.

```sh
git diff --check
git diff --stat
git diff
```

Nimote Agent Confirm mode controls the built-in Agent workflow. It does not govern commands executed manually in SSH or replace an external CLI’s permission settings. Configure the CLI’s own permissions; do not disable its prompts merely to make mobile input easier.

## Troubleshooting the failing layer

| Symptom | First check |
| --- | --- |
| SSH times out | Host sleep, address, VPN, firewall, or network path |
| Agent command not found | Install location and PATH in this SSH shell |
| Login fails | Agent account and the vendor’s headless authentication guidance |
| Session vanished | tmux session, host reboot, process exit; then conversation resume |
| Agent cannot run a check | Repository path, host dependencies, and execution permissions |

## Official setup and related guides

[Codex CLI](https://learn.chatgpt.com/docs/codex/cli) · [CLI reference](https://learn.chatgpt.com/docs/developer-commands?surface=cli)

[SSH](/docs/ssh) · [Git](/docs/source-control) · [AI / ACP](/docs/ai)

## Frequently asked questions

<!-- faq:start -->

### Does NimoteCode include a Codex subscription?

No. Install and authenticate Codex separately. NimoteCode is the mobile workspace around the host session and does not include that agent’s account or usage.

### Does closing the app keep the agent running?

Not by itself. A host-side session tool can help with SSH disconnections, but the host and process must remain running. Check their state when you reconnect.

### Is this an official Codex mobile client?

No. This is an independent guide to an SSH workflow using NimoteCode. Vendor-supported mobile or remote interfaces are separate options.

<!-- faq:end -->

Start with local or SSH editing and the basic terminal. Some capabilities require Pro access; check [Free and Pro](/pro) and the access shown in the app. AI requires your own model provider, whose usage is billed separately.

<div class="seo-cta">
  <p><strong>Download NimoteCode</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="/docs/quick-start" class="home-page-btn secondary">Quick start</a>
  </p>
</div>
