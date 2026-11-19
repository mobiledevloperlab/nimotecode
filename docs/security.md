---
title: "Security & compatibility | NimoteCode"
description: "Where credentials are stored, when AI receives code, Sync and Cache boundaries, Host requirements, and documented platform and Agent verification."
pageClass: trust-page compatibility-page
---

<TrustNav />

# Security & compatibility

A short reference before connecting a project. Follow each source for setup, controls, and limitations.

<p class="compatibility-scroll-hint">On small screens, scroll tables horizontally to read all columns.</p>

## Data and execution boundaries {#boundaries}

<div class="compatibility-table" role="region" aria-label="Data and execution boundaries" tabindex="0">

| Question | Answer | Details |
| --- | --- | --- |
| Where are SSH credentials stored? | Connection metadata stays on-device. App-managed passwords, private keys, and passphrases use platform secure storage: iOS Keychain or Android Keystore-backed encrypted storage. Deleting a saved SSH profile removes its associated secure credentials. | [Credential storage](/privacy#storage) |
| When is code sent to a model? | AI requests can include your prompt, selected content, relevant files, paths, and tool output. Direct requests go to your chosen provider; Agent tasks may read files for context. External Agents and MCP tools have their own recipients and policies. BYOK does not mean zero retention. | [AI connections](/privacy#integrations) · [Agent controls](/docs/ai) |
| What does Sync / Cache write? | **Sync: local → remote. Cache: remote → local.** Confirm the project and destination paths. The current guide does not specify same-name overwrite, deletion propagation, or conflict-resolution rules. Choose the authoritative copy and back up before transferring; history is not a backup. | [Sync and Cache](/docs/sync-cache) |
| What does Host require? | NimoteCode **2.4.1+** with Host access, a compatible NimoteHost installed on a Linux, macOS, or Windows computer, SSH connectivity, and an accessible project. The computer must stay awake. Agents need separate installation and sign-in. | [Install Host](/docs/host/getting-started) · [Pro access](/pro) |
| Where does Host run work? | On your computer, under the Host OS account. Its authenticated API listens on loopback and is reached through SSH; Host credentials remain on the computer. Disconnection can leave managed work running; Host or OS restart interrupts processes. | [Host access](/docs/host#transparent-implementation-and-controlled-access) · [Session limits](/docs/host/sessions) |

</div>

## Compatibility and verification {#compatibility}

**Build targets, interface captures, and completed acceptance tests are different evidence.** The records below describe their scope, not a guarantee for every combination.

<div class="compatibility-table" role="region" aria-label="Compatibility and verification" tabindex="0">

| System or Agent | Documented scope | Evidence and limits |
| --- | --- | --- |
| Android app | **2.4.1 / build 66:** reviewed ADB interface captures. This is not a published device-by-device acceptance matrix. | [Capture inventory](/images/placeholders/sources.json) · [Interface reference](/docs/screenshot-guide) |
| iPhone / iPad | **2.4.1+66, iOS 26.0 simulators:** iPhone 17 Pro and iPad Pro 11-inch (M5). SSH, terminal tests, and Git use a temporary Mac project; the AI capture is before provider setup. These are simulator records, not physical-device or model-task acceptance. | [Capture provenance](/images/ios/sources.json) |
| Linux / macOS / Windows Host | **2.4.0 distribution targets:** x64 and ARM64 CLI/desktop; Linux and Windows also have x86 CLI. Complete native-platform and mobile/Agent acceptance remains pending. Linux desktop needs glibc 2.35+; macOS packages are unsigned and not notarized. | [Host compatibility](/docs/host/compatibility) |
| Codex / Claude Code / OpenCode | Host documents discovery of compatible installations. Structured Claude conversations also require a compatible `claude-agent-acp` adapter. No per-version, per-OS completed acceptance matrix is published in the linked guides. | [Host Agents](/docs/host/agents) · [Validation scope](/docs/host/compatibility) |
| Terminal AI tools | The workflow page includes a terminal recording. Running a CLI in Terminal does not establish structured Host/ACP compatibility. | [Terminal workflow](/use-cases/terminal-ai-tools) |
| Android Local Linux | Documented support: Android 8+, 64-bit ARM64 / x86_64. Not available on iOS or 32-bit ARM. Compatibility depends on the workload; container tests alone do not verify Android PRoot behavior. | [Compatibility and limits](/docs/local-linux/compatibility) |

</div>

Account and platform determine feature access; AI provider charges are separate. See [Pro](/pro), the [privacy policy](/privacy), or [support](/support) for your specific setup.
