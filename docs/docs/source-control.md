---
title: Source Control | NimoteCode
description: "Configuration, procedures, and interface reference for source control."
---

# Source Control

<div class="doc-section">
<div class="doc-section__copy">

## Inspect repository status

Open Source Control in a Git workspace. **Changes** lists modified, deleted, and untracked files; **Staged Changes** lists files prepared for a commit. Refresh after operations performed outside the app.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="source-control-changes.png" caption="Changed and untracked files, with separate staged changes and history sections." />
</div>

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

Select the branch name in the header to search for a branch, create one, or check out an existing branch. Check uncommitted work before switching. Git write operations require the applicable Pro access and repository permissions.

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
