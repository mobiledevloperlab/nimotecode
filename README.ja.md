<p align="center"><img src="docs/public/app_icon_round.png" alt="NimoteCode ロゴ" width="88" height="88"></p>

<h1 align="center">NimoteCode — Android / iOS 向けモバイル IDE</h1>

<p align="center"><a href="README.md">English</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.es.md">Español</a> · 日本語 · <a href="README.ko.md">한국어</a></p>

<p align="center"><strong>プロジェクトを、スマートフォンやタブレットへ。</strong><br>ローカルプロジェクトを開く、または SSH で開発ホストへ接続。コード編集、コマンド実行、Git 差分の確認、AI 活用を一つのモバイルワークスペースで行えます。</p>

<p align="center"><sub>コードエディター&nbsp;&nbsp;•&nbsp;&nbsp;SSH ターミナル&nbsp;&nbsp;•&nbsp;&nbsp;Git&nbsp;&nbsp;•&nbsp;&nbsp;AI コーディング<br>対応 Android デバイスでは root 不要の Ubuntu を利用可能</sub></p>

<p align="center"><a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode"><img src="https://img.shields.io/badge/Google_Play-インストール-34A853?style=for-the-badge&amp;logo=googleplay&amp;logoColor=white" alt="Google Play から Android 版 NimoteCode をインストール"></a> <a href="https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253"><img src="https://img.shields.io/badge/App_Store-ダウンロード-0D96F6?style=for-the-badge&amp;logo=appstore&amp;logoColor=white" alt="App Store から NimoteCode をダウンロード"></a></p>

## デモ

<p align="center"><a href="https://github.com/user-attachments/assets/531d62fc-4874-41b9-96af-1ac9d2ad6fd6">AI Agent 製品デモを見る</a> · <a href="https://nimotecode.com/videos/ai-agent-demo-small.mp4">代替 MP4 動画</a></p>

## プロジェクトのある場所で開発する

- **ローカルプロジェクト:** システムピッカーでフォルダーを開き、すぐに編集を開始できます。
- **SSH 開発ホスト:** リモートファイル、ターミナル、Git の変更を同じワークスペースで扱えます。
- **Android Local Linux:** 対応 Android 上で PRoot の Ubuntu、Bash、Git、SSH を利用し、ローカルプロジェクトを `/mnt/local` で共有できます。

## 主な機能

- **編集とナビゲーション:** スマートフォン、タブレット、デスクトップで Nimote Editor を利用。ファイル検索、分割ペイン、Markdown と Web のプレビューに対応します。
- **実行と検証:** ターミナル、プロジェクトタスク、モバイル拡張キー、フォーカスモード、配色、SOCKS5 / HTTP CONNECT の SSH プロキシを利用できます。
- **Git レビュー:** ステータス、差分、履歴を確認し、Git ヘッダーからブランチを検索、作成、切り替えできます。
- **ワークスペースの拡張:** Early Access のプラグインセンターで、カスタムパネル、フォーム、ワークフロー、成果物ビュー、ローカルまたは SSH のスクリプトジョブを作成できます。

## 好みに合わせた AI コーディング

| ワークフロー | 使い方 |
| --- | --- |
| **AI Chat** | ワークスペースの文脈でコードやターミナル出力を説明します。自身の AI プロバイダーと API キーを接続します。 |
| **組み込み Agent** | ファイル確認、変更計画、編集、チェック実行を行います。実行中の Agent に追加指示を送り、対話式の質問に答えられます。Early Access で提供されます。 |
| **MCP ツールサーバー** | ローカルまたは SSH ワークスペースで、組み込み Agent 用の検証済み MCP サーバーを構成できます。各ツール呼び出しには明示的な承認が必要です。 |
| **外部 ACP Agent** | SSH ホスト上の対応ランタイムを接続し、アプリの会話画面で権限と進行状況を確認できます。 |
| **SSH 経由の Claude Code / Codex** | 自分のホストにインストールした CLI をターミナルから実行します。 |

