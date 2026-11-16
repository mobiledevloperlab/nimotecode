---
title: "Host mode: install NimoteHost and reconnect to terminals and Agents | NimoteCode"
description: Install NimoteHost on Linux, macOS, or Windows, connect from NimoteCode over SSH, and use remote terminals, tasks, Agent sessions, and the task inbox.
---

# Keep remote work running with Host mode

Use Host mode when you want to start work from your phone, leave the app, and come back to the result. NimoteHost runs on your development computer and keeps its tasks and terminals there. NimoteCode uses SSH to show their output, send input, and handle Agent approvals.

Install Host on the computer that runs your project first. Installing NimoteCode on the phone alone does not set up Host.

This guide follows the 2.4.0 implementation. NimoteHost is a development preview; available Agent, inbox, and plugin controls depend on the connected Host. The screenshots are from a physical Android phone using English and the Light theme. At capture time, the app package was labeled 2.3.1 (Build 64) and Host reported a local 2.4.0 build, so some labels may differ in your installed version.

## Before you start

You need a Linux, macOS, or Windows computer that you can reach over SSH, NimoteCode 2.4.0 with a compatible NimoteHost, and a project directory the remote account can access. The workspace path you enter later belongs to the computer, not the phone.

If SSH is new to you, set up a connection using [Local and SSH workspaces](/docs/ssh) first. For Windows, see [Windows SSH and SFTP](/docs/windows-ssh-sftp). Host does not configure SSH for you.

## 1. Download NimoteHost

