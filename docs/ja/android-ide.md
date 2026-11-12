---
title: "Android IDE：ローカル Linux・SSH・Git・AI | NimoteCode"
description: "NimoteCode で Android スマホやタブレットを開発に活用。コード編集、root 不要の Linux、Windows・Mac・Linux への SSH 接続、Git と AI を一つのアプリで。"
pageClass: android-ide-page
---

# Android IDE：ローカル Linux から SSH リモート開発まで

タブレットで Python スクリプトを直す、スマートフォンから開発 PC のコマンドを実行する、外出先でリポジトリの変更を確認する。まず決めたいのは、コードとツールをどこで動かすかです。NimoteCode では、ローカルフォルダー、端末内の Linux、リモート SSH ホストを用途に合わせて選べます。

**NimoteCode はコードエディター、Explorer、ターミナル、Git、設定可能な AI 支援を備えたモバイル IDE です。** ファイルを探し、編集して保存し、選んだ実行環境で検証するまでを同じプロジェクトで進められます。スマートフォンでもタブレットでも利用でき、ファイルの比較にはエディターの分割表示も使えます。

<div class="seo-cta">
  <p><strong>Android でプロジェクトを開き、作業に合った開発環境を選びましょう。</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode&amp;utm_source=nimotecode&amp;utm_medium=organic&amp;utm_campaign=android_ide" class="home-page-btn primary" target="_blank" rel="noreferrer">Google Play からダウンロード</a>
    <a href="/ja/docs/quick-start" class="home-page-btn secondary">クイックスタートを読む</a>
  </p>
</div>

<div class="android-ide-media">
  <DocScreenshot file="editor-code-selection.png" caption="Android のエディターで benchmark.py を表示。Python の構文強調、行番号、変更済みファイルの印を確認できます。" />
</div>

## コードとコマンドの実行場所を選ぶ

ローカルファイルの編集と Linux ツールの実行は別の機能です。フォルダーを開くだけでは言語ツールはインストールされません。ワークスペースを選んでから依存関係を用意します。

| ワークスペース | ファイルとツールの場所 | 適した用途 |
| --- | --- | --- |
| ローカルフォルダー | 許可した端末内フォルダー。実行には別途ランタイムが必要 | ソース、ドキュメント、設定の編集 |
| Local Linux | PRoot による端末内の Ubuntu ユーザー空間。root 不要 | Shell スクリプト、Git、互換性のある CLI プロジェクト |
| リモート SSH | Windows、Mac、Linux のホスト | 既存プロジェクト、ホストのツール、大きなビルド |

## root 不要で Android 上の Linux ターミナルを使う

[Local Linux](/ja/docs/local-linux) は、**Android 8 以降の対応端末で、64 ビット ARM64 または x86_64 のアプリ**を使用する場合に、Ubuntu ユーザー空間、Bash、Git、SSH を提供します。Local Linux の入口から同梱環境をインストールし、起動してワークスペースを開きます。別の開発 PC は必要ありません。

スクリプトや軽量ツール、互換性のある言語プロジェクトに利用できます。言語ツールチェーン、言語サーバー、デバッグアダプターは別途導入してください。追加パッケージの取得には通信が必要な場合があり、性能と互換性は端末やツールに左右されます。

ディストリビューションは `cat /etc/os-release` で確認します。`uname -a` に表示されるのは共有する Android カーネルです。PRoot を利用する仕組みであり、仮想マシンではありません。iOS と 32 ビット ARM には対応していません。[互換性ガイド](/ja/docs/local-linux/compatibility)も確認してください。

<div class="android-ide-media">
  <DocScreenshot file="local-linux-terminal-uname-a.jpg" caption="Local Linux の Bash で uname -a を実行。共有する Android カーネルと aarch64 アーキテクチャを表示しています。" />
</div>

## SSH で Windows・Mac・Linux に接続する

[SSH ワークスペース](/ja/docs/ssh)では、既存プロジェクトを開発マシンに置いたまま、Android からファイルを参照・編集し、ホスト上でコマンドを実行できます。依存関係やビルド環境をホストで引き続き利用できます。

ホスト、ポート、ユーザー名、認証方法を設定し、リポジトリのルートを選択します。初回接続時はホスト鍵の指紋を照合してください。Windows では PowerShell と SFTP、Mac と Linux ではホストに設定された Shell を使用します。編集前にディレクトリとブランチを確認し、検証前に保存します。

ホストは起動中で到達可能である必要があります。LAN の外から接続する場合は VPN などの安全な経路を用意してください。SSH だけでは切断後のプロセス継続は保証されません。

<div class="android-ide-media">
  <DocScreenshot file="remote-workspace-connected.jpg" caption="Remote Explorer で SSH の接続状態、ホスト、ユーザー、ポート、sorting-demo のルートを確認できます。" />
