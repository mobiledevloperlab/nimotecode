---
title: Local and SSH workspaces | NimoteCode
description: "Configuration, procedures, and interface reference for local and ssh workspaces."
---

# Local and SSH workspaces

## Choose a workspace

Explorer provides local, remote SSH, Local Linux, and demo entry points. Recent History lists previously opened locations. The connected workspace determines which files and tools are available.

<div class="doc-screenshots">
  <DocScreenshot file="workspace-start-light.png" caption="Explorer before opening a workspace, light theme." />
  <DocScreenshot file="workspace-start-dark.jpg" caption="Explorer before opening a workspace, dark theme." />
</div>

## Open a local folder

Select **Open Local Workspace**, choose a storage location in the system picker, and grant access to the project folder. The selected directory becomes the Local Explorer root. Picker appearance and available locations depend on the operating system.

<div class="doc-screenshots">
  <DocScreenshot file="local-storage-picker.png" caption="Android storage-location picker." />
  <DocScreenshot file="local-file-browser.png" caption="Android folder picker with the Use this folder action." />
  <DocScreenshot file="local-workspace-files.png" caption="Local Explorer after selecting a folder; this example has no listed project files." />
</div>

## Configure an SSH connection

1. Select **Connect Remote Workspace**, then **Connect** to add a profile.
2. Enter the host, port, username, and authentication method.
3. If required, select SOCKS5 or HTTP CONNECT under **Proxy Settings**.
4. Connect and select the remote project directory.

**Ping / test SSH port** checks a direct TCP connection to the host and port. It does not test the proxy or authenticate your credentials. A successful port test does not establish an SSH workspace.

<div class="doc-screenshots">
  <DocScreenshot file="remote-connection-form.jpg" caption="SSH profile form with port test, proxy, and authentication settings." />
  <DocScreenshot file="remote-connection-history.png" caption="Recent History with a saved SSH profile." />
</div>

## Select the project root

Use the remote directory picker to enter or browse to the project folder. After opening it, check the server, user, port, and root shown in Explorer. Use **Select** to enter file-selection mode. Switching directories changes the workspace used by project tools.

<div class="doc-screenshots">
  <DocScreenshot file="remote-directory-picker.jpg" caption="Remote Directory dialog for selecting the workspace root." />
  <DocScreenshot file="remote-workspace-connected.jpg" caption="Connected Remote Explorer with the active host and root path." />
  <DocScreenshot file="remote-file-selection.jpg" caption="Remote Explorer in file-selection mode." />
</div>