モデル利用とトークンは含まれません。AI が生成した変更を受け入れる前に、コマンドと差分を確認してください。

## モバイル開発ツールの比較

**編集 → チェック実行 → 差分確認 → ワークスペース拡張を、一つのモバイル IDE で。** NimoteCode 列は 2.0.0 を反映しています。`?` は、その製品の機能が未確認であることを示します。

| 主な機能 | **NimoteCode** | Termius | Blink Shell | ServerCC |
| --- | :---: | :---: | :---: | :---: |
| SSH 接続 | ✅ | ✅ | ✅ | ✅ |
| コードエディター | ✅ | ? | ✅ | ? |
| カスタムプラグイン / パネル | ✅ ¹ | ? | ? | ? |
| Git / 差分 UI | ✅ ¹ | ? | ◐ | ✅ |
| Git ブランチ操作 | ✅ ¹ | ? | ? | ? |
| 組み込み AI Agent | ✅ ¹ | ? | ? | ? |
| 実行中の AI Agent を継続 | ✅ ¹ | ? | ? | ? |
| 組み込み MCP ツールサーバー | ✅ ¹ | ? | ? | ? |
| LSP 診断 | ✅ ¹ | ? | ◐ | ? |
| Web / アプリプレビュー | ✅ | ? | ? | ✅ |
| SOCKS5 / HTTP CONNECT SSH プロキシ | ✅ | ? | ? | ? |
| Android Local Linux | ✅ ² | ? | ? | ? |
| Mosh 転送 | ? | ✅ | ✅ | ? |

<details><summary>Redock、Orca、Moshi と比較する</summary>

| 主な機能 | **NimoteCode** | Redock | Orca | Moshi |
| --- | :---: | :---: | :---: | :---: |
| SSH 接続 | ✅ | ✅ | ◐ | ✅ |
| コードエディター | ✅ | ? | — | ? |
| カスタムプラグイン / パネル | ✅ ¹ | ? | ? | ? |
| Git / 差分 UI | ✅ ¹ | ? | ✅ | ✅ |
| Git ブランチ操作 | ✅ ¹ | ? | ? | ? |
| 組み込み AI Agent | ✅ ¹ | ? | ? | ? |
| 組み込み MCP ツールサーバー | ✅ ¹ | ? | ? | ? |
| LSP 診断 | ✅ ¹ | ? | ? | ? |
| Web / アプリプレビュー | ✅ | ✅ | ✅ | ✅ |
| SOCKS5 / HTTP CONNECT SSH プロキシ | ✅ | ? | ? | ? |
| Android Local Linux | ✅ ² | ? | ? | ? |
| Mosh 転送 | ? | ✅ | ? | ✅ |

Orca モバイルにはデスクトップ Companion が必要です。Moshi の差分と Web プレビューには Pro とホスト hook が必要です。Redock のプレビューはホストの開発サーバーを使用します。

</details>

¹ プラグインセンター、Agent（実行中の追加指示と構成済み MCP ツールサーバーを含む）、Git 書き込み、LSP は Early Access の対象です。Git のステータス、差分、履歴は無料です。² 対応する Android 8+ ARM64 / x86_64 が必要です。組み込み Agent には自身の AI プロバイダー、LSP には構成済みのホスト言語サーバーが必要です。

チェックは無料、設定不要、または全プラットフォームで利用可能であることを意味しません。Blink の編集は Blink Code 経由で統合され、Git / LSP はリポジトリまたはリモート IDE の設定に依存します。Termius の Mosh はここでは Android のみ確認済みです。

