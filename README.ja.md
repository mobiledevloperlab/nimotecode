<p align="center"><img src="docs/public/app_icon_rounded.png" alt="NimoteCode ロゴ" width="88" height="88"></p>

<h1 align="center">NimoteCode — Android / iOS 向けモバイル IDE</h1>

<p align="center"><a href="README.md">English</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.es.md">Español</a> · 日本語 · <a href="README.ko.md">한국어</a></p>

<p align="center"><strong>プロジェクトを、スマートフォンやタブレットへ。</strong><br>ローカルプロジェクトを開く、または SSH で開発ホストへ接続。コード編集、コマンド実行、Git 差分の確認、AI 活用を一つのモバイルワークスペースで行えます。</p>

<p align="center"><sub>コードエディター&nbsp;&nbsp;•&nbsp;&nbsp;SSH ターミナル&nbsp;&nbsp;•&nbsp;&nbsp;Git&nbsp;&nbsp;•&nbsp;&nbsp;AI コーディング<br>対応 Android デバイスでは root 不要の Ubuntu を利用可能</sub></p>

<p align="center"><a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode"><img src="https://img.shields.io/badge/Google_Play-%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB-34A853?style=for-the-badge&amp;logo=googleplay&amp;logoColor=white" alt="Google Play から Android 版 NimoteCode をインストール"></a> <a href="https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253"><img src="https://img.shields.io/badge/App_Store-%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89-0D96F6?style=for-the-badge&amp;logo=appstore&amp;logoColor=white" alt="App Store から NimoteCode をダウンロード"></a></p>

<p align="center"><sub><a href="#workspace-demo">デモ</a> · <a href="#nimotehost">NimoteHost</a> · <a href="https://nimotecode.com/ja/docs/quick-start">クイックスタート</a> · <a href="https://nimotecode.com/ja/releases/2.4.1">リリースノート</a></sub></p>

<p align="center"><sub>無料で開始でき、AI の設定は任意です。商用クローズドソースアプリ · NimoteHost は完全な Apache-2.0 ソースを提供</sub></p>

<p align="center"><img src="docs/public/screenshots/nimote-pro.webp" alt="NimoteCode mobile AI Agent and tablet SSH workspace" width="1000"></p>

<a id="workspace-demo"></a>

## デモ

