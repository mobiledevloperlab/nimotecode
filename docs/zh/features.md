---
title: 功能特性 | NimoteCode 移动 AI 开发工作台
description: 浏览 NimoteCode 的移动开发能力：可定制插件、本地与 SSH 工作区、Android 本地 Linux、编辑器、终端、Git、AI Chat 与 Agent、LSP、调试、Tasks 与 Sync/Cache。
---

# 功能特性

在手机和平板上继续推进项目：编辑代码、在具备工具的环境中运行检查，再审查 Git Diff，都可以在同一个工作区中衔接完成。先打开 Demo 或本地文件夹即可体验，无需先配置 AI。

<div class="guide-actions">

[开始你的第一个工作区](/zh/docs/quick-start) · [实用教程与精选阅读](/zh/resources/)

</div>

## NimoteCode 能帮你完成什么

<div class="guide-card-grid">
<a class="guide-card" href="/zh/docs/editor"><strong>编辑、运行、审查，一处衔接</strong><span>修改代码后直接运行终端检查，再查看 Git Diff，减少在多个应用之间切换。</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
<a class="guide-card" href="/zh/docs/ssh"><strong>接着用你已有的开发环境</strong><span>通过 SSH 连接开发主机，继续使用主机上的项目与工具链。</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
<a class="guide-card" href="/zh/docs/local-linux"><strong>Android 上免 root 使用 Linux</strong><span>在支持的设备上运行 Ubuntu，按需安装开发工具包，在手机上运行项目。</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
<a class="guide-card" href="/zh/docs/ai"><strong>按你的习惯使用 AI</strong><span>用 Chat 理解代码，或让 Agent 推进多步骤任务；审查执行过程，随时追加指令。</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
<a class="guide-card" href="/zh/docs/source-control"><strong>从手机处理 GitHub 工作流</strong><span>查找与克隆仓库，在代码旁处理 Issue、Pull Request 和检查状态。</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
<a class="guide-card" href="/zh/docs/plugins"><strong>让工作区适应你的项目</strong><span>通过插件添加自定义面板、表单和脚本任务，把常用操作放进工作台。</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
</div>

本地与 SSH 工作区、编辑器、基础终端和 Git 审查可免费开始使用。Agent、插件、GitHub 集成和 Local Linux 通过 Early Access 开放。AI 需自备 Provider，模型费用另计。Local Linux 仅支持兼容的 Android 8+ ARM64 / x86_64 设备；仅打开本地文件夹不提供 Linux 运行环境。

<div class="feature-showcase" role="region" tabindex="0" aria-label="NimoteCode 功能亮点">
  <div class="feature-showcase__track">
    <figure class="feature-showcase__item"><img src="/screenshots/p1.png" alt="NimoteCode 中的本地文件、SSH、代码编辑与 AI Agent" width="1604" height="901" loading="eager"><figcaption>工作区、编辑与 AI Agent</figcaption></figure>
    <figure class="feature-showcase__item"><img src="/screenshots/p2.png" alt="NimoteCode 中的 SSH 终端、Source Control 与代码诊断" width="1597" height="896" loading="lazy"><figcaption>终端、Git 与诊断</figcaption></figure>
    <figure class="feature-showcase__item"><img src="/screenshots/p3.png" alt="NimoteCode 的调试、远程工作区同步与智能缓存" width="1598" height="893" loading="lazy"><figcaption>调试与工作区同步</figcaption></figure>
    <figure class="feature-showcase__item" aria-hidden="true"><img src="/screenshots/p1.png" alt="" width="1604" height="901" loading="lazy"><figcaption>工作区、编辑与 AI Agent</figcaption></figure>
    <figure class="feature-showcase__item" aria-hidden="true"><img src="/screenshots/p2.png" alt="" width="1597" height="896" loading="lazy"><figcaption>终端、Git 与诊断</figcaption></figure>
    <figure class="feature-showcase__item" aria-hidden="true"><img src="/screenshots/p3.png" alt="" width="1598" height="893" loading="lazy"><figcaption>调试与工作区同步</figcaption></figure>
  </div>
</div>

## 免费版功能

免费版就是一个完整的工作区，而不仅仅是试用预览。以下所有功能在未订阅 Pro 时均可直接使用，除非标注 **Pro**。

| 功能 | 能解决什么 | 可用性 |
| --- | --- | --- |
| **[本地与 SSH 工作区](/zh/docs/ssh)** | 打开本地项目和已保存的 SSH 工作区。 | 免费 |
| **[代码编辑器](/zh/docs/editor)** | 标签页或两个彼此独立的双栏分屏、保存、剪贴板、撤销/重做、光标定位与结构化上下文；无需离开应用即可查看图片和支持的音频/视频。 | 免费 |
| **[Web 与媒体预览](/zh/docs/editor)** | 在应用内打开本地或远程 Web 项目，直接预览当前未保存的 HTML 内容及工作区内的 CSS、JavaScript 和图片资源；也可从 Terminal、AI 回复和工具输出中的链接打开。 | 免费 |
| **[终端与 SSH 环境](/zh/docs/terminal)** | 在当前工作区执行命令、搜索输出、使用快捷命令，并在远程重连后可靠恢复。SSH 会加载账户正常的 Shell 登录环境，使 PATH、语言区域、SSH Agent 与自定义变量能被远程工具一致使用。 | 免费 |
| **[Git 审查](/zh/docs/source-control)** | 查看仓库状态、diff、分支状态与历史。Android 本地 Linux 中的 Git 会在 Linux 工作区内执行，状态与历史对应实际文件。 | 免费 |
| **[AI Chat](/zh/docs/ai)** | 基于当前文件、工作区、最近任务与 Agent 上下文解释代码、分析错误输出、规划或继续下一步。 | 免费 |
| **[Tasks](/zh/docs/tasks)** | 保存重复的工作区命令，按分组组织，并在项目所在位置直接运行。 | 免费 |

