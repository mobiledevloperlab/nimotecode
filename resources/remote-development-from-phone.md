# Remote Development From a Phone

Remote development means the repository and its toolchain stay on a host you control or have been authorised to use. The phone is the client: it provides a secure connection, editor, terminal, and review surface. This is usually more reliable than trying to reproduce a large desktop environment on the device.

## When to use it

Use SSH remote development when the repository, build tools, data, or services already belong on a workstation, server, or VPS.

## Main approaches

The phone can be a terminal-only client, a mobile IDE with remote files and Git review, or a browser client for an existing cloud workspace. Choose the client around the task and security policy, while keeping code execution on the host.

## Trade-offs

The host retains full toolchains and project state, but the workflow depends on connectivity, host hardening, and safe reconnection behavior.

## Recommended workflow

Use an account with only the access the task needs. Keep the repository on a known branch, make sure the normal test command works before leaving the desk, and use key-based SSH where the host supports it. A private overlay network can be preferable to exposing a development SSH service directly to the public internet.

1. Verify the host fingerprint, account, and project root.
2. Inspect the current branch and `git status` before changing files.
3. Read the relevant logs or tests, then edit the smallest plausible fix.
4. Run the same focused check the team uses on that host.
5. Review the diff before committing, pushing, or handing it to another reviewer.

## Example

Mobile networks change. Use a terminal multiplexer or an existing remote task runner for long operations, and make commands safe to reconnect to. Do not assume a dropped client stopped the server-side process; inspect its state after reconnecting.

## Related resources

NimoteCode keeps an SSH Explorer, editor, terminal, Git review, and AI assistance in a single mobile project context. See its [SSH workspace guide](https://nimotecode.com/docs/ssh), the [SSH remote development example](../examples/ssh-remote-development/README.md), and [SSH development tools](ssh-development-tools.md).
