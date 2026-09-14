---
title: Remote Tasks | NimoteCode
description: Save, group and run repeatable SSH terminal commands in NimoteCode Tasks.
---

# Remote Tasks

Tasks turns a known remote command procedure into a named, reusable action. It is useful for build checks, tests, formatting, health checks and log routines that should not be retyped on a small screen.

<ImagePlaceholder image-key="tasksPage" alt="Tasks page on NimoteCode for phone">
  <strong>Reusable remote task catalog</strong>
</ImagePlaceholder>

## Build a task catalog around outcomes

- Group related **build and test** commands.
- Keep **lint and format** routines separate from deploy work.
- Name **restart, health check and log** tasks so their effect is obvious.
- Run the task in its SSH terminal context and follow its output and status.

## Use tasks safely

Tasks run through SSH workflows, so make the active environment clear in the task name and command. Start with read-only or low-risk routines, document any prerequisite, and avoid hiding destructive actions behind vague labels. Task creation and execution are available without a separate Pro tier.

Related: [SSH Workspace](/docs/ssh) · [Terminal](/docs/terminal) · [Configuration](/docs/configuration)
