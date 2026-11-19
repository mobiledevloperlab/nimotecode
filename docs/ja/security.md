---
title: "セキュリティと互換性 | NimoteCode"
description: "SSH 認証情報の保存先、AI へのコード送信、同期の範囲、Host の要件、OS と Agent の検証範囲。"
pageClass: trust-page compatibility-page
---

<TrustNav />

# セキュリティと互換性

接続前に、データの送信先と動作条件を確認できます。設定手順と制限は各リンク先をご覧ください。

<p class="compatibility-scroll-hint">小さい画面では表を横にスクロールできます。</p>

## データと実行の範囲 {#boundaries}

<div class="compatibility-table" role="region" aria-label="データと実行の範囲" tabindex="0">

| 確認したいこと | 回答 | 詳細 |
| --- | --- | --- |
| SSH 認証情報の保存先は？ | 接続メタデータは端末に保存。アプリ管理のパスワード、秘密鍵、パスフレーズには iOS Keychain または Android Keystore に基づく暗号化ストレージを使用します。保存済み SSH 設定の削除で対応する認証情報も削除されます。 | [認証情報](/ja/privacy#storage) |
| コードがモデルに送られるのは？ | AI リクエストにはプロンプト、選択内容、関連ファイル、パス、ツール出力が含まれる場合があります。直接リクエストは選択したサービスへ送信。Agent はタスクに応じてファイルを読み取れます。外部 Agent と MCP の送信先・方針は別です。BYOK は保存ゼロを意味しません。 | [AI 接続](/ja/privacy#integrations) · [Agent](/ja/docs/ai) |
| Sync / Cache の書き込み先は？ | **Sync：ローカル → リモート。Cache：リモート → ローカル。** プロジェクトと宛先を確認してください。現行ガイドには同名ファイルの上書き、削除の伝播、競合処理の規則が明記されていません。基準となるコピーを決めてバックアップを取りましょう。履歴はバックアップではありません。 | [同期とキャッシュ](/ja/docs/sync-cache) |
| Host の要件は？ | Host 利用権限のある NimoteCode **2.4.1 以降**、Linux / macOS / Windows PC に別途導入した互換 NimoteHost、SSH 接続とプロジェクト権限。PC は起動・稼働を継続し、Agent は別途インストール・ログインが必要です。 | [Host 導入](/ja/docs/host/getting-started) · [Pro](/ja/pro) |
| Host はどこで実行する？ | PC 上で Host の OS アカウント権限を使用します。認証付き API はループバックのみで待ち受け、SSH 経由で接続。Host 認証情報は PC に残ります。切断後も管理対象の処理は継続できますが、Host や OS の再起動で中断します。 | [Host](/ja/docs/host) · [セッションの制限](/ja/docs/host/sessions) |

</div>

## 互換性と検証範囲 {#compatibility}

**配布対象、画面の記録、受け入れ試験の完了は異なります。** 以下は記録の範囲であり、全組み合わせの動作保証ではありません。

<div class="compatibility-table" role="region" aria-label="互換性と検証範囲" tabindex="0">

| OS・Agent | 公開されている範囲 | 根拠・制限 |
| --- | --- | --- |
| Android アプリ | **2.4.1 / build 66** のレビュー済み ADB 画面記録。機種・OS ごとの完全な受け入れ試験表ではありません。 | [画面記録](/images/placeholders/sources.json) · [画面一覧](/ja/docs/screenshot-guide) |
| iPhone / iPad | **2.4.1+66、iOS 26.0 シミュレーター**：iPhone 17 Pro、iPad Pro 11-inch (M5)。SSH、ターミナルテスト、Git は一時的な Mac プロジェクトを使用。AI はプロバイダー設定前の画面です。実機・モデルタスクの完全な試験ではありません。 | [記録の出典](/images/ios/sources.json) |
| Linux / macOS / Windows Host | **2.4.0 配布対象**：x64 / ARM64 の CLI・デスクトップ、Linux / Windows は x86 CLI も提供。ネイティブ環境・モバイル / Agent の完全な受け入れ試験は未完了。Linux デスクトップは glibc 2.35 以降が必要。macOS は未署名・未公証です。 | [Host 互換性](/ja/docs/host/compatibility) |
| Codex / Claude Code / OpenCode | 互換インストールの検出を文書化。Claude の構造化会話には互換 `claude-agent-acp` アダプターも必要です。Agent バージョン × OS ごとの完全な試験表はリンク先で公開されていません。 | [Host Agent](/ja/docs/host/agents) · [検証範囲](/ja/docs/host/compatibility) |
| ターミナル AI ツール | ワークフローページにターミナルの録画があります。CLI 実行は Host / ACP の構造化会話の検証とは別です。 | [ターミナルの例](/ja/use-cases/terminal-ai-tools) |
| Android Local Linux | Android 8 以降、64-bit ARM64 / x86_64 をサポート。iOS・32-bit ARM は対象外。互換性は処理内容によって異なり、コンテナ試験だけでは Android PRoot の動作を検証できません。 | [互換性と制限](/ja/docs/local-linux/compatibility) |

</div>

機能の利用権限はアカウントと OS により異なり、モデル利用料は別途必要です。[Pro](/ja/pro)、[プライバシーポリシー](/ja/privacy)、[サポート](/ja/support)もご確認ください。
