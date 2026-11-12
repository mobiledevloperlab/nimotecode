---
title: "Windows 11 に SSH・SFTP で接続する | NimoteCode"
description: "Windows 11 の OpenSSH Server を設定し、NimoteCode 2.3.0 以降でファイルを編集。認証、ファイアウォール、接続タイムアウト、WSL2 を切り分けます。"
lang: ja
updated: 2026-11-13
---

# Windows 11 に SSH・SFTP で接続する

> **必要なバージョン：NimoteCode 2.3.0 以降。** 対象は Windows 11 です。Windows 10 や Windows Server の設定は似ていますが、未検証の組み合わせでの動作を保証するものではありません。[2.3.0 のリリースノート](/ja/releases/2.3.0)も確認してください。

## 1. 接続の仕組み

Windows PC で Microsoft OpenSSH Server（`sshd`）を有効にします。スマートフォンやタブレットの NimoteCode は SSH で接続し、同じ接続の SFTP サブシステムで、ログインした Windows アカウントがアクセスできるファイルを参照・編集します。リモートターミナルでは Windows の Shell を利用できます。

```text
NimoteCode (スマートフォン／タブレット) -- SSH TCP/22 --> Windows 11 OpenSSH Server
    |-- SFTP：ファイル参照と編集
    `-- Shell：設定に応じて PowerShell／CMD
```

Windows のグラフィカルデスクトップを表示する機能ではなく、WSL2 も不要です。SSH 接続、SFTP、Shell の動作は個別に確認します。画面の項目名はバージョンにより異なる場合があります。

## 2. 準備するもの

- NimoteCode **2.3.0 以降**。インストール済みバージョンを確認します。
- Windows 11 PC。組織管理の PC ではオプション機能や受信接続が制限される場合があります。
- パスワードまたは SSH 鍵が設定された Windows アカウント。Windows Hello PIN は SSH パスワードではありません。
- 初回設定では両方の端末を同じ信頼できる LAN に接続します。
- 特に指定がない限り、Windows 側のコマンドは**管理者として起動した PowerShell**で実行します。

## 3. OpenSSH Server のインストールと起動

オプション機能を確認します。

```powershell
Get-WindowsCapability -Online | Where-Object Name -like 'OpenSSH*'
```

`OpenSSH.Server~~~~0.0.1.0` が `NotPresent` ならインストールします。

```powershell
Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0
```

Windows の設定で「オプション機能」を検索して追加することもできます。場所や名称は Windows のビルドにより異なります。失敗した場合は Windows Update と組織のポリシーを確認してください。

サービスを起動し、自動起動を設定します。

```powershell
Start-Service sshd
Set-Service -Name sshd -StartupType Automatic
Get-Service sshd
```

状態が `Running` であることを確認します。サービスがなければ、サーバー機能が正常にインストールされたか確認してください。

待ち受け状態を確認します。

```powershell
Get-NetTCPConnection -LocalPort 22 -State Listen -ErrorAction SilentlyContinue |
  Select-Object LocalAddress, LocalPort, OwningProcess
```

通常のアドレスは `0.0.0.0` または `::` です。`127.0.0.1` だけで待ち受けている場合、ほかの LAN 端末からは通常接続できません。必要なら `C:\ProgramData\ssh\sshd_config` の `Port`、`ListenAddress`、`Subsystem sftp` を確認します。変更後は検証してから再起動します。

```powershell
& "$env:WINDIR\System32\OpenSSH\sshd.exe" -t
Restart-Service sshd
```

設定ファイル全体を理解せずに置き換えないでください。

## 4. Windows ファイアウォールを確認する

OpenSSH Server のインストール時には通常 `OpenSSH-Server-In-TCP` ルールが作成されます。

```powershell
Get-NetFirewallRule -Name 'OpenSSH-Server-In-TCP' -ErrorAction SilentlyContinue |
  Select-Object Name, DisplayName, Enabled, Direction, Action, Profile
Get-NetConnectionProfile | Select-Object InterfaceAlias, NetworkCategory
```

ルールがない場合は、信頼できる **Private** ネットワーク用に次のルールを作成できます。すでに同じ名前のカスタムルールがある場合は、その設定を確認してください。

```powershell
New-NetFirewallRule -Name 'NimoteCode-OpenSSH-Private' `
  -DisplayName 'NimoteCode OpenSSH (Private)' `
  -Enabled True -Direction Inbound -Action Allow -Protocol TCP `
  -LocalPort 22 -Profile Private
```

ルールが `Private` のみで現在のネットワークが `Public` なら、一致しないことが接続失敗の原因になる場合があります。すべてのネットワークで SSH を許可するのではなく、**信頼できるネットワークの場合に限って**接続プロファイルを変更します。例の `Wi-Fi` は実際のインターフェイス名に置き換えてください。

