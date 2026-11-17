---
title: Host の使い方：NimoteHost のインストールと接続 | NimoteCode
description: Linux、macOS、Windows に NimoteHost を導入し、SSH で接続してターミナル、タスク、Agent を使う手順。
---

# Host でリモートの作業を続ける

スマートフォンから処理を始め、アプリを離れてから結果を見たいときは Host を使います。開発用パソコンの NimoteHost がタスクとターミナルを管理し、スマートフォンは SSH で出力を表示したり入力を送ったりします。

## Host でできること

- **リモート作業の続行：** スマートフォンからターミナルやタスクを開始し、アプリを離れた後に再接続して、出力の確認や実行中のセッションの操作を続けられます。
- **Agent セッションの管理：** パソコンにインストール済みの対応 Agent を使い、ツールの実行内容を確認し、権限リクエストに応答して会話を続けられます。
- **作業の整理：** セッションを検索、絞り込み、固定できます。Host が対応していれば、タスク受信箱で状態、検証記録、コードの変更も確認できます。
- **既存の開発環境の利用：** コマンドと Agent はリモートパソコンのプロジェクトフォルダーで実行されます。スマートフォンは SSH で接続するため、Host のローカル HTTP ポートをインターネットに公開する必要はありません。

外出先からビルド、テスト、Agent の作業を確認したいときに便利です。Host とプロセスは動作し続ける必要があります。スリープ、ログアウト、Host の再起動で作業が中断される場合があり、再起動後に元のプロセスは復元されません。Agent、タスク受信箱、プラグインの利用可否は接続先の Host によって異なります。

この手順は 2.4.0 の実装に基づきます。Host は開発プレビューで、利用できる機能は接続先によって変わります。画像は実機 Android、英語表示、ライトテーマです。撮影時のアプリ表示は 2.3.1（Build 64）、Host は 2.4.0 のローカルビルドでした。

## 用意するもの

SSH で接続できる Linux、macOS、Windows のパソコン、NimoteCode 2.4.0、対応する NimoteHost、リモートアカウントから開けるプロジェクトフォルダーを用意します。後で指定するパスはスマートフォンではなくパソコン側のものです。

SSH が初めてなら、先に [SSH の設定](/ja/docs/ssh)を済ませてください。Windows は [Windows SSH](/ja/docs/windows-ssh-sftp)も参照してください。Host は SSH を設定しません。

## 1. パッケージを選ぶ

