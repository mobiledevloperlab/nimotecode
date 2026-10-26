---
title: AI と接続の設定 | NimoteCode
description: "AI と接続の設定の設定、操作手順、画面の説明。"
---

# AI と接続の設定

## モデル設定を追加する

**AI Configuration** を開き、**Add Model** を選択してプロバイダーを選びます。表示名、API キー、Base URL、モデル名を入力して保存します。モデルはプロバイダーのアカウントで利用できる必要があります。NimoteCode にプロバイダーのトークン利用枠は含まれません。

<div class="doc-screenshots">
  <DocScreenshot file="ai-provider-overview.png" caption="保存済みモデルと共通設定を表示する AI Configuration。" />
  <DocScreenshot file="ai-provider-settings.jpg" caption="API キーをマスク表示し、接続テストを備えたモデル設定フォーム。" />
</div>

## チャット接続をテストする

**Test chat connection** を選択すると短いテスト用プロンプトを送信します。ワークスペースのファイルや設定済みのシステムプロンプトは送信せず、出力は最大 1024 トークンです。プロバイダーの料金が発生する場合があります。成功しても確認できるのはテキスト応答のみで、Agent のツール対応やモデルのコンテキスト容量は検証しません。

## 共通設定

AI Configuration には MCP ツールサーバー、チャット履歴の自動保存、AI のプライバシー設定があります。モデルのサンプリング設定や出力設定とは別に確認してください。SSH ホストの設定は[ローカルと SSH のワークスペース](/ja/docs/ssh)を参照してください。
