---
title: Credentials and operation review | NimoteCode
description: "Configuration, procedures, and interface reference for credentials and operation review."
---

# Credentials and operation review

## SSH access

Use an SSH account with permissions appropriate to the project. Check the host, username, and workspace root when opening a session. Proxy settings affect how a connection reaches the host; they do not change the account’s permissions.

## Provider credentials

Enter API keys in the provider configuration form. Do not include credentials in prompts, project files, or shared logs. Revoke and replace an exposed key through the provider.

## Plans and file changes

Review an Agent plan before approving tools in Confirm mode. Review plugin permission requests when installing or updating. Before committing changes, inspect the [Git diff](/docs/source-control) and run the relevant project checks.
