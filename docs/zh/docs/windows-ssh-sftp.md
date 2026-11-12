---
title: "使用 NimoteCode 连接 Windows 11：SSH、SFTP 与故障排查"
description: "在 Windows 11 上配置 OpenSSH，通过 NimoteCode 2.3.0+ 使用 SFTP 远程管理文件，并排查连接超时和 WSL2 端口问题。"
lang: zh-CN
updated: 2026-11-13
---

# 使用 NimoteCode 连接 Windows 11：SSH、SFTP 与故障排查

> **版本要求：NimoteCode 2.3.0 或更高版本。** 本文以 **Windows 11** 为主要目标系统。Windows 10 和 Windows Server 的配置可能类似，但不保证未经验证的组合兼容性。参见 [2.3.0 版本说明](/zh/releases/2.3.0)。

## 1. 使用场景与工作原理

在 Windows PC 上启用 Microsoft OpenSSH Server（`sshd`）后，手机或平板上的 NimoteCode 可通过 SSH 建立连接，并使用同一连接上的 SFTP 子系统浏览和编辑该 Windows 账户有权限访问的文件；远程终端可用于访问 Windows Shell。

```text
NimoteCode（手机/平板） -- SSH TCP/22 --> Windows 11 OpenSSH Server
                                            |-- SFTP：浏览/读写文件
                                            `-- Shell：PowerShell/CMD（依服务器配置）
```

这不是 Windows 远程桌面，不会显示 Windows 图形桌面，也不需要安装 WSL2。SSH 能连接、SFTP 能用、远程 Shell 能用是三个需要分别验证的能力。具体按钮名称可能随 NimoteCode 版本和界面调整。

## 2. 前提条件

- NimoteCode **2.3.0+**；以当前安装版本的发布说明为准。
- Windows 11 设备（Home/Pro/Enterprise；若组织策略限制可选功能或入站网络，请联系管理员）。
- Windows 账户具备正常登录凭据；Windows Hello PIN 不等同于 SSH 密码。
- 首次建议两台设备连接同一可信局域网。远程公网连接需要额外的安全网络方案，不能只靠 Windows 放行 22 端口。
- 以下 Windows 命令除明确说明外均在 **管理员 PowerShell** 中执行。

## 3. 安装并启动 OpenSSH Server

### 3.1 查询是否安装

```powershell
Get-WindowsCapability -Online | Where-Object Name -like 'OpenSSH*'
```

若 `OpenSSH.Server~~~~0.0.1.0` 的 `State` 为 `NotPresent`：

```powershell
Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0
```

也可在 Windows 11 **设置 → 可选功能**（也可在设置中搜索） 中搜索并添加 OpenSSH Server。设置页名称可能随 Windows 更新变化。若安装失败，检查 Windows Update、组织更新策略或错误代码，不能简单认定功能不存在。

### 3.2 启动并设置开机自启

```powershell
Start-Service sshd
Set-Service -Name sshd -StartupType Automatic
Get-Service sshd
```

正常输出应为 `Running`。若找不到 `sshd` 服务，先检查是否成功安装服务器组件。

### 3.3 检查是否监听 22 端口

```powershell
Get-NetTCPConnection -LocalPort 22 -State Listen -ErrorAction SilentlyContinue |
  Select-Object LocalAddress, LocalPort, OwningProcess
```

通常会看到 `0.0.0.0:22` 和/或 `:::22`。若只在 `127.0.0.1:22` 监听，局域网设备通常无法直接访问。可查看 `C:\ProgramData\ssh\sshd_config` 的 `Port`、`ListenAddress` 与 `Subsystem sftp` 设置；修改后先校验、再重启：

```powershell
& "$env:WINDIR\System32\OpenSSH\sshd.exe" -t
Restart-Service sshd
```

**不要**在没有备份和理解配置的情况下覆盖整个 `sshd_config`。

## 4. 防火墙：只放行所需网络

安装 OpenSSH Server 通常会创建规则 `OpenSSH-Server-In-TCP`。检查：

```powershell
Get-NetFirewallRule -Name 'OpenSSH-Server-In-TCP' -ErrorAction SilentlyContinue |
  Select-Object Name, DisplayName, Enabled, Direction, Action, Profile

Get-NetConnectionProfile | Select-Object InterfaceAlias, NetworkCategory
```

如果规则不存在，在可信局域网使用专用网络配置文件新建；若已有同名自定义规则，先检查其设置：

```powershell
New-NetFirewallRule -Name 'NimoteCode-OpenSSH-Private' `
  -DisplayName 'NimoteCode OpenSSH (Private)' `
  -Enabled True -Direction Inbound -Action Allow -Protocol TCP `
  -LocalPort 22 -Profile Private
```

若规则存在但仅 `Private`，而当前网络为 `Public`，其**可能**无法匹配；首选确认这是可信 Wi-Fi/以太网网络后，将 Windows 网络设为 **Private**，而不是永久将 SSH 暴露于所有网络：

```powershell
# 先查看准确的 InterfaceAlias，再按需替换
Get-NetConnectionProfile
# 仅限自己信任的网络：
Set-NetConnectionProfile -InterfaceAlias 'Wi-Fi' -NetworkCategory Private
```

