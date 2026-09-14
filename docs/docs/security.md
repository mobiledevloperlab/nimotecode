---
title: Security and Safety | NimoteCode
description: Practical security guidance for NimoteCode SSH workspaces, provider credentials, AI Agent review, terminal commands, Git changes and subscription verification.
---

# Security and Safety

NimoteCode can work with SSH access, provider credentials, terminal commands and file changes. The app provides secure-storage and controlled-workflow mechanisms, but safe remote development still depends on the choices you make for each host and action.

## Credentials and access

- Use separate, least-privilege SSH accounts for sensitive environments.
- Prefer private-key authentication for critical hosts and confirm the host and project root on every session.
- Treat AI provider credentials as sensitive; configure them in the app’s protected storage flow and rotate them with the provider when necessary.
- Keep subscription verification tied to your intended account and platform-store identity.

## AI Agent and write actions

AI Agent separates tool execution from a plain chat response and applies validation and locking layers around file and command work. Still, review every proposed command and change, especially when the workspace has production access. Use [Source Control](/docs/source-control) diff review before committing or pushing.

## A safer remote routine

1. Verify the SSH host, user and workspace root.
2. Start with inspection or a low-risk command.
3. Read the terminal output and AI proposal in context.
4. Make the smallest necessary change.
5. Test it and review the Git diff before delivery.

Related: [SSH Workspace](/docs/ssh) · [AI Chat and Agent](/docs/ai) · [Configuration](/docs/configuration)
