---
title: "Hardware and package selection | NimoteHost"
description: "Choose the package for the operating system and CPU architecture of the computer running NimoteHost, even when downloading from your phone. The phone’s CPU does not determine the Host package. Choose CLI or desktop separately, and keep the Host release compatible with your NimoteCode app."
---

# Hardware and package selection

Choose the package for the **operating system and CPU architecture of the computer running NimoteHost**, even when downloading from your phone. The phone’s CPU does not determine the Host package. Choose CLI or desktop separately, and keep the Host release compatible with your NimoteCode app.

## Current distribution targets

As of NimoteHost Community 2.5.0. These are published build targets; complete native-platform and mobile/Agent acceptance is still pending. Check the files actually available in the selected release.

| Host system / CPU | Package target | CLI | Desktop |
| --- | --- | --- | --- |
| Linux · Intel/AMD x64 | `linux-amd64` | ✓ | ✓ |
| Linux · ARM64 | `linux-arm64` | ✓ | ✓ |
| Linux · x86 (32-bit) | `linux-386` | ✓ | — |
| macOS · Apple Silicon | `darwin-arm64` | ✓ | ✓ |
| macOS · Intel | `darwin-amd64` | ✓ | ✓ |
| Windows · Intel/AMD x64 | `windows-amd64` | ✓ | ✓ |
| Windows · ARM64 | `windows-arm64` | ✓ | ✓ |
| Windows · x86 (32-bit) | `windows-386` | ✓ | — |

## Check your Host architecture

Linux/macOS: run `uname -m` on the Host. `x86_64` means `amd64`; `aarch64` or `arm64` means `arm64`; `i386` or `i686` means 32-bit x86 (`386`, Linux CLI only). On Windows, open Settings → System → About → System type and check both the processor and installed OS architecture. A 64-bit processor with a 32-bit OS needs the 32-bit package.

`amd64` covers both Intel and AMD x64 processors. `arm64` means 64-bit ARM, including Apple Silicon. 32-bit ARM, 32-bit desktop bundles, and 32-bit macOS are outside the current distribution matrix. ARM64 hardware needs a matching 64-bit OS; a device brand alone does not establish compatibility.

## Requirements and support limits

CLI suits servers without a desktop. Desktop bundles include CLI and a graphical manager, and require the matching native desktop environment. Linux desktop bundles require glibc 2.35 or newer; do not assume an Alpine/musl system is compatible. macOS packages are unsigned and not notarized.

No universal minimum RAM, disk space, or GPU requirement is published. Size the Host for your projects, concurrent tasks, and Agent tools. Access to cloud Agents does not imply a local model or GPU is required; check each installed tool’s own requirements.

For a background service, Linux uses a systemd user manager, macOS a logged-in GUI user, and Windows a user logon task. Without these, try foreground CLI operation. Configure SSH separately, keep the Host awake, and verify network access.

[Source and build targets](https://github.com/mobiledevloperlab/nimotehost/blob/master/README.md) · [Releases](https://github.com/mobiledevloperlab/nimotehost/releases/tag/community-v2.5.0) · [Pending validation](https://github.com/mobiledevloperlab/nimotehost/blob/master/docs/pending.md)

[Download and installation](/docs/host/getting-started)
