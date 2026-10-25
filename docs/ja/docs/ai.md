---
title: AI Chat and Agent | NimoteCode
description: Use NimoteCode AI Chat for code and error explanations, and AI Agent for controlled multi-step work with provider profiles and workspace context.
---

# AI チャットとエージェント


NimoteCode は、直接の AI ヘルプを AI 支援による実行から分離します。 **AI チャット** は、状況に応じた迅速な回答を目的としています。 **AI エージェント** は、ファイル、ターミナル、または Git ツールにわたるいくつかの慎重な手順を必要とする作業に適しています。


<ImagePlaceholder image-key="aiAssistant" alt="NimoteCode AI panel">
<strong>画像プレースホルダー — ワークスペースコンテキストによる AI 支援</strong>
<span>アクティブなファイルを説明する AI パネルのスクリーンショット、または小規模なレビュー可能な変更の計画に置き換えます。</span>
</ImagePlaceholder>

## AIチャットを使用して次の意思決定を行う


ファイルを変更する前に、チャットに、なじみのないコードの説明、端末出力の解釈、リファクタリングの概要、またはアイデアのレビューを依頼します。関連するファイルをアクティブなままにしておくと、会話に役立つワークスペース コンテキストが与えられます。最近のタスクとワークスペースのコンテキストはチャットに表示されたままですが、コンパクトなグローバル インジケーターにより、パネル間を移動するときにアクティブなエージェントの作業が表示され続けます。


## 制御されたシーケンスに AI エージェントを使用する


エージェントは、タスクでファイルの検査、計画の提案、編集、チェックの実行、結果の要約が必要な場合に適しています。実行中にフォローアップ指示を追加したり、対話的な質問に回答したりできます。再構築されたコンテキスト、履歴、プロンプト編集、タイムライン表示により長い作業を追跡しやすくなります。可用性が拡大するにつれて、Early Access Pro を通じて利用できるようになります。無料の使用量割り当ては使用しません。

## 作業が続く間も制御を維持する

実行中の Agent はバックグラウンドの約束ではなく協働です。計画、コマンド、権限要求、ファイル変更、要約出力を確認し、設定したステップ予算に達したら状態を確認してから続行するか判断してください。


## SSH ワークスペースで外部 ACP エージェントを使用する


互換性のある ACP ランタイムが SSH ホストで利用可能な場合は、組み込みエージェントと並んでそれを選択します。 NimoteCode は、同じ会話エクスペリエンスでその機能、権限リクエスト、セッション状態、実行中の進行状況を表示します。アクティブな ACP セッションによって報告される組み込みセッション アクションおよびコマンドについては、コンポーザーに `/` と入力します。ランタイムは SSH ホスト上に残ります。開始する前に、コマンドと環境がそこで設定されていることを確認してください。


<ImagePlaceholder image-key="agentRunLog" alt="AI Agent run log on NimoteCode for phone">
  <strong>Agent execution log</strong>
</ImagePlaceholder>

<ImagePlaceholder image-key="agentRunPythonBenchmark" alt="AI Agent running a Python benchmark on phone">
<strong>Agent は Python ベンチマーク </strong> を実行します
</ImagePlaceholder>

<ImagePlaceholder image-key="agentAlgorithmBenchmarkResults" alt="AI Agent benchmark results on phone">
  <strong>Agent benchmark results</strong>
</ImagePlaceholder>

## プロバイダーを意図的に構成する


プロバイダー プロファイルには、エンドポイント、API 資格情報、モデル、ストリーミング、コンテキスト動作などの接続およびモデル設定が保持されます。独自の AI プロバイダーと API キーを接続します。 NimoteCode には、モデルのアクセスやトークンがバンドルされていません。動作するプライマリ プロファイルとテスト済みのバックアップ プロファイルを保持します。実際のチェックリストについては、[構成](/docs/configuration)を参照してください。


SSH ワークスペースの場合、ターミナル、外部 ACP エージェント、タスク、デバッグ、言語サーバー、Git、および外部 CLI がリモート アカウントのログイン環境を共有します。シェル構成を変更した後、ターミナル メニューから **リモート環境の更新** を使用します。再接続するとリフレッシュされます。診断出力は API キー、トークン、シークレット、パスワードをマスクします。


> コマンドとファイルの変更を適用する前に、特にリモートまたは実稼働に隣接したワークスペースでコマンドとファイルの変更を確認してください。アプリの検証層とロック層は、制御された作業をサポートします。運用上の責任をユーザーから移すものではありません。


 [AI エージェント デモ](/use-cases/) · [セキュリティと安全](/docs/security) · [モバイル AI コーディング](/mobile-ai-coding) に進みます。
