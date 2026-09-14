# Mobile AI Coding: Keep the Engineering Loop Intact

AI coding on a phone is most useful when it shortens a constrained task: understand an error, locate relevant files, propose a small edit, or explain a test failure. It is not a reason to skip project context, command review, tests, or Git review.

## When to use it

Use AI coding assistance for bounded tasks where project context, command execution, and review can remain visible.

## Main approaches

- A built-in coding agent can work alongside an editor and project context, subject to its provider and permission settings.
- A terminal-based agent such as Claude Code or Codex runs on the machine where it is installed and authenticated. A mobile SSH client can provide the surrounding project access, but does not replace that tool's setup or account.
- A plain chat window is useful for discussion, but cannot prove that a change works in the repository.

## Trade-offs

Built-in agents can share IDE context; CLI agents run where they are installed and authenticated. Either approach still needs human review, scoped permissions, and repository checks.

## Recommended workflow

1. State the goal, constraints, and target files.
2. Let the agent inspect before it edits; reject commands that target the wrong host or directory.
3. Prefer a small, reviewable patch over a broad rewrite.
4. Run the focused tests or checks on the actual workspace.
5. Inspect the Git diff and secret-sensitive output before committing or sharing.

## Example

Ask an agent to inspect a failing test and propose a narrow change, then inspect the files, run that test on the actual workspace, and review the Git diff before delivery.

## Related resources

NimoteCode provides its own AI Chat and Agent workflows with user-configured providers. It can also sit around a remote terminal session for externally installed agents. Read [Claude Code on a phone](claude-code-on-phone.md), [mobile AI agent workflows](mobile-ai-agent-workflows.md), the [Claude Code SSH example](../examples/claude-code-over-ssh/README.md), and the [Codex SSH example](../examples/codex-over-ssh/README.md).
