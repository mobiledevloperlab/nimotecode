---
title: Language services (LSP) | NimoteCode
description: "Configuration, procedures, and interface reference for language services (lsp)."
---

# Language services (LSP)

<div class="doc-section">
<div class="doc-section__copy">

## Check language-server setup

Open a source file, then open the LSP panel. Check **LSP Setup** and the server shown for the file’s language. The example shows pyright-langserver installed for Python and zero reported errors or warnings. Installed status does not imply that every project dependency or code action is available.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="lsp-python-status.png" caption="Python language-server setup with Problems and Code Actions sections." />
</div>

</div>

## Use diagnostics and code actions

Expand **Problems** and select a diagnostic to open its source location. Review actions offered under **Code Actions** for the cursor position. Available actions depend on the language server. Save the file and rerun the relevant project check after applying an action. LSP requires Pro access.
