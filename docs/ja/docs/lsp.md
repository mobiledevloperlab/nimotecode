---
title: 言語サービス（LSP） | NimoteCode
description: "言語サービス（LSP）の設定、操作手順、画面の説明。"
---

# 言語サービス（LSP）

<div class="doc-section">
<div class="doc-section__copy">

## 言語サーバーの設定を確認する

ソースファイルを開いてから LSP パネルを開きます。**LSP Setup** と、その言語に対応するサーバーを確認してください。例では Python 用の pyright-langserver がインストール済みで、報告されたエラーと警告はゼロです。インストール済みでも、すべての依存関係やコードアクションが利用できるとは限りません。

</div>

<div class="doc-screenshots">
  <DocScreenshot file="lsp-python-status.png" caption="Python 言語サーバーの設定と Problems、Code Actions の各領域。" />
</div>

</div>

## 診断とコードアクションを使う

**Problems** を展開して診断項目を選ぶと、対応するソース位置が開きます。**Code Actions** でカーソル位置に対して提供される操作を確認します。利用できる操作は言語サーバーによって異なります。操作を適用したらファイルを保存し、関連するプロジェクトのチェックを再実行してください。LSP には Pro の利用権限が必要です。
