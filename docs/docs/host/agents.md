---
title: "Agents and task inbox | NimoteHost"
description: "NimoteHost: agents and task inbox."
---

# Agents and task inbox

After [connecting to Host](/docs/host/sessions), use the tools installed on that computer to start an Agent conversation and review its results.

## Start an Agent conversation {#_7-start-an-agent-conversation}

Install and sign in to the Agent on your computer first. Host discovers compatible Codex, Claude Code, and OpenCode installations. Structured Claude conversations also need a compatible `claude-agent-acp` adapter. Host does not download these tools or supply model accounts or credits.

1. Tap **+ → Agent** and check the project directory.
2. Select an **Installed agent**. If there is no Agent tab, check the CLI installation, login, and PATH available to the Host service on the computer.
3. Choose an execution policy. Start with confirmation for each native permission request if you want to review them individually. **Smart execution** handles verifiable workspace reads, searches, and structured edits automatically, while sensitive or unknown operations still ask.
4. Start with a small request, such as “Find the test commands in this project; don't edit files yet.” Read the tool output before asking for changes.

<div class="doc-screenshots">
  <DocScreenshot file="host-agent-form.png" caption="Agent setup with directory, installed Agent, execution policy, and conversation controls. This screenshot shows configuration only; no model task was started." />
</div>

Automatic approvals apply to native permission requests in this session and still respect the Agent's own sandbox. They do not enable automatic code publication. An independent worktree, where supported, starts a new branch from committed HEAD and leaves uncommitted files in the original workspace.

Inside the conversation, inspect tool details, respond to approvals, and use the model and command controls offered by the Host. Supported Agents accept follow-up instructions while running. To resume history, choose the provider's original conversation. Opening a terminal does not guarantee that an arbitrary running CLI becomes the same structured conversation.

## Review work in the task inbox {#_8-review-work-in-the-task-inbox}

If supported, **Task inbox** appears above the session list. Use it to find approvals, failures, running tasks, and completed work awaiting review. Open a task to see its original session, verification records, and diff.

Check whether a test actually ran, its exit code, and the revision it tested. An Agent saying “passed” is not a test record. Expired or unknown verification is not a pass for the current revision.

Mark work handled or archive it when you have reviewed it. Pending approvals cannot be hidden this way. Return to the original session for corrections, and check the Host and directory before opening Git review.

To dispatch a GitHub Issue, use the supported dispatch entry to select the Issue, Host directory, Agent, test command, and publication policy. The computer needs an installed, authorized `gh`; your phone's GitHub login is not copied to Host. Leave publication manual for your first task, review the diff and verification, then publish when ready. Automatic publication must be explicitly selected when dispatching. Host does not automatically merge PRs.

## Open Host plugins {#_9-open-host-plugins}

After connecting over SSH, look for the current Host's plugins in application configuration. Available plugins open from the sidebar; their forms and actions depend on the plugin. Resolve permission or compatibility errors before retrying an operation. See the [plugin guide](/docs/plugins).

[Overview](/docs/host) · [Service management and updates](/docs/host/maintenance)
