---
title: NimoteCode Linux Presets | Android Local Linux
description: Learn how NimoteCode Linux Presets declares optional Ubuntu development environments for Android Local Linux with manifests and SHA-256 verification.
---

# NimoteCode Linux Presets

[NimoteCode Linux Presets](https://github.com/mobiledevloperlab/nimote-linux-presets) is an independent technical repository for optional Local Linux development environments. It owns the actual manifests, installers, verifiers, schemas, test harnesses, and release assets; this website does not copy those files or a rootfs.

## Current scope

The repository declares `minimal`, `python`, `web`, and `cpp` presets for Ubuntu 24.04 on ARM64 and AMD64. Their manifests currently mark them `experimental`. The root manifest also records the PRoot runtime version, source URL, SHA-256, rootfs input metadata, and per-preset hashes.

## Verification path

1. Choose a declared release or revision in the Presets repository.
2. Read the root and preset manifests for status, architecture, Ubuntu version, dependencies, and network requirements.
3. Verify `checksums.sha256` plus the SHA-256 values declared for the selected scripts.
4. Follow the repository's validation and testing instructions before using a preset for important work.

This does not claim every tool behaves the same under PRoot. The repository's container checks validate ordinary Ubuntu behaviour, while its Android PRoot reports are the runtime evidence. See [Architecture](/docs/local-linux/architecture), [Compatibility](/docs/local-linux/compatibility), and the [Presets gateway in the main repository](https://github.com/mobiledevloperlab/nimotecode/tree/main/presets).
