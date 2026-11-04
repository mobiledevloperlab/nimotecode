---
title: NimoteCode Features | Mobile AI Development Workspace
description: "Explore NimoteCode’s mobile development capabilities: Android Local Linux, flexible local and SSH workspaces, split editing, live HTML and media preview, terminal, Git, AI Chat and external agents, LSP, debugging, tasks and sync/cache."
---

# NimoteCodeの機能

スマートフォンやタブレットでプロジェクトを進めましょう。コード編集、ツールのある環境での検証、Git 差分の確認を一つのワークスペースで行えます。まずはデモやローカルフォルダーから。AI の設定は任意です。

<div class="guide-actions">

[最初のワークスペースを開く](/ja/docs/quick-start) · [実践チュートリアルと参考資料](/ja/resources/)

</div>

## NimoteCode でできること

<div class="guide-card-grid">
<a class="guide-card" href="/ja/docs/editor"><strong>編集から検証、レビューまで</strong><span>アプリを切り替えず、コードを編集し、ターミナルで検証して Git 差分を確認。</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
<a class="guide-card" href="/ja/docs/ssh"><strong>既存の開発環境を活用</strong><span>SSH でホストに接続し、既存のプロジェクトとツールを使用。</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
<a class="guide-card" href="/ja/docs/local-linux"><strong>Android で Linux を実行</strong><span>対応端末で root 不要の Ubuntu を利用し、必要な開発ツールを追加。</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
<a class="guide-card" href="/ja/docs/ai"><strong>AI の使い方を選択</strong><span>Chat でコードを理解し、Agent で複数段階の作業を進め、実行中も指示を追加。</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
<a class="guide-card" href="/ja/docs/source-control"><strong>モバイルで GitHub を活用</strong><span>リポジトリの検索・クローンから Issue、Pull Request、チェックの確認まで。</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
<a class="guide-card" href="/ja/docs/plugins"><strong>プロジェクトに合わせて拡張</strong><span>プラグインで独自のパネル、フォーム、スクリプトタスクを追加。</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
</div>

ローカル・SSH ワークスペース、編集、基本ターミナル、Git レビューは無料で始められます。Agent、プラグイン、GitHub 連携、Local Linux は Early Access 対象です。AI は独自の Provider が必要で、モデル料金は別途発生します。Local Linux は対応する Android 8+ ARM64 / x86_64 端末限定です。ローカルフォルダーを開くだけでは Linux 実行環境は提供されません。

<div class="feature-showcase" role="region" tabindex="0" aria-label="NimoteCode feature highlights">
  <div class="feature-showcase__track">
<figure class="feature-showcase__item"><img src="/screenshots/p1.png" alt="Local files, SSH, code editing and AI Agent in NimoteCode" width="1604" height="901" loading="eager"><figcaption>ワークスペース、編集、AI エージェント</figcaption></figure>
<figure class="feature-showcase__item"><img src="/screenshots/p2.png" alt="SSH terminal, Source Control and code diagnostics in NimoteCode" width="1597" height="896" loading="lazy"><figcaption>ターミナル、Git、診断</figcaption></figure>
<figure class="feature-showcase__item"><img src="/screenshots/p3.png" alt="NimoteCode debugging, remote workspace sync, and smart caching" width="1598" height="893" loading="lazy"><figcaption>デバッグとワークスペースの同期</figcaption></figure>
<figure class="feature-showcase__item" aria-hidden="true"><img src="/screenshots/p1.png" alt="" width="1604" height="901" loading="lazy"><figcaption>ワークスペース、編集、AI エージェント</figcaption></figure>
<figure class="feature-showcase__item" aria-hidden="true"><img src="/screenshots/p2.png" alt="" width="1597" height="896" loading="lazy"><figcaption>ターミナル、Git、診断</figcaption></figure>
<figure class="feature-showcase__item" aria-hidden="true"><img src="/screenshots/p3.png" alt="" width="1598" height="893" loading="lazy"><figcaption>デバッグとワークスペースの同期</figcaption></figure>
  </div>
