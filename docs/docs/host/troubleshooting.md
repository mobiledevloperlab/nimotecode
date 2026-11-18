---
title: "Troubleshooting | NimoteHost"
description: "NimoteHost: troubleshooting."
---

# Troubleshooting

## If it will not connect

| What you see | What to check first |
| --- | --- |
| SSH fails | Address, port, account, network, and host key. Get ordinary SSH working first. |
| Host not found | Installation under the SSH account; the noninteractive SSH PATH on Unix; that user's discovery file and installation path on Windows. |
| Host found but stopped | Run `nimotehost status` on the computer, then start it using your chosen service or foreground setup. |
| Incompatible protocol | Update the app and Host to matching versions. |
| No Agent to select | CLI and adapter installation, login, and the Host service's PATH. After a tool-path change, finish active tasks before refreshing the service environment. |
| Output is visible but input does not work | You may be viewing cached history. Check that you are connected and that the session is still running. |
| Directory or permission error | Use an absolute remote path that the SSH account can enter. |
| No result after starting | Refresh and look for the original session before creating another. |

Finish active work before stopping, restarting, or updating Host. Updates keep records, but do not move running processes into the new service.

More help: [SSH workspaces](/docs/ssh) · [AI and Agent](/docs/ai) · [Tasks](/docs/tasks) · [Host implementation notes](https://github.com/mobiledevloperlab/nimotehost/blob/master/docs/completed.md)

[Overview](/docs/host) · [Hardware and package selection](/docs/host/compatibility)
