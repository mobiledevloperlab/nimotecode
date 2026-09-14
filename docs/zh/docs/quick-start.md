---
title: 快速开始 | NimoteCode 移动 IDE
description: 在 NimoteCode 打开本地、Android 本地 Linux 或 SSH 工作区，编辑文件、运行验证命令，并选择下一条移动开发工作流。
---

# 快速开始

先跑通核心流程：打开一个项目、完成一处小修改，再通过终端验证。项目可以在设备、远程 SSH 主机，或受支持 Android 设备上的本地 Linux 中。

<ImagePlaceholder image-key="quickStart" alt="NimoteCode 手机上的本地工作区">
  <strong>图片占位符 —— 跑通第一条移动开发流程</strong>
  <span>打开本地工作区、完成聚焦编辑，再在终端中验证。</span>
</ImagePlaceholder>

## 1. 打开工作区

项目位于设备时，选择 **Local Explorer**；项目位于远程主机时，选择 **Remote Explorer**；在支持 Android 8+ ARM64/x86_64 的设备上，可选择 **Local Linux** 使用内置 Ubuntu，无需 root，iOS 不提供此功能；其安装和生命周期请查看 [Android 本地 Linux](/zh/docs/local-linux)。SSH 模式下填写主机、端口和用户名，再选择密码、私钥文件或粘贴私钥认证。开始前务必确认项目根路径。

## 2. 打开、编辑并保存文件

在 Explorer 中选择文件。它会在标签式编辑器中打开。完成小范围修改并保存；计划向 AI 提问时，保持目标文件处于激活状态。

## 3. 在终端验证

在同一工作区打开 [终端](/zh/docs/terminal)，运行 `pwd`、`ls` 或项目自己的测试命令。输出较长时使用终端搜索。

## 4. 选择下一步

<div class="product-card-grid">
  <div class="product-card"><strong>审查改动</strong><span>进入 <a href="/zh/docs/source-control">Source Control</a> 查看 diff 并暂存；提交或推送需要 Pro 权益。</span></div>
  <div class="product-card"><strong>寻求 AI 协助</strong><span>使用 <a href="/zh/docs/ai">AI Chat 或 Agent</a> 解释代码、规划改动或辅助多步骤工作。</span></div>
  <div class="product-card"><strong>深入诊断 · Pro</strong><span>在准备好的环境中使用 <a href="/zh/docs/lsp">LSP</a>、<a href="/zh/docs/debug">调试</a> 与 <a href="/zh/docs/terminal">终端</a>。</span></div>
  <div class="product-card"><strong>复用命令</strong><span>把已验证的远程流程保存到 <a href="/zh/docs/tasks">Tasks</a>。</span></div>
</div>

> 面对远程生产环境，建议先只读检查，并在应用前审查每条命令、每项 AI 建议和每处 Git 改动。

接下来阅读 [SSH 工作区](/zh/docs/ssh)、[编辑器](/zh/docs/editor)，或[观看演示](/zh/demo?utm_source=zh_quick_start&utm_medium=website&utm_campaign=watch_demo)。
