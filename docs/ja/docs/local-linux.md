---
title: Android Local Linux Overview | NimoteCode
description: Understand NimoteCode's bundled Ubuntu development environment on supported Android devices, its PRoot architecture, compatibility, integrity, presets, and troubleshooting resources.
---

# Android ローカル Linux の概要


ローカル Linux は、サポートされている Android デバイス上にバンドルされた Ubuntu 開発環境を提供します。これは、デバイスに保存されているプロジェクトおよびリモート SSH ホストと並ぶ 3 番目のワークスペースの選択肢です。開くと、ローカル SSH 接続を介して、使い慣れたエクスプローラー、エディター、ターミナル、Git、AI、タスク、LSP、およびデバッグ ワークフローを使用します。


## 可用性と要件


ローカル Linux は、64 ビット ARM64 または x86_64 アプリを備えた Android 8 以降でのみ使用できます。 iPhone や iPad では利用できず、32 ビット ARM デバイスはサポートされていません。 root アクセスや個別のターミナル アプリは必要ありません。


バンドルされた環境には、Ubuntu、Bash、Git、SSH が含まれます。デフォルトでは、言語ツールチェーン、言語サーバー、デバッグ アダプター、または外部エージェント CLI は含まれません。環境を開いた後、プロジェクトに必要なツールをインストールします。 Android の root アクセスを許可せずに Linux ユーザー空間を提供する PRoot を使用します。


## 環境をインストールして開きます


1. ワークスペースまたはエクスプローラーの選択から、**ローカル Linux** を選択します。

2. **インストール**を選択し、バンドルされた環境が準備されるまで待ちます。

3. [**開始**]、[**開く**] を選択して、デフォルトの `/workspace` ディレクトリで作業します。

4. エクスプローラーでファイルを開き、[ターミナル](/docs/terminal)でコマンドを実行し、[ソース管理](/docs/source-control)でGitの変更を検査します。


初期インストールでは、バンドルされている Ubuntu イメージを使用します。後で追加のパッケージをインストールするには、インターネット アクセスが必要になる場合があります。


<figure class="seo-media-placeholder seo-media-placeholder--device-pair has-image has-single-device-image">
  <div class="seo-media-placeholder__device-pair">
    <div class="seo-media-placeholder__device seo-media-placeholder__device--phone">
      <img class="seo-media-placeholder__image" src="/images/placeholders/Local_Linux.jpg" width="930" height="2048" alt="NimoteCode Local Linux panel showing the environment status and Open, Start, Reset, and Delete Environment controls" loading="lazy" decoding="async">
    </div>
  </div>
<figcaption class="seo-media-placeholder__caption">ローカル Linux パネルには、環境のステータス、ストレージの使用状況、ワークスペースとライフサイクルの制御が表示されます。</figcaption>
</figure>

## ライフサイクルを管理する


ローカル Linux ページでは、環境を開始、停止、リセット、または削除できます。停止すると、アクティブなワークスペースが閉じます。再度起動すると、同じ環境に再接続されます。リセットと削除は破壊的なアクションです。いずれかを使用する前に確認を確認してください。ローカル Linux を削除すると、他のデバイスや SSH ワークスペースを削除せずに、その環境データが削除されます。


## ローカル環境で AI を使用する


環境が開くと、[AI チャットとエージェント](/docs/ai) はエクスプローラーやターミナルと同じローカル Linux ワークスペースで動作できます。 OS バージョンのチェックなどの小さな読み取り専用リクエストから始めて、変更を許可する前に計画されたコマンドと出力を確認します。


<figure class="seo-media-placeholder seo-media-placeholder--device-pair has-image has-single-device-image">
  <div class="seo-media-placeholder__device-pair">
    <div class="seo-media-placeholder__device seo-media-placeholder__device--phone">
      <img class="seo-media-placeholder__image" src="/images/placeholders/Local_Linux_AI_Agent.jpg" width="930" height="2048" alt="NimoteCode AI Agent reporting the Ubuntu version and ARM64 architecture from a Local Linux workspace" loading="lazy" decoding="async">
    </div>
  </div>
<figcaption class="seo-media-placeholder__caption">AI エージェントは、ローカル Linux 環境を検査し、コマンド プランとともに結果を提示できます。</figcaption>
</figure>

## ストレージ、ネットワーク、プロセスの動作


環境ファイルは、NimoteCode のアプリプライベート ストレージに保存されます。組み込みの SSH サービスはデバイスのループバック アドレスでのみリッスンするため、ネットワーク SSH サーバーとして公開されるのではなく、NimoteCode によって使用されます。 Android はバックグラウンド プロセスを一時停止または停止できます。アプリに戻った後、Local Linux が停止している場合は再度起動します。


## ローカル Linux ドキュメント


- [はじめに](/docs/local-linux/getting-started) — ワークスペースを準備、インストールし、選択します。

- [アーキテクチャ](/docs/local-linux/architecture) — Android、PRoot、Ubuntu、およびローカル SSH 境界。

- [互換性](/docs/local-linux/compatibility) — デバイス、アーキテクチャ、およびワークロードの期待値。

- [セキュリティと整合性](/docs/local-linux/security-integrity) — チェックサム、パッケージ、および資格情報のガイダンス。

- [Linux プリセット](/docs/local-linux/presets) — マニフェスト、インストーラ検証、および個別のテクニカル リポジトリ。

- [トラブルシューティング](/docs/local-linux/troubleshooting) — インストール、パッケージ、ライフサイクルの問題の実際的なチェック。


## ライセンスと対応するソース


バンドルされている環境は Ubuntu であるため、その GPL および LGPL コンポーネントをアプリとともに公開するには、対応するソースが必要です。完全なソース バンドル、そのチェックサム、マニフェスト、出所、およびライセンス通知は、[ローカル Linux ソースとライセンス](/docs/local-linux-source) にリストされています。同じ通知がアプリ内のライセンス ページから入手できます。

次へ: [はじめに](/docs/local-linux/getting-started) · [Linux プリセット](/docs/local-linux/presets) · [ローカルおよびリモート SSH ワークスペース](/docs/ssh) · [ローカル Linux ソースとライセンス](/docs/local-linux-source)
