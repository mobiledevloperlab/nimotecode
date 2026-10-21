---
title: Android Local Linux Troubleshooting | NimoteCode
description: Diagnose common NimoteCode Local Linux installation, package, architecture, and lifecycle issues on Android.
---

# Android ローカル Linux のトラブルシューティング


## ローカル Linux が表示されないか、インストールされません


デバイスが Android 8 以降を実行し、64 ビット ARM64 または x86_64 アプリ環境があることを確認します。利用可能なストレージとネットワーク アクセスを確認し、ローカル Linux セレクターから再試行してください。ローカル Linux は、iOS または 32 ビット ARM デバイスでは使用できません。


## パッケージのインストールに失敗する


最初に完全な APT エラーを読みます。一般的な原因としては、ストレージが利用できない、パッケージ インデックスが利用できない、ネットワーク/DNS 障害、または同時パッケージ トランザクションが挙げられます。ロック ファイルを削除したり、任意の回復コマンドを実行したりしないでください。アクティブなトランザクションが終了するのを待ち、パッケージ マネージャーの報告された状態を使用します。


## ツールはコンテナ内では動作しますが、Android では動作しません


PRoot は VM ではありません。アーキテクチャ、パッケージの可用性、および ptrace、`/proc`、プロセス作成、シンボリックリンク、および実行可能ビットに関する前提条件を再確認します。ツールセットがプリセットとして提供される場合は、プリセット リポジトリの [ランタイム互換性とテスト レコード](https://github.com/mobiledevloperlab/nimote-linux-presets/tree/master/docs) を優先します。


## アプリがバックグラウンドになった後に環境が停止しました


Android はバックグラウンド プロセスを一時停止または停止する場合があります。 [ローカル Linux] ページに戻り、環境を再起動して、ワークスペースに再接続します。長期間存続するサービスまたはデスクトップクラスのリソースを必要とする作業には、リモート SSH ホストを使用します。


ソース/ライセンスに関する問題については、[ローカル Linux ソースとライセンス](/docs/local-linux-source)を参照してください。セキュリティと検証については、[セキュリティと整合性](/docs/local-linux/security-integrity)を参照してください。
