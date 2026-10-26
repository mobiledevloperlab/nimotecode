---
title: ターミナル | NimoteCode
description: "ターミナルの設定、操作手順、画面の説明。"
---

# ターミナル

<div class="doc-section">
<div class="doc-section__copy">

## ワークスペースのコマンドを実行する

現在の SSH または Local Linux ワークスペースで Terminal を開きます。`pwd` でディレクトリを確認してからプロジェクトのコマンドを実行してください。出力はそのセッションに属し、エディターのタブを切り替えてもシェルの作業ディレクトリは変わりません。

</div>

<div class="doc-screenshots">
  <DocScreenshot file="terminal-command-output.png" caption="ls の出力を表示するターミナル。" />
</div>

</div>

<div class="doc-section">
<div class="doc-section__copy">

## 出力を検索・コピー・分析する

セッションメニューには出力検索、クリップボード操作、**Analyze with AI**、出力の消去、セッションの終了があります。Analyze with AI は説明のためにターミナルのコンテキストを送信します。プロバイダーに渡す前に選択内容を確認してください。

</div>

<div class="doc-screenshots">
  <DocScreenshot file="terminal-actions-menu.jpg" caption="Analyze with AI と Refresh Remote Environment を含むセッションメニュー。" />
</div>

</div>

## リモート環境を更新する

リモートアカウントのシェル設定を変更したら **Refresh Remote Environment** を選ぶか、再接続します。取得したログイン環境は Tasks、Git、言語サーバー、デバッグアダプター、外部 Agent などのリモートツールで共有されます。

## ターミナルのタブをカスタマイズする

タブのカスタマイズメニューでは名前と色の変更、設定のリセットができます。**Customize Terminal Tab** ではタイトル、色、アイコンをまとめて設定できます。これらはセッションを識別するための設定で、ホストやコマンドの実行環境は変わりません。

<div class="doc-screenshots">
  <DocScreenshot file="terminal-customize-menu.jpg" caption="タブのカスタマイズメニュー。" />
  <DocScreenshot file="terminal-tab-style-form.jpg" caption="タブのタイトル、色、アイコンの設定。" />
</div>
