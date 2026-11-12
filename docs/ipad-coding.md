---
title: "Coding on iPad with SSH, Editor, Git & AI | NimoteCode"
description: "Code on iPad with a project explorer, split editor, SSH terminal and Git review. Learn what runs remotely, what iPadOS permits, and how to start with NimoteCode."
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# Coding on iPad with your existing development environment

A larger screen helps when a task needs both source code and command output. NimoteCode gives iPad users a project explorer, code editor with split panes, SSH terminal, Git tools, and optional AI. It is useful for reviewing a pull request, updating documentation, or making a focused fix while your development machine does the heavy work.

If you only need to edit a note, a simpler editor may be enough. For a project change, first decide where its dependencies, checks, and services will run.

<figure class="article-hero">
  <a href="/images/ios/ipad-workspace.webp" target="_blank" rel="noopener">
    <img src="/images/ios/ipad-workspace.webp" width="1200" height="899" alt="NimoteCode App Store iPad view with project navigation and code editing." loading="lazy" decoding="async">
  </a>
  <figcaption>NimoteCode App Store iPad view with project navigation and code editing. Source: NimoteCode App Store listing. Promotional screenshot, not a continuous recording.</figcaption>
</figure>

## Choose local editing or a remote project

| Task | Where it runs | What you need |
| --- | --- | --- |
| Edit an accessible local file | iPad, through granted file-provider access | Permission to the project folder |
| Run project commands and builds | Your SSH host | Host tools, dependencies, and network access |
| Review Git changes | The active Git workspace | A supported repository and account access |
| Ask AI about a project | Configured provider and available workspace tools | Provider credentials and applicable feature access |

**Android Local Linux is not available on iPadOS.** Opening a local folder does not install Node.js, Python, a compiler, or a local Linux shell. File-provider folders can also restrict tools that require native filesystem paths. Consult [workspace setup](/docs/ssh) before choosing the project location.

## Set up the iPad workflow

1. Install NimoteCode from the App Store. Check the listing for device and operating-system requirements.
2. Configure an SSH connection to an awake Windows, Mac, or Linux machine. Verify its host-key fingerprint and select the repository root.
3. Open the relevant files. Use split editor panes to compare two files when helpful; confirm the terminal’s working directory separately.
4. Save, run the repository’s checks on the host, and inspect the diff in Source Control before committing.

The [Windows setup guide](/docs/windows-ssh-sftp) covers PowerShell and SFTP. A remote connection needs a reachable host; use an appropriate secure network path away from your LAN.

## Use the tablet screen for review

Keep related files open in tabs and compare the implementation with its configuration or tests. [Source Control](/docs/source-control) provides changed files, diffs, and history; GitHub workflows depend on account and repository permissions. A wider screen helps with reading, but the host still supplies the project’s runtime.

<figure class="article-hero">
  <a href="/images/ios/ipad-git.webp" target="_blank" rel="noopener">
    <img src="/images/ios/ipad-git.webp" width="1200" height="899" alt="NimoteCode App Store iPad view showing Git AI tools and change analysis." loading="lazy" decoding="async">
  </a>
  <figcaption>NimoteCode App Store iPad view showing Git AI tools and change analysis. Source: NimoteCode App Store listing. Promotional screenshot, not a continuous recording.</figcaption>
</figure>

## Add AI when it helps the task

Start with an explanation of unfamiliar code or a focused error. Nimote Agent can use available workspace tools; in Confirm mode, inspect the plan before approving the run. External ACP agents need a compatible runtime and their own credentials. See the [AI guide](/docs/ai).

## Plan for iPadOS background behavior

Switching apps or locking the iPad can interrupt a connection. Host-side tools such as a terminal multiplexer can help with persistent shell sessions; they do not keep a sleeping or rebooted host running. Reconnect and check saved files and job state before continuing. Large refactors and long interactive debugging may still be more comfortable on a desktop.

## Frequently asked questions

<!-- faq:start -->

### Can iPad run NimoteCode Local Linux?

No. Local Linux is Android-only. On iPad, use an SSH host for the project runtime, terminal tools, and builds.

### Can I open local files on iPad?

Yes, where iPadOS and the selected file provider grant access. Opening a local folder does not guarantee availability of tools that need a native filesystem path.

### Do iPad and Android have identical features?

They share core editing and SSH workflows, but environment support differs. Android Local Linux is unavailable on iPad, and file permissions and background execution depend on the platform.

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
