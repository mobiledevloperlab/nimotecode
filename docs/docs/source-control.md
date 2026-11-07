---
title: Source Control and GitHub | NimoteCode
description: Use Git status, diffs, branches, history, AI review tools, and GitHub repositories, pull requests, reviews, checks, workflows, and artifacts from NimoteCode.
---

# Source Control and GitHub

<div class="doc-section">
<div class="doc-section__copy">

## Inspect repository status

Open Source Control in a Git workspace. **Changes** lists modified, deleted, and untracked files; **Staged Changes** lists files prepared for a commit. Refresh after operations performed outside the app. Git actions use the repository and account available in the active workspace, so confirm the repository root and current branch before a write operation.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="source-control-changes.png" caption="Changed and untracked files, with separate staged changes and history sections." />
</div>

</div>

## Use GitHub from your workspace

Open the **GitHub** page to sign in with browser device authorization or a personal access token, then choose a repository you can access. Clone to **This device**, **Local Linux**, or an **SSH host**. The selected target holds the checkout and runs its Git commands; NimoteCode keeps the repository browser and workspace together on your mobile device.

<div class="doc-screenshots">
  <DocScreenshot file="github_entry.png" caption="The GitHub repository picker with available clone targets." />
</div>

## Open a repository and collaborate

Choose a repository to inspect its default branch, branches, issues, pull requests, reviews, checks, workflow runs, and available artifacts before opening the code. You can filter, create, edit, close, or reopen issues; inspect and check out a pull request; comment on a review; request reviewers; and, when the repository permits it, update or merge a pull request. Workflow operations—including starting a run, rerunning jobs, cancelling a run, and downloading artifacts—are governed by the GitHub permissions of the signed-in account.

When a change is ready, create or switch branches, push with the repository permissions granted to your account, and open a pull request. Review the diff and run the project checks before publishing. GitHub status and patches are collaboration context, not a replacement for reviewing the repository; large or binary changes may require opening GitHub to inspect the complete content.

<div class="doc-screenshots">
  <DocScreenshot file="github.png" caption="A repository view with Issues, Pull requests, and Branches available from the GitHub page." />
</div>

## Choose a safe clone target

Before cloning, confirm the target workspace, destination folder, and branch. For a private repository on an SSH host, configure that host's GitHub SSH key and known-hosts entry; the app does not send an app-held token to the host. Local Linux can use the signed-in GitHub account for HTTPS cloning. Use a shallow clone only when the project's workflow does not need full history. A clone opens the selected workspace and does not configure or install project dependencies, submodules, or Git LFS content automatically.

<div class="doc-screenshots">
  <DocScreenshot file="github_conf.png" caption="Clone options for an SSH workspace, including destination, branch, shallow clone, and SSH-key authentication." />
</div>

## Review diffs and commits

Open a changed file to compare its old and new contents. Open a commit in **Commit History** to inspect changes grouped by file. The diff in the screenshot includes a temporary text edit; it illustrates review and is not a recommended code change.

<div class="doc-screenshots">
  <DocScreenshot file="git-diff-view.jpg" caption="Old and new file content with additions and deletions highlighted." />
  <DocScreenshot file="git-commit-details.jpg" caption="Commit details with per-file patches." />
</div>

<div class="doc-section">
<div class="doc-section__copy">

## Switch branches

Select the branch name in the header to search for a branch, create one, or check out an existing branch. Check uncommitted work before switching. Git write availability and remote permissions are shown in the app for the current account and workspace.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="git-branch-checkout.jpg" caption="Checkout Branch dialog with search and Create New Branch." />
</div>

</div>

<div class="doc-section">
<div class="doc-section__copy">

## Use Git AI tools

Open **AI Tools**, choose a provider and files, then select **Commit Message**, **Explanation**, or **Risk Analysis**. For an explanation, select **Explain Changes**. Generated text supplements the diff; verify it before using it in a commit or review.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="git-ai-explanation.jpg" caption="Explanation tab showing an AI summary of selected changes." />
</div>

</div>

## Review Git changes on mobile

Diff views, Source Control headings, and actions adapt to phone and tablet layouts so changes remain readable and review controls stay accessible on narrow screens.
