# Claude Code Over SSH From a Phone

This workflow keeps Claude Code on a remote development host. NimoteCode supplies the mobile SSH workspace around it; it does not install, operate, or authenticate Claude Code.

## Workflow

1. Install and authenticate Claude Code on the host according to its official documentation.
2. Connect to that host in NimoteCode and open the intended repository.
3. Inspect the branch and current diff before starting or continuing the CLI session in Terminal.
4. Ask for a bounded task, inspect changed files in the editor, and review every command with the host and directory in mind.
5. Run the repository's relevant checks, then review the Git diff before committing or handing off the change.

Avoid exposing provider credentials in pasted terminal output. For the principles behind this setup, read [Claude Code on a Phone](../../resources/claude-code-on-phone.md) and [Mobile AI Coding](../../resources/mobile-ai-coding.md).
