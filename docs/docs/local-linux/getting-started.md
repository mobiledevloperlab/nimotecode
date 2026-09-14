---
title: Android Local Linux Getting Started | NimoteCode
description: Prepare and open NimoteCode Local Linux on a supported Android device, then choose appropriate local or remote development work.
---

# Android Local Linux Getting Started

Use Local Linux for a small Ubuntu-based development environment on Android. It is available on Android 8+ 64-bit ARM64 and x86_64 devices, needs no Android root, and is not available on iPhone or iPad.

## Before installation

- Keep sufficient device storage available for the base environment and the project tools you plan to install.
- Use a network connection for the initial setup and for later APT package installation.
- Choose Local Linux for compact local work; use [SSH](/docs/ssh) when the project depends on an existing workstation, server, container, or long build.

## Open a workspace

1. Select **Local Linux** from the workspace or Explorer chooser.
2. Select **Install**, wait for preparation to complete, then select **Start**.
3. Open the default `/workspace` directory.
4. Inspect the environment in [Terminal](/docs/terminal), then add only the toolchain your project needs.
5. Use Explorer, Editor, and [Source Control](/docs/source-control) in that workspace.

The base environment provides Ubuntu, Bash, Git, and SSH foundations. It is not a promise that every desktop tool or debugger will behave identically under PRoot. Read [Compatibility](/docs/local-linux/compatibility) before selecting a local workload and [Linux Presets](/docs/local-linux/presets) for declared optional toolsets.
