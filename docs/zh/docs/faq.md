---
title: NimoteCode 常见问题 | 移动 IDE
description: 快速了解 NimoteCode 的本地、Android 本地 Linux 与 SSH 工作区、AI Provider、Git Source Control、远程 Tasks 和 Pro 功能。
---

# 常见问题

以下限额来自即将发布的 2.5.0 方案对比。请以已安装版本及[免费版与 Pro](/zh/pro)中的账号权益为准。

<!-- faq:start -->

## NimoteCode 只是 SSH Client 吗？

不是。NimoteCode 可打开本地项目、使用 Android 本地 Linux 或连接 SSH 工作区，并将 Explorer、编辑器、Terminal、Git 工作流、AI 协助与诊断面板放到同一项目上下文中。

## 不购买 Pro 能使用吗？

无需订阅即可编辑文件、连接 SSH 工作区、同时使用最多两个终端及终端内搜索，使用基础 LSP 补全、诊断和跳转，自备模型服务进行独立 AI 聊天，以及暂存、取消暂存、提交文件及查看 Git 差异和历史。基础 LSP 需已配置可用的语言服务器。支持的 Android 设备可免费运行基础本地 Linux 环境。 免费版每天可运行 3 次内置 Agent 任务、搜索远程文件内容 10 次。额度于 UTC 00:00 重置。 [Free 与 Pro](/zh/pro).

## 可配置哪些 AI Provider？

应用提供 Provider 模板，也支持兼容的自定义端点。具体模型访问与费用由你的 Provider 账户和配置决定，建议参考 [配置指南](/zh/docs/configuration)。

## Source Control 支持什么？

Free 支持查看 Git 状态与差异、暂存、取消暂存和提交。图形化推送、拉取、分支、Stash、Git AI 及 GitHub 高级集成需要 Pro。

## Tasks 是本地还是远程运行？

Tasks 面向 SSH 工作区中的可复用命令流程。命令在已连接的工作区执行；未单独指定目录时，使用当前工作区根目录。

## LSP 和 Debug 所有项目都能用吗？

这取决于远程主机是否已配置兼容的语言服务或调试适配器，以及项目本身的启动设置。基础 LSP 诊断、补全与导航免费；代码操作、语言服务器辅助安装与调试需要 Pro，并需配置相应工具。 可查看 [LSP](/zh/docs/lsp) 与 [调试](/zh/docs/debug)。

<!-- faq:end -->
