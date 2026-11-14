---
title: Android Local Linux — Ubuntu without root | NimoteCode
description: Run an Ubuntu development environment on Android without root. Check device support, use Bash and Git, and choose between Local Linux and SSH.
---

# Android Local Linux

Local Linux brings an Ubuntu development environment to your Android device. Use Bash, Git and SSH alongside the NimoteCode editor, with no Android root required.

[Install and run your first command](/docs/local-linux/getting-started)

## What you can do

- Run Shell scripts and lightweight project tasks on your device.
- Edit files and review Git changes in the same workspace.
- Add the language tools your project needs, or choose an optional [Linux Preset](/docs/local-linux/presets).

For existing server environments, Docker workloads or long builds, use an [SSH workspace](/docs/ssh). See [compatibility and workload limits](/docs/local-linux/compatibility) before choosing local tools.

<div id="local-linux-requirements"></div>

## Requirements

- **Device**: Android 8+ with a 64-bit ARM64 or x86_64 app; iPhone, iPad and 32-bit ARM are not supported.
- **Access**: Early Access Pro; check availability for your account in the [app](/docs/account-subscription).
- **Tools**: Ubuntu, Bash, Git and SSH are included. Language toolchains, language servers, debuggers and external Agent CLIs need separate setup.

PRoot shares the Android kernel; it does not provide a virtual machine or Android root. Background execution is subject to Android's process management.

## Next steps

- **[Troubleshooting](/docs/local-linux/troubleshooting):** resolve installation, package and background-process problems.
- **[Architecture](/docs/local-linux/architecture)** · **[Security and integrity](/docs/local-linux/security-integrity)** · **[Source and licences](/docs/local-linux-source)**
