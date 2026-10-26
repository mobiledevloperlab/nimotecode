---
title: AI Chat and Agent | NimoteCode
description: "Configuration, procedures, and interface reference for ai chat and agent."
---

# AI Chat and Agent

<div class="doc-section">
<div class="doc-section__copy">

## Start a conversation

Select a configured model in the AI panel and enter a question. For project-specific requests, open the relevant workspace first. Provider credentials and model access are configured separately in [Configuration](/docs/configuration).

</div>

<div class="doc-screenshots">
  <DocScreenshot file="ai-chat-welcome.png" caption="AI panel before a workspace is opened." />
</div>

</div>

<div class="doc-section">
<div class="doc-section__copy">

## Choose an agent

The agent selector provides Nimote Agent and external agents. External agents run on the SSH host and require a compatible ACP runtime installed and configured there. Session commands reported by the runtime are available through slash-command completion.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="ai-agent-selector.jpg" caption="Agent selector with Nimote Agent selected and external agents disabled." />
</div>

</div>

## Review the plan and follow execution

In **Confirm** mode, review the proposed plan and select **Approve this run** to permit tool execution. The timeline shows the current step, completed tool calls, and output. You can provide follow-up instructions or answer questions during a run. If a step budget is reached, inspect the result before continuing.

<div class="doc-screenshots">
  <DocScreenshot file="ai-plan-approval.jpg" caption="A project-inspection plan waiting for approval in Confirm mode." />
  <DocScreenshot file="ai-plan-running.jpg" caption="The approved run reading files and recording completed inspection steps." />
</div>

## Read the result

The following screenshots show one response to “explain this project”: a project overview, example commands, and caveats about missing files and benchmark methodology. These are parts of a generated answer, not separate analysis modes. Check referenced files and commands against the current project before using the result.

<div class="doc-screenshots">
  <DocScreenshot file="ai-analysis-overview.jpg" caption="Project overview and main components in an AI response." />
  <DocScreenshot file="ai-analysis-workflow.jpg" caption="Example project commands in the same response." />
  <DocScreenshot file="ai-analysis-caveats.jpg" caption="Caveats about the inspected checkout and benchmark results." />
</div>
