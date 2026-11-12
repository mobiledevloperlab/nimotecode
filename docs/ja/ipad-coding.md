---
title: "iPad でプログラミング：SSH・編集・Git・AI | NimoteCode"
description: "NimoteCode で iPad のプロジェクト参照、分割編集、SSH ターミナル、Git レビューを利用。リモート実行、iPadOS の制約、導入手順を説明します。"
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# iPad から既存の開発環境を使う

コードとコマンド出力を読み比べるとき、タブレットの画面が役立ちます。NimoteCode は iPad に Explorer、分割エディター、SSH ターミナル、Git、任意の AI 支援を提供します。Pull Request のレビュー、文書の修正、小さなバグ修正を進め、重い処理は開発ホストで実行できます。

短いメモなら簡単なエディターで十分です。プロジェクトを変更するなら、まず依存関係、検証、サービスの実行場所を決めます。

<figure class="article-hero">
  <a href="/images/ios/ipad-workspace.webp" target="_blank" rel="noopener">
    <img src="/images/ios/ipad-workspace.webp" width="1200" height="899" alt="App Store 掲載の NimoteCode iPad 画面。プロジェクトの参照と編集を表示。" loading="lazy" decoding="async">
  </a>
  <figcaption>App Store 掲載の NimoteCode iPad 画面。プロジェクトの参照と編集を表示。 出典：NimoteCode の App Store 掲載画像。宣伝用スクリーンショットであり、連続した操作の記録ではありません。</figcaption>
</figure>

## ローカル編集かリモートプロジェクトか

| 作業 | 実行場所 | 必要なもの |
| --- | --- | --- |
| ローカルファイルの編集 | 許可された iPad のファイルプロバイダー | フォルダーへのアクセス |
| コマンドとビルド | SSH ホスト | ツール、依存関係、通信 |
| Git レビュー | 現在の Git ワークスペース | 対応リポジトリと権限 |
| AI に質問 | 設定した提供元と利用可能なツール | 認証情報と機能へのアクセス |

**Android Local Linux は iPadOS では利用できません。** フォルダーを開いても Node.js、Python、コンパイラー、Linux Shell は導入されません。ファイルプロバイダーのフォルダーではネイティブパスを必要とするツールも制限される場合があります。[ワークスペース設定](/ja/docs/ssh)を確認してください。

## iPad の作業環境を設定する

1. App Store からインストールし、端末と OS の要件を確認します。
2. 起動中の Windows、Mac、Linux へ SSH を設定し、ホスト鍵を照合してリポジトリのルートを選びます。
3. ファイルを開き、比較には分割編集を使います。ターミナルのディレクトリは別途確認します。
4. 保存してホストで所定の検証を実行し、コミット前に差分を確認します。

[Windows ガイド](/ja/docs/windows-ssh-sftp)では PowerShell と SFTP を説明しています。LAN 外ではホストへの安全な経路が必要です。

## 大きな画面で変更をレビューする

関連ファイルをタブに残し、実装、設定、テストを読み比べます。[ソース管理](/ja/docs/source-control)で差分と履歴を確認できます。GitHub 操作はアカウントとリポジトリの権限に従います。実行環境は引き続きホストが提供します。

<figure class="article-hero">
  <a href="/images/ios/ipad-git.webp" target="_blank" rel="noopener">
    <img src="/images/ios/ipad-git.webp" width="1200" height="899" alt="App Store 掲載の iPad 画面で Git AI ツールと変更分析を表示。" loading="lazy" decoding="async">
  </a>
  <figcaption>App Store 掲載の iPad 画面で Git AI ツールと変更分析を表示。 出典：NimoteCode の App Store 掲載画像。宣伝用スクリーンショットであり、連続した操作の記録ではありません。</figcaption>
</figure>

## 必要なときに AI を加える

不慣れなコードの説明や具体的なエラーの分析から始めます。Nimote Agent は利用可能なツールを使い、Confirm モードでは計画承認後に実行します。外部 ACP Agent には対応ランタイムと認証情報が必要です。[AI ガイド](/ja/docs/ai)を参照してください。

## iPadOS のバックグラウンド動作に備える

アプリ切替や画面ロックで接続が切れる場合があります。ホスト側のターミナルマルチプレクサーはセッション保持に役立ちますが、ホストの休止や再起動を防ぐものではありません。再接続後は保存内容とジョブの状態を確認します。大規模なリファクタリングや長時間のデバッグにはデスクトップが適する場合があります。

## よくある質問

<!-- faq:start -->

### iPad で Local Linux を使えますか？

いいえ。Local Linux は Android 専用です。iPad では SSH ホストのランタイム、ターミナルツール、ビルド環境を使います。

### iPad のローカルファイルを開けますか？

はい。iPadOS とファイルプロバイダーの許可に従います。フォルダーを開けてもネイティブパスが必要なすべてのツールが使えるとは限りません。

### Android とすべて同じ機能ですか？

基本の編集と SSH は共通ですが、実行環境は異なります。Local Linux は iPad では使えず、ファイル権限とバックグラウンド実行もプラットフォームに依存します。

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
