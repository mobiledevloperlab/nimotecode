---
title: AI Chat と Agent | NimoteCode
description: "AI Chat と Agentの設定、操作手順、画面の説明。"
---

# AI Chat と Agent

<div class="doc-section">
<div class="doc-section__copy">

## 会話を始める

AI パネルで設定済みのモデルを選び、質問を入力します。プロジェクトについて質問する場合は、先に対応するワークスペースを開きます。プロバイダーの認証情報とモデルへのアクセスは[設定ガイド](/ja/docs/configuration)で別途設定してください。

</div>

<div class="doc-screenshots">
  <DocScreenshot file="ai-chat-welcome.png" caption="ワークスペースを開く前の AI パネル。" />
</div>

</div>

<div class="doc-section">
<div class="doc-section__copy">

## Agent を選ぶ

選択画面には Nimote Agent と外部 Agent があります。外部 Agent は SSH ホストで実行されるため、互換性のある ACP ランタイムをそのホストにインストールして設定する必要があります。ランタイムが提供するセッションコマンドは、スラッシュコマンド補完で利用できます。

</div>

<div class="doc-screenshots">
  <DocScreenshot file="ai-agent-selector.jpg" caption="Nimote Agent が選択され、外部 Agent が無効になっている選択画面。" />
</div>

</div>

## 計画を承認して実行を確認する

**Confirm** モードでは提案された計画を確認し、**Approve this run** でツール実行を許可します。タイムラインには現在の手順、完了したツール呼び出し、出力が表示されます。実行中に追加の指示を送ったり、質問に回答したりできます。手順の上限に達したら、結果を確認してから続行してください。

<div class="doc-screenshots">
  <DocScreenshot file="ai-plan-approval.jpg" caption="Confirm モードで承認を待つプロジェクト調査計画。" />
  <DocScreenshot file="ai-plan-running.jpg" caption="承認後の実行でファイルを読み込み、完了した調査手順を記録している状態。" />
</div>

## 結果を読む

次の画面は「explain this project」への一つの回答です。プロジェクトの概要、コマンド例、欠けているファイルとベンチマーク方法に関する注意事項を示します。別々の分析モードではなく、生成された回答の各部分です。利用前に、引用されたファイルやコマンドを現在のプロジェクトと照合してください。

### まずプロジェクト構成を読む

概要から主要な構成要素とその関係を把握し、参照されたファイルを現在のワークスペースと照合します。

<div class="doc-screenshots">
  <DocScreenshot file="ai-analysis-overview.jpg" caption="AI 回答内のプロジェクト概要と主な構成要素。" />
</div>

### コマンド例を確認する

同じ回答内のコマンド例を読み、現在のプロジェクトと環境に適しているか確認してから実行を判断します。

<div class="doc-screenshots">
  <DocScreenshot file="ai-analysis-workflow.jpg" caption="同じ回答に含まれるプロジェクトのコマンド例。" />
</div>

### 制約と注意事項を確認する

不足しているファイル、チェックアウトの範囲、ベンチマーク手法などの制約を確認します。結論が別のバージョンや環境にも当てはまるとは限りません。

<div class="doc-screenshots">
  <DocScreenshot file="ai-analysis-caveats.jpg" caption="調査対象のチェックアウトとベンチマーク結果に関する注意事項。" />
</div>
