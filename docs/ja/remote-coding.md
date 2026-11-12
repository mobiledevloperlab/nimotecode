---
title: "スマートフォンのリモート開発：SSH 設定と診断 | NimoteCode"
description: "Android、iPhone、iPad のリモート開発を設定。SSH ホスト、SFTP、ルート選択、検証とネットワーク・認証の問題を順に確認します。"
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# リモート開発：スマートフォンを既存のプロジェクトへ

リポジトリ、依存関係、サービスは開発ホストに置き、NimoteCode で参照・編集します。このガイドは設定と検証の手順です。機能は [SSH IDE](/ja/ssh-ide)で説明します。

## 1. ホストとネットワークを準備

SSH サーバーを有効にしてホストを起動し、アカウントがリポジトリへアクセスできることを確認します。最初は LAN アドレスで試します。LAN 外には VPN などの安全な経路が必要で、ファイアウォールの許可だけでは到達性を保証できません。

## 2. 接続とファイルアクセスを確認

1. ホスト、ポート、ユーザー、認証を設定し、ホスト鍵を照合します。
2. Remote Explorer でルートを選び、ユーザー所有の場所でファイルを開いて保存し、SFTP と書き込みを確認します。
3. ターミナルのディレクトリとブランチを別途確認します。Linux／macOS では次の例を使えます。

```sh
pwd
git status --short --branch
```

<figure class="seo-phone-capture">
  <a href="/images/ios/iphone-ssh.webp" target="_blank" rel="noopener">
    <img src="/images/ios/iphone-ssh.webp" width="660" height="1433" alt="iPhone の Remote Explorer に表示された SSH プロジェクト。" loading="lazy" decoding="async">
  </a>
  <figcaption>iPhone の Remote Explorer に表示された SSH プロジェクト。 出典：NimoteCode の App Store 掲載画像。宣伝用スクリーンショットであり、連続した操作の記録ではありません。</figcaption>
</figure>

## 3. 一つの変更を検証

保存し、ホストで所定の検証を実行して Git を確認します。Shell 接続だけでは依存関係は導入されず、エディターとターミナルの checkout が同じとも限りません。長時間の処理はホスト側で管理し、切断後に状態を確認します。

## 層ごとに切り分ける

| 症状 | 確認 |
| --- | --- |
| タイムアウト | 電源、アドレス、VPN、ファイアウォール、端末間分離 |
| 接続拒否 | SSH サービスと待ち受けポート |
| 認証失敗 | ユーザー、ポリシー、パスワード、鍵 |
| Shell のみ動く | SFTP とディレクトリ権限 |
| コマンド失敗 | パス、依存関係、実行権限 |

Windows は [OpenSSH／SFTP 手順](/ja/docs/windows-ssh-sftp)、ホストなしの場合は [スマートフォンでの開発](/ja/code-from-phone)、アプリの項目は [SSH 文書](/ja/docs/ssh)を参照してください。

ローカル／SSH ファイルの編集と基本ターミナルから始められます。一部機能には Pro が必要です。[無料版と Pro](/ja/pro)およびアプリ内の利用状態を確認してください。AI にはモデル提供元の設定が必要で、利用料は提供元が別途請求します。

<div class="seo-cta">
  <p><strong>NimoteCode をダウンロード</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="/ja/docs/quick-start" class="home-page-btn secondary">クイックスタート</a>
  </p>
</div>
