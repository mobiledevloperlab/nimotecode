# NimoteCode Linux Presets

[NimoteCode Linux Presets](https://github.com/mobiledevloperlab/nimote-linux-presets) is a separate technical repository for optional development-environment presets used with NimoteCode Local Linux. It is deliberately separate from this website and documentation repository.

## What it contains

- Root and preset manifests with declared supported architectures and Ubuntu versions
- Versioned install and verification scripts
- SHA-256 declarations and schema validation
- Shell-policy, container, and Android PRoot test infrastructure
- Release packaging guidance and source/licence boundaries

It does **not** contain the NimoteCode app, an Android binary, a PRoot binary, or a rootfs archive. Do not copy rootfs files, `.zst` archives, or generated runtime assets into this repository.

## Current compatibility model

The manifests currently declare Ubuntu 24.04 presets for `arm64` and `amd64`. They use a PRoot-based Android Local Linux runtime and retain `experimental` status until the repository's architecture-specific test and release conditions are met. Treat the manifest, not this overview, as the authoritative compatibility and integrity record.

## How to obtain and verify a preset

1. Open the [Linux Presets repository](https://github.com/mobiledevloperlab/nimote-linux-presets) and choose a declared release or revision.
2. Read its root manifest and the selected preset manifest for architecture, Ubuntu version, dependencies, and status.
3. Verify the published `checksums.sha256` and the script hashes declared by the manifest before running an installer.
4. Use the repository's documented validation and test workflow; do not apply a script to a production-like environment without review.

Continue with [Android Local Linux documentation](https://nimotecode.com/docs/local-linux), [Local Linux architecture](https://nimotecode.com/docs/local-linux/architecture), and [integrity guidance](https://nimotecode.com/docs/local-linux/security-integrity).
