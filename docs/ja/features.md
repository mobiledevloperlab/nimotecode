---
title: NimoteCode の機能 | モバイル開発ワークスペース
description: プロジェクトをスマートフォンで開き、開発用コンピューターに接続。編集、コマンド実行、Git の変更確認を同じワークスペースで行う方法と、SSH、Docker、Pro の利用条件を紹介します。
---

<ProductFeatures>

<div class="product-reference">

<details>
<summary>2.5.0 の新機能</summary>

NimoteCode 2.5.0 では、[個人用 Tailscale でペアリング済みの PC に接続](/ja/docs/ssh#paired-computers)、[tmux で SSH ターミナルを再開](/ja/docs/terminal#persistent-ssh-terminal)、[SSH で NimoteHost をセットアップ](/ja/docs/host/getting-started#install-over-ssh)できます。

[2.5.0 の新機能](/ja/releases/2.5.0)

</details>

<details>
<summary>検索・言語サービス・デバッグ</summary>

- [プロジェクト検索](/ja/docs/search)：SSH ワークスペースのファイル内容を検索。大文字小文字の区別と正規表現に対応します。
- [言語サービス](/ja/docs/lsp)：ワークスペースの実行先に対応言語サーバーを導入・設定し、診断、シンボル移動、コードアクションを利用します。
- [デバッグ](/ja/docs/debug)：設定済みのデバッグアダプターでブレークポイント、コールスタック、変数、ウォッチ式を確認します。

</details>

<details>
<summary>GitHub・タスク・プラグイン</summary>

- [GitHub](/ja/docs/source-control)：端末、Local Linux、SSH ホストへクローンし、アカウント権限に応じて Issue、PR、レビュー、チェック、ワークフローを操作します。
- [タスク](/ja/docs/tasks)：名前付きコマンドを保存し、SSH または Local Linux のプロジェクトディレクトリで実行します。
- [プラグイン](/ja/docs/plugins)：フォーム、ワークスペースデータ、ファイル操作、HTTP リクエスト、スクリプトを使うパネルを作成します。ファイル・ネットワーク・実行操作には確認が必要です。

</details>

<details>
<summary>モデルプロバイダーと外部ツール</summary>

- [モデル設定](/ja/docs/configuration)：プロバイダー、モデル、認証情報を設定します。プロバイダーのアカウントとモデル利用料は NimoteCode とは別です。
- [外部 ACP Agent](/ja/docs/ai)：対応する環境で個別設定した Agent を実行します。認証情報、ツール権限、実行ポリシーは各ランタイムが管理します。
- [MCP サーバー](/ja/docs/ai)：stdio または Streamable HTTP でツールを接続します。stdio サーバーの起動と MCP ツールの呼び出しには承認が必要です。

</details>

<details>
<summary>機能の利用権限</summary>

利用できる機能はアプリで確認できます。Git の書き込み、複数ターミナル、Agent 実行、Docker、LSP、デバッグは、対象の Pro、トライアル、Early Access の利用権限に応じて提供されます。

利用権限と復元は[アカウントとサブスクリプション](/ja/docs/account-subscription)、現在の条件は [Early Access](/ja/pro) を参照してください。

</details>

</div>

</ProductFeatures>
