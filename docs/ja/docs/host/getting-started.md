---
title: "ダウンロードと導入 | NimoteHost"
description: "NimoteHost：ダウンロードと導入の手順と注意点。"
---

# ダウンロードと導入

スマートフォンからダウンロードする場合も、**NimoteHost を動かすパソコン／サーバーの OS と CPU アーキテクチャ**に合わせて選んでください。スマートフォンの CPU では決まりません。CLI とデスクトップ版を選び、NimoteCode と互換性のあるバージョンを使います。

[ハードウェアとパッケージ選択](/ja/docs/host/compatibility)

## 用意するもの

SSH で接続できる Linux、macOS、Windows のパソコン、Host 対応の NimoteCode ビルド、対応する NimoteHost、リモートアカウントから開けるプロジェクトフォルダーを用意します。後で指定するパスはスマートフォンではなくパソコン側のものです。

SSH が初めてなら、先に [SSH の設定](/ja/docs/ssh)を済ませてください。Windows は [Windows SSH](/ja/docs/windows-ssh-sftp)も参照してください。Host は SSH を設定しません。

## SSH 経由でインストールまたは更新する {#install-over-ssh}

NimoteCode 2.5.0 の **Host** を開き、SSH で接続して Host パネルで状態を確認します。インストールを承認すると、対応するパネルに表示される NimoteHost 公式版の CLI パッケージがダウンロード、検証され、SSH アカウントでインストールと起動が行われます。PC が GitHub Releases に接続できる必要があります。インストール済みで停止している場合はパネルから起動できます。

パネルに進捗、エラー、再試行が表示されます。更新通知は Host ヘッダーから開き直せます。更新にセッション停止が必要な場合は、影響を確認してから承認してください。デスクトップ GUI やソースからのビルドは以下の手順を使います。

Host パネルでエディションを識別できた場合は、そこに表示されるセットアップまたは更新を使用します。Community 版の導入には対応プラットフォーム向けの公開済み CLI パッケージが必要です。ペアリング済みの PC にサービスがない場合は Nimote Connect の案内に従ってください。エディションを識別できない場合は、配布元を確認してから更新してください。

## 1. パッケージを選ぶ

[NimoteHost Community](https://github.com/mobiledevloperlab/nimotehost/releases/tag/community-v2.5.0)で、パソコンに合う完全な配布パッケージを選びます。サーバーは CLI だけで使えます。パソコンでも管理画面を開くなら GUI 付きにします。

| OS | 表記 | CPU |
| --- | --- | --- |
| Linux | linux | Intel/AMD 64 ビットは amd64、ARM 64 ビットは arm64 |
| macOS | darwin | Apple Silicon は arm64、Intel は amd64 |
| Windows | windows | x64 は amd64、ARM は arm64 |

Linux と Windows には 32 ビット x86 用の 386 CLI もあります。GUI は含みません。併せて SHA256 ファイルを取得し、Linux の sha256sum、macOS の shasum -a 256、PowerShell の Get-FileHash -Algorithm SHA256 で計算した値と照合します。

展開したバイナリー、スクリプト、ライセンス、BUILD.json、MODULES.json、SHA256SUMS は一緒に保管してください。サービスが参照するファイルを後から削除しないでください。対応パッケージがない場合は[リポジトリの手順](https://github.com/mobiledevloperlab/nimotehost)でビルドできます。ソースからの導入には Go 1.26.5 以降が必要です。

## 2. パソコンでインストールする {#host-install}

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

### パッケージとソースからの導入 {#host-source}

CLI は `nimotehost-<version>-<os>-<arch>`、デスクトップは `nimotehost-gui-<version>-<os>-<arch>` という名前です。Linux/macOS は `.tar.gz`、Windows は `.zip` です。GitHub の Source code ではなく完全なバイナリー配布物を選び、添付の `.sha256` と照合してから全体を展開します。Linux デスクトップは glibc 2.35 以降が必要で、macOS パッケージは署名・公証されていません。

Git と Go 1.26.5 以降を用意し、一般ユーザーで実行します。

```sh
git clone https://github.com/mobiledevloperlab/nimotehost.git
cd nimotehost
go run ./tools/install
```

完全なソースの提供を受けた場合は、そのルートで最後の行を実行します。PowerShell にも対応し、CLI をビルド・検証・導入して起動します。導入せず配布物を作る場合は `go run ./tools/build`、デスクトップは `go run ./tools/build -gui` を使い、後者にはネイティブ SDK と C コンパイラーが必要です。

### サービスとデスクトップ管理画面

Linux は systemd ユーザーマネージャー、macOS はユーザーの GUI ログイン、Windows はログイン時のユーザー別タスクを使います。利用できない環境ではフォアグラウンドで試してください。パソコンを起動状態に保ち、直接または VPN で SSH に到達できるようにします。

導入先は Linux/macOS が `~/.local/share/nimotehost`、Windows が `%LOCALAPPDATA%\NimoteHost` です。PATH に追加するか絶対パスで実行します。GUI は `NimoteHost.app`、`nimotehost-gui.exe`、`nimotehost-gui` を開きます。Overview はサービス、Sessions はセッション、Devices は制限付きデバイス、Settings は設定、Help & diagnostics はログを表示します。ウィンドウを閉じてもタスクは続き、停止操作で終了します。デバイスの制限には登録のほか SSH 鍵の設定が必要です。

[概要](/ja/docs/host) · [接続・ターミナル・タスク](/ja/docs/host/sessions)
