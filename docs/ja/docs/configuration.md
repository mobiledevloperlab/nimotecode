---
title: Configuration Guide | NimoteCode
description: Configure NimoteCode for reliable mobile work with practical AI provider, SSH workspace and remote task setup checklists.
---

# 構成ガイド


実際に行う作業に合わせて NimoteCode をセットアップします。テスト済みの小規模な構成は、圧力がかかると認識できないプロファイルの大規模なカタログよりも安全で便利です。


## AI: プライマリ プロファイルとバックアップ プロファイルを保持します


使用する予定のプロバイダーエンドポイント、認証情報、およびモデルを追加します。エージェントに頼る前に、AI チャットで確認してください。プライマリ プロファイルとテスト済みのフォールバックは、信頼性とコストのバランスをとるのに役立ちます。正確なコードタスクにはより低いランダム性を選択し、応答性が向上する場合はストリーミングを使用し、コンテキストの動作を意図的に設定します。


<ImagePlaceholder image-key="aiModelConfig" alt="AI model configuration on NimoteCode for phone">
  <strong>AI model configuration</strong>
</ImagePlaceholder>

<ImagePlaceholder image-key="aiEditConfig" alt="AI edit configuration on NimoteCode for phone">
  <strong>AI editing configuration</strong>
</ImagePlaceholder>

## SSH: 環境に名前を付け、境界を設定します


認識可能な名前、ホスト、ポート、ユーザー、および認証方法を使用して、環境ごとに 1 つのプロファイルを作成します。接続後、ワークスペースのルートを確認します。機密性の高いホストにはキーベースのアクセスと最小権限のアカウントを優先します。見慣れたプロファイルが依然として安全な環境を示しているとは決して考えないでください。


## タスク: 推測ではなく既知の手順を記録する


ビルド/テスト、フォーマット/lint、ヘルスチェック、ログ検査のための明確なタスクを作成します。これらを目的別にグループ化し、再起動、展開、データ変更のコマンドを間違いなく実行できるようにします。タスクは SSH ワークフローを通じて実行されるため、実行前にアクセスと現在のディレクトリを検証してください。


## すぐに使えるチェックリスト


1. AI チャットは、目的のプロファイルから応答を返します。

2. SSH プロファイルは、目的のホストとプロジェクト ルートに到達します。

3. 1 つの低リスク端末コマンドがワークスペースで機能します。

4. よく理解されている 1 つのタスクが正常に実行されます。

5. Pro Git ワークフローを使用する場合、ソース管理は何かを書き込む前にリポジトリの状態を読み取ることができます。


[設定](/docs/settings) · [AIチャットとエージェント](/docs/ai) · [セキュリティと安全](/docs/security)に進みます。
