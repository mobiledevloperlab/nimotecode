---
title: "Android IDE：本地 Linux、SSH、Git 与 AI 编程 | NimoteCode"
description: "使用 NimoteCode 在 Android 手机和平板上编辑代码、运行免 root 的 Linux 终端，通过 SSH 连接 Windows、Mac 或 Linux，结合 Git 与 AI 完成项目开发。"
pageClass: android-ide-page
---

# Android IDE：从本地 Linux 到 SSH 远程开发

想在平板上改一段 Python 脚本，用手机运行开发机上的命令，或出门时审查仓库变更？先决定项目和工具在哪里运行。NimoteCode 在一个 Android 应用中提供本地文件、本地 Linux 和远程 SSH 三种工作区，让你按项目需要选择开发方式。

**NimoteCode 是集代码编辑器、项目资源管理器、终端、Git 与可配置 AI 辅助于一体的移动 IDE。** 从找到文件、编辑保存，到运行检查和审查变更，可以围绕同一个项目完成。手机适合随手处理任务，平板提供更宽的阅读和操作空间；需要对照文件时，还可以使用编辑器分栏。

<div class="seo-cta">
  <p><strong>在 Android 上打开项目，选择适合你的开发环境。</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode&amp;utm_source=nimotecode&amp;utm_medium=organic&amp;utm_campaign=android_ide" class="home-page-btn primary" target="_blank" rel="noreferrer">从 Google Play 下载 Android 版</a>
    <a href="/zh/docs/quick-start" class="home-page-btn secondary">查看快速入门</a>
  </p>
</div>

<div class="android-ide-media">
  <DocScreenshot file="editor-code-selection.png" caption="Android 代码编辑器：打开 benchmark.py，显示 Python 语法高亮、行号和文件修改标记。" />
</div>

## 三种工作区，按项目选择运行位置

编辑本地文件和运行 Linux 工具是两件事。打开 Android 文件夹不会自动安装语言工具链；先选工作区，再配置项目依赖。

| 工作区 | 文件与工具在哪里 | 适合从什么任务开始 |
| --- | --- | --- |
| 本地文件夹 | 文件保存在设备授权目录；执行代码需要配置运行环境 | 修改源码、文档或配置文件 |
| 本地 Linux | 在 Android 设备上通过 PRoot 运行 Ubuntu 用户空间，无需 root | Shell 脚本、Git 和兼容的命令行项目 |
| 远程 SSH | 文件和命令位于 Windows、Mac 或 Linux 主机 | 已有开发项目、主机工具链及较重构建 |

## 免 root，在 Android 上运行 Linux 终端

[本地 Linux](/zh/docs/local-linux) 在受支持的 **Android 8 及以上设备、64 位 ARM64 或 x86_64 应用**中提供 Ubuntu 用户空间，以及 Bash、Git 和 SSH。从 Local Linux 入口安装内置环境，启动后打开工作区，即可在设备上使用，不需要另一台开发电脑。

它适合 Shell 脚本、轻量工具和兼容的语言项目。项目需要的语言工具链、语言服务器和调试适配器需另外安装。后续下载软件包可能需要联网，实际兼容性与性能取决于工具和设备。

使用 `cat /etc/os-release` 查看发行版信息；`uname -a` 显示的是与 Android 共享的内核。本地 Linux 基于 PRoot，不是虚拟机，也不支持 iOS 和 32 位 ARM 设备。选择任务前，可先查看[兼容性指南](/zh/docs/local-linux/compatibility)。

<div class="android-ide-media">
  <DocScreenshot file="local-linux-terminal-uname-a.jpg" caption="本地 Linux 的 Bash 终端运行 uname -a，输出共享的 Android 内核和 aarch64 架构信息。" />
</div>

## 通过 SSH 连接 Windows、Mac 或 Linux

已有项目可以继续留在开发机上，用 Android 浏览文件、编辑代码、运行主机命令。[SSH 工作区](/zh/docs/ssh) 使用主机已安装的工具和账号权限，依赖较大内存、CPU 或服务的项目也可以继续在原来的机器上运行。

创建连接时填写主机地址、端口、用户名和支持的认证方式，再选择仓库根目录。首次连接应核对主机密钥指纹。Windows 工作区使用 PowerShell 和 SFTP；Mac、Linux 使用主机配置的 Shell。修改前确认当前目录和分支，运行检查前先保存文件。

主机需要保持唤醒并且网络可达。从局域网外访问时，应先配置 VPN 等安全网络通路；SSH 本身不保证进程在断线后继续运行。首次连接 Windows 电脑，可参考 [Windows 11 SSH 与 SFTP 教程](/zh/docs/windows-ssh-sftp)。

