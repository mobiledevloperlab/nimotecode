---
title: Terminal | NimoteCode
description: "Configuration, procedures, and interface reference for terminal."
---

# Terminal

<div class="doc-section">
<div class="doc-section__copy">

## Run workspace commands

Open Terminal in the active SSH or Local Linux workspace. Run `pwd` to confirm the directory, then execute the project command. Terminal output belongs to that session; changing an editor tab does not change the shell’s directory.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="terminal-command-output.png" caption="Terminal displaying the output of ls." />
</div>

</div>

<div class="doc-section">
<div class="doc-section__copy">

## Search, copy, and analyze output

The session menu includes output search, clipboard actions, **Analyze with AI**, clearing output, and closing the session. Analyze with AI sends terminal context for explanation. Review the selected content before using it with a provider.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="terminal-actions-menu.jpg" caption="Terminal session actions, including Analyze with AI and Refresh Remote Environment." />
</div>

</div>

## Refresh the remote environment

After updating the remote account’s shell configuration, select **Refresh Remote Environment** or reconnect. The resolved login environment is shared by remote tools such as Tasks, Git, language servers, debug adapters, and external agents.

## Customize terminal tabs

Open the tab customization menu to rename a tab, change its color, or reset its customization. **Customize Terminal Tab** lets you set the title, color, and icon together. These settings identify sessions; they do not change the host or command environment.

<div class="doc-screenshots">
  <DocScreenshot file="terminal-customize-menu.jpg" caption="Tab customization menu." />
  <DocScreenshot file="terminal-tab-style-form.jpg" caption="Tab title, color, and icon settings." />
</div>
