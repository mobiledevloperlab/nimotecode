---
answer: "Connect Android and the development host to the same tailnet, enable the host’s SSH server, then connect using the host address and local account. This uses ordinary SSH over Tailscale."
title: "Android Remote Development: Connect to Mac or Linux over Tailscale and SSH"
description: "Connect Android to a Mac or Linux host over Tailscale and ordinary SSH, then verify editing, checks and reconnection."
date: "2026-09-04"
lastUpdated: "2026-11-03"
author: "NimoteCode Team"
---

# Android Remote Development: Connect to Mac or Linux over Tailscale and SSH

This walkthrough connects Android to a Mac or Linux development host using ordinary SSH over a Tailscale network. It does not enable the separate [Tailscale SSH server feature](https://tailscale.com/docs/features/tailscale-ssh). You need an awake host, access to the same tailnet, an SSH account and a network policy that permits the connection.

## 1. Put both devices on the network

Install Tailscale on Android and the host using the [official downloads](https://tailscale.com/download). Sign in to the same tailnet and enable the connection. Copy the host’s Tailscale IPv4 address from the app. If the CLI is available, you can also use:

```bash
tailscale ip -4
tailscale status
```

The address is the host address, not the phone address. Device visibility alone does not prove that SSH traffic is allowed.

## 2. Enable the host’s SSH server

On macOS, open System Settings → General → Sharing → Remote Login. Enable access only for the intended users. Use the host’s local account name, which may differ from your Tailscale identity.

On Ubuntu/Debian systems using systemd, install and start OpenSSH:

```bash
sudo apt update
sudo apt install openssh-server
sudo systemctl enable --now ssh
sudo systemctl status ssh
```

The [Ubuntu OpenSSH guide](https://ubuntu.com/server/docs/how-to/security/openssh-server/) covers server installation and authentication configuration. Other distributions may use different package or service names. Allow the intended tailnet traffic through the host firewall; this guide does not require opening port 22 on your router.

## 3. Create the connection in NimoteCode

Use the [SSH workspace guide](/docs/ssh) to create a connection with these values:

| Field | Value |
| --- | --- |
| Host | The host’s Tailscale address |
| Port | The configured SSH port, commonly 22 |
| Username | The local account on the Mac or Linux host |
| Authentication | A key or password accepted by that host |

Before accepting the first connection, compare the presented host-key fingerprint with a trusted copy from the host. Do not disable verification to bypass a mismatch. Tailscale connectivity and SSH authentication are separate checks.

## 4. Verify a complete development step

Open the repository root, confirm the current branch, edit a small file on a disposable branch and run the project’s normal check. Review the diff before committing. Compilation happens on the host, so its dependencies must already be installed.

Then test from mobile data with Wi-Fi disabled. Reconnect and confirm the working directory and saved content. Long-running processes may need a separate session-persistence strategy; a working SSH connection is not a guarantee that a process survives disconnection.

## 5. Diagnose the failing layer

| Symptom | First checks |
| --- | --- |
| Timeout | Host sleep, tailnet connectivity, policy and firewall |
| Connection refused | SSH service and port |
| Permission denied | Host username, authorized key and allowed login methods |
| Commands fail after login | Working directory, dependencies and host permissions |

Maintain host updates and access permissions after setup. The network path makes the machine reachable; it does not maintain the development environment for you.

## Demonstration

<figure>
  <video controls playsinline preload="metadata" aria-label="Android SSH setup demonstration">
    <source src="/videos/android_ssh_public_guide.mp4" type="video/mp4">
    Your browser does not support embedded video.
  </video>
  <figcaption>NimoteCode team demonstration of the Android SSH workflow. Follow the written prerequisites even if they are already configured in the recording.</figcaption>
</figure>
