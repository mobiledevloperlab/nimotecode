---
title: Remote Debugging | NimoteCode Pro
description: Use configured remote debug-adapter workflows in NimoteCode Pro for breakpoints, execution controls, call stacks, variables, watch expressions and output.
---

# リモートデバッグ


 [デバッグ] パネルは、モバイル ワークスペースに構造化されたランタイムの可視性を提供します。構成されたセッションを開始または制御し、一時停止ポイントを検査し、証拠をコードと端末に接続します。デバッグは **Pro** ワークフローです。


<ImagePlaceholder image-key="debugging" alt="NimoteCode debugging workspace">
<strong>Image プレースホルダー — 一時停止したデバッグ セッションを検査する</strong>
<span>ブレークポイント、コールスタック、変数、および対応するソース行を示すスクリーンショットに置き換えます。</span>
</ImagePlaceholder>

## 設定されたセッションによって公開される内容


- 開始、一時停止、継続、ステップ、および停止のコントロール。

- ブレークポイントと実行位置。

- スレッドとコールスタックのナビゲーション。

- 変数、スコープおよび監視式。

- 式の評価とデバッグ出力。


## 始める前に


デバッグは、言語、プロジェクト起動構成、およびリモートホスト上の互換性のあるデバッグアダプタによって異なります。インシデント中にモバイル UI に依存する前に、これらの前提条件を確認してください。最初のパスを速くするには、[ターミナル](/docs/terminal) と [LSP](/docs/lsp) を使用して質問を絞り込みます。
