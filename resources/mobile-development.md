# Mobile Development: Choosing a Workspace

Mobile coding works best when the task, environment, and review path are explicit. A phone or tablet is excellent for inspecting a service, reviewing a pull request, making a focused change, or unblocking an on-call task. It is a poor replacement for a workstation when a task needs sustained typing, large local builds, multiple monitors, or hardware-specific tooling.

## Four practical workspace models

| Model | Where code and tools run | Best for | Watch for |
| --- | --- | --- | --- |
| Local device files | On the phone/tablet | Notes, small static projects, quick edits | Limited toolchain and storage integration |
| Android Linux | In a Linux userspace on Android | Learning, scripts, small services, portable CLI tools | Android lifecycle, storage, and CPU constraints |
| Remote development | On a workstation, server, or VPS | Existing projects, tests, containers, and production-adjacent work | Network access and host security |
| Cloud development environment | In a hosted workspace | Disposable branches, onboarding, consistent environments | Cost, provider controls, and data location |

## Choose by the task, not the screen size

For a production fix, preserve the existing build environment and connect over SSH. For a small experiment without a host, Android Linux can be a useful sandbox. For an unfamiliar repository, a cloud environment can provide a disposable setup. In every case, leave time to run the project's checks and inspect the Git diff.

## A reliable mobile loop

1. Confirm the host, account, repository, and branch.
2. Read the failing test, issue, or log before editing.
3. Make the smallest change that addresses the task.
4. Run the relevant check where the project normally runs it.
5. Review the diff and hand off or commit through the team's normal process.

NimoteCode is designed around this loop: it combines a mobile editor, terminal, Git review, and local or SSH workspaces. See the [remote workflow](remote-development-from-phone.md), [Android Linux guide](android-linux-development.md), and [mobile development examples](../examples/mobile-dev-workflow/README.md).
