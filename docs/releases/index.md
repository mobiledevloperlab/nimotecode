---
title: NimoteCode Release Notes
description: Complete release notes for NimoteCode, including new features, improvements, and fixes.
---

# NimoteCode Release Notes

This page contains the complete public release history. NimoteCode is available on Android through Google Play and on iPhone and iPad through the App Store; see the [Download page](/download) for current store links.

## 1.1.9 · September 27, 2026 · Build 48

Version 1.1.9 rebuilds the interface on one design system — a layout chosen by available space, one density and status language, an IDE-style AI timeline, and a new interface scale — adds PHP debugging and wider syntax highlighting, and makes agent sessions, agent search, access checks, and startup more reliable.

**Platform availability:** the Local Linux search improvements are Android-only and are not available on iOS.

### New

- **PHP debugging.** Debug PHP scripts in a remote workspace through Xdebug and the PHP Debug adapter: set breakpoints, launch from the Debug panel, and let the editor configure the Xdebug environment. The adapter runs on the same remote host as the script; details are in `docs/php-debugging.md`.
- **Broader syntax highlighting.** Added grammars for C#, CSS, HTML, Ruby, Lua, Kotlin, XML, PowerShell, SQL and INI, JSX/TSX mapping, and PHP highlighting — including `<?php` auto-detection — inside Markdown code fences.
- **Provider model lists.** The AI chat header and the profile editor now read the models an endpoint actually offers (OpenAI-compatible `/models` and Ollama `/api/tags`), refresh on demand, and remember the last choice. A profile is named after its model until you name it yourself.
- **Agent session settings.** Agents that report their configurable options during the handshake now expose model and session choices in the AI header, remembered per launch command.
- **Interface scale.** Settings → Appearance → Interface scale (100%–150%) enlarges the whole app — chrome, icons, panels, dialogs, editor and terminal — as one zoom. iOS starts one step up to match Apple's type sizes; 100% opts out.

### Improved

- **Layout by available space.** The workspace now chooses its structure from the space it has instead of the device orientation. A window with room splits into a rail, a resizable and collapsible panel and the editor; one without gets the single-surface phone shell. Split View, resizable windows, portrait tablets and landscape phones now land on the right layout.
- **One panel design system.** Panels were rebuilt on one density scale and one status language. A phone Explorer shows 13 rows where it used to show 9, and running, waiting, success, warning, error and cancelled read the same in the AI panel, Git, Debug, LSP and Tasks.
- **The AI conversation as an IDE timeline.** Turns are no longer chat bubbles: the user's message is a quoted block, plan steps carry real state, each tool call is one compact row with a monospace command line and `+n −m` per changed file, and reviewing a change lists one row per file.
- **One scale for buttons, icons and controls.** Buttons, empty states, icons, the composer and the middle-panel controls all share one control size, UI text uses the platform font, and code and terminal use a real monospace chain across all eight themes.
- **Neutral light and dark palettes.** Light and dark were rebuilt around neutral grays with the brand accent reserved for state, radii and hairlines converged on one ladder, and every Git panel section now shares one header.
- **One menu surface.** Anchored popups and bottom sheets draw the same row, icon size and alignment, a menu hugs its widest entry, and panel-header commands become a command bar from tablet width up.
- **Explorer refinements.** Long file and directory names can be reached by scrolling the tree sideways, and rows use a touch-sized 44px band shared by files and directories instead of a raw Material list tile.
- **Refined workspace chrome.** Portrait bottom navigation height and icon-label spacing were tuned, and the floating agent status marker on the workspace edge is now a round ball, sized and positioned as before.
- **Faster, bounded agent search.** Workspace grep runs through ripgrep with global result budgets, and Local Linux/PRoot searches stream over `find` and `grep` instead of one remote read per candidate file — about 3s to 0.2s on the reference 1000-file fixture.
- **Clearer Pro access presentation.** The Pro access card and the subscription page describe trial, Early Access, paid and free from one source, with clearer wording for remaining trial time, restore, and a subscription linked to another account.

### Fixed

