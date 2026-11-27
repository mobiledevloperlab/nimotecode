---
title: 文档 | NimoteCode
description: 了解 NimoteCode 的四种模式、SSH 和 Android 本地 Linux，以及 AI 编程、Git 和远程开发。
---

# NimoteCode 文档

首次使用先按[快速开始](/zh/docs/quick-start)完成打开工作区、编辑文件和运行命令，再按当前任务选择指南。

在 NimoteCode 2.5.0 中，可[通过个人 Tailscale 连接已配对电脑](/zh/docs/ssh#paired-computers)、[用 tmux 恢复 SSH 终端](/zh/docs/terminal#persistent-ssh-terminal)，也可[通过 SSH 安装 Nimote Connect](/zh/docs/host/getting-started#install-over-ssh)。

## 先确定文件和命令在哪里运行

| 我想做什么 | 从这里开始 | 需要了解什么 |
| --- | --- | --- |
| 编辑设备上的文件 | [本地与 SSH 工作区](/zh/docs/ssh) | 本地目录提供文件访问；运行项目命令需要 SSH 或本地 Linux 环境。 |
| 使用已有的电脑或服务器 | [本地与 SSH 工作区](/zh/docs/ssh) | 通过 SSH 访问远程项目，沿用主机上已经安装的工具链。 |
| 断线后回来继续处理远程任务 | [开发主机](/zh/docs/host) | 先在电脑上安装 Nimote Connect，再通过 SSH 连接；Host 保持运行时可继续托管进程。 |
| 在 Android 上运行 Linux 工具 | [安装并运行第一条命令](/zh/docs/local-linux/getting-started) | 先检查设备要求，再安装本地 Linux；仅适用于受支持的 Android 设备。 |

应用的四种模式决定操作界面，工作区决定文件位置和命令执行环境。Host 另外需要电脑上的服务。模式选择见[快速开始](/zh/docs/quick-start)。

## 按任务查找指南

### 开始使用

| 指南 | 用途 |
| --- | --- |
| [快速开始](/zh/docs/quick-start) | 打开工作区、打开并编辑文件、运行命令、运行 AI Agent |
| [常见问题](/zh/docs/faq) | 了解工作区选择、AI 配置与功能使用条件。 |

### 工作区与运行环境

| 指南 | 用途 |
| --- | --- |
| [本地与 SSH 工作区](/zh/docs/ssh) | 选择工作区、打开本地目录、配置 SSH 连接 |
| [Windows SSH 与 SFTP](/zh/docs/windows-ssh-sftp) | 配置 Windows OpenSSH，排查 SSH／SFTP 连接与文件访问问题。 |
| [同步与缓存](/zh/docs/sync-cache) | 选择传输方向、开始并检查传输 |
| [Docker 与 Dev Containers](/zh/docs/docker) | 管理 SSH 主机资源、控制 Compose 服务、创建隔离工作区 |

### 编辑、运行与 Git

| 指南 | 用途 |
| --- | --- |
| [代码编辑器](/zh/docs/editor) | 打开文件与切换标签页、选择与编辑文本、符号导航与历史记录 |
| [工作区搜索](/zh/docs/search) | 搜索文件内容、没有搜索结果时 |
| [终端](/zh/docs/terminal) | 执行工作区命令、搜索、复制与分析输出、刷新远程环境 |
| [任务](/zh/docs/tasks) | 创建可复用命令、运行并检查输出 |
| [Git 与 GitHub](/zh/docs/source-control) | 查看差异、提交和分支，处理 GitHub 工作流。 |
| [语言服务（LSP）](/zh/docs/lsp) | 检查语言服务配置、使用诊断与代码动作 |
| [调试](/zh/docs/debug) | 准备调试会话、检查暂停的程序 |

### AI 与扩展

| 指南 | 用途 |
| --- | --- |
| [模型与服务商配置](/zh/docs/configuration) | 配置模型服务商、测试 AI 连接与设置隐私选项。 |
| [AI 对话、Agent 与 MCP](/zh/docs/ai) | 开始对话、选择 Agent、审批计划与查看执行过程 |
| [自定义插件](/zh/docs/plugins) | 创建与安装、数据与操作、权限、后台任务 |

### 开发主机

在**开发主机 → 添加开发主机**选择 SSH、Nimote Connect、局域网或 Tailscale。选择机器后可在 IDE、终端或 AI 中打开它的工作区。需要持久化会话、远程任务或审批时，可设置 NimoteHost。高级功能需要兼容工具和 Pro 权益。

[开发主机](/zh/docs/host) · [安装 Nimote Connect](/zh/docs/host/getting-started) · [故障排查](/zh/docs/host/troubleshooting)

### Android 本地 Linux

[Android 本地 Linux](/zh/docs/local-linux) · [安装并运行第一条命令](/zh/docs/local-linux/getting-started) · [故障排查](/zh/docs/local-linux/troubleshooting)

### 设置与参考

| 指南 | 用途 |
| --- | --- |
| [设置](/zh/docs/settings) | 调整外观、语言、编辑器和面板偏好。 |
| [账户与订阅](/zh/docs/account-subscription) | 查看账户状态、恢复购买与核对功能权益。 |
| [通知](/zh/docs/notifications) | 查找已完成或待处理的活动，返回对应会话。 |
| [凭据与操作审查](/zh/docs/security) | 了解 SSH 凭据、模型密钥与操作审批。 |
| [界面与操作索引](/zh/docs/screenshot-guide) | 按功能查找界面截图与操作说明。 |

## 遇到问题

按当前环境查看[常见问题](/zh/docs/faq)、[Windows SSH 与 SFTP](/zh/docs/windows-ssh-sftp)、[Host 故障排查](/zh/docs/host/troubleshooting)或[本地 Linux 故障排查](/zh/docs/local-linux/troubleshooting)。
