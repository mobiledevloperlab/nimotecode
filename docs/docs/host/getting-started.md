---
title: "Download and installation | NimoteHost"
description: "NimoteHost: download and installation."
---

# Download and installation

Choose the package for the **operating system and CPU architecture of the computer running NimoteHost**, even when downloading from your phone. The phone’s CPU does not determine the Host package. Choose CLI or desktop separately, and keep the Host release compatible with your NimoteCode app.

[Hardware and package selection](/docs/host/compatibility)

## Before you start

You need a Linux, macOS, or Windows computer that you can reach over SSH, NimoteCode 2.4.1 or later with Host mode, a compatible NimoteHost, and a project directory the remote account can access. The workspace path you enter later belongs to the computer, not the phone. Installing Host does not add Host mode to an older app.

For background operation, Linux needs a working systemd user manager; macOS needs the user's GUI login session; Windows uses a per-user login scheduled task. Without the required service manager, try foreground operation. Keep the computer awake and reachable. Across networks, use a reachable SSH address or your existing VPN; installing Host does not make a private address reachable.

If SSH is new to you, set up a connection using [Local and SSH workspaces](/docs/ssh) first. For Windows, see [Windows SSH and SFTP](/docs/windows-ssh-sftp). Host does not configure SSH for you.

## Install or update over SSH {#install-over-ssh}

In NimoteCode 2.5.0, open **Host**, connect over SSH and check the installation status in the Host panel. Confirm the install prompt to download and verify the matching CLI bundle from the official NimoteHost release offered in the panel, then install and start it under the SSH account. The computer needs network access to GitHub Releases. If the service is installed but stopped, use the start action shown in the panel.

The panel shows progress, errors and a retry action. To update, use the notice or reopen it from the Host header. If the update requires stopping sessions, confirm after reviewing the interruption. Use the manual steps below for a desktop GUI bundle or a source build.

When the panel identifies a Host edition, follow the setup or update shown for that edition. Community installation depends on a matching published CLI package. A paired computer missing its service uses the Nimote Connect setup instructions. If the edition is unknown, check with its distributor before updating.

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

[Overview](/docs/host) · [Connections, terminals and tasks](/docs/host/sessions)
