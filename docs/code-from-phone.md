---
title: "How to Code From a Phone: Local Files, Linux or SSH | NimoteCode"
description: "Start coding from Android or iPhone with the right environment. Edit local files, run a first Python script in Android Local Linux or SSH, and verify the result."
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# How to code from a phone: choose a place to run the project

You can write and edit code on a phone. Running it needs an environment that supports its language and dependencies. NimoteCode offers local file editing, SSH workspaces, and Local Linux on supported Android devices. Start with the project you want to use, rather than installing every tool at once.

## Choose one route

| Your situation | Start with | Execution |
| --- | --- | --- |
| Change text, HTML, or configuration | A local folder with granted access | Editing alone does not provide a runtime |
| Learn shell or run a compatible script on Android | Local Linux on supported Android 8+ ARM64/x86_64 | Device Ubuntu userspace; install language tools |
| Continue a project already on a computer | SSH to that Windows, Mac, or Linux host | The host’s tools and dependencies |

Local Linux uses PRoot without root access and is unavailable on iPhone or iPad. A basic editor is enough for text-only tasks; you do not need AI to begin.

<figure class="seo-phone-capture">
  <a href="/images/ios/iphone-editor.webp" target="_blank" rel="noopener">
    <img src="/images/ios/iphone-editor.webp" width="660" height="1433" alt="Editing source on iPhone; running it requires a configured runtime." loading="lazy" decoding="async">
  </a>
  <figcaption>Editing source on iPhone; running it requires a configured runtime. Source: NimoteCode App Store listing. Promotional screenshot, not a continuous recording.</figcaption>
</figure>

## Try a first Python script

In a writable project folder, create `hello.py` in the editor with this content:

```python
print("Hello from NimoteCode")
```

Save it. In Local Linux or a Linux/macOS SSH host with Python 3 installed, open Terminal in that folder and run:

```sh
python3 hello.py
```

Expect `Hello from NimoteCode`. If the command is missing, install Python in the execution environment using its package manager. A local file tab is not a Python installation. On Windows, use the Python command installed on that host. See [Local Linux setup](/docs/local-linux) or [remote coding](/remote-coding) for preparation.

## Move from an example to your project

Open the real repository root, read its setup instructions, and check existing changes. Install dependencies in the selected runtime. Save edits before tests, run the project’s checks, and review Git changes. Learn [editor navigation](/docs/editor) and [Source Control](/docs/source-control) before a large change.

## Know when to change environments

A phone can control a powerful host, but it cannot make missing dependencies disappear. Move incompatible PRoot tools or heavy builds to a suitable SSH host. For a broad refactor or complicated visual debugging, use the screen and input setup that lets you inspect the work clearly. [Mobile IDE](/mobile-ide) explains how to choose a workspace.

Start with local or SSH editing and the basic terminal. Some capabilities require Pro access; check [Free and Pro](/pro) and the access shown in the app. AI requires your own model provider, whose usage is billed separately.

<div class="seo-cta">
  <p><strong>Download NimoteCode</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="/docs/quick-start" class="home-page-btn secondary">Quick start</a>
  </p>
</div>
