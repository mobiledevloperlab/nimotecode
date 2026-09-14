# SSH Remote Development From NimoteCode

## Goal

Make a focused, reviewable change while the source tree, build dependencies, and service remain on a remote host.

## Requirements

- You have authorisation to access the host and repository.
- The host has a reachable SSH service and a least-privilege account.
- You know the intended repository path and branch.
- The project's normal test or verification command is documented.

## Setup

Create or select an SSH profile only after confirming the host fingerprint, least-privilege account, project root, and target branch.

## Workflow

1. Create or select an SSH profile in NimoteCode and verify the host, user, and project root.
2. Open the project in Remote Explorer; inspect repository status before editing.
3. Use the editor and terminal in that workspace to make one focused change.
4. Run the project's relevant test, linter, or build command on the remote host.
5. Inspect the Git diff in Source Control. Commit or push only through your team's approved process.

## Verify

Run the project's documented focused test, linter, or build command on the remote host, then inspect `git diff` before handoff.

## Troubleshooting

For a dropped connection, reconnect and inspect the server-side process rather than assuming it stopped. Recheck the host fingerprint if it changes unexpectedly.

## Related docs

See [Local and Remote SSH Workspaces](https://nimotecode.com/docs/ssh) and [Remote Development From a Phone](../../resources/remote-development-from-phone.md).
