---
title: "Nimote Connect: download, install and update"
description: "Choose a Nimote Connect package, install the desktop or CLI, enable remote access, and update it safely."
---

# Nimote Connect: download and setup

In Machines, choose the machine’s SSH connection. A paired device can use Nimote Connect for the network route. NimoteHost runs independently and provides advanced features over authenticated SSH.

**Nimote Connect is required for NimoteCode's paired-device public connection.** Direct SSH to an address you already control, including your own Tailscale IP or MagicDNS name, does not require it. NimoteHost alone does not register a device or provide a public tunnel.

Connect supplies the **network route to the computer’s SSH server**. With the authenticated SSH connection, NimoteCode can open your remote project in IDE, Terminal or AI. The Host service bundled with Connect keeps supported sessions and tasks running after disconnecting.

## Download the correct package

The [Nimote Connect release page](https://github.com/mobiledevloperlab/nimote-connect/releases) provides stable CLI packages with Connect and Host for macOS, Linux, and Windows on arm64 and amd64. A GUI option is available only for targets with a matching desktop package in the selected release.

| Computer | Package and interface | Requirements |
| --- | --- | --- |
| macOS Intel or Apple silicon | `darwin-amd64` or `darwin-arm64` tarball; CLI, with NimoteConn GUI when included | Signed-in graphical user session; enable **System Settings → General → Sharing → Remote Login** |
| Linux x64 or ARM64 | `linux-amd64` or `linux-arm64` tarball; CLI, with NimoteConn GUI only when included in that release | systemd user session and running OpenSSH server |
| Windows x64 or ARM64 | CLI ZIP; install directly on Windows | Signed-in user session and running OpenSSH Server on TCP 22 |

Use the package and SHA-256 file from the same release. Public access requires a compatible NimoteCode client and device pairing.

## Install and pair

On macOS or Linux, extract the complete commercial tarball, open a terminal in its extracted directory, and run as the **same desktop user who will own the service** (no `sudo`):

```sh
./install.sh
```

The current commercial bundle packages Connect and Host together. Connect's public SSH route works independently of entering NimoteHost sessions. On Windows, extract the CLI ZIP and run in PowerShell as the signed-in user:

```powershell
.\install.ps1
```

Sign in and approve the computer's pairing code in NimoteCode. On macOS open `~/Applications/NimoteConn.app`; on Linux, if the release includes the desktop app, run `~/.local/bin/nimoteconn`. In **NimoteConn → Connect → Remote access**, select **Enable remote access**. The service starts with public access disabled. Wait for **Online**, then select the computer in **Machines** and authenticate with its SSH account. Choose IDE, Terminal or AI for the project. Verify the SSH host fingerprint on first connection.

For a CLI-only installation, use these commands from the installed command path (`~/.local/bin/nimoteconnect` on macOS/Linux; `%LOCALAPPDATA%\NimoteConnect\nimote-connect.exe` on Windows):

| Command | Purpose |
| --- | --- |
| `nimoteconnect status` | Check the Connect background service |
| `nimoteconnect host status` | Check the bundled Host service |
| `nimoteconnect remote-access status` | See whether public access is disabled, registering, or online |
| `nimoteconnect remote-access enable` | Explicitly enable public access |
| `nimoteconnect remote-access disable` | Disable public access |
| `nimoteconnect doctor` | Show local diagnostics, including SSH port and service state |
| `nimoteconnect restart` | Restart Connect after changing its configuration |
| `nimoteconnect logout` | Unbind this computer from the account |

On Windows, replace `nimoteconnect` in the table with `& "$env:LOCALAPPDATA\NimoteConnect\nimote-connect.exe"` in PowerShell. The CLI and GUI change the same per-user remote-access setting. If the computer does not appear, check `remote-access status`, the SSH server, account pairing and network status before retrying.

## Set up a computer reachable by SSH, then update

On macOS and Linux, first connect over SSH in NimoteCode. Then open **Machines → Host → Install Nimote Connect**, or use the install option under **Connect / Tailscale**. The wizard loads the stable release list from nimotecode.com, downloads from GitHub, and verifies the package. Approve pairing if prompted. On Windows, follow the manual steps above. For first-time public access, use existing SSH or install locally before selecting the paired computer.

To update manually, obtain the newer matching commercial bundle, verify its checksum, extract it and rerun `./install.sh` as the **same user** (Windows: rerun `.\install.ps1`). Let running Host tasks finish first. Existing pairing and Host data are retained. On macOS/Linux, an already paired computer can use `./install.sh --skip-login`; on Windows use `-SkipLogin`. Check `nimoteconnect status`, `nimoteconnect host status`, and `nimoteconnect remote-access status` afterward. For uninstall, run `./install.sh --uninstall` from the bundle (Windows: `.\install.ps1 -Uninstall`).

See [Host setup](/docs/host/getting-started) to start using the included service in NimoteCode.
