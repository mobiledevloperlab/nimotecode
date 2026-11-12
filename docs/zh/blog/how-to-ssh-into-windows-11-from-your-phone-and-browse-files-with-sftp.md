---
title: "如何用手机通过 SSH 连接 Windows 11，并使用 SFTP 浏览文件"
description: "在 Windows 11 上配置 OpenSSH Server，从 Android 或 iPhone 连接，通过 SFTP 浏览文件，并排查 22 端口连接超时。"
date: "2026-11-12"
author: "NimoteCode 团队"
tags: ["windows", "ssh", "sftp", "tutorial", "mobile development"]
image: /blog/how-to-ssh-into-windows-11-from-your-phone-and-browse-files-with-sftp/cover.png
ogImage: https://nimotecode.com/blog/how-to-ssh-into-windows-11-from-your-phone-and-browse-files-with-sftp/cover.png
---

# 如何用手机通过 SSH 连接 Windows 11，并使用 SFTP 浏览文件

![通过手机使用 SSH 和 SFTP 访问 Windows 11](/blog/how-to-ssh-into-windows-11-from-your-phone-and-browse-files-with-sftp/cover.png)

**用手机访问你的 Windows 开发电脑，不一定需要远程桌面。SSH 和 SFTP 往往就够用了。**

最近，我尝试让手机能够正常连接 Windows 11 进行远程开发。想法很简单：不用坐在电脑前，也能浏览文件、编辑代码、运行 PowerShell 命令。

配置过程其实相当直接。真正麻烦的是排查问题：Windows 明明显示已允许访问 22 端口，可每次连接依然超时。

下面介绍完整的配置方法，以及我遇到的问题。

## 我们要搭建什么

整体结构如下：

```text
Android / iPhone
       |
       | SSH (TCP 22)
       |
       v
Windows 11 电脑
       |
       +-- OpenSSH Server
       +-- SFTP 文件访问
       +-- PowerShell 终端
       +-- 本地项目
```

SSH 提供远程 Shell。SFTP 通过同一条 SSH 连接运行，让我们能够浏览和传输文件。

我们需要：

- 一台 Windows 11 电脑
- 一部连接到同一局域网的手机
- Windows OpenSSH Server
- 手机上的 SSH/SFTP 客户端

手机端我会使用 **NimoteCode 2.3.0 及以上版本**。这是我一直在开发的一款面向 Android 和 iOS 的移动 IDE。其他 SSH/SFTP 客户端也可以使用相同的 Windows 配置。

完成基本配置不需要 Windows 远程桌面、WSL，也不需要在 Windows 主机上额外安装配套应用。

## 1. 在 Windows 11 上启用 OpenSSH Server

首先，**以管理员身份打开 PowerShell**。

检查是否已安装 OpenSSH Server：

```powershell
Get-WindowsCapability -Online |
    Where-Object Name -like 'OpenSSH*'
```

查找以下内容：

```text
OpenSSH.Server~~~~0.0.1.0
State : Installed
```

如果尚未安装服务端，运行：

```powershell
Add-WindowsCapability -Online `
    -Name OpenSSH.Server~~~~0.0.1.0
```

也可以在 Windows 设置的“可选功能”中安装。

接着启动 SSH 服务：

```powershell
Start-Service sshd
```

将其设为重启后自动启动：

```powershell
Set-Service -Name sshd -StartupType Automatic
```

检查服务状态：

```powershell
Get-Service sshd
```

你应该看到：

```text
Status   Name
------   ----
Running  sshd
```

第一部分就完成了。

## 2. 检查 Windows 是否正在监听 22 端口

如果 SSH 服务实际上没有监听端口，装好 OpenSSH 也无济于事。

运行：

```powershell
Get-NetTCPConnection -LocalPort 22 -State Listen
```

典型结果如下：

```text
LocalAddress LocalPort State
------------ --------- -----
0.0.0.0      22        Listen
```

`0.0.0.0` 表示服务正在监听所有 IPv4 网络接口。

如果没有输出，再次检查 SSH 服务。同时查看：

```text
C:\ProgramData\ssh\sshd_config
```

检查是否存在自定义的 `Port` 或 `ListenAddress` 设置，导致预期的连接无法建立。

修改 SSH 配置后，使用 `sshd -t` 验证配置，再重启服务。

用手机测试之前，先检查本机回环地址：

```powershell
Test-NetConnection 127.0.0.1 -Port 22
```

关键是这一行：

```text
TcpTestSucceeded : True
```

如果这一步失败，先修复本机 SSH 服务，再排查手机或路由器。

## 3. 检查 Windows 防火墙

这一部分花的时间比我预想的多。

我的电脑上有好几条允许 TCP 22 端口的规则，其中包括之前试用 SSH 和 WSL 时创建的规则。

乍看之下，一切都没问题。但有多条防火墙规则，并不能证明远程连接一定能成功。

检查 OpenSSH 规则：

```powershell
Get-NetFirewallRule -Name "OpenSSH-Server-In-TCP" |
    Select-Object DisplayName, Enabled, Action, Profile
