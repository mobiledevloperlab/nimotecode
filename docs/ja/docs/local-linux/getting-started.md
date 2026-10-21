---
title: Android Local Linux Getting Started | NimoteCode
description: Prepare and open NimoteCode Local Linux on a supported Android device, then choose appropriate local or remote development work.
---

# Android ローカル Linux 入門


Android 上の小規模な Ubuntu ベースの開発環境にはローカル Linux を使用します。 Android 8 以降の 64 ビット ARM64 および x86_64 デバイスで利用でき、Android ルートは必要ありません。また、iPhone または iPad では利用できません。


## インストール前


- 基本環境とインストールする予定のプロジェクト ツールに使用できる十分なデバイス ストレージを確保してください。

- 初期セットアップとその後の APT パッケージのインストールにはネットワーク接続を使用します。

- ローカル作業をコンパクトにするにはローカル Linux を選択します。プロジェクトが既存のワークステーション、サーバー、コンテナ、または長いビルドに依存している場合は、[SSH](/docs/ssh) を使用します。


## ワークスペースを開く


1. ワークスペースまたはエクスプローラーセレクターから**ローカルLinux**を選択します。

2. [**インストール**]を選択し、準備が完了するまで待ってから、[**開始**]を選択します。

3. デフォルトの`/workspace`ディレクトリを開きます。

4. [ターミナル](/docs/terminal)で環境を確認し、プロジェクトに必要なツールチェーンのみを追加します。

5. そのワークスペースでエクスプローラ、エディタ、および[ソース管理](/docs/source-control)を使用します。


基本環境は、Ubuntu、Bash、Git、および SSH の基盤を提供します。すべてのデスクトップ ツールまたはデバッガーが PRoot の下で同じように動作するという保証はありません。ローカルワークロードを選択する前に[互換性](/docs/local-linux/compatibility)を読み、宣言されたオプションのツールセットについては[Linuxプリセット](/docs/local-linux/presets)をお読みください。
