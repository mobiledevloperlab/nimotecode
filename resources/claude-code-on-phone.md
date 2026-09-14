# Claude Code on a Phone: A Remote Workflow

Claude Code is a separate command-line coding tool. A practical mobile workflow runs it on a development host where it is installed and authenticated, while the phone connects to that host over SSH. This preserves the repository, toolchain, and provider authentication on the intended machine.

## Before starting

Prepare the remote host using Claude Code's official installation and authentication instructions. Confirm that the account, repository, branch, and permissions are appropriate for the task. Do not paste credentials into chat transcripts or shell history unnecessarily.

## Work loop

1. Connect over SSH and change to the intended project directory.
2. Inspect the repository state and tests before asking for an edit.
3. Start or continue the Claude Code session on the host.
4. Read proposed commands and changes in context; use the editor to inspect affected files.
5. Run the repository's relevant checks, then review the Git diff before delivery.

NimoteCode does not install, proxy, or authenticate Claude Code. It provides the mobile SSH workspace around it: remote Explorer, editor, terminal, and Git review. See the [Claude Code over SSH example](../examples/claude-code-over-ssh/README.md) and [mobile AI coding guide](mobile-ai-coding.md).
