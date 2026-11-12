---
title: "スマートフォンから SSH で Codex を使う | NimoteCode"
description: "開発ホストで Codex を動かし、Android や iPhone の NimoteCode から操作。設定、再接続、Git レビュー、トラブル対処を説明します。"
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# スマートフォンから SSH で Codex を使う

リポジトリを開発マシンに置いたまま、スマートフォンから Codex の作業を続けたい場合の手順です。Linux または macOS ホストの CLI に SSH で接続し、NimoteCode でファイル参照、編集、ターミナル、Git レビューを行います。

SSH は選択肢の一つです。Agent の作業を追うだけなら、提供元の最新の Web、モバイル、リモート機能も確認してください。ホストのファイルとプロジェクトコマンドを直接扱う場合に NimoteCode が役立ちます。

## 1. ホストとアカウントを準備する

起動中の SSH ホスト、アクセスできるリポジトリ、依存関係を用意します。先に公式手順でホストへ Agent をインストールし認証してください。Agent のアカウント、制限、権限、認証情報は NimoteCode とは別です。

ホストに合った Codex の公式インストール方法を使います。例：

```sh
npm install -g @openai/codex
codex --version
```

[Codex CLI](https://learn.chatgpt.com/docs/codex/cli) · [CLI reference](https://learn.chatgpt.com/docs/developer-commands?surface=cli)

ブラウザーのないホストでは、利用可能なら公式の `codex login --device-auth` を使えます。公式手順で認証してください。スマートフォンの localhost はホストではありません。

## 2. スマートフォンでリポジトリを開く

[SSH ワークスペース](/ja/docs/ssh)を作り、ホスト鍵を照合してルートを選びます。ターミナルでも同じパスへ移動し、既存の変更を確認します。以下のパスは例で、自動作成されるものではありません。

以下は Linux または macOS の SSH ホスト向けの例です。プロジェクトのパスを置き換えてください。Windows では PowerShell 用のコマンドが必要です。[Windows SSH と SFTP](/ja/docs/windows-ssh-sftp)を参照してください。

```sh
cd /path/to/project
pwd
git status --short --branch
```

<figure class="seo-phone-capture">
  <a href="/images/ios/iphone-terminal.webp" target="_blank" rel="noopener">
    <img src="/images/ios/iphone-terminal.webp" width="660" height="1433" alt="iPhone の NimoteCode SSH ターミナル。Codex の実行記録ではなく Shell の画面例です。" loading="lazy" decoding="async">
  </a>
  <figcaption>iPhone の NimoteCode SSH ターミナル。Codex の実行記録ではなく Shell の画面例です。 出典：NimoteCode の App Store 掲載画像。宣伝用スクリーンショットであり、連続した操作の記録ではありません。</figcaption>
</figure>

## 3. ホスト側のセッションで開始する

Linux または macOS に tmux があれば、通信が切れてもホスト上のターミナルを保持できます。名前付きセッションを作成または接続し、その中で Agent を開始します。再接続後に Agent が動いていれば、二つ目を起動せず続けてください。

```sh
tmux new-session -A -s mobile-codex
codex
```

最初は範囲を絞って依頼します。

> この設定値を読む場所を探し、関連ファイルと確認方法を説明してください。まだファイルを変更しないでください。

## 4. 再接続と会話の再開を分ける

Ctrl+B、続いて D で tmux から離れます。SSH 再接続後は同じセッションに接続します。Agent が終了し会話だけ残っている場合は、同じリポジトリで再開コマンドを使います。保存された会話と実行中のプロセスは別です。

```sh
tmux attach-session -t mobile-codex
```

```sh
codex resume
```

[tmux](https://github.com/tmux/tmux/wiki/Getting-Started)

## 5. 会話の外で検証する

NimoteCode で変更ファイルを開き、保存して、所定のテストやビルドを実行し差分を読みます。以下はパッチの確認であり、プロジェクトのテストを置き換えません。

```sh
git diff --check
git diff --stat
git diff
```

Nimote Agent の Confirm は内蔵 Agent の制御です。手入力の SSH コマンドや外部 CLI の権限は制御しません。CLI 自身の設定を使い、モバイル入力を減らすためだけに確認を無効にしないでください。

## 失敗している層を調べる

| 症状 | 最初の確認 |
| --- | --- |
| SSH タイムアウト | ホストの休止、アドレス、VPN、ファイアウォール、経路 |
| コマンドがない | SSH Shell のインストール先と PATH |
| 認証失敗 | Agent のアカウントと公式のヘッドレス認証手順 |
| セッションがない | tmux、再起動、プロセス終了、会話の再開 |
| 検証できない | リポジトリ、依存関係、実行権限 |

## 公式設定と関連ガイド

[Codex CLI](https://learn.chatgpt.com/docs/codex/cli) · [CLI reference](https://learn.chatgpt.com/docs/developer-commands?surface=cli)

[SSH](/ja/docs/ssh) · [Git](/ja/docs/source-control) · [AI / ACP](/ja/docs/ai)

## よくある質問

<!-- faq:start -->

### Codex の契約は含まれますか？

含まれません。Codex は別途インストールして認証します。NimoteCode はモバイルワークスペースであり、Agent のアカウントや利用枠は提供しません。

### アプリを閉じても実行は続きますか？

それだけでは保証されません。ホスト側セッション管理は切断対策になりますが、ホストとプロセスが動いている必要があります。再接続時に確認してください。

### Codex 公式のモバイルクライアントですか？

いいえ。NimoteCode を使う独立した SSH ガイドです。提供元のモバイルやリモート機能は別の選択肢です。

<!-- faq:end -->

ローカル／SSH ファイルの編集と基本ターミナルから始められます。一部機能には Pro が必要です。[無料版と Pro](/ja/pro)およびアプリ内の利用状態を確認してください。AI にはモデル提供元の設定が必要で、利用料は提供元が別途請求します。

<div class="seo-cta">
  <p><strong>NimoteCode をダウンロード</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="/ja/docs/quick-start" class="home-page-btn secondary">クイックスタート</a>
  </p>
</div>
