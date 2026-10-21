---
title: Local and Remote SSH Workspaces | NimoteCode Mobile IDE
description: Open a local project or connect to a remote project with SSH in NimoteCode, then work from one clear project root.
---

# ローカルおよびリモートの SSH ワークスペース


NimoteCode starts with a workspace: a local project stored on your device or a remote project reached through SSH.エクスプローラー、エディター、およびターミナルは同じプロジェクト ルートに接続されたままとなるため、最初の検査から検証までタスクを理解できる状態が保たれます。 Android にバンドルされている Ubuntu については、[Android Local Linux](/docs/local-linux) を参照してください。


<ImagePlaceholder image-key="localWorkspace" alt="Local workspace in NimoteCode on phone">
  <strong>Local workspace</strong>
<span>ローカル エクスプローラーを使用して、デバイスに保存されているプロジェクトを開きます。</span>
</ImagePlaceholder>

## ローカルワークスペースを開く


[**ローカル エクスプローラー**] を選択して、デバイスに保存されているプロジェクトを参照します。ファイルを編集したり、コマンドを実行したり、ソース管理での変更を確認したりする前に、フォルダーを確認してください。


## SSHワークスペースに接続する


<ImagePlaceholder image-key="sshWorkspace" alt="NimoteCode SSH workspace setup">
  <strong>SSH workspace setup</strong>
<span>リモート ホストに接続し、リモート エクスプローラーでそのプロジェクト ルートを開きます。</span>
</ImagePlaceholder>

4 つの手順で接続します。


1. SSH プロファイルを作成または選択します。

2. ホスト、ポート、およびユーザー名を入力します。

3. パスワード、秘密キーファイル、または貼り付けた秘密キーを使用して認証します。

4. リモート プロジェクトのルートを確認し、リモート エクスプローラーで開きます。


## リモート ディレクトリを選択して確認します


Explorer は、SSH を利用したプロジェクトの開始点です。接続後、**リモート エクスプローラー**を選択し、ファイルを開いたりコマンドを実行したりする前に、ホストとプロジェクト ルートの両方を確認します。


<ImagePlaceholder image-key="explorerPage" alt="Explorer selection page on NimoteCode for phone">
  <strong>Select a workspace explorer</strong>
</ImagePlaceholder>

<ImagePlaceholder image-key="explorerPopup" alt="Explorer selection popup on NimoteCode for phone">
  <strong>Explorer selection controls</strong>
</ImagePlaceholder>

Choose the project root—not merely the server home directory.これにより、エディター、ターミナル、検索、およびソース管理に共有境界が与えられ、間違った場所でコマンドが実行される可能性が減ります。


<ImagePlaceholder image-key="remoteDirectory" alt="Remote directory selection dialog on NimoteCode for phone">
<strong>リモート プロジェクト ディレクトリを選択します</strong>
</ImagePlaceholder>

## コンテキストに残るもの


- リモートプロジェクトを参照し、[エディタ](/docs/editor)でファイルを開きます。

- そのワークスペースの[ターミナル](/docs/terminal)でシェルコマンドを実行します。

- [検索](/docs/search)でリモートファイルの内容を検索します。

- [ソース管理](/docs/source-control)でフォーカスされたパッチを確認します。 Pro は、配信にゲートされた Git 書き込みアクションが必要な場合にのみ使用してください。


## より安全なリモート習慣


環境ごとに個別のプロファイルを使用し、機密性の高いホストには最小権限のアカウントとキーベースの認証を優先し、意図的なプロジェクトルートを選択します。再接続を認識する動作と接続の再利用により、リモート コマンドとプレビュー トンネルの回復力が高まりますが、書き込みコマンドを実行する前に、アクティブなホストとディレクトリを必ず確認する必要があります。


次へ: [ターミナル](/docs/terminal) · [SSHリモート開発ワークフロー](/docs/ssh) · [セキュリティと安全](/docs/security)
