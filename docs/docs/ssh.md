---
title: Local and Remote SSH Workspaces | NimoteCode Mobile IDE
description: Open a local project or connect to a remote project with SSH in NimoteCode, then work from one clear project root.
---

# Local and Remote SSH Workspaces

NimoteCode starts with a workspace: a local project stored on your device or a remote project reached through SSH. Explorer, Editor and Terminal stay connected to the same project root, so a task remains understandable from first inspection through verification. For bundled Ubuntu on Android, see [Android Local Linux](/docs/local-linux).

<ImagePlaceholder image-key="localWorkspace" alt="Local workspace in NimoteCode on phone">
  <strong>Local workspace</strong>
  <span>Open a project stored on the device with Local Explorer.</span>
</ImagePlaceholder>

## Open a local workspace

Choose **Local Explorer** to browse a project stored on your device. Confirm the folder before editing files, running commands or reviewing changes in Source Control.

## Connect an SSH workspace

<ImagePlaceholder image-key="sshWorkspace" alt="NimoteCode SSH workspace setup">
  <strong>SSH workspace setup</strong>
  <span>Connect to a remote host, then open its project root in Remote Explorer.</span>
</ImagePlaceholder>

Connect in four steps:

1. Create or select an SSH profile.
2. Enter the host, port and username.
3. Authenticate with a password, private-key file or pasted private key.
4. Confirm the remote project root, then open it in Remote Explorer.

## Choose and confirm the remote directory

Explorer is the starting point for an SSH-backed project. After connecting, select **Remote Explorer**, then confirm both the host and the project root before opening files or running commands.

<ImagePlaceholder image-key="explorerPage" alt="Explorer selection page on NimoteCode for phone">
  <strong>Select a workspace explorer</strong>
</ImagePlaceholder>

<ImagePlaceholder image-key="explorerPopup" alt="Explorer selection popup on NimoteCode for phone">
  <strong>Explorer selection controls</strong>
</ImagePlaceholder>

Choose the project root—not merely the server home directory. This gives Editor, Terminal, Search and Source Control a shared boundary and reduces the chance of running a command in the wrong location.

<ImagePlaceholder image-key="remoteDirectory" alt="Remote directory selection dialog on NimoteCode for phone">
  <strong>Select the remote project directory</strong>
</ImagePlaceholder>

## What stays in context

- Browse the remote project and open files in [Editor](/docs/editor).
- Run shell commands in [Terminal](/docs/terminal) for that workspace.
- Search remote file content with [Search](/docs/search).
- Review a focused patch in [Source Control](/docs/source-control); use Pro only if the delivery needs a gated Git write action.

## Safer remote habits

Use a separate profile for each environment, prefer a least-privilege account and key-based authentication for sensitive hosts, and choose a deliberate project root. Reconnect-aware behavior and connection reuse make remote commands and preview tunnels more resilient, but you should always verify the active host and directory before running a write command.

Next: [Terminal](/docs/terminal) · [Remote Hotfix from Mobile](/use-cases/remote-hotfix) · [Security and Safety](/docs/security)
