---
title: Quick start | NimoteCode
description: "Get started with NimoteCode: explore four modes, open a local or SSH project, run commands with SSH or Android Local Linux, and configure AI Agent."
---

# Quick start

Open **Machines → Add Machine** and choose SSH, Nimote Connect, Local Network, or Tailscale. Select the machine to open its workspace in IDE, Terminal, or AI. Add NimoteHost for persistent sessions, remote tasks, and approvals. NimoteHost features require compatible tools and Pro access.

[Free and Pro](/pro)

Open a workspace, edit a file, and run your first command. Follow the steps below; AI setup is only needed when you reach the Agent step.

- [Open a workspace](#open-a-workspace)
- [Open and edit a file](#open-and-edit-a-file)
- [Run a command](#run-a-command)
- [Run AI Agent](#run-ai-agent)

## Open a workspace

NimoteCode 2.5.0 adds a floating navigation bar on portrait phones. Use it to switch workbench panels and use the empty editor’s file-browsing action to open Explorer.

In NimoteCode 2.5.0, you can [connect to a paired computer through personal Tailscale](/docs/ssh#paired-computers), [resume an SSH terminal with tmux](/docs/terminal#persistent-ssh-terminal), or [set up Nimote Connect over SSH](/docs/host/getting-started#install-over-ssh).

NimoteCode offers four modes. Choose a mode on the welcome screen. In Full IDE, open the workspace menu to switch modes:

| Mode | Use it for |
| --- | --- |
| **Quick Terminal** | SSH, Local Linux and commands. |
| **AI Workspace** | AI conversations, agents and tasks. |
| **Full IDE** | Files, Git and AI development. |
| **Host** | Persistent remote tasks and Agent sessions using NimoteHost. See [Host setup](/docs/host). |

Choose where your project lives separately: a [local folder or SSH workspace](/docs/ssh), or [Local Linux](/docs/local-linux) on supported Android devices. A local folder can be edited without a Linux runtime; project commands require SSH or Local Linux. A demo workspace is also available.

<div class="doc-screenshots">
  <DocScreenshot file="startup-light.jpg" caption="Welcome screen, light theme." />
  <DocScreenshot file="mode-switch.png" caption="Switch modes from the workspace menu in Full IDE." />
</div>

<div class="doc-section">
<div class="doc-section__copy">

## Open and edit a file

Select a project directory, then open a file in Explorer. Edit the file and save it before running a command that reads it from disk. See [Editor](/docs/editor) for selection, navigation, and preview controls.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="editor-multiple-files.jpg" caption="Python and Markdown files open in separate editor tabs." />
</div>

</div>

<div class="doc-section">
<div class="doc-section__copy">

## Run a command

In an SSH or Local Linux workspace, open Terminal and run `pwd` to check the working directory. Run the project’s test or build command, then inspect changed files in [Source Control](/docs/source-control). A local folder alone does not provide a Linux runtime.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="terminal-command-output.png" caption="Terminal displaying project files listed by the ls command." />
</div>

</div>

## Run AI Agent

Use AI Agent to inspect the project and explain how its files fit together.

1. Add a provider and configure model access in [Configuration](/docs/configuration).
2. With the project workspace open, open the AI panel, select a configured model, and choose **Nimote Agent** from the agent selector.
3. Select **Confirm** mode and send a request such as “Explain this project.”
4. Review the proposed plan, then select **Approve this run** to allow the agent to execute its tools. Follow the file reads and tool results in the execution timeline.

<div class="doc-screenshots">
  <DocScreenshot file="ai-plan-approval.jpg" caption="Confirm mode: review the project-inspection plan before approving the run." />
  <DocScreenshot file="ai-plan-running.jpg" caption="Agent task result: added Python tests, passing test output and Git diff." />
</div>

Read the response alongside any limitations it identifies, such as files it could not inspect. You can send follow-up instructions during the run. See [AI Chat and Agent](/docs/ai) for agent selection and execution controls.

## Configure optional tools

Language servers and debug adapters require separate setup; see [LSP](/docs/lsp) and [Debugging](/docs/debug).
