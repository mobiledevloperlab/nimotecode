---
title: "Host mode: open-source remote tasks and coding Agents | NimoteCode"
description: "Keep terminals, tasks, and coding Agents running on your computer after disconnecting. Explore NimoteHost capabilities, Apache-2.0 source, customization, contribution, and deployment."
---

# Host mode: an open-source workspace for remote tasks and Agents

Manage terminals, tasks, and coding Agents on your development computer from your phone. Disconnect while work continues, then reconnect to review progress and respond to approvals.

## Download NimoteHost {#download-nimotehost}

<HostDownload />

## What Host brings to your workflow

Host turns your development computer into a workspace you can return to from your phone. Start work where the project and tools already live, let the computer do the execution, and use NimoteCode to check progress and make decisions.

| Capability | What you gain |
| --- | --- |
| Managed terminals and tasks | Start builds, tests, scripts, or an interactive shell. Client disconnection does not end the managed process; reconnect to review retained output and continue work. |
| Structured coding Agents | Use compatible Codex, Claude Code, and OpenCode installations. Read conversations and tool results, respond to approvals, and send follow-up instructions where supported. |
| Sessions and task inbox | Search, filter, and pin work; find pending approvals, failed tasks, and results awaiting review without reopening each session. |
| Verification and code review | Inspect actual test records, exit codes, and diffs before accepting a result. Supported GitHub Issue dispatch connects an issue to an Agent task and your selected publication policy. |
| Your own environment | Run against the project's existing toolchain and files on Linux, macOS, or Windows. Choose a server CLI or a desktop manager using the same Host service. |
| Open-source customization | Review the full Host source, compile your own build, change its behavior, add integrations, and contribute improvements under Apache-2.0. |

For example, start your project's test command before leaving your desk, then check its exit code from your phone. Ask an Agent for a focused fix, review the tool calls and permission requests, and return later to inspect the diff and verification. Host keeps execution on the computer while the client supplies your view and controls.

Host and its processes must stay running. A Host or OS restart does not restore the original processes. Agent, inbox, verification, Issue, and plugin controls depend on the connected Host and installed tools. Install Host on the computer running the project before connecting the phone.

## NimoteCode and NimoteHost

