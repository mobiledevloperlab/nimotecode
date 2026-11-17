---
title: "SSH IDE：远程文件、终端与 Git 工作区 | NimoteCode"
description: "了解 NimoteCode SSH IDE 的 SFTP 项目浏览、代码编辑、主机终端、Git 和语言工具配置，明确连接、文件权限与执行环境的区别。"
lastUpdated: "2026-11-17"
pageClass: "seo-product-guide"
---

# SSH IDE：编辑远程项目，执行检查并审查变更

NimoteCode 在 Android、iPhone 和 iPad 上通过 SSH 打开远程项目。通过 SFTP 浏览文件，在标签页或分栏中编辑源码，使用主机终端执行命令，并在同一工作区审查 Git 变更。仓库、依赖和运行环境保留在主机上。

## 理解三个独立层次

| 层次 | 用途 | 所需条件 |
| --- | --- | --- |
| SSH 连接 | 访问和认证主机 | 网络可达的服务端与获准账号 |
| SFTP 文件访问 | 浏览、打开和保存远程文件 | 正常的子系统与文件权限 |
| 主机工具 | 运行 Git、检查、语言服务或 Agent | 已安装依赖、凭据及执行权限 |

Shell 可用不代表 SFTP 可用，打开文件也不会自动安装工具链，应分别验证。

<div class="doc-screenshots">
  <DocScreenshot file="remote-workspace-connected.jpg" caption="远程资源管理器显示 SSH 主机、账号和所选仓库根目录。" />
</div>

## 工作区提供什么

用 Explorer 选择根目录，通过标签页或分栏阅读相关文件。执行命令前先保存。源代码管理显示变更和历史，Git 写入与 GitHub 操作取决于功能及仓库权限。语言服务器和调试适配器需在执行目标上完成兼容配置。

## 按主机环境配置

Windows 工作区使用 PowerShell 和 SFTP，参见 [Windows 配置](/zh/docs/windows-ssh-sftp)；Mac 与 Linux 使用主机配置的 Shell 和工具。项目应留在依赖准备充分的主机上，并确认主机保持唤醒。连接可达不等于进程得到维护。

## 编辑前确认仓库和终端位置

先检查远程资源管理器中的主机、账号和根目录路径，再单独确认终端的当前目录与分支。编辑器中切换文件不会改变 Shell 的工作目录。Linux 或 macOS 主机可以使用：

```sh
pwd
git status --short --branch
```

保存文件后，再执行仓库规定的测试或构建命令。提交前检查差异，并确认哪些修改原本就已存在。终端正常但文件无法访问时，检查 SFTP 子系统和目录权限；找不到命令时，检查主机上的安装位置和 PATH。

## 处理断线与长时间任务

长时间任务应使用主机端的会话管理工具，重连后检查任务状态。在 Linux 或 macOS 上，配置好的 tmux 会话可以在 SSH 断线后继续保留，前提是主机仍在运行。手机锁屏或切换应用可能中断客户端连接；主机休眠或重启仍可能导致任务停止。

## 去哪里配置与排障

完整上手步骤见[远程编程](/zh/remote-coding)与 [SSH 文档](/zh/docs/ssh)。选择本地或远程执行可从[移动 IDE](/zh/mobile-ide)开始；AI 运行时选择见[移动 AI 编程](/zh/mobile-ai-coding)。

可以从本地或 SSH 编辑及基础终端开始。部分功能需要 Pro，参见[免费版与 Pro](/zh/pro)及应用内显示的访问状态。AI 需要配置自己的模型提供商，模型使用费用由提供商另行收取。

<div class="seo-cta">
  <p><strong>下载 NimoteCode</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="/zh/docs/quick-start" class="home-page-btn secondary">快速入门</a>
  </p>
</div>
