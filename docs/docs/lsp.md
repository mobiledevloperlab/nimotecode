---
title: LSP Diagnostics and Code Actions | NimoteCode Pro
description: Configure language-server support on a remote workspace, view diagnostics, jump to source locations and apply available code actions in NimoteCode Pro.
---

# LSP Diagnostics and Code Actions

The LSP panel adds language-aware feedback to an active remote workspace. With a compatible language server configured on the host, you can move from a diagnostic to the relevant source line and apply available code actions. LSP is a **Pro** workflow.

<ImagePlaceholder image-key="lsp" alt="NimoteCode LSP diagnostics">
  <strong>Image placeholder — diagnose and navigate with LSP</strong>
  <span>Replace with a screenshot of the diagnostics list, a selected source line and an available code action.</span>
</ImagePlaceholder>

## A practical LSP loop

1. Set up and verify the language server for the remote project.
2. Open LSP and filter diagnostics to the most important errors.
3. Jump to the source location and apply a code action if one is offered.
4. Re-run the relevant check in [Terminal](/docs/terminal).
5. Use [Debug](/docs/debug) or [AI Chat and Agent](/docs/ai) if the problem needs more context.

Language support depends on the tools installed and configured on your remote host. An unavailable code action is normal for some diagnostics; it is not a promise that AI or LSP can automatically fix every issue.
