---
title: "连接、终端与任务 | NimoteHost"
description: "NimoteHost 连接、终端与任务说明与操作步骤。"
---

# 连接、终端与任务

先确认普通 SSH 可用。使用电脑可访问的 SSH 地址，或在「开发主机」里选择可用的已配对连接。使用 Nimote Connect 公网连接前，请先绑定设备并启用公网访问。

## 在 NimoteCode 选择 Host 和 SSH 连接 {#_3-在-nimotecode-选择-host-和-ssh-连接}

在 NimoteCode 中打开 **开发主机**，选择该电脑的 SSH 连接，再打开 **Host**。缺少 Host 时，点击 **安装 Nimote Connect**。向导会选择 SSH 主机、下载匹配的安装包并校验安装结果。出现设备批准提示时按提示操作。App 内自动安装与更新适用于受支持的 64 位 macOS 和 Linux。

<div class="doc-screenshots">
  <DocScreenshot file="host-mode.png" caption="欢迎页的模式入口，Host 位于 IDE、终端和 AI 下方。" />
  <DocScreenshot file="host-setup.png" caption="还没选主机时，Host 页面会提示先安装服务，再选择 SSH 连接。" />
</div>

如果提示未安装、服务未启动或协议不兼容，先按提示处理，再重试。手机不会因为发现了已停止的 Host 就自动启动它。

## 先开一个终端试试 {#_4-先开一个终端试试}

1. 点右上角 **+**，在新会话窗口选 **Terminal（终端）**。
2. 填写工作区目录，也可以点文件夹图标去选。目录必须已经存在，并且当前远程账号有访问权限。
3. 点 **Start session（启动会话）**，等 Shell 提示符出现。
4. 输入 `pwd` 查看当前目录，再输入 `echo Host connected` 检查输出。Windows PowerShell 用 `Get-Location` 查看目录。

<div class="doc-screenshots">
  <DocScreenshot file="host-terminal.png" caption="已完成的远程检查会话保留输出：四轮 Python 检查均通过 3 项测试。" />
</div>

这组 2.4.1 实机截图使用已有的 pocket-shop 工作区。终端截图展示已完成的命令会话；上面的步骤用于新建交互式 Shell。

返回列表不会关闭终端。想结束这个演示 Shell，输入 `exit`，或使用会话里的停止按钮。停止后进程就结束了，重新打开历史只能看保留的输出。

## 回到原来的会话 {#_5-回到原来的会话}

在 **Sessions** 页面按名称或目录搜索，用 **All / Running / History** 切换范围，再点会话进去。右侧菜单可以固定、重命名或查看更多操作。

<div class="doc-screenshots">
  <DocScreenshot file="host-sessions.png" caption="Host 会话历史，展示运行中、已完成和已停止的进程。" />
</div>

离开应用或 SSH 断开后，只要 Host 和它托管的进程还在，重新连接同一台主机就可以回到原会话，不会为了恢复画面再执行一次原命令。

主机睡眠、Host 重启、系统重启或用户注销是另一回事。Host 不会在重启后复活原进程；未完成的会话会标记为中断。Linux 注销后的运行取决于用户服务和 lingering 设置；macOS、Windows 的用户服务也受登录会话影响。

如果启动时超时，先刷新列表，确认是否已经创建成功。连续点“启动”可能让你误开新会话。

## 运行一次性任务 {#_6-运行一次性任务}

在 **+ → Task（任务）** 中选择目录，填入要执行的命令，再启动。第一次可以用 `echo Host connected`，确认目录和输出没问题后，再运行项目的构建或测试命令。

任务结束后看退出码和日志。名字叫“测试”的任务不代表测试真的通过；它运行了什么、输出了什么，都要在结果里确认。需要持续交互的命令更适合放进 Terminal。

[概览](/zh/docs/host) · [Agent 与任务收件箱](/zh/docs/host/agents)
