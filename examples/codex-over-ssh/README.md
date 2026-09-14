# Codex Over SSH From a Phone

This workflow uses Codex on the remote machine where it is installed and authenticated. NimoteCode is the mobile editor, SSH terminal, and Git-review context—not a proxy for Codex or a replacement for its setup.

## Goal

Use a host-installed Codex session while retaining editor, terminal, test, and Git review context on mobile.

## Requirements

- An authorised SSH host and repository.
- Codex installed and authenticated on the host according to its official documentation.
- A scoped task and a known repository check.

## Setup

Connect through NimoteCode, confirm the repository root and branch, and inspect the current Git state.

## Workflow

1. Follow Codex's official installation and authentication instructions on the host that owns the project.
2. Connect to the host through NimoteCode and confirm the repository root and branch.
3. Inspect the task and repository state before starting a Codex session in Terminal.
4. Keep requests scoped, review proposed writes and commands, and inspect changed files in the editor.
5. Run the project checks on the host and review the Git diff before delivery.

## Verify

Run the project check on the host and review the complete Git diff before delivery.

## Troubleshooting

If a command or proposed write targets an unexpected directory, stop and verify the session context. For production access, use a least-privilege host account and the team's approval process.

## Related docs

See [Mobile AI Coding](../../resources/mobile-ai-coding.md) and [Remote Development From a Phone](../../resources/remote-development-from-phone.md).
