---
title: コードエディター | NimoteCode
description: "コードエディターの設定、操作手順、画面の説明。"
---

# コードエディター

## ファイルを開いてタブを切り替える

Explorer または Search からファイルを開くと、それぞれタブに表示されます。ローカルとリモートのファイルに対応し、分割表示では二つのファイルを並べて作業できます。ディスク上のファイルを読み込む外部ツールを実行する前に保存してください。

<div class="doc-screenshots">
  <DocScreenshot file="editor-empty-state.png" caption="タブが開いていないときは Browse files からファイルを選択できます。" />
  <DocScreenshot file="editor-multiple-files.jpg" caption="複数のファイルタブ。webapp.py が選択されています。" />
</div>

## テキストを選択して編集する

範囲を選択してコピー、切り取り、置換を行います。選択メニューには **Ask AI** もあります。その他のメニューには元に戻す、やり直し、クリップボード操作があります。スマートフォン、タブレット、デスクトップで同じエディター実装を使い、キーボードと IME 入力に対応します。

<div class="doc-screenshots">
  <DocScreenshot file="editor-code-selection.png" caption="行番号と構文強調表示を備えた Python ソースの編集画面。" />
  <DocScreenshot file="editor-context-menu.jpg" caption="Copy、Cut、Paste、Select All、Ask AI を含む選択メニュー。" />
  <DocScreenshot file="editor-overflow-menu.jpg" caption="Undo、Redo、クリップボード操作を含むエディターのその他のメニュー。" />
</div>

<div class="doc-section">
<div class="doc-section__copy">

## シンボルと履歴をたどる

シンボルメニューには **Go To Definition**、**References**、**Rename Symbol**、**Outline**、Git 履歴の操作があります。コードのナビゲーションには設定済みの言語サーバーが必要で、履歴操作には Git リポジトリが必要です。

</div>

<div class="doc-screenshots">
  <DocScreenshot file="editor-symbol-menu.jpg" caption="現在のファイルに対するシンボルと履歴の操作。" />
</div>

</div>

## Markdown と HTML をプレビューする

Markdown のソースを編集し、プレビューで見出し、コードブロック、表を確認できます。HTML プレビューは未保存の変更を含む現在の編集内容のスナップショットを表示し、参照するリソースをワークスペースから読み込みます。静的 HTML の表示に SSH ホスト上の Web サーバーは不要ですが、サーバー側の処理にはプロジェクトの実行環境が必要です。

<div class="doc-screenshots">
  <DocScreenshot file="markdown-source-editor.jpg" caption="README.md のソース編集画面。" />
  <DocScreenshot file="markdown-preview.jpg" caption="ディレクトリツリーと表を含む README.md のプレビュー。" />
  <DocScreenshot file="html-report-preview.jpg" caption="エディターのプレビュータブに表示された HTML ベンチマークレポート。" />
</div>