</div>

## Git の変更確認と GitHub の作業をつなぐ

[ソース管理](/ja/docs/source-control)で変更済み・未追跡ファイル、ステージ済みの変更、差分、コミット履歴を確認できます。コミット前にブランチと差分を確認してください。Git 操作には現在のワークスペースのリポジトリと認証情報が使われます。

GitHub ページではリポジトリ、Issue、Pull Request、チェック、ワークフローの実行を参照し、端末、Local Linux、SSH ホストへクローンできます。操作範囲はアカウントとリポジトリの権限に従います。クローンだけでは依存関係は入りません。選んだ環境でプロジェクトの検証を実行します。

<div class="android-ide-media">
  <DocScreenshot file="source-control-changes.png" caption="変更一覧とステージ済み変更を分けて表示するソース管理画面。ブランチ選択とコミット履歴にも移動できます。" />
</div>

## プロジェクトに合わせて AI Chat と Agent を使う

Chat で選択したコードの説明やエラーの分析を依頼できます。ワークスペースのツールが必要な作業には Nimote Agent を選びます。**Confirm** モードでは計画を確認して実行を承認した後にツールが動きます。完了後はファイル、差分、プロジェクトの検証結果を確認してください。

AI の利用にはモデル提供元の設定が必要で、モデル利用料は提供元が別途請求します。外部 ACP エージェントには、選んだ実行環境に対応ランタイムと認証情報が必要です。[AI ガイド](/ja/docs/ai)で Chat、Agent、MCP の設定を確認できます。

<div class="android-ide-media">
  <DocScreenshot file="ai-plan-approval.jpg" caption="Confirm モードの Nimote Agent。プロジェクト調査の計画を表示し、Approve this run による承認を待っています。" />
</div>

## インストールから最初の変更の検証まで

1. Google Play からインストールし、ローカルフォルダー、Local Linux、SSH のいずれかを開きます。
2. プロジェクトのルートとブランチを確認し、実行環境に必要なコマンドを用意します。
3. ファイルを編集して保存し、その環境でテスト、lint、ビルドなどの所定の検証を実行します。
4. ソース管理で差分を読み、検証結果と権限を確認してからコミットや共有を行います。

コマンドを一つ実行するだけなら SSH クライアント、文章を直すだけなら簡単なエディターで足りる場合があります。NimoteCode はプロジェクトツリー、編集、ターミナル、Git、AI をまとめて使いたいときに役立ちます。大きなビルドや PRoot 非対応ツールには適切なリモートホストを選んでください。一部機能には Pro が必要です。[無料版と Pro](/ja/pro)、およびアプリ内の利用状態を確認できます。

## Android IDE のよくある質問

### Linux の利用に root は必要ですか？

不要です。Local Linux は Android 8 以降の対応端末で、64 ビット ARM64 または x86_64 のアプリから PRoot を使います。ツールチェーンは別途必要で、すべての Linux 処理が動くわけではありません。

### リモート PC がなくても開発できますか？

はい。対応 Android 端末でローカルファイルを編集し、Local Linux で互換性のあるツールを実行できます。初期設定やパッケージ取得には通信が必要な場合があります。クラウド AI と GitHub には各サービスへの接続が必要です。

### Android Studio と同じものですか？

いいえ。NimoteCode は編集、ターミナル、Git、AI、Local Linux、SSH プロジェクト向けのモバイル IDE です。完全な Android Studio ツールチェーンや Android エミュレーターは提供しません。必要なビルドは適切に設定したホストで実行してください。

### 無料でダウンロードできますか？

Google Play からダウンロードできます。一部機能には Pro が必要です。利用可否はアカウント、アプリのバージョン、ストアの地域によって異なります。モデル利用料は別途発生します。

<div class="seo-cta">
  <p><strong>Android でプロジェクトを開き、作業に合った開発環境を選びましょう。</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode&amp;utm_source=nimotecode&amp;utm_medium=organic&amp;utm_campaign=android_ide" class="home-page-btn primary" target="_blank" rel="noreferrer">Google Play からダウンロード</a>
    <a href="/ja/docs/quick-start" class="home-page-btn secondary">クイックスタートを読む</a>
  </p>
</div>

## 機能と設定を詳しく見る

- [エディターと分割表示](/ja/docs/editor)
- [Android Local Linux](/ja/docs/local-linux)
- [SSH ワークスペースの設定](/ja/docs/ssh)
- [Git と GitHub](/ja/docs/source-control)
- [無料版と Pro の機能](/ja/pro)

- [Windows 11 の設定とトラブルシューティング](/ja/docs/windows-ssh-sftp)
