# Android Local Linux Workflow

NimoteCode Local Linux is for supported Android 8+ ARM64 and x86_64 devices. It provides a bundled Ubuntu environment through PRoot; it is not Android root and is unavailable on iOS.

## Workflow

1. In NimoteCode, choose **Local Linux**, install the bundled environment, then start and open it.
2. Work in the default workspace and use Terminal to inspect the environment before adding packages.
3. Install only the project tools needed for the current task; package installation may require network access and changes the environment.
4. Use Explorer, Editor, Terminal, and Source Control around the same workspace.
5. Stop the environment when finished; use reset or delete only after reading the destructive-action confirmation.

For reproducible optional toolsets, review the separate [Linux Presets repository](https://github.com/mobiledevloperlab/nimote-linux-presets). Its installers and verifiers are checksum-declared and currently experimental; follow the manifest and validation documentation rather than copying scripts from an unverified source.

Read [Android Local Linux](https://nimotecode.com/docs/local-linux) and [Android Linux development](../../resources/android-linux-development.md) before choosing local rather than remote work.
