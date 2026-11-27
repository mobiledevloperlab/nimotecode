---
title: "接続・ターミナル・タスク | NimoteHost"
description: "NimoteHost：接続・ターミナル・タスクの手順と注意点。"
---

# 接続・ターミナル・タスク

まず通常の SSH を確認します。到達できる SSH アドレスを使うか、マシン一覧で接続可能なペアリング済み PC を選んでください。Nimote Connect のインターネット接続にはペアリングとリモートアクセスの有効化が必要です。

## スマートフォンから接続する {#_3-スマートフォンから接続する}

NimoteCode の **マシン** で PC の SSH 接続を選び、**Host** を開きます。Host が見つからない場合は **Nimote Connect をインストール** を選びます。ウィザードで SSH ホストの選択、パッケージのダウンロード、導入の確認を行います。求められたらデバイスを承認してください。対応する 64 ビット版 macOS・Linux ではアプリ内で導入と更新ができます。

<div class="doc-screenshots">
  <DocScreenshot file="host-mode.png" caption="起動画面では IDE、Terminal、AI と並んで Host を選べます。" />
  <DocScreenshot file="host-setup.png" caption="接続前の画面では、サービスの導入と SSH 接続の選択を案内します。" />
</div>

Host が未導入、停止中、非互換の場合は、先にパソコン側で対処します。見つかっただけで停止中のサービスが自動起動することはありません。

## ターミナルを開く {#_4-ターミナルを開く}

右上の + から Terminal を選び、リモートに存在するフォルダーを指定して Start session を押します。pwd と echo Host connected を実行して場所と出力を確認します。Windows PowerShell では場所の確認に Get-Location を使います。

<div class="doc-screenshots">
  <DocScreenshot file="host-terminal.png" caption="完了したリモートチェックの出力：3 件の Python テストが 4 回とも成功。" />
</div>

例は /tmp/nimote-host-guide を使っています。macOS では /private/tmp/nimote-host-guide と表示される場合があります。普段は自分のプロジェクトを指定し、大切なファイルを一時フォルダーに置かないでください。リストに戻ってもシェルは続きます。終了するなら exit か停止ボタンを使います。

## 同じセッションに戻る {#_5-同じセッションに戻る}

Sessions で名前やフォルダーを検索し、All、Running、History で絞り込みます。メニューから固定や名前変更もできます。

<div class="doc-screenshots">
  <DocScreenshot file="host-sessions.png" caption="Host のセッション履歴：実行中、完了、停止したプロセス。" />
</div>

SSH が切れても、同じ Host に接続し直せます。サービスとプロセスが動いていれば、元のコマンドを再実行せずに戻れます。ただし Host や OS の再起動後にプロセスは復活しません。未完了のセッションは中断扱いになります。ユーザーのログアウト後に続くかどうかも OS のサービス設定に依存します。

開始がタイムアウトしたら、作り直す前にリストを更新し、すでに作成されていないか確認してください。

## 単発のタスクを実行する {#_6-単発のタスクを実行する}

+ → Task でフォルダーとコマンドを指定します。まず echo Host connected で試してから、プロジェクトのビルドやテストを実行します。終了コードとログを確認してください。「テスト」という名前だけでは成功を判断できません。継続して入力する処理には Terminal を使います。

[概要](/ja/docs/host) · [Agent とタスク受信箱](/ja/docs/host/agents)
