# Android Local Linux Workflow

NimoteCode Local Linux is for supported Android 8+ ARM64 and x86_64 devices. It provides a bundled Ubuntu environment through PRoot; it is not Android root and is unavailable on iOS.

## Goal

Prepare and verify a compact Linux-based workflow on a supported Android device.

## Requirements

- Supported Android 8+ ARM64 or x86_64 device.
- Network access when installing packages.
- A task compatible with a PRoot userspace rather than a VM or rooted Android environment.

## Run the workflow

Follow [Android Linux without root](../../resources/android-linux-development.md) to install and open the environment, inspect Ubuntu and the device architecture, then create and run a Bash exercise in a fresh directory.

## Verify before adding a toolchain

- `bash hello.sh` in the exercise directory prints `Hello from Android Linux`.
- Edit the message in Explorer and rerun the script to confirm the editor and Terminal use the same directory.
- Check `df -h /workspace` before installing packages; package installation may need network access.
- Run the project's smallest check in the Android PRoot runtime. A container-only test is not proof of Android compatibility.
- Back up project files before reset or delete; stop the environment when finished.

## Troubleshooting

If a tool depends on privileged networking, ptrace, unusual mounts, or exact `/proc` behavior, move the work to an SSH host or test it in the target PRoot runtime first.

## Related docs

For reproducible optional toolsets, review the separate [Linux Presets repository](https://github.com/mobiledevloperlab/nimote-linux-presets). Its installers and verifiers are checksum-declared and currently experimental; follow the manifest and validation documentation rather than copying scripts from an unverified source.

Read [Android Local Linux](https://nimotecode.com/docs/local-linux) and [Android Linux development](../../resources/android-linux-development.md) before choosing local rather than remote work.
