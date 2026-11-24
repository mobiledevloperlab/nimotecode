---
title: "Troubleshooting | NimoteHost"
description: "NimoteHost: troubleshooting."
---

# Troubleshooting

**NimoteHost currently supports local network (LAN) connections only.** Connect your phone and Host computer to the same local network and use the computer’s local address for SSH.

## If it will not connect

| What you see | What to check first |
| --- | --- |
| SSH fails | Address, port, account, network, and host key. Get ordinary SSH working first. |
| Host not found | Installation under the SSH account; the noninteractive SSH PATH on Unix; that user's discovery file and installation path on Windows. |
| Host found but stopped | For an installed service, use `nimotehost deploy status` and `nimotehost deploy start`. |
| Incompatible protocol | Update the app and Host to matching versions. |
| No Agent to select | If Host cannot find an Agent you installed and signed into on the computer, run `nimotehost tools refresh`, then `nimotehost agents`. |
| Output is visible but input does not work | You may be viewing cached history. Check that you are connected and that the session is still running. |
| Directory or permission error | Use an absolute remote path that the SSH account can enter. |
| No result after starting | Refresh and look for the original session before creating another. |

Finish active work before stopping, restarting, or updating Host. Updates keep records, but do not move running processes into the new service.

More help: [SSH workspaces](/docs/ssh) · [AI and Agent](/docs/ai) · [Tasks](/docs/tasks) · [Host implementation notes](https://github.com/mobiledevloperlab/nimotehost/blob/master/docs/completed.md)

[Overview](/docs/host) · [Hardware and package selection](/docs/host/compatibility)
