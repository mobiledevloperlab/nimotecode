---
title: Quick start | NimoteCode
description: "Configuration, procedures, and interface reference for quick start."
---

# Quick start

<figure class="quick-start-hero">
  <img src="/screenshots/nimote-pro.webp" width="1440" height="810" alt="NimoteCode on tablet and phone, with local and SSH workspaces, code editing, Git, Terminal, AI, debugging, and sync." decoding="async" fetchpriority="high">
</figure>

## Open a workspace

Choose a workspace from the welcome screen. **Open Local Workspace** opens files on the device; **Connect Remote Workspace** connects to an SSH host. **Local Linux** installs Ubuntu on supported Android devices. To explore the interface without configuring a host, choose **Try Demo Workspace**.

<div class="doc-screenshots">
  <DocScreenshot file="startup-light.jpg" caption="Welcome screen, light theme." />
  <DocScreenshot file="startup-dark.jpg" caption="Welcome screen, dark theme." />
</div>

<div class="doc-section">
<div class="doc-section__copy">

## Open and edit a file

Select a project directory, then open a file in Explorer. Edit the file and save it before running a command that reads it from disk. See [Editor](/docs/editor) for selection, navigation, and preview controls.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="editor-multiple-files.jpg" caption="Open files appear in tabs; webapp.py is active in this example." />
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
  <DocScreenshot file="ai-plan-running.jpg" caption="After approval, the agent reads project files and records its progress." />
</div>

Read the response alongside any limitations it identifies, such as files it could not inspect. You can send follow-up instructions during the run. See [AI Chat and Agent](/docs/ai) for agent selection and execution controls.

## Configure optional tools

Language servers and debug adapters require separate setup; see [LSP](/docs/lsp) and [Debugging](/docs/debug).
