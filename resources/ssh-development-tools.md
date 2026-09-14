# SSH Development Tools: Build a Complete Workflow

An SSH client is only one part of remote development. The useful unit is a workflow that helps you locate a project, change it safely, run a check, and review the result.

## When to use it

Use this guide when choosing a mobile client for a remote repository rather than evaluating an SSH terminal in isolation.

## Main approaches

| Need | Typical capability |
| --- | --- |
| Secure connection | Host verification, private keys, agent forwarding only when necessary |
| Project access | Remote file browser or SFTP-aware Explorer, deliberate project root |
| Editing | Syntax-aware editor, search, tabs, and a usable mobile keyboard strategy |
| Execution | Terminal, persistent session strategy for long-running jobs |
| Review | Git status, diff, history, and a clear commit/push boundary |
| Networking | VPN or private overlay network instead of an unnecessarily public SSH port |

## Trade-offs

A terminal-first client is fast for diagnostics; a mobile IDE helps when the task includes files, test output, and Git review; a cloud IDE can work well when the project already lives there.

## Recommended workflow

Choose the smallest toolset that supports host verification, deliberate project access, editing, execution, and review. Prefer a private overlay network to exposing a development SSH port when the host setup permits it.

## Example

For a one-command diagnosis, a terminal may be sufficient. For a bug fix, open the remote project, make one focused edit, run the project check, and inspect the diff before pushing.

## Related resources

A terminal-first SSH client can be ideal for diagnostics and command-only work. A mobile IDE is useful when a task includes files, edits, test output, and diff review. A browser-based cloud IDE can be best when the project already runs in that provider. Keep credentials and the host's security policy central to the choice.

NimoteCode is a mobile IDE and SSH client aimed at the editor-terminal-Git loop. See [Remote Development From a Phone](remote-development-from-phone.md), the [SSH example](../examples/ssh-remote-development/README.md), and [SSH workspace documentation](https://nimotecode.com/docs/ssh).
