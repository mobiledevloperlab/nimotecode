---
title: NimoteCode FAQ | Mobile IDE Questions
description: Concise answers about NimoteCode local, Android Local Linux and SSH workspaces, AI provider profiles, Git Source Control, remote Tasks and Pro access.
---

# NimoteCode FAQ

The limits below follow the upcoming 2.5.0 comparison. Check your installed version and [Free and Pro](/pro) for account-specific access.

<!-- faq:start -->

## Is NimoteCode only an SSH client?

No. NimoteCode can open a local project, use Android Local Linux, or connect to an SSH workspace, and brings Explorer, Editor, Terminal, Git workflows, AI assistance and diagnostic panels into the same project context.

## Can I use it without Pro?

Edit files, connect to SSH workspaces, use up to two terminals at once, including terminal search, access basic LSP completion, diagnostics and navigation, use standalone AI chat with your own model service, and stage, unstage and commit files, and view Git diffs and history for free. Basic LSP requires a configured language server. Basic Android Local Linux is free on supported devices. Free includes 3 built-in Agent tasks and 10 remote content searches per day. Quotas reset at 00:00 UTC. [Free and Pro](/pro).

## Which AI providers can I configure?

The app provides provider templates and supports compatible custom endpoints. Provider availability, model access and cost are determined by your own provider account and settings. See [Configuration](/docs/configuration).

## What does Source Control support?

Free includes Git status, diffs, staging, unstaging and commits. Graphical push, pull, branch and stash operations, Git AI and advanced GitHub integration require Pro.

## Are Tasks local or remote?

Tasks are designed for repeatable command workflows in an SSH workspace. Commands run in the connected workspace. The default working directory is the workspace root unless the task specifies another directory.

## Do LSP and Debug work for every project?

They depend on a compatible language server or debug adapter being configured on the remote host and on the project’s setup. Basic LSP diagnostics, completion and navigation are free. Code actions, guided language-server installation and debugging require Pro and configured tools.  see [LSP](/docs/lsp) and [Debug](/docs/debug).

<!-- faq:end -->
