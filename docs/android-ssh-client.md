---
title: "Android SSH Client with Terminal, SFTP & Editor | NimoteCode"
description: "Use NimoteCode as an Android SSH client for Linux, Mac and Windows. Configure authentication, browse files over SFTP, edit code and verify the remote project."
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# Android SSH client for terminal and file work

Need to run a command on a server or edit a remote configuration from Android? NimoteCode combines SSH terminal access with SFTP browsing, a code editor, and Git review. A dedicated terminal is enough for command-only work; choose the project workspace when files and changes also matter.

## Create and verify a connection

Enter the host, SSH port, account, and an authentication method accepted by that host. Compare its host-key fingerprint before the first connection. The port test checks direct TCP reachability; it does not authenticate the account or prove SFTP works. Choose the repository root after connecting.

<div class="doc-screenshots">
  <DocScreenshot file="remote-connection-form.jpg" caption="Android SSH connection form with port test and authentication settings." />
</div>

## Use the right address and permissions

On the same LAN, use the host’s active Wi-Fi or Ethernet address. Outside it, configure a secure network path such as a VPN. The host must remain awake. Passwords, keys, and account restrictions follow the server’s policy; SFTP writes also require filesystem permissions.

Windows uses PowerShell and SFTP. Follow [Windows setup](/docs/windows-ssh-sftp) to install OpenSSH and check its firewall. Mac and Linux use the configured host shell.

## Check the complete file workflow

Open and save a test file in a user-owned folder. Confirm the directory in Terminal, run the project’s own checks, and inspect changed files in Source Control before committing. The terminal uses host tools; Git, language services, and external agents need their own installation and permissions.

For detailed connectivity steps and errors, use [remote coding setup](/remote-coding). For an Android-only project without a separate host, see [Android IDE and Local Linux](/android-ide). For a broader capability overview, see [SSH IDE](/ssh-ide).

Start with local or SSH editing and the basic terminal. Some capabilities require Pro access; check [Free and Pro](/pro) and the access shown in the app. AI requires your own model provider, whose usage is billed separately.

<div class="seo-cta">
  <p><strong>Download NimoteCode</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="/docs/quick-start" class="home-page-btn secondary">Quick start</a>
  </p>
</div>
