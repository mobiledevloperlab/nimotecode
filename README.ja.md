<p align="center">
  <img src="docs/public/app_icon_rounded.png" alt="NimoteCode logo" width="88" height="88">
</p>

<h1 align="center">NimoteCode — モバイル AI IDE・SSH ワークスペース</h1>

<p align="center"><a href="README.md">English</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.es.md">Español</a> · <strong>日本語</strong> · <a href="README.ko.md">한국어</a></p>

<p align="center">
  <strong>自分のプロジェクトとツールを、どこでも。</strong><br>
  Android・iPhone・iPad で、編集、SSH ターミナル、Git、AI Agent を一つに。
</p>

<p align="center">
  <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode"><img src="https://img.shields.io/badge/Google_Play-Install-34A853?style=for-the-badge&amp;logo=googleplay&amp;logoColor=white" alt="Install NimoteCode for Android"></a>
  <a href="https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253"><img src="https://img.shields.io/badge/App_Store-Download-0D96F6?style=for-the-badge&amp;logo=appstore&amp;logoColor=white" alt="Download NimoteCode for iPhone and iPad"></a>
</p>

<p align="center">
  <a href="https://nimotecode.com/ja/releases/2.4.1"><img src="https://img.shields.io/badge/NimoteCode-2.4.1-2563EB?style=flat-square" alt="NimoteCode 2.4.1"></a>
  <a href="https://nimotecode.com/ja/docs"><img src="https://img.shields.io/badge/docs-online-2563EB?style=flat-square" alt="Documentation"></a>
  <a href="https://github.com/mobiledevloperlab/nimotehost"><img src="https://img.shields.io/badge/NimoteHost-Apache--2.0-64748B?style=flat-square" alt="NimoteHost companion license: Apache-2.0"></a>
</p>

<p align="center">
  <a href="#workspace-demo">デモ</a> ·
  <a href="#workflow">作業の流れ</a> ·
  <a href="#workspace-modes">4 つのモード</a> ·
  <a href="#quick-start">クイックスタート</a> ·
  <a href="#latest-release">2.5.0 · 公開予定</a> ·
  <a href="#nimotehost">NimoteHost</a> ·
  <a href="https://nimotecode.com/ja/docs">ドキュメント</a> ·
  <a href="https://github.com/mobiledevloperlab/nimote_issues/issues">不具合報告</a>
</p>

<p align="center">
  <img src="docs/public/screenshots/nimote-pro-framed.svg?v=6d554a40db88" alt="NimoteCode 2.4.1 のリモートファイルと Python エディター" width="1000">
</p>

NimoteCode は、**ローカルと SSH プロジェクトのためのモバイル IDE** です。ファイルを探し、コードを編集し、コマンドを実行して Git 差分を確認するまで、一つのワークスペースで進められます。自分の AI プロバイダーや、開発マシンにインストールした Agent にも接続できます。

**4 つのモード · 自分の開発環境 · AI は任意**

<a id="workspace-demo"></a>

## デモ

