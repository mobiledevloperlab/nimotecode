---
title: "Install Nimote Connect for Host sessions | NimoteCode"
description: "Nimote Connect installs the NimoteHost service that runs managed terminals, tasks, and compatible Agent sessions. Use an SSH account that can access the project, and keep the computer and its Host service running. In-app Host sessions require Pro."
---

# Install Nimote Connect for Host sessions

Nimote Connect installs the NimoteHost service that runs managed terminals, tasks, and compatible Agent sessions. Use an SSH account that can access the project, and keep the computer and its Host service running. In-app Host sessions require Pro.

## Install from NimoteCode {#install-over-ssh}

In NimoteCode, open **Machines**, select the computer’s SSH connection, and open **Host**. If Host is missing, choose **Install Nimote Connect**. The wizard selects the SSH host, downloads the matching package, then verifies the installation. Approve the device when prompted. Automatic installation and updates are available on supported 64-bit macOS and Linux computers.

## Install manually {#host-install}

If the wizard cannot load a package, or if the computer runs Windows, install Nimote Connect directly on the computer. Download the matching archive and SHA-256 file from the [official releases](https://github.com/mobiledevloperlab/nimote-connect/releases), verify the archive, then extract it. As the same user you use for SSH, run `./install.sh` on macOS or Linux, or `.\install.ps1` in Windows PowerShell. Then reconnect and open **Host**.

## NimoteHost source {#host-source}

The [NimoteHost source repository](https://github.com/mobiledevloperlab/nimotehost) provides source and independent Community builds. NimoteCode’s installation flow uses Nimote Connect.

[Overview](/docs/host) · [Package compatibility](/docs/host/compatibility)
