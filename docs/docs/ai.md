---
title: AI Chat, Agent, MCP, and external agents | NimoteCode
description: Configure AI Chat and Agent in NimoteCode, review plans and tool actions, and safely use MCP servers or compatible external ACP agents.
---

# AI Chat, Agent, MCP, and external agents

AI features are optional. Before sending a request, configure a provider you control in [AI and connection configuration](/docs/configuration). NimoteCode does not provide model credits or make a model’s output correct by default.

## Choose the right mode

| Mode | Best for | What it can change |
| --- | --- | --- |
| **Chat** | Explaining code, discussing an error, drafting an approach, or asking about selected text. | Chat responds to your prompt; it does not itself perform workspace changes. |
| **Nimote Agent** | A multi-step task such as inspecting a project, proposing edits, or running approved workspace tools. | Its available tools depend on the open workspace and your approvals. |
| **External ACP agent** | Using a separately installed, compatible agent runtime in a supported execution environment. | The external runtime has its own tool policy, credentials, and behavior; enable it only when you intend to run it. |

For project-specific work, open the intended workspace first. Check its root directory and connection before asking an agent to inspect or change files.

## Start with Chat

Select a configured model in the AI panel, then send a focused question. You can ask about the open workspace or use **Ask AI** from a text selection. Include the relevant error, goal, and constraints; avoid placing secrets in the prompt or source files.

Use Chat for analysis before execution when you need to understand a project, compare approaches, or interpret command output. A response can be incomplete or mistaken, so verify referenced files, APIs, and commands in the actual project.

## Run Nimote Agent deliberately

Choose **Nimote Agent** for work that needs more than an answer. In **Confirm** mode, the agent proposes a plan. Review the scope, then select **Approve this run** before tools execute. The execution timeline identifies the current activity, completed tool calls, output, and any question the agent needs answered.

You can send follow-up instructions while a run is active. Stop a run when its direction or scope is no longer appropriate. Before accepting the result, inspect changed files, run the project’s relevant checks, and review the Git diff.

Automatic execution, when available, reduces approval prompts; it does not make an action safe. Use it only in a workspace and account whose scope you understand.

## Add an external ACP agent

External agents are disabled until you enable them. Configure a compatible Agent Client Protocol (ACP) runtime and any required command, arguments, and environment variables for the target environment. NimoteCode includes editable presets for DeepSeek Harness, Claude Agent, Kimi Code CLI, Codex, and OpenCode; you may also add a compatible custom runtime.

An ACP runtime is a separate process. It must be installed or runnable in the selected environment, and its provider credentials, network access, command execution, and safety policy are not supplied by NimoteCode. Confirm that the runtime is trusted and that its permissions match the project before starting it. Session commands offered by the runtime can appear through slash-command completion.

## Connect MCP tools carefully

MCP configuration supports two server transports:

- **stdio:** starts a command on the selected execution target—automatic selection, remote SSH, Local Linux, or the local device as applicable.
- **Streamable HTTP:** connects directly to the configured HTTP or HTTPS endpoint.

Store server secrets in the MCP configuration rather than in prompts. Add only trusted servers: a stdio server runs a command in its target environment, and an HTTP server receives requests from the app. Starting a stdio server and invoking its tools require approval. Review each tool’s input and output before continuing an Agent task.

## Privacy and review checklist

- Use a provider account and model appropriate for the data you send.
- Do not place API keys, passwords, private keys, or production secrets in prompts, source snippets, terminal output, or plugin forms.
- Review the workspace root, Agent plan, command, and file diff before approving an action.
- Treat generated code and tool output as untrusted until tested in the project.

For provider setup and connection testing, see [AI and connection configuration](/docs/configuration). For credentials and operation review, see [Security](/docs/security).

## Interface reference

These screenshots correspond to the Chat, Agent selection, plan review, execution timeline, and result-review stages described above.

<div class="doc-screenshots">
  <DocScreenshot file="ai-chat-welcome.png" caption="AI panel before a workspace is opened." />
  <DocScreenshot file="ai-agent-selector.jpg" caption="Agent selector with Nimote Agent selected and external agents disabled." />
  <DocScreenshot file="ai-plan-approval.jpg" caption="A project-inspection plan waiting for approval in Confirm mode." />
  <DocScreenshot file="ai-plan-running.jpg" caption="The approved run reading files and recording completed inspection steps." />
  <DocScreenshot file="ai-analysis-overview.jpg" caption="Project overview and main components in an AI response." />
  <DocScreenshot file="ai-analysis-workflow.jpg" caption="Example project commands in an AI response." />
  <DocScreenshot file="ai-analysis-caveats.jpg" caption="Caveats about the inspected checkout and benchmark results." />
</div>
