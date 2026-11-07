---
title: Docker と Dev Containers | NimoteCode
description: SSH ホスト上の Docker リソースを管理し、設定済み Dev Container ワークスペースを開きます。
---

# Docker と Dev Containers

Docker ツールは接続済み SSH ホストで動作します。ホストに Docker がインストールされ、SSH アカウントに daemon へのアクセス権が必要です。

## Docker を開く

<div class="doc-screenshots">
  <DocScreenshot file="docker-images.png" caption="Light テーマの Docker イメージ一覧。Debian bookworm-slim を含みます。" />
</div>

ワークスペース ツールから Docker パネルを開き、コンテナ、イメージ、ボリューム、ネットワーク、Compose プロジェクトを確認します。リソースの詳細、ログ、統計情報、exec ターミナルを利用でき、Docker Hub のイメージも検索できます。

## Compose サービスの管理

<div class="doc-screenshots">
  <DocScreenshot file="docker-image-detail.png" caption="Light テーマで表示した Debian bookworm-slim イメージの詳細。" />
</div>

Compose プロジェクトを開いてサービスを確認し、個別のサービスを操作します。Compose ファイルとビルドコンテキストは SSH ホスト上にあります。操作前に対象のプロジェクトとホストを確認してください。

## Dev Container ワークスペースの作成

`.devcontainer/devcontainer.json` またはルートの `devcontainer.json` を含む SSH プロジェクトを開きます。設定を確認してコンテナを作成または再構築します。初期化後、設定済みのツールと環境を備えた隔離コンテナ内でプロジェクトを開けます。

Docker のアクセスはアプリの現在の Pro、トライアル、Early Access の状態に従います。利用できない場合はホストの Docker、daemon、アカウント権限を確認します。起動直後に終了した場合は終了コードとログを確認してください。
