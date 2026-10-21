---
title: Mobile Terminal | NimoteCode SSH Workspace
description: Run workspace commands in NimoteCode, open project URLs in in-app preview, search terminal output, use quick commands and keep advanced multi-terminal contexts with Pro.
---

# モバイル端末


ターミナルは、NimoteCode ワークスペースの検証レイヤーです。編集している場所でコマンドを実行し、出力を検索し、結果をファイルと次の決定に結び付けたままにします。


<ImagePlaceholder image-key="terminal" alt="NimoteCode mobile terminal">
<strong>Image プレースホルダー — アクティブなワークスペースのターミナル</strong>
<span>実際の SSH プロジェクトのターミナル出力、検索、および近くのエディター タブのスクリーンショットに置き換えます。</span>
</ImagePlaceholder>

## コアターミナルのワークフロー


- アクティブなローカルまたは SSH ワークスペースでコマンドを実行します。

- ストリーミング出力を検査し、長いログでエラーまたは警告を検索します。

- 既知のルーチンに対してクイック コマンドまたはカスタム コマンドを使用します。

- ローカルまたはリモートの Web プロジェクトによって発行された URL をアプリ内ブラウザのプレビューで直接開きます。 AI 応答内の Web リンクとツール出力では、同じアクションが使用されます。

- 解釈が役立つ場合は、関連する出力を[AIチャットおよびエージェント](/docs/ai)に送信します。

- 再接続後にリモート作業を再開し、続行する前にホストとディレクトリを確認します。ターミナル入力は、モバイル作業中にキーボード テキストの作成、キー リピート、物理キーボード ショートカットを保持するように設計されています。


SSH ワークスペースの場合、[ターミナル] メニューでリモート アカウントのログイン環境を更新できます。ターミナル、タスク、デバッグ、言語サーバー、Git、外部 CLI、および ACP エージェントは、その  、ロケール、SSH エージェント構成を含む、同じ解決されたシェル環境を使用します。


## 複数のシェルが重要な場合


Pro は、ある端末がログを追跡している間に別の端末がテストや展開コマンドを実行するなど、並列コンテキスト向けの高度なマルチ端末ワークフローを提供します。リスクの高いコマンドは明示的に保ち、復元された端末をリモート状態が変化していない証拠として扱うことは避けてください。


<ImagePlaceholder image-key="terminalMenu" alt="Terminal menu on NimoteCode for phone">
<strong>端末アクションとセッション制御</strong>
</ImagePlaceholder>

次へ: [SSHワーク​​スペース](/docs/ssh) · [タスク](/docs/tasks) · [端末診断](/docs/terminal)
