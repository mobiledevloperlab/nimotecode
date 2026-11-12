---
title: "Android SSH クライアント：SFTP・編集・ターミナル | NimoteCode"
description: "NimoteCode で Android から Linux、Mac、Windows に SSH 接続。認証、SFTP ファイル参照、コード編集とリモートプロジェクトの検証を説明します。"
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# Android SSH クライアントでコマンドとファイルを扱う

Android からサーバーのコマンドや設定を扱う場合、NimoteCode は SSH、SFTP 参照、編集、Git レビューを提供します。コマンドだけなら専用ターミナルで十分です。ファイルと変更も扱うならプロジェクトワークスペースを選べます。

## 接続を設定して確認

ホスト、ポート、アカウント、許可された認証を入力し、初回はホスト鍵を照合します。ポートテストは直接 TCP 接続を調べるだけで、認証や SFTP は検証しません。接続後にルートを選びます。

<div class="doc-screenshots">
  <DocScreenshot file="remote-connection-form.jpg" caption="Android の SSH 接続画面。ポートテストと認証設定を表示。" />
</div>

## アドレスと権限

LAN では使用中の Wi-Fi／Ethernet アドレスを使い、外部では VPN などの安全な経路を用意します。ホストを起動しておく必要があります。認証はサーバーの方針、SFTP 保存はファイル権限にも従います。

Windows は PowerShell と SFTP を使います。[Windows ガイド](/ja/docs/windows-ssh-sftp)で OpenSSH とファイアウォールを設定します。Mac と Linux はホストの Shell を使います。

## ファイル操作まで検証

ユーザー所有の場所でファイルを開いて保存し、ターミナルのディレクトリと所定の検証を確認してから Git 差分を読みます。Git、言語サービス、外部 Agent はホスト側の導入と権限が必要です。

詳細は[リモート開発の設定](/ja/remote-coding)、ホストなしの Android 作業は [Android IDE](/ja/android-ide)、機能一覧は [SSH IDE](/ja/ssh-ide)を参照してください。

ローカル／SSH ファイルの編集と基本ターミナルから始められます。一部機能には Pro が必要です。[無料版と Pro](/ja/pro)およびアプリ内の利用状態を確認してください。AI にはモデル提供元の設定が必要で、利用料は提供元が別途請求します。

<div class="seo-cta">
  <p><strong>NimoteCode をダウンロード</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="/ja/docs/quick-start" class="home-page-btn secondary">クイックスタート</a>
  </p>
</div>
