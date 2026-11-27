---
title: "Host セッション用の Nimote Connect を導入する | NimoteCode"
description: "Nimote Connect には、ターミナル、タスク、対応 Agent セッションを管理する NimoteHost サービスが含まれます。プロジェクトにアクセスできる SSH アカウントを使い、PC と Host サービスを稼働させてください。アプリ内の Host セッションには Pro が必要です。"
---

# Host セッション用の Nimote Connect を導入する

Nimote Connect には、ターミナル、タスク、対応 Agent セッションを管理する NimoteHost サービスが含まれます。プロジェクトにアクセスできる SSH アカウントを使い、PC と Host サービスを稼働させてください。アプリ内の Host セッションには Pro が必要です。

## NimoteCode から導入 {#install-over-ssh}

NimoteCode の **マシン** で PC の SSH 接続を選び、**Host** を開きます。Host が見つからない場合は **Nimote Connect をインストール** を選びます。ウィザードで SSH ホストの選択、パッケージのダウンロード、導入の確認を行います。求められたらデバイスを承認してください。対応する 64 ビット版 macOS・Linux ではアプリ内で導入と更新ができます。

## 手動で導入 {#host-install}

ウィザードでパッケージを取得できない場合や Windows の場合は、PC 上で直接導入します。[公式リリース](https://github.com/mobiledevloperlab/nimote-connect/releases)から対応するアーカイブと SHA-256 ファイルを取得し、検証して展開します。SSH と同じユーザーで macOS・Linux では `./install.sh`、Windows PowerShell では `.\install.ps1` を実行し、再接続して **Host** を開きます。

## NimoteHost のソース {#host-source}

[NimoteHost リポジトリ](https://github.com/mobiledevloperlab/nimotehost)ではソースと独立した Community ビルドを提供しています。NimoteCode 内の導入には Nimote Connect を使用します。

[概要](/ja/docs/host) · [パッケージの互換性](/ja/docs/host/compatibility)
