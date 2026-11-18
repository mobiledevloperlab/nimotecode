---
title: "Host 模式：开源远程任务与编程 Agent 工作台 | NimoteCode"
description: "用 NimoteHost 托管终端、任务与编程 Agent，手机断线后工作继续。了解功能价值、Apache-2.0 完整源码、自定义与贡献，以及安装部署和服务维护。"
---

# Host 模式：开源的远程任务与 Agent 工作台

如果你想在手机上发起任务，离开应用一会儿，再回来查看结果，可以用 Host 模式。任务和终端由开发电脑上的 NimoteHost 托管，手机通过 SSH 查看输出、输入命令或回复 Agent。

先把 Host 装到运行项目的电脑上，再打开手机连接。只在手机上安装 NimoteCode，还不能使用 Host。

## NimoteCode 和 NimoteHost 分别做什么？

**NimoteCode 是操作客户端，NimoteHost 在电脑上执行和托管工作。** NimoteHost 提供独立 CLI 和可选的桌面管理器，支持 Linux、macOS、Windows，以 Apache-2.0 许可证在 [NimoteHost 仓库](https://github.com/mobiledevloperlab/nimotehost)开放完整源码。NimoteCode 应用仍为商业闭源软件。Host 也可独立运行，通过 RPC、Go 客户端包和按需启用的 MCP 接口接入其他工具。

连接关系是：**NimoteCode → 已有 SSH 连接 → NimoteHost → 项目工具与 Agent**。无需额外的 Nimote 账号、公网中继或 Host 入站端口；本地 API 需要认证，Host 凭据保留在电脑上。命令默认以 Host 所属的系统账号权限运行；需要隔离用户或访问范围时，应使用独立系统账号。

| 选择哪种方式 | 适合什么情况 |
| --- | --- |
| 普通 SSH 工作区 | 编辑远程文件、使用终端和查看 Git，无需安装 Host。 |
| Host 模式 | 手机断线后继续运行任务，回来查看输出，管理兼容 Agent 的结构化对话和审批。 |
| Host CLI | 在服务器部署，或通过命令行管理后台服务，不需要桌面环境。 |
| Host 桌面包 | 在电脑上管理服务、会话、设备、设置和诊断；已包含 CLI。 |

仓库和发布包将在公开发布后可用。如果 GitHub 显示 404，或没有对应安装包，请使用维护者提供的完整预览包、源码，或等待发布。下面给出的是部署流程，不代表公开下载已经开放。

## Host 能做什么，能为你带来什么？

Host 将开发电脑变成可从手机随时回来的工作台。项目和工具链继续留在熟悉的电脑上，执行由电脑负责，你用 NimoteCode 查看进展、审查结果、处理需要自己决定的事项。

| 能力 | 带来的价值 |
| --- | --- |
| 托管终端与任务 | 启动构建、测试、脚本或交互 Shell；客户端断线不会结束托管进程，重新连接即可查看保留的输出并继续操作。 |
| 结构化 Agent 协作 | 使用兼容的 Codex、Claude Code、OpenCode，阅读对话和工具结果，回复权限请求，并在支持时向执行中的 Agent 追加指令。 |
| 会话与任务收件箱 | 搜索、筛选、固定工作，集中找到待审批、执行失败和完成待审的任务，减少逐个打开会话确认的操作。 |
| 验证与代码审查 | 检查实际测试记录、退出码和 Diff，再决定是否接受结果；主机支持时，可将 GitHub Issue 派发给 Agent，并选择代码发布策略。 |
| 沿用已有开发环境 | 在 Linux、macOS、Windows 上直接使用项目现有文件和工具链；服务器选 CLI，桌面选管理器，两者操作同一个 Host 服务。 |
| 开源与按需定制 | 审查 Host 完整源码、自行编译、修改行为、扩展集成，并在 Apache-2.0 许可下贡献改进。 |

例如，离开电脑前从手机启动项目测试，稍后回来查看退出码；让 Agent 完成一处明确的修复，途中处理权限请求，完成后审查 Diff 和验证记录。执行一直发生在开发电脑上，手机负责呈现进展和操作入口。

Host 和托管进程需要保持运行，Host 或系统重启不会恢复原进程。Agent、收件箱、验证、Issue 和插件入口取决于所连接主机及已安装工具。先在运行项目的电脑部署 Host，再连接手机使用。

## NimoteCode 和 NimoteHost 分别做什么？

**NimoteCode 是操作客户端，NimoteHost 在电脑上执行和托管工作。** NimoteHost 提供独立 CLI 和可选的桌面管理器，支持 Linux、macOS、Windows，以 Apache-2.0 许可证在 [NimoteHost 仓库](https://github.com/mobiledevloperlab/nimotehost)开放完整源码。NimoteCode 应用仍为商业闭源软件。Host 也可独立运行，通过 RPC、Go 客户端包和按需启用的 MCP 接口接入其他工具。

连接关系是：**NimoteCode → 已有 SSH 连接 → NimoteHost → 项目工具与 Agent**。无需额外的 Nimote 账号、公网中继或 Host 入站端口；本地 API 需要认证，Host 凭据保留在电脑上。命令默认以 Host 所属的系统账号权限运行；需要隔离用户或访问范围时，应使用独立系统账号。

| 选择哪种方式 | 适合什么情况 |
| --- | --- |
| 普通 SSH 工作区 | 编辑远程文件、使用终端和查看 Git，无需安装 Host。 |
| Host 模式 | 手机断线后继续运行任务，回来查看输出，管理兼容 Agent 的结构化对话和审批。 |
| Host CLI | 在服务器部署，或通过命令行管理后台服务，不需要桌面环境。 |
| Host 桌面包 | 在电脑上管理服务、会话、设备、设置和诊断；已包含 CLI。 |

仓库和发布包将在公开发布后可用。如果 GitHub 显示 404，或没有对应安装包，请使用维护者提供的完整预览包、源码，或等待发布。下面给出的是部署流程，不代表公开下载已经开放。

## Host 能做什么？

- **接续远程工作：** 在手机上启动终端或任务，离开应用后重新连接，查看输出并继续仍在运行的会话。
- **管理 Agent 会话：** 使用电脑上已安装的兼容 Agent，查看工具调用、回复权限请求，并返回原会话继续工作。
- **整理任务和会话：** 搜索、筛选、固定会话；主机支持时，还可以在任务收件箱查看状态、验证记录和代码变更。
- **使用已有开发环境：** 命令和 Agent 在远程电脑的项目目录中运行，手机通过 SSH 连接，无需将 Host 的本地 HTTP 端口开放到公网。

这适合需要从手机查看构建、测试或 Agent 工作进度的人。Host 和进程必须保持运行：电脑睡眠、用户注销或 Host 重启可能中断工作，重启后也不会恢复原进程。Agent、任务收件箱和插件等入口取决于主机提供的能力。

本文按 2.4.0 的实现编写。NimoteHost 目前是开发预览版，Agent、任务收件箱和插件入口会随主机能力变化。下面的图片来自连接的 Android 真机，使用英文界面和浅色主题。截图时应用包标记为 2.3.1（Build 64），Host 报告 2.4.0 本地构建；你的按钮文字和位置可能略有不同。

## 完整开源：可审查、可自定义、可参与贡献

**NimoteHost 完整源码采用 Apache-2.0 许可证开放**，范围包括 Host 服务端、CLI、桌面管理器与集成 SDK。你可以检查远程执行、凭据处理和会话持久化的实现，自行编译部署，并按自己的开发环境修改。该许可适用于 NimoteHost；NimoteCode 客户端仍是商业闭源软件。

- **查看与自行构建：** 阅读源码和依赖，核对许可证声明，按下文从源码构建，无需只依赖预编译包。
- **修改与自定义：** Fork 仓库，调整 Host 行为、桌面界面或部署方式，维护自己的构建；与 App 连接时保持协议和能力协商兼容。
- **扩展工作流：** 使用 `pkg/pluginsdk` 开发社区插件，通过 RPC、MCP 接入自己的工具，或用 `pkg/hostclient` 编写 Go 集成。MCP 默认只读，写操作需明确启用。
- **贡献代码与文档：** 通过 Issue 反馈可复现问题或提出方案，通过 Pull Request 贡献修复、Agent 适配、插件、翻译和文档；较大的协议或架构调整先讨论，再按贡献指南完成检查。

[浏览完整源码](https://github.com/mobiledevloperlab/nimotehost) · [Apache-2.0 许可证](https://github.com/mobiledevloperlab/nimotehost/blob/master/LICENSE) · [贡献指南](https://github.com/mobiledevloperlab/nimotehost/blob/master/CONTRIBUTING.zh-CN.md) · [插件 SDK](https://github.com/mobiledevloperlab/nimotehost/blob/master/docs/plugin-system/plugin-sdk.md)

### 实现透明，访问由你掌握

Host 沿用已有的 SSH 认证连接，本地 HTTP API 仅监听回环地址并要求认证；Host 凭据保留在电脑上，无需额外的 Nimote 中继或公开 API 端口。你决定服务部署在哪里，也可以审查和修改处理访问的代码。

命令默认使用 Host 所属系统账号的权限，应按项目需要分配账号、审查 Agent 与插件权限，并保持依赖更新。Agent 的提示词与项目上下文可能发送给该 Agent 配置的模型服务商。开源让安全审查可验证，并不等于保证零漏洞或已经完成独立安全审计；漏洞反馈请按[安全政策与私密报告流程](https://github.com/mobiledevloperlab/nimotehost/blob/master/SECURITY.zh-CN.md)处理。

## 先准备好这几样

- 一台能通过 SSH 登录的 Linux、macOS 或 Windows 电脑。手机需要能访问它的 SSH 地址。
- 包含 Host 模式的 NimoteCode 构建，以及与它兼容的 NimoteHost。本文基于 2.4.0 实现，相关功能将并入即将发布的 2.4.1；安装 Host 不会让旧版 App 自动获得该入口。
- 一个远程账号有权访问的项目目录。后面的“工作区目录”填电脑上的路径，不是手机路径。

第一次用 SSH，先按[本地与 SSH 工作区](/zh/docs/ssh)把连接配好。Windows 可以先看 [Windows SSH 与 SFTP](/zh/docs/windows-ssh-sftp)。Host 不会替你安装或开启 SSH。

后台运行还需要系统服务环境：Linux 使用 systemd 用户服务，macOS 需要该用户已登录图形会话，Windows 使用用户登录计划任务。缺少对应环境时，可以先前台试运行。电脑应保持唤醒和网络可达；跨网络访问可使用可达的 SSH 地址或已有 VPN，安装 Host 本身不会让内网地址变成公网可达。

## 1. 下载 NimoteHost

打开 [NimoteHost 发布页](https://github.com/mobiledevloperlab/nimotehost/releases)，选择适合开发电脑系统和 CPU 的完整分发包。服务器上只需要 CLI；想在电脑上查看服务和会话，可以选择带 GUI 的包。

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
sha256sum nimotehost-2.4.0-linux-amd64.tar.gz
# macOS
shasum -a 256 nimotehost-2.4.0-darwin-arm64.tar.gz
```

```powershell
Get-FileHash -Algorithm SHA256 .\nimotehost-2.4.0-windows-amd64.zip
```

将输出的摘要与同一发布包旁的 `.sha256` 文件逐字符对比。确认后，用系统解压工具解压整个包，在同时包含 `nimotehost` 或 `nimotehost.exe` 和 `scripts` 的目录打开终端。校验用于检查文件完整性，安装包和校验文件都应从官方发布入口获取。

解压后保留整个目录，包括二进制、安装脚本、许可证、`BUILD.json`、`MODULES.json` 和 `SHA256SUMS`。不要只复制 GUI 程序，也不要在启用服务后删掉它引用的文件。

### 从源码安装

源码安装需要 Git 和 Go 1.26.5 或更高版本；预编译包不需要 Go。仓库公开后，在开发电脑上以普通账号执行以下命令。已有维护者提供的完整源码时，直接进入源码根目录执行最后一行：

```sh
git clone https://github.com/mobiledevloperlab/nimotehost.git
cd nimotehost
go run ./tools/install
```

Go 安装器可在 Unix Shell 和 Windows PowerShell 中运行，会构建、校验、安装并启动 CLI 用户服务，不包含桌面 GUI 构建。只构建分发包而不安装，可运行 `go run ./tools/build`；构建桌面包用 `go run ./tools/build -gui`，还需仓库说明中的原生桌面 SDK 和 C 编译器。源码构建也需要匹配 App 协议，并不保证兼容旧商店版本。

## 2. 在开发电脑安装并启动

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

## 3. 在 NimoteCode 选择 Host 和 SSH 连接

1. 打开 NimoteCode 的模式入口，选择 **Host**。已有工作区时，也可以从模式菜单切换。
2. 在部署提示页点 **SSH connections（SSH 连接）**。
3. 选择安装 Host 的那台电脑及其 SSH 账号。没有保存过连接，就先选 **New Remote Connection** 添加。
4. 首次连接时核对 SSH 主机密钥。连上后应能看到会话列表；没有历史记录时列表为空是正常的。

<div class="doc-screenshots">
  <DocScreenshot file="host-mode.png" caption="欢迎页的模式入口，Host 位于 IDE、终端和 AI 下方。" />
  <DocScreenshot file="host-setup.png" caption="还没选主机时，Host 页面会提示先安装服务，再选择 SSH 连接。" />
</div>

如果提示未安装、服务未启动或协议不兼容，先按提示处理，再重试。手机不会因为发现了已停止的 Host 就自动启动它。

## 4. 先开一个终端试试

1. 点右上角 **+**，在新会话窗口选 **Terminal（终端）**。
2. 填写工作区目录，也可以点文件夹图标去选。目录必须已经存在，并且当前远程账号有访问权限。
3. 点 **Start session（启动会话）**，等 Shell 提示符出现。
4. 输入 `pwd` 查看当前目录，再输入 `echo Host connected` 检查输出。Windows PowerShell 用 `Get-Location` 查看目录。

<div class="doc-screenshots">
  <DocScreenshot file="host-terminal.png" caption="演示终端执行了 pwd 和 echo Host connected。回到列表后重新打开，刚才的输出还在。" />
</div>

这张图使用 `/tmp/nimote-host-guide` 这个演示目录。macOS 的 `pwd` 可能显示 `/private/tmp/nimote-host-guide`，两者指向同一位置。自己使用时换成真实项目目录；需要长期保留的文件别放在临时目录里。

返回列表不会关闭终端。想结束这个演示 Shell，输入 `exit`，或使用会话里的停止按钮。停止后进程就结束了，重新打开历史只能看保留的输出。

## 5. 回到原来的会话

在 **Sessions** 页面按名称或目录搜索，用 **All / Running / History** 切换范围，再点会话进去。右侧菜单可以固定、重命名或查看更多操作。

<div class="doc-screenshots">
  <DocScreenshot file="host-sessions.png" caption="按演示目录筛选后，只显示刚创建的终端。Running 表示它仍在主机运行。" />
</div>

离开应用或 SSH 断开后，只要 Host 和它托管的进程还在，重新连接同一台主机就可以回到原会话，不会为了恢复画面再执行一次原命令。

主机睡眠、Host 重启、系统重启或用户注销是另一回事。Host 不会在重启后复活原进程；未完成的会话会标记为中断。Linux 注销后的运行取决于用户服务和 lingering 设置；macOS、Windows 的用户服务也受登录会话影响。

如果启动时超时，先刷新列表，确认是否已经创建成功。连续点“启动”可能让你误开新会话。

## 6. 运行一次性任务

在 **+ → Task（任务）** 中选择目录，填入要执行的命令，再启动。第一次可以用 `echo Host connected`，确认目录和输出没问题后，再运行项目的构建或测试命令。

任务结束后看退出码和日志。名字叫“测试”的任务不代表测试真的通过；它运行了什么、输出了什么，都要在结果里确认。需要持续交互的命令更适合放进 Terminal。

## 7. 创建 Agent 会话

先在电脑上安装并登录你要使用的 Agent。Host 支持发现兼容的 Codex、Claude Code 和 OpenCode；Claude 的结构化对话还需要兼容的 `claude-agent-acp`。Host 不会自动下载这些工具，也不包含模型账号或额度。

1. 点 **+ → Agent**，检查项目目录。
2. 从 **Installed agent** 选择主机上已发现的 Agent。没有 Agent 选项时，先在电脑上检查安装、登录和服务可见的 PATH。
3. 选择执行策略。第一次可以用 **逐次确认**，每个原生权限请求都先由你确认；**智能执行**会自动处理可验证的工作区读取、搜索和结构化编辑，敏感或无法判断的操作仍会询问。
4. 创建会话后，先给一个小任务，例如“列出项目里的测试命令，先不要修改文件”。查看工具调用和输出，再决定下一步。

<div class="doc-screenshots">
  <DocScreenshot file="host-agent-form.png" caption="Agent 创建表单：目录、已安装 Agent、执行策略和对话选择。这张图只展示配置，没有启动模型任务。" />
</div>

**完全自动**会自动批准本会话的原生权限请求，仍受 Agent 自身沙箱限制。它和“自动发布代码”是两项设置，不要混在一起。支持的会话还可以选择独立 worktree；它从已提交的 HEAD 建立新分支，不会带上原目录未提交的文件。

对话中可以查看工具详情、回复审批，并使用主机提供的模型或命令选项。支持运行中追问的 Agent 可以继续接收指令；不支持的选项不会强行出现。恢复历史时，选择对应提供方的原对话；“打开终端”也不保证把任意正在运行的 CLI 变成同一条结构化对话。

## 8. 用任务收件箱整理结果

主机支持时，会话列表上会显示 **Task inbox（任务收件箱）**。从这里找待审批、失败、运行中和完成待审的任务，打开详情看原会话、验证记录和 Diff。

先看测试是否实际执行、退出码是多少，以及验证对应的版本。Agent 说“已通过”不等于有测试证据。过期或未知的验证结果，也不能当作当前版本通过。

处理完成后可以标记已处理或归档；待审批项目不能直接藏起来。需要修正就回原会话继续。打开 Git 审查前，检查当前主机和目录是不是这项任务所在的位置。

要从 GitHub Issue 派发任务，在支持该功能的入口填写 Issue、Host 项目目录、Agent、测试命令和发布策略。远程电脑需要安装并授权 `gh`；手机的 GitHub 登录不会复制给 Host。第一次保留默认的手动发布，确认 Diff 和验证结果后，再提交、推送或创建草稿 PR。自动发布必须在派发时明确选择，Host 不会自动合并 PR。

## 9. 使用 Host 插件

连接 SSH 后，在应用配置的插件区域查看当前 Host 提供的插件。可用插件可以从侧边栏打开，具体表单和操作由插件决定。遇到权限或兼容性提示，先检查当前账号和 Host 版本，不要重复提交同一操作。完整说明见[插件指南](/zh/docs/plugins)。

## 服务管理、升级与本地数据

日常维护请使用安装后的 CLI。Linux/macOS 路径为 `~/.local/share/nimotehost/nimotehost`；Windows PowerShell 用 `& "$env:LOCALAPPDATA\NimoteHost\nimotehost.exe"` 调用。下表假定安装目录已加入 PATH，否则将命令中的程序名替换为完整路径。

| 命令 | 作用 |
| --- | --- |
| `nimotehost version` | 查看当前执行文件的版本。 |
| `nimotehost status` | 检查服务是否响应；运行中返回 `running: true`。 |
| `nimotehost capabilities` | 查看协议、平台、功能与已发现的工具。 |
| `nimotehost agents` | 检测已安装的 Agent 版本。 |
| `nimotehost install` | 从固定程序路径注册并启动用户服务。 |
| `nimotehost stop` | 停止 Host，同时结束正在托管的任务。 |
| `nimotehost restart` | 重启已安装服务，会结束运行中的任务。 |
| `nimotehost uninstall` | 停止并移除服务，保留凭据和记录。 |

已安装服务停止后，可用 `nimotehost restart` 启动；`nimotehost start` 是前台运行。`setup` 用于校验并安装整个包，`install` 用于注册固定位置上已有的程序。不要换账号或用 sudo 执行这些操作。

### 检查 SSH 实际使用的环境

在另一台电脑上执行，把 `user@host` 换成你的 SSH 目标。以下示例用于 Unix 主机：

```sh
ssh user@host 'command -v nimotehost && nimotehost status'
```

如果找不到命令，再检查固定路径：

```sh
ssh user@host '$HOME/.local/share/nimotehost/nimotehost status'
```

完整路径能运行时，应让 SSH 非交互环境的 PATH 包含安装目录，再回 App 重试。Windows 按前文检查同账号的发现记录和固定路径。Host 服务也需要找到 Agent 工具；Unix 安装时会记录 PATH 中的绝对路径和 `XDG_CONFIG_HOME`。改动工具路径后，先完成当前任务，再用已安装的程序执行 `nimotehost stop`，在修正后的环境执行 `nimotehost install`，刷新服务环境。

### 升级与卸载

下载并校验新的兼容完整包，结束当前任务，以原账号重新运行新包中的安装器。安装流程会保留旧包、检查新服务就绪，并拒绝中断活动任务；对未变化且健康的安装重复执行不会重启服务。先关闭旧 GUI。使用过旧程序名的预览版时，按仓库迁移说明操作，不要自行重命名状态目录。

升级后检查 `version`、`status` 和 `capabilities`，重新连接并创建一个小测试会话。降级前先备份状态；旧二进制可能无法读取新版记录。需要移除登录启动时，在已安装程序仍存在的情况下运行 `nimotehost uninstall`，之后按需删除安装包文件。卸载服务会保留本地身份、凭据和任务记录。

| 系统 | 安装目录 | 默认配置与状态目录 |
| --- | --- | --- |
| Linux | `~/.local/share/nimotehost` | `~/.config/nimotehost`，设置 XDG 时为 `$XDG_CONFIG_HOME/nimotehost` |
| macOS | `~/.local/share/nimotehost` | `~/Library/Application Support/nimotehost` |
| Windows | `%LOCALAPPDATA%\NimoteHost` | `%APPDATA%\nimotehost` |

状态目录包含私有身份、凭据、配置和会话记录。仅在 Host 停止时备份，保留仅所属用户可访问的权限，勿上传到公开仓库或问题附件。项目文件和 Agent 提供方的数据需要单独备份；复制 Host 记录不能恢复正在运行的进程。

### 查看服务启动失败的原因

- Linux：`systemctl --user status nimotehost.service`，日志用 `journalctl --user -u nimotehost.service -n 50 --no-pager`。缺少用户服务管理器时先前台运行；注销后继续运行需符合系统 lingering 策略。
- macOS：在已登录用户会话中执行 `launchctl print gui/$(id -u)/com.nimotehost`；没有图形登录会话时先尝试 CLI 前台运行。
- Windows：`schtasks.exe /Query /TN NimoteHost /V /FO LIST`，核对是否以目标登录账号安装。

## 连不上时，按这个顺序查

| 看到的情况 | 先检查什么 |
| --- | --- |
| SSH 本身连不上 | 地址、端口、账号、网络和主机密钥；先让普通 SSH 能登录。 |
| 未找到 Host | 是否安装在当前 SSH 账号下；Unix 检查 SSH 环境的 PATH，Windows 检查该账号的发现记录和安装路径。 |
| 找到 Host，但服务没启动 | 在电脑上运行 `nimotehost status`；按你的安装方式启动服务或前台进程。 |
| 协议不兼容 | 将 App 与 Host 更新到配套版本，再连接。 |
| 没有可选 Agent | 检查 CLI 和适配器安装、账号登录，以及 Host 服务能否找到它们；改过工具路径后，等任务结束再刷新服务环境。 |
| 列表能看，不能输入 | 可能只是已加载的历史；先确认已重新连接，且会话还在运行。 |
| 目录不存在或没有权限 | 使用远程电脑上的绝对路径，确认 SSH 账号可以进入该目录。 |
| 已启动却没收到结果 | 先刷新列表查找原会话；结果不明时不要直接重复创建。 |

停止、重启或更新 Host 前，先处理完正在运行的任务。更新会保留记录，但不能把运行中的进程迁移到新服务。

进一步了解：[SSH 工作区](/zh/docs/ssh) · [AI 与 Agent](/zh/docs/ai) · [任务](/zh/docs/tasks) · [NimoteHost 实现说明](https://github.com/mobiledevloperlab/nimotehost/blob/master/docs/completed.md)
