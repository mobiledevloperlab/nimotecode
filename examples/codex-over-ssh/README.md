# Codex on Mobile: Run Codex CLI Over SSH

This workflow uses Codex on the remote machine where it is installed and authenticated. NimoteCode is the mobile editor, SSH terminal, and Git-review context—not a proxy for Codex or a replacement for its setup.

## Goal

Use a host-installed Codex session while retaining editor, terminal, test, and Git review context on mobile.

## Requirements

- An authorised SSH host and repository.
- Codex installed and authenticated on the host according to its official documentation.
- A scoped task and a known repository check.

## Platforms and host preparation

Use Android, iPhone or iPad as the client, with a Linux or macOS development host. Codex CLI is **not bundled with NimoteCode**. The host needs Codex, Git, the project toolchain and provider connectivity; Codex account access and billing are separate from NimoteCode.

Follow the [official Codex CLI installation instructions](https://developers.openai.com/codex/cli) on the host. Check `codex --version` in the same SSH account you will use from mobile. Follow [Codex authentication](https://developers.openai.com/codex/auth); for a headless SSH host, `codex login --device-auth` uses a browser link and one-time code if device login is enabled for your account/workspace. Otherwise follow the documented authentication alternatives.

## Run a first task

1. Follow the [SSH setup guide](../../resources/remote-development-from-phone.md), select the remote repository in Remote Explorer, and open its Terminal.
2. Replace the project path and inspect the host and repository before launching Codex:

   ```bash
   hostname
   cd /path/to/your/project
   pwd
   git status --short --branch
   git diff
   codex --version
   codex
   ```

3. Ask: “Inspect this repository and identify the check for the task. Propose a minimal change; do not commit or push.” Review command approvals and file changes in context.
4. Exit the CLI, run the project's documented check on the host, then run `git diff --check`, `git diff` and `git status --short`. Inspect untracked files in the editor before delivery.

The mobile client needs SSH connectivity. This example does not claim native iOS or Android PRoot support for Codex CLI; keep it on the supported host.

## Troubleshooting

If a command or proposed write targets an unexpected directory, stop and verify the session context. For production access, use a least-privilege host account and the team's approval process.

| Symptom | Check or next step |
| --- | --- |
| `codex: command not found` | Run `command -v codex`; install for the SSH user or fix that user's PATH. |
| Browser login cannot finish on the host | Use the official headless authentication procedure above; device login may need account/admin enablement. |
| Authentication or quota error | Check Codex account access and provider connectivity on the host; NimoteCode sign-in does not authenticate Codex. |
| SSH disconnects | Inspect existing host processes; use the SSH guide's optional tmux workflow for future persistent sessions. |

## Related docs

See [Mobile AI Coding](../../resources/mobile-ai-coding.md) and [Remote Development From a Phone](../../resources/remote-development-from-phone.md).

## Try this workflow in NimoteCode

Check [platform requirements and download instructions](https://nimotecode.com/download?utm_source=github&utm_medium=referral&utm_campaign=developer_workflows&utm_content=guide_codex).

Install NimoteCode from [Google Play for Android](https://play.google.com/store/apps/details?id=com.nimote.nimotecode) or the [App Store for iPhone and iPad](https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253), then connect your own development host.
