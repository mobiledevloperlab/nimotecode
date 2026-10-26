---
title: Android Local Linux | NimoteCode
description: "Android Local Linuxの設定、操作手順、画面の説明。"
---

# Android Local Linux

## 動作要件

Local Linux は Android 8 以降の ARM64 または x86_64 の 64 ビット版アプリで Ubuntu、Bash、Git、SSH を提供します。PRoot を使い、Android の root 権限は不要です。iOS と 32 ビット ARM 端末には対応しません。言語ツールチェーン、言語サーバー、デバッグアダプター、外部 Agent の CLI は別途インストールが必要です。

<div class="doc-section">
<div class="doc-section__copy">

## インストールして開く

1. ようこそ画面または Explorer で **Local Linux** を選択します。
2. **Install** を選び、インストールの完了を待ちます。
3. 環境を起動してワークスペースを開きます。

初回インストールには同梱イメージを使います。追加パッケージのインストールにはインターネット接続が必要な場合があります。環境ファイルはアプリ専用ストレージに保存されます。

</div>

<div class="doc-screenshots">
  <DocScreenshot file="local-linux-deploy.jpg" caption="Not installed と Install を表示する Local Linux のインストール画面。" />
</div>

</div>

## 環境を確認する

Terminal で `uname -a` を実行し、カーネルとアーキテクチャを確認します。`cat /etc/os-release` でディストリビューションを確認できます。Local Linux は Android ホストのカーネルを共有するため、カーネル名だけでは Ubuntu ユーザー空間のバージョンは分かりません。

<div class="doc-screenshots">
  <DocScreenshot file="local-linux-terminal-uname-a.jpg" caption="Local Linux ターミナルでの uname -a の出力。" />
  <DocScreenshot file="local-linux-ai-print-os-info.jpg" caption="uname と /etc/os-release の出力を要約した AI の回答。" />
</div>

## 停止・リセット・削除する

Local Linux の操作項目で環境を管理します。停止すると実行中の作業が終了し、再起動時には既存の環境を使用します。リセット、環境の削除、アプリデータの消去では環境ファイルが削除されます。内蔵 SSH サービスはアプリ接続用にループバックで待ち受けます。Android がバックグラウンドプロセスを終了する場合があるため、アプリに戻ったら状態を確認してください。

## 関連資料

[セットアップ](/ja/docs/local-linux/getting-started) · [アーキテクチャ](/ja/docs/local-linux/architecture) · [互換性](/ja/docs/local-linux/compatibility) · [セキュリティと整合性](/ja/docs/local-linux/security-integrity) · [プリセット](/ja/docs/local-linux/presets) · [トラブルシューティング](/ja/docs/local-linux/troubleshooting) · [ソースとライセンス](/ja/docs/local-linux-source)
