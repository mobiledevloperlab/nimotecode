---
title: Mobile Development Resources | NimoteCode
description: Practical technical resources on mobile development, Android Linux, PRoot, remote SSH development, mobile AI coding, and coding-agent workflows.
---

# モバイル開発リソース


これらは、開発者がどこで作業を実行すべきか、電話機が実際のエンジニアリング ループにどのように適合するかを評価するための技術的な開始点です。彼らは最初にトレードオフについて説明します。 NimoteCode is relevant where a mobile editor, SSH terminal, Git review, and Local Linux workspace help put that workflow into practice.


## Choose a development environment


| Question | Resource | Continue with |
| --- | --- | --- |
| Should this work be local, remote, or cloud-based? | [Mobile development: choosing a workspace](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/mobile-development.md) | [Examples and workflows](https://github.com/mobiledevloperlab/nimotecode/tree/main/examples) |
| How do Termux, PRoot, AVF, SSH, and cloud workspaces differ? | [Android Linux development](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/android-linux-development.md) | [Local Linux overview](/docs/local-linux) |
| When should I keep the repository on a remote host? | [Remote development from a phone](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/remote-development-from-phone.md) | [SSH workspaces](/docs/ssh) |

## AI コーディングと SSH ワークフロー


- [Mobile AI coding](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/mobile-ai-coding.md) explains how to keep agent work inspectable and testable.

- [SSH 開発ツール](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/ssh-development-tools.md) は、安全な接続をエディタ、ターミナル、および Git レビュー機能にマッピングします。

- [電話機のクロード コード](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/claude-code-on-phone.md) は、NimoteCode がインストールまたはプロキシすることを暗示することなく、ホストにインストールされるエージェントのワークフローについて説明します。

- The [Claude Code](https://github.com/mobiledevloperlab/nimotecode/tree/main/examples/claude-code-over-ssh) and [Codex](https://github.com/mobiledevloperlab/nimotecode/tree/main/examples/codex-over-ssh) examples turn those principles into a reviewable SSH loop.


## Android ローカル Linux とプリセット


Android Local Linux uses Ubuntu through PRoot on supported Android devices. [概要](/docs/local-linux)から始めて、[アーキテクチャ](/docs/local-linux/architecture)、[互換性](/docs/local-linux/compatibility)、および[セキュリティと整合性](/docs/local-linux/security-integrity)を読んでください。オプションの開発ツールセット、マニフェスト、ハッシュ、およびテスト レコードは、独立した [NimoteCode Linux Presets](https://github.com/mobiledevloperlab/nimote-linux-presets) リポジトリによって所有されます。


All resource source files are versioned in the [main repository](https://github.com/mobiledevloperlab/nimotecode/tree/main/resources); report corrections or focused additions through [NimoteCode Issues](https://github.com/mobiledevloperlab/nimote_issues/issues).
