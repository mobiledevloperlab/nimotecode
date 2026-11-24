---
title: "ハードウェアとパッケージ選択 | NimoteHost"
description: "スマートフォンからダウンロードする場合も、NimoteHost を動かすパソコン／サーバーの OS と CPU アーキテクチャに合わせて選んでください。スマートフォンの CPU では決まりません。CLI とデスクトップ版を選び、NimoteCode と互換性のあるバージョンを使います。"
---

# ハードウェアとパッケージ選択

スマートフォンからダウンロードする場合も、**NimoteHost を動かすパソコン／サーバーの OS と CPU アーキテクチャ**に合わせて選んでください。スマートフォンの CPU では決まりません。CLI とデスクトップ版を選び、NimoteCode と互換性のあるバージョンを使います。

## 現在の配布対象

NimoteHost Community 2.5.0 の配布対象です。ネイティブ環境とスマートフォン／Agent の完全な実機検証は未完了です。選択したリリースの添付ファイルを確認してください。

| Host の OS／CPU | パッケージ表記 | CLI | デスクトップ |
| --- | --- | --- | --- |
| Linux · Intel/AMD x64 | `linux-amd64` | ✓ | ✓ |
| Linux · ARM64 | `linux-arm64` | ✓ | ✓ |
| Linux · x86 (32-bit) | `linux-386` | ✓ | — |
| macOS · Apple Silicon | `darwin-arm64` | ✓ | ✓ |
| macOS · Intel | `darwin-amd64` | ✓ | ✓ |
| Windows · Intel/AMD x64 | `windows-amd64` | ✓ | ✓ |
| Windows · ARM64 | `windows-arm64` | ✓ | ✓ |
| Windows · x86 (32-bit) | `windows-386` | ✓ | — |

## Host のアーキテクチャを確認

Linux／macOS では Host で `uname -m` を実行します。`x86_64` は `amd64`、`aarch64`／`arm64` は `arm64`、`i386`／`i686` は 32 ビット x86（`386`、Linux CLI のみ）です。Windows は「設定 → システム → バージョン情報 → システムの種類」で CPU と OS の両方を確認します。64 ビット CPU でも OS が 32 ビットなら 32 ビット版を選びます。

`amd64` は Intel／AMD の x64、`arm64` は Apple Silicon を含む 64 ビット ARM です。32 ビット ARM、32 ビット GUI、32 ビット macOS は配布対象外です。ARM64 では対応する 64 ビット OS も必要です。

## 要件とサポート範囲

画面のないサーバーは CLI、管理画面が必要なら CLI を含むデスクトップ版を選びます。対応するネイティブデスクトップ環境が必要です。Linux デスクトップは glibc 2.35 以降が必要で、Alpine／musl の互換性は保証しません。macOS 版は未署名・未公証です。

共通の最低 RAM・ディスク容量・GPU 要件は公開されていません。プロジェクト、同時タスク、Agent の要件で判断してください。クラウド Agent の利用だけでローカルモデルや GPU が必要になるわけではありません。

バックグラウンド動作は Linux の systemd ユーザーマネージャー、macOS の GUI ログイン、Windows のログオンタスクを使います。使えない場合は CLI を前景で試せます。SSH は別途設定し、Host のスリープとネットワーク到達性を確認します。

[ソースとビルド対象](https://github.com/mobiledevloperlab/nimotehost/blob/master/README.md) · [リリース](https://github.com/mobiledevloperlab/nimotehost/releases/tag/community-v2.5.0) · [未完了の検証](https://github.com/mobiledevloperlab/nimotehost/blob/master/docs/pending.md)

[ダウンロードと導入](/ja/docs/host/getting-started)
