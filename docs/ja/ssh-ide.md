---
title: "SSH IDE：リモートファイル・ターミナル・Git | NimoteCode"
description: "NimoteCode の SSH IDE で SFTP 参照、コード編集、ホストのターミナル、Git を利用。接続、権限、言語ツールの要件を確認できます。"
lastUpdated: "2026-11-17"
pageClass: "seo-product-guide"
---

# SSH IDE でリモートプロジェクトを編集・検証する

NimoteCode は Android、iPhone、iPad から SSH でリモートプロジェクトを開きます。SFTP でファイルを参照し、タブや分割ペインで編集し、ホストでコマンドを実行して Git 差分を確認できます。リポジトリ、依存関係、実行環境はホストに置いたまま使います。

## 三つの層を分けて確認する

| 層 | 目的 | 要件 |
| --- | --- | --- |
| SSH | ホスト接続と認証 | 到達できるサーバーと許可されたアカウント |
| SFTP | ファイルの参照と保存 | サブシステムとファイル権限 |
| ホストツール | Git、検証、言語サービス、Agent | 依存関係、認証情報、実行権限 |

Shell が動いても SFTP の成功は証明できません。ファイルを開くだけではツールも導入されません。

<div class="doc-screenshots">
  <DocScreenshot file="remote-workspace-connected.jpg" caption="SSH ホスト、アカウント、リポジトリルートを表示する Remote Explorer。" />
</div>

## ワークスペースの機能

Explorer でルートを選び、タブや分割編集で関連ファイルを読みます。コマンド前に保存してください。ソース管理には変更と履歴があり、Git 書き込みと GitHub はアクセス権に従います。言語サーバーとデバッグアダプターは実行先で設定が必要です。

## ホストに合わせる

Windows は PowerShell と SFTP を使います。[設定ガイド](/ja/docs/windows-ssh-sftp)を参照してください。Mac と Linux はホストの Shell とツールを使います。依存関係があるホストを起動しておく必要があり、接続だけではプロセスを維持できません。

## 編集前にリポジトリを確認する

Remote Explorer のホスト、アカウント、ルートパスを確認します。ターミナルの作業ディレクトリとブランチは別に確認してください。エディターでファイルを切り替えてもシェルのディレクトリは変わりません。Linux または macOS では次を使えます。

```sh
pwd
git status --short --branch
```

保存後にプロジェクト所定のテストやビルドを実行します。コミット前に差分と既存の変更を確認してください。ターミナルは使えてもファイルにアクセスできない場合は SFTP とディレクトリ権限を、コマンドが見つからない場合はホストの導入先と PATH を確認します。

## 切断と長時間の処理に備える

長い処理にはホスト側のセッション管理を使い、再接続後に状態を確認します。Linux や macOS の設定済み tmux セッションは、ホストが稼働していれば SSH 切断後も維持できます。画面ロックやアプリ切り替えで接続が中断することがあり、ホストのスリープや再起動では処理が止まる場合があります。

## 設定と問題の切り分け

接続手順は [リモート開発](/ja/remote-coding)と [SSH リファレンス](/ja/docs/ssh)、実行場所の選択は [Mobile IDE](/ja/mobile-ide)、AI の選択は [モバイル AI](/ja/mobile-ai-coding)を参照してください。

ローカル／SSH ファイルの編集と基本ターミナルから始められます。一部機能には Pro が必要です。[無料版と Pro](/ja/pro)およびアプリ内の利用状態を確認してください。AI にはモデル提供元の設定が必要で、利用料は提供元が別途請求します。

<div class="seo-cta">
  <p><strong>NimoteCode をダウンロード</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="/ja/docs/quick-start" class="home-page-btn secondary">クイックスタート</a>
  </p>
</div>