```

你可能会看到：

```text
DisplayName               Enabled Action Profile
-----------               ------- ------ -------
OpenSSH SSH Server (sshd) True    Allow  Private
```

注意这里的 `Private`。

这条规则适用于“专用”网络配置文件。如果当前连接被归类为“公用”网络，这条规则就可能不适用。

检查你的网络：

```powershell
Get-NetConnectionProfile |
    Select-Object InterfaceAlias, NetworkCategory
```

如果这是你信任的家庭或办公局域网，可以通过 Windows 设置将网络设为“专用”。

为了临时诊断，也可以将 SSH 规则改为适用于所有网络配置文件：

```powershell
Set-NetFirewallRule `
    -Name "OpenSSH-Server-In-TCP" `
    -Profile Any
```

不要在不可信网络上让 SSH 处于不必要的暴露状态。找到问题后，将规则限制为预期的网络配置文件，并在条件允许时，将允许访问的远程 IP 地址范围限制为可信地址。

另外，不要仅仅因为连接超时就不断添加重复的防火墙规则。先检查现有规则。

## 4. 找到 Windows 电脑的 IP 地址

运行：

```powershell
ipconfig
```

找到你实际正在使用的网络适配器的 IPv4 地址。

例如：

```text
Wireless LAN adapter Wi-Fi:

IPv4 Address . . . . . : 192.168.1.100
```

手机应该连接这个局域网地址，而不是 `127.0.0.1`。

如果电脑上有 WSL2、Docker、Hyper-V 或 VPN 适配器，要格外注意。它们可能会带来额外的 IP 地址，而这些地址并不是手机应该连接的目标。

你可以从另一台 Windows 电脑上测试：

```powershell
Test-NetConnection 192.168.1.100 -Port 22
```

将地址替换为你电脑实际的 IP 地址。

如果本机回环地址测试成功，但这个测试失败，就检查防火墙规则是否匹配当前网络配置文件、是否存在网络隔离、安全软件是否拦截，以及连接的是否为正确的网络适配器地址。

## 5. 从 Android 或 iPhone 连接

现在轮到手机端了。

我使用的是 [NimoteCode](https://nimotecode.com/)，它从 **2.3.0** 版本开始支持 Windows 远程工作区。

![NimoteCode 的 Windows 11 远程工作区连接设置](/blog/how-to-ssh-into-windows-11-from-your-phone-and-browse-files-with-sftp/nimotecode-win11.png)

创建一个 SSH 工作区或连接，填写以下信息：

| 设置 | 示例 |
| --- | --- |
| 连接名称 | Windows 11 开发电脑 |
| 主机地址 | 192.168.1.100 |
| 端口 | 22 |
| 用户名 | 你的 Windows 账户用户名 |
| 身份验证 | 密码或 SSH 密钥 |

使用 Windows 账户密码，而不是 Windows Hello PIN。如果你使用的是 Microsoft 账户，请确认 OpenSSH 识别的用户名。

首次建立连接时，先与 Windows 电脑上的信息核对 SSH 主机密钥指纹，确认无误后再信任该主机。

连接成功后，你可以在远程工作区中通过 SFTP 浏览 Windows 文件，打开和编辑受支持的项目文件，并通过 SSH 终端运行 PowerShell 命令。

例如，可以在远程终端中运行：

```powershell
Get-Location
Get-ChildItem
git status
```

运行 Git 命令需要 Windows 主机已安装 Git，并且能在命令行中调用它。

关于路径还需要说明一点：Windows 使用的是 `C:\Users\YourName\Projects` 这样的路径。SFTP 通过服务端的远程文件系统接口呈现路径，因此显示方式可能与 Windows 本地文件选择器不同。

## 6. SSH 能用，但 SFTP 不行？

SSH 和 SFTP 相互关联，但并不是同一种操作。

即使 SFTP 子系统配置有误，SSH 终端也可能正常工作。

检查 SSH 服务端配置：

```text
C:\ProgramData\ssh\sshd_config
```

找到 SFTP 子系统的声明。

典型的 Windows OpenSSH 配置使用：

```text
Subsystem sftp sftp-server.exe
```

如果你的配置使用的是另一个有效的 SFTP 子系统，不要盲目替换。

做出任何修改后，验证配置并重启 SSH：

```powershell
sshd -t
Restart-Service sshd
```

你也可以从另一台机器上单独测试 SFTP：

```bash
sftp username@192.168.1.100
```

如果普通 SSH 可以连接，但这个测试失败，就检查 SFTP 子系统、身份验证、目录权限和服务端日志。

## 7. 如果 22 端口仍然连接超时怎么办？

我建议按下面的顺序排查。

| 现象 | 检查内容 |
| --- | --- |
| 本机回环地址的 22 端口测试失败 | `sshd` 服务和端口监听状态 |
| 本机回环地址测试成功，但手机连接超时 | 防火墙、局域网 IP、客户端隔离 |
| 连接被拒绝 | 端口监听状态、端口号、防火墙或网络是否拒绝连接 |
| 权限被拒绝 | Windows 用户名和身份验证 |
| SSH 正常，SFTP 失败 | SFTP 子系统和权限 |
| Wi-Fi 下能连接，移动数据下不能 | 缺少公网可达的网络通路或远程访问隧道 |

最有用的诊断命令如下：

```powershell
Get-Service sshd

