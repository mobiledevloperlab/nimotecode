---
title: "スマートフォンでプログラミング：Linux・SSH 入門 | NimoteCode"
description: "Android や iPhone でコードを書き始める手順。ローカル編集、Android Local Linux、SSH を選び、Python の例を実行して確認します。"
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# スマートフォンでコードを書く：実行場所を決める

スマートフォンでコードを編集できますが、実行には言語と依存関係に対応する環境が必要です。NimoteCode はローカル編集、SSH、対応 Android の Local Linux を提供します。すべてを導入する前に作りたいものを選びます。

## 最初の環境を選ぶ

| 目的 | 開始場所 | 実行条件 |
| --- | --- | --- |
| 文書、HTML、設定の編集 | 許可したローカルフォルダー | 編集だけではランタイムは付属しない |
| Android でスクリプトを実行 | Android 8+ ARM64/x86_64 の Local Linux | Ubuntu ユーザー空間と別途導入する言語ツール |
| PC のプロジェクトを続ける | Windows、Mac、Linux への SSH | ホストの依存関係 |

Local Linux は root 不要の PRoot を使い、iPhone と iPad では利用できません。文章だけなら簡単なエディターで十分で、AI の設定も必須ではありません。

<figure class="seo-phone-capture">
  <a href="/images/ios/iphone-editor.webp" target="_blank" rel="noopener">
    <img src="/images/ios/iphone-editor.webp" width="660" height="1433" alt="iPhone でコードを編集。実行には環境設定が必要です。" loading="lazy" decoding="async">
  </a>
  <figcaption>iPhone でコードを編集。実行には環境設定が必要です。 出典：NimoteCode の App Store 掲載画像。宣伝用スクリーンショットであり、連続した操作の記録ではありません。</figcaption>
</figure>

## Python の最初のスクリプト

書き込めるフォルダーで `hello.py` を作成します。

```python
print("Hello from NimoteCode")
```

保存し、Python 3 を導入した Local Linux または Linux/macOS SSH ホストの同じフォルダーで実行します。

```sh
python3 hello.py
```

`Hello from NimoteCode` と表示されます。コマンドがなければ実行環境に Python を導入します。ファイルを開くだけでは導入されません。Windows はホストの Python コマンドを使います。[Local Linux](/ja/docs/local-linux)または[リモート開発](/ja/remote-coding)で準備してください。

## 自分のプロジェクトへ進む

ルートを開き、設定手順と既存の変更を読み、選んだ環境に依存関係を用意します。保存後に検証し、Git を確認します。[編集](/ja/docs/editor)と[ソース管理](/ja/docs/source-control)も参照してください。

## 環境を変える判断

PRoot 非対応のツールや重いビルドは SSH ホストへ移します。広い変更や複雑なデバッグには、十分に確認できる画面と入力手段を選びます。[Mobile IDE](/ja/mobile-ide)が環境選択を説明します。

ローカル／SSH ファイルの編集と基本ターミナルから始められます。一部機能には Pro が必要です。[無料版と Pro](/ja/pro)およびアプリ内の利用状態を確認してください。AI にはモデル提供元の設定が必要で、利用料は提供元が別途請求します。

<div class="seo-cta">
  <p><strong>NimoteCode をダウンロード</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="/ja/docs/quick-start" class="home-page-btn secondary">クイックスタート</a>
  </p>
</div>
