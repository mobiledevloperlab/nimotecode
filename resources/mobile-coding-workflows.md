# Mobile Coding Workflows

## When to use it

Use this guide when a task must move between a phone, an existing development host, and possibly an on-device Linux environment.

## Main approaches

| Workflow | Code runs where | Useful for |
| --- | --- | --- |
| SSH to a workstation or VPS | Existing host | Full repositories, services, containers, and team tooling |
| Android Local Linux | Phone | Portable scripts, learning, and compact toolchains |
| Cloud development environment | Hosted workspace | Disposable branches and standardised onboarding |
| AI-assisted review | The selected workspace | Understanding errors, narrow edits, and Git review |

## Trade-offs

Remote hosts preserve the normal toolchain but need reliable, secure access. On-device Linux is portable but constrained by phone resources and PRoot compatibility. Cloud environments are convenient but introduce provider cost and data-location considerations. An agent can reduce routine work, but it does not replace tests or review.

## Recommended workflow

1. Choose the environment that already owns the project and required tools.
2. Confirm host, project root, branch, and Git status before editing.
3. Keep the task small enough to verify on the device or host that runs the code.
4. Run the focused check, then review the diff on the same workspace.
5. Use an AI agent for inspection or a bounded patch only when you can review its commands and result.

## Example

For an on-call web fix, connect to the normal staging host over SSH, inspect the failing log, edit the relevant file, run the existing test, and review the diff before handoff. For an offline parser experiment, use Android Local Linux and keep the project intentionally small.

## Related resources

Compare [Android Linux and remote development](android-linux-vs-remote-development.md), follow the [safe mobile workflow example](../examples/mobile-dev-workflow/README.md), or read about [mobile AI agent workflows](mobile-ai-agent-workflows.md).
