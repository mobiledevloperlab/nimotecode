---
title: "Support Center | NimoteCode"
description: "Help with NimoteCode connections, AI, purchases, cancellations, privacy and account deletion."
pageClass: trust-page
---

<TrustNav />

# Support Center

<p class="trust-meta">NimoteCode · Product help and private support</p>

Start with your issue below. Use private email for account, purchase and privacy questions. Remove passwords, private keys, API keys, verification codes and sensitive project content before sharing.

<div class="trust-card-grid">
<a class="trust-card" href="/docs/ssh"><strong>SSH & connections</strong><span>Hosts, authentication, proxies and troubleshooting →</span></a>
<a class="trust-card" href="/docs/ai"><strong>AI, agents & MCP</strong><span>Providers, tool permissions and environments →</span></a>
<a class="trust-card" href="#purchases"><strong>Purchases & restoration</strong><span>Restore Pro, cancel renewal or request a refund →</span></a>
<a class="trust-card" href="/account-delete"><strong>Privacy & deletion</strong><span>Delete an account and understand what remains →</span></a>
</div>

## Quick checks {#quick-checks}

**SSH:** check the host, port, username, authentication method and network reachability. Start with a saved profile and a read-only command such as `pwd` to confirm the current path.

**AI provider / API key:** verify the base URL, model name and provider-account permissions. Model access and API billing are determined by your provider. Never send your API key to support.

## Purchases, restoration and cancellation {#purchases}

If paid access is missing, first check the **Apple / Google store account used to purchase**, then the NimoteCode account and **Restore Purchase** in the app. The store account and app account are separate identities. Do not purchase again just to troubleshoot.

| Action | Apple App Store | Google Play |
| --- | --- | --- |
| Manage or cancel | [Manage subscriptions](https://apps.apple.com/account/subscriptions) | [Manage subscriptions](https://play.google.com/store/account/subscriptions) |
| Request refund | [Apple refunds](https://reportaproblem.apple.com/) | [Google Play refunds](https://support.google.com/googleplay/answer/2479637) |

Uninstalling, signing out and deleting your account do not cancel a subscription. Cancellation generally takes effect after the paid period, subject to store rules and law. Early Access and app device trials do not themselves start billing; store subscription trials may convert to paid access. See [Terms](/terms#billing).

## Self-service guides {#guides}

- [Provider and credential configuration](/docs/configuration) · [Accounts and subscriptions](/docs/account-subscription)
- [Android Local Linux](/docs/local-linux) · [Plugins](/docs/plugins)
- [Git Source Control](/docs/source-control) · [Sync and cache](/docs/sync-cache)
- [FAQ](/docs/faq) · [What's new](/changelog)

## Contact support {#contact}

<div class="trust-summary">

**Private support:** [support@nimotecode.com](mailto:support@nimotecode.com?subject=NimoteCode%20support)

Use email for accounts, subscriptions, privacy, deletion and security vulnerabilities. We aim to first respond to urgent access issues in 1–2 business days and regular requests in 2–3 business days. This is not a resolution deadline or a 24/7 service commitment.

</div>

Use this template; include account email or an order reference only when relevant:

```text
Issue category:
Platform / OS version / NimoteCode version:
Workspace: local / SSH / Android Local Linux
Steps to reproduce:
Expected and actual results:
Steps already tried:
Redacted error information:
```

Do not send entire workspaces, raw log archives, payment card numbers or verification codes. We will explain any request for more information. Use [GitHub Issues](https://github.com/mobiledevloperlab/nimote_issues/issues) for public bugs and ideas; **never post account email, orders, secrets or unredacted screenshots there**.

## AI responses and safety concerns {#ai-report}

The current AI response report action saves a local report and attempts to open an email draft. **Saving or opening a draft does not send the report to support.** Review and send it; if no email app is available, email the necessary redacted details directly. Include the reason, provider, model, version and relevant response excerpt, without a full conversation or API key.

## Privacy and deletion {#privacy}

Read [Privacy](/privacy) for data handling and [Account deletion](/account-delete) for in-app steps or a web request without signing in. Change website analytics through **Website privacy settings** in the footer; that choice does not control mobile-app analytics.
