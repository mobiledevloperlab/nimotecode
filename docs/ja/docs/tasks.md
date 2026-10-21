---
title: Remote Tasks | NimoteCode
description: Save, group and run repeatable SSH terminal commands in NimoteCode Tasks.
---

# リモートタスク


タスクは、既知のリモート コマンド プロシージャを名前付きの再利用可能なアクションに変換します。これは、小さな画面で再入力する必要のないビルド チェック、テスト、フォーマット、ヘルス チェック、ログ ルーチンに役立ちます。


<ImagePlaceholder image-key="tasksPage" alt="Tasks page on NimoteCode for phone">
<strong>再利用可能なリモート タスク カタログ</strong>
</ImagePlaceholder>

## 成果に基づいたタスクカタログを構築する


- グループ関連の **ビルドとテスト** コマンド。

- **lint および format** ルーチンをデプロイ作業から分離してください。

- **再起動、ヘルスチェック、およびログ**のタスクに名前を付けて、その効果が明らかになるようにします。

-  SSH 端末コンテキストでタスクを実行し、その出力とステータスに従います。


## タスクを安全に使用する


タスクは SSH ワークフローを通じて実行されるため、タスク名とコマンドでアクティブな環境を明確にします。読み取り専用または低リスクのルーチンから始めて、前提条件を文書化し、あいまいなラベルの背後に破壊的なアクションを隠すことを避けます。タスクの作成と実行は、別の Pro レベルなしで利用できます。


関連: [SSHワーク​​スペース](/docs/ssh) · [ターミナル](/docs/terminal) · [構成](/docs/configuration)
