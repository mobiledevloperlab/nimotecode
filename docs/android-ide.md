---
title: "Android IDE with Local Linux, SSH, Git & AI | NimoteCode"
description: "Code on Android with NimoteCode: edit projects, run a rootless Linux terminal, connect to Windows, Mac or Linux over SSH, and review Git changes with AI help."
pageClass: android-ide-page
---

# Android IDE for local Linux and remote development

Need to edit a Python script on your tablet, run a command on your development PC, or review a repository from your phone? Start with where the project and its tools will run. NimoteCode lets you work with local files, an on-device Linux environment, or a remote SSH host from one Android app.

**NimoteCode is a mobile IDE with a code editor, project explorer, terminal, Git, and configurable AI assistance.** Open a project, find the file, make a change, then use the appropriate runtime to check it. Phone and tablet layouts support different amounts of screen space; split editor panes are available when you need to compare files.

<div class="seo-cta">
  <p><strong>Open a project on Android and choose the environment that fits your work.</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode&amp;utm_source=nimotecode&amp;utm_medium=organic&amp;utm_campaign=android_ide" class="home-page-btn primary" target="_blank" rel="noreferrer">Get NimoteCode on Google Play</a>
    <a href="/docs/quick-start" class="home-page-btn secondary">Read the quick start</a>
  </p>
</div>

<div class="android-ide-media">
  <DocScreenshot file="editor-code-selection.png" caption="Android code editor displaying benchmark.py with Python syntax highlighting, line numbers, and a modified-file indicator." />
</div>

## Choose where your code and commands run

A local file editor and a Linux runtime serve different needs. Opening a folder on Android does not install its language tools. Choose a workspace before setting up dependencies.

| Workspace | Where files and tools live | A good starting point for |
| --- | --- | --- |
| Local folder | Files in a device folder you authorize; execution needs a configured runtime | Editing source, documentation, or configuration files |
| Local Linux | Ubuntu userspace on the Android device, using PRoot without root | Shell scripts, Git, and compatible command-line projects |
| Remote SSH | Files and commands on your Windows, Mac, or Linux host | Existing projects, host toolchains, and larger builds |

## Run a Linux terminal on Android without root

[Local Linux](/docs/local-linux) provides Ubuntu userspace with Bash, Git, and SSH on supported **Android 8+ devices with a 64-bit ARM64 or x86_64 app**. Install the bundled environment from the Local Linux entry, start it, and open its workspace. It does not require a separate development computer.

Use it for shell scripts, lightweight utilities, and compatible language projects. Install the language toolchains, language servers, and debug adapters your project needs. Packages downloaded later may need internet access; compatibility and performance depend on the tools and device.

To identify the environment, run `cat /etc/os-release`; `uname -a` reports the shared Android kernel. Local Linux uses PRoot rather than a virtual machine and is unavailable on iOS and 32-bit ARM devices. See the [compatibility guide](/docs/local-linux/compatibility) before choosing a workload.

<div class="android-ide-media">
  <DocScreenshot file="local-linux-terminal-uname-a.jpg" caption="Bash in Local Linux running uname -a. The output identifies the shared Android kernel and aarch64 architecture." />
</div>

## Connect to Windows, Mac, or Linux over SSH

Keep an existing project on its development machine and use Android to browse files, edit code, and run host commands. An [SSH workspace](/docs/ssh) uses the host’s installed tools and permissions, so a project that needs more CPU, memory, or services can stay on that machine.

Create a connection with the host, port, username, and a supported authentication method, then select the repository root. Verify the host-key fingerprint on first connection. Windows workspaces use PowerShell and SFTP; Mac and Linux hosts use their configured shell. Confirm the active directory and branch before editing, and save before running checks.

The host must be awake and reachable. For access outside your LAN, configure a secure network path such as a VPN. SSH alone does not keep a process running through a disconnection. Follow the [Windows 11 setup tutorial](/docs/windows-ssh-sftp) if you are starting with a Windows PC.

