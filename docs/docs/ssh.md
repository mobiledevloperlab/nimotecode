---
title: Local and SSH workspaces | NimoteCode
description: "Open local folders, configure SSH connections and proxies, and choose a project directory in NimoteCode."
---

# Local and SSH workspaces

## Choose a workspace

Choose a local folder for device files, SSH for a remote project, or Local Linux for an Android Linux environment. Recent History lists previously opened locations. The workspace determines which files and tools are available. Separately, choose a [mode](/docs/quick-start#open-a-workspace) for your task; [Host](/docs/host) manages remote sessions using NimoteHost.

<div class="doc-screenshots">
  <DocScreenshot file="workspace-start-light.png" caption="Workspace entry points before opening a project, in the dark theme." />
</div>

## Open a local folder

Select **Open Local Workspace**, choose a storage location in the system picker, and grant access to the project folder. The selected directory becomes the Local Explorer root. Picker appearance and available locations depend on the operating system.

### Choose a storage location

After selecting **Open Local Workspace**, locate your project in the system picker. The example shows Android; other operating systems may look different.

### Grant access to the project folder

Open the project folder, check the location, then select **Use this folder** to grant access. Choose the project directory rather than an individual file.

### Check the local workspace

Back in Local Explorer, verify the root directory. The example folder is empty; when opening your own project, check that its files appear here.

<div class="doc-screenshots">
  <DocScreenshot file="local-workspace-files.png" caption="Local Explorer showing the temporary Python demo project on Android." />
</div>

## Configure an SSH connection

1. Select **Connect Remote Workspace**, then **Connect** to add a profile.
2. Enter the host, port, username, and authentication method.
3. If required, select SOCKS5 or HTTP CONNECT under **Proxy Settings**.
4. Connect and select the remote project directory.

**Ping / test SSH port** checks a direct TCP connection to the host and port. It does not test the proxy or authenticate your credentials. A successful port test does not establish an SSH workspace.

<div class="doc-screenshots">
  <DocScreenshot file="remote-connection-form.jpg" caption="New SSH connection form with host, username, port and proxy settings." />
  <DocScreenshot file="remote-connection-history.png" caption="Saved SSH connection in the Connection environments sheet." />
</div>

## Connect to a paired computer {#paired-computers}

In NimoteCode 2.5.0, sign in and open the connection picker, then choose **Connect / Tailscale**. Use **Enter pairing code** to link a computer using the one-time code displayed by Nimote Connect on that computer. You can also remove a pairing from the device list.

For personal Tailscale, keep both devices on the same tailnet and enable SSH on the computer. Select the computer and choose **Connect via Tailscale**. The app uses the synced Tailscale IP or MagicDNS name. Sign in with the computer’s SSH username and password or key. If it fails, check the synced address, SSH port and, for a hostname, MagicDNS.

Nimote Relay is a separate option for compatible paired computers with remote access enabled. Public connectivity is undergoing release validation, including direct connections between networks and switching routes.

On Android, iPhone, and iPad, managed direct and relay connections through Nimote Connect require Pro. Standard SSH, personal Tailscale, and Nimote Connect in desktop releases are free.

Relay shows the stages from authorization through SSH sign-in. The paired computer needs to be online with remote access enabled. Unpairing revokes its Relay access. For Host mode, keep your phone and Host computer on the same LAN.

## Select the project root

Use the remote directory picker to enter or browse to the project folder. After opening it, check the server, user, port, and root shown in Explorer. Use **Select** to enter file-selection mode. Switching directories changes the workspace used by project tools.

### Locate the remote directory

In **Remote Directory**, enter the project path or browse through folders, then select the project root you want to open.

<div class="doc-screenshots">
  <DocScreenshot file="remote-directory-picker.jpg" caption="Remote Directory dialog for selecting the workspace root." />
</div>

### Verify the connection and path

Check the host, user, port, and root path shown in Remote Explorer to confirm that you are working in the intended remote project.

<div class="doc-screenshots">
  <DocScreenshot file="remote-workspace-connected.jpg" caption="Connected Remote Explorer with the active host and root path." />
</div>

### Enter file selection mode

When you need to select files, click **Select** to enter selection mode. Verify the current workspace before choosing the target files.

<div class="doc-screenshots">
  <DocScreenshot file="remote-file-selection.jpg" caption="Remote Explorer in file-selection mode." />
</div>

## Windows SSH workspaces

Windows hosts use PowerShell and SFTP for remote workspace operations. File browsing and search, Git, terminal commands, language services, and Agent workflows are available where the host and account provide the required tools and permissions.

[Windows 11 setup and troubleshooting](/docs/windows-ssh-sftp)

## NimoteCode 2.4.0

**Host workspace.** Install and start a compatible NimoteHost on your remote machine, then connect over SSH to browse, search, pin, and resume terminal and Agent sessions. Host is optional and existing SSH workflows remain available.

Strengthened SSH host key verification, concurrent known_hosts access on Windows, and Windows connections to modern macOS SSH servers.

[2.4.0 →](/releases/2.4.0)

[Host mode →](/docs/host) — Install NimoteHost, connect over SSH, and return to terminals and Agent tasks.
