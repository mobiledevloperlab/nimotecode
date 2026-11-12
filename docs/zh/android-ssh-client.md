---
title: "Android SSH 客户端：终端、SFTP 与代码编辑 | NimoteCode"
description: "用 NimoteCode 从 Android 连接 Linux、Mac 和 Windows，配置 SSH 认证、通过 SFTP 浏览文件、编辑代码并验证远程项目。"
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# Android SSH 客户端：终端与文件操作一起完成

需要在 Android 上运行服务器命令或修改远程配置？NimoteCode 将 SSH 终端、SFTP 文件浏览、代码编辑和 Git 审查放在一起。只执行命令时独立终端已经足够，需要操作项目文件和变更时可选择项目工作区。

## 创建并验证连接

填写主机、SSH 端口、账号及主机允许的认证方式，首次连接核对主机指纹。端口测试只检查直连 TCP 可达性，不进行账号认证，也不能证明 SFTP 可用。连接后选择仓库根目录。

<div class="doc-screenshots">
  <DocScreenshot file="remote-connection-form.jpg" caption="Android SSH 连接表单，包含端口测试和认证设置。" />
</div>

## 使用正确地址与权限

同一局域网使用主机当前 Wi-Fi 或以太网地址，外网访问需 VPN 等安全网络通路，主机需保持唤醒。密码、密钥和账号限制遵循服务端策略，SFTP 保存还取决于文件系统写权限。

Windows 使用 PowerShell 与 SFTP，可按 [Windows 指南](/zh/docs/windows-ssh-sftp)安装 OpenSSH 并检查防火墙。Mac 与 Linux 使用主机配置的 Shell。

## 验证完整文件工作流

在用户目录打开和保存测试文件，另行确认终端目录，执行项目约定检查，提交前在源代码管理查看变更。命令使用主机工具，Git、语言服务和外部 Agent 需安装并获得对应权限。

完整连接与错误排查见[远程编程配置](/zh/remote-coding)。没有单独主机时可了解 [Android IDE 与本地 Linux](/zh/android-ide)，更多功能见 [SSH IDE](/zh/ssh-ide)。

可以从本地或 SSH 编辑及基础终端开始。部分功能需要 Pro，参见[免费版与 Pro](/zh/pro)及应用内显示的访问状态。AI 需要配置自己的模型提供商，模型使用费用由提供商另行收取。

<div class="seo-cta">
  <p><strong>下载 NimoteCode</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="/zh/docs/quick-start" class="home-page-btn secondary">快速入门</a>
  </p>
</div>