Open the [NimoteHost releases page](https://github.com/mobiledevloperlab/nimotehost/releases) and choose a complete distribution for your computer. The CLI is enough for a server. Choose a GUI bundle if you also want a desktop window for managing Host.

| Computer | OS label | Architecture |
| --- | --- | --- |
| Linux | linux | amd64 for 64-bit Intel/AMD; arm64 for 64-bit ARM |
| macOS | darwin | arm64 for Apple Silicon; amd64 for Intel |
| Windows | windows | amd64 for x64 PCs; arm64 for ARM PCs |

Linux and Windows also have 386 CLI builds for 32-bit x86, without a GUI. There is no 32-bit macOS build.

Download the accompanying SHA256 checksum file. Compare it with the hash calculated by `sha256sum` on Linux, `shasum -a 256` on macOS, or `Get-FileHash -Algorithm SHA256` in PowerShell before extracting the archive.

Keep the extracted bundle together: binaries, installation scripts, licenses, `BUILD.json`, `MODULES.json`, and `SHA256SUMS`. A GUI executable by itself is not the full bundle. Once a service uses an installed path, keep its files in place.

If a matching download is unavailable, follow the [Host repository instructions](https://github.com/mobiledevloperlab/nimotehost) to build from source. Source installation needs Go 1.26.5 or later; prebuilt distributions do not need Go.

## 2. Install and start it on the computer

Run these commands on your development computer using the same account you will use for SSH.

### Linux and macOS

Open a terminal in the extracted bundle:

```sh
sh scripts/install.sh
./nimotehost status
./nimotehost capabilities
```

The installer verifies the bundle, copies it to a fixed user directory, installs a user service, and checks readiness. Run it as your ordinary user, without `sudo`. Check that `status` reports `running: true` before connecting from your phone.

The commands above use the executable in the extracted directory. You can also use `nimotehost status` once the installed command is on PATH. The phone's SSH environment must be able to find it too: an interactive terminal and a noninteractive SSH command may have different paths.

### Windows

Open PowerShell in the extracted bundle:

```powershell
.\scripts\install.ps1
.\nimotehost.exe status
.\nimotehost.exe capabilities
```

Use the same Windows account for SSH. A matching recent client reads that account's `%APPDATA%\nimotehost\discovery.json` to locate the CLI, then falls back to the fixed installation location and SSH PATH.

To try the CLI without installing a service, run `nimotehost.exe start` from its local directory and leave the window open. For regular use, install the user service from a complete bundle. If you move a portable executable, start Host again from the new location.

### Try it in the foreground

On Linux or macOS, use `./nimotehost start` from the bundle; on Windows, use `.\nimotehost.exe start`. Leave that window open. You do not need another copy if the service is already running.

Host listens on the computer's loopback interface. Your phone reaches it through SSH; do not enter Host's local HTTP port as the phone connection or expose it to the internet.

## 3. Choose Host and your SSH connection

1. Choose **Host** from NimoteCode's mode entry or the mode menu in an existing workspace.
2. On the setup screen, tap **SSH connections**.
3. Pick the computer and account where you installed Host. Use **New Remote Connection** if you have not saved it yet.
4. Verify the SSH host key on the first connection. Once connected, you should see the session list. An empty list is normal on a new Host.

<div class="doc-screenshots">
  <DocScreenshot file="host-mode.png" caption="Choose Host from the welcome screen alongside IDE, Terminal, and AI." />
  <DocScreenshot file="host-setup.png" caption="Before a host is selected, the setup screen asks you to install the service and choose an SSH connection." />
</div>

If the app reports a missing, stopped, or incompatible Host, fix that condition and retry. Discovering a stopped Host does not automatically start it.

## 4. Open a terminal first

1. Tap **+** and select **Terminal** in the new-session window.
2. Enter the workspace directory or use the folder button. It must already exist on the remote computer and be accessible to your SSH account.
3. Tap **Start session** and wait for a shell prompt.
4. Run `pwd`, then `echo Host connected` to check the directory and output. In Windows PowerShell, use `Get-Location` for the directory.

<div class="doc-screenshots">
  <DocScreenshot file="host-terminal.png" caption="The demo terminal ran pwd and echo Host connected. The output remained after returning to the list and reopening it." />
</div>

This example uses `/tmp/nimote-host-guide`. On macOS, `pwd` may show `/private/tmp/nimote-host-guide`; both paths point to the same location. Use your project directory instead, and keep important files out of temporary directories.

Returning to the list leaves the shell running. To end the demo shell, enter `exit` or use the session's stop button. Once stopped, opening its history shows retained output; it does not bring the process back.

## 5. Return to the same session

In **Sessions**, search by name or directory, choose **All**, **Running**, or **History**, and open the session. Its menu includes pinning, renaming, and other actions.

<div class="doc-screenshots">
  <DocScreenshot file="host-sessions.png" caption="Filtering by the demo directory shows just the new terminal. Running means the process is still active on the computer." />
</div>

After leaving the app or losing SSH, reconnect to the same Host. If Host and the managed process are still running, you can reattach without executing the original command again.

Sleep, logout, and a Host or OS restart are different. Host does not resurrect processes after a restart; unfinished sessions become interrupted. On Linux, logout behavior depends on user-service and lingering settings. macOS and Windows user services also depend on the login session.

If session creation times out, refresh the list before trying again. Check whether the first request created a session already.

## 6. Run a one-off task

Choose **+ → Task**, select the directory, enter a command, and start it. Try `echo Host connected` first, then use your project's build or test command once the directory and output look right.

When it finishes, read the exit code and log. A task called “Tests” is only a name; check what actually ran and what it reported. Use **Terminal** for commands that need ongoing interaction.

## 7. Start an Agent conversation

Install and sign in to the Agent on your computer first. Host discovers compatible Codex, Claude Code, and OpenCode installations. Structured Claude conversations also need a compatible `claude-agent-acp` adapter. Host does not download these tools or supply model accounts or credits.

1. Tap **+ → Agent** and check the project directory.
2. Select an **Installed agent**. If there is no Agent tab, check the CLI installation, login, and PATH available to the Host service on the computer.
3. Choose an execution policy. Start with confirmation for each native permission request if you want to review them individually. **Smart execution** handles verifiable workspace reads, searches, and structured edits automatically, while sensitive or unknown operations still ask.
4. Start with a small request, such as “Find the test commands in this project; don't edit files yet.” Read the tool output before asking for changes.

<div class="doc-screenshots">
  <DocScreenshot file="host-agent-form.png" caption="Agent setup with directory, installed Agent, execution policy, and conversation controls. This screenshot shows configuration only; no model task was started." />
</div>

Automatic approvals apply to native permission requests in this session and still respect the Agent's own sandbox. They do not enable automatic code publication. An independent worktree, where supported, starts a new branch from committed HEAD and leaves uncommitted files in the original workspace.

Inside the conversation, inspect tool details, respond to approvals, and use the model and command controls offered by the Host. Supported Agents accept follow-up instructions while running. To resume history, choose the provider's original conversation. Opening a terminal does not guarantee that an arbitrary running CLI becomes the same structured conversation.

## 8. Review work in the task inbox

If supported, **Task inbox** appears above the session list. Use it to find approvals, failures, running tasks, and completed work awaiting review. Open a task to see its original session, verification records, and diff.

Check whether a test actually ran, its exit code, and the revision it tested. An Agent saying “passed” is not a test record. Expired or unknown verification is not a pass for the current revision.

Mark work handled or archive it when you have reviewed it. Pending approvals cannot be hidden this way. Return to the original session for corrections, and check the Host and directory before opening Git review.

To dispatch a GitHub Issue, use the supported dispatch entry to select the Issue, Host directory, Agent, test command, and publication policy. The computer needs an installed, authorized `gh`; your phone's GitHub login is not copied to Host. Leave publication manual for your first task, review the diff and verification, then publish when ready. Automatic publication must be explicitly selected when dispatching. Host does not automatically merge PRs.

## 9. Open Host plugins

After connecting over SSH, look for the current Host's plugins in application configuration. Available plugins open from the sidebar; their forms and actions depend on the plugin. Resolve permission or compatibility errors before retrying an operation. See the [plugin guide](/docs/plugins).

## If it will not connect

| What you see | What to check first |
| --- | --- |
| SSH fails | Address, port, account, network, and host key. Get ordinary SSH working first. |
| Host not found | Installation under the SSH account; the noninteractive SSH PATH on Unix; that user's discovery file and installation path on Windows. |
| Host found but stopped | Run `nimotehost status` on the computer, then start it using your chosen service or foreground setup. |
| Incompatible protocol | Update the app and Host to matching versions. |
| No Agent to select | CLI and adapter installation, login, and the Host service's PATH. After a tool-path change, finish active tasks before refreshing the service environment. |
| Output is visible but input does not work | You may be viewing cached history. Check that you are connected and that the session is still running. |
| Directory or permission error | Use an absolute remote path that the SSH account can enter. |
| No result after starting | Refresh and look for the original session before creating another. |

Finish active work before stopping, restarting, or updating Host. Updates keep records, but do not move running processes into the new service.

More help: [SSH workspaces](/docs/ssh) · [AI and Agent](/docs/ai) · [Tasks](/docs/tasks) · [Host implementation notes](https://github.com/mobiledevloperlab/nimotehost/blob/master/docs/completed.md)
