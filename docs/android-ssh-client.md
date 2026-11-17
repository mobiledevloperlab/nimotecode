---
title: "Android SSH Client: Terminal, SFTP & Code Editor | NimoteCode"
description: "Connect to Linux, macOS or Windows from Android with NimoteCode. Run SSH commands, browse and edit files over SFTP, and review Git changes in a remote workspace."
lastUpdated: "2026-11-17"
pageClass: "seo-product-guide"
---

# Android SSH client with a terminal, SFTP and code editor

NimoteCode connects your Android phone or tablet to a remote machine over SSH. Run commands in the terminal, browse project files over SFTP, and edit code in the same app. Your repository, dependencies and build tools stay on the host.

Use it to check a service, update a configuration file or make a code change while away from your computer. For project work, open the repository as a remote workspace so you can navigate files and review changes alongside the terminal.

## Work with commands and project files

| Task | How it works in NimoteCode |
| --- | --- |
| Run commands | Use the SSH terminal to run the host’s shell and installed tools. |
| Browse remote files | Select a directory in Remote Explorer and access its files over SFTP. |
| Edit code or configuration | Open a remote file in the editor and save it back to the host, subject to your account’s write permissions. |
| Review a change | Inspect the diff in Source Control before committing. Git must be available on the host; advanced Git workflows may require Pro. |

Linux and macOS connections use the host’s configured shell. Windows workspaces use PowerShell and SFTP; the [Windows OpenSSH guide](/docs/windows-ssh-sftp) covers server installation, firewall settings and file access.

## Connect Android to your SSH host

Before connecting, enable the SSH server on the host and check that your account can access the project directory. Keep the machine awake and reachable from your Android device.

1. In NimoteCode, choose **Connect Remote Workspace**, then **Connect** to create a connection profile.
2. Enter the host address, SSH port, username and an authentication method permitted by the server. Use the host’s active Wi-Fi or Ethernet address when both devices are on the same LAN.
3. Verify the host-key fingerprint against a trusted record from the server before accepting the first connection.
4. Connect, then choose the project directory in **Remote Directory**. For a Git project, select the repository root.
5. Check the host, account and root path shown in Remote Explorer before editing.

<div class="doc-screenshots">
  <DocScreenshot file="remote-connection-form.jpg" caption="SSH connection settings: host, port, username, authentication and optional proxy." />
  <DocScreenshot file="remote-workspace-connected.jpg" caption="Remote Explorer shows the connected host and selected project root." />
</div>

**What the port test checks:** **Ping / test SSH port** tests a direct TCP connection to the specified host and port. It does not test a configured proxy, authenticate your account or verify SFTP access. A successful result is only the first connection check.

For access outside the host’s LAN, configure a secure network path such as a VPN. If your network requires a proxy, the connection form supports SOCKS5 and HTTP CONNECT. See the [SSH workspace reference](/docs/ssh) for connection settings.

## Check an edit before relying on the connection

Open a file in a user-owned test directory, make a small change and save it. Reopen the file to confirm the saved content. This checks file access and write permissions separately from terminal access.

In the terminal, confirm the working directory and Git branch before running commands. On Linux or macOS:

```sh
pwd
git status --short --branch
```

Run the project’s documented checks on the host, then inspect the diff before committing. Terminal commands use the host’s installed software. Git, language services and external coding agents require their own installation, configuration and permissions.

## Troubleshoot an Android SSH connection

| Symptom | What to check |
| --- | --- |
| Connection times out | Host power and sleep state, address, VPN, firewall and network isolation. |
| Connection is refused | Whether the SSH service is running and listening on the port you entered. |
| Authentication fails | Username, password or key, and the server’s account and authentication policies. |
| Terminal works but files do not open | The server’s SFTP subsystem and your account’s access to the selected directory. |
| Files open but will not save | File ownership, write permissions and read-only filesystem settings. |
| A project command fails | Terminal working directory, dependencies and tool permissions on the host. |

The [remote coding setup guide](/remote-coding) covers the full connection and verification workflow.

## Common questions

### Do I need a separate computer or server?

For SSH work, yes. NimoteCode connects to an existing SSH host; build and runtime commands execute there. To work entirely on a supported Android device, see [Android IDE and Local Linux](/android-ide).

### Does terminal access mean SFTP will work?

No. SSH shell access and SFTP file access depend on separate server settings. The account also needs permission to read the project directory and write any files you intend to change.

### What can I use for free?

The free plan includes local and SSH workspaces, editing and the basic terminal. Features such as advanced Git workflows, multiple terminals and language services may require Pro. Check [Free and Pro](/pro) and the availability shown in the app for your account.

<div class="seo-cta">
  <p><strong>Install NimoteCode for Android</strong></p>
  <p>Connect to your SSH host and open your project directory.</p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">Get it on Google Play</a>
    <a href="/docs/quick-start" class="home-page-btn secondary">Quick start</a>
  </p>
</div>
