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

ようこそ画面でワークスペースを選びます。**Open Local Workspace** は端末のファイルを開き、**Connect Remote Workspace** は SSH ホストに接続します。**Local Linux** は対応する Android 端末に Ubuntu をインストールします。ホストを設定せずに試すには **Try Demo Workspace** を選択します。

<div class="doc-screenshots">
  <DocScreenshot file="startup-light.jpg" caption="ようこそ画面、ライトテーマ。" />
  <DocScreenshot file="startup-dark.jpg" caption="ようこそ画面、ダークテーマ。" />
</div>

<div class="doc-section">
<div class="doc-section__copy">

## ファイルを開いて編集する

プロジェクトディレクトリを選択し、Explorer でファイルを開きます。編集後、ディスク上のファイルを読み込むコマンドを実行する前に保存してください。選択、移動、プレビューの操作は[エディター](/ja/docs/editor)を参照してください。

</div>

<div class="doc-screenshots">
  <DocScreenshot file="editor-multiple-files.jpg" caption="開いているファイルはタブに表示されます。この例では webapp.py が選択されています。" />
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
  <DocScreenshot file="ai-plan-running.jpg" caption="承認後、Agent がプロジェクトファイルを読み込み、進捗を記録します。" />
</div>

回答とともに、読み取れなかったファイルなどの制約も確認してください。実行中に追加の指示を送ることもできます。Agent の選択と実行操作は [AI Chat と Agent](/ja/docs/ai)を参照してください。

## 補助ツールを設定する

言語サーバーとデバッグアダプターは別途設定が必要です。[LSP](/ja/docs/lsp) と[デバッグ](/ja/docs/debug)を参照してください。
