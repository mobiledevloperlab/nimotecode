---
title: AI Agent Build Demo | NimoteCode Workflows
description: Watch NimoteCode AI Agent build, test, repair and commit a developer task board web app from a phone.
---

# AI エージェントが電話から開発者タスク ボードを構築する


このワークフローは、NimoteCode AI エージェントに従って、1 つの製品概要を実用的な開発者タスク ボードに変換します。 DeepSeek-v4-flash モデルを使用すると、開発者が別のモバイル アプリ間を移動する必要がなく、エージェントは作業を計画し、プロジェクトを作成して検証し、完了した変更を記録します。


<figure class="agent-demo">
  <video controls playsinline preload="metadata">
    <source src="/videos/ai-agent-demo-small.mp4" type="video/mp4">
 お使いのブラウザは埋め込みビデオをサポートしていません。

  </video>
  <figcaption>AI エージェントは、NimoteCode モバイル ワークスペースで開発者タスク ボードを構築して検証します。
</figcaption>
</figure>

## 製品概要から実行可能な計画まで


実行は、React、TypeScript、および Vite タスク ボードのリクエストから始まります。これには、編集可能なタスク、優先順位、永続的なローカル データ、開発者重視のダーク インターフェイス、および自動カバレッジが含まれます。エージェントは、ワークスペースを変更する前に、その概要を順序付けられた計画に変換し、セットアップ、実装、テスト、リリース チェックを明確なステップに分けます。


## ワークスペースでアプリケーションをビルドします


エージェントは、利用可能な Node.js 環境を確認し、Vite プロジェクトを作成し、小さなモジュールでアプリケーションを作成します。結果として得られる構造には、タスクの状態と永続性、フォームとリストのコンポーネント、進行状況のフィードバック、ダッシュボードに必要なビジュアル システムが含まれます。それぞれの変更は、ファイル、ターミナル出力、Git 状態と同じワークスペースに残ります。


## 確認、修理、納品


検証は実行の一部であり、後付けではありません。テストでインポートまたは予期の問題が明らかになった場合、エージェントは失敗を読み取り、関連するコードを調整してチェックを再度実行します。次に、実稼働ビルドを完了し、プロジェクトのドキュメントを準備し、指示に応じて完了した作業をコミットします。


## このワークフローが示す内容


- **1 つのループで計画、実行、検査を行います。** エージェントは、ファイルや端末コマンドを介して指定された結果から、テストやビルドの証拠に移行できます。

- **完全なモバイル開発画面。** エクスプローラー、エディター、ターミナル、ソース管理、および AI パネルは、同じプロジェクト コンテキストに接続されたままになります。

- **レビュー可能なままの自動化。** コマンド、変更されたファイル、テスト出力、および最終的な差分は、開発者が配信前に検査できるように表示されます。


> エージェントは複数ステップのビルドを高速化できますが、エンジニアリング上の判断に代わるものではありません。特にワークスペースが実稼働アクセス権を持っている場合は、計画、コマンド、テスト証拠、Git diff を確認してください。


<div class="product-card-grid">
  <div class="product-card"><strong><a href="/use-cases/mobile-workspace-demo">モバイル ワークスペースのデモ
</a></strong><span>ローカルおよび SSH ワークフロー (検査、編集、検証、レビュー) をサイト上で直接再生して確認します。
</span></div>
  <div class="product-card"><strong><a href="/use-cases/terminal-ai-tools">ターミナル AI ツール
</a></strong><span>RCodex、Claude、Kimi およびその他の AI コーディング ツールをアクティブなワークスペースで直接実行します。
</span></div>
</div>

<p class="seo-cta-actions">
  <a href="/download?utm_source=workflows&utm_medium=website&utm_campaign=ai_agent_build_demo" class="home-page-btn primary">NimoteCode を試す
</a>
  <a href="/docs/ai" class="home-page-btn secondary">AI エージェント ガイドを読む</a>
</p>