上の画像はスマートフォンの AI Agent とタブレットの SSH ワークスペースです。[デモ動画を開く](https://github.com/user-attachments/assets/df7de976-e743-415d-9bd1-df396a647e10)。

<div align="center">
  <video src="https://github.com/user-attachments/assets/df7de976-e743-415d-9bd1-df396a647e10" controls muted playsinline width="420"></video>
</div>

## プロジェクトのある場所で開発する

- **ローカルプロジェクト:** システムピッカーでフォルダーを開き、すぐに編集を開始できます。
- **SSH 開発ホスト:** リモートファイル、ターミナル、Git の変更を同じワークスペースで扱えます。
- **Android Local Linux:** 対応 Android 上で PRoot の Ubuntu、Bash、Git、SSH を利用し、ローカルプロジェクトを `/mnt/local` で共有できます。

Local Linux は対応する Android 8 以降の ARM64 / x86_64 端末が必要で、iPhone / iPad では利用できません。SSH ホストは設定済みで接続可能である必要があります。

## 主な機能

- **リモート作業の継続：** 任意の [NimoteHost](https://nimotecode.com/ja/docs/host) でターミナル、タスク、対応 Agent を管理し、切断後に戻れます。2.4.1 で公開予定です。
- **モード切り替え:** IDE・ターミナル・AI・Host を選択。IDE・ターミナル・AI はプロジェクト状態を維持し、Host は NimoteHost の管理作業に接続します。
- **コンテナ開発:** SSH ホスト上の Docker と Compose を管理し、`devcontainer.json` から Dev Container を作成・再構築できます。
- **編集とナビゲーション:** スマートフォン、タブレット、デスクトップで Nimote Editor を利用。ファイル検索、分割ペイン、Markdown と Web のプレビューに対応します。
- **実行と検証:** ターミナル、プロジェクトタスク、モバイル拡張キー、フォーカスモード、配色、SOCKS5 / HTTP CONNECT の SSH プロキシを利用できます。
- **Git レビュー:** ステータス、差分、履歴を確認し、Git ヘッダーからブランチを検索、作成、切り替えできます。
- **ワークスペースの拡張:** Early Access のプラグインセンターで、カスタムパネル、フォーム、ワークフロー、成果物ビュー、ローカルまたは SSH のスクリプトジョブを作成できます。

- **言語ツール:** 対応する言語サーバーで診断を表示し、構成済みリモートデバッグアダプターでデバッグできます。LSP とデバッグは Early Access で、環境ツールが必要です。
- **外部フォルダー:** システムに許可された外部フォルダーは閲覧と編集に対応しますが、Git、LSP、デバッグ、Tasks、ファイル監視、Agent はネイティブファイルパスが必要です。
- **利用可能性:** ツールはワークスペース、インストール済みツール、プランに依存します。[機能リファレンス](https://nimotecode.com/ja/features?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=ja_features)を確認してください。


<a id="nimotehost"></a>

## NimoteHost：自分のパソコンで作業を続ける

**NimoteHost** は Linux、macOS、Windows に自分で導入できる任意の補助サービスです。CLI とデスクトップ管理画面を提供します。スマートフォンから処理を開始し、切断後も動いているターミナル、ログ、対応 Agent の会話に SSH で戻れます。

- 対応する Codex、Claude Code、OpenCode のツール出力と承認を確認し、対応時は実行中に指示を追加できます。
- セッションの検索・固定、タスク受信箱、検証記録と差分の確認、対応 Host への GitHub Issue の依頼ができます。
- CLI/GUI パッケージの導入、ソースビルド、RPC、Go クライアント、MCP、コミュニティプラグインによる連携に対応します。

Host モードは **2.4.1 で公開予定**です。NimoteHost は [専用リポジトリ](https://github.com/mobiledevloperlab/nimotehost)で完全なソースを **Apache-2.0** として提供します。NimoteCode アプリは商用クローズドソースのままです。404 やパッケージがない場合は、一般公開前です。

パソコンに完全なパッケージを導入し、`status` と `capabilities` を確認して、アプリの **Host → SSH connections** から同じ OS アカウントで接続します。通常の SSH に Host は不要です。Host とパソコンは稼働を続ける必要があり、Host/OS の再起動でプロセスは中断します。Agent の導入・認証とモデル利用料は別途必要です。機能は両方のバージョンに依存します。

**確認・変更・貢献：** Host ランタイム、CLI、デスクトップ管理画面、SDK の全ソースをビルドし、Fork で導入や連携を変更できます。[貢献ガイド](https://github.com/mobiledevloperlab/nimotehost/blob/master/CONTRIBUTING.md)から修正、Agent アダプター、翻訳、文書を提案してください。SSH 認証、認証付きループバック API、ローカルの Host 認証情報でアクセスを管理します。モデルツールは設定済みの提供元を使います。

[**インストール・運用・使い方 →**](https://nimotecode.com/ja/docs/host) · [ソースとライセンス](https://github.com/mobiledevloperlab/nimotehost) · [ダウンロード](https://github.com/mobiledevloperlab/nimotehost/releases)

## 好みに合わせた AI コーディング

| ワークフロー | 使い方 |
| --- | --- |
| **AI Chat** | ワークスペースの文脈でコードやターミナル出力を説明します。自身の AI プロバイダーと API キーを接続します。 |
| **組み込み Agent** | ファイル確認、変更計画、編集、チェック実行を行います。実行中の Agent に追加指示を送り、対話式の質問に答えられます。Early Access で提供されます。 |
| **MCP ツールサーバー** | ローカルまたは SSH ワークスペースで、組み込み Agent 用の検証済み MCP サーバーを構成できます。各ツール呼び出しには明示的な承認が必要です。 |
| **外部 ACP Agent** | SSH ホスト上の対応ランタイムを接続し、アプリの会話画面で権限と進行状況を確認できます。 |
| **SSH 経由の Claude Code / Codex** | 自分のホストにインストールした CLI をターミナルから実行します。 |

モデル利用とトークンは含まれません。 外部 Agent と CLI は別途インストール、認証、サービスへのアクセスが必要です。Claude Code と Codex は同梱されません。AI が生成した変更を受け入れる前に、コマンドと差分を確認してください。

## はじめる

1. [Google Play](https://play.google.com/store/apps/details?id=com.nimote.nimotecode) または [App Store](https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253) から NimoteCode をインストールします。
2. ローカルプロジェクトを開く、SSH ホストへ接続する、または Demo ワークスペースを試します。
3. 小さな変更を行い、利用可能なチェックを実行して Git 差分を確認します。

> [クイックスタート →](https://nimotecode.com/ja/docs/quick-start?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=ja_quick_start)

**無料で開始し、Early Access で高度なワークフローを利用:** 無料版にはローカルと SSH のワークスペース、エディター、基本ターミナル、Git レビュー、AI Chat、基本 Tasks が含まれます。GitHub 連携、Android Local Linux、AI Agent、リモートコンテンツ検索、複数ターミナル、Git 書き込み、LSP、デバッグは Early Access で利用できます。現在の利用条件は[Early Access の詳細](https://nimotecode.com/ja/pro?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=ja_plans)とアプリで確認してください。

ストアでの提供状況とリリース時期はプラットフォームや地域により異なる場合があります。[ダウンロードとプラットフォーム要件](https://nimotecode.com/ja/download?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=ja_download)を確認してください。

## ダウンロード

Android 版は [Google Play](https://play.google.com/store/apps/details?id=com.nimote.nimotecode)、iPhone / iPad 版は [App Store](https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253) から入手できます。

[Host モード: NimoteHost の導入、SSH 接続、ターミナルと Agent の使い方。](https://nimotecode.com/ja/docs/host)

**NimoteCode 2.4.1 は近日公開予定。** 未公開の 2.4.0 の機能を含みます。Windows・macOS・Linux 版 NimoteCode と NimoteHost も近日公開予定です。

## NimoteCode 2.4.1 · 近日公開予定

- **操作性と安定性の改善。** 保持されたターミナル履歴の検索、エクスプローラーの Git 状態色、文字選択、横画面、リモート保存、Windows の複数プロセスを改善。Host Agent のネイティブセッション接管は実験機能で、明示的なビルド設定と対応 Host が必要です。

- **Host ワークスペース。** リモートに対応する NimoteHost をインストールして起動し、SSH で接続すると、ターミナルや Agent セッションの検索、固定、再開ができます。Host は任意の機能です。
- **Agent 連携。** 対応する Codex、Claude、OpenCode の構造化対話、ツール、承認、コマンド、モデル設定、実行中の追加指示に対応。実行ポリシーは Host の機能に依存し、機密性の高い操作は承認が必要な場合があります。
- **タスク受信箱と GitHub Issue。** 状態、検証の証拠、差分を確認し、タスクを続行・アーカイブできます。選択した公開ポリシーで Issue を依頼できます。Host のバージョンと設定に依存します。
- **Host プラグイン。** サイドバーから、バージョン付きフォーム、ページ分割テーブル、詳細、対話ビューを権限確認付きで利用できます。
- **プロジェクトタスク。** package.json、Taskfile、Makefile、justfile、.vscode/tasks.json の対応タスクを検出してターミナルで実行。Make/just の動的検出には明示的な確認が必要です。
- **通知とエディター。** 完了・確認待ち・失敗の通知、音と振動、行番号、横向きミニマップを設定できます。通知はシステム設定に従います。Windows は Pro が標準で有効です。
- 機能、パネル、プラグインの設定を統合。通知は Agent 設定へ移動。タブレット、Windows、横向きの配色と視差効果を減らす設定への対応を改善。
- GitHub CI をブランチやワークフローで絞り込み、ステップログ、エラーの前後、不完全なログの表示を確認できます。
- ターミナルの応答性、同期更新、検索、スクロール、Vim、クリップボード、Windows の貼り付け、ソフトキーボードを改善。
- 履歴の安定性とローカル履歴のオフライン削除、保存エラーの説明、大きなファイルの編集、折り返し差分と下部ナビゲーションを改善。

[2.4.1 →](https://nimotecode.com/ja/releases/2.4.1)

## ドキュメント

- [クイックスタート](https://nimotecode.com/ja/docs/quick-start) · [SSH](https://nimotecode.com/ja/docs/ssh) · [ターミナル](https://nimotecode.com/ja/docs/terminal) · [エディター](https://nimotecode.com/ja/docs/editor)
- [AI Chat & Agent](https://nimotecode.com/ja/docs/ai) · [ソース管理](https://nimotecode.com/ja/docs/source-control) · [LSP](https://nimotecode.com/ja/docs/lsp) · [デバッグ](https://nimotecode.com/ja/docs/debug)
- [Docker](https://nimotecode.com/ja/docs/docker) · [Plugins](https://nimotecode.com/ja/docs/plugins) · [セキュリティ](https://nimotecode.com/ja/docs/security) · [一覧](https://nimotecode.com/ja/docs)

### ガイドとリソース

- [公式サイト](https://nimotecode.com/ja/?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=ja_website)
- [機能](https://nimotecode.com/ja/features?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=ja_features)
- [モバイル開発ガイド](resources/README.md) — ローカル編集、リモート開発、Git、AI ワークフロー（英語）。
- [Linux プリセット](https://github.com/mobiledevloperlab/nimote-linux-presets) — バージョン管理されたマニフェストと検証スクリプトを含む任意の環境。

## よくある質問

**Termux、Acode、code-server との違いは？** NimoteCode はタッチ操作向けエディター、SSH クライアント、ターミナル、Git、AI を一つのモバイルアプリにまとめ、Android では Local Linux も利用できます。Termux は Android のターミナルとパッケージ、Acode はモバイルコード編集、code-server はブラウザー上の VS Code に重点を置いています。

**SSH サーバーは必要ですか？** いいえ。ローカルフォルダーや Demo ワークスペースから始められます。SSH には設定済みで接続可能なホストが必要です。

**スマートフォンでコードを実行できますか？** 対応 Android 端末では Local Linux を利用できます。iPhone / iPad では SSH 経由で適切なリモートホストを使用できます。実行できる内容はインストール済みツールによって異なります。

**AI は含まれますか？** AI の設定は任意です。自身のプロバイダーと API キーが必要で、モデル利用料は別途発生する場合があります。組み込み Agent は Early Access の機能です。

**オープンソースですか？** アプリは商用のクローズドソースです。このリポジトリにはドキュメントとリソースが含まれます。 別の [NimoteHost](https://github.com/mobiledevloperlab/nimotehost) は 完全なソースを Apache-2.0 で提供で、このライセンスは Host に適用されます。

[その他の FAQ](https://nimotecode.com/ja/docs/faq)。

## モバイル開発ツールの比較

**編集 → チェック実行 → 差分確認 → ワークスペース拡張を、一つのモバイル IDE で。** NimoteCode 列は未公開の 2.4.0 ビルド（2.4.1 に含まれます）を反映しています。`?` は、その製品の機能が未確認であることを示します。

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
| 実行中の AI Agent を継続 | ✅ ¹ | ? | ? | ? |
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

## 貢献する

ドキュメントや例の改善は Pull Request で歓迎します。アプリの不具合報告や機能提案には [Issue トラッカー](https://github.com/mobiledevloperlab/nimote_issues/issues)を使用し、再現手順と端末・アプリのバージョンを記載してください。アプリのソースコードはこのリポジトリにありません。

## コミュニティ

バグ、質問、対応してほしいワークフローを共有してください。

<p align="center"><a href="https://discord.gg/tTxbpqYmhR">Discord</a> · <a href="https://github.com/mobiledevloperlab/nimote_issues/issues">問題を報告</a> · <a href="https://x.com/mobiledevlab">X</a></p>

## このリポジトリについて

別の [NimoteHost](https://github.com/mobiledevloperlab/nimotehost) は 完全なソースを Apache-2.0 で提供で、このライセンスは Host に適用されます。

NimoteCode は商用のクローズドソースアプリケーションです。このリポジトリには公式ドキュメント、チュートリアル、ワークフロー例、リリースノートが含まれます。アプリケーションのソースコードは公開されません。Linux プリセットは別リポジトリで管理され、バグ報告には上記の Issue トラッカーを使用します。

[Local Linux のソースバンドルとライセンス通知](https://nimotecode.com/ja/docs/local-linux-source)はサードパーティコンポーネントを対象とし、NimoteCode アプリをオープンソース化するものではありません。


[Linux Presets の MIT ライセンス](https://github.com/mobiledevloperlab/nimote-linux-presets/blob/master/LICENSE)はそのリポジトリに適用され、アプリや本リポジトリのすべての内容には適用されません。

<details>
<summary>サイトとドキュメントの保守</summary>

```bash
nvm install
nvm use
npm ci
npm ci --prefix blog
npm run docs:build
npm run docs:check
```

Node 24 (`.nvmrc`); `npm run docs:dev`.

</details>
