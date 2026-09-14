---
title: Android Local Linux Architecture | NimoteCode
description: Learn how Android, PRoot, Ubuntu, and a loopback SSH service form the NimoteCode Local Linux workspace architecture.
---

# Android Local Linux Architecture

Local Linux has four boundaries: Android owns application storage and lifecycle; PRoot presents the Linux userspace; Ubuntu supplies the root filesystem and APT packages; and NimoteCode opens the workspace through its local SSH connection.

## What PRoot does—and does not do

PRoot gives a process an alternate root directory and can map selected filesystem expectations without granting Android root. It is not a virtual machine and does not make all kernel-level behaviour identical to desktop Linux. Tools that rely on ptrace, special mounts, privileged networking, or exact `/proc` semantics need target-runtime testing.

## Local SSH boundary

The built-in SSH service listens only on the device loopback interface. It is used by NimoteCode to unify local Linux with its Explorer, Editor, Terminal, Git, AI, Tasks, LSP, and Debug workflows; it is not an externally exposed SSH server.

## Why this matters

The architecture is portable and needs no Android root, but Android can pause or stop background work. Reopen or restart Local Linux after returning to the app, and run lengthy or production-like tasks on a remote host when persistence and capacity matter more. See [Compatibility](/docs/local-linux/compatibility) and [Troubleshooting](/docs/local-linux/troubleshooting).
