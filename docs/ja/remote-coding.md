---
title: "Remote Coding from Your Phone or Tablet | NimoteCode"
description: "Remote coding from a phone or tablet done right: connect over SSH to your development machine, edit the real project, run terminal commands and review Git changes with NimoteCode."
---

# 携帯電話またはタブレットからのリモート コーディング


リモート コーディングとは、あるマシンでプロジェクトを編集および実行しながら、別のマシンで対話することを意味します。最も一般的なセットアップは、スマートフォンまたはタブレットを SSH 経由でデスクトップ、ラップトップ、またはサーバーに接続し、コピーではなく実際のリポジトリで動作するというものです。


NimoteCode は、そのモデル用に構築されたモバイル ワークスペースです。リモート コーディングをシェル テキストのストリームに減らす代わりに、プロジェクト用のエクスプローラー、ファイル用のエディター、コマンド用のターミナル、レビュー用の Git、およびコンテキスト用の AI 支援がすべて同じリモート ホストに接続されます。


<ImagePlaceholder image-key="sshIde" alt="Remote coding workspace over SSH">
  <strong>Image placeholder — Remote coding session</strong>
  <span>Replace with the remote project Explorer, an open file and a running command from one SSH workspace.</span>
</ImagePlaceholder>

## リモートコーディングに実際に必要なもの


実行可能なリモート設定には 3 つのものが必要です。SSH 経由でアクセスできる信頼できるホスト、モバイル ネットワークが変更されても存続する接続、ファイル、端末、Git をまとめて保持するワークスペースです。これらのうちの 1 つだけを提供するツール (プレーンな SSH クライアント、または接続のないエディター) では、ループが切れたままになります。


## リモートコーディングが役立つ場合


- コードベースは Mac、Linux デスクトップまたはサーバー上に存在し、そこから離れています。

- インシデントを調査し、小さな修正を適用するか、差分をリモートで確認する必要があります。

- 携帯電話またはタブレットを持って旅行し、タスクを進めたいと考えています。

- ローカル エミュレーションよりもリモート マシンの完全なツールとコンピューティングを好みます。


## NimoteCode の適合性


[SSH ワークスペース](/docs/ssh) 経由で接続し、プロジェクトのルートを選択すると、リポジトリはホスト上に残ります。携帯電話やタブレットは実際のファイルを操作できます。エクスプローラーで参照し、タブで編集し、ターミナルでチェックを実行し、デバイスに何もコピーせずに Git 履歴を検査します。すでにデバイス上にあるプロジェクトの場合は、同じワークスペースでローカルに開きます。


## 典型的なリモート コーディング セッション


1. SSH プロファイルを開き、開発ホストに接続します。

2. プロジェクトエクスプローラで関連するモジュールまたはファイルを見つけます。

3. エディタで必要な最小限の変更を編集します。

4. [ターミナル](/docs/terminal)で焦点を絞ったテスト、ビルド、またはログコマンドを実行します。

5. [ソース管理](/docs/source-control)でステージングされた結果とステージングされていない結果を確認します。

6. [AI チャットとエージェント](/docs/ai) を使用して、エラーを説明するか、プロジェクトの完全なコンテキストを使用して次のステップを計画します。


## リモートとローカルの違い


- **リモート**: プロジェクト、ツール、およびコンピューティングはホスト上に残ります。電話機は SSH 経由でそれを読み取り、編集します。既存のマシン、サーバー、大規模なプロジェクトに最適です。

- **ローカル**: プロジェクト ファイルはデバイス上に存在し、ネットワークなしで開きます。簡単な実験やオフライン作業に最適ですが、携帯電話のストレージとコンピューティングによって制限されます。


## リモートコーディングの制限


リモートコーディングはネットワークとホストに依存します。接続が弱い場合は、キーストロークと端末出力に遅延を感じることがあります。再接続を意識した処理は役立ちますが、削除されません。非常に大規模なリポジトリでは、検索インデックスが準備できるまで参照に時間がかかることがあります。そしてホストが重労働を行います。電話では能力の低いサーバーを高速化することはできません。長くて重いコンパイル ループの場合は、依然としてデスクトップがより快適な場所です。


## よくある質問


### リモートコーディングとは実際には何を意味しますか?


リモートコーディングとは、あるマシンでプロジェクトを編集および実行しながら、別のマシンで対話することを意味します。最も一般的なセットアップは、スマートフォンまたはタブレットを SSH 経由でデスクトップ、ラップトップ、またはサーバーに接続し、実際のリポジトリで動作させることです。


### SSH 経由のリモート コーディングは遅いですか?

SSH 経由の対話型編集は、通常、接続が良好な場合に応答します。大規模なビルド、完全なインデックスの再作成、または長時間実行されるコンパイルなどの負荷の高い操作は、ネットワークとリモート ホストの影響を受けるため、多くの場合、デスクトップに任せた方がよいでしょう。


### 携帯電話にプロジェクト ファイルが必要ですか?


いいえ。 SSH ワークスペースを使用すると、プロジェクトはリモート ホスト上に残ります。電話機は、リポジトリを複製する代わりに、SSH 経由でファイルを読み取り、編集し、そのマシンからのターミナル出力と Git データを確認します。


<div class="seo-cta">
  <p><strong>Keep your project, terminal and Git review with you wherever you are.</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode&utm_source=nimotecode&utm_medium=organic&utm_campaign=remote_coding" class="home-page-btn primary" target="_blank" rel="noreferrer">Download for Android</a>
    <a href="https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noreferrer">Download for iOS</a>
    <a href="/demo?utm_source=remote_coding&utm_medium=organic&utm_campaign=watch_demo" class="home-page-btn secondary">Watch Demo</a>
  </p>
</div>

## 関連ページ


- [リモート開発用のSSH IDE](/ssh-ide)

- [モバイルIDEの概要](/mobile-ide)

- [SSH、Git、AIコーディング用のAndroid IDE](/android-ide)

- [Code from a phone](/code-from-phone)

- [How to Use Android as a Remote IDE with Tailscale](/blog/tailscale-ssh-android-mac-linux)
