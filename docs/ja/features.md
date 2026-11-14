---
title: NimoteCode の機能 | モバイル開発ワークスペース
description: プロジェクトをスマートフォンで開き、開発用コンピューターに接続。編集、コマンド実行、Git の変更確認を同じワークスペースで行う方法と、SSH、Docker、Pro の利用条件を紹介します。
---

# NimoteCode の機能

スマートフォンやタブレットでコード編集、コマンド実行、Git レビュー、AI との作業を。IDE・ターミナル・AI を切り替えても、プロジェクトと Explorer の状態を維持します。

<WorkspaceModes />

## インターフェース

<div class="feature-showcase" role="region" tabindex="0" aria-label="NimoteCode feature highlights"><div class="feature-showcase__track"><figure class="feature-showcase__item"><img src="/screenshots/p1.png" alt="Local files, SSH, code editing and AI Agent in NimoteCode" width="1604" height="901" loading="eager"><figcaption>ワークスペース、編集、AI エージェント</figcaption></figure><figure class="feature-showcase__item"><img src="/screenshots/p2.png" alt="SSH terminal, Source Control and code diagnostics in NimoteCode" width="1597" height="896" loading="lazy"><figcaption>ターミナル、Git、診断</figcaption></figure><figure class="feature-showcase__item"><img src="/screenshots/p3.png" alt="NimoteCode debugging, remote workspace sync, and smart caching" width="1598" height="893" loading="lazy"><figcaption>デバッグとワークスペースの同期</figcaption></figure></div></div>

## ワークスペースを選ぶ

| ワークスペース | 用途 | 境界 |
| --- | --- | --- |
| **ローカル** | OS がアクセスを許可したフォルダーを開き、端末上のファイルと Git を扱います。 | フォルダーだけでは Linux シェル、コンパイラー、実行環境は提供されません。 |
| **SSH** | リモートホスト上にあるプロジェクトとツールを使います。 | コマンドは選択したリモートアカウントの権限で実行されます。 |
| **Android Local Linux** | 対応 Android 端末で root 不要の Ubuntu ユーザー空間を使います。 | Android 専用です。ツールチェーンと依存関係は別途インストールします。 |
| **デモ** | 接続前にサンプルファイルと UI を確認します。 | デプロイ可能な開発環境ではありません。 |

[ローカル／SSH ワークスペース](/ja/docs/ssh)と[Android Local Linux](/ja/docs/local-linux)で設定と互換性を確認してください。

## 開発・確認・レビュー

| 機能 | できること |
| --- | --- |
| **[コードエディター](/ja/docs/editor)** | ローカル／リモートファイル、タブと分割表示、編集、Markdown と静的 HTML プレビュー。 |
| **[ターミナル](/ja/docs/terminal)** | SSH／Local Linux でのコマンド実行、出力検索、セッション管理、リモートログイン環境の更新。 |
| **[ソース管理](/ja/docs/source-control)** | 状態、ステージ、差分、ブランチ、履歴の確認と、利用可能な場合の通常の Git 書き込み操作。 |
| **[GitHub ワークフロー](/ja/docs/source-control)** | リポジトリの参照と、端末・Local Linux・SSH へのクローン、Issue、PR、レビュー、チェック、ワークフロー、成果物の操作。 |
| **[タスク](/ja/docs/tasks)** | 接続済み SSH／Local Linux のプロジェクトディレクトリで名前付きコマンドを実行。 |
| **[ワークスペース検索](/ja/docs/search)** | SSH ワークスペース内を大文字小文字・正規表現指定で検索。 |

ビルド、テスト、Git 操作の実際の結果はプロジェクトに依存します。ファイルを変更または公開する前に、作業ディレクトリ、コマンド、差分、リモートを確認してください。

## 明示的なコンテキストで AI を使う

AI は任意であり、自分のモデルプロバイダーを設定します。OpenAI、Anthropic、Google Gemini、xAI Grok、DeepSeek、Alibaba Qwen、OpenRouter、Groq、SiliconFlow、StepFun、Zhipu AI/GLM、Moonshot AI、Ollama、OpenAI 互換エンドポイントのテンプレートがあります。アカウント、ネットワーク、モデルの可用性、利用料金はプロバイダー側のものです。

- **[AI Chat](/ja/docs/ai)** は選択したワークスペースまたはテキストのコンテキストで応答します。
- **Nimote Agent** は複数手順の作業を計画・実行します。Confirm モードではツール実行前に計画の承認を求めます。
- **外部 ACP Agent** は SSH または Local Linux 上の互換ランタイムを意図的に有効化して使用します。
- **MCP サーバー** はローカル／リモートのコマンドプロセスまたは HTTP サーバーとして設定できます。信頼できるサーバーだけを追加してください。

AI の出力は支援であり、正確性、安全性、実行成功を保証するものではありません。コード、コマンド、説明は使用前に確認してください。

## プロジェクトに合わせて拡張する

| 機能 | 内容 |
| --- | --- |
| **[カスタムプラグイン](/ja/docs/plugins)** | ワークスペースデータ、フォーム、ファイル操作、HTTP、確認付きコマンド／スクリプトを組み合わせたパネル。 |
| **[言語サービス](/ja/docs/lsp)** | 互換言語サーバーが対象に設定されている場合の診断とコードアクション。 |
| **[デバッグ](/ja/docs/debug)** | 設定済みデバッグアダプターによるブレークポイント、変数、スタック、出力の確認。 |
| **[同期とキャッシュ](/ja/docs/sync-cache)** | パスを確認してローカルとリモート間でプロジェクト内容を転送。 |

プラグインや言語／デバッグツールは、依存関係の静かなインストールやホスト権限の追加を行いません。スクリプトは選択した SSH／Local Linux アカウントの権限で動作し、ファイル、ネットワーク、実行操作には確認が必要です。

## 利用可否

機能はプラットフォーム、アプリバージョン、アカウント権限、配布チャネル、ストア地域によって異なります。現在のアカウントで利用できる状態はアプリ内で確認できます。Pro として提供される機能でも、リモートホスト上のアカウント権限自体は変わりません。詳細は[アカウントとサブスクリプション](/ja/docs/account-subscription)を参照してください。

## 2.3.0 のワークスペースと Docker

ワークスペースでは IDE、ターミナル、AI の各モードを切り替えられます。同じプロジェクトと Explorer の状態を共有します。

SSH ホストの Docker パネルではコンテナ、イメージ、ボリューム、ネットワーク、Compose を確認できます。Debian bookworm-slim の画像は一覧と詳細画面を示しています。Dev Containers はプロジェクトの devcontainer.json から構成します。

<div class="doc-screenshots">
  <DocScreenshot file="docker-images.png" caption="Docker image list in the Light theme, including Debian bookworm-slim." />
  <DocScreenshot file="docker-image-detail.png" caption="Debian bookworm-slim image details in the Light theme." />
</div>
