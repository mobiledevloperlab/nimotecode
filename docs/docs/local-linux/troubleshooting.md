---
title: Android Local Linux Troubleshooting | NimoteCode
description: Diagnose common NimoteCode Local Linux installation, package, architecture, and lifecycle issues on Android.
---

# Android Local Linux Troubleshooting

## Local Linux does not appear or will not install

Confirm that the device runs Android 8+ and has a 64-bit ARM64 or x86_64 app environment. Check available storage and network access, then retry from the Local Linux chooser. Local Linux is not available on iOS or 32-bit ARM devices.

## Packages fail to install

Read the full APT error first. Common causes are unavailable storage, unavailable package indexes, network/DNS failure, or a concurrent package transaction. Do not delete lock files or run arbitrary recovery commands; wait for the active transaction to finish and use the package manager's reported state.

## A tool works in a container but not on Android

PRoot is not a VM. Re-check the architecture, package availability, and assumptions around ptrace, `/proc`, process creation, symlinks, and executable bits. Prefer the Presets repository's [runtime compatibility and test records](https://github.com/mobiledevloperlab/nimote-linux-presets/tree/main/docs) when a toolset is supplied as a preset.

## The environment stopped after the app was backgrounded

Android may pause or stop background processes. Return to the Local Linux page, start the environment again, and reconnect to its workspace. Use a remote SSH host for work that requires longer-lived services or desktop-class resources.

For source/licence concerns, see [Local Linux Source and Licences](/docs/local-linux-source). For security and verification, see [Security and Integrity](/docs/local-linux/security-integrity).
