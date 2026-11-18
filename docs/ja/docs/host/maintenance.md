---
title: "サービス管理と更新 | NimoteHost"
description: "NimoteHost：サービス管理と更新の手順と注意点。"
---

# サービス管理と更新

## 運用、更新、ローカルデータ

| コマンド | 動作 |
| --- | --- |
| `nimotehost version` | 実行ファイルのバージョン。 |
| `nimotehost status` | 稼働時は `running: true`。 |
| `nimotehost capabilities` | プロトコル、機能、ツール。 |
| `nimotehost agents` | インストール済み Agent のバージョン。 |
| `nimotehost install` | 固定パスからユーザーサービスを登録・起動。 |
| `nimotehost stop` | Host と実行中タスクを停止。 |
| `nimotehost restart` | 導入済みサービスを再起動し、タスクを中断。 |
| `nimotehost uninstall` | サービスを削除し、認証情報と記録を保持。 |

導入済み CLI を使います。PowerShell では `& "$env:LOCALAPPDATA\NimoteHost\nimotehost.exe" status` で呼び出せます。停止中の導入済みサービスは `restart` で起動し、`start` はフォアグラウンド動作です。`setup` は完全な配布物を検証・導入し、`install` は配置済みの実行ファイルを登録します。

Unix の SSH 環境は、接続先を置き換えて `ssh user@host 'command -v nimotehost && nimotehost status'` で確認できます。見つからなければ `ssh user@host '$HOME/.local/share/nimotehost/nimotehost status'` を試し、非対話 PATH を修正します。ツールのパス変更後は作業を完了させ、導入済み CLI で `stop`、修正済み環境で `install` を実行します。

更新時は新しい完全な配布物を検証し、タスク完了と旧 GUI 終了後に同じユーザーでインストーラーを実行します。旧パッケージを保持し、活動中タスクの中断は拒否します。更新後はバージョン、状態、機能を確認します。ダウングレード前は状態をバックアップしてください。ファイル削除前に `uninstall` を実行します。記録と認証情報は残ります。

| OS | 設定と状態の既定ディレクトリ |
| --- | --- |
| Linux | `~/.config/nimotehost` または `$XDG_CONFIG_HOME/nimotehost` |
| macOS | `~/Library/Application Support/nimotehost` |
| Windows | `%APPDATA%\nimotehost` |

バックアップは Host 停止中に行い、所有者のみのアクセス権を維持し、認証情報や会話を公開しないでください。プロジェクトと Agent 提供元のデータは別途バックアップします。記録のコピーはプロセスを復元しません。

診断は Linux で `systemctl --user status nimotehost.service` と `journalctl --user -u nimotehost.service -n 50 --no-pager`、macOS で `launchctl print gui/$(id -u)/com.nimotehost`、Windows で `schtasks.exe /Query /TN NimoteHost /V /FO LIST` を使います。ユーザーのログイン状態と、Linux ではログアウト後の lingering ポリシーも確認します。

[概要](/ja/docs/host) · [トラブルシューティング](/ja/docs/host/troubleshooting)