<div class="android-ide-media">
  <DocScreenshot file="remote-workspace-connected.jpg" caption="Remote Explorer showing an active SSH connection, server address, account, port, and the sorting-demo project root." />
</div>

## Review Git changes and work with GitHub

Use [Source Control](/docs/source-control) to inspect modified and untracked files, staged changes, diffs, and commit history. Check the current branch and read the patch before committing. Git actions use the active workspace’s repository and credentials.

The GitHub page lets you browse repositories, issues, pull requests, checks, and workflow runs, then clone to the device, Local Linux, or an SSH host. Operations depend on your account access and repository permissions. A clone does not install the project’s dependencies; run its documented checks in the selected environment.

<div class="android-ide-media">
  <DocScreenshot file="source-control-changes.png" caption="Source Control separating changed files from staged changes, with branch selection and commit history in the same view." />
</div>

## Use AI Chat and Agent with your project

Ask Chat to explain selected code or help interpret an error. Choose Nimote Agent for tasks that need workspace tools. In **Confirm** mode, review the proposed plan and approve the run before tools execute; afterwards, inspect the saved files, review the diff, and run the project’s checks.

Configure your own model provider before using AI. Model usage is billed separately by that provider. Compatible external ACP agents require their own runtime and credentials in the chosen execution environment. The [AI guide](/docs/ai) explains Chat, Agent, external agents, and MCP configuration.

<div class="android-ide-media">
  <DocScreenshot file="ai-plan-approval.jpg" caption="Nimote Agent in Confirm mode showing a project-inspection plan and the Approve this run action before tools start." />
</div>

## Get from installation to your first checked change

1. Install NimoteCode from Google Play and open a local folder, install Local Linux, or connect an SSH host.
2. Confirm the project root and current branch. For Local Linux or SSH, check that the project’s required commands are installed.
3. Open a file in the editor, make a focused change, and save. Run the project’s test, lint, or build command in its execution environment.
4. Review the changed files in Source Control. Commit or share the result when the checks and repository permissions allow it.

For one command, a simple SSH client may be enough; for a text-only edit, a basic editor may suffice. NimoteCode is useful when you want the project tree, editing, terminal, Git review, and AI tools together. Large builds and tools incompatible with PRoot are better placed on a suitable remote host. Some capabilities require Pro; check [Free and Pro](/pro) and the access state shown in the app.

## Android IDE questions

### Do I need root to run Linux in NimoteCode?

No. Local Linux uses PRoot on supported Android 8+ devices with a 64-bit ARM64 or x86_64 app. Toolchains are installed separately, and not every Linux workload is compatible.

### Can I code without a remote computer?

Yes. You can edit local files and run compatible tools in Local Linux on supported Android devices. Initial setup and package downloads may require internet access; cloud AI and GitHub require their services.

### Is NimoteCode the same as Android Studio?

No. NimoteCode is a mobile IDE for editing, terminal work, Git, AI, and local Linux or SSH projects. It does not provide the complete Android Studio toolchain or an Android emulator. Use a suitably configured host for builds that need those tools.

### Is NimoteCode free to download?

NimoteCode is available on Google Play, with some capabilities requiring Pro access. Availability depends on the account, app version, and store region. Model-provider usage is billed separately.

<div class="seo-cta">
  <p><strong>Open a project on Android and choose the environment that fits your work.</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode&amp;utm_source=nimotecode&amp;utm_medium=organic&amp;utm_campaign=android_ide" class="home-page-btn primary" target="_blank" rel="noreferrer">Get NimoteCode on Google Play</a>
    <a href="/docs/quick-start" class="home-page-btn secondary">Read the quick start</a>
  </p>
</div>

## Explore the workflow

- [Editor and split panes](/docs/editor)
- [Android Local Linux setup](/docs/local-linux)
- [SSH workspace configuration](/docs/ssh)
- [Git and GitHub](/docs/source-control)
- [Free and Pro features](/pro)

- [Windows 11 setup and troubleshooting](/docs/windows-ssh-sftp)
