---
title: ローカルと SSH のワークスペース | NimoteCode
description: "ローカルと SSH のワークスペースの設定、操作手順、画面の説明。"
---

# ローカルと SSH のワークスペース

## ワークスペースを選ぶ

Explorer にはローカル、リモート SSH、Local Linux、デモへの入口があります。Recent History には以前開いた場所が表示されます。接続中のワークスペースによって利用できるファイルとツールが決まります。

<div class="doc-screenshots">
  <DocScreenshot file="workspace-start-light.png" caption="ワークスペースを開く前の Explorer、ライトテーマ。" />
  <DocScreenshot file="workspace-start-dark.jpg" caption="ワークスペースを開く前の Explorer、ダークテーマ。" />
</div>

## ローカルフォルダーを開く

**Open Local Workspace** を選び、システムの選択画面で保存場所を指定してプロジェクトフォルダーへのアクセスを許可します。選択したディレクトリが Local Explorer のルートになります。選択画面の外観と利用できる場所は OS によって異なります。

### 保存場所を選ぶ

**Open Local Workspace** を選択し、システムの選択画面でプロジェクトの保存場所を探します。図は Android の例で、他の OS では画面が異なる場合があります。

<div class="doc-screenshots">
  <DocScreenshot file="local-storage-picker.png" caption="Android の保存場所の選択画面。" />
</div>

### プロジェクトフォルダーへのアクセスを許可する

プロジェクトフォルダーを開き、場所を確認して **Use this folder** を選択します。個別のファイルではなく、プロジェクトのディレクトリを選びます。

<div class="doc-screenshots">
  <DocScreenshot file="local-file-browser.png" caption="Use this folder 操作を備えた Android のフォルダー選択画面。" />
</div>

### ローカルワークスペースを確認する

Local Explorer に戻ったら、ルートディレクトリを確認します。図のフォルダーは空です。自分のプロジェクトでは、ここに目的のファイルがあるか確認してください。

<div class="doc-screenshots">
  <DocScreenshot file="local-workspace-files.png" caption="フォルダー選択後の Local Explorer。この例ではプロジェクトファイルが表示されていません。" />
</div>

## SSH 接続を設定する

1. **Connect Remote Workspace**、続いて **Connect** を選び、接続設定を追加します。
2. ホスト、ポート、ユーザー名、認証方式を入力します。
3. 必要に応じて **Proxy Settings** で SOCKS5 または HTTP CONNECT を選択します。
4. 接続してリモートのプロジェクトディレクトリを選択します。

**Ping / test SSH port** はホストとポートへの直接 TCP 接続を確認します。プロキシや認証情報は検証しません。ポートテストに成功しても SSH ワークスペースへの接続は確立されません。

<div class="doc-screenshots">
  <DocScreenshot file="remote-connection-form.jpg" caption="ポートテスト、プロキシ、認証設定を備えた SSH 接続フォーム。" />
  <DocScreenshot file="remote-connection-history.png" caption="保存済み SSH 接続を表示する Recent History。" />
</div>

## プロジェクトのルートを選ぶ

リモートディレクトリ選択画面でパスを入力するか、目的のフォルダーまで移動します。開いたら Explorer のサーバー、ユーザー、ポート、ルートを確認します。**Select** でファイル選択モードに入ります。ディレクトリを切り替えると、プロジェクトツールが使うワークスペースも変わります。

### リモートディレクトリを探す

**Remote Directory** にパスを入力するか、フォルダーを順に開いて、目的のプロジェクトルートを選択します。

<div class="doc-screenshots">
  <DocScreenshot file="remote-directory-picker.jpg" caption="ワークスペースのルートを選ぶ Remote Directory ダイアログ。" />
</div>

### 接続先とパスを確認する

Remote Explorer のホスト、ユーザー、ポート、ルートパスを確認し、目的のリモートプロジェクトを開いていることを確かめます。

<div class="doc-screenshots">
  <DocScreenshot file="remote-workspace-connected.jpg" caption="接続中のホストとルートパスを表示する Remote Explorer。" />
</div>

### ファイル選択モードに入る

ファイルを選ぶには **Select** をクリックします。現在のワークスペースを確認してから、対象のファイルを選択してください。

<div class="doc-screenshots">
  <DocScreenshot file="remote-file-selection.jpg" caption="ファイル選択モードの Remote Explorer。" />
</div>
