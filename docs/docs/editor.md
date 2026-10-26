---
title: Code editor | NimoteCode
description: "Configuration, procedures, and interface reference for code editor."
---

# Code editor

## Open files and switch tabs

Open a file from Explorer or Search. Each open file appears in a tab. The editor supports local and remote files; split panes let you work with two files side by side. Save changes before running external tools that read the file from disk.

<div class="doc-screenshots">
  <DocScreenshot file="editor-empty-state.png" caption="Browse files opens file selection when the editor has no open tab." />
  <DocScreenshot file="editor-multiple-files.jpg" caption="Multiple file tabs with webapp.py active." />
</div>

## Select and edit text

Use text selection to copy, cut, or replace a range. The selection menu includes **Ask AI**. The overflow menu provides undo, redo, and clipboard actions. Keyboard and IME input use the same editor implementation on phones, tablets, and desktop.

<div class="doc-screenshots">
  <DocScreenshot file="editor-code-selection.png" caption="Python source open in the editor with line numbers and syntax highlighting." />
  <DocScreenshot file="editor-context-menu.jpg" caption="Text-selection menu with Copy, Cut, Paste, Select All, and Ask AI." />
  <DocScreenshot file="editor-overflow-menu.jpg" caption="Editor overflow menu with Undo, Redo, and clipboard commands." />
</div>

<div class="doc-section">
<div class="doc-section__copy">

## Navigate symbols and history

The symbol menu groups **Go To Definition**, **References**, **Rename Symbol**, **Outline**, and Git history actions. Language navigation depends on the configured language server; history actions require a Git repository.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="editor-symbol-menu.jpg" caption="Symbol and history actions for the active file." />
</div>

</div>

## Preview Markdown and HTML

Open Markdown source to edit it, then use its preview to read rendered headings, code blocks, and tables. HTML preview displays a snapshot of the current editor content, including unsaved edits, and reads referenced assets from the workspace. Static HTML preview does not require a web server on the SSH host. Server-side application behavior still requires the project’s runtime.

<div class="doc-screenshots">
  <DocScreenshot file="markdown-source-editor.jpg" caption="README.md in source-editing mode." />
  <DocScreenshot file="markdown-preview.jpg" caption="Rendered README.md with a directory tree and table." />
  <DocScreenshot file="html-report-preview.jpg" caption="An HTML benchmark report displayed in an editor preview tab." />
</div>
