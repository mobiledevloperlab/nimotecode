---
title: Android Local Linux Architecture | NimoteCode
description: Learn how Android, PRoot, Ubuntu, and a loopback SSH service form the NimoteCode Local Linux workspace architecture.
---

# Android ローカル Linux アーキテクチャ


ローカル Linux には 4 つの境界があります。Android はアプリケーションのストレージとライフサイクルを所有します。 PRoot は Linux ユーザー空間を提供します。 Ubuntu はルート ファイルシステムと APT パッケージを提供します。 NimoteCode は、ローカル SSH 接続を通じてワークスペースを開きます。


## PRoot が行うことと行わないこと


PRoot はプロセスに代替ルート ディレクトリを提供し、Android ルートを付与せずに選択したファイルシステムの期待値をマップできます。これは仮想マシンではなく、すべてのカーネル レベルの動作がデスクトップ Linux と同じになるわけではありません。 ptrace、特別なマウント、特権ネットワーク、または正確な NIMOTE_0 セマンティクスに依存するツールには、ターゲット ランタイム テストが必要です。


## ローカル SSH 境界


組み込み SSH サービスは、デバイスのループバック インターフェイスでのみリッスンします。これは、ローカル Linux とエクスプローラー、エディター、ターミナル、Git、AI、タスク、LSP、およびデバッグ ワークフローを統合するために NimoteCode によって使用されます。これは外部に公開される SSH サーバーではありません。


## これが重要な理由


このアーキテクチャは移植性があり、Android ルートを必要としませんが、Android はバックグラウンド作業を一時停止または停止できます。アプリに戻った後、ローカル Linux を再度開くか再起動し、永続性と容量がより重要な場合は、リモート ホストで長時間のタスクまたは実稼働のようなタスクを実行します。 [互換性](/docs/local-linux/compatibility)および[トラブルシューティング](/docs/local-linux/troubleshooting)を参照してください。
