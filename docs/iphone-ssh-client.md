---
title: "iPhone SSH Client with SFTP, Editor & Git | NimoteCode"
description: "Use NimoteCode on iPhone to connect over SSH, browse files with SFTP, edit code, run host commands and review Git changes. Setup, requirements and App Store download."
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# iPhone SSH client for editing real projects

Need to inspect a server file, fix a script, or check a repository while your computer is elsewhere? NimoteCode combines an SSH terminal, remote file explorer, code editor, Git review, and optional AI in an iPhone workspace. Your project stays on the host; your phone provides the interface.

For a command-only task, a dedicated terminal may be enough. Choose NimoteCode when you also need to find a file, edit it, run the project’s checks, and inspect what changed.

<figure class="seo-phone-capture">
  <a href="/images/ios/iphone-ssh.webp" target="_blank" rel="noopener">
    <img src="/images/ios/iphone-ssh.webp" width="660" height="1433" alt="NimoteCode on iPhone showing Remote Explorer and the connected SSH project." loading="lazy" decoding="async">
  </a>
  <figcaption>NimoteCode on iPhone showing Remote Explorer and the connected SSH project. Source: NimoteCode App Store listing. Promotional screenshot, not a continuous recording.</figcaption>
</figure>

## Connect your iPhone to a development host

1. Enable an SSH server on your Windows, Mac, or Linux host and ensure it is awake and reachable. For Windows, follow [the OpenSSH and SFTP guide](/docs/windows-ssh-sftp).
2. In NimoteCode, choose **Connect Remote Workspace**. Enter the host address, SSH port, username, and authentication method.
3. Compare the host-key fingerprint with a trusted value from the host before accepting the first connection.
4. Select the project root and confirm the connection and path in Remote Explorer.
5. Open a file, save a small test edit in a user-owned directory, and check the saved content on the host.

The [SSH workspace reference](/docs/ssh) covers profiles and directory selection. Away from your LAN, use a secure network path such as a VPN; installing an SSH client alone does not make the host reachable.

## Browse files with SFTP and edit in the same workspace

Use the remote project tree to locate source, documentation, and configuration files. Open them in editor tabs, make the change, and save before running external tools. SFTP access follows the host account’s permissions; a successful login does not grant write access everywhere.

Windows paths may be represented differently by SFTP. Use server-returned paths rather than assuming a local Windows path can be pasted unchanged. [Editor documentation](/docs/editor) explains tabs, text selection, and split panes.

## Run commands and review Git changes

The terminal runs commands on the remote host. Compilers, Git, language servers, and project dependencies must be available there. Check the working directory and current branch before editing; read the diff and run the repository’s documented checks before committing.

iOS can suspend apps in the background. A connection is not a promise of process persistence. Use an appropriate host-side session strategy for long-running jobs and confirm their state after reconnecting.

## What runs on iPhone, and what needs a host?

Local folders support file access and editing through iOS file permissions. They do not automatically provide a compiler or Linux runtime. **NimoteCode Local Linux is Android-only**, so this iPhone workflow uses the remote host for project commands. AI Chat and Agent are optional and require provider setup. See [AI configuration](/docs/ai) and [iPad coding](/ipad-coding) for related workflows.

## Frequently asked questions

<!-- faq:start -->

### Does NimoteCode support SFTP on iPhone?

Yes. SSH workspaces use remote file access over SFTP, subject to server configuration and account permissions. Verify listing, opening, and saving a test file after connecting.

### Can I run Ubuntu directly on iPhone with NimoteCode?

No. NimoteCode Local Linux is available only on supported Android devices. On iPhone, use a reachable SSH host for a Linux shell and project tools.

### Do I need to configure AI before using SSH?

No. You can connect, browse files, edit, and use the basic terminal without configuring a model. AI features have separate provider setup and access requirements.

<!-- faq:end -->

Start with local or SSH editing and the basic terminal. Some capabilities require Pro access; check [Free and Pro](/pro) and the access shown in the app. AI requires your own model provider, whose usage is billed separately.

<div class="seo-cta">
  <p><strong>Download NimoteCode</strong></p>
  <p class="seo-cta-actions">
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="/docs/quick-start" class="home-page-btn secondary">Quick start</a>
  </p>
</div>