**NimoteCode is the client; NimoteHost runs the work on your computer.** NimoteHost is a standalone CLI and optional desktop manager for Linux, macOS, and Windows. Its complete source is licensed under Apache-2.0 in the [NimoteHost repository](https://github.com/mobiledevloperlab/nimotehost). NimoteCode remains a commercial, closed-source app. Host can also run independently of NimoteCode, with RPC, a Go client package, and an opt-in MCP interface for other integrations.

The connection is: **NimoteCode → your existing SSH connection → NimoteHost → project tools and Agents**. There is no additional Nimote account, public relay, or Host port to open. Host authenticates its local API and keeps its credentials on the computer. Commands run with the Host account's permissions; use separate OS accounts when you need separate users or trust boundaries.

| Choose | When it fits |
| --- | --- |
| Ordinary SSH workspace | Edit remote files, use a terminal, and review Git without installing Host. |
| Host mode | Leave tasks running after the client disconnects, return to their output, and manage compatible structured Agent conversations and approvals. |
| Host CLI | Deploy on a server or manage the service from a shell. No desktop environment needed. |
| Host desktop bundle | Manage service status, sessions, devices, settings, and diagnostics on the computer. Includes the CLI. |

This guide follows the 2.4.0 implementation. NimoteHost is a development preview; available Agent, inbox, and plugin controls depend on the connected Host. The screenshots are from a physical Android phone using English and the Light theme. Some session screenshots were captured with app 2.3.1 (Build 64) and a local 2.4.0 Host build; labels may differ in your installed version.

## Fully open-source Host: inspect, customize, and contribute

**NimoteHost's complete source is licensed under Apache-2.0**, including the Host runtime, CLI, desktop manager, and integration SDKs. This gives you a concrete way to inspect how remote execution, credentials, and session persistence work, build the software yourself, and adapt it to your environment. The license covers NimoteHost; the NimoteCode client remains commercial and closed source.

- **Review and build:** read the implementation and dependencies, inspect the license notices, and build from source using the instructions below.
- **Customize your deployment:** fork the repository, modify Host behavior or the desktop manager, and maintain your own build. Keep your changes compatible with the app's protocol and capabilities.
- **Extend your workflow:** create community plugins with `pkg/pluginsdk`, connect your tools through RPC or MCP, or use `pkg/hostclient` for a Go integration. MCP is read-only by default; writes require explicit opt-in.
- **Contribute upstream:** open issues with reproducible problems or proposals, and submit pull requests for fixes, Agent adapters, plugins, translations, and documentation. Discuss substantial protocol or architecture changes first and run the checks in the contribution guide.

[Browse the source](https://github.com/mobiledevloperlab/nimotehost) · [Apache-2.0 license](https://github.com/mobiledevloperlab/nimotehost/blob/master/LICENSE) · [Contribution guide](https://github.com/mobiledevloperlab/nimotehost/blob/master/CONTRIBUTING.md) · [Plugin SDK](https://github.com/mobiledevloperlab/nimotehost/blob/master/docs/plugin-system/plugin-sdk.md)

### Transparent implementation and controlled access

Host uses your authenticated SSH connection; its HTTP API listens only on loopback and requires local authentication. Host credentials remain on the computer, so there is no additional Nimote relay or public API port to manage. You choose where it runs and can review or modify the code that handles access.

Commands run with the Host OS account's authority. Use an appropriately scoped account, review Agent and plugin permissions, and keep dependencies current. Agent prompts and project context may be sent to the model provider configured in that Agent. Open source makes independent review possible; it is not a guarantee of zero vulnerabilities or a claim of a completed independent audit. See the [security policy and private reporting process](https://github.com/mobiledevloperlab/nimotehost/blob/master/SECURITY.md).

## Before you start

You need a Linux, macOS, or Windows computer that you can reach over SSH, NimoteCode 2.4.1 or later with Host mode, a compatible NimoteHost, and a project directory the remote account can access. The workspace path you enter later belongs to the computer, not the phone. Installing Host does not add Host mode to an older app.

For background operation, Linux needs a working systemd user manager; macOS needs the user's GUI login session; Windows uses a per-user login scheduled task. Without the required service manager, try foreground operation. Keep the computer awake and reachable. Across networks, use a reachable SSH address or your existing VPN; installing Host does not make a private address reachable.

If SSH is new to you, set up a connection using [Local and SSH workspaces](/docs/ssh) first. For Windows, see [Windows SSH and SFTP](/docs/windows-ssh-sftp). Host does not configure SSH for you.

## 1. Download NimoteHost

Open the [NimoteHost releases page](https://github.com/mobiledevloperlab/nimotehost/releases) and choose a complete distribution for your computer. The CLI is enough for a server. Choose a GUI bundle if you also want a desktop window for managing Host.

Release names follow `nimotehost-<version>-<os>-<arch>` for CLI and `nimotehost-gui-<version>-<os>-<arch>` for desktop bundles. Linux/macOS archives use `.tar.gz`; Windows uses `.zip`. Download the binary distribution rather than GitHub's automatically generated source archive unless you intend to compile it. Check the release notes for platform requirements; Linux desktop bundles target glibc 2.35 or newer, and macOS bundles are unsigned and not notarized.

| Computer | OS label | Architecture |
| --- | --- | --- |
| Linux | linux | amd64 for 64-bit Intel/AMD; arm64 for 64-bit ARM |
| macOS | darwin | arm64 for Apple Silicon; amd64 for Intel |
| Windows | windows | amd64 for x64 PCs; arm64 for ARM PCs |

Linux and Windows also have 386 CLI builds for 32-bit x86, without a GUI. There is no 32-bit macOS build.

Download the accompanying SHA256 checksum file. Compare it with the hash calculated by `sha256sum` on Linux, `shasum -a 256` on macOS, or `Get-FileHash -Algorithm SHA256` in PowerShell before extracting the archive.

For example, replace the sample filename with your downloaded archive:

```sh
# Linux
sha256sum nimotehost-2.4.0-linux-amd64.tar.gz
# macOS
shasum -a 256 nimotehost-2.4.0-darwin-arm64.tar.gz
```

```powershell
Get-FileHash -Algorithm SHA256 .\nimotehost-2.4.0-windows-amd64.zip
```

Compare the digest with the adjacent `.sha256` file from the same release. Use your archive manager to extract the complete archive and open a terminal in the folder containing `nimotehost` or `nimotehost.exe` and `scripts`. Checksums check file integrity; obtain both files from the official release.

Keep the extracted bundle together: binaries, installation scripts, licenses, `BUILD.json`, `MODULES.json`, and `SHA256SUMS`. A GUI executable by itself is not the full bundle. Once a service uses an installed path, keep its files in place.

### Install from source {#host-source}

Source installation needs Git and Go 1.26.5 or later; prebuilt distributions do not need Go. Run the following as your ordinary user on the development computer. With a supplied source checkout, enter its root and run the last command:

```sh
git clone https://github.com/mobiledevloperlab/nimotehost.git
cd nimotehost
go run ./tools/install
```

The Go installer works in Unix shells and PowerShell. It builds, verifies, installs, and starts the CLI service; it does not build the desktop GUI. To build a distribution without installing it, use `go run ./tools/build`. For the desktop build, use `go run ./tools/build -gui` with the native desktop SDK and C compiler described in the repository. Keep app and Host versions compatible; a source build does not guarantee compatibility with an older store client.

## 2. Install and start it on the computer {#host-install}

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

### Open the desktop manager

After installing a GUI bundle, open `NimoteHost.app` on macOS, `nimotehost-gui.exe` on Windows, or `nimotehost-gui` on Linux from the installed directory. Overview shows service status; Sessions provides search and status filters; Devices manages restricted device access; Settings contains language, theme, and local service controls. Help & diagnostics provides logs and diagnostic export. Restricted devices require SSH key configuration; registering a device alone does not restrict an ordinary SSH login.

Closing the desktop window leaves Host and its sessions running. Use the explicit stop action to stop work. Windows/macOS close hides to the tray; Linux tray behavior depends on the desktop. The desktop manager uses the same Host service as the phone.

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

## Service management, updates, and local data

Use the installed CLI for routine maintenance. On Linux/macOS it is `~/.local/share/nimotehost/nimotehost`; on Windows, invoke `& "$env:LOCALAPPDATA\NimoteHost\nimotehost.exe"` in PowerShell. The commands below assume that directory is on PATH; otherwise use the full executable path.

| Command | Effect |
| --- | --- |
| `nimotehost version` | Show the executable version. |
| `nimotehost status` | Check whether the service responds; a running Host returns `running: true`. |
| `nimotehost capabilities` | Inspect protocol, platform, features, and detected tools. |
| `nimotehost agents` | Probe installed Agent versions. |
| `nimotehost install` | Register and start the user service from its fixed executable path. |
| `nimotehost stop` | Stop Host and its active tasks. |
| `nimotehost restart` | Restart the installed service and terminate active tasks. |
| `nimotehost uninstall` | Stop and remove the service; retain credentials and records. |

For a stopped installed service, use `nimotehost restart`; `nimotehost start` runs in the foreground. `setup` verifies and installs an entire bundle; `install` registers the executable already in place. Do not run these through sudo or a different account.

### Check the same environment used by SSH

From another computer, replace `user@host` with your SSH destination:

```sh
ssh user@host 'command -v nimotehost && nimotehost status'
```

This example is for a Unix host. If the command is missing, check the fixed path directly:

```sh
ssh user@host '$HOME/.local/share/nimotehost/nimotehost status'
```

If the absolute path works, make the installed directory visible to the SSH noninteractive PATH before retrying in the app. For Windows, check the same account's discovery record and fixed path described above. The Host service also needs to find installed Agent tools; Unix installation captures absolute PATH entries and `XDG_CONFIG_HOME`. After changing tool paths, finish active work, run `nimotehost stop`, then `nimotehost install` from the installed executable in the corrected environment.

### Update or remove Host

Download and verify a compatible new complete bundle, finish active work, and run its installer as the same user. The setup flow preserves the previous bundle, checks readiness, and refuses to interrupt active tasks; repeating an unchanged healthy installation does not restart it. Close an older GUI first. For an earlier preview using the old executable name, follow the repository's migration instructions rather than manually renaming state directories.

After updating, check `version`, `status`, and `capabilities`, reconnect, and open a small test session. Back up state before a downgrade; older binaries may reject newer records. To remove login startup, run `nimotehost uninstall` while the installed executable is still present, then remove installed bundle files if no longer needed. Uninstalling the service keeps local identity, credentials, and task records.

| System | Installed bundle | Default configuration and state directory |
| --- | --- | --- |
| Linux | `~/.local/share/nimotehost` | `~/.config/nimotehost` (or `$XDG_CONFIG_HOME/nimotehost`) |
| macOS | `~/.local/share/nimotehost` | `~/Library/Application Support/nimotehost` |
| Windows | `%LOCALAPPDATA%\NimoteHost` | `%APPDATA%\nimotehost` |

The state directory contains private Host identity, credentials, configuration, and session records. Back it up only while Host is stopped, preserve owner-only permissions, and keep it out of public repositories and issue attachments. Back up project files and Agent-provider data separately; copying Host records cannot restore a running process.

### Inspect service failures

- Linux: `systemctl --user status nimotehost.service` and `journalctl --user -u nimotehost.service -n 50 --no-pager`. If no user manager is available, use foreground operation; logout survival requires an appropriate lingering policy.
- macOS: `launchctl print gui/$(id -u)/com.nimotehost` in the logged-in user's session. Without that GUI session, try the CLI in the foreground.
- Windows: `schtasks.exe /Query /TN NimoteHost /V /FO LIST`. Check that you installed under the intended logged-in account.

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
