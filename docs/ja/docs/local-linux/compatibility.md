---
title: Android Local Linux Compatibility | NimoteCode
description: Review NimoteCode Local Linux device, architecture, runtime, and workload compatibility expectations before starting development on Android.
---

# Android ローカル Linux の互換性


ローカル Linux は、64 ビット ARM64 および x86_64 デバイス上の Android 8 以降をサポートします。 iOS では利用できず、32 ビット ARM デバイスはサポートされていません。バンドルされた環境は、これらのアーキテクチャの Ubuntu 24.04 入力をターゲットとしています。正確なランタイムおよびプリセット宣言は、公開されたマニフェストに属します。


## 良好なローカルワークロード


- シェル スクリプト、小規模ユーティリティ、学習、および集中的なプロジェクト作業。

- インストール後の Git 操作と軽量言語ツール。

- ファイルとコマンドをデバイス上に保持することでメリットが得られるタスク。


## 次の場合にリモート開発を優先する


- ビルドには、モバイル デバイスが快適に提供できる以上の CPU、メモリ、ストレージ、または永続的なサービスが必要です。

- プロジェクトはすでにデスクトップ コンテナ、企業ネットワーキング、ハードウェア、または既存のホスト ツールチェーンに依存しています。

- PRoot でのツールの動作、特にデバッグ、ptrace、またはプロセス制御に関しては検証されていません。


別の [Linux Presets](/docs/local-linux/presets) プロジェクトには、オプションのプリセット アーキテクチャ、Ubuntu バージョン、およびテスト ポリシーが記録されます。コンテナー テストが成功しただけでは、Android PRoot 互換性の証拠にはなりません。
