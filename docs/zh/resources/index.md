---
title: 精选教程与开发资源 | NimoteCode
description: "从实际问题出发，精选站内博客与外部官方资料：连接开发主机、在手机上处理 GitHub、评估 Android Linux，或完成一次可审查的 AI 编程任务。"
---

# 精选教程与开发资源

从实际问题出发，精选站内博客与外部官方资料：连接开发主机、在手机上处理 GitHub、评估 Android Linux，或完成一次可审查的 AI 编程任务。

[查看全部博客](/zh/blog/) · [查阅应用操作文档](/zh/docs)

## 站内精选：先解决一个具体问题

这些文章来自 NimoteCode 博客，包含操作步骤、演示或测试记录。

<div class="guide-card-grid">
<a class="guide-card" href="/zh/blog/github-from-android-iphone"><strong>从手机上的仓库走到 Pull Request</strong><span>适合已有 GitHub 项目的用户：串联登录、克隆、编辑、检查和审查。</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
<a class="guide-card" href="/zh/blog/tailscale-ssh-android-mac-linux"><strong>用 Tailscale 与 SSH 连接开发主机</strong><span>适合需要访问 Mac 或 Linux 的用户：配置网络、连接主机并验证重连。</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
<a class="guide-card" href="/zh/blog/android-linux-performance-benchmark"><strong>Android Linux 能承担多少开发工作？</strong><span>通过单台设备的 CoreMark、SQLite 编译和并行构建记录，判断要如何测试自己的项目。</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
<a class="guide-card" href="/zh/blog/can-an-ai-agent-really-code-from-a-phone"><strong>在手机上完成一次 AI Agent 任务</strong><span>观看实际演示，了解规划、编辑、执行和验证如何衔接。</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
<a class="guide-card" href="/zh/blog/best-ssh-clients"><strong>手机 SSH 与 AI 开发工具：七款怎么选</strong><span>按任务比较终端、主机 Agent 与移动工作区，了解平台和付费限制。</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
</div>

## 外部精选：理解工具与工作方法

以下为第三方官方资料，链接指向英文原文；Pro Git 提供中文等语言版本。资料核验日期：2026-11-04。

- **[Tailscale · Tailscale SSH](https://tailscale.com/docs/features/tailscale-ssh)** — 了解专用 SSH 功能的身份与访问控制；与在 Tailscale 网络上使用普通 SSH 区分开来。

- **[Git · Pro Git 免费在线书](https://git-scm.com/book/en/v2)** — 学习分支、远程仓库和撤销操作，为理解 Diff 和提交历史打基础。

- **[GitHub Docs · 审查 Pull Request](https://docs.github.com/en/pull-requests/how-tos/review-pull-requests/reviewing-proposed-changes-in-a-pull-request)** — 学习逐文件审查、添加评论与提交评审，用于检查自己或 Agent 的改动。

- **[PRoot · 工作原理与示例](https://proot-me.github.io/)** — 理解用户态文件系统与路径映射，帮助认识免 root Linux 环境的工作方式。

## 选择开发环境

| 问题 | 资源 | 下一步 |
| --- | --- | --- |
| 该在本地、远程还是云环境完成工作？ | [移动开发：选择工作区](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/mobile-development.md) | [示例与工作流](/zh/use-cases/) |
| Termux、PRoot、AVF、SSH 和云开发环境如何不同？ | [Android Linux 开发](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/android-linux-development.md) | [本地 Linux 概览](/zh/docs/local-linux) |
| 什么时候应让代码继续留在远程主机？ | [从手机进行远程开发](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/remote-development-from-phone.md) | [SSH 工作区](/zh/docs/ssh) |

## AI 编程与 SSH 工作流

- [移动 AI 编程](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/mobile-ai-coding.md) 说明如何让 Agent 工作保持可检查、可测试。
- [SSH 开发工具](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/ssh-development-tools.md) 将安全连接与编辑器、终端、Git 审查能力对应起来。
- [在手机上使用 Claude Code](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/claude-code-on-phone.md) 描述主机安装 Agent 的流程，不暗示 NimoteCode 会安装或代理该工具。
- [Claude Code](/zh/docs/ai) 与 [Codex](/zh/docs/ai) 示例将这些原则整理成可审查的 SSH 闭环。

## Android 本地 Linux 与 Presets

Android 本地 Linux 在支持的 Android 设备上通过 PRoot 使用 Ubuntu。先阅读[概览](/zh/docs/local-linux)，再查看[架构](/zh/docs/local-linux/architecture)、[兼容性](/zh/docs/local-linux/compatibility)和[安全与完整性](/zh/docs/local-linux/security-integrity)。可选工具集、manifest、哈希和测试记录由独立的 [NimoteCode Linux Presets](https://github.com/mobiledevloperlab/nimote-linux-presets) 仓库维护。

全部英文技术资源源文件均版本化保存在[主仓库](https://github.com/mobiledevloperlab/nimotecode/tree/main/resources)；针对性的修正或补充请通过 [NimoteCode Issues](https://github.com/mobiledevloperlab/nimote_issues/issues) 提出。
