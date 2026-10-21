---
title: NimoteCode Linux Presets | Android Local Linux
description: Learn how NimoteCode Linux Presets declares optional Ubuntu development environments for Android Local Linux with manifests and SHA-256 verification.
---

# NimoteCode Linux プリセット


[NimoteCode Linux Presets](https://github.com/mobiledevloperlab/nimote-linux-presets) は、オプションのローカル Linux 開発環境用の独立したテクニカル リポジトリです。実際のマニフェスト、インストーラー、ベリファイア、スキーマ、テスト ハーネス、リリース資産を所有します。この Web サイトは、これらのファイルや rootfs をコピーしません。


## 現在のスコープ


リポジトリは、ARM64 および AMD64 上の Ubuntu 24.04 の `minimal`、`python`、`web`、および`cpp` プリセットを宣言します。現在、マニフェストでは `experimental` とマークされています。ルート マニフェストには、PRoot ランタイム バージョン、ソース URL、SHA-256、rootfs 入力メタデータ、およびプリセットごとのハッシュも記録されます。


## 検証パス


1. プリセットリポジトリで宣言されたリリースまたはリビジョンを選択します。

2. ルートマニフェストとプリセットマニフェストを読み取り、ステータス、アーキテクチャ、Ubuntu バージョン、依存関係、およびネットワーク要件を確認します。

3. `checksums.sha256` に加えて、選択したスクリプトに対して宣言された SHA-256 値を確認します。

4. 重要な作業にプリセットを使用する前に、リポジトリの検証およびテストの手順に従ってください。


これは、PRoot の下ですべてのツールが同じように動作すると主張するものではありません。リポジトリのコンテナ チェックは通常の Ubuntu の動作を検証し、Android PRoot レポートは実行時の証拠となります。 [アーキテクチャ](/docs/local-linux/architecture)、[互換性](/docs/local-linux/compatibility)、および[メインリポジトリのゲートウェイのプリセット](https://github.com/mobiledevloperlab/nimotecode/tree/main/presets)を参照してください。
