---
title: ソース管理 | NimoteCode
description: "ソース管理の設定、操作手順、画面の説明。"
---

# ソース管理

<div class="doc-section">
<div class="doc-section__copy">

## リポジトリの状態を確認する

Git ワークスペースで Source Control を開きます。**Changes** には変更済み、削除済み、未追跡のファイル、**Staged Changes** にはコミットに備えてステージしたファイルが表示されます。アプリ外で操作した後は更新してください。

</div>

<div class="doc-screenshots">
  <DocScreenshot file="source-control-changes.png" caption="変更済み・未追跡ファイルと、独立したステージ済み変更・履歴の領域。" />
</div>

</div>

## 差分とコミットを確認する

変更ファイルを開くと変更前後を比較できます。**Commit History** でコミットを開くと、ファイル別に変更を確認できます。画面の差分は一時的なテキスト編集を含む操作例であり、推奨するコード変更ではありません。

<div class="doc-screenshots">
  <DocScreenshot file="git-diff-view.jpg" caption="追加と削除を強調表示した変更前後の内容。" />
  <DocScreenshot file="git-commit-details.jpg" caption="ファイル別のパッチを表示するコミット詳細。" />
</div>

<div class="doc-section">
<div class="doc-section__copy">

## ブランチを切り替える

上部のブランチ名から検索、新規作成、既存ブランチのチェックアウトを行います。切り替える前に未コミットの変更を確認してください。Git の書き込み操作には対応する Pro の利用権限とリポジトリの権限が必要です。

</div>

<div class="doc-screenshots">
  <DocScreenshot file="git-branch-checkout.jpg" caption="検索と Create New Branch を備えた Checkout Branch ダイアログ。" />
</div>

</div>

<div class="doc-section">
<div class="doc-section__copy">

## Git の AI ツールを使う

**AI Tools** を開き、プロバイダーとファイルを選択して **Commit Message**、**Explanation**、**Risk Analysis** を選びます。変更の説明には **Explain Changes** を使います。生成テキストは差分の確認を補助するもので、コミットやレビューに使う前に検証してください。

</div>

<div class="doc-screenshots">
  <DocScreenshot file="git-ai-explanation.jpg" caption="選択した変更に対する AI の要約を表示する Explanation タブ。" />
</div>

</div>
