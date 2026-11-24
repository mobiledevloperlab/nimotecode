---
title: Android で root 不要の Ubuntu｜Local Linux | NimoteCode
description: Android で Ubuntu、Bash、Git、SSH を root 権限なしで利用。対応端末、用途、必要なツール、SSH によるリモート開発との使い分けを確認できます。
---

# Android Local Linux

Android 上の Ubuntu で小さなスクリプトや Git、軽量な開発ツールを使えます。root 権限は不要です。

[インストールして最初のコマンドを実行](/ja/docs/local-linux/getting-started)

Docker、長時間動くサービス、既存 PC のツールが必要なら、[SSH ワークスペース](/ja/docs/ssh)を使います。[Local Linux の制約](/ja/docs/local-linux/compatibility)

<div id="local-linux-requirements"></div>

## 動作要件

- **端末**：Android 8 以降、ARM64 または x86_64 の 64 ビット版アプリ。iPhone、iPad、32 ビット ARM は非対応。
- 対応 Android 端末では基本のローカル Linux を無料で利用できます。開発ツールの管理と共有フォルダーへのインポートには Pro が必要です。
- **ツール**：Ubuntu、Bash、Git、SSH を同梱。言語ツールチェーン、言語サーバー、デバッガー、外部 Agent CLI は別途設定が必要。

PRoot を通じて Android カーネルを共有します。仮想マシンや Android の root 権限は提供しません。バックグラウンド処理は Android のプロセス管理に従います。

## 次のステップ

- **[トラブルシューティング](/ja/docs/local-linux/troubleshooting)**：インストール、パッケージ、バックグラウンド停止の対処。
- **[仕組み](/ja/docs/local-linux/architecture)** · **[安全性と検証](/ja/docs/local-linux/security-integrity)** · **[ソースとライセンス](/ja/docs/local-linux-source)**