- Fixed SSH private-key connections losing pasted or imported key credentials after reopening a saved connection; imported keys are now retained securely instead of relying on temporary file-picker paths.
- Fixed Android Local Linux Explorer being unable to navigate up from `/workspace` to the guest root and directories such as `/home`.
- Fixed the phone "more" menus and popups: the Git, editor and terminal menus now open the same anchored popup the rest of the app uses, hug their widest row instead of filling the screen, stay usable while the soft keyboard is up, and no longer leave their own page on screen after an entry opens one.
- Reworked the terminal header into one VS Code-style band with tabs at the leading edge and commands at the trailing edge, and fixed iOS submitting a single Return press twice.
- Fixed the Android and iOS launch screen so one native startup layer holds the brand mark, slogan and loading bar in the app's own theme and language until the workspace is drawn.
- Fixed Early Access and paid Pro being denied to signed-in users by a missing or unreachable kill switch, a failed RevenueCat identity realignment, or server or device clock skew.
- Fixed the AI transcript losing the reader's place while scrolling history, the editor showing a stray divider and a duplicate Open Browser button with no file open, and a crash after closing modal sheets in the SSH, editor search, Git, settings and explorer file-search sheets.
- Fixed Git Commit Detail and Diff top spacing and readability, the sidebar selection animation, the LSP command clashing with the browser button, and inconsistent URL prompt, agent parameter row and Git history header styling.

## 1.1.8 · September 14, 2026 · Build 45

Version 1.1.8 begins **Early Access Pro** while making switching workspaces more flexible, strengthening Android Local Linux installation, file operations, and Git reliability, and refining Source Control and the overall visual hierarchy.

**Platform availability:** Local Linux improvements are Android-only and are not available on iOS.

### Early Access Pro

Early Access Pro opens advanced mobile workflows to more users over time: AI Agent, remote search, Git write workflows, multi-terminal, LSP, Debug, and Sync / Cache. Availability and displayed pricing vary by store, account, and region; check Google Play or the App Store for the current offer.

### New

- **Switch workspace directories.** Choose a different directory as the active local or SSH workspace. Previously opened directories are retained in recent history for quick return.

### Improved

- **More reliable Local Linux (Android only).** PRoot startup and runtime preparation are more robust, guest temporary directories are prepared as needed, and Ubuntu Base installation compatibility is improved.
- **Clearer file-access boundaries (Android only).** Editor, Search, language services, Git, Terminal, and Agent operations now use a consistent workspace scope in Local Linux, reducing errors caused by crossing runtime boundaries.
- **More reliable Local Linux Git (Android only).** Git operations in Local Linux workspaces, including file changes made by Tasks, run through the guest environment so status, diffs, and history reflect the actual workspace.
- **Improved open-source delivery (Android only).** Local Linux now includes more complete package, license, and source-provenance records.
- **Simpler visual hierarchy.** Themes, panels, tabs, Terminal commands, and the AI execution timeline have been refined to reduce distraction while keeping primary actions prominent.

### Fixed

- Fixed an issue that prevented input from an external physical keyboard on iPad from responding.
- Fixed Source Control not refreshing promptly after a branch switch and inconsistent commit-history styling.
- Fixed cases where incomplete Local Linux temporary-directory setup caused commands or installation flows to fail.

## 1.1.7 · September 12, 2026

Released September 12, 2026 (Build 41). This release adds an Android Local Linux development environment, improves HTML and link previews, and makes Editor, AI, and Task operations more reliable. It also brings external ACP agents and a unified SSH login environment.

### New

- **Android Local Linux workspace.** Use a bundled Ubuntu environment with Bash, Git, and SSH on supported ARM64 and x86_64 Android devices without root access. Install, start, stop, open, reset, or delete the environment through the existing SSH workspace experience. Not available on iOS.
- **HTML snapshot preview.** Preview the current HTML editor contents, including unsaved changes, with workspace CSS, JavaScript, and image assets. Projects that need a build step or backend still require their own development server.
- **Link buttons.** Open web links from Terminal, AI replies, and tool output through a shared browser action.
- **Local Linux introduction and open-source information.** The environment page explains storage, network access, process lifecycle, and deletion behavior, with direct access to bundled open-source licenses.
- **Unified Agent slash-command entry.** Type `/` for touch or keyboard completion, with built-in actions for new conversations, stop, and status. External commands come from the active ACP session and stay current as it runs.
- **External ACP agents.** Select and run ACP-compatible external agents in an SSH workspace.
- **Agent capabilities and sessions.** Capabilities, permission requests, session state, and run progress share one experience, with easy switching between the built-in agent and external runtimes.
- **Remote environment refresh.** Re-read the remote user's login environment from the Terminal menu; it also refreshes automatically after SSH reconnection.

### Improved

