---
title: "サービス管理と更新 | NimoteHost"
description: "NimoteHost：サービス管理と更新の手順と注意点。"
---

# サービス管理と更新

Host を実行する PC で、SSH に使うアカウントから操作します。コマンドが PATH にない場合は下記の絶対パスを使用します。

まず次のコマンドでサービスを確認します。以降のコマンドでも `nimotehost` の代わりに絶対パスを使用できます。

```sh
"$HOME/.local/share/nimotehost/nimotehost" deploy status
```

```powershell
& "$env:LOCALAPPDATA\NimoteHost\nimotehost.exe" deploy status
```

## 状態の確認と起動

| コマンド | 動作 |
| --- | --- |
| `nimotehost --version` | 導入済み CLI のバージョンを表示します。 |
| `nimotehost deploy status` | サービスの状態を表示します。`"running": false` は停止中です。 |
| `nimotehost deploy start` | 導入済みのバックグラウンドサービスを起動し、応答を待ちます。 |
| `nimotehost deploy stop` | 実行中の作業がないときにサービスを停止します。 |
| `nimotehost agents` | 稼働中の Host が見つけた Agent ツールを確認します。 |
| `nimotehost tools refresh` | セッションを再起動せずツール検出を更新します。 |

## Community の更新と削除

手動更新では実行中の作業を終え、対応する新しい配布物を検証し、展開先から `setup` を実行します。Connect 付属の Host は Connect から更新します。

`deploy uninstall` は停止可能なサービスと配布物を削除し、認証情報とセッション記録を保持します。展開したパッケージか、インストール先の外にある検証済みの実行ファイルから実行します。エディションの変更は [Community ガイド](https://github.com/mobiledevloperlab/nimotehost/blob/master/docs/community.md)を参照してください。

[詳細な導入と復旧](https://github.com/mobiledevloperlab/nimotehost/blob/master/docs/deployment.md)

[概要](/ja/docs/host) · [トラブルシューティング](/ja/docs/host/troubleshooting)
