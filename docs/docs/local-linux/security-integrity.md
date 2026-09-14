---
title: Android Local Linux Security and Integrity | NimoteCode
description: Verify Local Linux artifacts and use safe package, SSH, credential, and PRoot practices on Android.
---

# Android Local Linux Security and Integrity

Local Linux is a development environment, not an Android-root mechanism. Treat it as a distinct userspace with its own packages and files while keeping Android, SSH, and provider credentials protected.

## Verify what you install

- Read the release manifest before using a preset or runtime bundle.
- Verify the published SHA-256 value for downloaded artifacts and scripts.
- Use documented APT sources; package installation changes the environment and may require network access.
- Do not copy rootfs archives, `.zst` assets, or release bundles into the website repository.

## Protect access

- Keep provider credentials in protected storage and avoid pasting secrets into logs or AI prompts.
- Use least-privilege SSH accounts for remote hosts; Local Linux's SSH service is loopback-only.
- Review agent-proposed commands and Git diffs before accepting a change.

For preset-specific manifests, script hashes, and validation, read [Linux Presets](/docs/local-linux/presets). For the legally required corresponding source and licence notices for the bundled environment, read [Local Linux Source and Licences](/docs/local-linux-source).
