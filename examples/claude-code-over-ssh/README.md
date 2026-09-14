# Claude Code Over SSH From a Phone

This workflow keeps Claude Code on a remote development host. NimoteCode supplies the mobile SSH workspace around it; it does not install, operate, or authenticate Claude Code.

## Goal

Use a host-installed Claude Code session while keeping the project, commands, tests, and Git diff reviewable from a phone.

## Requirements

- An authorised SSH host and intended repository.
- Claude Code installed and authenticated on that host according to its official documentation.
- A documented project check to run after the change.

## Setup

Connect to the host in NimoteCode, open the intended repository, and inspect the branch and existing diff before starting a CLI session.

## Workflow

1. Install and authenticate Claude Code on the host according to its official documentation.
2. Connect to that host in NimoteCode and open the intended repository.
3. Inspect the branch and current diff before starting or continuing the CLI session in Terminal.
4. Ask for a bounded task, inspect changed files in the editor, and review every command with the host and directory in mind.
5. Run the repository's relevant checks, then review the Git diff before committing or handing off the change.

## Verify

Run the repository's relevant check on the host, then inspect the Git diff before committing or handing off the change.

## Troubleshooting

Do not paste provider credentials into terminal output. If the session targets the wrong repository or account, stop and confirm the host, directory, and authentication context.

## Related docs

Read [Claude Code on a Phone](../../resources/claude-code-on-phone.md) and [Mobile AI Coding](../../resources/mobile-ai-coding.md).
