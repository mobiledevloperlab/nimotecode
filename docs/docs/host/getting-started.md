---
title: "Download and installation | NimoteHost"
description: "NimoteHost: download and installation."
---

# Download and installation

**NimoteHost currently supports local network (LAN) connections only.** Connect your phone and Host computer to the same local network and use the computer’s local address for SSH.

## Start here

You need a Linux, macOS, or Windows computer reachable over SSH, and a project folder the SSH user can open. Use that same account for installation and connection. To connect from your phone, use NimoteCode 2.4.1 or later with Pro and a compatible Host.

## Open Host in NimoteCode {#install-over-ssh}

In NimoteCode 2.5.0, connect through **Host** and follow the setup prompt if it appears. The computer needs access to GitHub Releases. If you use Nimote Connect, follow the setup or update instructions for that edition.

## Install from a downloaded bundle {#host-install}

Community 2.5.0 is available as CLI and desktop bundles. If SSH setup is unavailable or cannot download the release, use the manual installation below.

Choose the complete [Community release bundle](https://github.com/mobiledevloperlab/nimotehost/releases/tag/community-v2.5.0) for your computer. Pick **CLI** for a server or **Desktop** for a graphical manager that also includes the CLI. See [package selection](/docs/host/compatibility) for CPU and OS requirements. Verify the archive’s SHA-256 before extracting the entire bundle. [Verification instructions](https://github.com/mobiledevloperlab/nimotehost/blob/master/docs/deployment.md#install-from-a-website-download) On the release page, CLI archives start with `nimotehost-` and desktop archives with `nimotehost-gui-`.

Open a terminal in the extracted folder as the same user you use for SSH. On Linux and macOS, run setup without `sudo`.

### Linux or macOS

```sh
./nimotehost setup
./nimotehost deploy status
```

### Windows PowerShell

```powershell
.\nimotehost.exe setup
.\nimotehost.exe deploy status
```

`setup` installs the bundle and starts a per-user service. `deploy status` checks the installation. Look for `"running": true`, then open **Host** in NimoteCode, choose your SSH connection, and enter the project folder on the computer.

The service needs a systemd user manager on Linux and a logged-in desktop user on macOS or Windows. For a foreground trial or a machine without a user service, run `./nimotehost start` (Windows: `.\nimotehost.exe start`) from the extracted bundle and leave the terminal open.

### Build from source {#host-source}

See the [source build and installation guide](https://github.com/mobiledevloperlab/nimotehost#build-and-run) for prerequisites and commands.

[Overview](/docs/host) · [Connections, terminals and tasks](/docs/host/sessions)
