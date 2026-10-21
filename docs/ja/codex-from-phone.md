---
title: "Use Codex From Your Phone with SSH and Git | NimoteCode"
description: "Use Codex from your phone in a practical remote development workflow: SSH into your development host, inspect project files, run checks and review Git changes with NimoteCode."
---

# 携帯電話からCodexを使用する方法


コーディング エージェントは、必要なリポジトリ、端末、テスト環境の近くにある場合に最も役立ちます。 Codex がリモート開発ホスト上にセットアップされている場合、SSH ベースのモバイル ワークスペースを使用すると、タスクをスニペットのコピーに減らすことなく、電話機からその作業を継続できます。


NimoteCode は、エディター、エクスプローラー、SSH ターミナル、Git、AI チャット、およびエージェントを組み合わせているため、同じプロジェクト コンテキストでリモート Codex セッションを回避できます。つまり、ソースを開いてコマンドを実行し、出力を検査し、実際の差分を確認します。


<ImagePlaceholder image-key="codexFromPhone" alt="Codex from phone remote workflow">
<strong>画像プレースホルダー — リモート Codex ワークフロー</strong>
<span>編集されたリモート エージェント セッション、ソース検査、および検証の出力に置き換えます。資格情報やプライベート コードは含めないでください。</span>
</ImagePlaceholder>

## 電話対応の Codex ワークフロー


1. 組織に必要な資格情報と制御を使用して、リモート開発ホストに Codex をセットアップします。

2. [SSH ワークスペース](/docs/ssh) を通じて NimoteCode でリポジトリを開きます。

3. ホストがそのように構成されている場合は、SSH 端末から Codex セッションを開始または再開します。

4. エクスプローラとエディタのタブを使用して、議論または変更されているファイルを検査します。

5. ターミナルで集中的なテストまたはチェックを実行します。

6. コミットまたはプッシュする前に、[ソース管理](/docs/source-control)でステージングされた結果とステージングされていない結果を確認してください。


NimoteCode は、Codex またはその公式セットアップの代替として提供されるものではありません。これは、周囲の開発作業を接続してレビュー可能に保つモバイル ワークスペースです。


## OpenAI互換AIをワークスペースで使用する


NimoteCode は、アプリ内 AI チャットおよびエージェント ワークフローの AI プロバイダー構成もサポートしています。これは、SSH セッションと同時にワークスペースを意識した説明、計画、制御された自動化が必要な場合に役立ちます。プロバイダーの構成については[AIチャットとエージェント](/docs/ai)を、実行制御については[セキュリティと安全性](/docs/security)を参照してください。


## タスクを狭くして観察しやすくする


電話機では、安全対策をスキップすることではなく、コンテキストの切り替えを減らすことで速度が得られます。一度に 1 つの明確な目的を優先し、編集を受け入れる前にファイルを読み取り、最小の適切な検証コマンドを実行して Git diff を検査します。このパターンは、Codex が機能、リファクタリング、またはインシデント対応のいずれを支援している場合でも機能します。


## このワークフローの制限事項


Codex は、SSH でアクセスできるホスト上にすでにセットアップされている必要があります。電話機はローカルで Codex を実行しません。つまり、ワークフローはネットワーク、ホスト構成、Codex アカウントの制限を継承します。長時間のエージェント セッションや探索的なエージェント セッションはデスクトップで監視しやすいため、電話では各実行を狭くして観察しやすくします。 NimoteCode は独立したモバイル ワークスペースです。Codex をプロキシせず、Codex 独自のセットアップとコントロールが引き続き適用されます。


## よくある質問


### 携帯電話から Codex を使用するには NimoteCode が必要ですか?


いいえ。 NimoteCode は、リモート Codex セッション (エクスプローラー、エディター、SSH ターミナル、Git レビュー) を中心としたモバイル ワークスペースであり、Codex は独自の開発ホストにインストールおよび認証されます。


### Codex は NimoteCode の公式パートナーですか?


いいえ。 Codex は外部コーディング エージェントです。 NimoteCode は、公式パートナーシップを主張していないか、Codex を代理しているとは主張していません。リモート ホストで Codex を実行し、SSH 経由で回避します。


### Codex の代わりに NimoteCode で AI アシスタントを使用できますか?


はい。 NimoteCode には、プロバイダー構成を備えた独自の AI チャットおよびエージェント ワークフローがあり、リモート Codex セッションに加えて、またはリモート Codex セッションの代わりに使用できます。


<div class="seo-cta">
<p><strong>Codex をリモートで使用するときに、プロジェクト、コマンド出力、Git レビューを保持します。</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode&utm_source=nimotecode&utm_medium=organic&utm_campaign=codex_from_phone" class="home-page-btn primary" target="_blank" rel="noreferrer">Download for Android</a>
    <a href="https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noreferrer">Download for iOS</a>
    <a href="/demo?utm_source=codex_from_phone&utm_medium=organic&utm_campaign=watch_demo" class="home-page-btn secondary">Watch Demo</a>
  </p>
</div>

## 関連ページ


- [モバイル AI コーディング ワークスペース](/mobile-ai-coding)

- [電話からのクロード コード](/claude-code-from-phone)

- [SSHリモート開発ワークフロー](/docs/ssh)

- [AI エージェントは本当に電話からコーディングできるのか?](/blog/can-an-ai-agent-really-code-from-a-phone)
