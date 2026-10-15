# Remote Development From a Phone

Remote development means the repository and its toolchain stay on a host you control or have been authorised to use. The phone is the client: it provides a secure connection, editor, terminal, and review surface. This is usually more reliable than trying to reproduce a large desktop environment on the device.

## When to use it

Use SSH remote development when the repository, build tools, data, or services already belong on a workstation, server, or VPS.

## Main approaches

The phone can be a terminal-only client, a mobile IDE with remote files and Git review, or a browser client for an existing cloud workspace. Choose the client around the task and security policy, while keeping code execution on the host.

## Trade-offs

The host retains full toolchains and project state, but the workflow depends on connectivity, host hardening, and safe reconnection behavior.

## Platforms and prerequisites

This workflow supports NimoteCode on **Android, iPhone and iPad**. Prepare a reachable Linux or macOS SSH host with a permitted account, the repository, Git and its normal build/test tools. Obtain the host address, port, username, credentials and expected host fingerprint from the administrator. Optional `tmux` must be installed on the host before using the persistence example below.

## Connect, edit and verify

1. Create or select an SSH profile in NimoteCode. Enter the host, port and username, then authenticate with a password or private key. Verify the host identity against the administrator's fingerprint; do not accept an unexpected replacement.
2. Select **Remote Explorer**, choose the repository root, and open Terminal in that workspace. Replace the example path:

   ```bash
   hostname
   whoami
   cd /path/to/your/project
   pwd
   git status --short --branch
   git diff
   ```

3. Read the project's README for its verification command and run it once before editing. Make a small edit in the remote editor, save, then run that same check again on the host.
4. Run `git diff --check`, `git diff` and `git status --short`; inspect untracked files separately. Use Source Control for review before deciding whether to commit or push.
5. For a long-running terminal task, start `tmux new -s mobile-dev` on the host before running it. Detach with **Ctrl+b**, then **d**. After reconnecting, inspect `tmux ls`, then use `tmux attach -t mobile-dev`. This preserves the shell on a running host, not the phone's network connection.

## Troubleshooting and limits

| Symptom | Check or next step |
| --- | --- |
| Connection timeout | Confirm host availability, port, VPN/network route and firewall policy. |
| `Permission denied` | Check username, selected key and the host account's authorized keys or password policy. |
| Host fingerprint changed | Stop and verify the change with the administrator before reconnecting. |
| Wrong files or Git branch | Confirm Remote Explorer and Terminal refer to the same host and project root. |
| CLI works on the desktop but not over SSH | Compare `command -v TOOL` and PATH in the remote shell; replace `TOOL` with the missing command. |
| Network drops during a test | Inspect host processes or the existing tmux session before rerunning; disconnecting does not prove the process stopped. |

Builds and debugging depend on tools installed on the host. SSH needs connectivity, and host downtime still interrupts work. This workflow does not require Local Linux on either mobile platform.

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

## Try this workflow in NimoteCode

Install NimoteCode from [Google Play for Android](https://play.google.com/store/apps/details?id=com.nimote.nimotecode) or the [App Store for iPhone and iPad](https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253), then connect your own development host.
