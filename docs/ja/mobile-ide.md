---
title: "モバイルIDEの選び方：スマホで編集から変更の確認まで | NimoteCode"
description: "ローカル編集、SSH、リモートAIエージェントを用途で比較。NimoteCodeを例に、小さな修正を編集、プレビュー、Git差分の確認まで進めます。"
pageClass: mobile-ide-article
---

# モバイルIDEの選び方：スマホで編集から変更の確認まで

プロジェクトのREADMEに、間違ったコマンドを見つけた。リポジトリは開発用マシンにあるけれど、今は手元にパソコンがない。1行直すだけなら簡単そうです。ただ、表示を確認し、プロジェクトのチェックを実行し、差分に余計な変更がないか確かめる作業も残っています。

こうした小さな修正は、モバイルIDEの使い勝手を試すのに向いています。ファイルを開くだけでなく、スマホに開発環境を一から作り直さずに、作業を最後まで進められるでしょうか。

私たちはAndroid、iPhone、iPad向けのエディターと開発ワークスペース、NimoteCodeを開発しています。この記事ではNimoteCodeを使って説明しますが、どのアプリを選ぶ場合も、最初に考えたいことは同じです。**コードと開発ツールを、どこで動かしますか？**

<figure class="article-hero">
  <a href="/blog/why-existing-flutter-code-editors-broke-down-when-i-built-a-mobile-ide/image-2.png" target="_blank" rel="noopener">
    <img src="/blog/why-existing-flutter-code-editors-broke-down-when-i-built-a-mobile-ide/image-2.png" width="1414" height="878" alt="タブレット上のNimoteCode。ソース管理とコードエディターを並べて表示しています。" loading="eager" decoding="async">
  </a>
  <figcaption>タブレット上のNimoteCode。ソース管理とコードエディターを並べて表示しています。</figcaption>
</figure>

## アプリより先に作業の進め方を選ぶ

スマホでコードを書くといっても、ローカルファイルの編集、開発用マシンへの接続、AIエージェントの作業確認では、必要な道具が違います。

