# Android Linux vs Remote Development

## When to use it

Use this comparison when choosing between a Linux userspace on Android, a remote machine, or a hosted development environment.

## Main approaches

| Approach | Runs code where | Best for | Limitations |
| --- | --- | --- | --- |
| Termux | Android | CLI workflows | Not a conventional Ubuntu rootfs or full IDE |
| PRoot Linux | Android | Local Linux tools and small projects | Device resources and compatibility limits |
| SSH to a PC or VPS | Existing host | Full toolchains and persistent projects | Needs a reachable, secure host |
| Cloud development environment | Cloud | Disposable, standardised environments | Cost and connectivity depend on the provider |

## Trade-offs

PRoot provides an Ubuntu-like userspace without Android root, but it is not a virtual machine; processes, mounts, and low-level tools can behave differently. Termux is efficient for Android-oriented CLI work but follows its own package and filesystem model. SSH keeps the project where its established dependencies run. A cloud environment can simplify onboarding, but may not be suitable for private data or an unreliable network.

## Recommended workflow

Choose PRoot for self-contained learning, scripting, or a compact local toolchain. Choose SSH for a repository that already relies on a desktop, database, container, or private network. Use a cloud workspace when the team has already standardised on one. Validate the workflow with the commands that matter before relying on it away from a desk.

## Example

A small Python utility can be developed in Android Local Linux and verified locally. A Flutter application with emulator, service, and CI dependencies should normally remain on its workstation or hosted environment, with the phone acting as an SSH or browser client.

## Related resources

Read [Android Linux development](android-linux-development.md), [remote development from a phone](remote-development-from-phone.md), and the [Android Local Linux example](../examples/android-local-linux/README.md).
