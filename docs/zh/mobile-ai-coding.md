---
title: "移动 AI 编程：Chat、Agent 与 ACP 工作流 | NimoteCode"
description: "在 NimoteCode 中按任务选择 AI Chat、Nimote Agent 或外部 ACP，了解模型配置、工具审批、执行环境与 Git 验证，避免混淆对话和实际执行。"
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# 移动 AI 编程：先选模式，再选执行环境

需要解释一个函数，还是让 Agent 读文件并运行检查？两者需要不同工具。NimoteCode 将 AI Chat、内置 Nimote Agent 和兼容的外部 ACP Agent 放在编辑器、终端和 Git 旁边，使用前应明确任务模式和执行位置。

## 区分 Chat 与 Agent

| 模式 | 用途 | 配置与控制 |
| --- | --- | --- |
| Chat | 解释选中代码、分析错误、讨论计划 | 配置模型提供商；Chat 本身不执行工作区修改 |
| Nimote Agent | 检查文件、提出修改、调用可用工具 | 提供商配置及功能权限；Confirm 模式先审查计划再执行 |
| 外部 ACP Agent | 使用单独安装的兼容代理 | 执行目标上的运行时、凭据与代理自己的工具策略 |

明确知道怎么修改时，普通编辑器或终端已经可以完成任务。AI 是可选功能，打开项目和使用 SSH 不需要先配置模型。

## 配置模型和工作区

按[模型配置](/zh/docs/configuration)添加提供商并测试访问，打开目标工作区并确认根目录。本地文件夹不会自动提供命令执行环境。SSH 使用主机环境，受支持的 Android 设备可以使用[本地 Linux](/zh/docs/local-linux)，iPhone 和 iPad 不提供 NimoteCode 本地 Linux。

<figure class="seo-phone-capture">
  <a href="/images/ios/iphone-agents.webp" target="_blank" rel="noopener">
    <img src="/images/ios/iphone-agents.webp" width="660" height="1433" alt="iPhone 上的 NimoteCode，展示内置与外部 Agent 选择。" loading="lazy" decoding="async">
  </a>
  <figcaption>iPhone 上的 NimoteCode，展示内置与外部 Agent 选择。 来源：NimoteCode App Store 页面。此图为宣传截图，不是连续操作录屏。</figcaption>
</figure>

## 先用只读任务验证

可以提问：“找到入口文件，解释这个配置如何加载，先不要修改文件。”在编辑器中核对引用路径。需要工具时，选择 Nimote Agent，在 Confirm 模式下查看计划再批准执行。回答是否正确仍需对照真实文件。

## 跟进执行，检查实际结果

通过时间线查看输出，发现范围不对时补充指令或停止运行。修改后检查保存结果，运行项目检查，再在[源代码管理](/zh/docs/source-control)阅读 diff。外部代理有自己的权限；内置 Agent 的 Confirm 模式不会控制手动在终端启动的 CLI。

## 按需要接入外部运行时

[AI 与 ACP 文档](/zh/docs/ai)介绍兼容运行时命令和 MCP 配置。想直接访问 CLI 而不是 ACP 对话时，可阅读 [Claude Code](/zh/claude-code-from-phone)和 [Codex](/zh/codex-from-phone)的 SSH 教程。密钥应保存在配置中，不要写入提示词；NimoteCode 不包含模型额度。

可以从本地或 SSH 编辑及基础终端开始。部分功能需要 Pro，参见[免费版与 Pro](/zh/pro)及应用内显示的访问状态。AI 需要配置自己的模型提供商，模型使用费用由提供商另行收取。

<div class="seo-cta">
  <p><strong>下载 NimoteCode</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="/zh/docs/quick-start" class="home-page-btn secondary">快速入门</a>
  </p>
</div>
