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

## Update or remove Community

For a manual update, finish active work, download and verify the new matching bundle, then run `setup` from the newly extracted copy. If Host came with Nimote Connect, update through Connect.

`deploy uninstall` removes the idle service and installed bundle while keeping credentials and session records. Run it from an extracted Community bundle or a verified deployment executable outside the installed directory. Follow the [Community guide](https://github.com/mobiledevloperlab/nimotehost/blob/master/docs/community.md) before switching editions.

[Advanced deployment and recovery](https://github.com/mobiledevloperlab/nimotehost/blob/master/docs/deployment.md)

[Overview](/docs/host) · [Troubleshooting](/docs/host/troubleshooting)
