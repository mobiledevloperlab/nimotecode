---
title: Android Local Linux のインストールと最初のコマンド | NimoteCode
description: NimoteCode Local Linux をインストールし、/workspace を開いて Ubuntu とコマンド実行を確認。ツール追加、停止、リセット、削除の手順も紹介します。
---

# Android Local Linux をインストール

以下の手順で端末上の Linux ターミナルを開きます。先に[端末とアカウントの要件](/ja/docs/local-linux#local-linux-requirements)を確認し、環境とツール用の空き容量を確保してください。AI の設定は不要です。

## インストールしてワークスペースを開く

1. ようこそ画面または Explorer で **Local Linux** を選択します。
2. **Install** を選び、完了を待ちます。
3. **Start** を選び、`/workspace` を開きます。

初回インストールには同梱イメージを使い、環境ファイルはアプリ専用ストレージに保存します。追加パッケージのダウンロードにはネットワーク接続が必要です。

<DocScreenshot file="local-linux-deploy.jpg" caption="Local Linux のセットアップ画面で Install を選択します。" />

## 最初のコマンドを実行

同じワークスペースで[ターミナル](/ja/docs/terminal)を開き、次を実行します。

```sh
pwd
uname -m
cat /etc/os-release
printf 'Hello from Local Linux\n'
```

`pwd` は作業ディレクトリ、`uname -m` はアーキテクチャ、`cat /etc/os-release` は Ubuntu の情報を表示します。最後のコマンドは `Hello from Local Linux` を出力します。

Android カーネルを共有するため、`uname -a` の出力は Ubuntu のディストリビューションバージョンを示しません。

<DocScreenshot file="local-linux-terminal-uname-a.jpg" caption="Local Linux のターミナルで端末上のコマンドを実行します。" />

## プロジェクトのツールを準備

`/workspace` でファイルを開くか作成し、エディターと[ソース管理](/ja/docs/source-control)を使います。Ubuntu のパッケージマネージャーで必要なツールだけを追加してください。任意の [Linux Presets](/ja/docs/local-linux/presets) には独自の互換性と設定要件があります。

パッケージのエラーや PRoot 上の動作差は[トラブルシューティング](/ja/docs/local-linux/troubleshooting)を参照してください。

## 停止・リセット・削除

停止は作業を中断し、環境を保持します。リセット、環境削除、アプリデータ消去はファイルを削除するため、先にプロジェクトをバックアップしてください。

Android がバックグラウンドでアプリを終了した場合は Local Linux を再起動します。
