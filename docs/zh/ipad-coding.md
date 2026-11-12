---
title: "iPad 编程：SSH、代码编辑、Git 与 AI 工作区 | NimoteCode"
description: "使用 NimoteCode 在 iPad 上浏览项目、分栏编辑、连接 SSH 终端并审查 Git。了解远程运行方式、iPadOS 限制与 App Store 安装步骤。"
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# 在 iPad 上继续使用已有开发环境

需要同时阅读代码和命令输出时，平板的大屏更便于保留上下文。NimoteCode 为 iPad 提供项目浏览、分栏代码编辑、SSH 终端、Git 工具和可选 AI，适合审查 Pull Request、修改文档或完成一次明确的修复，让开发主机承担较重的执行任务。

只改一段笔记时，简单编辑器可能就够了。处理项目变更前，先确定依赖、检查和服务在哪里运行。

<figure class="article-hero">
  <a href="/images/ios/ipad-workspace.webp" target="_blank" rel="noopener">
    <img src="/images/ios/ipad-workspace.webp" width="1200" height="899" alt="NimoteCode 的 App Store iPad 界面，展示项目导航和代码编辑。" loading="lazy" decoding="async">
  </a>
  <figcaption>NimoteCode 的 App Store iPad 界面，展示项目导航和代码编辑。 来源：NimoteCode App Store 页面。此图为宣传截图，不是连续操作录屏。</figcaption>
</figure>

## 选择本地编辑或远程项目

| 任务 | 运行位置 | 所需条件 |
| --- | --- | --- |
| 编辑可访问的本地文件 | iPad，通过授权的文件提供商访问 | 项目文件夹权限 |
| 执行项目命令和构建 | SSH 主机 | 主机工具、依赖与网络 |
| 审查 Git 变更 | 当前 Git 工作区 | 受支持的仓库与账号访问权限 |
| 向 AI 询问项目问题 | 配置的提供商及可用工作区工具 | 提供商凭据及相应功能权限 |

**Android 本地 Linux 不支持 iPadOS。** 打开本地文件夹不会安装 Node.js、Python、编译器或本地 Linux Shell。文件提供商目录也可能限制依赖原生文件路径的工具。选择项目位置前请查看[工作区配置](/zh/docs/ssh)。

## 配置 iPad 开发工作流

1. 从 App Store 安装 NimoteCode，在商店页面核对设备及系统要求。
2. 配置到 Windows、Mac 或 Linux 主机的 SSH 连接，确认主机唤醒，核对主机指纹并选择仓库根目录。
3. 打开相关文件，需要对照时使用编辑器分栏；另行确认终端工作目录。
4. 保存文件，在主机运行仓库检查，提交前用源代码管理审查 diff。

[Windows 配置指南](/zh/docs/windows-ssh-sftp)介绍 PowerShell 与 SFTP。远程主机必须网络可达，离开局域网后需配置合适的安全网络通路。

## 用平板屏幕审查项目变更

在标签页中保留相关文件，对照实现、配置和测试。[源代码管理](/zh/docs/source-control)提供变更文件、diff 和历史；GitHub 操作取决于账号及仓库权限。更宽的屏幕改善阅读空间，项目运行环境仍由主机提供。

<figure class="article-hero">
  <a href="/images/ios/ipad-git.webp" target="_blank" rel="noopener">
    <img src="/images/ios/ipad-git.webp" width="1200" height="899" alt="NimoteCode 的 App Store iPad 界面，展示 Git AI 工具与变更分析。" loading="lazy" decoding="async">
  </a>
  <figcaption>NimoteCode 的 App Store iPad 界面，展示 Git AI 工具与变更分析。 来源：NimoteCode App Store 页面。此图为宣传截图，不是连续操作录屏。</figcaption>
</figure>

## 在需要时加入 AI 辅助

可以先让 AI 解释陌生代码或分析明确的报错。Nimote Agent 可以调用可用的工作区工具；在 Confirm 模式下，应先审查计划再批准执行。外部 ACP Agent 还需要兼容运行时和自己的凭据，详见 [AI 指南](/zh/docs/ai)。

## 考虑 iPadOS 的后台行为

切换应用或锁屏可能中断连接。主机端终端复用工具可以帮助保留 Shell 会话，但无法让休眠或重启的主机持续执行。重连后先确认文件保存结果与任务状态。大型重构和长时间交互调试仍可能更适合桌面。

## 常见问题

<!-- faq:start -->

### iPad 能运行 NimoteCode 本地 Linux 吗？

不能。本地 Linux 仅支持 Android。iPad 通过 SSH 主机使用项目运行时、终端工具和构建环境。

### 能在 iPad 上打开本地文件吗？

可以，前提是 iPadOS 和所选文件提供商授予访问权限。打开文件夹不保证所有需要原生路径的工具均可用。

### iPad 和 Android 功能完全相同吗？

它们共享核心编辑与 SSH 工作流，但运行环境支持不同。本地 Linux 不支持 iPad，文件授权及后台执行行为也因平台而异。

<!-- faq:end -->

可以从本地或 SSH 编辑及基础终端开始。部分功能需要 Pro，参见[免费版与 Pro](/zh/pro)及应用内显示的访问状态。AI 需要配置自己的模型提供商，模型使用费用由提供商另行收取。

<div class="seo-cta">
  <p><strong>下载 NimoteCode</strong></p>
  <p class="seo-cta-actions">
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="/zh/docs/quick-start" class="home-page-btn secondary">快速入门</a>
  </p>
</div>
