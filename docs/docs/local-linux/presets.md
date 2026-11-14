---
title: "Linux Presets for Python, Node.js and C++ | NimoteCode"
description: "Explore optional Ubuntu development toolsets for Android Local Linux. Check experimental status, supported architectures and SHA-256 before installation."
---

# NimoteCode Linux Presets

Optional development toolsets for Local Linux are maintained in the [Linux Presets repository](https://github.com/mobiledevloperlab/nimote-linux-presets). Choose a toolset for your project, then check the declared compatibility before installation.

## Toolsets

| Toolset | Purpose |
| --- | --- |
| `minimal` | Essential command-line tools |
| `python` | Python 3, pip and virtual environments |
| `web` | Node.js and npm from Ubuntu packages |
| `cpp` | GCC, CMake, GDB and native build tools |

The declared environment is Ubuntu 24.04 on ARM64 or AMD64. These presets are marked **experimental**; use the selected release manifest for exact status, dependencies and runtime requirements.

## Before installation

1. Choose a release or revision matching your environment.
2. Review its manifest and verify `checksums.sha256` and the selected script hashes before running the documented installer.
3. Check the Android PRoot test records. Passing Ubuntu container tests alone does not establish compatibility on your device.

For setup, see [getting started](/docs/local-linux/getting-started). For runtime limits, see [compatibility](/docs/local-linux/compatibility); for verification, see [security and integrity](/docs/local-linux/security-integrity).
