---
title: NimoteCode Features | Mobile AI Development Workspace
description: "Explore NimoteCode’s mobile development capabilities: Android Local Linux, flexible local and SSH workspaces, split editing, live HTML and media preview, terminal, Git, AI Chat and external agents, LSP, debugging, tasks and sync/cache."
---

# NimoteCodeの機能


NimoteCode は、重要な開発ループを 1 つのモバイル ワークスペースに保持します。**エクスプローラー → エディター → プレビュー → ターミナル → Git → AI**。デバイス、SSH ホスト、または Android Local Linux を介してバンドルされた Ubuntu 上のプロジェクトから開始します。このページには、各機能の機能と、それが無料枠に含まれているか、Pro が必要かがリストされています。


> **Android Local Linux は Android 専用です。** サポートされている Android 8 以降の ARM64 および x86_64 デバイスでは、Bash、Git、SSH を備えたルートレス Ubuntu ワークスペースが提供されます。 iPhone と iPad は、代わりにローカル ワークスペースと SSH ワークスペースを使用します。


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
| **ローカル、[ローカル Linux](/docs/local-linux) および SSH ワークスペース** |サポートされている Android デバイスで、ローカル プロジェクト、保存された SSH ワークスペース、またはルートレスにバンドルされた Ubuntu を開きます。作業を移動するときに現在のディレクトリを切り替えて、最近使用したフォルダーに戻ります。ワークスペース フローからローカル Linux をインストール、開始、停止、リセット、または削除します。 |無料 |
| **コードエディタ** |タブまたは 2 つの独立した分割ペインで作業します。アプリを離れることなく、保存、クリップボードの使用、元に戻す/やり直し、カーソル コンテキストの追跡、画像やサポートされているオーディオ/ビデオの検査を行うことができます。 |無料 |
| **ウェブとメディアのプレビュー** |アプリ内でローカルまたはリモートの Web プロジェクトを開き、ワークスペース CSS、JavaScript、画像アセットを使用して現在の HTML コンテンツ (未保存の変更を含む) をプレビューしたり、ターミナル、AI 応答、ツール出力からリンクを開いたりできます。 |無料 |
| **ターミナルと SSH 環境** |アクティブなワークスペースでコマンドを実行し、出力を検索し、ショートカットを使用し、確実に再接続します。 SSH ワークスペースはアカウントの通常のシェル環境をロードするため、PATH、ロケール、SSH エージェント、およびカスタム変数をリモート ツールで一貫して利用できます。 |無料 |
| **Git レビュー** |リポジトリのステータス、差分、ブランチ、履歴を検査します。 Android Local Linux では、Git は Linux ワークスペース内で動作するため、ステータスと履歴はそのファイルと一致します。 |無料 |
| **AI チャット** |コードを説明し、エラー出力を検査し、現在のファイル、ワークスペース、最近のタスク、エージェント コンテキストを使用してタスクを計画または続行します。 |無料 |
| **タスク** |繰り返し実行されるワークスペース コマンドを保存し、グループに整理して、プロジェクトが存在する場所で直接実行します。 |無料 |

## プロの機能


バージョン 1.1.8 では、**早期アクセス プロ** により、可用性が拡大するにつれて以下のワークフローが開きます。 Google Play または App Store で、アカウントと地域に表示されるオファーと価格を確認してください。


|特集 |それがあなたに与えるもの |アクセス |
| --- | --- | --- |
| **AI エージェントと外部 ACP エージェント** |ファイル、ターミナル、Git ツール間で制御された複数ステップのワークフローを実行します。 SSH ワークスペースでは、互換性のある ACP ランタイム (構成されている場合は Claude Code または Codex CLI など) を選択し、権限と進行状況を 1 つのタイムラインで確認し、タッチ入力またはキーボード入力による `/` コマンドを使用します。 |早期アクセス プロ |
| **Git 書き込み** |コミット、プッシュ、スタッシュに加えて、ブランチ/チェックアウト/マージのアクション - 行動する前にレビューが必要です。 |早期アクセス プロ |
| **リモート検索** |リモート ワークスペース全体のグローバル コンテンツ検索。 |早期アクセス プロ |
| **マルチターミナル** |ログ、テスト、サービス、展開のための並列セッションを維持します。 |早期アクセス プロ |
| **LSP** |リモート言語サーバー診断、コードアクション、およびナビゲーションを構成しました。 |早期アクセス プロ |
| **デバッガー** |構成されたデバッグ アダプターを介したブレークポイントとランタイム検査。 |早期アクセス プロ |
| **同期 / キャッシュ** |明示的な指示と履歴を使用して、ローカル ワークスペースとリモート ワークスペース間でプロジェクト コンテンツを移動します。 |早期アクセス プロ |

## 最近ワークスペースに追加されました

- **カスタマイズ可能なワークスペース。** Plugin Center で機能を管理し、パネル、フォーム、ワークフロー、成果物ビュー、ローカルまたは SSH のスクリプトジョブ用のカスタムプラグインを作成できます。インストールや更新の前に権限変更を確認できます。
- **継続的な Agent コラボレーション。** 実行中の Agent にフォローアップ指示を追加し、対話的な質問に回答できます。再構築されたコンテキスト、履歴、プロンプト編集、タイムライン表示により、長い作業も追跡しやすくなります。
- **より直接的な Git、ターミナル、接続。** Git ヘッダーからブランチを検索、作成、チェックアウトできます。ターミナル出力を AI に送信して解釈を求めることもでき、SSH ワークスペースは SOCKS5 と HTTP CONNECT プロキシに対応します。


- **柔軟なワークスペース ディレクトリ。** ローカル プロジェクトと SSH プロジェクトは別のディレクトリに切り替えて、すぐに戻るために最近の場所を保持できます。

- **Android Local Linux の信頼性。** Ubuntu 環境では、ファイル アクセスの境界がより明確になり、セットアップ、Git、およびタスク ファイルの処理の信頼性が向上しました。これらの改善は Android にのみ適用されます。

- **より完全なプレビュー ループ。** 分割編集、ライブ HTML スナップショット、組み込みメディア プレビュー、共有リンクを開くことで、ワークスペースを離れる前に結果を確認することが容易になります。

- **環境に適合するエージェント ワークフロー。** 外部 ACP ランタイム、スラッシュ コマンド補完、共有 SSH ログイン環境処理、および安全な環境診断により、ターミナル、タスク、デバッグ、言語サーバー、Git、およびエージェントの連携が維持されます。


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
