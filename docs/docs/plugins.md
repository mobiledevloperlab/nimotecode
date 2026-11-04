---
title: Custom plugins | NimoteCode
description: "Create, test, install, and manage NimoteCode custom plugins: workspace panels, Agent tools, workflows, MCP references, event handlers, and Android background jobs."
---

# Custom plugins

Custom plugins turn a repeated project workflow into a small, reusable tool inside NimoteCode. A plugin can combine workspace information, forms, shortcuts to native panels, and approved actions. It extends the existing editor, terminal, Git, Tasks, language-service, and Agent workflows; it does not create a separate unrestricted runtime on your device.

## What a plugin can include

One plugin can contribute one or more of the following, depending on its design and the active workspace:

| Component | Purpose |
| --- | --- |
| **Panel and forms** | Show project information and collect the input needed for an action. |
| **Workspace data** | Use available workspace, Git, LSP, Tasks, terminal, or Agent context. |
| **Native shortcuts** | Open the built-in editor, AI, Terminal, Tasks, or Source Control panel. |
| **Confirmed actions** | Read or write a workspace file, send an HTTP request, run an existing task, execute a terminal command, or run a Python, JavaScript, or Shell script. |
| **Agent tool or Markdown skill** | Make an eligible plugin capability available to the built-in Agent or provide on-demand guidance. |
| **Workflow or event handler** | Compose reads and actions with values passed between steps, conditions, loops, and explicit retries while the app is active. |
| **MCP reference** | Reference a configured MCP integration when the workflow needs it. |

The available data always belongs to the active workspace. Switching workspaces does not reuse context from the previous one. File-opening shortcuts need a stable native file path, so they are unavailable in document-provider workspaces.

## Create and test a plugin

Configure a model in [AI configuration](/docs/configuration), then open the workspace the plugin will use.

1. Open **AI custom plugins** and choose **Create plugin**.
2. Describe the outcome and the inputs it needs. For example: “Show the current branch, changed files, and LSP error count, with a shortcut to Source Control.”
3. Continue the same conversation to refine labels, fields, data, and actions.
4. Preview the result. Preview validates the panel and does not run file writes, network requests, commands, or scripts.
5. Select **Test plugin** when available, review the resolved inputs and permissions, then save and install only the version you intend to use.

<div class="doc-screenshots">
  <DocScreenshot file="ai-plugin-builder.png" caption="AI custom plugins before a plugin is created. Choose Create plugin to describe the panel or workflow you need." />
</div>

## Understand permissions and execution

Plugins use registered capabilities rather than loading executable app extensions. Before installation, update, or an action, inspect what the plugin requests.

- File reads and writes are limited to the open workspace. A write shows the target path and content for confirmation.
- HTTP requests, terminal commands, existing task runs, file opens, and scripts require confirmation when invoked.
- Python, JavaScript, and Shell scripts run only on the connected SSH or Android Local Linux target, using the installed `python3`, `node`, or shell interpreter and that account’s permissions.
- Plugins do not download language runtimes, install dependencies, or grant access that the selected target account does not already have.
- Bound arguments supplied by a plugin cannot be silently replaced by an Agent call.

Treat a plugin command or script like any other command from an untrusted source: read it, confirm its target and input, and inspect its result. Do not store secrets in generated defaults or share them in a plugin description.

## Install, update, disable, and recover

Open Plugin Center to inspect a plugin’s details, capabilities, and permissions; **Open plugin** opens its panel. **Discover** starts a new AI-assisted creation flow, while **My Plugins** lists locally managed plugins.

Plugin definitions and form configuration are retained separately so you can revise a plugin without rebuilding the whole panel. Preview a revision before saving it, review any changed permissions, and enable or disable the plugin as appropriate. You can restore a recent version. If one enabled plugin depends on another, disable dependents before disabling or removing the dependency.

The built-in Agent can discover eligible plugin capabilities through the app’s MCP integration and records tool results in its timeline. External ACP agents keep their own behavior and may not support the same integration.

## Background jobs and schedules (Android)

Android supports durable background plugin workflows for SSH and Android Local Linux targets. iPhone and iPad support foreground plugin actions but do not provide these background workflows or schedules.

To use a background job, the target must remain available and provide Python 3.9 or later with SQLite. Review the exact plan, inputs, retries, and schedule before deployment. Jobs may run once or on a non-overlapping interval; they do not replay every missed interval after a disconnection.

Open **Background jobs & schedules** to inspect output, refresh state, pause, resume, or cancel a job. A job can continue after the app disconnects if its target stays running. A target reboot or worker interruption can require reconnecting and recovery. If an interruption occurs during an external side effect—such as a write, deployment, or network call—inspect the result and explicitly retry or skip it; the system does not claim exactly-once delivery.

Background jobs retain the approved definition. Updating, disabling, or uninstalling a plugin does not silently replace a job already deployed; stop an old job before deploying a replacement. Secret form fields are not retained for unattended work, so use appropriately secured target-side credentials instead.

Panel navigation, LSP operations, and native configured Tasks remain foreground actions. See [Security](/docs/security) before giving a plugin access to a production workspace.
