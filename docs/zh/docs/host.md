---
title: Host 模式使用教程：安装 NimoteHost，连接终端与 Agent | NimoteCode
description: 在 Linux、macOS 或 Windows 安装 NimoteHost，再从 NimoteCode 通过 SSH 连接，创建终端、运行任务、使用 Agent，并在离开后回到原会话。
---

# 用 Host 模式继续远程任务

如果你想在手机上发起任务，离开应用一会儿，再回来查看结果，可以用 Host 模式。任务和终端由开发电脑上的 NimoteHost 托管，手机通过 SSH 查看输出、输入命令或回复 Agent。

先把 Host 装到运行项目的电脑上，再打开手机连接。只在手机上安装 NimoteCode，还不能使用 Host。

## Host 能做什么？

- **接续远程工作：** 在手机上启动终端或任务，离开应用后重新连接，查看输出并继续仍在运行的会话。
- **管理 Agent 会话：** 使用电脑上已安装的兼容 Agent，查看工具调用、回复权限请求，并返回原会话继续工作。
- **整理任务和会话：** 搜索、筛选、固定会话；主机支持时，还可以在任务收件箱查看状态、验证记录和代码变更。
- **使用已有开发环境：** 命令和 Agent 在远程电脑的项目目录中运行，手机通过 SSH 连接，无需将 Host 的本地 HTTP 端口开放到公网。

这适合需要从手机查看构建、测试或 Agent 工作进度的人。Host 和进程必须保持运行：电脑睡眠、用户注销或 Host 重启可能中断工作，重启后也不会恢复原进程。Agent、任务收件箱和插件等入口取决于主机提供的能力。

本文按 2.4.0 的实现编写。NimoteHost 目前是开发预览版，Agent、任务收件箱和插件入口会随主机能力变化。下面的图片来自连接的 Android 真机，使用英文界面和浅色主题。截图时应用包标记为 2.3.1（Build 64），Host 报告 2.4.0 本地构建；你的按钮文字和位置可能略有不同。

## 先准备好这几样

- 一台能通过 SSH 登录的 Linux、macOS 或 Windows 电脑。手机需要能访问它的 SSH 地址。
- NimoteCode 2.4.0，以及与它兼容的 NimoteHost。
- 一个远程账号有权访问的项目目录。后面的“工作区目录”填电脑上的路径，不是手机路径。

第一次用 SSH，先按[本地与 SSH 工作区](/zh/docs/ssh)把连接配好。Windows 可以先看 [Windows SSH 与 SFTP](/zh/docs/windows-ssh-sftp)。Host 不会替你安装或开启 SSH。

## 1. 下载 NimoteHost

打开 [NimoteHost 发布页](https://github.com/mobiledevloperlab/nimotehost/releases)，选择适合开发电脑系统和 CPU 的完整分发包。服务器上只需要 CLI；想在电脑上查看服务和会话，可以选择带 GUI 的包。

| 电脑 | 系统标记 | 架构 |
| --- | --- | --- |
| Linux | linux | Intel/AMD 64 位选 amd64；ARM 64 位选 arm64 |
| macOS | darwin | Apple 芯片选 arm64；Intel 芯片选 amd64 |
| Windows | windows | 常见 x64 电脑选 amd64；ARM 电脑选 arm64 |

Linux、Windows 另有 386 CLI，供 32 位 x86 使用，不包含 GUI。macOS 没有 32 位版本。

同时下载包旁边的 SHA256 校验文件，核对后再解压。Linux 可以用 `sha256sum`，macOS 用 `shasum -a 256`，Windows PowerShell 用 `Get-FileHash -Algorithm SHA256`。对比计算结果和下载页提供的值。

解压后保留整个目录，包括二进制、安装脚本、许可证、`BUILD.json`、`MODULES.json` 和 `SHA256SUMS`。不要只复制 GUI 程序，也不要在启用服务后删掉它引用的文件。

如果发布页暂时没有适合你的包，也可以按 [NimoteHost 仓库说明](https://github.com/mobiledevloperlab/nimotehost)从源码构建；源码安装需要 Go 1.26.5 或更高版本，预编译包不需要 Go。

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
