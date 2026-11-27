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

## Nimote Connect を更新する

Host の作業を終えてから、対象の macOS・Linux で NimoteCode の更新案内を使います。手動更新や削除は上流の手順を参照し、導入時と同じユーザーで実施してください。

[Nimote Connect Releases](https://github.com/mobiledevloperlab/nimote-connect/releases) · [概要](/ja/docs/host)
