---
answer: "A useful remote development workflow preserves project context across files, commands and Git review. Test saving and reconnection, not just whether SSH login succeeds."
title: "SSH + Mobile Coding Is Still Broken, So I Built My Own IDE"
description: "Most mobile coding tools only edit code or only give you a terminal. Real dev work needs SSH, files, terminal and Git together—so I built a mobile IDE."
author: "NimoteCode Team"
date: "2026-06-11"
lastUpdated: "2026-11-03"
tags: ["ssh", "flutter", "mobile ide", "devops"]
image: /blog/ssh-mobile-coding-is-still-broken-so-i-built-my-own-ide/image-1.png
---

# SSH + Mobile Coding Is Still Broken, So I Built My Own IDE

I've tried a lot of mobile coding tools—SSH apps, code editors, cloud IDEs. Most of them feel useful but incomplete. They either only edit code, only provide a terminal, or feel like a desktop tool squeezed into a phone.

But real dev work isn't just "writing code". It's SSH + files + terminal + git, all together.

So I started building a mobile-first IDE called **NimoteCode**. The idea is simple:

> A workspace should include everything—not separate apps.

- Local and SSH workspaces
- Integrated terminal
- Code and project structure in one place
- Mobile-first UX, not a desktop copy

<figure>
  <img src="/blog/ssh-mobile-coding-is-still-broken-so-i-built-my-own-ide/image-1.png" width="1604" height="901" alt="Product composite: file browsing, code editing and AI chat" loading="lazy" decoding="async">
  <figcaption>Product composite: file browsing, code editing and AI chat. Source: NimoteCode team.</figcaption>
</figure>

<figure>
  <img src="/blog/ssh-mobile-coding-is-still-broken-so-i-built-my-own-ide/image-2.png" width="1597" height="896" alt="Product composite: terminal, Git review and code diagnostics" loading="lazy" decoding="async">
  <figcaption>Product composite: terminal, Git review and code diagnostics. Source: NimoteCode team.</figcaption>
</figure>

<figure>
  <img src="/blog/ssh-mobile-coding-is-still-broken-so-i-built-my-own-ide/image-3.png" width="1598" height="893" alt="Product composite: debugging and workspace synchronization" loading="lazy" decoding="async">
  <figcaption>Product composite: debugging and workspace synchronization. Source: NimoteCode team.</figcaption>
</figure>

## Test the handoff, not just the connection

A successful SSH login is only the first acceptance check. Open a disposable branch, edit a small file, save it, confirm the host sees the change, run the project’s check and inspect the diff. Then interrupt the connection and reconnect: confirm the working directory, branch and saved content before continuing.

Long-running commands need their own persistence strategy; an SSH workspace alone does not promise that a process survives disconnection. Keep deployment separate from editing, and use the host’s normal review and release procedure. The [SSH guide](/docs/ssh) and [terminal guide](/docs/terminal) describe the supported workflow.

## Where the design landed

Instead of replicating a desktop tool, the workspace keeps the essential loop together: connect over [SSH Workspace](/docs/ssh), inspect the project in the Explorer, edit a file in the [Editor](/docs/editor), run and verify commands in the [Terminal](/docs/terminal), and review the result in [Source Control](/docs/source-control).

It's not a terminal-only client and it's not a separate editor—it's a workspace built for the focused, reviewable work developers actually do away from a desk. See the full model in [SSH IDE](/ssh-ide) and [SSH remote development workflow](/docs/ssh).

## Try it

NimoteCode is available now on Google Play for Android, with current iOS availability listed on the Download page. Get it from the [Download](/download) page.

> What do you think—is mobile development actually usable today, or still fundamentally fragmented?

This post is also part of the story behind the build: read [Why Existing Flutter Code Editors Broke Down](/blog/why-existing-flutter-code-editors-broke-down-when-i-built-a-mobile-ide) and [Why I Decided to Build a Mobile IDE Instead of Another AI App](/blog/why-i-decided-to-build-a-mobile-ide-instead-of-another-ai-app).

## Related content

- [SSH IDE for remote development](/ssh-ide) — project browsing, editing and Git review over SSH
- [Remote coding from a phone or tablet](/remote-coding) — the remote-first workflow in practice
- [Why Existing Flutter Code Editors Broke Down](/blog/why-existing-flutter-code-editors-broke-down-when-i-built-a-mobile-ide) — the editor rebuild behind it

<div class="seo-cta">
  <p><strong>About the author</strong> · Building <a href="/">NimoteCode</a>, a mobile-first IDE built with Flutter and Rust. Follow the project on <a href="https://dev.to/ma_dev">DEV.to</a> · <a href="https://github.com/mobiledevloperlab">GitHub</a> · <a href="https://x.com/mobiledevlab">X</a>.</p>
  <p class="seo-cta-actions"><a href="/download?utm_source=blog&utm_medium=organic&utm_campaign=ssh_broken_download" class="home-page-btn primary">Download NimoteCode</a><a href="/ssh-ide?utm_source=blog&utm_medium=organic&utm_campaign=ssh_broken_workflow" class="home-page-btn secondary">Explore Remote Development</a></p>
</div>
