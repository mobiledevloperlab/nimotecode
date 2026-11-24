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

## tmux で SSH ターミナルを再開する {#persistent-ssh-terminal}

NimoteCode 2.5.0 の Pro で、tmux を導入した対応 Linux または macOS ホストに接続します。ターミナルメニューから永続セッションを作成するか、リモートの tmux セッション一覧から同じホストと SSH アカウントのセッションを開きます。一覧はそのユーザーの既定の tmux ソケットを使用します。

ローカルタブを閉じると、クライアントの接続が解除され、リモートセッションは継続します。リモートセッションの終了を選んで確認すると、セッションと処理が停止します。ホストの再起動や tmux サーバーの終了でも、元のセッションは終了します。

Codex や Claude Code などがマウス入力を使う場合は、Shift を押しながらドラッグして、右クリックメニューでコピーします。NimoteCode 2.5.0 では再描画後も選択範囲を保持します。

履歴から保存済みの tmux セッションに戻るか、同じ SSH ユーザーで接続した別の端末のリモート一覧から開きます。スマートフォンを横向きにしてキーボードを開くと、十分な高さがある場合に Esc や Ctrl などが表示されます。

Android のローカル Linux に tmux がある場合は、稼働中の環境内のセッションも同じメニューから開けます。環境を停止するとセッションは終了します。Dev Containers 内とネイティブ Windows SSH ホストでは永続ターミナル操作を利用できません。

## リモート環境を更新する

リモートアカウントのシェル設定を変更したら **Refresh Remote Environment** を選ぶか、再接続します。取得したログイン環境は Tasks、Git、言語サーバー、デバッグアダプター、外部 Agent などのリモートツールで共有されます。

## ターミナルのタブをカスタマイズする

タブのカスタマイズメニューでは名前と色の変更、設定のリセットができます。**Customize Terminal Tab** ではタイトル、色、アイコンをまとめて設定できます。これらはセッションを識別するための設定で、ホストやコマンドの実行環境は変わりません。

<div class="doc-screenshots">
  <DocScreenshot file="terminal-customize-menu.jpg" caption="タブのカスタマイズメニュー。" />
  <DocScreenshot file="terminal-tab-style-form.jpg" caption="タブのタイトル、色、アイコンの設定。" />
</div>


## ターミナルの分割と連携

複数ペインを開いてサイズを調整できます。出力内のファイル位置から IDE に移動したり、選択した内容を AI に送って分析したりできます。

## NimoteCode 2.4.0

ターミナルの応答性、同期更新、検索、スクロール、Vim、クリップボード、Windows の貼り付け、ソフトキーボードを改善。

[2.4.0 →](/ja/releases/2.4.0)
