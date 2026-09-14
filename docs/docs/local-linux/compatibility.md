---
title: Android Local Linux Compatibility | NimoteCode
description: Review NimoteCode Local Linux device, architecture, runtime, and workload compatibility expectations before starting development on Android.
---

# Android Local Linux Compatibility

Local Linux supports Android 8 or later on 64-bit ARM64 and x86_64 devices. It is unavailable on iOS and does not support 32-bit ARM devices. The bundled environment targets Ubuntu 24.04 inputs for these architectures; exact runtime and preset declarations belong to their published manifests.

## Good local workloads

- Shell scripts, small utilities, learning, and focused project work.
- Git operations and lightweight language tooling after installation.
- Tasks that benefit from keeping files and commands on the device.

## Prefer remote development when

- A build needs more CPU, memory, storage, or persistent services than a mobile device comfortably provides.
- The project already relies on desktop containers, company networking, hardware, or an existing host toolchain.
- A tool's behaviour under PRoot has not been verified, especially around debugging, ptrace, or process control.

The separate [Linux Presets](/docs/local-linux/presets) project records optional preset architectures, Ubuntu version, and test policy. A successful container test alone is not evidence of Android PRoot compatibility.