若临时测试需要扩展规则范围，应先理解风险并在测试后收紧；`Profile Any` 并非默认推荐设置。已有允许规则也可能受更具体的阻止规则、远程地址范围或第三方安全软件影响。

### 为什么出现三条 TCP 22 规则？

例如 `NimoteCode SSH LAN`、`OpenSSH SSH Server (sshd)` 和 `NimoteCode Windows SSH` 都放行 TCP 22。这表示**有三条规则，而不是三个不同的监听端口**；重复允许规则通常不会直接造成端口冲突。不要仅凭显示名称删除规则，先核对作用范围：

```powershell
Get-NetFirewallRule -Direction Inbound -Enabled True |
  Where-Object { $_.DisplayName -match 'SSH|NimoteCode' } |
  Select-Object Name, DisplayName, Action, Profile
```

如需查看端口过滤器：

```powershell
Get-NetFirewallRule -Direction Inbound -Enabled True -Action Allow |
  Get-NetFirewallPortFilter |
  Where-Object { $_.Protocol -eq 'TCP' -and $_.LocalPort -eq '22' }
```

## 5. 获取正确 Windows IP 与账号

```powershell
ipconfig
whoami
```

选择当前实际连接的 Wi-Fi/以太网适配器的 **IPv4 地址**（例如 `192.168.1.100`）；避免误用 WSL、Docker、Hyper-V、VPN 虚拟网卡 IP。

Windows 本地账户通常使用其账户名；域账户或 Microsoft 账户的 SSH 登录名可能因 Windows 和 OpenSSH 配置而异。建议先在另一台电脑测试实际用户名，**不要**把 Windows Hello PIN 当成密码。密码登录失败时，确认账户密码已设置、账户没有被策略限制，并考虑 SSH 密钥认证。

## 6. 先验证网络，再配置 NimoteCode

### 6.1 Windows 本机测试

```powershell
Test-NetConnection 127.0.0.1 -Port 22
```

`TcpTestSucceeded : True` 仅说明 TCP 握手成功，不代表用户名/密码或 SFTP 已成功。

### 6.2 从同局域网另一台 Windows 设备测试

```powershell
Test-NetConnection 192.168.1.100 -Port 22
ssh username@192.168.1.100
sftp username@192.168.1.100
```

用你的地址和账户名替换示例值。首次连接应**核对服务器主机密钥指纹**，确认后再信任，不要盲目接受陌生指纹。

若本机测试成功、另一设备超时：检查是否同一子网、访客 Wi-Fi/客户端隔离、Windows 防火墙 Profile 与作用范围、VPN、第三方安全软件，以及目标 IP 是否变化。

## 7. 在 NimoteCode 2.3.0+ 添加 Windows 连接

1. 更新至 **NimoteCode 2.3.0 或更高版本**。
2. 在应用内进入工作区/连接入口，创建 **SSH 连接或远程工作区**（实际菜单文字以安装版本为准）。
3. 填写 Host=`192.168.1.100`（Windows 局域网 IP）、Port=`22`、Username=Windows SSH 登录账号。
4. 选择应用支持的密码或 SSH 私钥认证方式，保存连接；私钥应妥善保管。
5. 首次连接核对主机密钥指纹；建立连接后进入远程文件浏览/编辑入口，验证 SFTP 目录列表、打开文本文件并保存。
6. 打开远程终端，运行 `whoami`、`pwd`（PowerShell 下）等命令检查身份和位置。

**注意**：SFTP 允许的访问范围由 Windows 账户和 NTFS ACL 决定；登录成功不代表能写入 `C:\Windows`、`Program Files` 等受保护目录。Windows SFTP 路径表示法可能和本地 `C:\...` 不完全一致，目录打开失败时先使用服务端返回的路径。

<figure>
  <a href="/blog/how-to-ssh-into-windows-11-from-your-phone-and-browse-files-with-sftp/nimotecode-win11.png" target="_blank" rel="noopener">
    <img src="/blog/how-to-ssh-into-windows-11-from-your-phone-and-browse-files-with-sftp/nimotecode-win11.png" width="2020" height="1041" alt="NimoteCode 的 Windows 工作流：连接设置、远程文件、PowerShell 终端和 Agent 会话。这些是不同界面的组合展示。" loading="lazy" decoding="async">
  </a>
  <figcaption>NimoteCode 的 Windows 工作流：连接设置、远程文件、PowerShell 终端和 Agent 会话。这些是不同界面的组合展示。</figcaption>
</figure>

### Windows Shell 与主机指纹验证

Windows OpenSSH 在未修改 DefaultShell 时初始默认使用 CMD。NimoteCode 的 Windows 工作区使用 PowerShell 和 SFTP。如果 SSH 登录后进入 CMD，且你希望默认使用 PowerShell，请在管理员 PowerShell 中执行下列命令。这会修改后续 SSH 会话的默认 Shell；共享主机上应先协调该设置。

