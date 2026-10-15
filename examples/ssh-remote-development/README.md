# SSH Remote Development From NimoteCode

## Goal

Make a focused, reviewable change while the source tree, build dependencies, and service remain on a remote host.

## Requirements

- You have authorisation to access the host and repository.
- The host has a reachable SSH service and a least-privilege account.
- You know the intended repository path and branch.
- The project's normal test or verification command is documented.

## Run the workflow

Follow [SSH remote development](../../resources/remote-development-from-phone.md) for profile setup, host verification and persistent sessions. Before handing off a change, confirm:

| Check | Expected evidence |
| --- | --- |
| Correct workspace | `pwd` and `git status --short --branch` identify the intended repository and branch |
| Saved edit | The file in Remote Explorer matches the diff on the host |
| Verification | The project's documented test/lint/build command and its exit status are recorded |
| Review | `git diff --check` passes; `git diff` and untracked files have been inspected |
| Reconnection | If the network dropped, inspect the existing host process before rerunning the task |

## Troubleshooting

For a dropped connection, reconnect and inspect the server-side process rather than assuming it stopped. Recheck the host fingerprint if it changes unexpectedly.

## Related docs

See [Local and Remote SSH Workspaces](https://nimotecode.com/docs/ssh) and [Remote Development From a Phone](../../resources/remote-development-from-phone.md).