- **Clearer editor toolbar.** Symbol actions are grouped inside More, and the browser button moves to the title bar. The URL dialog uses shared styling and validates addresses before opening them.
- **Localized interface coverage.** Local Linux, browser controls, link buttons, Task actions, and related editor and AI metadata support English, Simplified Chinese, Japanese, Korean, and Russian, including statuses, errors, and accessibility labels.
- **Consistent workspace entry.** Local Linux shares workspace choice cards and standard dialog and button styles.
- **Consistent AI composer icons.** Commands, conversation actions, settings, and Send share the app's icon family and compact sizing while keeping primary-action and selected-state emphasis.
- **Simpler ACP settings and consistent execution presentation.** Launch internals collapse by default; unused placeholders and non-actionable options are hidden. Running tool metadata and output update a shared timeline.
- **ACP environment import.** Paste literal `export` assignments, `NAME=value` lines, or a JSON `env` object. Parsing libraries validate data without executing commands; preview values are masked and merged drafts require saving.
- **One SSH login environment.** Terminal, ACP servers, agent subprocesses, Tasks, Debug, language servers, Git, and external CLIs share the same remote environment resolver.
- **The user's real shell.** NimoteCode detects the remote account's default shell and loads its normal login environment across bash, zsh, fish, and other shells without workarounds.
- **Complete custom tool and variable inheritance.** User-defined `PATH`, locale, SSH agent, and custom service variables flow naturally to remote processes.
- **Safer diagnostics.** API keys, tokens, secrets, passwords, and similar environment values are redacted from logs and agent startup diagnostics.

### Fixed

- Restored scrolling to the latest AI content when returning from Editor, including long messages and deferred layout.
- Fixed Task lists changing before saves succeed, deleted tasks reappearing, and concurrent saves or refreshes losing updates. Save and Delete are mutually exclusive, failed operations preserve the draft, and configuration saves replace a temporary file.
- Fixed duplicate default task IDs, default configuration parsing, and task metadata being lost while editing.
- Fixed SSH permission and connection errors being treated as missing files, preventing accidental default task configuration creation.
- Fixed missing Agent file-change summaries, remote environment inheritance, and terminal link placement with wrapped lines, scrolling, and wide characters.
- Fixed commands working in Terminal but appearing missing in ACP agents, Claude Code, Codex CLI, Tasks, or Debug.
- Fixed ACP servers starting without the full remote environment and passing incomplete configuration to their subprocesses.
- Fixed stale environments and invalid `SSH_AUTH_SOCK` paths after SSH reconnection.
- Fixed unreliable inheritance of environment values containing spaces, line breaks, or shell metacharacters.

## 1.1.6 · September 9, 2026

This release makes getting started clearer and resolves several editor, browser, source-control, and iOS input issues.

### New

- **First-launch onboarding.** New users now receive a guided introduction to the core workspace before starting their first project.

### Improved

- **Monospace editor by default.** New editor settings now prioritize a code-oriented font from the start.
- **Clearer subscription information.** Subscription disclosures are tailored to the platform where the app is running.
- **Cohesive theme surfaces.** All bundled themes now use more restrained chrome, panel, and editor surface steps for a calmer IDE workspace.
- **Live theme updates.** Onboarding and the empty editor workspace now repaint immediately after a theme change.

### Fixed

- Restored Git status decorations in the Explorer.
- Resolved editor and in-app browser regressions.
- Prevented a false “Unable to open link” notice when a website opens successfully in the in-app browser sheet.
- Prevented duplicate iOS keyboard clients, improving keyboard and text-input reliability.

## 1.1.5 · September 6, 2026

This release completes more of the mobile development loop: open two files side by side, preview a web app, review Git changes, and keep Terminal and AI work dependable throughout a long session.

### New

- **In-app browser preview.** Open local and remote web projects without leaving the workspace, or jump from a Terminal URL directly to a preview.
- **Split editor panes.** View and edit two files side by side while each pane retains its own active tab and navigation state.
- **Built-in media preview.** Inspect images in the editor and play supported audio and video in the app.
- **A richer AI workspace.** AI Chat surfaces recent tasks and workspace context, while a compact global indicator keeps active Agent work visible across panels.
- **Optional editor AI tools.** Enable the AI tools bar only when it fits your workflow.
- **Open-source notices.** Settings now includes license and attribution information for bundled open-source software.

### Improved

