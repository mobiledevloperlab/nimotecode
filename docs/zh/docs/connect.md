---
title: "Nimote Connect 下载、安装与升级"
description: "按系统选择 Nimote Connect 安装包，部署图形界面或命令行，绑定电脑并开启公网连接。"
---

# Nimote Connect 下载、安装与升级

在开发主机中选择 SSH 连接。已配对设备可通过 Nimote Connect 获取网络路径。NimoteHost 可独立运行，通过已认证的 SSH 提供高级执行能力。

**使用 NimoteCode「Connect / Tailscale」设备列表里的 Nimote 公网连接，电脑必须先安装并绑定 Nimote Connect。** 如果你已有可访问的 SSH 地址，或自己配置了 Tailscale IP / MagicDNS，可以直接选择「SSH」，无需安装 Connect。只有 NimoteHost 不会自动提供公网隧道或出现在设备列表中。

Connect 提供的是通往电脑 **SSH 服务的公网路径**。SSH 认证成功后，可在 NimoteCode 打开远程工作区、浏览和编辑文件、使用 SSH 终端，以及该 SSH 账号可用的其他远程工具。**NimoteHost 会话不是公网 SSH 或终端的前提**；它是持久任务和 Agent 会话等功能的独立选择。当前商业安装包同时包含 Host 服务，只是打包方式，不代表 Connect 只能用于 Host。

## 从哪里下载

[Nimote Connect 发布页](https://github.com/mobiledevloperlab/nimote-connect/releases)提供 macOS、Linux 和 Windows 的 arm64 与 amd64 正式 CLI 安装包，每个包都包含 Connect 和 Host。只有对应系统和架构发布桌面包时，才有 GUI 选项。

| 电脑 | 安装包与界面 | 前提 |
| --- | --- | --- |
| macOS Intel / Apple 芯片 | `darwin-amd64` / `darwin-arm64` tarball；CLI，图形界面以实际发布包为准 | 已登录图形用户；在「系统设置 → 通用 → 共享」开启「远程登录」 |
| Linux x64 / ARM64 | `linux-amd64` / `linux-arm64` tarball；CLI，图形界面以该发行包实际内容为准 | systemd 用户会话和已启动的 OpenSSH 服务 |
| Windows x64 / ARM64 | CLI ZIP；在 Windows 电脑上手动安装 | 已登录用户和监听 TCP 22 的 OpenSSH Server |

请使用同一版本的安装包和 SHA-256 校验文件。公网访问需要兼容的 NimoteCode 客户端和设备绑定。

## 安装与绑定

macOS / Linux：完整解压商业包，在解压目录以将来运行服务的**同一普通用户**执行，不要用 `sudo`：

```sh
./install.sh
```

Windows：解压 CLI ZIP，以当前登录用户在 PowerShell 执行：

```powershell
.\install.ps1
```

当前商业包会一起部署 Connect 和商业版 Host，但 Connect 的公网 SSH 不需要进入 NimoteHost 会话。按显示的设备码在 NimoteCode 中登录并批准绑定。macOS 可打开 `~/Applications/NimoteConn.app`；Linux 如果该包包含图形界面，可运行 `~/.local/bin/nimoteconn`。进入 **NimoteConn → Connect → 公网连接**，点击**启用公网连接**。公网连接默认关闭；等待状态变为**已上线**，再到 NimoteCode 的 **Connect / Tailscale** 标签选择电脑，使用该电脑的 SSH 账号认证。之后可按需要打开远程工作区或终端；NimoteHost 会话是另一项可选功能。首次连接还需核对 SSH 主机指纹。

### 只用 CLI 时

macOS / Linux 的命令位于 `~/.local/bin/nimoteconnect`；Windows 的程序位于 `%LOCALAPPDATA%\NimoteConnect\nimote-connect.exe`。下表以 macOS / Linux 的 `nimoteconnect` 命令名表示：

| 命令 | 作用 |
| --- | --- |
| `nimoteconnect status` | 查看 Connect 后台服务 |
| `nimoteconnect host status` | 查看随包安装的 Host 服务 |
| `nimoteconnect remote-access status` | 查看公网连接是关闭、注册中还是已上线 |
| `nimoteconnect remote-access enable` | 明确启用公网连接 |
| `nimoteconnect remote-access disable` | 关闭公网连接 |
| `nimoteconnect doctor` | 查看本机版本、后台服务和 SSH 端口等诊断 |
| `nimoteconnect restart` | 重启 Connect |
| `nimoteconnect logout` | 解除这台电脑的账户绑定 |

Windows PowerShell 中，把表里的 `nimoteconnect` 换成 `& "$env:LOCALAPPDATA\NimoteConnect\nimote-connect.exe"`。CLI 和 GUI 操作的是同一用户的公网连接开关。如果设备没出现，先检查 `remote-access status`、SSH 服务、绑定账号和网络状态。

## 已有 SSH 入口时部署，以及后续升级

macOS 和 Linux 可先在 NimoteCode 建立 SSH 连接，再进入 **开发主机 → Host → 安装 Nimote Connect**，也可以从 **Connect / Tailscale** 打开安装入口。向导从 nimotecode.com 读取正式发行清单，从 GitHub 下载并校验安装包。出现配对提示时按提示批准。Windows 请按上方步骤手动安装。首次使用公网连接前，需要通过已有 SSH 入口安装，或直接在电脑上安装并绑定。

手动升级时，下载并校验新版本的对应商业包，完整解压后使用**原安装用户**重新运行 `./install.sh`（Windows：`.\install.ps1`）。先让正在运行的 Host 任务结束。升级会保留设备绑定和 Host 数据。已绑定的 macOS / Linux 主机可用 `./install.sh --skip-login`；Windows 可加 `-SkipLogin`。完成后依次检查 `nimoteconnect status`、`nimoteconnect host status` 和 `nimoteconnect remote-access status`。卸载则在安装包目录运行 `./install.sh --uninstall`（Windows：`.\install.ps1 -Uninstall`）。

如何在 App 内使用随包安装的服务，请参阅 [Host 安装说明](/zh/docs/host/getting-started)。
