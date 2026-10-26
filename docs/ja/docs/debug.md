---
title: デバッグ | NimoteCode
description: "デバッグの設定、操作手順、画面の説明。"
---

# デバッグ

<div class="doc-section">
<div class="doc-section__copy">

## デバッグセッションを準備する

対象ホストに互換性のあるデバッグアダプターとプロジェクトの起動設定が必要です。準備ができたら Debug パネルを開き、**Start Debug** を選択します。デバッグには Pro の利用権限が必要です。

</div>

<div class="doc-screenshots">
  <DocScreenshot file="debugger-standby.png" caption="セッションが開始されておらず、変数やコールスタックも読み込まれていない Debug パネル。" />
</div>

</div>

## 一時停止したプログラムを調べる

ブレークポイントを設定し、構成済みのセッションを実行します。停止したら **Variables**、**Watch**、**Call Stack** を確認します。セッションの操作ボタンで実行を再開したり、ステップ実行したりできます。開始できない場合は、ブレークポイントを変更する前にホスト上のアダプターと起動コマンドを確認してください。