| やりたいこと | 検討する選択肢 | 確認したいこと |
| --- | --- | --- |
| Markdown、設定、静的HTMLの編集 | 必要なプレビューを備えたローカルエディター | 編集したファイルをリポジトリへ戻す方法 |
| Android上でスクリプトやCLIツールを実行 | [Termux](https://termux.dev/en/)や互換性のあるローカルLinux環境 | 依存パッケージが端末で動くか |
| サーバー管理やリモートシェルでの作業 | [Termius](https://termius.com/)や[Blink Shell](https://docs.blink.sh/advanced/code) | キーボード操作、ファイルアクセス、普段使うターミナルツール |
| 別のマシンで動くエージェントの作業を続ける | [Redock](https://redock.dev/)、[ServerCC](https://servercc.app/)、[Moshi](https://getmoshi.app/docs/introduction)。Orcaのデスクトップ環境を使うなら[Orca](https://www.onorca.dev/) | ホストの設定と、エージェントによる変更の確認方法 |
| スマホの画面でプロジェクトを開き、編集してGit差分を確認 | NimoteCodeのようなワークスペース | 実行環境とProが必要な機能 |

これらの用途には重なりがあります。Blink Codeはローカルとリモートのファイルを編集できます。TermuxにはエディターやGitを導入でき、SSHターミナルではホスト側のツールを使えます。差分表示やプレビューを備えたエージェント用クライアントもあります。機能の数より、自分の作業に合う操作方法かどうかで選ぶと判断しやすくなります。

個別の機能や制限、公式の根拠は[ツール比較](/ja/compare/mobile-ai-development-tools)にまとめています。実行場所を決めたい場合は、[開発方式の比較](/ja/compare/mobile-development-approaches)を参照してください。

## すでに動く開発環境があるなら、そのまま使う

既存のプロジェクトなら、SSHを使うと依存関係やテストコマンドを元のマシンに残せます。スマホでファイルを開いて編集し、コマンドはリモートホストで実行します。接続可能なホストとネットワークが必要です。

NimoteCodeで **Connect Remote Workspace** を選び、SSH接続情報を入力してリポジトリのルートを選択します。設定手順は[SSHガイド](/ja/docs/ssh)にあります。編集前にExplorerのホスト名とパスを確認し、ターミナルも別に確認します。

```sh
pwd
git status --short --branch
```

シェルが目的のリポジトリにいることを確認してください。エディターのタブを切り替えても、シェルの作業ディレクトリは変わりません。既存の変更があれば、今回の修正と区別しておきます。

<figure class="mobile-ide-screenshot">
  <a href="/images/placeholders/remote-workspace-connected.jpg" target="_blank" rel="noopener">
    <img src="/images/placeholders/remote-workspace-connected.jpg" width="1080" height="2376" alt="SSH接続後のワークスペース。ファイルを開く前に、ホストとプロジェクトのルートを確認します。" loading="lazy" decoding="async">
  </a>
  <figcaption>SSH接続後のワークスペース。ファイルを開く前に、ホストとプロジェクトのルートを確認します。</figcaption>
</figure>

## 小さな修正を最後まで進める

最初はREADMEのコマンド修正を試してみてください。スマホでも差分を追いやすく、ファイルアクセス、編集、プレビュー、Git確認を一通り試せます。以下の画像は各機能の画面例で、この修正の実施前後を記録したものではありません。

### 1. ファイルを開いて修正する

Explorerで `README.md` を開き、前後の説明を読んでからコマンドを直します。最初の変更はその箇所だけに絞りましょう。文書全体の整形まで同時に行うと、小さな画面で差分を確認しづらくなります。

<figure class="mobile-ide-screenshot">
  <a href="/images/placeholders/markdown-source-editor.jpg" target="_blank" rel="noopener">
    <img src="/images/placeholders/markdown-source-editor.jpg" width="1080" height="2376" alt="モバイルエディターで開いたREADME.md。プレビューと見比べられるMarkdownのソース画面です。" loading="lazy" decoding="async">
  </a>
  <figcaption>モバイルエディターで開いたREADME.md。プレビューと見比べられるMarkdownのソース画面です。</figcaption>
</figure>

### 2. プレビューを確認して保存する

Markdownプレビューで、コマンドがコードブロック内に収まり、前後のリストが正しく表示されるか確認します。静的HTMLでは、未保存の変更を含む編集中の内容をプレビューできます。サーバー処理が必要なアプリには、その実行環境が別途必要です。詳しくは[エディターガイド](/ja/docs/editor)を参照してください。

<figure class="mobile-ide-screenshot">
  <a href="/images/placeholders/markdown-preview.jpg" target="_blank" rel="noopener">
    <img src="/images/placeholders/markdown-preview.jpg" width="1080" height="2376" alt="Markdownプレビューでは、見出し、コードブロック、表が実際にどう表示されるか確認できます。" loading="lazy" decoding="async">
  </a>
  <figcaption>Markdownプレビューでは、見出し、コードブロック、表が実際にどう表示されるか確認できます。</figcaption>
</figure>

チェックを実行する前に保存してください。ターミナルのコマンドが読むのは保存済みのファイルで、エディター内の未保存の内容ではありません。

### 3. プロジェクトで決められたチェックを実行する

リポジトリの手順に従い、文書チェック、リンクチェック、ビルドなどをSSHホストで実行します。すべてのプロジェクトに共通するテストコマンドはありません。プレビューで表示を確認できても、書いたコマンド自体が正しいとは限りません。

空白文字の問題は、追加で次のように確認できます。

```sh
git diff --check
```

このコマンドで分かるのは一部の空白文字のエラーです。文書の手順やアプリの動作を検証するものではありません。

<figure class="mobile-ide-screenshot">
  <a href="/images/placeholders/terminal-command-output.png" target="_blank" rel="noopener">
    <img src="/images/placeholders/terminal-command-output.png" width="1080" height="2376" alt="ワークスペースのターミナルに表示されたlsのディレクトリ一覧。コマンド出力の画面例であり、テスト成功の記録ではありません。" loading="lazy" decoding="async">
  </a>
  <figcaption>ワークスペースのターミナルに表示されたlsのディレクトリ一覧。コマンド出力の画面例であり、テスト成功の記録ではありません。</figcaption>
</figure>

### 4. コミット前に差分を読む

**Source Control** で変更したファイルを開き、差分を確認します。ファイル名、修正した行、意図しないファイルがないかを見てください。NimoteCodeの無料版ではGitの状態、差分、履歴を確認できます。Gitの書き込みとブランチ操作にはProが必要です。[無料版とProの違い](/ja/pro)で範囲を確認できます。

<figure class="mobile-ide-screenshot">
  <a href="/images/placeholders/git-diff-view.jpg" target="_blank" rel="noopener">
    <img src="/images/placeholders/git-diff-view.jpg" width="1080" height="2376" alt="差分画面は追加と削除を色分けします。この既存の画像にはデモ用の変更が含まれており、上のREADME修正の結果ではありません。" loading="lazy" decoding="async">
  </a>
  <figcaption>差分画面は追加と削除を色分けします。この既存の画像にはデモ用の変更が含まれており、上のREADME修正の結果ではありません。</figcaption>
</figure>

保存して確認した状態で作業を止め、パソコンに戻ってから続けても構いません。アプリからコミットする場合も、普段のレビューとリリースの手順に従ってください。

## この作業でAIが役立つ場面

READMEに知らないスクリプトが登場したら、「このコマンドが呼び出すスクリプトを探して、引数を説明して。ファイルは変更しないで」と具体的に尋ねられます。回答をリポジトリと照合しやすい質問です。

NimoteCodeにはAI Chatがあり、ProではAI Agentも利用できます。モデルへのアクセス設定が必要です。外部ACPエージェントには、SSHホスト上の互換ランタイムも必要です。[AIガイド](/ja/docs/ai)では設定方法と、実行前に計画を確認するConfirmモードを説明しています。

1行の修正なら、自分で直すほうが早いかもしれません。知らないプロジェクトでは、修正案の生成より関連ファイルを探す手助けが役立つこともあります。どちらの場合も、差分と必要なチェックは自分で確認します。

## スマホ上で実行する場合は？

対応するAndroid端末では、NimoteCodeのLocal LinuxがPRootによるUbuntu環境をroot権限なしで提供します。Android 8以降と、ARM64またはx86_64の64ビットアプリが必要です。言語ツールチェーンは別途インストールし、互換性はプロジェクトごとに確認します。iOSでは利用できません。ビルドに使う前に[Local Linuxの説明](/ja/docs/local-linux)を確認してください。

システムのファイル選択画面で開いたフォルダーは、別の扱いになります。閲覧と編集はできますが、Git、言語サービス、Tasks、Agentなどにはネイティブのファイルシステムパスが必要です。フォルダーが開けることと、すべての開発ツールが使えることは同じではありません。

スマホは、小さな修正や範囲を絞ったレビュー、外出中のエラー確認に向いています。長いリファクタリングは小さな画面では追いづらくなります。リモート作業はネットワークに依存し、アプリが再接続できてもホストのプロセスが動き続けているとは限りません。最初は、最後まで確認できる作業を選びましょう。

## よくある質問

### NimoteCodeはSSHクライアントですか？

SSHに加えて、エディター、Explorer、ターミナル、Git、AI Agentを備えたモバイル開発ワークスペースです。

### スマホやタブレットからリモートプロジェクトを扱えますか？

はい。SSH接続したワークスペースで、ファイルの確認、編集、コマンド実行、Git差分の確認ができます。

### AndroidとiOSに対応していますか？

Android版はGoogle Play、iPhone・iPad版はApp Storeで配信しています。

## よく知っているプロジェクトで試す

内容を把握しているリポジトリで、ひと言で説明できる修正を選んでください。開いて、編集して、検証して、差分を読む。一度試すと、機能一覧を眺めるより自分の作業に合うか判断しやすくなります。

まず[ワークスペースのデモ](/ja/use-cases/mobile-workspace-demo)を見るか、[NimoteCodeをダウンロード](/ja/download?utm_source=mobile_ide&utm_medium=organic&utm_campaign=project_workflow)して[クイックスタート](/ja/docs/quick-start)から始めてください。
