---
title: 代码编辑器 | NimoteCode
description: "代码编辑器的配置、操作步骤与界面说明。"
---

# 代码编辑器

## 打开文件与切换标签页

从 Explorer 或搜索结果打开文件，已打开的文件显示在标签栏中。编辑器支持本地与远程文件，也可使用分栏同时查看两个文件。执行读取磁盘文件的外部工具前，请先保存修改。

<div class="doc-screenshots">
  <DocScreenshot file="editor-empty-state.png" caption="没有打开文件时，可通过 Browse files 选择文件。" />
  <DocScreenshot file="editor-multiple-files.jpg" caption="多个文件标签页，当前激活文件为 webapp.py。" />
</div>

## 选择与编辑文本

选择文本后可复制、剪切或替换，选区菜单也提供 **Ask AI**。更多菜单包含撤销、重做和剪贴板操作。手机、平板和桌面使用同一编辑器实现，支持键盘与输入法输入。

<div class="doc-screenshots">
  <DocScreenshot file="editor-code-selection.png" caption="编辑器中的 Python 源码，显示行号和语法高亮。" />
  <DocScreenshot file="editor-context-menu.jpg" caption="文本选区菜单：复制、剪切、粘贴、全选和 Ask AI。" />
  <DocScreenshot file="editor-overflow-menu.jpg" caption="编辑器更多菜单中的撤销、重做和剪贴板命令。" />
</div>

<div class="doc-section">
<div class="doc-section__copy">

## 符号导航与历史记录

符号菜单包含 **Go To Definition**、**References**、**Rename Symbol**、**Outline** 和 Git 历史入口。语言导航依赖已配置的语言服务；Git 历史操作需要当前项目是 Git 仓库。

</div>

<div class="doc-screenshots">
  <DocScreenshot file="editor-symbol-menu.jpg" caption="当前文件的符号导航与历史操作。" />
</div>

</div>

## 预览 Markdown 与 HTML

编辑 Markdown 源文件后，可通过预览查看标题、代码块和表格的渲染结果。HTML 预览使用当前编辑内容的快照，包含未保存的修改，并从工作区读取引用的资源。静态 HTML 预览无需在 SSH 主机上启动 Web 服务器；服务端应用逻辑仍需要项目自身的运行环境。

<div class="doc-screenshots">
  <DocScreenshot file="markdown-source-editor.jpg" caption="README.md 源码编辑视图。" />
  <DocScreenshot file="markdown-preview.jpg" caption="README.md 渲染预览，包含目录树和表格。" />
  <DocScreenshot file="html-report-preview.jpg" caption="编辑器预览标签页中的 HTML 基准测试报告。" />
</div>
