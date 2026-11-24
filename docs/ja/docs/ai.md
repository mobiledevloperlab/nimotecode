---
title: AI Chat と Agent | NimoteCode
description: "AI Chat と Agentの設定、操作手順、画面の説明。"
---

# AI Chat と Agent

無料版では UTC の 1 日につき内蔵 Agent タスクを 3 回実行できます。Pro は内蔵タスクが無制限で、外部 ACP Agent に対応します。モデル提供元の制限と料金が適用されます。

<div class="doc-section">
<div class="doc-section__copy">

## 会話を始める

AI パネルで設定済みのモデルを選び、質問を入力します。プロジェクトについて質問する場合は、先に対応するワークスペースを開きます。プロバイダーの認証情報とモデルへのアクセスは[設定ガイド](/ja/docs/configuration)で別途設定してください。

</div>

## MCP と外部 ACP Agent

外部 Agent は、対応する ACP ランタイムを対象環境に設定して意図的に有効化した場合のみ実行されます。資格情報、ネットワーク、ツール方針は NimoteCode が提供するものではありません。MCP は stdio（選択したローカル／SSH／Local Linux のコマンド）または Streamable HTTP を使えます。信頼できるサーバーだけを追加し、起動と各ツール呼び出しを確認してください。

<div class="doc-screenshots">
  <DocScreenshot file="ai-chat-welcome.png" caption="SSH プロジェクトに接続した AI ワークスペース。新しいタスクの開始前。" />
</div>

</div>

<div class="doc-section">
<div class="doc-section__copy">

## Agent を選ぶ

選択画面には Nimote Agent と外部 Agent があります。外部 Agent は SSH ホストで実行されるため、互換性のある ACP ランタイムをそのホストにインストールして設定する必要があります。ランタイムが提供するセッションコマンドは、スラッシュコマンド補完で利用できます。

</div>

<div class="doc-screenshots">
  <DocScreenshot file="ai-agent-selector.jpg" caption="モデル選択：deepseek-flash を選択、deepseek-v4-pro も表示。" />
</div>

</div>

2.5.0 では内蔵 Codex の応答、キャンセル、ツール呼び出しが改善されています。中断された Agent の履歴を復元しても、キャンセル済みのターンが保持されます。

2.5.0 では、レビューカードにスナップショットがないと表示された場合、そのカードの Git 操作から現在の差分を確認できます。スナップショット付きのファイルはカードから直接開けます。

## 計画を承認して実行を確認する

**Confirm** モードでは提案された計画を確認し、**Approve this run** でツール実行を許可します。タイムラインには現在の手順、完了したツール呼び出し、出力が表示されます。実行中に追加の指示を送ったり、質問に回答したりできます。手順の上限に達したら、結果を確認してから続行してください。

<div class="doc-screenshots">
  <DocScreenshot file="ai-plan-approval.jpg" caption="Confirm モードで承認を待つプロジェクト調査計画。" />
  <DocScreenshot file="ai-plan-running.jpg" caption="Agent のタスク結果：Python テストの追加、成功したテスト出力、Git 差分。" />
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
  <DocScreenshot file="ai-analysis-caveats.jpg" caption="確認した Python 実装、テスト範囲、未検証の仮定に関する AI の注意点。" />
</div>


## 実行中の Agent への追加指示

対応する ACP Agent にはタスクの実行中に追加指示を送れます。利用可否は Agent ランタイムによります。

## NimoteCode 2.4.0

**Agent 連携。** 対応する Codex、Claude、OpenCode の構造化対話、ツール、承認、コマンド、モデル設定、実行中の追加指示に対応。実行ポリシーは Host の機能に依存し、機密性の高い操作は承認が必要な場合があります。

**タスク受信箱と GitHub Issue。** 状態、検証の証拠、差分を確認し、タスクを続行・アーカイブできます。選択した公開ポリシーで Issue を依頼できます。Host のバージョンと設定に依存します。

[2.4.0 →](/ja/releases/2.4.0)

[Host モード →](/ja/docs/host) — NimoteHost の導入、SSH 接続、ターミナルと Agent の使い方。
