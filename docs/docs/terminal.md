---
title: Terminal | NimoteCode
description: "Run commands over SSH or Android Local Linux, manage terminal sessions and use terminal output in NimoteCode."
---

# Terminal

<div class="doc-section">
<div class="doc-section__copy">

## Run workspace commands

Open Terminal in the active SSH or Local Linux workspace. Run `pwd` to confirm the directory, then execute the project command. Terminal output belongs to that session; changing an editor tab does not change the shell’s directory.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="terminal-command-output.png" caption="Terminal displaying the output of ls." />
</div>

</div>

<div class="doc-section">
<div class="doc-section__copy">

## Search, copy, and analyze output

The session menu includes output search, clipboard actions, **Analyze with AI**, clearing output, and closing the session. Analyze with AI sends terminal context for explanation. Review the selected content before using it with a provider.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="terminal-actions-menu.jpg" caption="Terminal session actions, including Analyze with AI and Refresh Remote Environment." />
</div>

</div>

## Resume an SSH terminal with tmux {#persistent-ssh-terminal}

In NimoteCode 2.5.0 with Pro, connect to a compatible Linux or macOS host with tmux installed. In the terminal menu, choose **New persistent terminal (tmux)** to start work or **Remote tmux sessions** to find an existing session on the same host and SSH account. Discovery uses the account’s default tmux socket.

Closing the local tab detaches the client and leaves the remote session running. Choose **End remote tmux session** and confirm to stop the session and its jobs. A host restart or exit of the tmux server ends the original session.

If a terminal program such as Codex or Claude Code captures the mouse, hold Shift while dragging and use the right-click menu to copy. NimoteCode 2.5.0 preserves the selection through redraws.

Open the terminal session history to resume a saved tmux session, or use the remote list from another client connected as the same SSH user. With the on-screen keyboard open on a landscape phone, Esc, Ctrl and other terminal keys appear when the pane has enough room.

With tmux installed in Android Local Linux, the same menu can attach to sessions inside that running environment. Sessions end when the environment stops. The app’s persistent terminal actions apply to the SSH host or supported Local Linux environment and are unavailable inside Dev Containers and on native Windows SSH hosts.

## Refresh the remote environment

After updating the remote account’s shell configuration, select **Refresh Remote Environment** or reconnect. The resolved login environment is shared by remote tools such as Tasks, Git, language servers, debug adapters, and external agents.

## Customize terminal tabs

Open the tab customization menu to rename a tab, change its color, or reset its customization. **Customize Terminal Tab** lets you set the title, color, and icon together. These settings identify sessions; they do not change the host or command environment.

<div class="doc-screenshots">
  <DocScreenshot file="terminal-customize-menu.jpg" caption="Tab customization menu." />
  <DocScreenshot file="terminal-tab-style-form.jpg" caption="Tab title, color, and icon settings." />
</div>

## Split panes and connect terminal output to the IDE

Open multiple panes in a terminal workspace and resize them to watch commands, logs, or services together. Select a file location in terminal output to open it in the IDE, or send selected output to AI for analysis. Supported commands are recorded for review and reuse; terminal display preferences, zoom, and per-connection prompt styles can be customized.

## NimoteCode 2.4.0

More responsive terminal output, synchronized updates, search, scrolling, Vim, clipboard access, Windows paste, software keyboards, and held navigation keys.

[2.4.0 →](/releases/2.4.0)
