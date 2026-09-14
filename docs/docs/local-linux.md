---
title: Android Local Linux Overview | NimoteCode
description: Understand NimoteCode's bundled Ubuntu development environment on supported Android devices, its PRoot architecture, compatibility, integrity, presets, and troubleshooting resources.
---

# Android Local Linux Overview

Local Linux provides a bundled Ubuntu development environment on supported Android devices. It is a third workspace choice alongside a project stored on the device and a remote SSH host. Once opened, it uses the familiar Explorer, Editor, Terminal, Git, AI, Tasks, LSP, and Debug workflows through its local SSH connection.

## Availability and requirements

Local Linux is available only on Android 8 or later with a 64-bit ARM64 or x86_64 app. It is not available on iPhone or iPad, and 32-bit ARM devices are unsupported. Root access and a separate terminal app are not required.

The bundled environment includes Ubuntu, Bash, Git, and SSH. It does not include language toolchains, language servers, debug adapters, or external Agent CLIs by default; install the tools your project needs after opening the environment. It uses PRoot, which provides a Linux userspace without granting Android root access.

## Install and open the environment

1. From the workspace or Explorer chooser, select **Local Linux**.
2. Select **Install** and wait for the bundled environment to prepare.
3. Select **Start**, then **Open** to work in the default `/workspace` directory.
4. Open files in Explorer, run commands in [Terminal](/docs/terminal), and inspect Git changes in [Source Control](/docs/source-control).

The initial install uses the bundled Ubuntu image. Installing additional packages later may require internet access.

## Manage its lifecycle

The Local Linux page lets you start, stop, reset, or delete the environment. Stopping it closes its active workspace; starting it again reconnects to the same environment. Reset and delete are destructive actions: review the confirmation before using either one. Deleting Local Linux removes its environment data without deleting your other device or SSH workspaces.

## Storage, network, and process behavior

Environment files are kept in NimoteCode's app-private storage. The built-in SSH service listens only on the device's loopback address, so it is used by NimoteCode rather than exposed as a network SSH server. Android can pause or stop background processes; after returning to the app, start Local Linux again if it is stopped.

## Local Linux documentation

- [Getting Started](/docs/local-linux/getting-started) — prepare, install, and choose a workspace.
- [Architecture](/docs/local-linux/architecture) — Android, PRoot, Ubuntu, and local SSH boundaries.
- [Compatibility](/docs/local-linux/compatibility) — device, architecture, and workload expectations.
- [Security and Integrity](/docs/local-linux/security-integrity) — checksum, package, and credential guidance.
- [Linux Presets](/docs/local-linux/presets) — manifests, installer verification, and the separate technical repository.
- [Troubleshooting](/docs/local-linux/troubleshooting) — practical checks for install, package, and lifecycle problems.

## Licences and corresponding source

The bundled environment is Ubuntu, so its GPL and LGPL components require corresponding source to be published with the app. The complete source bundle, its checksum, manifests, provenance and license notices are listed in [Local Linux Source and Licenses](/docs/local-linux-source). The same notices are available inside the app from its license pages.

Next: [Getting Started](/docs/local-linux/getting-started) · [Linux Presets](/docs/local-linux/presets) · [Local and Remote SSH Workspaces](/docs/ssh) · [Local Linux Source and Licences](/docs/local-linux-source)
