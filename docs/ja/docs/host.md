---
title: "Host：オープンソースのリモートタスクと Agent | NimoteCode"
description: "切断後もパソコンでターミナル、タスク、Agent を継続。NimoteHost の機能、Apache-2.0 ソース、変更、貢献、導入と運用を紹介します。"
---

# Host：オープンソースのリモートタスクと Agent ワークスペース

スマートフォンから処理を始め、アプリを離れてから結果を見たいときは Host を使います。開発用パソコンの NimoteHost がタスクとターミナルを管理し、スマートフォンは SSH で出力を表示したり入力を送ったりします。

## Host の機能と得られること

開発パソコンで実行し、スマートフォンから進捗を確認できます。既存のファイルとツールを使い、判断やレビューが必要なときに作業へ戻れます。

| 機能 | 得られること |
| --- | --- |
| ターミナルとタスク管理 | ビルド、テスト、スクリプトを実行。切断後も管理対象プロセスが続き、再接続で出力と操作に戻れます。 |
| 対応 Agent との協働 | Codex、Claude Code、OpenCode の会話、ツール結果、承認を確認し、対応時は追加指示を送れます。 |
| セッションと受信箱 | 検索、絞り込み、固定を使い、承認待ち、失敗、レビュー待ちを見つけられます。 |
| 検証とコードレビュー | 実際のテスト記録、終了コード、差分を確認。対応 Host には公開方針を指定して GitHub Issue を依頼できます。 |
| 既存環境の利用 | Linux、macOS、Windows の CLI またはデスクトップ管理画面で、既存のプロジェクトを使えます。 |
| オープンソース | 完全な Host ソースを確認・ビルド・変更し、連携の追加や改善の貢献ができます。 |

外出前にテストを開始して後から結果を確認したり、Agent の修正中に承認を処理し、完了後に差分をレビューできます。Host とパソコンは稼働を続ける必要があります。再起動は元のプロセスを復元しません。各機能は Host とインストール済みツールに依存します。

## NimoteCode と NimoteHost

