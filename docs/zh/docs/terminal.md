---
title: 终端 | NimoteCode
description: "终端的配置、操作步骤与界面说明。"
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

## 刷新远程环境

更新远程账户的 Shell 配置后，选择 **Refresh Remote Environment** 或重新连接。解析后的登录环境供 Tasks、Git、语言服务、调试适配器及外部 Agent 等远程工具使用。

## 自定义终端标签页

打开标签页自定义菜单，可修改名称、颜色或重置自定义设置。**Customize Terminal Tab** 支持同时设置标题、颜色和图标。这些设置用于识别会话，不会改变主机或命令执行环境。

<div class="doc-screenshots">
  <DocScreenshot file="terminal-customize-menu.jpg" caption="终端标签页自定义菜单。" />
  <DocScreenshot file="terminal-tab-style-form.jpg" caption="标签页标题、颜色和图标设置。" />
</div>
