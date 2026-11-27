---
title: Tasks | NimoteCode
description: "Configuration, procedures, and interface reference for tasks."
---

# Tasks

Free can run individual tasks. Running a workflow with task dependencies requires Pro.

<div class="doc-section">
<div class="doc-section__copy">

## Create a reusable command

Tasks stores named commands and groups them by purpose. Add a task with the **+** control, enter its command and configuration, and assign a group if needed. Task execution uses the connected SSH environment, including Android Local Linux through its local SSH connection.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="task-runner.png" caption="Tasks with All and Test groups and a Run Tests entry; the example command is echo, not a completed test run." />
</div>

</div>

In 2.5.0, the execution target shown by Tasks and plugins follows the current workspace and platform. Use a connected SSH terminal or a supported Android Local Linux terminal where available. The remote account or Linux environment supplies the installed tools.

## Run and inspect output

Use the play control beside a task and inspect its terminal output. A task name is a label, not a validation of the command: check the command and working directory before using it. Basic task creation and execution do not require a separate Pro tier.

## NimoteCode 2.4.0

**Project task runner.** Discover supported tasks from package.json, Taskfile, Makefile, justfile, and .vscode/tasks.json. Run them in workspace terminals; Make/just dynamic discovery requires explicit confirmation.

[2.4.0 →](/releases/2.4.0)

[Machines →](/docs/host) — Install Nimote Connect, connect over SSH, and return to terminals and Agent tasks.
