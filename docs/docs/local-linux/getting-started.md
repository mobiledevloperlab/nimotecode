---
title: Install Android Local Linux and run your first command | NimoteCode
description: "Install Ubuntu on supported Android devices, open a workspace, and run your first shell command."
---

# Install Android Local Linux

Follow these steps to open a Linux terminal on your device. Check the [device and account requirements](/docs/local-linux#local-linux-requirements) first and leave space for the environment and your project tools. AI setup is not required.

## Install and open a workspace

1. Select **Local Linux** on the welcome screen or in Explorer.
2. Select **Install** and wait for installation to finish.
3. Select **Start**, then open `/workspace`.

The initial installation uses the bundled image and stores environment files in app-private storage. Downloading additional packages requires a network connection.

<DocScreenshot file="local-linux-deploy.jpg" caption="Select Install in the Local Linux setup dialog." />

## Run your first command

Open [Terminal](/docs/terminal) in that workspace and run:

```sh
pwd
printf 'Hello from Local Linux\n'
```

The terminal should print `/workspace` if you opened that directory, followed by `Hello from Local Linux`.

<DocScreenshot file="local-linux-terminal-uname-a.jpg" caption="The Local Linux terminal runs commands directly on the device." />

## Add your project tools

Open or create project files in `/workspace`, then use the editor and [Source Control](/docs/source-control). Install only the tools the project needs through Ubuntu's package manager; optional [Linux Presets](/docs/local-linux/presets) have their own compatibility and setup requirements.

For package errors or tools that behave differently under PRoot, use [troubleshooting](/docs/local-linux/troubleshooting).

## Stop, reset or delete

Stopping interrupts active work but keeps the environment. Resetting, deleting the environment or clearing app data removes its files; back up your project first.

If Android stops the app in the background, return and restart Local Linux.
