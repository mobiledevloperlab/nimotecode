---
title: "ダウンロードと導入 | NimoteHost"
description: "NimoteHost：ダウンロードと導入の手順と注意点。"
---

# ダウンロードと導入

**開発マシン**で利用できる SSH 接続を選択し、**ホストサービス**を開きます。ペアリング済みのマシンは Nimote Connect 経由でも接続できます。

## 準備

SSH で接続できる Linux、macOS、Windows と、SSH ユーザーがアクセスできるプロジェクトフォルダーを用意します。導入と接続には同じ OS アカウントを使います。スマートフォンからの利用には NimoteCode 2.4.1 以降、Pro、対応する Host が必要です。

## NimoteCode から導入 {#install-over-ssh}

NimoteCode 2.5.0 の **Host** から SSH で接続し、表示されるセットアップ案内に従います。PC は GitHub Releases に接続できる必要があります。Nimote Connect 付属の Host は Connect の案内を使います。

## 配布パッケージから導入 {#host-install}

Community 2.5.0 には CLI とデスクトップ版があります。アプリに導入案内が出ない場合やダウンロードできない場合は、下記の手順で導入します。

PC に合う完全な [Community パッケージ](https://github.com/mobiledevloperlab/nimotehost/releases/tag/community-v2.5.0)を選びます。サーバーなら **CLI**、管理画面も使うなら CLI を含む **デスクトップ版**です。OS と CPU は[パッケージの選び方](/ja/docs/host/compatibility)を参照してください。アーカイブの SHA-256 を確認して全体を展開します。[確認方法](https://github.com/mobiledevloperlab/nimotehost/blob/master/docs/deployment.md#install-from-a-website-download) リリースページでは CLI のアーカイブは `nimotehost-`、デスクトップ版は `nimotehost-gui-` で始まります。

SSH に使うアカウントで展開先のターミナルを開きます。Linux と macOS では `sudo` を付けずに実行します。

### Linux または macOS

```sh
./nimotehost setup
./nimotehost deploy status
```

### Windows PowerShell

```powershell
.\nimotehost.exe setup
.\nimotehost.exe deploy status
```

`setup` は導入とユーザーサービスの起動を行い、`deploy status` は状態を確認します。`"running": true` を確認したら、NimoteCode の **Host** で SSH 接続と PC 側のプロジェクトフォルダーを選びます。

Linux は systemd のユーザーマネージャーが必要です。macOS と Windows はデスクトップにログインしたユーザーが必要です。前面で試す場合は展開先で `./nimotehost start`（Windows は `.\nimotehost.exe start`）を実行し、ターミナルを開いたままにします。

### ソースからビルド {#host-source}

必要な環境とコマンドは[ソースビルドの手順](https://github.com/mobiledevloperlab/nimotehost#build-and-run)を参照してください。

[概要](/ja/docs/host) · [接続・ターミナル・タスク](/ja/docs/host/sessions)
