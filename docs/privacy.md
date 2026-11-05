---
title: "Privacy Policy | NimoteCode"
description: "How NimoteCode handles app and website data, credentials, AI integrations, analytics and deletion."
pageClass: trust-page
---

<TrustNav />

# Privacy Policy

<p class="trust-meta">Originally effective: 2026-04-16 · Last updated: 2026-11-05</p>

This policy covers the NimoteCode app, official website and support channels. Privacy contact: [support@nimotecode.com](mailto:support@nimotecode.com).

<div class="trust-summary">

**Your development environment, your connections.** SSH, AI, GitHub, MCP and external agents connect to the services enabled for your workflow. Account deletion, device cleanup and store subscription cancellation are separate actions.

[Delete an account](/account-delete) · [Privacy support](mailto:support@nimotecode.com?subject=NimoteCode%20privacy%20request)

</div>

## Data we process {#data}

| Context | Data and purpose | Storage or recipient |
| --- | --- | --- |
| Account and sign-in | User ID, email and sign-in provider information for authentication and account management. Apple may supply a relay email; some features use a guest identity. | Firebase Authentication and Firebase cloud account services. |
| Pro, purchases and trials | Transactions, entitlement, store, expiry and trial state for access verification and abuse prevention. | RevenueCat, Apple / Google stores and Firebase backend. Stores handle payment details. |
| Device trial checks | Platform device identifiers, Firebase installation identifiers or generated alternatives are hashed for trial checks. Hashing does not make them anonymous. | Original identifiers are processed on-device; verification hashes and trial records go to the backend. |
| Workspaces and credentials | Host, port, username, paths, preferences and saved passwords, private keys, passphrases, proxy credentials and API keys. | Connection metadata on-device; app-managed secrets in platform secure storage. Services receive the authentication information needed for connections. |
| AI and code tools | Prompts, selected content, relevant code, paths, tool inputs/outputs and model replies to carry out requested or authorized tasks. | Selected AI providers, GitHub, MCP services, external agents and services they use. |
| Usage analytics | Sessions, feature use, platform, version, locale region, user type, workspace paths and operation metadata; signed-in activity can be linked to a user ID. | Firebase Analytics, with an on-device queue before transmission. |
| Support and reports | Email, issue description and attachments you send; AI reports can include reply excerpts, reason, model and environment information. | Local reports; support mailbox and email service after you send. Public issues are handled by GitHub. |

## Purposes and operational diagnostics {#purposes}

Connection settings also include the authentication method and workspace root. Preferences include theme, language, editor and keyboard settings. AI configuration includes provider type, base URL, model and your API key. SSH passwords authenticate connections you initiate; ordinary connection settings are stored separately from passwords in secure storage. The current AI configuration save path also separates API keys from ordinary app preferences.

We use this information for authentication and account security; workspaces, editing, terminal, source control, AI and Tasks; subscription and trial verification; and reliability, security and support.

The app may generate operational logs for troubleshooting, reliability and security. Its current general logging component suppresses debug-level messages in release builds. This does not mean every other log or error is anonymous or free of sensitive content. Diagnostic logs are separate from the Firebase usage analytics described above. Review and remove credentials and private project content before voluntarily sending logs or screenshots.

## Credentials, conversations and files {#storage}

App-managed SSH passwords, private keys, passphrases, proxy authentication, AI API keys, GitHub tokens and MCP configuration use platform secure storage (iOS Keychain or Android Keystore-backed encrypted storage). Ordinary connection settings retain metadata; this does not mean the app never stores SSH credentials. Removing a saved SSH profile deletes its associated secure credentials; removing an AI configuration removes its API key.

AI conversation history is saved to **app-local storage by default**, including messages and tool/project context used to restore sessions. You can disable automatic saving and delete existing history. AI reports are also local until cleared or removed by storage count limits. Turning off saving does not delete existing records.

Workspace files, sync caches, workflow metadata and external-agent records may separately exist on your device, remote host or workspace, including `.nimote` directories. Deleting app history does not delete those copies or data already received by third parties. Ordinary history and workspace files are not equivalent to secure credential storage; keep secrets out of prompts and project files.

## AI, MCP, GitHub and other connections {#integrations}

Direct model requests go to the provider endpoint you select. Agent tasks can read relevant files and include tool output in model context, depending on the task, permissions and mode. The first-send AI privacy screen presents related settings; review content and recipients before sending or approving actions.

HTTP MCP servers receive tool requests; stdio servers run in the selected device, Local Linux or SSH environment. External ACP agents are independent runtimes with their own credentials, logs, connections and storage. GitHub authorization or personal access tokens enable your chosen repository, issue and pull request operations. Publishing, pushing or sharing may make content visible to others.

