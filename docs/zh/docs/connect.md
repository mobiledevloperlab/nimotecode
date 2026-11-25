---
title: "Nimote Connect 下载、安装与升级"
description: "按系统选择 Nimote Connect 安装包，部署图形界面或命令行，绑定电脑并开启公网连接。"
---

# Nimote Connect 下载、安装与升级

**使用 NimoteCode「Connect / Tailscale」设备列表里的 Nimote 公网连接，电脑必须先安装并绑定 Nimote Connect。** 如果你已有可访问的 SSH 地址，或自己配置了 Tailscale IP / MagicDNS，可以直接选择「SSH」，无需安装 Connect。只有 NimoteHost 不会自动提供公网隧道或出现在设备列表中。

Connect 提供的是通往电脑 **SSH 服务的公网路径**。SSH 认证成功后，可在 NimoteCode 打开远程工作区、浏览和编辑文件、使用 SSH 终端，以及该 SSH 账号可用的其他远程工具。**Host 模式不是公网 SSH 或终端的前提**；它是持久任务和 Agent 会话等功能的独立选择。当前商业安装包同时包含 Host 服务，只是打包方式，不代表 Connect 只能用于 Host。

## 从哪里下载

[Nimote Connect 发布页](https://github.com/mobiledevloperlab/nimote-connect/releases) 目前提供 CLI 预览版（`v0.2.0-local.8b06897`），支持 macOS 和 Linux 的 arm64 与 amd64 架构。预览包同时包含 Connect 和 Host。下表中的桌面应用和 Windows 安装包为后续版本可能提供的包类型。

| 电脑 | 安装包与界面 | 前提 |
| --- | --- | --- |
| macOS Intel / Apple 芯片 | `darwin-amd64` / `darwin-arm64` 商业 tarball；CLI 和 NimoteConn 图形界面 | 已登录图形用户；在「系统设置 → 通用 → 共享」开启「远程登录」 |
| Linux x64 / ARM64 | `linux-amd64` / `linux-arm64` 商业 tarball；CLI，图形界面以该发行包实际内容为准 | systemd 用户会话和已启动的 OpenSSH 服务 |
| Windows x64 / ARM64 | 如该版本发布了 Windows CLI ZIP；没有 NimoteConn 图形界面 | 已登录用户和监听 TCP 22 的 OpenSSH Server |

预览版配对需要兼容客户端。NimoteCode 的公网访问功能计划后续正式推出。请使用同一版本的安装包和 SHA-256 校验文件。

## 安装与绑定

macOS / Linux：完整解压商业包，在解压目录以将来运行服务的**同一普通用户**执行，不要用 `sudo`：

```sh
./install.sh
```

Windows：解压 CLI ZIP，以当前登录用户在 PowerShell 执行：

```powershell
.\install.ps1
```

当前商业包会一起部署 Connect 和商业版 Host，但 Connect 的公网 SSH 不需要进入 Host 模式。按显示的设备码在 NimoteCode 中登录并批准绑定。macOS 可打开 `~/Applications/NimoteConn.app`；Linux 如果该包包含图形界面，可运行 `~/.local/bin/nimoteconn`。进入 **NimoteConn → Connect → 公网连接**，点击**启用公网连接**。公网连接默认关闭；等待状态变为**已上线**，再到 NimoteCode 的 **Connect / Tailscale** 标签选择电脑，使用该电脑的 SSH 账号认证。之后可按需要打开远程工作区或终端；Host 模式是另一项可选功能。首次连接还需核对 SSH 主机指纹。

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

如果电脑已有可访问的 SSH 地址，可先在 NimoteCode **SSH** 标签建立连接，用该电脑的 SSH 账号传输已校验的 Connect 安装包、解压并以将来运行服务的用户执行上面的安装器；然后批准绑定码并在电脑上开启公网连接。**这是 Connect 自己的部署流程，不依赖 Host 面板。** 首次安装无法通过尚未建立的 Connect 公网隧道完成：须先使用现有 SSH 入口，或在电脑本机安装。当前 App 尚未自动完成 Connect 首次安装；自动升级还要求配置了兼容的正式 GitHub Release，候选版不满足当前自动安装器的筛选条件。

手动升级时，下载并校验新版本的对应商业包，完整解压后使用**原安装用户**重新运行 `./install.sh`（Windows：`.\install.ps1`）。先让正在运行的 Host 任务结束。升级会保留设备绑定和 Host 数据。已绑定的 macOS / Linux 主机可用 `./install.sh --skip-login`；Windows 可加 `-SkipLogin`。完成后依次检查 `nimoteconnect status`、`nimoteconnect host status` 和 `nimoteconnect remote-access status`。卸载则在安装包目录运行 `./install.sh --uninstall`（Windows：`.\install.ps1 -Uninstall`）。

仅安装社区版 Host 请参阅 [NimoteHost 安装说明](/zh/docs/host/getting-started)。
