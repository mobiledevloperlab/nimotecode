---
title: "Service management and updates | NimoteHost"
description: "NimoteHost: service management and updates."
---

# Service management and updates

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

[Overview](/docs/host) · [Troubleshooting](/docs/host/troubleshooting)
