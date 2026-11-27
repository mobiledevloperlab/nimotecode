---
title: "Nimote Connect の Host セッション | NimoteCode"
description: "Nimote Connect に含まれる Host サービスで、ターミナル、タスク、対応 Agent セッションを PC 上で継続できます。"
---

# Nimote Connect の Host セッション

Nimote Connect に含まれる Host サービスで、ターミナル、タスク、対応 Agent セッションを PC 上で継続できます。

Nimote Connect には、ターミナル、タスク、対応 Agent セッションを管理する NimoteHost サービスが含まれます。プロジェクトにアクセスできる SSH アカウントを使い、PC と Host サービスを稼働させてください。アプリ内の Host セッションには Pro が必要です。

## Nimote Connect をインストール {#download-nimotehost}

[Nimote Connect をインストール](/ja/docs/host/getting-started) · [パッケージの互換性](/ja/docs/host/compatibility)

NimoteHost は独立したオープンソースプロジェクトです。NimoteCode での導入と更新には Nimote Connect を使います。

## Host の機能と得られること

開発パソコンで実行し、スマートフォンから進捗を確認できます。既存のファイルとツールを使い、判断やレビューが必要なときに作業へ戻れます。

| 機能 | 得られること |
| --- | --- |
| ターミナルとタスク管理 | ビルド、テスト、スクリプトを実行。切断後も管理対象プロセスが続き、再接続で出力と操作に戻れます。 |
| 対応 Agent との協働 | Codex、Claude Code、OpenCode の会話、ツール結果、承認を確認し、対応時は追加指示を送れます。 |
| セッションと受信箱 | 検索、絞り込み、固定を使い、承認待ち、失敗、レビュー待ちを見つけられます。 |
| 検証とコードレビュー | 実際のテスト記録、終了コード、差分を確認。 |
| 既存環境の利用 | Linux、macOS、Windows の CLI またはデスクトップ管理画面で、既存のプロジェクトを使えます。 |
| オープンソース | 完全な Host ソースを確認・ビルド・変更し、連携の追加や改善の貢献ができます。 |

外出前にテストを開始して後から結果を確認したり、Agent の修正中に承認を処理し、完了後に差分をレビューできます。Host とパソコンは稼働を続ける必要があります。再起動は元のプロセスを復元しません。各機能は Host とインストール済みツールに依存します。

## NimoteCode と NimoteHost

NimoteCode はクライアント、NimoteHost はパソコン側の実行サービスです。Host は Linux、macOS、Windows 向けの CLI とデスクトップ管理画面を提供し、[専用リポジトリ](https://github.com/mobiledevloperlab/nimotehost)で完全なソースを Apache-2.0 として提供します。NimoteCode は商用クローズドソースです。Host は単独でも動作し、RPC、Go クライアント、MCP で連携できます。

接続は **NimoteCode → SSH → NimoteHost → プロジェクトのツール**です。追加の Nimote アカウントや Host の公開ポートは不要で、認証情報はパソコンに残ります。コマンドは Host の OS アカウント権限で動くため、ユーザーを分離する場合は OS アカウントを分けてください。通常の SSH に Host は不要です。Host は切断後のタスク継続と対応 Agent の管理を追加します。

NimoteHost セッションには NimoteCode 2.4.1 以降が必要です。サービスを導入しても旧アプリに入口は追加されません。

## 完全なソース：確認、変更、貢献

**NimoteHost の完全なソースは Apache-2.0 です。** Host ランタイム、CLI、デスクトップ管理画面、連携 SDK を含みます。実行、認証、履歴の実装を確認し、自分でビルド・導入できます。NimoteCode クライアントは商用クローズドソースです。

- リポジトリを Fork し、動作や画面、導入方法を変更できます。アプリ連携のプロトコル互換性は維持してください。
- `pkg/pluginsdk` でプラグイン、`pkg/hostclient` で Go 連携を開発し、RPC や MCP に接続できます。MCP は既定で読み取り専用です。
- 不具合や提案は Issue、修正、Agent アダプター、翻訳、文書は Pull Request で貢献できます。大きな変更は先に議論し、貢献ガイドの検証を実施してください。

[完全なソース](https://github.com/mobiledevloperlab/nimotehost) · [ライセンス](https://github.com/mobiledevloperlab/nimotehost/blob/master/LICENSE) · [貢献ガイド](https://github.com/mobiledevloperlab/nimotehost/blob/master/CONTRIBUTING.md) · [プラグイン SDK](https://github.com/mobiledevloperlab/nimotehost/blob/master/docs/plugin-system/plugin-sdk.md)

### 透明な実装とアクセス管理

既存の認証済み SSH を使い、認証付き HTTP API はループバックのみで待ち受けます。Host の認証情報はパソコンに残り、追加の Nimote 中継や公開 API ポートは不要です。実行場所とコードを自分で管理できます。

コマンドは Host の OS アカウント権限で動作します。適切なアカウントを使い、Agent とプラグインの権限を確認し、依存関係を更新してください。Agent の入力やプロジェクト情報は設定済みモデル提供元に送信される場合があります。公開ソースは確認を可能にしますが、脆弱性ゼロや独立監査の完了を保証するものではありません。[セキュリティ方針と非公開報告](https://github.com/mobiledevloperlab/nimotehost/blob/master/SECURITY.md)を参照してください。

## ダウンロードと導入 {#host-install}

[ダウンロードと導入](/ja/docs/host/getting-started#host-install)

### ソースから導入 {#host-source}

[ダウンロードと導入](/ja/docs/host/getting-started#host-source)
