---
title: "Nimote Connect: download, install and update"
description: "Choose a Nimote Connect package, install the desktop or CLI, enable remote access, and update it safely."
---

# Nimote Connect: download and setup

In Machines, choose the machine’s SSH connection. A paired device can use Nimote Connect for the network route. NimoteHost runs independently and provides advanced features over authenticated SSH.

**Nimote Connect is required for NimoteCode's paired-device public connection.** Direct SSH to an address you already control, including your own Tailscale IP or MagicDNS name, does not require it. NimoteHost alone does not register a device or provide a public tunnel.

Connect supplies the **network route to the computer’s SSH server**. With the authenticated SSH connection, NimoteCode can open your remote project in IDE, Terminal or AI. Add NimoteHost to keep supported sessions and tasks running after disconnecting.

## Download the correct package

The [Nimote Connect release page](https://github.com/mobiledevloperlab/nimote-connect/releases) currently lists a CLI preview (`v0.2.0-local.8b06897`) for macOS and Linux on arm64 and amd64. The preview bundles Connect and Host. The desktop app and Windows packages below describe package types to look for in future releases.

| Computer | Package and interface | Requirements |
| --- | --- | --- |
| macOS Intel or Apple silicon | `darwin-amd64` or `darwin-arm64` commercial tarball; NimoteConn GUI and CLI | Signed-in graphical user session; enable **System Settings → General → Sharing → Remote Login** |
| Linux x64 or ARM64 | `linux-amd64` or `linux-arm64` commercial tarball; CLI, with NimoteConn GUI only when included in that release | systemd user session and running OpenSSH server |
| Windows x64 or ARM64 | Windows CLI ZIP if listed in that release; no NimoteConn GUI | Signed-in user session and running OpenSSH Server on TCP 22 |

A compatible client is required for preview pairing. General availability of NimoteCode public internet access is planned. Use the package and SHA-256 file from the same release.

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

If the computer already has a reachable SSH address, connect with NimoteCode's **SSH** tab first. With that computer's SSH account, transfer the verified Connect bundle, extract it, and run the appropriate installer above as the user who will own the service. Approve the pairing code and enable remote access on the computer. These are **Connect setup steps**, independent of the Host panel. A first-time Connect public tunnel cannot bootstrap itself: the computer must be reachable through SSH or installed locally before it can be selected as a paired device. The current App does not automate this first-time Connect installation. Automated Connect updates also require a stable, compatible GitHub release configured in the App; a release candidate does not qualify.

To update manually, obtain the newer matching commercial bundle, verify its checksum, extract it and rerun `./install.sh` as the **same user** (Windows: rerun `.\install.ps1`). Let running Host tasks finish first. Existing pairing and Host data are retained. On macOS/Linux, an already paired computer can use `./install.sh --skip-login`; on Windows use `-SkipLogin`. Check `nimoteconnect status`, `nimoteconnect host status`, and `nimoteconnect remote-access status` afterward. For uninstall, run `./install.sh --uninstall` from the bundle (Windows: `.\install.ps1 -Uninstall`).

See the [NimoteHost guide](/docs/host/getting-started) for the separate Community Host installation path.
