---
title: NimoteCode 常见问题 | 移动 IDE
description: 快速了解 NimoteCode 的本地、Android 本地 Linux 与 SSH 工作区、AI Provider、Git Source Control、远程 Tasks 和 Pro 功能。
---

# 常见问题

## NimoteCode 只是 SSH Client 吗？

不是。NimoteCode 可打开本地项目、使用 Android 本地 Linux 或连接 SSH 工作区，并将 Explorer、编辑器、Terminal、Git 工作流、AI 协助与诊断面板放到同一项目上下文中。

## 不购买 Pro 能使用吗？

可以。免费版包含本地、Android 本地 Linux 与 SSH 工作区、编辑器、基础终端、AI Chat 和基础 Tasks。本地 Linux 需要 Android 8+ 的 ARM64 或 x86_64 64 位设备，iOS 不提供此功能。AI Agent 与远程内容搜索可在按设备计算的 14 天试用期间使用，也可通过 Pro 使用；详见 [Pro](/zh/pro)。

## 可配置哪些 AI Provider？

应用提供 14 个内置 Provider 模板，也支持兼容的自定义端点。具体模型访问与费用由你的 Provider 账户和配置决定，建议参考 [配置指南](/zh/docs/configuration)。

## Source Control 支持什么？

所有用户都可在 Source Control 查看仓库状态、diff 与历史。提交、推送和 stash 等受限 Git 写入工作流需要 Pro；详见 [Source Control](/zh/docs/source-control)。

## Tasks 是本地还是远程运行？

Tasks 面向 SSH 工作区中的可复用命令流程。运行前请在任务名称中明确主机、项目根目录和风险等级。

## LSP 和 Debug 所有项目都能用吗？

这取决于远程主机是否已配置兼容的语言服务或调试适配器，以及项目本身的启动设置。两者均属于 Pro 功能，可查看 [LSP](/zh/docs/lsp) 与 [调试](/zh/docs/debug)。
