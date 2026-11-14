---
title: Android で root 不要の Ubuntu｜Local Linux | NimoteCode
description: Android で Ubuntu、Bash、Git、SSH を root 権限なしで利用。対応端末、用途、必要なツール、SSH によるリモート開発との使い分けを確認できます。
---

# Android Local Linux

Local Linux は、Android 端末で動く Ubuntu 開発環境です。Android の root 権限なしで、NimoteCode のエディターと Bash、Git、SSH を同じワークスペースで使えます。

[インストールして最初のコマンドを実行](/ja/docs/local-linux/getting-started)

## できること

- 端末上で Shell スクリプトや小規模なプロジェクト作業を実行。
- ファイルを編集し、Git の状態と差分を確認。
- 必要な言語ツールを追加、または任意の [Linux Presets](/ja/docs/local-linux/presets) を選択。

既存のサーバー環境、Docker、長時間のビルドには [SSH ワークスペース](/ja/docs/ssh) を利用してください。ローカルツールの選択前に[互換性と制限](/ja/docs/local-linux/compatibility)を確認できます。

<div id="local-linux-requirements"></div>

## 動作要件

- **端末**：Android 8 以降、ARM64 または x86_64 の 64 ビット版アプリ。iPhone、iPad、32 ビット ARM は非対応。
- **アクセス**：Early Access Pro が必要です。利用可否はアプリの[アカウント状態](/ja/docs/account-subscription)で確認してください。
- **ツール**：Ubuntu、Bash、Git、SSH を同梱。言語ツールチェーン、言語サーバー、デバッガー、外部 Agent CLI は別途設定が必要。

PRoot を通じて Android カーネルを共有します。仮想マシンや Android の root 権限は提供しません。バックグラウンド処理は Android のプロセス管理に従います。

## 次のステップ

- **[トラブルシューティング](/ja/docs/local-linux/troubleshooting)**：インストール、パッケージ、バックグラウンド停止の対処。
- **[仕組み](/ja/docs/local-linux/architecture)** · **[安全性と検証](/ja/docs/local-linux/security-integrity)** · **[ソースとライセンス](/ja/docs/local-linux-source)**
