---
title: NimoteCode ドキュメント
description: "NimoteCode の4つのモード、SSH、Android Local Linux、AI コーディング、Git、リモート開発を紹介します。"
---

# NimoteCode ドキュメント

まず[クイックスタート](/ja/docs/quick-start)でワークスペースを開き、編集とコマンド実行を試してください。その後、目的に合うガイドを選びます。

NimoteCode 2.5.0 では、[個人用 Tailscale でペアリング済みの PC に接続](/ja/docs/ssh#paired-computers)、[tmux で SSH ターミナルを再開](/ja/docs/terminal#persistent-ssh-terminal)、[SSH で NimoteHost をセットアップ](/ja/docs/host/getting-started#install-over-ssh)できます。

## ファイルとコマンドの実行場所を選ぶ

| 目的 | 最初のガイド | 確認すること |
| --- | --- | --- |
| 端末上のファイルを編集する | [ローカルと SSH のワークスペース](/ja/docs/ssh) | ローカルフォルダーはファイルへのアクセスを提供します。コマンド実行には SSH または Local Linux が必要です。 |
| 既存のパソコンやサーバーを使う | [ローカルと SSH のワークスペース](/ja/docs/ssh) | SSH で接続し、リモートにあるプロジェクトとツールを使います。 |
| 切断後もリモートタスクに戻る | [開発マシン](/ja/docs/host) | パソコンに Nimote Connect を導入し SSH で接続します。Host が動作中なら管理対象のプロセスを継続できます。 |
| Android で Linux ツールを使う | [導入と初回実行](/ja/docs/local-linux/getting-started) | 先に端末要件を確認してから導入します。対応 Android 端末のみで利用できます。 |

4つのアプリモードは操作画面を選び、ワークスペースはファイルとコマンドの場所を決めます。Host はパソコン側のサービスも必要です。モード選択は[クイックスタート](/ja/docs/quick-start)を参照してください。

## 目的別にガイドを探す

### はじめに

| ガイド | 用途 |
| --- | --- |
| [クイックスタート](/ja/docs/quick-start) | ワークスペースを開く · ファイルを開いて編集する · コマンドを実行する · AI Agent を実行する |
| [NimoteCode よくある質問](/ja/docs/faq) | ワークスペース、AI 設定、機能の要件を確認します。 |

### ワークスペースと実行環境

| ガイド | 用途 |
| --- | --- |
| [ローカルと SSH のワークスペース](/ja/docs/ssh) | ワークスペースを選ぶ · ローカルフォルダーを開く · SSH 接続を設定する |
| [Windows SSH と SFTP](/ja/docs/windows-ssh-sftp) | Windows OpenSSH の設定と SSH／SFTP 接続の問題を確認します。 |
| [同期とキャッシュ](/ja/docs/sync-cache) | 転送方向を選ぶ · 転送を開始して確認する |
| [Docker と Dev Containers](/ja/docs/docker) | SSH ホスト上の Docker リソースを管理し、設定済み Dev Container ワークスペースを開きます。 |

### 編集・実行・Git

| ガイド | 用途 |
| --- | --- |
| [コードエディター](/ja/docs/editor) | ファイルを開いてタブを切り替える · テキストを選択して編集する · シンボルと履歴をたどる |
| [ワークスペース内の検索](/ja/docs/search) | ファイルの内容を検索する · 結果が表示されない場合 |
| [ターミナル](/ja/docs/terminal) | ワークスペースのコマンドを実行する · 出力を検索・コピー・分析する · リモート環境を更新する |
| [タスク](/ja/docs/tasks) | 再利用するコマンドを作成する · 実行して出力を確認する |
| [Git と GitHub](/ja/docs/source-control) | 差分、コミット、ブランチ、GitHub ワークフローを確認します。 |
| [言語サービス（LSP）](/ja/docs/lsp) | 言語サーバーの設定を確認する · 診断とコードアクションを使う |
| [デバッグ](/ja/docs/debug) | デバッグセッションを準備する · 一時停止したプログラムを調べる |

### AI と拡張機能

| ガイド | 用途 |
| --- | --- |
| [AI 提供元とモデルの設定](/ja/docs/configuration) | モデル提供元の設定、接続テスト、プライバシー設定。 |
| [AI Chat・Agent・MCP](/ja/docs/ai) | 会話を始める · Agent を選ぶ · 計画を承認して実行を確認する |
| [カスタムプラグイン](/ja/docs/plugins) | 最初のプラグインを作成する · プレビュー・権限・実行 · バックグラウンドジョブとスケジュール |

### 開発マシン

**開発マシン → 開発マシンを追加**から、SSH、Nimote Connect、ローカルネットワーク、Tailscale を選びます。マシンを選び、IDE、ターミナル、AI でワークスペースを開きます。永続セッション、リモートタスク、承認が必要な場合は NimoteHost を設定します。NimoteHost の機能には対応するツールと Pro が必要です。

[開発マシン](/ja/docs/host) · [Nimote Connect を導入](/ja/docs/host/getting-started) · [トラブルシューティング](/ja/docs/host/troubleshooting)

### Android Local Linux

[Android Local Linux](/ja/docs/local-linux) · [導入と初回実行](/ja/docs/local-linux/getting-started) · [トラブルシューティング](/ja/docs/local-linux/troubleshooting)

### 設定とリファレンス

| ガイド | 用途 |
| --- | --- |
| [設定](/ja/docs/settings) | 外観、言語、エディターとパネルの設定。 |
| [アカウントとサブスクリプション](/ja/docs/account-subscription) | アカウント状態、購入の復元、機能の利用権限を確認します。 |
| [通知](/ja/docs/notifications) | 完了・保留中の通知から元のセッションを開きます。 |
| [認証情報と操作の確認](/ja/docs/security) | SSH 認証情報、モデル API キー、操作承認を確認します。 |
| [画面と操作の索引](/ja/docs/screenshot-guide) | 機能別に画面と操作手順を探します。 |

## 問題が起きた場合

環境に応じて[よくある質問](/ja/docs/faq)、[Windows SSH と SFTP](/ja/docs/windows-ssh-sftp)、[Host のトラブルシューティング](/ja/docs/host/troubleshooting)、[Local Linux のトラブルシューティング](/ja/docs/local-linux/troubleshooting)を参照してください。
