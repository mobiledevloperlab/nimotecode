---
title: Android Local Linux — Ubuntu without root | NimoteCode
description: Run an Ubuntu development environment on Android without root. Check device support, use Bash and Git, and choose between Local Linux and SSH.
---

# Android Local Linux

Run small scripts, work with Git, and use lightweight development tools in Ubuntu on your Android device. Android root is unnecessary.

[Install and run your first command](/docs/local-linux/getting-started)

If you need Docker, a long-running service, or an existing desktop toolchain, use an [SSH workspace](/docs/ssh). [Local Linux limits](/docs/local-linux/compatibility)

<div id="local-linux-requirements"></div>

## Requirements

- **Device**: Android 8+ with a 64-bit ARM64 or x86_64 app; iPhone, iPad and 32-bit ARM are not supported.
- Basic Local Linux runs on supported Android devices. Development tool management and shared-folder imports require Pro.
- **Tools**: Ubuntu, Bash, Git and SSH are included. Language toolchains, language servers, debuggers and external Agent CLIs need separate setup.

PRoot shares the Android kernel; it does not provide a virtual machine or Android root. Background execution is subject to Android's process management.

## Next steps

- **[Troubleshooting](/docs/local-linux/troubleshooting):** resolve installation, package and background-process problems.
- **[Architecture](/docs/local-linux/architecture)** · **[Security and integrity](/docs/local-linux/security-integrity)** · **[Source and licences](/docs/local-linux-source)**
