---
title: "モバイル AI 開発：Chat・Agent・ACP | NimoteCode"
description: "NimoteCode の AI Chat、Nimote Agent、外部 ACP を作業に応じて選択。モデル設定、実行環境、計画承認と Git 検証を説明します。"
lastUpdated: "2026-11-17"
pageClass: "seo-product-guide"
---

# モバイル AI 開発のモードと実行環境

NimoteCode は、コード説明用の AI Chat、ワークスペースで作業する Nimote Agent、対応する外部エージェントへの ACP 接続を提供します。エディター、ターミナル、Git と併せて使えます。作業に合うモードを選び、モデル提供元または実行環境を設定して、使用するワークスペースを確認します。

## Chat と Agent を選ぶ

| モード | 用途 | 設定と制御 |
| --- | --- | --- |
| Chat | 選択コードの説明、エラー分析、計画 | モデル提供元。Chat 自体はファイル変更を実行しない |
| Nimote Agent | ファイル調査、編集提案、利用可能なツール | 提供元とアクセス条件。Confirm では計画承認後に実行 |
| 外部 ACP | 別途導入した互換 Agent | 実行先のランタイム、認証情報、独自のツール方針 |

変更内容が分かっているなら通常の編集やターミナルで十分です。AI は任意で、SSH にモデル設定は必要ありません。

## 提供元とワークスペースを設定する

[モデル設定](/ja/docs/configuration)で接続を試し、ワークスペースのルートを確認します。ローカルフォルダーだけではコマンド実行環境は用意されません。SSH はホスト、対応 Android は [Local Linux](/ja/docs/local-linux) を利用できます。iPhone と iPad に Local Linux はありません。

<figure class="seo-phone-capture">
  <a href="/images/ios/iphone-agents.webp?v=6c87b07b60da" target="_blank" rel="noopener">
    <img src="/images/ios/iphone-agents.webp?v=6c87b07b60da" width="720" height="1565" alt="プロバイダー設定前の iPhone AI ワークスペース。" loading="lazy" decoding="async">
  </a>
  <figcaption>プロバイダー設定前の iPhone AI ワークスペース。 ローカルビルドの NimoteCode 2.4.1（66）iOS シミュレーターで撮影。</figcaption>
</figure>

## 読み取りだけの依頼から始める

「入口と設定の読み込み方を説明し、まだ変更しないでください」と依頼し、参照パスをエディターで確認します。ツールが必要なら Nimote Agent の Confirm モードで計画を読んで承認します。回答は実際のファイルで検証してください。

## 実行と結果を確認する

タイムラインの出力を読み、必要なら指示を追加するか停止します。保存ファイル、プロジェクトの検証、[Git 差分](/ja/docs/source-control)を確認します。内蔵 Agent の Confirm は、手動で起動した外部 CLI の権限を制御しません。

## 外部ランタイムを使う

[AI／ACP ガイド](/ja/docs/ai)でランタイムや MCP を設定します。直接 CLI を使う場合は [Claude Code](/ja/claude-code-from-phone) または [Codex](/ja/codex-from-phone) の SSH 手順を参照してください。鍵はプロンプトではなく設定に保存します。モデル利用枠は含まれません。

ローカル／SSH ファイルの編集と基本ターミナルから始められます。一部機能には Pro が必要です。[無料版と Pro](/ja/pro)およびアプリ内の利用状態を確認してください。AI にはモデル提供元の設定が必要で、利用料は提供元が別途請求します。

<div class="seo-cta">
  <p><strong>NimoteCode をダウンロード</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="/ja/docs/quick-start" class="home-page-btn secondary">クイックスタート</a>
  </p>
</div>
