---
title: "iPhone SSH クライアント：SFTP・編集・Git | NimoteCode"
description: "NimoteCode の iPhone 版で SSH 接続、SFTP ファイル参照、コード編集、ホストのコマンド実行と Git レビュー。設定手順と App Store へのリンクを紹介。"
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# iPhone SSH クライアントでプロジェクトを編集する

外出中にサーバーの設定やスクリプト、リポジトリを確認したいとき、NimoteCode では SSH ターミナル、リモートファイル、コード編集、Git レビュー、任意の AI 支援を一つの iPhone ワークスペースで使えます。プロジェクトはホストに置いたまま操作します。

コマンドだけなら専用ターミナルで足りる場合があります。ファイルを探して編集し、検証して差分まで読む作業に NimoteCode が役立ちます。

<figure class="seo-phone-capture">
  <a href="/images/ios/iphone-ssh.webp" target="_blank" rel="noopener">
    <img src="/images/ios/iphone-ssh.webp" width="660" height="1433" alt="iPhone の NimoteCode Remote Explorer に表示された SSH 接続先とプロジェクト。" loading="lazy" decoding="async">
  </a>
  <figcaption>iPhone の NimoteCode Remote Explorer に表示された SSH 接続先とプロジェクト。 出典：NimoteCode の App Store 掲載画像。宣伝用スクリーンショットであり、連続した操作の記録ではありません。</figcaption>
</figure>

## 開発ホストに接続する

1. Windows、Mac、Linux ホストの SSH サーバーを有効にし、起動状態と到達性を確認します。Windows は [OpenSSH と SFTP の設定](/ja/docs/windows-ssh-sftp)を参照してください。
2. **Connect Remote Workspace** でホスト、ポート、ユーザー名、認証方法を入力します。
3. 初回接続では、ホストから取得した信頼できる値とホスト鍵の指紋を照合します。
4. リポジトリのルートを選び、Remote Explorer の接続先とパスを確認します。
5. 書き込み可能なフォルダーでテスト用ファイルを編集・保存し、ホスト側でも結果を確認します。

プロファイルとディレクトリ選択は [SSH ガイド](/ja/docs/ssh)で説明しています。LAN 外では VPN などの安全な経路が必要です。クライアントをインストールするだけではホストに到達できません。

## SFTP でファイルを探して編集する

プロジェクトツリーからソース、文書、設定を探し、エディターのタブで開きます。外部ツールを実行する前に保存してください。SFTP はホストのアカウント権限に従い、ログインしてもすべての場所に書き込めるわけではありません。

Windows の SFTP パスはローカル表記と異なる場合があります。サーバーが返すパスを使用してください。[エディターガイド](/ja/docs/editor)でタブ、選択、分割表示を確認できます。

## コマンドを実行して Git を確認する

ターミナルのコマンドはホストで動きます。コンパイラー、Git、言語サーバー、依存関係はホストに用意します。編集前にディレクトリとブランチを、コミット前に差分と所定の検証結果を確認してください。

iOS はバックグラウンドのアプリを停止する場合があります。長時間の処理にはホスト側のセッション管理を用意し、再接続後に状態を確認します。

## iPhone とホストの役割

ローカルフォルダーでは iOS の許可に従ってファイルを編集できますが、コンパイラーや Linux ランタイムが自動で用意されるわけではありません。**Local Linux は Android 専用**です。この iPhone の手順ではプロジェクトのコマンドを SSH ホストで実行します。AI は任意で、提供元の設定が必要です。[AI](/ja/docs/ai)と [iPad 開発](/ja/ipad-coding)も参照してください。

## よくある質問

<!-- faq:start -->

### iPhone で SFTP を利用できますか？

はい。SSH ワークスペースのファイルアクセスは SFTP を利用し、サーバー設定とアカウント権限に従います。接続後は一覧表示、ファイルを開く操作、保存を個別に確認してください。

### iPhone で Ubuntu を直接動かせますか？

いいえ。NimoteCode Local Linux は対応する Android 端末専用です。iPhone では SSH ホストの Linux Shell とプロジェクトツールを利用します。

### SSH の前に AI を設定する必要はありますか？

ありません。モデルを設定せずに接続、ファイル参照、編集、基本ターミナルを利用できます。AI の設定とアクセス条件は別です。

<!-- faq:end -->

ローカル／SSH ファイルの編集と基本ターミナルから始められます。一部機能には Pro が必要です。[無料版と Pro](/ja/pro)およびアプリ内の利用状態を確認してください。AI にはモデル提供元の設定が必要で、利用料は提供元が別途請求します。

<div class="seo-cta">
  <p><strong>NimoteCode をダウンロード</strong></p>
  <p class="seo-cta-actions">
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="/ja/docs/quick-start" class="home-page-btn secondary">クイックスタート</a>
  </p>
</div>
