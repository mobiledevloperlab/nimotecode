---
title: "Remote Coding Setup for Phone & Tablet | NimoteCode"
description: "Set up remote coding from Android, iPhone or iPad: prepare an SSH host, verify SFTP, select a repository, run checks and troubleshoot the network or account."
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# Remote coding: connect your phone to an existing project

Keep the repository, dependencies, and services on your development machine, then use NimoteCode to browse and edit from a phone or tablet. This guide covers the connection and verification sequence; the [SSH IDE overview](/ssh-ide) explains the app’s capabilities.

## 1. Prepare the host and network

Enable the host SSH server, keep the machine awake, and confirm the intended account can access the repository. Use the real LAN address for the first test. For access away from home, set up a secure path such as a VPN. Do not assume a firewall rule alone makes the machine reachable.

## 2. Connect and check file access

1. Create an SSH profile with host, port, account, and permitted authentication. Verify the host-key fingerprint.
2. Choose the project root in Remote Explorer. Open a test file and save it in a user-owned folder to validate SFTP and write permissions.
3. Open Terminal and confirm its directory and branch independently of the editor. On Linux or macOS, the following commands help.

```sh
pwd
git status --short --branch
```

<figure class="seo-phone-capture">
  <a href="/images/ios/iphone-ssh.webp" target="_blank" rel="noopener">
    <img src="/images/ios/iphone-ssh.webp" width="660" height="1433" alt="iPhone Remote Explorer showing the connected SSH project." loading="lazy" decoding="async">
  </a>
  <figcaption>iPhone Remote Explorer showing the connected SSH project. Source: NimoteCode App Store listing. Promotional screenshot, not a continuous recording.</figcaption>
</figure>

## 3. Verify a real change

Save an edit, run the repository’s documented check on the host, then inspect Git changes before committing. A shell connection does not install dependencies, and an editor tab does not prove that the terminal uses the same checkout. Use host session management for long jobs; check their state after a disconnect.

## Troubleshoot by layer

| Symptom | Check |
| --- | --- |
| Timeout | Host power, address, VPN, firewall, network isolation |
| Connection refused | SSH service and listening port |
| Authentication denied | Username, account policy, password or key |
| Shell works, files fail | SFTP subsystem and directory permissions |
| Commands fail | Working directory, host dependencies and permissions |

Windows users can follow the [OpenSSH/SFTP walkthrough](/docs/windows-ssh-sftp). For phone-only work without a host, see [coding from a phone](/code-from-phone). Use the [SSH reference](/docs/ssh) for app settings.

Start with local or SSH editing and the basic terminal. Some capabilities require Pro access; check [Free and Pro](/pro) and the access shown in the app. AI requires your own model provider, whose usage is billed separately.

<div class="seo-cta">
  <p><strong>Download NimoteCode</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="/docs/quick-start" class="home-page-btn secondary">Quick start</a>
  </p>
</div>
