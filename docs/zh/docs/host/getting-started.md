---
title: "下载与安装 | NimoteHost"
description: "NimoteHost 下载与安装说明与操作步骤。"
---

# 下载与安装

请按**运行 NimoteHost 的电脑／服务器的操作系统和 CPU 架构**选择安装包，即使你正在手机上下载，也应以 Host 主机为准。然后按需选择 CLI 或桌面版，并确认该发行版本与 NimoteCode 客户端兼容。

[硬件支持与版本选择](/zh/docs/host/compatibility)

## 先准备好这几样

- 一台能通过 SSH 登录的 Linux、macOS 或 Windows 电脑。手机需要能访问它的 SSH 地址。
- NimoteCode 2.4.1 或更新版本，以及与它兼容的 NimoteHost。安装 Host 不会让旧版 App 自动获得该入口。
- 一个远程账号有权访问的项目目录。后面的“工作区目录”填电脑上的路径，不是手机路径。

第一次用 SSH，先按[本地与 SSH 工作区](/zh/docs/ssh)把连接配好。Windows 可以先看 [Windows SSH 与 SFTP](/zh/docs/windows-ssh-sftp)。Host 不会替你安装或开启 SSH。

后台运行还需要系统服务环境：Linux 使用 systemd 用户服务，macOS 需要该用户已登录图形会话，Windows 使用用户登录计划任务。缺少对应环境时，可以先前台试运行。电脑应保持唤醒和网络可达；跨网络访问可使用可达的 SSH 地址或已有 VPN，安装 Host 本身不会让内网地址变成公网可达。

## 通过 SSH 安装或更新 {#install-over-ssh}

在 NimoteCode 2.5.0 中打开 **Host**，通过 SSH 连接电脑，然后在 Host 面板检查安装状态。确认安装后，应用会从面板显示的 NimoteHost 官方发行版下载并校验匹配的 CLI 安装包，再使用 SSH 账号安装和启动。电脑需要能访问 GitHub Releases。如果已安装但服务停止，可使用面板中的启动操作。

面板会显示进度、错误和重试入口。可从更新提示发起更新，关闭提示后仍可从 Host 顶栏打开。若更新需要停止会话，请先核对受影响的工作，再确认。需要桌面 GUI 或源码构建时，可使用下文的手动步骤。

Host 面板识别出版本类型后，请使用面板为该版本提供的安装或更新入口。安装 Community 版需要相应平台的 CLI 包已经发布。已配对电脑缺少服务时，按 Nimote Connect 的安装指引处理。版本类型无法识别时，先向该安装包的分发方核对再更新。

## 1. 下载 NimoteHost

