---
title: 终端 | NimoteCode
description: "使用 NimoteCode 通过 SSH 或 Android Local Linux 运行命令、管理终端会话并分析输出。"
---

# 终端

<div class="doc-section">
<div class="doc-section__copy">

## 执行工作区命令

在当前 SSH 或 Local Linux 工作区打开终端。运行 `pwd` 确认目录后，再执行项目命令。终端输出属于当前会话；切换编辑器标签页不会改变 Shell 的工作目录。

</div>

<div class="doc-screenshots">
  <DocScreenshot file="terminal-command-output.png" caption="终端显示 ls 命令的输出。" />
</div>

</div>

<div class="doc-section">
<div class="doc-section__copy">

## 搜索、复制与分析输出

会话菜单提供输出搜索、剪贴板操作、**Analyze with AI**、清空输出和关闭会话。Analyze with AI 可将终端上下文用于 AI 解释；使用前请检查要交给 Provider 的内容。

</div>

<div class="doc-screenshots">
  <DocScreenshot file="terminal-actions-menu.jpg" caption="终端会话菜单，包含 Analyze with AI 与 Refresh Remote Environment。" />
</div>

</div>

## 使用 tmux 恢复 SSH 终端 {#persistent-ssh-terminal}

在 NimoteCode 2.5.0 中启用 Pro 后，连接已安装 tmux 的兼容 Linux 或 macOS 主机。从终端菜单选择 **新建持久终端（tmux）**，或通过 **远端 tmux 会话** 找回同一主机、同一 SSH 用户的会话。发现会话使用该账号的默认 tmux socket。

关闭本地标签只会断开当前客户端，远端会话继续运行。选择 **结束远端 tmux 会话** 并确认会停止会话及其中的任务。主机重启或 tmux 服务退出会结束原会话。

如果 Codex 或 Claude Code 等终端程序捕获了鼠标，按住 Shift 拖选，再通过右键菜单复制。NimoteCode 2.5.0 会在程序重绘后保留选区。

可从终端会话历史恢复保存过的 tmux 会话，或用同一 SSH 用户从另一客户端打开远端会话列表。手机横屏且软键盘打开时，若面板空间充足，会显示 Esc、Ctrl 等终端键。

Android 本地 Linux 环境装有 tmux 时，也可用同一菜单接入该环境中的会话。环境停止时会话结束。该持久终端入口适用于 SSH 主机或兼容的本地 Linux 环境，Dev Containers 内及原生 Windows SSH 主机上不可用。

## 刷新远程环境

更新远程账户的 Shell 配置后，选择 **Refresh Remote Environment** 或重新连接。解析后的登录环境供 Tasks、Git、语言服务、调试适配器及外部 Agent 等远程工具使用。

## 自定义终端标签页

打开标签页自定义菜单，可修改名称、颜色或重置自定义设置。**Customize Terminal Tab** 支持同时设置标题、颜色和图标。这些设置用于识别会话，不会改变主机或命令执行环境。

<div class="doc-screenshots">
  <DocScreenshot file="terminal-customize-menu.jpg" caption="终端标签页自定义菜单。" />
  <DocScreenshot file="terminal-tab-style-form.jpg" caption="标签页标题、颜色和图标设置。" />
</div>

## 分屏并衔接 IDE

在终端工作区打开多个窗格并调整大小，同时查看命令、日志或服务。点击终端输出中的文件位置可在 IDE 打开；也可将选中内容交给 AI 分析。支持的命令会被记录，便于查看和再次使用；终端显示偏好、缩放及连接专属提示符均可自定义。

## NimoteCode 2.4.0

优化终端输出响应、同步更新、搜索、滚动、Vim、剪贴板、Windows 粘贴、软键盘及长按导航键。

[2.4.0 →](/zh/releases/2.4.0)
