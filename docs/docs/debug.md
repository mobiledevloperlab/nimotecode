---
title: Debugging | NimoteCode
description: "Configuration, procedures, and interface reference for debugging."
---

# Debugging

<div class="doc-section">
<div class="doc-section__copy">

## Prepare a debug session

Debugging requires a compatible adapter and a launch configuration for the project on the target host. Open the Debug panel and select **Start Debug** after configuring these prerequisites. Debugging requires Pro access.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="debugger-standby.png" caption="Inactive Debug panel; no session, variables, or call stack has been loaded." />
</div>

</div>

## Inspect a paused program

Set a breakpoint and run the configured session. When execution pauses, inspect **Variables**, **Watch**, and **Call Stack**. Continue or step through code using the session controls. If the session cannot start, check the adapter and launch command on the host before changing breakpoints.