```powershell
Get-NetConnectionProfile
Set-NetConnectionProfile -InterfaceAlias 'Wi-Fi' -NetworkCategory Private
```

`Any` を通常の初期設定にすることは推奨しません。拒否ルール、接続元アドレスの制限、セキュリティソフト、ルーターも通信に影響します。

### TCP 22 の許可ルールが複数ある場合

`NimoteCode SSH LAN`、`OpenSSH SSH Server (sshd)`、`NimoteCode Windows SSH` が同じポートを許可していても、待ち受けポートが三つあるわけではありません。重複する許可ルールは通常、ソケット競合を起こしません。名前だけで削除せず、範囲を確認します。

```powershell
Get-NetFirewallRule -Direction Inbound -Enabled True |
  Where-Object { $_.DisplayName -match 'SSH|NimoteCode' } |
  Select-Object Name, DisplayName, Action, Profile
```

## 5. Windows の IP アドレスとユーザー名を確認する

```powershell
ipconfig
whoami
```

実際に使用している Wi-Fi／Ethernet アダプターの IPv4 アドレス（例：`192.168.1.100`）を使います。WSL、Docker、Hyper-V、VPN の仮想アダプターと混同しないでください。ローカル、ドメイン、Microsoft アカウントでは SSH のユーザー名形式が異なる場合があります。別の SSH クライアントで実際のログインを確認し、パスワード欄に Windows Hello PIN を入力しないでください。

## 6. アプリ設定前にサーバーを検証する

PC 自身から TCP ポートを確認します。

```powershell
Test-NetConnection 127.0.0.1 -Port 22
```

`TcpTestSucceeded : True` は TCP 接続のみを示し、認証や SFTP の成功を意味しません。

同じ LAN の別の Windows PC から確認します。

```powershell
Test-NetConnection 192.168.1.100 -Port 22
ssh username@192.168.1.100
sftp username@192.168.1.100
```

アドレスとユーザー名は自分の値に置き換えます。初回は**ホスト鍵の指紋を照合してから**信頼してください。

ループバックでは成功し、LAN ではタイムアウトする場合は、IP、ネットワークプロファイル、ファイアウォールの範囲、ゲスト Wi-Fi の端末間分離、VPN、セキュリティソフトを確認します。

## 7. NimoteCode に Windows 接続を追加する

1. **NimoteCode 2.3.0 以降**をインストールします。
2. ワークスペースの接続画面から **SSH 接続／リモートワークスペース**を作成します。
3. Host に Windows の LAN IP（例：`192.168.1.100`）、Port に `22`、Username に SSH ログイン用アカウントを入力します。
4. 対応するパスワードまたは秘密鍵認証を選び、保存します。秘密鍵は安全に保管してください。
5. 初回接続でホスト鍵を照合し、リモートフォルダーの一覧表示、テスト用テキストファイルの編集と保存を確認します。
6. ターミナルを開き、その Shell に適したコマンドでユーザーと現在の場所を確認します。

SFTP のアクセス範囲は Windows アカウントと NTFS 権限に従います。接続できても `C:\Windows` や `Program Files` に書き込めるわけではありません。SFTP のパス表記はローカルの `C:\...` と異なる場合があるため、サーバーが返すパスを使ってください。

<figure>
  <a href="/blog/how-to-ssh-into-windows-11-from-your-phone-and-browse-files-with-sftp/nimotecode-win11.png" target="_blank" rel="noopener">
    <img src="/blog/how-to-ssh-into-windows-11-from-your-phone-and-browse-files-with-sftp/nimotecode-win11.png" width="2020" height="1041" alt="NimoteCode の Windows 接続設定、リモートファイル、PowerShell、Agent の各画面を並べたものです。" loading="lazy" decoding="async">
  </a>
  <figcaption>NimoteCode の Windows 接続設定、リモートファイル、PowerShell、Agent の各画面を並べたものです。</figcaption>
</figure>

### Windows Shell とホスト鍵の確認

Windows OpenSSH の初期の既定 Shell は CMD です。NimoteCode の Windows ワークスペースは PowerShell と SFTP を使用します。SSH ログインで CMD が起動し、PowerShell を既定にしたい場合は、管理者 PowerShell で次を実行します。以降の SSH セッションに適用されるため、共有ホストでは変更を調整してください。

```powershell
New-ItemProperty -Path 'HKLM:\SOFTWARE\OpenSSH' -Name DefaultShell `
  -Value "$env:WINDIR\System32\WindowsPowerShell\v1.0\powershell.exe" `
  -PropertyType String -Force
```

