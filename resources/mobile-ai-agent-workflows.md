# Mobile AI Agent Workflows

## When to use it

Use an AI coding agent on mobile when the task is bounded and the repository, commands, and resulting diff remain reviewable.

## Main approaches

| Approach | Where it runs | Context boundary |
| --- | --- | --- |
| Built-in IDE agent | Inside an IDE workspace | Editor, project, terminal, and Git context exposed by the IDE |
| CLI agent | Development host or local Linux environment | Shell session, files, and credentials on that machine |
| ACP-compatible agent | Supported IDE/agent integration | Depends on the configured agent and integration permissions |
| Chat-only assistant | Browser or app | Conversation context; no proof of repository state |

Claude Code and Codex are CLI-agent examples when installed and authenticated on the selected host. Their availability, plan, and permissions come from their own providers; a mobile client should not claim to bundle them.

## Trade-offs

Terminal-only use can be direct and portable, but makes file and diff review less convenient. IDE context can keep editor, terminal, and Git together, but only the configured integration receives that context. In both cases, generated output may be wrong or unsafe, and credentials must never be pasted into prompts or logs.

## Recommended workflow

1. State the goal, constraints, and verification command.
2. Let the agent inspect the repository before requesting edits.
3. Keep writes narrow; stop when the requested host or directory is unclear.
4. Run the relevant check where the code actually runs.
5. Inspect the Git diff and sensitive output before commit or handoff.

## Example

From a phone connected over SSH, ask a host-installed agent to identify the source of one failing test. Review its proposed patch in the editor, run that test in the terminal, and only then decide whether to commit.

## Related resources

Continue with [mobile AI coding](mobile-ai-coding.md), [Claude Code on a phone](claude-code-on-phone.md), [Claude Code over SSH](../examples/claude-code-over-ssh/README.md), and [Codex over SSH](../examples/codex-over-ssh/README.md).