NimoteCode はクライアント、NimoteHost はパソコン側の実行サービスです。Host は Linux、macOS、Windows 向けの CLI とデスクトップ管理画面を提供し、[専用リポジトリ](https://github.com/mobiledevloperlab/nimotehost)で完全なソースを Apache-2.0 として提供します。NimoteCode は商用クローズドソースです。Host は単独でも動作し、RPC、Go クライアント、MCP で連携できます。

接続は **NimoteCode → SSH → NimoteHost → プロジェクトのツール**です。追加の Nimote アカウントや Host の公開ポートは不要で、認証情報はパソコンに残ります。コマンドは Host の OS アカウント権限で動くため、ユーザーを分離する場合は OS アカウントを分けてください。通常の SSH に Host は不要です。Host は切断後のタスク継続と対応 Agent の管理を追加します。

リポジトリと配布物は公開後に利用できます。404 やパッケージがない場合は、提供された完全なプレビュー配布物・ソースを使うか公開を待ってください。2.4.0 実装の Host モードは公開予定の 2.4.1 に含まれます。サービスを導入しても旧アプリに入口は追加されません。

## 完全なソース：確認、変更、貢献

**NimoteHost の完全なソースは Apache-2.0 です。** Host ランタイム、CLI、デスクトップ管理画面、連携 SDK を含みます。実行、認証、履歴の実装を確認し、自分でビルド・導入できます。NimoteCode クライアントは商用クローズドソースです。

- リポジトリを Fork し、動作や画面、導入方法を変更できます。アプリ連携のプロトコル互換性は維持してください。
- `pkg/pluginsdk` でプラグイン、`pkg/hostclient` で Go 連携を開発し、RPC や MCP に接続できます。MCP は既定で読み取り専用です。
- 不具合や提案は Issue、修正、Agent アダプター、翻訳、文書は Pull Request で貢献できます。大きな変更は先に議論し、貢献ガイドの検証を実施してください。

[完全なソース](https://github.com/mobiledevloperlab/nimotehost) · [ライセンス](https://github.com/mobiledevloperlab/nimotehost/blob/master/LICENSE) · [貢献ガイド](https://github.com/mobiledevloperlab/nimotehost/blob/master/CONTRIBUTING.md) · [プラグイン SDK](https://github.com/mobiledevloperlab/nimotehost/blob/master/docs/plugin-system/plugin-sdk.md)

### 透明な実装とアクセス管理

既存の認証済み SSH を使い、認証付き HTTP API はループバックのみで待ち受けます。Host の認証情報はパソコンに残り、追加の Nimote 中継や公開 API ポートは不要です。実行場所とコードを自分で管理できます。

コマンドは Host の OS アカウント権限で動作します。適切なアカウントを使い、Agent とプラグインの権限を確認し、依存関係を更新してください。Agent の入力やプロジェクト情報は設定済みモデル提供元に送信される場合があります。公開ソースは確認を可能にしますが、脆弱性ゼロや独立監査の完了を保証するものではありません。[セキュリティ方針と非公開報告](https://github.com/mobiledevloperlab/nimotehost/blob/master/SECURITY.md)を参照してください。

## 用意するもの

SSH で接続できる Linux、macOS、Windows のパソコン、Host 対応の NimoteCode ビルド、対応する NimoteHost、リモートアカウントから開けるプロジェクトフォルダーを用意します。後で指定するパスはスマートフォンではなくパソコン側のものです。

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

### パッケージとソースからの導入

CLI は `nimotehost-<version>-<os>-<arch>`、デスクトップは `nimotehost-gui-<version>-<os>-<arch>` という名前です。Linux/macOS は `.tar.gz`、Windows は `.zip` です。GitHub の Source code ではなく完全なバイナリー配布物を選び、添付の `.sha256` と照合してから全体を展開します。Linux デスクトップは glibc 2.35 以降が必要で、macOS パッケージは署名・公証されていません。

Git と Go 1.26.5 以降を用意し、公開後に一般ユーザーで実行します。

```sh
git clone https://github.com/mobiledevloperlab/nimotehost.git
cd nimotehost
go run ./tools/install
```

完全なソースの提供を受けた場合は、そのルートで最後の行を実行します。PowerShell にも対応し、CLI をビルド・検証・導入して起動します。導入せず配布物を作る場合は `go run ./tools/build`、デスクトップは `go run ./tools/build -gui` を使い、後者にはネイティブ SDK と C コンパイラーが必要です。

### サービスとデスクトップ管理画面

Linux は systemd ユーザーマネージャー、macOS はユーザーの GUI ログイン、Windows はログイン時のユーザー別タスクを使います。利用できない環境ではフォアグラウンドで試してください。パソコンを起動状態に保ち、直接または VPN で SSH に到達できるようにします。

導入先は Linux/macOS が `~/.local/share/nimotehost`、Windows が `%LOCALAPPDATA%\NimoteHost` です。PATH に追加するか絶対パスで実行します。GUI は `NimoteHost.app`、`nimotehost-gui.exe`、`nimotehost-gui` を開きます。Overview はサービス、Sessions はセッション、Devices は制限付きデバイス、Settings は設定、Help & diagnostics はログを表示します。ウィンドウを閉じてもタスクは続き、停止操作で終了します。デバイスの制限には登録のほか SSH 鍵の設定が必要です。

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

## 運用、更新、ローカルデータ

| コマンド | 動作 |
| --- | --- |
| `nimotehost version` | 実行ファイルのバージョン。 |
| `nimotehost status` | 稼働時は `running: true`。 |
| `nimotehost capabilities` | プロトコル、機能、ツール。 |
| `nimotehost agents` | インストール済み Agent のバージョン。 |
| `nimotehost install` | 固定パスからユーザーサービスを登録・起動。 |
| `nimotehost stop` | Host と実行中タスクを停止。 |
| `nimotehost restart` | 導入済みサービスを再起動し、タスクを中断。 |
| `nimotehost uninstall` | サービスを削除し、認証情報と記録を保持。 |

導入済み CLI を使います。PowerShell では `& "$env:LOCALAPPDATA\NimoteHost\nimotehost.exe" status` で呼び出せます。停止中の導入済みサービスは `restart` で起動し、`start` はフォアグラウンド動作です。`setup` は完全な配布物を検証・導入し、`install` は配置済みの実行ファイルを登録します。

Unix の SSH 環境は、接続先を置き換えて `ssh user@host 'command -v nimotehost && nimotehost status'` で確認できます。見つからなければ `ssh user@host '$HOME/.local/share/nimotehost/nimotehost status'` を試し、非対話 PATH を修正します。ツールのパス変更後は作業を完了させ、導入済み CLI で `stop`、修正済み環境で `install` を実行します。

更新時は新しい完全な配布物を検証し、タスク完了と旧 GUI 終了後に同じユーザーでインストーラーを実行します。旧パッケージを保持し、活動中タスクの中断は拒否します。更新後はバージョン、状態、機能を確認します。ダウングレード前は状態をバックアップしてください。ファイル削除前に `uninstall` を実行します。記録と認証情報は残ります。

| OS | 設定と状態の既定ディレクトリ |
| --- | --- |
| Linux | `~/.config/nimotehost` または `$XDG_CONFIG_HOME/nimotehost` |
| macOS | `~/Library/Application Support/nimotehost` |
| Windows | `%APPDATA%\nimotehost` |

バックアップは Host 停止中に行い、所有者のみのアクセス権を維持し、認証情報や会話を公開しないでください。プロジェクトと Agent 提供元のデータは別途バックアップします。記録のコピーはプロセスを復元しません。

診断は Linux で `systemctl --user status nimotehost.service` と `journalctl --user -u nimotehost.service -n 50 --no-pager`、macOS で `launchctl print gui/$(id -u)/com.nimotehost`、Windows で `schtasks.exe /Query /TN NimoteHost /V /FO LIST` を使います。ユーザーのログイン状態と、Linux ではログアウト後の lingering ポリシーも確認します。

## 接続できないとき

まず通常の SSH が使えるか確認します。Host が見つからなければ、アカウント、インストール先、SSH PATH、Windows の同じユーザーの discovery.json を確認します。停止中ならパソコンで nimotehost status を確認し、導入方法に合わせて起動します。非互換なら App と Host のバージョンを合わせます。

表示できる出力がキャッシュだけの場合もあります。接続状態とプロセスが動いているか、指定したリモートフォルダーへ入れるかを確認してください。作成結果が不明なら元のセッションを探してから再試行します。停止、再起動、更新は実行中の作業を終えてから行ってください。

[SSH](/ja/docs/ssh) · [Agent](/ja/docs/ai) · [タスク](/ja/docs/tasks)