Get-NetTCPConnection -LocalPort 22 -State Listen

Test-NetConnection 127.0.0.1 -Port 22

Get-NetConnectionProfile

Get-NetFirewallRule -Name "OpenSSH-Server-In-TCP" |
    Select-Object DisplayName, Enabled, Action, Profile
```

还有一点：`ping` 不能测试 TCP 22 端口。请使用真正的 TCP 连通性测试。

如果你想从家庭网络之外连接，仅配置 Windows 防火墙规则还不够。你还需要一条能够安全访问这台电脑的网络通路。

我建议使用 VPN 或可信的私有组网方案，而不是将 SSH 服务直接暴露在公网。

## 8. WSL2 怎么办？

如果你已经在使用 WSL2，可以将 Windows 和 Linux 的 SSH 访问分开配置。

例如：

```text
Windows OpenSSH: TCP 22
WSL2 SSH:        TCP 2222
```

这样，手机就可以使用不同的 SSH 连接配置。

但不要以为修改了 WSL 的 SSH 端口，就能自动通过 Windows 主机的 2222 端口访问它。根据 WSL 的网络模式，你可能还需要额外配置端口转发或防火墙。

如果只是通过 SFTP 访问 Windows 文件、使用 PowerShell，完全不需要 WSL2。

## 我为什么想把这件事做好

手机不会取代我完整的桌面开发环境。

但很多小任务实在没必要专门打开笔记本电脑：

- 查看项目文件或配置文件
- 编辑脚本
- 快速运行一条 PowerShell 命令
- 查看 Git 变更
- 离开电脑时检查日志

这些就是我希望通过 NimoteCode 改善的工作场景。

目标不是把完整桌面塞进一块六英寸的屏幕，而是让你离开键盘时，仍然能用上开发环境中那些有用的部分。

如果你的主力开发电脑是 Windows 11，SSH 和 SFTP 是一个不错的起点。

如果你明明开放了 22 端口，却仍在排查连接超时，请先检查 SSH 实际的端口监听状态和网络配置文件，再考虑添加另一条防火墙规则。

---

**实用链接**

- [NimoteCode — Android 与 iOS 移动 IDE](https://nimotecode.com/)
- [NimoteCode 2.3.0 版本说明](https://nimotecode.com/releases/2.3.0)
- [Microsoft — Windows OpenSSH 入门](https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse)

*我正在开发 NimoteCode，希望让通过手机和平板进行远程开发的体验更顺手。如果你尝试过用手机连接 SSH/SFTP，我很想知道还有哪些问题在妨碍你。*
