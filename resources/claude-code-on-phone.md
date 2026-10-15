# Claude Code on a Phone: A Remote Workflow

Claude Code is a separate command-line coding tool. A practical mobile workflow runs it on a development host where it is installed and authenticated, while the phone connects to that host over SSH. This preserves the repository, toolchain, and provider authentication on the intended machine.

## Platforms and prerequisites

Use NimoteCode on **Android, iPhone or iPad** to reach a Linux or macOS SSH host. You need the host address, SSH credentials, a repository, its test command, and a Claude account or provider configuration that permits Claude Code use. Provider access and charges are separate from NimoteCode.

Install and authenticate on the **host**, following the [official quickstart](https://code.claude.com/docs/en/quickstart) and [system requirements](https://code.claude.com/docs/en/setup). This guide does not assume Claude Code is bundled or supported inside Android PRoot.

## Start a session from NimoteCode

1. Follow the [SSH connection steps](remote-development-from-phone.md), open the remote repository in Remote Explorer, then open Terminal in that workspace.
2. Replace the path below with your repository. Stop if the host, branch or existing changes are unexpected:

   ```bash
   hostname
   cd /path/to/your/project
   pwd
   git status --short --branch
   git diff
   claude --version
   ```

3. Run `claude` on the host. Complete its login prompts if needed; use `/login` inside Claude Code to re-authenticate. Keep login links and codes private.
4. Start with a bounded request: “Inspect the failing test and explain the cause. Propose a small fix; do not commit or push.” Review any requested actions before granting permission.
5. Inspect changed files in NimoteCode's editor. After leaving the CLI, run the project's documented test in the same host directory, then `git diff --check`, `git diff` and `git status --short`. Review untracked files too: they do not appear in `git diff`.

## Troubleshooting and limits

| Symptom | Check or next step |
| --- | --- |
| `claude: command not found` | Run `command -v claude` in the SSH terminal. Install for that host user or correct its PATH using the official setup instructions. |
| Login or access fails | Check the account, provider access and host internet connection; use the CLI's login prompts rather than NimoteCode sign-in. |
| Connection drops | Reconnect to the same host and directory; inspect existing processes before starting another session. For future long sessions, use host-installed `tmux` as described in the SSH guide. |
| Proposed edits target the wrong files | Stop and verify `pwd`, repository root and branch before continuing. |

The phone needs SSH connectivity and the host needs provider connectivity. A CLI conversation is not proof that tests passed. iOS does not provide NimoteCode Local Linux.

## Related resources

NimoteCode does not install, proxy, or authenticate Claude Code. It provides the mobile SSH workspace around it: remote Explorer, editor, terminal, and Git review. See the [Claude Code over SSH example](../examples/claude-code-over-ssh/README.md), [mobile AI coding guide](mobile-ai-coding.md), and [remote development workflow](remote-development-from-phone.md).

## Try this workflow in NimoteCode

Check [platform requirements and download instructions](https://nimotecode.com/download?utm_source=github&utm_medium=referral&utm_campaign=developer_workflows&utm_content=guide_claude_code).

Install NimoteCode from [Google Play for Android](https://play.google.com/store/apps/details?id=com.nimote.nimotecode) or the [App Store for iPhone and iPad](https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253), then connect your own development host.