打开 [NimoteHost 社区版](https://github.com/mobiledevloperlab/nimotehost/releases/tag/community-v2.5.0)，选择适合开发电脑系统和 CPU 的完整分发包。服务器上只需要 CLI；想在电脑上查看服务和会话，可以选择带 GUI 的包。

CLI 包名称为 `nimotehost-<version>-<os>-<arch>`，桌面包为 `nimotehost-gui-<version>-<os>-<arch>`。Linux/macOS 使用 `.tar.gz`，Windows 使用 `.zip`。不打算编译时，应下载二进制分发包，而不是 GitHub 自动生成的 Source code 源码压缩包。系统要求以对应发布说明为准；Linux 桌面包要求 glibc 2.35 或更高版本，macOS 包暂未签名或公证。

| 电脑 | 系统标记 | 架构 |
| --- | --- | --- |
| Linux | linux | Intel/AMD 64 位选 amd64；ARM 64 位选 arm64 |
| macOS | darwin | Apple 芯片选 arm64；Intel 芯片选 amd64 |
| Windows | windows | 常见 x64 电脑选 amd64；ARM 电脑选 arm64 |

Linux、Windows 另有 386 CLI，供 32 位 x86 使用，不包含 GUI。macOS 没有 32 位版本。

同时下载包旁边的 SHA256 校验文件，核对后再解压。Linux 可以用 `sha256sum`，macOS 用 `shasum -a 256`，Windows PowerShell 用 `Get-FileHash -Algorithm SHA256`。对比计算结果和下载页提供的值。

例如，将以下示例文件名替换成你下载的实际文件名：

```sh
# Linux
sha256sum nimotehost-2.5.0-community-linux-amd64.tar.gz
# macOS
shasum -a 256 nimotehost-2.5.0-community-darwin-arm64.tar.gz
```

```powershell
Get-FileHash -Algorithm SHA256 .\nimotehost-2.5.0-community-windows-amd64.zip
```

将输出的摘要与同一发布包旁的 `.sha256` 文件逐字符对比。确认后，用系统解压工具解压整个包，在同时包含 `nimotehost` 或 `nimotehost.exe` 和 `scripts` 的目录打开终端。校验用于检查文件完整性，安装包和校验文件都应从官方发布入口获取。

解压后保留整个目录，包括二进制、安装脚本、许可证、`BUILD.json`、`MODULES.json` 和 `SHA256SUMS`。不要只复制 GUI 程序，也不要在启用服务后删掉它引用的文件。

### 从源码安装 {#host-source}

源码安装需要 Git 和 Go 1.26.5 或更高版本；预编译包不需要 Go。在开发电脑上以普通账号执行以下命令。已有维护者提供的完整源码时，直接进入源码根目录执行最后一行：

```sh
git clone https://github.com/mobiledevloperlab/nimotehost.git
cd nimotehost
go run ./tools/install
```

Go 安装器可在 Unix Shell 和 Windows PowerShell 中运行，会构建、校验、安装并启动 CLI 用户服务，不包含桌面 GUI 构建。只构建分发包而不安装，可运行 `go run ./tools/build`；构建桌面包用 `go run ./tools/build -gui`，还需仓库说明中的原生桌面 SDK 和 C 编译器。源码构建也需要匹配 App 协议，并不保证兼容旧商店版本。

## 2. 在开发电脑安装并启动 {#host-install}

以下命令都在开发电脑上执行。安装时使用之后 SSH 登录的那个账号。

### Linux 和 macOS

在终端进入解压后的目录，运行：

```sh
sh scripts/install.sh
./nimotehost status
./nimotehost capabilities
```

安装脚本会校验分发包，复制到固定用户目录，安装用户服务并检查是否启动成功。用普通账号执行，不加 `sudo`。`status` 返回 `running: true` 后，再去手机连接。

上面的 `./nimotehost` 从解压目录运行。后续如果已经把安装目录加入 PATH，也可以直接用 `nimotehost status`。手机的 SSH 环境同样需要找到这个命令；交互终端里能运行，不一定表示 SSH 的非交互环境也能找到。

### Windows

在 PowerShell 进入解压后的目录：

```powershell
.\scripts\install.ps1
.\nimotehost.exe status
.\nimotehost.exe capabilities
```

安装后使用同一个 Windows 账号连接 SSH。新版客户端可以读取该账号的 `%APPDATA%\nimotehost\discovery.json` 查找 CLI；找不到时再尝试固定安装位置和 SSH PATH。

如果只是先试一下，也可以从本地目录运行 `nimotehost.exe start`。它在当前窗口前台运行；需要长期使用时，再从完整包安装用户服务。移动便携程序后，要从新位置重新启动 Host。

### 只想前台试运行

Linux、macOS 在解压目录执行 `./nimotehost start`；Windows 执行 `.\nimotehost.exe start`。保持这个窗口打开即可。已经有服务在运行时，不需要再启动第二份。

Host 默认只监听电脑本机的 loopback 地址，手机通过 SSH 调用它。不要给手机填写 Host 的本机 HTTP 端口，也不需要把这个端口开放到公网。

### 打开桌面管理器

安装 GUI 包后，从安装目录打开 macOS 的 `NimoteHost.app`、Windows 的 `nimotehost-gui.exe` 或 Linux 的 `nimotehost-gui`。**Overview** 查看服务状态，**Sessions** 搜索和筛选会话，**Devices** 管理受限设备，**Settings** 设置语言、主题和本地服务；**Help & diagnostics** 提供日志和诊断导出。受限设备还需要配置 SSH 密钥，单独登记设备不会限制普通 SSH 账号的权限。

关闭桌面窗口后，Host 和会话仍会继续运行；要结束工作需明确执行停止。Windows/macOS 关闭窗口通常隐藏至托盘，Linux 托盘行为取决于桌面环境。桌面管理器与手机操作的是同一个 Host 服务。

[概览](/zh/docs/host) · [连接、终端与任务](/zh/docs/host/sessions)
