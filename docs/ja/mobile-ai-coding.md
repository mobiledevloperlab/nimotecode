---
title: "モバイル AI 開発：Chat・Agent・ACP | NimoteCode"
description: "NimoteCode の AI Chat、Nimote Agent、外部 ACP を作業に応じて選択。モデル設定、実行環境、計画承認と Git 検証を説明します。"
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# モバイル AI 開発のモードと実行環境

関数の説明と、ファイルを調べて検証を実行する作業は異なります。NimoteCode はエディター、ターミナル、Git と共に Chat、内蔵 Nimote Agent、互換性のある外部 ACP Agent を提供します。依頼前にモードと実行場所を選びます。

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
  <a href="/images/ios/iphone-agents.webp" target="_blank" rel="noopener">
    <img src="/images/ios/iphone-agents.webp" width="660" height="1433" alt="iPhone の NimoteCode に表示された内蔵・外部 Agent の選択。" loading="lazy" decoding="async">
  </a>
  <figcaption>iPhone の NimoteCode に表示された内蔵・外部 Agent の選択。 出典：NimoteCode の App Store 掲載画像。宣伝用スクリーンショットであり、連続した操作の記録ではありません。</figcaption>
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