<div class="android-ide-media">
  <DocScreenshot file="remote-workspace-connected.jpg" caption="Remote Explorer 显示已连接的 SSH 主机、账号、端口及 sorting-demo 项目根目录，便于确认操作位置。" />
</div>

## 在手机上审查 Git 变更，衔接 GitHub 协作

[源代码管理](/zh/docs/source-control) 将修改文件、未跟踪文件、暂存变更、diff 和提交历史集中呈现。提交前确认当前分支，逐项查看补丁。Git 操作使用当前工作区的仓库和凭据。

在 GitHub 页面可以浏览仓库、Issue、Pull Request、检查结果和工作流运行，并将仓库克隆到设备、本地 Linux 或 SSH 主机。操作取决于账号访问权限及仓库权限。克隆不会自动安装项目依赖，仍需在所选环境中运行项目约定的检查。

<div class="android-ide-media">
  <DocScreenshot file="source-control-changes.png" caption="源代码管理界面区分 Changes 与 Staged Changes，并提供分支选择和提交历史入口。" />
</div>

## 结合项目使用 AI Chat 与 Agent

使用 Chat 解释选中的代码、分析报错；需要调用工作区工具的任务，可以选择 Nimote Agent。在 **Confirm** 模式下，先审查计划，批准本次运行后才开始执行工具。任务完成后，检查已保存文件、阅读 diff，并运行项目检查。

AI 需要先配置自己的模型提供商，模型使用费用由提供商另行收取。兼容的外部 ACP Agent 还需要在所选执行环境中安装相应运行时并配置凭据。[AI 指南](/zh/docs/ai) 介绍了 Chat、Agent、外部代理和 MCP 的配置方法。

<div class="android-ide-media">
  <DocScreenshot file="ai-plan-approval.jpg" caption="Nimote Agent 在 Confirm 模式下展示项目分析计划，等待选择 Approve this run 后再启动工具。" />
</div>

## 从安装到完成第一次经过验证的修改

1. 从 Google Play 安装 NimoteCode，打开本地文件夹、安装本地 Linux，或连接 SSH 主机。
2. 确认项目根目录和当前分支。使用本地 Linux 或 SSH 时，检查项目所需命令是否已安装。
3. 在编辑器中打开文件，完成一处明确的修改并保存，在项目运行环境中执行测试、lint 或构建。
4. 在源代码管理中审查变更，检查通过且权限允许后，再提交或分享结果。

只运行一条命令时，普通 SSH 客户端可能已经足够；只改一段文字时，基础编辑器也能完成。需要项目树、编辑、终端、Git 审查与 AI 工具配合时，NimoteCode 能减少在多个应用间切换。大型构建及不兼容 PRoot 的工具更适合放在配置合适的远程主机上。部分功能需要 Pro，详见[免费版与 Pro 对比](/zh/pro)，实际访问状态以应用内显示为准。

## Android IDE 常见问题

### 在 NimoteCode 中运行 Linux 需要 root 吗？

不需要。本地 Linux 通过 PRoot 运行，支持 Android 8 及以上设备的 64 位 ARM64 或 x86_64 应用。工具链需另外安装，并非所有 Linux 任务都兼容。

### 没有远程电脑，也能用手机开发吗？

可以。在受支持的 Android 设备上，可以编辑本地文件，并在本地 Linux 中运行兼容的工具。首次配置和下载软件包可能需要联网；云端 AI 和 GitHub 需要连接相应服务。

### NimoteCode 和 Android Studio 一样吗？

不一样。NimoteCode 是面向代码编辑、终端、Git、AI、本地 Linux 和 SSH 项目的移动 IDE，不提供完整的 Android Studio 工具链或 Android 模拟器。需要这些工具的构建应在配置合适的主机上运行。

### NimoteCode 可以免费下载吗？

NimoteCode 可从 Google Play 下载，部分功能需要 Pro 权限。可用性取决于账号、应用版本及商店地区，模型提供商的使用费用另行计算。

<div class="seo-cta">
  <p><strong>在 Android 上打开项目，选择适合你的开发环境。</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode&amp;utm_source=nimotecode&amp;utm_medium=organic&amp;utm_campaign=android_ide" class="home-page-btn primary" target="_blank" rel="noreferrer">从 Google Play 下载 Android 版</a>
    <a href="/zh/docs/quick-start" class="home-page-btn secondary">查看快速入门</a>
  </p>
</div>

## 继续了解功能与配置

- [代码编辑器与分栏](/zh/docs/editor)
- [Android 本地 Linux 配置](/zh/docs/local-linux)
- [SSH 工作区配置](/zh/docs/ssh)
- [Git 与 GitHub](/zh/docs/source-control)
- [免费版与 Pro 功能对比](/zh/pro)

- [Windows 11 配置与故障排查](/zh/docs/windows-ssh-sftp)
