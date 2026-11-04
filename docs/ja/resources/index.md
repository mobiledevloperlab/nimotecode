---
title: 厳選チュートリアルと開発リソース | NimoteCode
description: "開発ホストへの接続、モバイルでの GitHub 操作、Android Linux の評価、AI の変更の検証に役立つブログと公式資料を紹介します。"
---

# 厳選チュートリアルと開発リソース

開発ホストへの接続、モバイルでの GitHub 操作、Android Linux の評価、AI の変更の検証に役立つブログと公式資料を紹介します。

[ブログ記事をすべて見る](/blog/) · [アプリの操作ガイド](/ja/docs)

## ブログから学ぶ実践的な作業

NimoteCode の記事から、手順・デモ・測定記録を厳選しました。リンク先の記事は英語です。

<div class="guide-card-grid">
<a class="guide-card" href="/blog/github-from-android-iphone"><strong>モバイルのリポジトリから Pull Request へ</strong><span>ログイン、クローン、編集、検証、レビューをつなぐ GitHub ワークフロー。</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
<a class="guide-card" href="/blog/tailscale-ssh-android-mac-linux"><strong>Tailscale と SSH でホストに接続</strong><span>Mac・Linux への接続、ネットワーク設定、再接続の確認。</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
<a class="guide-card" href="/blog/android-linux-performance-benchmark"><strong>Android Linux の開発性能を調べる</strong><span>単一端末での CoreMark、SQLite コンパイル、並列ビルドの記録を参考に、自分の環境を評価。</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
<a class="guide-card" href="/blog/can-an-ai-agent-really-code-from-a-phone"><strong>スマートフォンで AI Agent の作業を追う</strong><span>計画、編集、実行、検証を実際のデモで確認。</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
<a class="guide-card" href="/blog/best-ssh-clients"><strong>モバイル SSH・AI 開発ツール 7 選</strong><span>ターミナル、ホスト上の Agent、統合ワークスペースを用途別に比較。</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
</div>

## 外部の公式資料

リンク先は英語です。Pro Git は日本語などの翻訳も提供しています。確認日：2026-11-04。

- **[Tailscale · Tailscale SSH](https://tailscale.com/docs/features/tailscale-ssh)** — 専用 SSH 機能の認証・アクセス制御と、Tailscale 上の通常の SSH との違い。

- **[Git · Pro Git オンライン書籍](https://git-scm.com/book/en/v2)** — ブランチ、リモート、取り消し操作を学び、差分と履歴を理解。

- **[GitHub Docs · Pull Request のレビュー](https://docs.github.com/en/pull-requests/how-tos/review-pull-requests/reviewing-proposed-changes-in-a-pull-request)** — ファイル単位の確認、コメント、レビュー送信を学ぶ。

- **[PRoot · 仕組みと使用例](https://proot-me.github.io/)** — root 不要の Linux 環境を支えるユーザー空間のパス変換を理解。

## Choose a development environment


| Question | Resource | Continue with |
| --- | --- | --- |
| Should this work be local, remote, or cloud-based? | [Mobile development: choosing a workspace](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/mobile-development.md) | [Examples and workflows](/ja/use-cases/) |
| How do Termux, PRoot, AVF, SSH, and cloud workspaces differ? | [Android Linux development](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/android-linux-development.md) | [Local Linux overview](/docs/local-linux) |
| When should I keep the repository on a remote host? | [Remote development from a phone](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/remote-development-from-phone.md) | [SSH workspaces](/docs/ssh) |

## AI コーディングと SSH ワークフロー


- [Mobile AI coding](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/mobile-ai-coding.md) explains how to keep agent work inspectable and testable.

- [SSH 開発ツール](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/ssh-development-tools.md) は、安全な接続をエディタ、ターミナル、および Git レビュー機能にマッピングします。

- [電話機のクロード コード](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/claude-code-on-phone.md) は、NimoteCode がインストールまたはプロキシすることを暗示することなく、ホストにインストールされるエージェントのワークフローについて説明します。

- The [Claude Code](/ja/docs/ai) and [Codex](/ja/docs/ai) examples turn those principles into a reviewable SSH loop.


## Android ローカル Linux とプリセット


Android Local Linux uses Ubuntu through PRoot on supported Android devices. [概要](/docs/local-linux)から始めて、[アーキテクチャ](/docs/local-linux/architecture)、[互換性](/docs/local-linux/compatibility)、および[セキュリティと整合性](/docs/local-linux/security-integrity)を読んでください。オプションの開発ツールセット、マニフェスト、ハッシュ、およびテスト レコードは、独立した [NimoteCode Linux Presets](https://github.com/mobiledevloperlab/nimote-linux-presets) リポジトリによって所有されます。


All resource source files are versioned in the [main repository](https://github.com/mobiledevloperlab/nimotecode/tree/main/resources); report corrections or focused additions through [NimoteCode Issues](https://github.com/mobiledevloperlab/nimote_issues/issues).