> [公式根拠を含む完全な比較を見る →](https://nimotecode.com/ja/compare/mobile-ai-development-tools?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=ja_comparison)

## NimoteCode を試す理由

- **言語ツール:** 対応する言語サーバーで診断を表示し、構成済みリモートデバッグアダプターでデバッグできます。LSP とデバッグは Early Access で、環境ツールが必要です。
- **外部フォルダー:** システムに許可された外部フォルダーは閲覧と編集に対応しますが、Git、LSP、デバッグ、Tasks、ファイル監視、Agent はネイティブファイルパスが必要です。
- **利用可能性:** ツールはワークスペース、インストール済みツール、プランに依存します。[機能リファレンス](https://nimotecode.com/ja/features?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=ja_features)を確認してください。

## NimoteCode 2.0.0 · 大型アップデート

| Build | リリース日 | プラットフォーム |
| --- | --- | --- |
| 58 | 2026 年 10 月 25 日 | Android · iPhone · iPad · デスクトップ |

**カスタマイズ可能なワークスペース、継続的な AI 連携、より完全なモバイル IDE。**

- フォーム、ワークフロー、成果物ビュー、ローカルまたは SSH ジョブを備えたプラグインとパネルを作成できます。
- 追加指示、対話式の質問、更新された履歴とタイムラインで AI Agent の作業を継続できます。
- Git ブランチと差分をより明確に扱い、ターミナル出力を AI に送り、プロキシ経由で SSH 接続できます。

> [2.0.0 の完全なリリースノートを読む →](https://nimotecode.com/ja/releases/2.0.0?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=ja_release) · [以前のリリース](https://nimotecode.com/ja/releases/)

## はじめる

1. [Google Play](https://play.google.com/store/apps/details?id=com.nimote.nimotecode) または [App Store](https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253) から NimoteCode をインストールします。
2. ローカルプロジェクトを開く、SSH ホストへ接続する、または Demo ワークスペースを試します。
3. 小さな変更を行い、利用可能なチェックを実行して Git 差分を確認します。

> [クイックスタート →](https://nimotecode.com/ja/docs/quick-start?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=ja_quick_start)

**無料で開始し、Early Access で高度なワークフローを利用:** 無料版にはローカル、SSH、Android Local Linux のワークスペース、エディター、基本ターミナル、Git レビュー、AI Chat、基本 Tasks が含まれます。AI Agent、リモートコンテンツ検索、複数ターミナル、Git 書き込み、LSP、デバッグは Early Access で利用できます。現在の利用条件は[Early Access の詳細](https://nimotecode.com/ja/pro?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=ja_plans)とアプリで確認してください。

ストアでの提供状況とリリース時期はプラットフォームや地域により異なる場合があります。[ダウンロードとプラットフォーム要件](https://nimotecode.com/ja/download?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=ja_download)を確認してください。

## リソース

- [公式サイト](https://nimotecode.com/ja/?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=ja_website)
- [機能](https://nimotecode.com/ja/features?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=ja_features)
- [モバイル開発ガイド](resources/README.md) — ローカル編集、リモート開発、Git、AI ワークフロー（英語）。
- [ワークフロー例](examples/README.md) — SSH、Claude Code、Codex、Android Local Linux（英語）。
- [Linux プリセット](https://github.com/mobiledevloperlab/nimote-linux-presets) — バージョン管理されたマニフェストと検証スクリプトを含む任意の環境。

## コミュニティ

バグ、質問、対応してほしいワークフローを共有してください。

<p align="center"><a href="https://discord.gg/tTxbpqYmhR">Discord</a> · <a href="https://github.com/mobiledevloperlab/nimote_issues/issues">問題を報告</a> · <a href="https://x.com/mobiledevlab">X</a></p>

## このリポジトリについて

NimoteCode は商用のクローズドソースアプリケーションです。このリポジトリには公式ドキュメント、チュートリアル、ワークフロー例、リリースノートが含まれます。アプリケーションのソースコードは公開されません。Linux プリセットは別リポジトリで管理され、バグ報告には上記の Issue トラッカーを使用します。

[Local Linux のソースバンドルとライセンス通知](https://nimotecode.com/ja/docs/local-linux-source)はサードパーティコンポーネントを対象とし、NimoteCode アプリをオープンソース化するものではありません。