Review each recipient's retention, model-training and deletion terms. BYOK does not mean a provider retains no data or that every tool request goes only to a model provider. Remove configurations, disconnect integrations or revoke authorization to stop future access; previously transmitted data is subject to the recipient's deletion process.

## App analytics and website visits {#analytics}

**App analytics:** the current app initializes Firebase Analytics and records the usage information described above. It is not entirely anonymous. The current app does not provide a general analytics opt-out switch; website choices do not disable app analytics. Contact us about privacy requests and avoid including secrets or sensitive paths in support materials.

**Website analytics:** Google Analytics loads only after you allow it. It measures page visits and link interactions, such as downloads and documentation, using page paths, link text, destination paths, campaign labels and browser/device information. Cookies and online identifiers may be used. You can decline or withdraw through **Website privacy settings** in the footer without losing access to pages or download links. We do not set a signed-in user ID for website analytics, enable Google Signals or enable ad personalization.

Your browser stores your analytics choice; clearing site storage resets it. Website hosting, delivery and security services still process IP addresses, requests and basic connection information to serve pages and prevent abuse.

## Permissions and device features {#permissions}

- **Android:** network access for connections, authentication and entitlement checks; billing for Google Play purchases; notifications and a special-use foreground service for user-initiated background SSH sessions; external storage permissions only through Android 9. The manifest also declares `AD_ID`; SDK identifier handling depends on system and SDK settings.
- **iOS / iPadOS:** networking, the system document picker and App Store billing; Live Activities can show task status. Document access covers your selected files or folders.
- The current app does not declare camera, microphone, contacts or precise-location access for these features. Notifications and lock-screen status may be visible to others; manage them in system settings.

## Providers and international processing {#providers}

[Google / Firebase](https://firebase.google.com/support/privacy) provides authentication, cloud and analytics services; [RevenueCat](https://www.revenuecat.com/privacy/) synchronizes subscriptions. Store purchases are subject to [Apple's privacy policy](https://www.apple.com/legal/privacy/) or [Google's privacy policy](https://policies.google.com/privacy). GitHub integrations and public issues use [GitHub's privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement). Your configuration determines AI, MCP and remote-host recipients.

These services may process data outside your country. Locations and safeguards depend on the actual service and configuration; applicable notice, authorization and safeguard requirements apply. We do not sell personal data. Relevant information may be disclosed when necessary for legal obligations, security or disputes.

## Retention and deletion {#retention}

| Data | Retention and deletion |
| --- | --- |
| Account | Kept to provide the account; successful deletion removes the authentication account and primary user record. |
| Subscription and trial | Retained for entitlement verification, trial-abuse prevention, disputes and legal obligations. Deletion releases current subscription ownership but does not erase all transaction or trial records; deletion linkage, former user identifiers and trial hashes may remain. |
| Conversations, settings, credentials and files | Managed through device/workspace deletion controls. Revoking a third-party credential is separate from deleting its local copy. |
| Analytics and service logs | Governed by service retention settings and necessary security/troubleshooting purposes. Account deletion does not automatically erase all historical analytics; you may request deletion of associated data. |
| Support records | Kept to handle requests and follow-up, and for necessary dispute or legal retention. Send only what is needed. |

There is no single retention period for all categories. Exceptions must be limited to their specific purpose, applicable obligation and necessary duration. Contact us for the scope and handling of retained records. See [Account deletion](/account-delete).

## Your choices and rights {#rights}

You can delete local history and configurations, stop optional integrations, manage system permissions, decline website analytics and initiate deletion under **Settings → Delete account**. If you cannot sign in or have uninstalled the app, use the [web deletion request](/account-delete) without reinstalling.

Subject to applicable law, you may request access, correction, a copy or deletion of personal data, withdraw consent, or restrict or object to relevant processing. Email [support@nimotecode.com](mailto:support@nimotecode.com?subject=NimoteCode%20privacy%20request) with the request and necessary account information. We may verify identity and will explain progress, expected completion or reasons a request cannot be fulfilled. Applicable legal deadlines take precedence. Never send passwords, verification codes, private keys or full payment details.

## Security, children and updates {#updates}

We use secure credential storage and authentication safeguards, but cannot guarantee the security of every device, configured endpoint or third-party environment. NimoteCode is for developers and is not directed to children. People under 13, or a higher applicable local minimum age, should not create accounts or submit personal data. Store content ratings are separate from this data-processing age threshold. Contact support about children's data concerns.

We update the date when this policy changes. Material changes to data purposes or sharing will receive additional notice or consent where required.

## Contact {#contact}

Use private email for privacy, account and deletion requests: <mailto:support@nimotecode.com>. Public product bugs and ideas can use GitHub Issues: <https://github.com/mobiledevloperlab/nimote_issues/issues>. Do not post personal information or credentials in public issues.