</div>

## すべてが無料で手に入る


無料利用枠はプレビューではなく完全なワークスペースです。 **Pro** とマークされていない限り、以下のすべては Pro サブスクリプションなしで動作します。


|特集 |それがあなたに与えるもの |アクセス |
| --- | --- | --- |
| **[ローカルと SSH ワークスペース](/ja/docs/ssh)** | ローカルプロジェクトや保存済み SSH ワークスペースを開きます。 | 無料 |
| **[コードエディタ](/ja/docs/editor)** |タブまたは 2 つの独立した分割ペインで作業します。アプリを離れることなく、保存、クリップボードの使用、元に戻す/やり直し、カーソル コンテキストの追跡、画像やサポートされているオーディオ/ビデオの検査を行うことができます。 |無料 |
| **[ウェブとメディアのプレビュー](/ja/docs/editor)** |アプリ内でローカルまたはリモートの Web プロジェクトを開き、ワークスペース CSS、JavaScript、画像アセットを使用して現在の HTML コンテンツ (未保存の変更を含む) をプレビューしたり、ターミナル、AI 応答、ツール出力からリンクを開いたりできます。 |無料 |
| **[ターミナルと SSH 環境](/ja/docs/terminal)** |アクティブなワークスペースでコマンドを実行し、出力を検索し、ショートカットを使用し、確実に再接続します。 SSH ワークスペースはアカウントの通常のシェル環境をロードするため、PATH、ロケール、SSH エージェント、およびカスタム変数をリモート ツールで一貫して利用できます。 |無料 |
| **[Git レビュー](/ja/docs/source-control)** |リポジトリのステータス、差分、ブランチ、履歴を検査します。 Android Local Linux では、Git は Linux ワークスペース内で動作するため、ステータスと履歴はそのファイルと一致します。 |無料 |
| **[AI チャット](/ja/docs/ai)** |コードを説明し、エラー出力を検査し、現在のファイル、ワークスペース、最近のタスク、エージェント コンテキストを使用してタスクを計画または続行します。 |無料 |
| **[タスク](/ja/docs/tasks)** |繰り返し実行されるワークスペース コマンドを保存し、グループに整理して、プロジェクトが存在する場所で直接実行します。 |無料 |

## プロの機能


バージョン 1.1.8 では、**早期アクセス プロ** により、可用性が拡大するにつれて以下のワークフローが開きます。 Google Play または App Store で、アカウントと地域に表示されるオファーと価格を確認してください。


|特集 |それがあなたに与えるもの |アクセス |
| --- | --- | --- |
| **[AI エージェントと外部 ACP エージェント](/ja/docs/ai)** |ファイル、ターミナル、Git ツール間で制御された複数ステップのワークフローを実行します。 SSH ワークスペースでは、互換性のある ACP ランタイム (構成されている場合は Claude Code または Codex CLI など) を選択し、権限と進行状況を 1 つのタイムラインで確認し、タッチ入力またはキーボード入力による `/` コマンドを使用します。 |早期アクセス プロ |
| **[GitHub 連携](/ja/docs/source-control)** | リポジトリの閲覧・クローン、Issue やプルリクエストでの共同作業。 | Early Access Pro |
| **[Android Local Linux](/ja/docs/local-linux)** | 対応 Android 端末で root 不要の Ubuntu を利用。 | Early Access Pro |
| **[Git 書き込み](/ja/docs/source-control)** |コミット、プッシュ、スタッシュに加えて、ブランチ/チェックアウト/マージのアクション - 行動する前にレビューが必要です。 |早期アクセス プロ |
| **[リモート検索](/ja/docs/search)** |リモート ワークスペース全体のグローバル コンテンツ検索。 |早期アクセス プロ |
| **[マルチターミナル](/ja/docs/terminal)** |ログ、テスト、サービス、展開のための並列セッションを維持します。 |早期アクセス プロ |
| **[LSP](/ja/docs/lsp)** |リモート言語サーバー診断、コードアクション、およびナビゲーションを構成しました。 |早期アクセス プロ |
| **[デバッガー](/ja/docs/debug)** |構成されたデバッグ アダプターを介したブレークポイントとランタイム検査。 |早期アクセス プロ |
| **[同期 / キャッシュ](/ja/docs/sync-cache)** |明示的な指示と履歴を使用して、ローカル ワークスペースとリモート ワークスペース間でプロジェクト コンテンツを移動します。 |早期アクセス プロ |

