---
title: "Local Linux security: packages, checksums and credentials | NimoteCode"
description: "Verify Local Linux downloads and preset checksums, use trusted package sources, and protect SSH and AI provider credentials."
---

# Android Local Linux Security and Integrity

Use trusted packages and protect the credentials you use inside Local Linux.

## Verify what you install

- Read the release manifest before using a preset or runtime bundle.
- Verify the published SHA-256 value for downloaded artifacts and scripts.
- Use documented APT sources; package installation changes the environment and may require network access.

## Protect access

- Keep provider credentials in protected storage and avoid pasting secrets into logs or AI prompts.
- Use least-privilege SSH accounts for remote hosts; Local Linux's SSH service is loopback-only.
- Review agent-proposed commands and Git diffs before accepting a change.

For preset-specific manifests, script hashes, and validation, read [Linux Presets](/docs/local-linux/presets). For the legally required corresponding source and licence notices for the bundled environment, read [Local Linux Source and Licences](/docs/local-linux-source).
