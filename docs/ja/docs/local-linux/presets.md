---
title: "Linux Presets：Python・Node.js・C++ の開発ツール | NimoteCode"
description: "Android Local Linux 向けの任意の Ubuntu ツールセットを紹介。実験段階の状態、対応アーキテクチャ、依存関係と SHA-256 を確認できます。"
---

# NimoteCode Linux Presets

任意の開発ツールセットは [Linux Presets リポジトリ](https://github.com/mobiledevloperlab/nimote-linux-presets)で管理されています。プロジェクトに合うものを選び、インストール前に互換性を確認してください。

## Android アプリでツールキットを導入する {#android-app}

NimoteCode 2.5.0 で Ubuntu をインストールしたら、ローカル Linux 管理画面の開発ツールキットを開きます。依存関係と使用容量の目安を確認し、インストールしてください。確認操作でインストール済みのツールを検証できます。アプリは固定されたカタログのリビジョンとスクリプトのハッシュを検証します。コミュニティのツールキットはメンテナーがリビジョンを確認して採用すると表示されます。利用可能な項目はアプリのカタログで確認できます。実験段階の C++ ツールキットには引き続き制限があります。

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
