---
title: "SSH IDE：リモートファイル・ターミナル・Git | NimoteCode"
description: "NimoteCode の SSH IDE で SFTP 参照、コード編集、ホストのターミナル、Git を利用。接続、権限、言語ツールの要件を確認できます。"
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# SSH IDE でリモートプロジェクトを扱う

既知のコマンドだけなら SSH ターミナルで十分です。リポジトリを探し、ファイルを編集して差分を読む作業では SSH IDE が役立ちます。NimoteCode は Android、iPhone、iPad で Explorer、編集、ターミナル、Git、任意の AI を提供します。

## 三つの層を分けて確認する

| 層 | 目的 | 要件 |
| --- | --- | --- |
| SSH | ホスト接続と認証 | 到達できるサーバーと許可されたアカウント |
| SFTP | ファイルの参照と保存 | サブシステムとファイル権限 |
| ホストツール | Git、検証、言語サービス、Agent | 依存関係、認証情報、実行権限 |

Shell が動いても SFTP の成功は証明できません。ファイルを開くだけではツールも導入されません。

<figure class="seo-phone-capture">
  <a href="/images/ios/iphone-editor.webp" target="_blank" rel="noopener">
    <img src="/images/ios/iphone-editor.webp" width="660" height="1433" alt="iPhone エディターのソースタブとキーボード。" loading="lazy" decoding="async">
  </a>
  <figcaption>iPhone エディターのソースタブとキーボード。 出典：NimoteCode の App Store 掲載画像。宣伝用スクリーンショットであり、連続した操作の記録ではありません。</figcaption>
</figure>

## ワークスペースの機能

Explorer でルートを選び、タブや分割編集で関連ファイルを読みます。コマンド前に保存してください。ソース管理には変更と履歴があり、Git 書き込みと GitHub はアクセス権に従います。言語サーバーとデバッグアダプターは実行先で設定が必要です。

## ホストに合わせる

Windows は PowerShell と SFTP を使います。[設定ガイド](/ja/docs/windows-ssh-sftp)を参照してください。Mac と Linux はホストの Shell とツールを使います。依存関係があるホストを起動しておく必要があり、接続だけではプロセスを維持できません。

## 設定と問題の切り分け

接続手順は [リモート開発](/ja/remote-coding)と [SSH リファレンス](/ja/docs/ssh)、実行場所の選択は [Mobile IDE](/ja/mobile-ide)、AI の選択は [モバイル AI](/ja/mobile-ai-coding)を参照してください。

ローカル／SSH ファイルの編集と基本ターミナルから始められます。一部機能には Pro が必要です。[無料版と Pro](/ja/pro)およびアプリ内の利用状態を確認してください。AI にはモデル提供元の設定が必要で、利用料は提供元が別途請求します。

<div class="seo-cta">
  <p><strong>NimoteCode をダウンロード</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="/ja/docs/quick-start" class="home-page-btn secondary">クイックスタート</a>
  </p>
</div>
