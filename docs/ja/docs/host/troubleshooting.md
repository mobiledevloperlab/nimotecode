---
title: "トラブルシューティング | NimoteHost"
description: "NimoteHost：トラブルシューティングの手順と注意点。"
---

# トラブルシューティング

まず通常の SSH を確認します。到達できる SSH アドレスを使うか、マシン一覧で接続可能なペアリング済み PC を選んでください。Nimote Connect のインターネット接続にはペアリングとリモートアクセスの有効化が必要です。

## 接続できないとき

まず通常の SSH が使えるか確認します。Host が見つからなければ、アカウント、インストール先、SSH PATH、Windows の同じユーザーの discovery.json を確認します。非互換なら App と Host のバージョンを合わせます。

表示できる出力がキャッシュだけの場合もあります。接続状態とプロセスが動いているか、指定したリモートフォルダーへ入れるかを確認してください。作成結果が不明なら元のセッションを探してから再試行します。停止、再起動、更新は実行中の作業を終えてから行ってください。

導入済みサービスは `nimotehost deploy status` で確認し、`nimotehost deploy start` で起動できます。導入してログイン済みの Agent が見つからない場合は `nimotehost tools refresh` の後に `nimotehost agents` を実行します。

[SSH](/ja/docs/ssh) · [Agent](/ja/docs/ai) · [タスク](/ja/docs/tasks)

[概要](/ja/docs/host) · [ハードウェアとパッケージ選択](/ja/docs/host/compatibility)
