---
title: "Connections, terminals and tasks | NimoteHost"
description: "NimoteHost: connections, terminals and tasks."
---

# Connections, terminals and tasks

Check ordinary SSH first. Use the computer’s reachable SSH address, or select a device with an available paired connection in Machines. Public Nimote Connect access requires pairing and enabling remote access.

## Choose Host and your SSH connection {#_3-choose-host-and-your-ssh-connection}

In NimoteCode, open **Machines**, select the computer’s SSH connection, and open **Host**. If Host is missing, choose **Install Nimote Connect**. The wizard selects the SSH host, downloads the matching package, then verifies the installation. Approve the device when prompted. Automatic installation and updates are available on supported 64-bit macOS and Linux computers.

<div class="doc-screenshots">
  <DocScreenshot file="host-mode.png" caption="Choose Host from the welcome screen alongside IDE, Terminal, and AI." />
  <DocScreenshot file="host-setup.png" caption="Before a host is selected, the setup screen asks you to install the service and choose an SSH connection." />
</div>

If the app reports a missing, stopped, or incompatible Host, fix that condition and retry. Discovering a stopped Host does not automatically start it.

## Open a terminal first {#_4-open-a-terminal-first}

1. Tap **+** and select **Terminal** in the new-session window.
2. Enter the workspace directory or use the folder button. It must already exist on the remote computer and be accessible to your SSH account.
3. Tap **Start session** and wait for a shell prompt.
4. Run `pwd`, then `echo Host connected` to check the directory and output. In Windows PowerShell, use `Get-Location` for the directory.

<div class="doc-screenshots">
  <DocScreenshot file="host-terminal.png" caption="Retained output from a completed remote check: four runs of the three-test Python suite passed." />
</div>

These 2.4.1 captures show the existing pocket-shop workspace. The terminal capture is a completed command session; the steps above illustrate how to create an interactive shell.

Returning to the list leaves the shell running. To end the demo shell, enter `exit` or use the session's stop button. Once stopped, opening its history shows retained output; it does not bring the process back.

## Return to the same session {#_5-return-to-the-same-session}

In **Sessions**, search by name or directory, choose **All**, **Running**, or **History**, and open the session. Its menu includes pinning, renaming, and other actions.

<div class="doc-screenshots">
  <DocScreenshot file="host-sessions.png" caption="Host session history, with running, completed and stopped processes." />
</div>

After leaving the app or losing SSH, reconnect to the same Host. If Host and the managed process are still running, you can reattach without executing the original command again.

Sleep, logout, and a Host or OS restart are different. Host does not resurrect processes after a restart; unfinished sessions become interrupted. On Linux, logout behavior depends on user-service and lingering settings. macOS and Windows user services also depend on the login session.

If session creation times out, refresh the list before trying again. Check whether the first request created a session already.

## Run a one-off task {#_6-run-a-one-off-task}

Choose **+ → Task**, select the directory, enter a command, and start it. Try `echo Host connected` first, then use your project's build or test command once the directory and output look right.

When it finishes, read the exit code and log. A task called “Tests” is only a name; check what actually ran and what it reported. Use **Terminal** for commands that need ongoing interaction.

[Overview](/docs/host) · [Agents and task inbox](/docs/host/agents)
