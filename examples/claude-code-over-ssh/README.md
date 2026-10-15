# Claude Code Over SSH From a Phone

This workflow keeps Claude Code on a remote development host. NimoteCode supplies the mobile SSH workspace around it; it does not install, operate, or authenticate Claude Code.

## Goal

Use a host-installed Claude Code session while keeping the project, commands, tests, and Git diff reviewable from a phone.

## Requirements

- An authorised SSH host and intended repository.
- Claude Code installed and authenticated on that host according to its official documentation.
- A documented project check to run after the change.

## Run the workflow

Follow [Claude Code on a Phone](../../resources/claude-code-on-phone.md) for host preparation, authentication and the terminal commands. Use this checklist to finish a bounded task:

- Confirm the SSH host, repository, branch and existing changes before opening Claude Code.
- Review proposed commands and inspect edited files in NimoteCode.
- Run the project's documented check on the host and record its command and exit status.
- Inspect `git diff --check`, `git diff` and `git status --short`; open untracked files separately before handoff.

A useful handoff states the host environment (without private addresses or credentials), changed files, exact verification command, result and remaining limitations. A successful agent response alone is not verification.

## Troubleshooting

Do not paste provider credentials into terminal output. If the session targets the wrong repository or account, stop and confirm the host, directory, and authentication context.

## Related docs

Read [Claude Code on a Phone](../../resources/claude-code-on-phone.md) and [Mobile AI Coding](../../resources/mobile-ai-coding.md).