```powershell
New-ItemProperty -Path 'HKLM:\SOFTWARE\OpenSSH' -Name DefaultShell `
  -Value "$env:WINDIR\System32\WindowsPowerShell\v1.0\powershell.exe" `
  -PropertyType String -Force
```

将客户端显示的指纹与直接从 Windows 主机取得的可信值比较。默认 Ed25519 主机密钥可使用以下命令查看：

```powershell
& "$env:WINDIR\System32\OpenSSH\ssh-keygen.exe" -lf "$env:ProgramData\ssh\ssh_host_ed25519_key.pub"
```

## 8. Windows 与 WSL2 同时使用

建议区分两类目标：

| 目标 | 示例端口 | 访问对象 |
|---|---:|---|
| Windows OpenSSH | 22 | Windows 文件与 Windows Shell |
| WSL2 Linux SSH | 2222 | WSL2 内 Linux 文件与 Shell |

`2222` 只是常用的**自定义示例**，不是 WSL2 默认开放端口。若选择 WSL2 的 `2222`，还需要在 WSL 内配置 sshd 及端口，并确保 Windows 到 WSL2 的转发/镜像网络路径可达；不同 WSL 网络模式、更新和重启可能影响转发。Windows 放行 `2222` **不等于** WSL2 已监听或已经配置端口转发。

检查 Windows 端：

```powershell
Get-NetTCPConnection -State Listen | Where-Object { $_.LocalPort -in 22,2222 }
```

不要为了连接 Windows 文件系统而强制安装 WSL2。

## 9. 故障排查：按症状定位

| 症状 | 重点检查 | 下一步 |
|---|---|---|
| TCP 22 超时 | IP、网络隔离、防火墙 Profile、VPN/路由 | 在 Windows 本机与另一设备分别 `Test-NetConnection` |
| 连接被拒绝 | sshd 未启动或未监听、端口错误 | `Get-Service sshd`、`Get-NetTCPConnection` |
| TCP 成功但认证失败 | 用户名、账户密码、账号策略、密钥权限 | 用电脑 `ssh -v` 查看认证流程 |
| SSH Shell 可用但 SFTP 失败 | SFTP Subsystem、服务配置、目录权限 | `sftp -v`、查 `sshd_config` 和日志 |
| 可读取但无法保存 | NTFS 权限、文件只读、受保护路径 | 换到该用户有写权限的目录测试 |
| 22 正常但 2222 失败 | WSL sshd/转发/WSL 地址 | 分别检查 WSL 和 Windows 监听状态 |
| 局域网可用，互联网不可用 | NAT、CGNAT、VPN/隧道、路由器 | 建议安全隧道/VPN，避免直接暴露 SSH |

### 与本次真实排查对应的重点

已观察到如下入站放行规则：`WSL2 SSH Access (Any)`、多条 `WSL2 SSH 2222 (Any)` 和 `OpenSSH SSH Server (sshd) (Private)`。这**只能证明规则存在**，不能证明 sshd 真的监听，也不能证明远端网络可达。`Private` 是否导致超时，要通过 `Get-NetConnectionProfile` 对比后判断，不能仅凭规则输出确定根因。

推荐一次执行的诊断命令：

```powershell
Get-Service sshd
Get-NetTCPConnection -LocalPort 22 -State Listen -ErrorAction SilentlyContinue
Get-NetConnectionProfile | Select-Object InterfaceAlias, NetworkCategory
Get-NetFirewallRule -Name OpenSSH-Server-In-TCP -ErrorAction SilentlyContinue |
  Select-Object DisplayName, Enabled, Action, Profile
Test-NetConnection 127.0.0.1 -Port 22
ipconfig
```

若 SSH 服务报错，查看事件查看器 **Applications and Services Logs → OpenSSH** 下可用的相关日志，或使用：

```powershell
Get-WinEvent -ListLog '*OpenSSH*'
```

## 10. 安全建议

- 仅向可信网络或必要的源 IP 允许入站 SSH，优先采用 Private Profile 或细化 `RemoteAddress`。
- 对跨互联网连接，优先选择经过安全配置的 VPN/私有隧道，勿默认直接映射公网 TCP 22。
- 优先使用 SSH 密钥认证，保护私钥；不要在教程或问题反馈中粘贴口令和私钥。
- 保持 Windows 安全更新、使用普通用户账户，并遵循最小权限原则。
- 仅在确认服务器主机密钥指纹后信任连接；指纹意外变化时排查原因。
- 不要无条件关闭 Windows 防火墙来“测试”。

## 11. 发布与兼容性说明

本文介绍 **NimoteCode 2.3.0+ 通过 Windows OpenSSH 使用 SSH/SFTP** 的配置。Git、语言服务、Agent 等额外工作流取决于主机工具、账号权限和应用版本，不保证在 Windows、Linux 与 macOS 上完全一致。参见[版本说明](/zh/releases/2.3.0)与[工作区指南](/zh/docs/ssh)。

## 官方参考

- [Microsoft — 安装 Windows OpenSSH](https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse?pivots=windows-11)
- [Microsoft — 配置 Windows OpenSSH](https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh-server-configuration)
- [NimoteCode 快速入门](/zh/docs/quick-start)
