---
title: "Linux Presets：Python・Node.js・C++ の開発ツール | NimoteCode"
description: "Android Local Linux 向けの任意の Ubuntu ツールセットを紹介。実験段階の状態、対応アーキテクチャ、依存関係と SHA-256 を確認できます。"
---

# NimoteCode Linux Presets

任意の開発ツールセットは [Linux Presets リポジトリ](https://github.com/mobiledevloperlab/nimote-linux-presets)で管理されています。プロジェクトに合うものを選び、インストール前に互換性を確認してください。

## ツールセット

| ツールセット | 用途 |
| --- | --- |
| `minimal` | 基本的なコマンドライン開発ツール |
| `python` | Python 3、pip、仮想環境 |
| `web` | Ubuntu パッケージの Node.js と npm |
| `cpp` | GCC、CMake、GDB、ネイティブビルドツール |

対象は ARM64 または AMD64 の Ubuntu 24.04 です。これらは **experimental（実験段階）** です。状態、依存関係、ランタイム要件は選択した版の manifest を確認してください。

## インストール前の確認

1. 環境に合うリリースまたはリビジョンを選択します。
2. manifest を読み、`checksums.sha256` と対象スクリプトのハッシュを検証してから、記載の手順でインストールします。
3. Android PRoot のテスト記録を確認します。Ubuntu コンテナのテスト成功だけでは端末互換性は保証されません。

初回は[セットアップ](/ja/docs/local-linux/getting-started)を参照。制限は[互換性](/ja/docs/local-linux/compatibility)、検証方法は[安全性と整合性](/ja/docs/local-linux/security-integrity)を参照してください。
