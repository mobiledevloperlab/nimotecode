---
title: クイックスタート | NimoteCode
description: "クイックスタートの設定、操作手順、画面の説明。"
---

# クイックスタート

ワークスペースを開き、ファイルを編集して、最初のコマンドを実行します。以下の順に進めてください。モデル接続の設定は AI Agent を使う段階で行います。

- [ワークスペースを開く](#ワークスペースを開く)
- [ファイルを開いて編集する](#ファイルを開いて編集する)
- [コマンドを実行する](#コマンドを実行する)
- [AI Agent を実行する](#ai-agent-を実行する)

## ワークスペースを開く

フル IDE では、端末のファイル、SSH ホスト、GitHub のプロジェクト、対応 Android 端末の Local Linux を選べます。サンプルプロジェクトでも画面を試せます。

アプリには4つのモードがあります。**クイックターミナル**は SSH、Linux、コマンド用、**AI ワークスペース**は AI チャット、エージェント、タスク用、**フル IDE**はファイル、Git、AI 開発用です。**Host** は NimoteHost を使い、継続するリモートタスクと Agent セッションを管理します。「モードを切り替え」で選択できます。プロジェクトの保存先は別に選びます。端末のファイルは編集できますが、コマンドの実行には SSH または Local Linux が必要です。

<div class="doc-screenshots">
  <DocScreenshot file="startup-light.jpg" caption="ようこそ画面、ライトテーマ。" />
  <DocScreenshot file="mode-switch.png" caption="フル IDE のワークスペースメニューからモードを切り替えます。" />
</div>

<div class="doc-section">
<div class="doc-section__copy">

## ファイルを開いて編集する

プロジェクトディレクトリを選択し、Explorer でファイルを開きます。編集後、ディスク上のファイルを読み込むコマンドを実行する前に保存してください。選択、移動、プレビューの操作は[エディター](/ja/docs/editor)を参照してください。

</div>

<div class="doc-screenshots">
  <DocScreenshot file="editor-multiple-files.jpg" caption="別々のエディタータブで開いた Python と Markdown。" />
</div>

</div>

<div class="doc-section">
<div class="doc-section__copy">

## コマンドを実行する

SSH または Local Linux ワークスペースで Terminal を開き、`pwd` で作業ディレクトリを確認します。プロジェクトのテストやビルドコマンドを実行し、[ソース管理](/ja/docs/source-control)で変更ファイルを確認します。ローカルフォルダーを開くだけでは Linux 実行環境は提供されません。

</div>

<div class="doc-screenshots">
  <DocScreenshot file="terminal-command-output.png" caption="ls コマンドで列挙したプロジェクトファイルを表示するターミナル。" />
</div>

</div>

## AI Agent を実行する

AI Agent でプロジェクトを調べ、ファイル間の関係を確認できます。

1. [設定ガイド](/ja/docs/configuration)でプロバイダーを追加し、モデルへのアクセスを設定します。
2. プロジェクトのワークスペースを開いた状態で AI パネルを開き、設定済みのモデルと **Nimote Agent** を選択します。
3. **Confirm** モードを選び、「このプロジェクトを説明して」などと依頼します。画面例の依頼は「Explain this project」です。
4. 提案された計画を確認し、**Approve this run** でツールの実行を許可します。タイムラインでファイルの読み込みとツールの結果を確認できます。

<div class="doc-screenshots">
  <DocScreenshot file="ai-plan-approval.jpg" caption="Confirm モードでプロジェクトの調査計画を確認してから実行を承認します。" />
  <DocScreenshot file="ai-plan-running.jpg" caption="Agent のタスク結果：Python テストの追加、成功したテスト出力、Git 差分。" />
</div>

回答とともに、読み取れなかったファイルなどの制約も確認してください。実行中に追加の指示を送ることもできます。Agent の選択と実行操作は [AI Chat と Agent](/ja/docs/ai)を参照してください。

## 補助ツールを設定する

言語サーバーとデバッグアダプターは別途設定が必要です。[LSP](/ja/docs/lsp) と[デバッグ](/ja/docs/debug)を参照してください。
