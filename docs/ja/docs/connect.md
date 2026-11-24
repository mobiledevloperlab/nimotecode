---
title: "Nimote Connect のダウンロードとインストール"
description: "Nimote Connect の対応パッケージ、セットアップ、CLI 操作、更新方法。"
---

# Nimote Connect のセットアップ

NimoteCode の公開ネットワーク経由のデバイス接続には、接続先 PC への Nimote Connect のインストール、アカウントとのペアリング、公開接続の有効化が必要です。既存の SSH アドレスや個人用 Tailscale アドレスへの直接 SSH 接続には不要です。

Connect は PC の SSH サーバーまでの通信経路です。接続後はリモートワークスペース、ファイル、SSH ターミナルを利用できます。Host モードは永続タスクや Agent セッションのための別の任意機能で、公開 SSH やターミナルの前提ではありません。現在の商用パッケージには Host も同梱されています。

商用パッケージと発行元の SHA-256 値は [GitHub Releases](https://github.com/mobiledevloperlab/nimote-connect/releases) から入手します。このリンクは商用リポジトリ公開時に置き換える仮のリンクです。現在文書化されている `0.2.0-rc.6` はローカル検証済みのリリース候補であり、全プラットフォームへの公開を意味しません。macOS / Linux は CPU に合う `darwin-amd64`、`darwin-arm64`、`linux-amd64`、`linux-arm64` の商用 tarball、Windows は配布されている場合に x64 / ARM64 用 CLI ZIP を選びます。

macOS / Linux では展開先で通常のデスクトップユーザーとして `./install.sh` を実行します。Windows PowerShell では `.\install.ps1` を実行します。macOS の GUI は `~/Applications/NimoteConn.app`、Linux の GUI が含まれる場合は `~/.local/bin/nimoteconn` です。Windows は CLI のみです。PC で OpenSSH を起動し、ペアリングを承認してから GUI の **Connect → Remote access** で公開接続を有効化します。CLI では `nimoteconnect remote-access enable` を実行します。

CLI の主な操作は `nimoteconnect status`（Connect）、`nimoteconnect host status`（Host）、`nimoteconnect remote-access status`（公開接続）、`nimoteconnect remote-access disable`（無効化）、`nimoteconnect doctor`（診断）、`nimoteconnect restart`（再起動）、`nimoteconnect logout`（ペアリング解除）です。Windows では `nimoteconnect` を `%LOCALAPPDATA%\NimoteConnect\nimote-connect.exe` に置き換えてください。

更新時は新しい同一プラットフォームのパッケージを検証し、元のユーザーでインストーラーを再実行します。実行中の Host タスクを先に終了してください。既存のペアリングには macOS / Linux で `./install.sh --skip-login`、Windows で `.\install.ps1 -SkipLogin` を使用できます。[英語の手順とコマンド表](/docs/connect)も参照してください。
