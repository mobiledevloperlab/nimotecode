---
title: Android Local Linux | NimoteCode
description: "Configuration, procedures, and interface reference for android local linux."
---

# Android Local Linux

## Requirements

Local Linux provides Ubuntu, Bash, Git, and SSH on Android 8+ with a 64-bit ARM64 or x86_64 app. It uses PRoot and requires no Android root access. It is unavailable on iOS and 32-bit ARM devices. Language toolchains, language servers, debug adapters, and external Agent CLIs must be installed separately.

<div class="doc-section">
<div class="doc-section__copy">

## Install and open

1. Select **Local Linux** from the welcome screen or Explorer.
2. Select **Install** and wait for installation to finish.
3. Start the environment and open its workspace.

The initial installation uses a bundled image. Additional packages may require an internet connection. Environment files are stored in app-private storage.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="local-linux-deploy.jpg" caption="Local Linux installation dialog showing Not installed and the Install action." />
</div>

</div>

## Verify the environment

Open Terminal and run `uname -a` to inspect the kernel and architecture. Use `cat /etc/os-release` to identify the Linux distribution. Local Linux shares the Android host kernel; the kernel name alone does not identify the Ubuntu userspace version.

<div class="doc-screenshots">
  <DocScreenshot file="local-linux-terminal-uname-a.jpg" caption="uname -a output in the Local Linux terminal." />
  <DocScreenshot file="local-linux-ai-print-os-info.jpg" caption="AI response summarizing uname and /etc/os-release output." />
</div>

## Stop, reset, or delete

Use the Local Linux controls to manage the environment. Stopping it ends active work; starting it again uses the existing environment. Resetting, deleting, or clearing app data removes environment files. The built-in SSH service listens on loopback for the app’s connection. Android may stop background processes, so check the environment after returning to the app.

## Reference

[Setup](/docs/local-linux/getting-started) · [Architecture](/docs/local-linux/architecture) · [Compatibility](/docs/local-linux/compatibility) · [Security and integrity](/docs/local-linux/security-integrity) · [Presets](/docs/local-linux/presets) · [Troubleshooting](/docs/local-linux/troubleshooting) · [Source and licenses](/docs/local-linux-source)
