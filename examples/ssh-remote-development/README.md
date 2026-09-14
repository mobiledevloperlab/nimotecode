# SSH Remote Development From NimoteCode

Use this workflow when the source tree, build dependencies, or service already belong on a remote host.

## Preconditions

- You have authorisation to access the host and repository.
- The host has a reachable SSH service and a least-privilege account.
- You know the intended repository path and branch.
- The project's normal test or verification command is documented.

## Workflow

1. Create or select an SSH profile in NimoteCode and verify the host, user, and project root.
2. Open the project in Remote Explorer; inspect repository status before editing.
3. Use the editor and terminal in that workspace to make one focused change.
4. Run the project's relevant test, linter, or build command on the remote host.
5. Inspect the Git diff in Source Control. Commit or push only through your team's approved process.

For long-running work, make the command reconnect-safe on the host and check its state after a network interruption. See [Local and Remote SSH Workspaces](https://nimotecode.com/docs/ssh) and [Remote Development From a Phone](../../resources/remote-development-from-phone.md).