ワークスペースの操作を動画で確認できます。[動画を直接開く](https://github.com/user-attachments/assets/14c8bab8-ae16-4e15-8a8a-926ef2c747f4)。

<div align="center">
  <video src="https://github.com/user-attachments/assets/14c8bab8-ae16-4e15-8a8a-926ef2c747f4" controls muted playsinline width="420"></video>
</div>

## NimoteCode を選ぶ理由

| やりたいこと | つながる作業環境 |
| --- | --- |
| **スマートフォンで作業を続ける** | SSH/SFTP のファイル、エディター、ホストのツールを使うターミナル。 |
| **タブレットで開発する** | ファイルツリー、検索、分割エディター、Markdown と Web のプレビュー。 |
| **変更を検証する** | コマンドとプロジェクトタスクのそばで Git 状態、履歴、差分を確認。 |
| **AI と協働する** | Chat、内蔵 Agent、MCP ツール、対応する外部 ACP Agent。 |
| **リモート作業に戻る** | 切断後も自分のパソコンで続く NimoteHost 管理セッション。 |
| **Android 本体で開発する** | root 不要の PRoot ベース Ubuntu、Bash、Git、SSH。 |

<a id="workspace-modes"></a>

## 一つのコマンドからプロジェクトまで、4 つのモード

ファイル、コマンド、変更、Agent の作業に、それぞれ専用のビューを用意しています。

<table>
  <tr>
    <td rowspan="5" width="180" align="center" valign="middle"><a href="docs/public/images/placeholders/host-mode.png?v=8ed6f40a441c"><img src="docs/public/screenshots/host-mode-framed.svg?v=0b26255ed795" alt="NimoteCode の4つのモード：Full IDE、Quick Terminal、AI Workspace、Host" width="160"></a></td>
    <th>モード</th>
    <th>適した作業</th>
    <th>使える環境</th>
  </tr>
  <tr>
    <td valign="top"><strong>IDE</strong></td>
    <td valign="top">プロジェクトの理解、編集、レビュー。</td>
    <td valign="top">ファイルツリー、検索、分割エディター、ターミナル、Git を一つの画面に。</td>
  </tr>
  <tr>
    <td valign="top"><strong>AI</strong></td>
    <td valign="top">質問、タスクの依頼、実行の確認。</td>
    <td valign="top">プロジェクトの文脈、Chat・Agent、ツール出力、承認、結果。</td>
  </tr>
  <tr>
    <td valign="top"><strong>Terminal</strong></td>
    <td valign="top">ビルド、シェル操作、対話型 CLI。</td>
    <td valign="top">ターミナル中心の表示、拡張キー、履歴検索、ホストの既存ツール。</td>
  </tr>
  <tr>
    <td valign="top"><strong>Host</strong></td>
    <td valign="top">パソコンで続く作業への復帰。</td>
    <td valign="top">NimoteHost 管理のターミナル、対応 Agent、タスク、検証記録。</td>
  </tr>
</table>

**IDE・Terminal・AI の切り替えでは、プロジェクトとファイルツリーの状態を維持します。Host は NimoteHost 管理セッションに接続します。** IDE で調査し、Terminal でテストし、AI に変更を依頼して、Host でリモートタスクに戻れます。

SSH 接続から編集、Git レビュー、Agent 実行、セッション再開までをつなぐ開発環境です。SSH 上の Docker・Compose、Dev Container、言語サービス、デバッグ、カスタムプラグインで拡張できます。

[機能一覧](https://nimotecode.com/ja/features) · [モバイル開発ツールの比較](https://nimotecode.com/ja/compare/mobile-ai-development-tools)

<a id="workflow"></a>

## 一つのプロジェクトを、コードからレビューまで

SSH プロジェクトを開き、コードを確認し、Agent と協働して、ホストでコマンドを実行し、変更をレビューする。モバイルでも一連の開発作業を進められます。

<table>
  <tr>
    <th width="25%" align="center">1 · コードを確認</th>
    <th width="25%" align="center">2 · Agent と協働</th>
    <th width="25%" align="center">3 · コマンドを実行</th>
    <th width="25%" align="center">4 · 変更をレビュー</th>
  </tr>
  <tr>
    <td width="25%" align="center" valign="top"><a href="docs/public/images/placeholders/editor-code-selection.png?v=3bc86359abb3"><img src="docs/public/screenshots/editor-code-selection-framed.svg?v=5419f1211a45" alt="1 · コードを確認" width="220"></a></td>
    <td width="25%" align="center" valign="top"><a href="docs/public/images/placeholders/ai-plan-running.jpg?v=7cdbc72fe334"><img src="docs/public/screenshots/ai-plan-running-framed.svg?v=50b2a9e2632d" alt="2 · Agent と協働" width="220"></a></td>
    <td width="25%" align="center" valign="top"><a href="docs/public/images/placeholders/terminal-command-output.png?v=8a8c20322c4e"><img src="docs/public/screenshots/terminal-command-output-framed.svg?v=62963867fed1" alt="3 · コマンドを実行" width="220"></a></td>
    <td width="25%" align="center" valign="top"><a href="docs/public/images/placeholders/source-control-changes.png?v=f08e4471badb"><img src="docs/public/screenshots/source-control-changes-framed.svg?v=15712f667c09" alt="4 · 変更をレビュー" width="220"></a></td>
  </tr>
  <tr>
    <td valign="top">構文ハイライトと行番号でプロジェクトのファイルを読み、編集します。</td>
    <td valign="top">実行タイムラインで計画、ファイルの読み取り、ツールの動作を確認します。</td>
    <td valign="top">ホストのシェルと導入済みツールでプロジェクトのチェックを実行します。</td>
    <td valign="top">Source Control で変更ファイルを確認し、コミット前に差分を開きます。</td>
  </tr>
</table>

<sub>ADB で撮影した NimoteCode 2.4.1 Android 実機画面。画像をクリックすると原寸で表示します。</sub>

途中で離れる場合も、[Host モード](#nimotehost)からパソコンの NimoteHost 管理の対応セッションに戻れます。

<a id="quick-start"></a>

## 小さな変更から始める

1. **インストール：** [Google Play](https://play.google.com/store/apps/details?id=com.nimote.nimotecode) または [App Store](https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253) から入手します。
2. **プロジェクトを開く：** ローカルフォルダー、設定済み SSH ホスト、または Demo を選択します。AI 設定は不要です。
3. **編集 → 実行 → 確認：** ファイルを変更し、環境で使えるチェックを実行して、Git リポジトリで差分を確認します。

[クイックスタート →](https://nimotecode.com/ja/docs/quick-start)

### コードを実行する場所

| ワークスペース | ファイルとツール | 必要なもの |
| --- | --- | --- |
| **ローカル** | 端末上で閲覧・編集。 | 開けるフォルダー。システムが許可した外部フォルダーにはツールの制約があります。 |
| **SSH** | Linux・macOS・Windows ホスト上。 | 接続可能な SSH サーバー、プロジェクト、開発ツール。 |
| **Android Local Linux** | Android 上の Ubuntu。アプリ内プロジェクトを `/mnt/local` で共有。 | 対応する Android 8 以降の ARM64 / x86_64 端末。 |
| **Host** | 自分のパソコン上で NimoteHost が管理。 | SSH と稼働中の対応 NimoteHost。 |

Local Linux は iPhone・iPad では利用できません。開発コマンドは SSH ホストで実行できます。Git、LSP、デバッグ、Tasks、ファイル監視、Agent はネイティブファイルパスが必要です。利用できる機能は環境、インストール済みツール、アプリの利用権限によって異なります。

<a id="latest-release"></a>

## NimoteCode 2.5.0 · 公開予定

- 個人用 Tailscale を使ってペアリング済みの PC に SSH 接続できます。
- Pro で永続 tmux セッションを再開できます。SSH 経由で NimoteHost をインストール・更新できます。
- SSH の再接続、ターミナルの入力、スクロール、コピーを改善しました。
- スマートフォンのナビゲーションを刷新し、ワークスペース検索の一致箇所を強調表示します。
- 内蔵 Codex の高速化と、Android のローカル Linux 開発ツールキットに対応しました。
- 2.5.0 では Git のファイル・行履歴の再試行、スナップショットがない場合の Agent レビュー、操作ごとの Pro 表示も改善しました。Free で GitHub の閲覧、Docker 概要、ブレークポイント管理が可能です。

[2.5.0 のリリースノートを読む](https://nimotecode.com/ja/releases/2.5.0) · [現在の公開版 2.4.1](https://nimotecode.com/ja/releases/2.4.1)

<a id="nimotehost"></a>

## NimoteHost：アプリを離れても、作業に戻れる

Linux・macOS・Windows 向けの任意のセルフホスト型サービスです。スマートフォンを切断した後もパソコンでセッションを管理し、SSH 経由でターミナルや対応する **Codex・Claude Code・OpenCode** の会話に戻れます。

Host の機能に応じて、ツール出力、承認、タスク、検証結果を確認できます。CLI またはデスクトップ管理アプリを選ぶほか、完全な **Apache-2.0 ソース**からビルド・拡張できます。

パソコンの OS と CPU に合う対応パッケージを起動し、NimoteCode 2.4.1 以降の **Host → SSH connections** から接続します。Host や OS の再起動はプロセスを中断します。Agent の導入と認証は別途必要です。通常の SSH ワークスペースは Host なしで利用できます。

[導入ガイド](https://nimotecode.com/ja/docs/host/getting-started) · [ソース](https://github.com/mobiledevloperlab/nimotehost) · [Host ダウンロード](https://github.com/mobiledevloperlab/nimotehost/releases)

## 自分のツールとプロバイダーで AI を使う

| 選択肢 | 用途 |
| --- | --- |
| **AI Chat** | コードとターミナル出力を文脈とともに説明。 |
| **内蔵 Agent** | 対応ワークスペースで調査、計画、編集、チェックを実行。 |
| **MCP** | 設定したツールを接続し、呼び出し時に承認。 |
| **ACP Agent** | 別途導入した対応ランタイムを会話画面から利用。 |
| **SSH の CLI** | ホストに導入した Claude Code、Codex などを直接実行。 |

**モデルの利用枠やプロバイダーの契約は NimoteCode と別です。** 自分の認証情報を設定し、コミット前に変更とテスト結果を確認してください。

[AI 設定](https://nimotecode.com/ja/docs/configuration) · [Agent と MCP](https://nimotecode.com/ja/docs/ai)

<!-- major-comparison:start -->
## NimoteCode と主要な 5 製品の比較

資料確認日時: **2026-11-24 07:16:24 (UTC)** · 公式ドキュメント、公式サイト、公開リリース情報に基づく比較

**開発タスクは自分のコンピューターで実行。スマートフォンでコードとターミナルを確認し、対応する AI セッションを再開して承認に対応できます。**

NimoteCode チームが公開資料に基づいて作成した、上記 UTC 日時点のスナップショットです。リアルタイムデータや性能測定ではありません。全アプリを同一端末・同一条件のストア版で検証したものではなく、文書が一般公開に先行する場合もあります。✅ は公式資料に記載された対応（明記した統合を含む）、◐ は一部対応、拡張機能、リモート環境や設定への依存、— は該当するネイティブ機能を確認できていないことを示します。状態をクリックすると公式資料を開きます。— は外部ツールで実現できないという意味ではなく、◐ は同一の体験を保証しません。

### 主な機能

| 機能 | [NimoteCode](https://nimotecode.com/ja/docs/host) | [Blink Shell](https://docs.blink.sh/advanced/code) | [Termius](https://www.termius.com/) | [Acode](https://docs.acode.app/user-guide/) | [Replit](https://docs.replit.com/features/platforms/mobile-app) | [Codespaces](https://docs.github.com/en/codespaces/about-codespaces/what-are-codespaces) |
| --- | --- | --- | --- | --- | --- | --- |
| Android | [✅](https://nimotecode.com/ja/download) | — | [✅](https://www.termius.com/free-ssh-client-for-android) | [✅](https://docs.acode.app/user-guide/) | [✅](https://docs.replit.com/features/platforms/mobile-app) | [◐ ブラウザー](https://docs.github.com/en/codespaces/about-codespaces/codespaces-features) |
| iOS / iPadOS | [✅](https://nimotecode.com/ja/download) | [✅](https://docs.blink.sh/) | [✅](https://www.termius.com/free-ssh-client-for-iphone) | [— 公開予定](https://acode.app/ai-coding-ios) | [✅](https://docs.replit.com/features/platforms/mobile-app) | [◐ ブラウザー](https://docs.github.com/en/codespaces/about-codespaces/codespaces-features) |
| SSH ターミナル | [✅](https://nimotecode.com/ja/docs/ssh) | [✅](https://docs.blink.sh/) | [✅](https://www.termius.com/free-ssh-client-for-android) | [✅](https://github.com/Acode-Foundation/Acode#readme) | — | — |
| Mosh | — | [✅](https://docs.blink.sh/advanced/advanced-mosh) | [✅](https://www.termius.com/free-ssh-client-for-android) | — | — | — |
| コードエディター | [✅](https://nimotecode.com/ja/docs/editor) | [✅](https://docs.blink.sh/advanced/code) | — | [✅](https://docs.acode.app/user-guide/) | [✅](https://docs.replit.com/features/platforms/mobile-app) | [✅](https://docs.github.com/en/codespaces/developing-in-a-codespace/developing-in-a-codespace) |
| 端末内 Linux 環境 | [✅ Android · Pro](https://nimotecode.com/ja/docs/local-linux) | — | — | [✅ Android](https://docs.acode.app/user-guide/terminal) | — | — |
| Git の GUI 操作 | [✅ 書き込みは Pro](https://nimotecode.com/ja/docs/source-control) | [◐](https://docs.blink.sh/advanced/code) | — | — | [✅ プロジェクトエディター](https://docs.replit.com/features/workspace-tools/git-interface) | [✅](https://docs.github.com/en/codespaces/developing-in-a-codespace/using-source-control-in-your-codespace) |
| LSP によるコード支援 | [✅ 基本機能は無料](https://nimotecode.com/ja/docs/lsp) | — | — | [✅](https://docs.acode.app/user-guide/language-servers) | — | [◐ 言語拡張機能](https://code.visualstudio.com/docs/remote/codespaces) |
| AI コーディング | [✅ Agent · Pro](https://nimotecode.com/ja/docs/ai) | — | [◐ コマンド補完](https://www.termius.com/pricing) | [◐ 公式プラグイン](https://docs.acode.app/tutorials/ai-agent) | [✅](https://docs.replit.com/features/platforms/mobile-app) | [◐ Copilot 拡張機能](https://docs.github.com/en/codespaces/reference/using-github-copilot-in-github-codespaces) |
| VS Code 拡張機能 | — | [◐](https://docs.blink.sh/advanced/code) | — | — | — | [✅](https://code.visualstudio.com/docs/remote/codespaces) |
| 自分の PC でリモート開発 | [✅](https://nimotecode.com/ja/docs/ssh) | [✅](https://docs.blink.sh/advanced/code) | [◐ SSH ターミナル](https://www.termius.com/free-ssh-client-for-android) | [◐](https://docs.acode.app/user-guide/remote-access) | — | — |
| 永続ターミナルセッション | [✅ Host · Pro](https://nimotecode.com/ja/docs/host) | [◐ Mosh](https://docs.blink.sh/advanced/advanced-mosh) | [◐ Mosh](https://www.termius.com/free-ssh-client-for-android) | [◐ Android サービス](https://docs.acode.app/user-guide/terminal) | — | [◐ 稼働中のワークスペース](https://docs.github.com/en/codespaces/about-codespaces/understanding-the-codespace-lifecycle) |
| Agent セッション復元・承認 | [✅ Host · Pro](https://nimotecode.com/ja/docs/host) | — | — | [◐ 公式プラグイン](https://docs.acode.app/tutorials/ai-agent) | — | — |
| プロジェクトのタスク受信箱 | [✅ Host · Pro](https://nimotecode.com/ja/docs/host) | — | — | — | [✅ クラウドのタスクボード](https://docs.replit.com/features/agent/task-board) | — |

### 利用条件と比較の読み方

NimoteCode は 2.4.1 と現在の Host 文書を基準に確認しています。NimoteHost は開発プレビューであり、復元、承認、Task Inbox は Host の版、設定、Agent の互換性に依存します。コンピューター、Host、管理対象プロセスの継続稼働が必要で、Host や OS の再起動では元のプロセスを復元できません。Host、Android Local Linux、Git 書き込みには Pro が必要です。設定済みの言語ツールを使う基本 LSP 補完・診断・ナビゲーションは無料、コードアクション、サーバーの導入支援、デバッグは Pro が必要です。権限の範囲は無料・Pro の案内をご確認ください。

Blink Code は VS Code サービスを統合します。文書にあるリポジトリ編集や拡張機能は接続先環境に依存します。Blink の LSP と AI Agent のワークフローは個別に確認できておらず、リモート IDE を開けることだけで対応とは判定していません。ローカルの Unix コマンド群は完全な Linux 環境ではありません。Mosh のローミング、tmux の再接続、構造化された Agent セッションの復元は条件が異なります。

Acode は Android の Alpine Linux とネイティブ LSP 統合を文書化しています。各言語サーバーの有効化や導入は別途必要です。公式 AI Agent は version code 1002 以上、プラグインの追加とプロバイダー設定が必要で、チャット保存と承認に対応します。iPhone/iPad は引き続き Coming soon のため、一般公開済みの iOS 機能とは扱いません。Android ターミナルのバックグラウンド実行はフォアグラウンドサービスと OS のプロセス管理に依存します。Git の GUI 操作は未確認で、Git CLI を使えるだけでは根拠になりません。

Replit はモバイルでのプロジェクト編集、Git パネル、Agent タスクのレビューを文書化しています。SSH 文書は Replit のクラウドアプリへの接続を説明しており、自分の PC に接続するモバイル SSH クライアントではありません。モバイル LSP、ターミナルプロセスの継続、承認を伴う構造化 Agent 復元は未確認です。タスクボードは明確に文書化され、モバイルの Tasks パネルから利用できます。Codespaces はブラウザーや VS Code で接続するクラウド開発環境であり、ブラウザーで開けることはネイティブアプリや同等の操作性を意味しません。Copilot は別の拡張機能と利用権限が必要です。継続実行は稼働中の codespace に限り、アイドルタイムアウトや文書に定める稼働時間上限でプロセスが停止します。クラウドの Shell はネイティブ SSH クライアントではなく、Copilot のタスク管理を Codespaces のネイティブ受信箱や Agent 復元として計上していません。

[NimoteCode の無料・Pro の範囲](https://nimotecode.com/ja/pro) · [Host の利用条件](https://nimotecode.com/ja/docs/host) · [Acode の iOS 公開状況](https://acode.app/ai-coding-ios) · [Replit の SSH 接続先](https://docs.replit.com/features/workspace-tools/ssh)

### スマートフォンから開発を続ける

| 作業 | 一般的な SSH 構成 | NimoteCode + Host |
| --- | --- | --- |
| スマートフォンから PC に接続 | SSH | SSH + Host ワークスペース |
| プロジェクトのコードを読む | 通常はターミナルツールや別のエディター | 内蔵コードエディター |
| 編集と変更のレビュー | Git CLI や別のツール | エディター + Git Diff |
| アプリを離れた後も実行 | tmux、Mosh などのホスト設定 | Host が管理するタスクとセッション |
| AI の結果を確認 | CLI を開き直すかセッションに再接続 | 対応 Agent の構造化会話を復元 |
| Agent の承認に対応 | 使用中の CLI に依存 | Host に対応する承認を集約 |
| 対応が必要な作業を探す | ログやセッションを手動で確認 | Task Inbox |

SSH の表は一般的なターミナル中心の構成を示し、Blink Shell や Termius の全機能を表すものではありません。リモート開発や AI コーディングは NimoteCode 独自の機能ではありません。評価すべき組み合わせは、自分のコンピューターでタスクを動かし、スマートフォンでコード、ターミナル、対応 Agent セッションの復元、承認を扱う体験です。

### 競合製品の強みと改善の優先度

優先度は NimoteCode チームの製品判断であり、市場シェアや実測性能の順位ではありません。機能の根拠は公式資料で確認できます。

| 製品 | 強み | NimoteCode の改善方針 | 優先度 |
| --- | --- | --- | --- |
| Acode | Android エディター、Linux、プラグイン、AI、オープンソース環境 | モバイル IDE の完成度を高め、Host とリモート Agent 承認を実演 | 最優先 |
| Blink Shell | Mosh、ターミナルとキーボード、Blink Code | ターミナルの操作性を改善し、Host と Git の連携を示す | 最優先 |
| Termius | ホスト管理、同期、SFTP、Mosh、チームアクセス | 接続と既存プロジェクトの作業再開を簡単にする | 高 |
| GitHub Codespaces | クラウド開発環境と VS Code エコシステム | 自分のコンピューターと既存ツールチェーンでの開発を示す | 中 |
| Replit | AI によるアプリ作成、ホスティング、公開 | 既存プロジェクトの継続開発、レビュー、承認に集中 | 中 |
<!-- major-comparison:end -->

## ドキュメントとガイド

| 基本 | 応用 |
| --- | --- |
| [エディター](https://nimotecode.com/ja/docs/editor) | [Git・GitHub](https://nimotecode.com/ja/docs/source-control) |
| [SSH・SFTP](https://nimotecode.com/ja/docs/ssh) | [タスク](https://nimotecode.com/ja/docs/tasks) |
| [ターミナル](https://nimotecode.com/ja/docs/terminal) | [Docker](https://nimotecode.com/ja/docs/docker) |
| [Local Linux](https://nimotecode.com/ja/docs/local-linux) | [プラグイン](https://nimotecode.com/ja/docs/plugins) |

[全ドキュメント](https://nimotecode.com/ja/docs) · [FAQ](https://nimotecode.com/ja/docs/faq) · [実践ガイド（英語）](resources/README.md) · [Linux プリセット](presets/README.md)

## コミュニティと貢献

[不具合・機能要望](https://github.com/mobiledevloperlab/nimote_issues/issues) · [Discord](https://discord.gg/tTxbpqYmhR) · [X](https://x.com/mobiledevlab) · [公式サイト](https://nimotecode.com/ja/)

報告にはアプリ版、端末と OS、ワークスペース種別、再現手順、認証情報を除いたログを添えてください。文書修正、翻訳、例の追加は Pull Request で歓迎します。Host のコード貢献は [NimoteHost](https://github.com/mobiledevloperlab/nimotehost) へ。Star は他の開発者が NimoteCode を見つける助けになります。

## このリポジトリについて

**NimoteCode は商用クローズドソースアプリです。** このリポジトリは公式サイト、文書、ガイド、リリースノートを提供し、アプリのソースは含みません。

[NimoteHost](https://github.com/mobiledevloperlab/nimotehost) は Apache-2.0、[Linux Presets](https://github.com/mobiledevloperlab/nimote-linux-presets/blob/master/LICENSE) は MIT です。[Local Linux のソースとライセンス](https://nimotecode.com/ja/docs/local-linux-source)はサードパーティー部品に適用されます。各ライセンスは対応する部品のものであり、アプリや本リポジトリ全体には適用されません。

<details>
<summary>サイトとドキュメントの保守</summary>

```bash
nvm install
nvm use
npm ci
npm ci --prefix blog
node scripts/generate-readme-screenshot.mjs
npm run docs:build
npm run docs:check
```

Node 24 (`.nvmrc`); `npm run docs:dev`.

</details>

---

## NimoteCode を一緒に使いやすく

NimoteCode が役に立ったら、[⭐ Star](https://github.com/mobiledevloperlab/nimotecode) で他の開発者にも広めていただけるとうれしいです。

改善案、機能のリクエスト、不具合は、アプリ内のフィードバックまたは [GitHub Issues](https://github.com/mobiledevloperlab/nimote_issues/issues) へ。実際に使った感想が、今後の改善につながります。
