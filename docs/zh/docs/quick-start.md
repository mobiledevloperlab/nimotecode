---
title: 快速开始 | NimoteCode
description: "快速开始的配置、操作步骤与界面说明。"
---

# 快速开始

在**开发主机 → 添加开发主机**选择 SSH、Nimote Connect、局域网或 Tailscale。选择机器后可在 IDE、终端或 AI 中打开它的工作区。需要持久化会话、远程任务或审批时，可设置 NimoteHost。高级功能需要兼容工具和 Pro 权益。

[Free 与 Pro](/zh/pro)

从打开工作区开始，完成文件编辑和第一次命令运行。按下面的步骤操作；需要使用 AI Agent 时，再配置模型连接。

- [打开工作区](#打开工作区)
- [打开并编辑文件](#打开并编辑文件)
- [运行命令](#运行命令)
- [运行 AI Agent](#运行-ai-agent)

## 打开工作区

NimoteCode 2.5.0 在手机竖屏工作台新增浮动导航栏，可切换不同面板。单栏编辑器为空时，可用浏览文件操作打开资源管理器。

在 NimoteCode 2.5.0 中，可[通过个人 Tailscale 连接已配对电脑](/zh/docs/ssh#paired-computers)、[用 tmux 恢复 SSH 终端](/zh/docs/terminal#persistent-ssh-terminal)，也可[通过 SSH 安装 Nimote Connect](/zh/docs/host/getting-started#install-over-ssh)。

选择完整 IDE 后，可以打开设备文件、连接 SSH 主机、从 GitHub 打开项目，或在受支持的 Android 设备上使用 Local Linux。也可以打开示例项目体验界面。

应用有四种模式：**快捷终端**用于 SSH、Linux 和命令；**AI 工作区**用于 AI 对话、Agent 和任务；**完整 IDE**用于文件、Git 和 AI 开发；**Host** 使用 NimoteHost 管理持续运行的远程任务与 Agent 会话。使用“切换模式”选择适合当前任务的界面。项目位置与模式是不同的选择：设备文件可以编辑，运行项目命令需要 SSH 或 Local Linux。

<div class="doc-screenshots">
  <DocScreenshot file="startup-light.jpg" caption="欢迎页，浅色主题。" />
  <DocScreenshot file="mode-switch.png" caption="在完整 IDE 的工作区菜单中切换模式。" />
</div>

<div class="doc-section">
<div class="doc-section__copy">

## 打开并编辑文件

选择项目目录后，在 Explorer 中打开文件。完成编辑并保存后，再运行需要读取磁盘文件的命令。选择、导航和预览操作见[编辑器](/zh/docs/editor)。

</div>

<div class="doc-screenshots">
  <DocScreenshot file="editor-multiple-files.jpg" caption="Python 与 Markdown 文件在独立的编辑器标签页中打开。" />
</div>

</div>

<div class="doc-section">
<div class="doc-section__copy">

## 运行命令

在 SSH 或 Local Linux 工作区打开终端，运行 `pwd` 确认当前目录，再执行项目的测试或构建命令。完成后通过[源代码管理](/zh/docs/source-control)检查文件改动。仅打开本地文件夹并不提供 Linux 运行环境。

</div>

<div class="doc-screenshots">
  <DocScreenshot file="terminal-command-output.png" caption="终端显示 ls 命令列出的项目文件。" />
</div>

</div>

## 运行 AI Agent

使用 AI Agent 阅读项目文件，了解目录结构、主要模块及其关系。

1. 在[配置指南](/zh/docs/configuration)中完成 Provider 和模型访问设置。
2. 打开项目工作区后，进入 AI 面板，选择已配置的模型，并在 Agent 选择器中选择 **Nimote Agent**。
3. 选择 **Confirm** 模式，发送“解释这个项目”等请求。截图中的示例请求为 “Explain this project”。
4. 检查 Agent 提出的计划，点击 **Approve this run** 允许执行工具。运行过程中，可在执行时间线中查看文件读取进度和工具结果。

<div class="doc-screenshots">
  <DocScreenshot file="ai-plan-approval.jpg" caption="Confirm 模式：检查项目分析计划，确认后批准运行。" />
  <DocScreenshot file="ai-plan-running.jpg" caption="Agent 任务结果：新增 Python 测试、通过的测试输出与 Git 差异。" />
</div>

阅读结果时，同时检查 Agent 标注的限制，例如未能读取的文件。运行期间也可以发送补充说明。Agent 选择与执行控制详见 [AI Chat 与 Agent](/zh/docs/ai)。

## 配置辅助工具

语言服务与调试适配器需要单独配置，详见 [LSP](/zh/docs/lsp) 和[调试](/zh/docs/debug)。
