# A Safe Mobile Development Workflow

This general workflow applies whether the project runs locally, in Android Local Linux, or on a remote SSH host.

## Inspect → edit → verify → review

1. **Inspect:** confirm environment, project root, branch, and current Git status. Read the error, issue, or test that motivates the work.
2. **Edit:** make the smallest change that answers the task. Keep credentials and unrelated files out of the patch.
3. **Verify:** run a focused project check where the project normally runs. Record failures honestly rather than treating an agent response as proof.
4. **Review:** inspect the diff, including generated files, before committing, pushing, or handing it off.

NimoteCode keeps these stages together through its workspaces, editor, terminal, AI assistance, and Source Control. For model selection and environment trade-offs, read [Mobile Development](../../resources/mobile-development.md).
