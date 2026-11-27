---
title: "Service management and updates | NimoteHost"
description: "NimoteHost: service management and updates."
---

# Service management and updates

Use the CLI on the computer running Host, under the same account you use for SSH. The examples assume the installed command is on PATH. Otherwise use the full path shown below.

Run one command to confirm the service is available. For commands below, replace `nimotehost` with the full path if needed.

```sh
"$HOME/.local/share/nimotehost/nimotehost" deploy status
```

```powershell
& "$env:LOCALAPPDATA\NimoteHost\nimotehost.exe" deploy status
```

## Check and start Host

| Command | Effect |
| --- | --- |
| `nimotehost --version` | Show the installed CLI’s version. |
| `nimotehost deploy status` | Check the managed installation. `"running": false` means the service is stopped. |
| `nimotehost deploy start` | Start an already installed background service and wait until it responds. |
| `nimotehost deploy stop` | Stop an idle background service. The command refuses to interrupt active work. |
| `nimotehost agents` | Check which Agent tools the running Host can find. |
| `nimotehost tools refresh` | Refresh Host’s tool discovery after changing the tool installation or configuration, without restarting sessions. |

## Update Nimote Connect

Finish active Host tasks, then use the Nimote Connect update prompt in NimoteCode on supported macOS and Linux computers. For manual updates or uninstall, follow the [Nimote Connect guide](/docs/connect) and use the original installation account.

[Nimote Connect Releases](https://github.com/mobiledevloperlab/nimote-connect/releases) · [Overview](/docs/host)