## Pro 功能

从 1.1.8 开始，以下工作流通过 **Early Access Pro** 逐步开放。具体可用性和价格以 Google Play 或 App Store 为你的账号和地区显示的内容为准。

| 功能 | 能解决什么 | 可用性 |
| --- | --- | --- |
| **[插件中心与自定义工作区](/zh/docs/plugins)** | 管理工作区能力，或创建带有声明式面板、表单、工作流、产物视图以及本地或 SSH 脚本任务的自定义插件。安装或更新前可审查权限变更。 | Early Access Pro |
| **[AI Agent 与外部 ACP Agent](/zh/docs/ai)** | 在文件、终端与 Git 工具之间完成受控的多步骤任务；可向运行中的 Agent 添加后续指令，或在不丢失上下文的情况下回答交互问题。在 SSH 工作区中完成配置后，可选择兼容 ACP 的 Claude Code、Codex CLI 等运行时，并在统一时间线中审查权限和进度。 | Early Access Pro |
| **[GitHub 集成](/zh/docs/source-control)** | 浏览和克隆仓库，协作处理 Issue 与 Pull Request。 | Early Access Pro |
| **[Android 本地 Linux](/zh/docs/local-linux)** | 在受支持的 Android 设备上使用免 root 的内置 Ubuntu。 | Early Access Pro |
| **[Git 写入](/zh/docs/source-control)** | 提交、推送、stash，以及搜索、创建或切换分支——执行前可先审查。 | Early Access Pro |
| **[远程搜索](/zh/docs/search)** | 在整个远程工作区中进行全局内容搜索。 | Early Access Pro |
| **[多终端](/zh/docs/terminal)** | 为日志、测试、服务与部署保留并行会话。 | Early Access Pro |
| **[LSP](/zh/docs/lsp)** | 使用已配置的远程语言服务器提供诊断、代码动作与导航。 | Early Access Pro |
| **[调试器](/zh/docs/debug)** | 通过配置的调试适配器支持断点与运行时检查。 | Early Access Pro |
| **[Sync / Cache](/zh/docs/sync-cache)** | 在本地与远程工作区之间传输项目内容，并明确方向与操作历史。 | Early Access Pro |

## 最近加入工作区的能力

- **[可定制的工作区。](/zh/docs/plugins)** 插件中心可管理能力，并创建用于面板、表单、工作流、产物视图以及本地或 SSH 脚本任务的自定义插件。安装或更新前可审查权限变更。
- **[持续的 Agent 协作。](/zh/docs/ai)** 可向运行中的 Agent 添加后续指令、回答其交互问题，并借助重构的上下文、历史、提示词编辑与时间线视图理解更长的任务。
- **[更直接的 Git 与终端辅助。](/zh/docs/source-control)** 从 Git 标题栏搜索、创建和切换分支；更克制的编辑器变更标记与更清晰的语法高亮 diff 改善审查体验。需要解释时可将终端输出发送给 AI。
- **[更灵活的远程连接。](/zh/docs/ssh)** 当网络需要时，SSH 工作区可通过 SOCKS5 或 HTTP CONNECT 代理连接。
- **[灵活切换工作区目录。](/zh/docs/ssh)** 本地与 SSH 项目可选择其他目录作为当前工作区，并保留最近访问位置以便快速返回。
- **[更可靠的 Android 本地 Linux。](/zh/docs/local-linux)** Ubuntu 环境的安装、文件访问边界、Git 与 Task 文件处理均得到强化；这些改进仅适用于 Android。
- **[更完整的预览闭环。](/zh/docs/editor)** 双栏编辑、HTML 快照、内置媒体预览与统一链接打开，让你在离开工作区前就能检查结果。
- **[与真实环境衔接的 Agent 工作流。](/zh/docs/ai)** 外部 ACP 运行时、斜杠命令补全、统一 SSH 登录环境和安全诊断，让 Terminal、Tasks、Debug、语言服务、Git 与 Agent 保持一致。



## 一条实用工作路径

1. 使用 [SSH 工作区](/zh/docs/ssh) 连接远程项目、打开本地项目，或在受支持的 Android 设备中使用 [Android 本地 Linux](/zh/docs/local-linux)。
2. 在 [编辑器](/zh/docs/editor) 中定位并修改文件。
3. 在 [终端](/zh/docs/terminal) 中验证；需要时搜索输出或远程内容。
4. 让 [AI Chat 与 Agent](/zh/docs/ai) 协助理解错误、规划改动或继续正在进行的任务。
5. 使用 [Source Control](/zh/docs/source-control) 审查结果；交付需要受限 Git 写入操作时再使用 Pro。工作流需要自定义面板、表单、工作流、产物视图或脚本任务时，可使用插件中心。

> 功能会遵循权限与环境前置条件。例如 LSP、Debug 需要远程主机配置相应语言服务或调试适配器；面对敏感系统时，仍应审查每个 AI 结果与执行动作。

界面及操作说明见[文档索引](/zh/docs/screenshot-guide)。
