---
title: Mobile Development Resources | NimoteCode
description: Practical technical resources on mobile development, Android Linux, PRoot, remote SSH development, mobile AI coding, and coding-agent workflows.
---

# Mobile Development Resources

These are technical starting points for developers evaluating where work should run and how a phone fits a real engineering loop. They explain trade-offs first; NimoteCode is relevant where a mobile editor, SSH terminal, Git review, and Local Linux workspace help put that workflow into practice.

## Choose a development environment

| Question | Resource | Continue with |
| --- | --- | --- |
| Should this work be local, remote, or cloud-based? | [Mobile development: choosing a workspace](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/mobile-development.md) | [Examples and workflows](https://github.com/mobiledevloperlab/nimotecode/tree/main/examples) |
| How do Termux, PRoot, AVF, SSH, and cloud workspaces differ? | [Android Linux development](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/android-linux-development.md) | [Local Linux overview](/docs/local-linux) |
| When should I keep the repository on a remote host? | [Remote development from a phone](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/remote-development-from-phone.md) | [SSH workspaces](/docs/ssh) |

## AI coding and SSH workflows

- [Mobile AI coding](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/mobile-ai-coding.md) explains how to keep agent work inspectable and testable.
- [SSH development tools](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/ssh-development-tools.md) maps a secure connection to editor, terminal, and Git-review capabilities.
- [Claude Code on a phone](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/claude-code-on-phone.md) describes a host-installed agent workflow without implying that NimoteCode installs or proxies it.
- The [Claude Code](https://github.com/mobiledevloperlab/nimotecode/tree/main/examples/claude-code-over-ssh) and [Codex](https://github.com/mobiledevloperlab/nimotecode/tree/main/examples/codex-over-ssh) examples turn those principles into a reviewable SSH loop.

## Android Local Linux and Presets

Android Local Linux uses Ubuntu through PRoot on supported Android devices. Start with [Overview](/docs/local-linux), then read [Architecture](/docs/local-linux/architecture), [Compatibility](/docs/local-linux/compatibility), and [Security and Integrity](/docs/local-linux/security-integrity). Optional development toolsets, manifests, hashes, and test records are owned by the independent [NimoteCode Linux Presets](https://github.com/mobiledevloperlab/nimote-linux-presets) repository.

All resource source files are versioned in the [main repository](https://github.com/mobiledevloperlab/nimotecode/tree/main/resources); corrections and focused additions are welcome through its normal issue process.
