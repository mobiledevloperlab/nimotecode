---
title: "iPhone SSH 客户端：SFTP、代码编辑与 Git | NimoteCode"
description: "使用 NimoteCode 在 iPhone 上通过 SSH 连接主机、用 SFTP 浏览文件、编辑代码、运行命令并审查 Git。了解配置步骤、使用条件和 App Store 下载入口。"
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# iPhone SSH 客户端：连接主机，直接处理项目

电脑不在身边，但需要查看服务器文件、修复脚本或检查仓库？NimoteCode 在 iPhone 工作区中集成 SSH 终端、远程文件浏览、代码编辑、Git 审查和可选 AI。项目保留在主机上，手机提供操作界面。

只运行命令时，独立终端可能已经足够；需要找文件、修改代码、运行项目检查并审查变更时，NimoteCode 可以把这些操作连起来。

<figure class="seo-phone-capture">
  <a href="/images/ios/iphone-ssh.webp" target="_blank" rel="noopener">
    <img src="/images/ios/iphone-ssh.webp" width="660" height="1433" alt="iPhone 上的 NimoteCode Remote Explorer，显示已连接的 SSH 项目。" loading="lazy" decoding="async">
  </a>
  <figcaption>iPhone 上的 NimoteCode Remote Explorer，显示已连接的 SSH 项目。 来源：NimoteCode App Store 页面。此图为宣传截图，不是连续操作录屏。</figcaption>
</figure>

## 将 iPhone 连接到开发主机

1. 在 Windows、Mac 或 Linux 主机上开启 SSH 服务，确认主机保持唤醒且网络可达。Windows 可按 [OpenSSH 与 SFTP 指南](/zh/docs/windows-ssh-sftp)配置。
2. 在 NimoteCode 中选择 **Connect Remote Workspace**，填写地址、SSH 端口、用户名和认证方式。
3. 首次连接前，将主机密钥指纹与从主机取得的可信值核对。
4. 选择项目根目录，在 Remote Explorer 中确认连接和路径。
5. 打开一个文件，在用户有写权限的目录中做一处测试修改并保存，再从主机确认保存结果。

[SSH 工作区文档](/zh/docs/ssh)介绍连接配置与目录选择。离开局域网后，需要 VPN 等安全网络通路；安装 SSH 客户端本身不会让主机自动可达。

## 用 SFTP 浏览文件，在同一工作区编辑

通过项目树定位源码、文档和配置文件，在编辑器标签页中打开并修改。运行外部工具前先保存。SFTP 访问遵循主机账户权限，登录成功不等于所有目录都可写。

Windows 的 SFTP 路径表示可能不同于本地路径，应使用服务端返回的路径，不要假设本地路径可以原样粘贴。[编辑器文档](/zh/docs/editor)介绍标签页、文本选择和分栏。

## 运行主机命令，审查 Git 变更

终端命令在远程主机上执行。编译器、Git、语言服务器和项目依赖需要在主机准备好。修改前确认终端目录和当前分支，提交前阅读 diff 并运行仓库约定的检查。

iOS 可能在后台挂起应用，连接可用不代表进程始终存活。长任务需要合适的主机会话保持方案，重连后应确认任务状态。

## 哪些在 iPhone 上完成，哪些需要主机？

本地文件夹提供遵循 iOS 授权的文件访问和编辑，不会自动提供编译器或 Linux 运行时。**NimoteCode 本地 Linux 仅支持 Android**，因此本文的 iPhone 工作流使用远程主机执行项目命令。AI Chat 与 Agent 是可选功能，需要配置提供商。可继续阅读 [AI 指南](/zh/docs/ai)和 [iPad 编程](/zh/ipad-coding)。

## 常见问题

<!-- faq:start -->

### iPhone 版支持 SFTP 吗？

支持。SSH 工作区通过 SFTP 访问远程文件，具体取决于服务端配置及账户权限。连接后应分别验证目录列表、打开和保存测试文件。

### 能用 NimoteCode 直接在 iPhone 上运行 Ubuntu 吗？

不能。NimoteCode 本地 Linux 仅支持符合条件的 Android 设备。在 iPhone 上，Linux Shell 和项目工具由可访问的 SSH 主机提供。

### 使用 SSH 前需要配置 AI 吗？

不需要。不配置模型也可以连接、浏览文件、编辑和使用基础终端。AI 功能有独立的提供商配置与访问要求。

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