- **More reliable remote development.** Stronger SSH connection handling and reuse reduce the cost of remote commands and preview tunnels.
- **Faster long sessions.** Hidden panels pause unnecessary work, browser resources are bounded, and frequent editor, search, Terminal, and AI updates are more efficient.
- **Stronger Source Control.** Local and remote status refresh, first commits, active-workspace commands, history, and diff rendering are more consistent.
- **Cleaner interface.** Refined editor menus, Search sizing, authentication, subscriptions, Explorer, AI responses, and dark-theme details.

### Fixed

- Fixed dropped repeated terminal characters, duplicate IME composition commits, and keyboard-input issues.
- Stabilized terminal recovery, panel switching, repeated media playback, and browser-preview dismissal.

## 1.1.4 · September 6, 2026

This update improves product transparency.

- **New:** Review bundled open-source licenses and attributions in Settings.
- **Improved:** Product information is clearer and easier to review.

## 1.1.3 · September 2, 2026

AI collaboration and workspace management now feel more continuous.

- **New:** Follow-up prompts continue an AI task without losing its context; new users now receive a 14-day trial.
- **Improved:** Refined the sidebar, project initialization, task review, and tablet layout.
- **Fixed:** Improved Source Control initialization and AI retry behavior.

## 1.1.2 · August 30, 2026

AI task progress is clearer and mobile work feels smoother.

- **New:** Clearer task progress, action state, and result information.
- **Improved:** Refined AI Chat, quick actions, and session-history recovery.
- **Fixed:** Improved runtime stability on iOS.

## 1.1.1 · August 29, 2026

Nimote AI Assistant receives a major upgrade.

- **New:** More dependable multi-step AI task execution.
- **Improved:** Clearer task status and results, better chat typography, and improved accessibility.
- **Fixed:** More reliable session recovery after interrupted tasks.

## 1.1.0 · August 28, 2026

A new generation of mobile AI coding arrives in NimoteCode.

- **New:** Stronger understanding, planning, and controlled execution for complex coding tasks.
- **Improved:** Better context continuity across AI, Editor, Terminal, and Git.

## 1.0.9 · August 5, 2026

Terminal use on mobile is clearer and more comfortable.

- **Improved:** Refined localized prompts, text display, and mobile readability.
- **Fixed:** Improved terminal reliability in everyday use.

## 1.0.8 · August 1, 2026

AI collaboration is more reliable.

- **Improved:** Simplified AI-service setup and task start-up.
- **Fixed:** Resolved issues in selected connection and switching flows.

## 1.0.7 · August 1, 2026

Cross-device use is more dependable.

- **Improved:** Improved iOS compatibility and app-resource display.
- **Fixed:** Fixed a launch-display issue on selected devices.

## 1.0.6 · August 1, 2026

This release focuses on everyday development stability.

- **Improved:** Better consistency across editing, connections, and the in-app workflow.
- **Fixed:** Addressed stability issues affecting everyday use.

## 1.0.5 · June 30, 2026

Themes are more consistent and easier to read.

- **New:** **Unified themes.** Light and dark modes now share a clearer visual hierarchy.
- **Fixed:** Corrected selected visual differences after switching themes.

## 1.0.4 · June 27, 2026

Project and AI workflows are smoother.

- **Improved:** Better continuity between project actions, settings, and the AI panel.
- **Fixed:** Resolved common issues while working with projects.

## 1.0.3 · Build 27 · June 24, 2026

This update improves mobile presentation and product information.

- **Improved:** Refined theme colors and text display.
- **Fixed:** Improved rotation handling and editor-menu reliability.

## 1.0.3 · Build 26 · June 26, 2026

AI Chat and task collaboration now share one workflow.

- **New:** Start conversations, handle tasks, and review results from one workspace.
- **Improved:** Refined the AI panel, input, and task feedback.

## 1.0.3 · Build 25 · June 24, 2026

This update polishes the public-release experience.

- **Improved:** Refined accounts, trials, menus, and typography for mobile.
- **Fixed:** Addressed small interface issues in everyday use.

## 1.0.3 · Build 24 · June 23, 2026

This update improves app reliability.

- **Improved:** Continued to improve the everyday experience and feedback capabilities.
- **Fixed:** Resolved known issues in subscriptions, trials, and interface display.

## 1.0.3 · Build 23 · June 20, 2026

NimoteCode launches its mobile development workspace.

- **New:** Browse projects, edit code, use a terminal, review Git, and get AI help in one app.
- **Improved:** Touch, keyboard, and reading experiences are optimized for phones and tablets.
