---
title: "Use Claude Code From Your Phone with SSH | NimoteCode"
description: "Learn a practical way to use Claude Code from your phone: connect to a development host over SSH, work in the project files, validate in terminal and review Git changes in NimoteCode."
---

# 携帯電話からクロードコードを使用する方法


開発マシンにすでにクロード コードがインストールされている場合は、電話を使用して SSH 経由でそのワークフローに接続したままにすることができます。課題は、CLI 出力を確認することだけではありません。また、議論されているファイルを検査し、提案を検証し、結果として生じる変更を確認する必要もあります。


NimoteCode は、リモート セッションに関するモバイル ワークスペースを提供します。リポジトリ用のエクスプローラー、ファイル用のエディター、コマンド用の SSH ターミナル、レビュー用の Git、およびコードの質問や制御されたタスク用の独自の AI 支援です。


<ImagePlaceholder image-key="claudeCodeFromPhone" alt="Claude Code from phone remote workflow">
<strong>画像プレースホルダー — リモート クロード コード ワークフロー</strong>
<span>編集されたリモート CLI セッション、変更されたファイル、および Git diff に置き換えます。承認なしにクロードのブランドを使用しないでください。</span>
</ImagePlaceholder>

## 実用的なリモートホスト設定


1. 独自のドキュメントに従って、リモート開発ホストにクロード コードをインストールして認証します。

2. NimoteCode で、[SSH ワークスペース](/docs/ssh) プロファイルを使用してそのホストに接続し、プロジェクト ルートを選択します。

3. エクスプローラーでプロジェクトを開き、SSH ターミナルを使用してクロード コード セッションを開始または継続します。

4. エディタを使用して、議論中のファイルと変更を検査します。

5. ターミナルでプロジェクトのチェックを実行し、コミットする前に[ソース管理](/docs/source-control)で差分を確認します。


これはリモート端末のワークフローです。NimoteCode は、Claude Code 製品であることを主張したり、Claude Code 自身のセットアップを置き換えたりするものではありません。これにより、周囲のプロジェクトの作業を携帯電話やタブレットからより管理しやすくなります。


## エージェントが常に検証に集中できるようにする


エージェントは狭いタスクを高速化できますが、環境を理解する必要性を取り除くことはできません。モバイルでは、各ループを小さく保つのが良い習慣です。つまり、計画を尋ね、タッチされたファイルを検査し、関連するチェックを実行し、出荷前に Git をレビューします。タスクが本番環境に隣接している場合は、確認を使用し、チームの展開プロセスに従います。


## NimoteCodeがClaude Codeとともに役立つ場合


- 旅行中または通話中にリポジトリを調査する必要があります。

- Claude コードは、SSH でアクセスできる Linux 開発ホスト上で実行されています。

- プロジェクト エクスプローラーと Git レビュー ビューをターミナル セッションの横に表示したいとします。

- エージェントの提案を検証済みのレビュー可能な変更に変える必要があります。


NimoteCode 自体内の AI プロバイダーの設定については、[AI チャットとエージェント](/docs/ai) を参照してください。より広範なガイダンスについては、[モバイル AI コーディング](/mobile-ai-coding) をお読みください。


## このワークフローの制限事項


この設定では、SSH でアクセスできるホスト上でクロード コードがすでに実行されていることを前提としているため、エージェントをローカルで実行するのではなく、電話機がそのホストに接続します。これは、リモート開発が常に行うことと同じもの、つまり、到達可能なホスト、安定した接続、および独自のクロード コード資格情報に依存します。長時間実行されるエージェント セッションは、デスクトップ上で監視するのがさらに簡単です。電話では、短くて範囲が狭いループを好みます。 NimoteCode は Claude Code ではないため、Claude Code 自体の構成内の問題を修正できません。


## よくある質問


### 携帯電話でクロード コードを使用するには NimoteCode が必要ですか?


いいえ。 NimoteCode は、Claude Code 自体が独自の開発ホスト上で実行および認証される一方で、周囲のプロジェクト作業 (エクスプローラー、エディター、ターミナル、Git レビュー) を SSH 経由で接続し続けるモバイル ワークスペースです。


### NimoteCode はクロード コードを実行しますか?


いいえ。 NimoteCode は Claude Code 製品ではなく、そのセットアップを置き換えるものではありません。リモート ホストに Claude Code をインストールして認証し、SSH ターミナルを使用してセッションを開始または継続します。


### リモート コンピュータを使用せずに電話からクロード コードを実行できますか?

このワークフローでは使用できません。 Claude Code は SSH 経由でアクセスするホスト上で実行されるため、電話機はエージェントをローカルで実行するのではなく、そのホストに接続します。


<div class="seo-cta">
<p><strong>SSH プロジェクト、ターミナル、ワークフローを電話に接続します。</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode&utm_source=nimotecode&utm_medium=organic&utm_campaign=claude_code_from_phone" class="home-page-btn primary" target="_blank" rel="noreferrer">Download for Android</a>
    <a href="https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noreferrer">Download for iOS</a>
    <a href="/demo?utm_source=claude_code_from_phone&utm_medium=organic&utm_campaign=watch_demo" class="home-page-btn secondary">Watch Demo</a>
  </p>
</div>

## 続きを読む


- [電話からのコーデックス](/codex-from-phone)

- [リモート開発用のSSH IDE](/ssh-ide)

- [AIエージェントデモ](/use-cases/)

- [AI エージェントは本当に電話からコーディングできるのか?](/blog/can-an-ai-agent-really-code-from-a-phone)