## 最近ワークスペースに追加されました

- **[カスタマイズ可能なワークスペース。](/ja/docs/plugins)** Plugin Center で機能を管理し、パネル、フォーム、ワークフロー、成果物ビュー、ローカルまたは SSH のスクリプトジョブ用のカスタムプラグインを作成できます。インストールや更新の前に権限変更を確認できます。
- **[継続的な Agent コラボレーション。](/ja/docs/ai)** 実行中の Agent にフォローアップ指示を追加し、対話的な質問に回答できます。再構築されたコンテキスト、履歴、プロンプト編集、タイムライン表示により、長い作業も追跡しやすくなります。
- **[より直接的な Git、ターミナル、接続。](/ja/docs/source-control)** Git ヘッダーからブランチを検索、作成、チェックアウトできます。ターミナル出力を AI に送信して解釈を求めることもでき、SSH ワークスペースは SOCKS5 と HTTP CONNECT プロキシに対応します。


- **[柔軟なワークスペース ディレクトリ。](/ja/docs/ssh)** ローカル プロジェクトと SSH プロジェクトは別のディレクトリに切り替えて、すぐに戻るために最近の場所を保持できます。

- **[Android Local Linux の信頼性。](/ja/docs/local-linux)** Ubuntu 環境では、ファイル アクセスの境界がより明確になり、セットアップ、Git、およびタスク ファイルの処理の信頼性が向上しました。これらの改善は Android にのみ適用されます。

- **[より完全なプレビュー ループ。](/ja/docs/editor)** 分割編集、ライブ HTML スナップショット、組み込みメディア プレビュー、共有リンクを開くことで、ワークスペースを離れる前に結果を確認することが容易になります。

- **[環境に適合するエージェント ワークフロー。](/ja/docs/ai)** 外部 ACP ランタイム、スラッシュ コマンド補完、共有 SSH ログイン環境処理、および安全な環境診断により、ターミナル、タスク、デバッグ、言語サーバー、Git、およびエージェントの連携が維持されます。


## 機能の実用的な使用方法


1.  [SSH ワークスペース](/docs/ssh) 経由で接続するか、ローカル プロジェクトを開くか、サポートされているデバイスで [Android Local Linux](/docs/local-linux) を使用します。

2. [エディタ](/docs/editor)でファイルを見つけて編集します。

3. [ターミナル](/docs/terminal)で確認します。必要に応じて、出力またはリモート コンテンツを検索します。

4. [AI チャットとエージェント](/docs/ai) にエラーの説明または変更の計画を依頼します。

5. [ソース管理](/docs/source-control)を使用して結果を確認します。 Pro は、配信ステップでゲートされた Git 書き込みアクションが必要な場合に必要です。


> 機能は、意図的に権限と環境を認識します。たとえば、LSP とデバッグは、リモート ホスト上にセットアップされている言語サーバーまたはデバッグ アダプターに依存するため、AI 出力は機密性の高いシステムで使用する前に確認する必要があります。


## SSHワークフローを探索する


これらの機能が SSH セッションにどのように適合するかを評価している場合は、[Android SSH クライアント](/android-ssh-client) ワークフローを参照するか、[モバイル IDE ガイド](/blog/best-ssh-clients) を読むか、完全なリモート開発ループについては [SSH IDE の概要](/ssh-ide) を開いてください。

画面と操作手順は[画面と操作の索引](/ja/docs/screenshot-guide)を参照してください。