クライアントの指紋を Windows ホストから直接取得した信頼できる値と照合します。既定の Ed25519 ホスト鍵は次のコマンドで確認できます。

```powershell
& "$env:WINDIR\System32\OpenSSH\ssh-keygen.exe" -lf "$env:ProgramData\ssh\ssh_host_ed25519_key.pub"
```

## 8. Windows と WSL2 を使い分ける

| 接続先 | ポートの例 | アクセス対象 |
| --- | ---: | --- |
| Windows OpenSSH | 22 | Windows のファイルと Shell |
| WSL2 Linux SSH | 2222 | WSL2 内の Linux ファイルと Shell |

`2222` は**任意に設定する例**で、WSL2 の既定の SSH ポートではありません。Linux 側の sshd と、Windows から WSL への転送やミラーネットワークを設定する必要があります。ネットワークモードや再起動で到達性が変わる場合もあります。Windows のファイアウォールで `2222` を許可するだけでは、待ち受けや到達性を確認できません。

```powershell
Get-NetTCPConnection -State Listen | Where-Object { $_.LocalPort -in 22,2222 }
```

Windows ファイルを SFTP で扱うだけなら WSL2 は不要です。

## 9. 症状から問題を切り分ける

| 症状 | 確認対象 | 次の確認 |
| --- | --- | --- |
| TCP 22 がタイムアウト | IP、ファイアウォール、端末間分離、VPN、経路 | ループバックと LAN の `Test-NetConnection` を比較 |
| 接続が拒否される | sshd 停止、ポート違い、待ち受けなし | `Get-Service sshd` と `Get-NetTCPConnection` |
| 認証失敗 | ユーザー名、パスワード、鍵、ポリシー | PC の SSH クライアントで `ssh -v` |
| Shell は動くが SFTP が失敗 | SFTP サブシステム、設定、権限 | `sftp -v`、設定とイベントログ |
| 読めるが保存できない | NTFS ACL、読み取り専用、保護された場所 | ユーザー所有フォルダーで試す |
| 22 は成功、2222 は失敗 | WSL sshd、転送、ネットワークモード | WSL と Windows の待ち受けを個別確認 |
| LAN のみ成功 | NAT、CGNAT、ルーター、VPN | 安全な VPN／プライベートトンネルを使用 |

### 報告された Windows 11 設定から分かること

確認された許可ルールには `WSL2 SSH Access (Any)`、複数の `WSL2 SSH 2222 (Any)`、`OpenSSH SSH Server (sshd) (Private)` がありました。これはルールの存在だけを示し、sshd の待ち受けやリモートからの到達を証明しません。`Private` が原因かどうかは現在のプロファイルと比較して判断します。

管理者 PowerShell で次の診断を実行します。

```powershell
Get-Service sshd
Get-NetTCPConnection -LocalPort 22 -State Listen -ErrorAction SilentlyContinue
Get-NetConnectionProfile | Select-Object InterfaceAlias, NetworkCategory
Get-NetFirewallRule -Name OpenSSH-Server-In-TCP -ErrorAction SilentlyContinue |
  Select-Object DisplayName, Enabled, Action, Profile
Test-NetConnection 127.0.0.1 -Port 22
ipconfig
```

利用できる OpenSSH イベントログを探します。

```powershell
Get-WinEvent -ListLog '*OpenSSH*'
```

## 10. 安全に運用するために

- SSH の受信は信頼できるネットワークや必要な接続元に限定し、可能なら `Private` を使います。
- インターネット越しには TCP 22 の直接公開より、適切に設定した VPN やプライベートトンネルを優先します。
- SSH 鍵を優先し、秘密鍵やパスワードを問い合わせに貼り付けないでください。
- Windows を更新し、最小権限のアカウントと適切なファイル権限を使います。
- ホスト鍵の指紋を確認し、予期しない変更は調査します。
- 一般的なトラブル対処として Windows ファイアウォールを無効にしないでください。

## 11. 対象範囲とリリース情報

このガイドは **NimoteCode 2.3.0 以降で Windows OpenSSH に接続する SSH／SFTP の設定**を扱います。Git、言語サービス、Agent などの追加機能は、ホストのツールと権限、アプリのバージョンに依存します。Linux や macOS とすべて同じ動作を保証するものではありません。[リリースノート](/ja/releases/2.3.0)と[ワークスペースガイド](/ja/docs/ssh)で対応範囲を確認してください。

## 公式資料

- [Microsoft：Windows OpenSSH のインストール](https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse?pivots=windows-11)
- [Microsoft：Windows OpenSSH の設定](https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh-server-configuration)
- [NimoteCode クイックスタート](/ja/docs/quick-start)
