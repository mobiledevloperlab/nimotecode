---
title: 快速开始 | NimoteCode
description: "快速开始的配置、操作步骤与界面说明。"
---

# 快速开始

从打开工作区开始，完成文件编辑和第一次命令运行。按下面的步骤操作；需要使用 AI Agent 时，再配置模型连接。

- [打开工作区](#打开工作区)
- [打开并编辑文件](#打开并编辑文件)
- [运行命令](#运行命令)
- [运行 AI Agent](#运行-ai-agent)

## 打开工作区

在欢迎页选择项目所在位置。**Open Local Workspace** 打开设备文件，**Connect Remote Workspace** 连接 SSH 主机，**Local Linux** 在受支持的 Android 设备上安装 Ubuntu。首次体验可选择 **Try Demo Workspace** 打开示例项目。

<div class="doc-screenshots">
  <DocScreenshot file="startup-light.jpg" caption="欢迎页，浅色主题。" />
  <DocScreenshot file="startup-dark.jpg" caption="欢迎页，深色主题。" />
</div>

<div class="doc-section">
<div class="doc-section__copy">

## 打开并编辑文件

选择项目目录后，在 Explorer 中打开文件。完成编辑并保存后，再运行需要读取磁盘文件的命令。选择、导航和预览操作见[编辑器](/zh/docs/editor)。

</div>

<div class="doc-screenshots">
  <DocScreenshot file="editor-multiple-files.jpg" caption="已打开的文件显示在标签栏中，示例当前编辑 webapp.py。" />
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
  <DocScreenshot file="ai-plan-running.jpg" caption="批准后，Agent 读取项目文件并记录执行进度。" />
</div>

阅读结果时，同时检查 Agent 标注的限制，例如未能读取的文件。运行期间也可以发送补充说明。Agent 选择与执行控制详见 [AI Chat 与 Agent](/zh/docs/ai)。

## 配置辅助工具

语言服务与调试适配器需要单独配置，详见 [LSP](/zh/docs/lsp) 和[调试](/zh/docs/debug)。
