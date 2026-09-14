---
title: Android 本地 Linux 概览 | NimoteCode
description: 了解 NimoteCode 在受支持 Android 设备上的内置 Ubuntu 开发环境、PRoot 架构、兼容性、完整性、Presets 与排障资源。
---

# Android 本地 Linux 概览

本地 Linux 会在受支持的 Android 设备上提供内置 Ubuntu 开发环境。它与设备上的本地项目、远程 SSH 主机并列为第三种工作区入口。打开后，可通过本地 SSH 连接使用熟悉的 Explorer、编辑器、Terminal、Git、AI、Tasks、LSP 和 Debug 工作流。

## 支持范围与要求

本地 Linux 仅支持 Android 8 或更新版本，以及 ARM64 或 x86_64 的 64 位应用。不支持 iPhone 或 iPad，也不支持 32 位 ARM 设备。无需 root，也无需另行安装终端应用。

内置环境包含 Ubuntu、Bash、Git 和 SSH。默认不包含语言工具链、语言服务、调试适配器或外部 Agent CLI；打开环境后，请按项目需要安装工具。它使用 PRoot 提供 Linux 用户空间，并不会取得 Android root 权限。

## 安装并打开环境

1. 在工作区或 Explorer 选择器中选择 **Local Linux**。
2. 选择 **安装**，等待内置环境准备完成。
3. 选择 **启动**，再选择 **打开**，即可在默认的 `/workspace` 目录中工作。
4. 在 Explorer 中打开文件、通过[终端](/zh/docs/terminal)运行命令，并在 [Source Control](/zh/docs/source-control) 中审查 Git 改动。

首次安装使用随应用提供的 Ubuntu 镜像。后续安装额外软件包时可能需要联网。

<figure class="seo-media-placeholder seo-media-placeholder--device-pair has-image has-single-device-image">
  <div class="seo-media-placeholder__device-pair">
    <div class="seo-media-placeholder__device seo-media-placeholder__device--phone">
      <img class="seo-media-placeholder__image" src="/images/placeholders/Local_Linux.jpg" width="930" height="2048" alt="NimoteCode 本地 Linux 面板，展示环境状态以及打开、启动、重置和删除环境的控制项" loading="lazy" decoding="async">
    </div>
  </div>
  <figcaption class="seo-media-placeholder__caption">本地 Linux 面板显示环境状态、存储用量以及工作区和生命周期控制项。</figcaption>
</figure>

## 管理环境生命周期

本地 Linux 页面可启动、停止、重置或删除环境。停止会关闭当前活跃的本地 Linux 工作区；再次启动会连接回同一环境。重置和删除都是破坏性操作，使用前请阅读确认提示。删除本地 Linux 只会移除其环境数据，不会删除设备上的其他项目或 SSH 工作区。

## 在本地环境中使用 AI

打开环境后，[AI Chat 和 Agent](/zh/docs/ai) 可与 Explorer 和终端在同一个本地 Linux 工作区中协同工作。建议从检查操作系统版本等小范围只读请求开始，并在允许任何改动前审查计划执行的命令及输出。

<figure class="seo-media-placeholder seo-media-placeholder--device-pair has-image has-single-device-image">
  <div class="seo-media-placeholder__device-pair">
    <div class="seo-media-placeholder__device seo-media-placeholder__device--phone">
      <img class="seo-media-placeholder__image" src="/images/placeholders/Local_Linux_AI_Agent.jpg" width="930" height="2048" alt="NimoteCode AI Agent 在本地 Linux 工作区中报告 Ubuntu 版本和 ARM64 架构" loading="lazy" decoding="async">
    </div>
  </div>
  <figcaption class="seo-media-placeholder__caption">AI Agent 可以检查本地 Linux 环境，并将结果与命令计划一同展示。</figcaption>
</figure>

## 存储、网络与进程行为

环境文件保存在 NimoteCode 的应用私有存储中。内置 SSH 服务仅监听设备回环地址，因此只供 NimoteCode 使用，不会作为网络 SSH 服务器暴露。Android 可能暂停或结束后台进程；回到应用后如果环境已停止，请重新启动 Local Linux。

## 本地 Linux 文档

- [快速开始](/zh/docs/local-linux/getting-started) —— 准备、安装与工作区选择。
- [架构](/zh/docs/local-linux/architecture) —— Android、PRoot、Ubuntu 与本地 SSH 的边界。
- [兼容性](/zh/docs/local-linux/compatibility) —— 设备、架构与工作负载预期。
- [安全与完整性](/zh/docs/local-linux/security-integrity) —— 校验和、软件包与凭据建议。
- [Linux Presets](/zh/docs/local-linux/presets) —— manifest、安装器校验与独立技术仓库。
- [故障排查](/zh/docs/local-linux/troubleshooting) —— 安装、软件包与生命周期的常见问题。

## 许可证与对应源码

内置环境是 Ubuntu，其中的 GPL 与 LGPL 组件要求随应用一并发布对应源码。完整源码包及其校验和、清单、溯源信息和许可证声明见[本地 Linux 对应源码与许可证](/zh/docs/local-linux-source)。同样的声明也可在应用的开源许可证页面中查看。

下一步：[快速开始](/zh/docs/local-linux/getting-started) · [Linux Presets](/zh/docs/local-linux/presets) · [本地与远程 SSH 工作区](/zh/docs/ssh) · [本地 Linux 对应源码与许可证](/zh/docs/local-linux-source)
