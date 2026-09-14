# A Safe Mobile Development Workflow

This general workflow applies whether the project runs locally, in Android Local Linux, or on a remote SSH host.

## Goal

Complete a small development task without losing the project's normal inspection, verification, and review boundaries.

## Requirements

- Access to the intended project and environment.
- A task narrow enough to test with the available workflow.
- A known test, linter, build, or review procedure.

## Setup

Open the intended project, confirm its environment and branch, and check the current Git status before editing.

## Workflow

1. **Inspect:** confirm environment, project root, branch, and current Git status. Read the error, issue, or test that motivates the work.
2. **Edit:** make the smallest change that answers the task. Keep credentials and unrelated files out of the patch.
3. **Verify:** run a focused project check where the project normally runs. Record failures honestly rather than treating an agent response as proof.
4. **Review:** inspect the diff, including generated files, before committing, pushing, or handing it off.

## Verify

Run the focused project check where the project normally runs, then inspect the diff, including generated files, before delivery.

## Troubleshooting

If the mobile environment cannot run the needed check, move verification to the existing remote or cloud host and record the limitation rather than guessing.

## Related docs

NimoteCode keeps these stages together through its workspaces, editor, terminal, AI assistance, and Source Control. For model selection and environment trade-offs, read [Mobile Development](../../resources/mobile-development.md) and [Mobile Coding Workflows](../../resources/mobile-coding-workflows.md).
