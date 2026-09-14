# Android Local Linux Workflow

NimoteCode Local Linux is for supported Android 8+ ARM64 and x86_64 devices. It provides a bundled Ubuntu environment through PRoot; it is not Android root and is unavailable on iOS.

## Goal

Prepare and verify a compact Linux-based workflow on a supported Android device.

## Requirements

- Supported Android 8+ ARM64 or x86_64 device.
- Network access when installing packages.
- A task compatible with a PRoot userspace rather than a VM or rooted Android environment.

## Setup

In NimoteCode, choose **Local Linux**, install the bundled environment, then start and open it.

## Workflow

1. In NimoteCode, choose **Local Linux**, install the bundled environment, then start and open it.
2. Work in the default workspace and use Terminal to inspect the environment before adding packages.
3. Install only the project tools needed for the current task; package installation may require network access and changes the environment.
4. Use Explorer, Editor, Terminal, and Source Control around the same workspace.
5. Stop the environment when finished; use reset or delete only after reading the destructive-action confirmation.

## Verify

Inspect the environment and run the project's smallest relevant command before adding more packages or assuming a toolchain is compatible.

## Troubleshooting

If a tool depends on privileged networking, ptrace, unusual mounts, or exact `/proc` behavior, move the work to an SSH host or test it in the target PRoot runtime first.

## Related docs

For reproducible optional toolsets, review the separate [Linux Presets repository](https://github.com/mobiledevloperlab/nimote-linux-presets). Its installers and verifiers are checksum-declared and currently experimental; follow the manifest and validation documentation rather than copying scripts from an unverified source.

Read [Android Local Linux](https://nimotecode.com/docs/local-linux) and [Android Linux development](../../resources/android-linux-development.md) before choosing local rather than remote work.