[NimoteHost のリリースページ](https://github.com/mobiledevloperlab/nimotehost/releases)で、パソコンに合う完全な配布パッケージを選びます。サーバーは CLI だけで使えます。パソコンでも管理画面を開くなら GUI 付きにします。

| OS | 表記 | CPU |
| --- | --- | --- |
| Linux | linux | Intel/AMD 64 ビットは amd64、ARM 64 ビットは arm64 |
| macOS | darwin | Apple Silicon は arm64、Intel は amd64 |
| Windows | windows | x64 は amd64、ARM は arm64 |

Linux と Windows には 32 ビット x86 用の 386 CLI もあります。GUI は含みません。併せて SHA256 ファイルを取得し、Linux の sha256sum、macOS の shasum -a 256、PowerShell の Get-FileHash -Algorithm SHA256 で計算した値と照合します。

展開したバイナリー、スクリプト、ライセンス、BUILD.json、MODULES.json、SHA256SUMS は一緒に保管してください。サービスが参照するファイルを後から削除しないでください。対応パッケージがない場合は[リポジトリの手順](https://github.com/mobiledevloperlab/nimotehost)でビルドできます。ソースからの導入には Go 1.26.5 以降が必要です。

## 2. パソコンでインストールする

SSH に使うアカウントで、展開先のターミナルから実行します。Linux/macOS では sudo を付けません。

```sh
sh scripts/install.sh
./nimotehost status
./nimotehost capabilities
```

Windows は PowerShell で実行します。

```powershell
.\scripts\install.ps1
.\nimotehost.exe status
.\nimotehost.exe capabilities
```

インストーラーはパッケージを検証し、固定のユーザーディレクトリへコピーしてユーザーサービスを設定します。status が running: true を返したら接続できます。Unix では SSH の非対話環境からもコマンドが見つかる PATH が必要です。Windows の対応クライアントは同じユーザーの discovery.json を読み、固定のインストール先と SSH PATH も確認します。

まず試すだけなら、展開先で ./nimotehost start、Windows は .\nimotehost.exe start を実行し、ウィンドウを開いたままにします。サービスが動いていれば二重起動は不要です。Host は SSH や Agent をインストールしません。スマートフォンは SSH 経由で接続するので、Host のローカル HTTP ポートをインターネットへ公開する必要はありません。

## 3. スマートフォンから接続する

モード選択で Host を開き、SSH connections を押します。Host をインストールしたパソコンとアカウントを選びます。未登録なら New Remote Connection で追加し、初回のホスト鍵を確認してください。

<div class="doc-screenshots">
  <DocScreenshot file="host-mode.png" caption="起動画面では IDE、Terminal、AI と並んで Host を選べます。" />
  <DocScreenshot file="host-setup.png" caption="接続前の画面では、サービスの導入と SSH 接続の選択を案内します。" />
</div>

Host が未導入、停止中、非互換の場合は、先にパソコン側で対処します。見つかっただけで停止中のサービスが自動起動することはありません。

## 4. ターミナルを開く

右上の + から Terminal を選び、リモートに存在するフォルダーを指定して Start session を押します。pwd と echo Host connected を実行して場所と出力を確認します。Windows PowerShell では場所の確認に Get-Location を使います。

<div class="doc-screenshots">
  <DocScreenshot file="host-terminal.png" caption="pwd と echo Host connected の出力。リストから開き直しても残っています。" />
</div>

例は /tmp/nimote-host-guide を使っています。macOS では /private/tmp/nimote-host-guide と表示される場合があります。普段は自分のプロジェクトを指定し、大切なファイルを一時フォルダーに置かないでください。リストに戻ってもシェルは続きます。終了するなら exit か停止ボタンを使います。

## 5. 同じセッションに戻る

Sessions で名前やフォルダーを検索し、All、Running、History で絞り込みます。メニューから固定や名前変更もできます。

<div class="doc-screenshots">
  <DocScreenshot file="host-sessions.png" caption="デモ用フォルダーと Running で絞り込み、実行中のターミナルを表示しています。" />
</div>

SSH が切れても、同じ Host に接続し直せます。サービスとプロセスが動いていれば、元のコマンドを再実行せずに戻れます。ただし Host や OS の再起動後にプロセスは復活しません。未完了のセッションは中断扱いになります。ユーザーのログアウト後に続くかどうかも OS のサービス設定に依存します。

開始がタイムアウトしたら、作り直す前にリストを更新し、すでに作成されていないか確認してください。

## 6. 単発のタスクを実行する

+ → Task でフォルダーとコマンドを指定します。まず echo Host connected で試してから、プロジェクトのビルドやテストを実行します。終了コードとログを確認してください。「テスト」という名前だけでは成功を判断できません。継続して入力する処理には Terminal を使います。

## 7. Agent と会話する

パソコン側に Codex、Claude Code、OpenCode をインストールし、認証を済ませます。Claude の構造化対話には対応する claude-agent-acp も必要です。Host はこれらをダウンロードせず、モデルの利用権も含みません。

+ → Agent でフォルダーと Installed agent を確認します。Agent タブがなければ、CLI、認証、サービスの PATH を確認してください。最初は権限要求を一件ずつ確認する設定が分かりやすいです。Smart execution は検証可能な読み取り、検索、構造化編集を自動処理しますが、機密性の高い操作や判断できないものは確認します。

<div class="doc-screenshots">
  <DocScreenshot file="host-agent-form.png" caption="Agent の作成フォーム。設定だけを撮影しており、モデルのタスクは開始していません。" />
</div>

まず「テストコマンドを調べて。まだ編集しないで」のような小さな依頼で試し、ツールの出力と承認内容を確認します。自動承認でも Agent のサンドボックスは残り、コードの自動公開とは別設定です。独立 worktree はコミット済み HEAD から作成され、元の未コミットファイルは移しません。モデル、コマンド、履歴再開、実行中の追加指示は提供元の対応状況によります。

## 8. タスク受信箱で確認する

Task inbox が表示される Host では、承認待ち、失敗、実行中、確認待ちの結果をまとめて見られます。元の会話、差分、実際に実行されたテストとその終了コード、対象リビジョンを確認します。Agent の「成功しました」という文章だけをテスト結果にしないでください。

確認後は処理済みやアーカイブにできますが、承認待ちは隠せません。修正は元の会話へ戻ります。Git を開く前にはホストとフォルダーも確認してください。

GitHub Issue の依頼には、対応する Host と、インストール・認証済みの gh が必要です。スマートフォンの GitHub ログインは Host にコピーされません。最初は手動公開を選び、差分と検証を見てから PR を作ります。自動公開は依頼時に明示的に選ぶ設定です。PR の自動マージは行いません。

## 9. Host プラグインを開く

アプリ設定のプラグインから接続先の提供内容を確認し、利用可能なものをサイドバーで開きます。フォームはプラグインによって異なります。権限や互換性のエラーは解消してから再試行してください。[プラグインの説明](/ja/docs/plugins)も参照できます。

## 接続できないとき

まず通常の SSH が使えるか確認します。Host が見つからなければ、アカウント、インストール先、SSH PATH、Windows の同じユーザーの discovery.json を確認します。停止中ならパソコンで nimotehost status を確認し、導入方法に合わせて起動します。非互換なら App と Host のバージョンを合わせます。

表示できる出力がキャッシュだけの場合もあります。接続状態とプロセスが動いているか、指定したリモートフォルダーへ入れるかを確認してください。作成結果が不明なら元のセッションを探してから再試行します。停止、再起動、更新は実行中の作業を終えてから行ってください。

[SSH](/ja/docs/ssh) · [Agent](/ja/docs/ai) · [タスク](/ja/docs/tasks)
