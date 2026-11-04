---
title: Curated tutorials and developer resources | NimoteCode
description: "Start with a real task: connect to your development host, work with GitHub from your phone, evaluate Android Linux, or complete a reviewable AI coding task. Explore selected blog posts and official external references."
---

# Curated tutorials and developer resources

Start with a real task: connect to your development host, work with GitHub from your phone, evaluate Android Linux, or complete a reviewable AI coding task. Explore selected blog posts and official external references.

[Browse all blog posts](/blog/) · [Open the app documentation](/docs)

## From our blog: solve a practical problem

Selected NimoteCode posts with procedures, demonstrations or benchmark records.

<div class="guide-card-grid">
<a class="guide-card" href="/blog/github-from-android-iphone"><strong>From a mobile repository to a pull request</strong><span>For GitHub users: connect sign-in, cloning, editing, checks and review.</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
<a class="guide-card" href="/blog/tailscale-ssh-android-mac-linux"><strong>Connect to your host with Tailscale and SSH</strong><span>For Mac or Linux access: configure networking, connect and verify reconnection.</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
<a class="guide-card" href="/blog/android-linux-performance-benchmark"><strong>How much development can Android Linux handle?</strong><span>Use one-device CoreMark, SQLite compilation and parallel-build records to plan tests for your own project.</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
<a class="guide-card" href="/blog/can-an-ai-agent-really-code-from-a-phone"><strong>Follow an AI Agent task from a phone</strong><span>Watch a real demonstration of planning, editing, execution and verification.</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
<a class="guide-card" href="/blog/best-ssh-clients"><strong>Mobile SSH & AI tools: seven options</strong><span>Compare terminal access, host agents and integrated mobile development by task.</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
</div>

## External reading: tools and techniques

Official third-party references in English; Pro Git also offers translations. Links checked: 2026-11-04.

- **[Tailscale · Tailscale SSH](https://tailscale.com/docs/features/tailscale-ssh)** — Understand identity and access controls for its dedicated SSH feature, distinct from ordinary SSH over a Tailscale network.

- **[Git · Pro Git online book](https://git-scm.com/book/en/v2)** — Learn branches, remotes and undo operations to understand diffs and commit history.

- **[GitHub Docs · Review a pull request](https://docs.github.com/en/pull-requests/how-tos/review-pull-requests/reviewing-proposed-changes-in-a-pull-request)** — Learn file-by-file review, comments and review submission for your own or an agent’s changes.

- **[PRoot · How it works and examples](https://proot-me.github.io/)** — Understand user-space filesystem and path mapping behind a Linux environment without root.

## Choose a development environment

| Question | Resource | Continue with |
| --- | --- | --- |
| Should this work be local, remote, or cloud-based? | [Mobile development: choosing a workspace](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/mobile-development.md) | [Examples and workflows](/use-cases/) |
| How do Termux, PRoot, AVF, SSH, and cloud workspaces differ? | [Android Linux development](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/android-linux-development.md) | [Local Linux overview](/docs/local-linux) |
| When should I keep the repository on a remote host? | [Remote development from a phone](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/remote-development-from-phone.md) | [SSH workspaces](/docs/ssh) |

## AI coding and SSH workflows

- [Mobile AI coding](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/mobile-ai-coding.md) explains how to keep agent work inspectable and testable.
- [SSH development tools](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/ssh-development-tools.md) maps a secure connection to editor, terminal, and Git-review capabilities.
- [Claude Code on a phone](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/claude-code-on-phone.md) describes a host-installed agent workflow without implying that NimoteCode installs or proxies it.
- The [Claude Code](/docs/ai) and [Codex](/docs/ai) examples turn those principles into a reviewable SSH loop.

## Android Local Linux and Presets

Android Local Linux uses Ubuntu through PRoot on supported Android devices. Start with [Overview](/docs/local-linux), then read [Architecture](/docs/local-linux/architecture), [Compatibility](/docs/local-linux/compatibility), and [Security and Integrity](/docs/local-linux/security-integrity). Optional development toolsets, manifests, hashes, and test records are owned by the independent [NimoteCode Linux Presets](https://github.com/mobiledevloperlab/nimote-linux-presets) repository.

All resource source files are versioned in the [main repository](https://github.com/mobiledevloperlab/nimotecode/tree/main/resources); report corrections or focused additions through [NimoteCode Issues](https://github.com/mobiledevloperlab/nimote_issues/issues).
