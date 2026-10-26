---
title: Android 本地 Linux | NimoteCode
description: "Android 本地 Linux 的配置、操作步骤与界面说明。"
---

# Android 本地 Linux

## 使用条件

Local Linux 在 Android 8+ 的 ARM64 或 x86_64 64 位应用中提供 Ubuntu、Bash、Git 和 SSH。它使用 PRoot，无需 Android root 权限。不支持 iOS 或 32 位 ARM 设备。语言工具链、语言服务、调试适配器及外部 Agent CLI 需要另行安装。

<div class="doc-section">
<div class="doc-section__copy">

## 安装并打开

1. 在欢迎页或 Explorer 中选择 **Local Linux**。
2. 点击 **Install** 并等待安装完成。
3. 启动环境并打开工作区。

首次安装使用应用内置镜像，后续安装软件包可能需要联网。环境文件保存在应用私有存储中。

</div>

<div class="doc-screenshots">
  <DocScreenshot file="local-linux-deploy.jpg" caption="Local Linux 安装对话框，状态为 Not installed，并提供 Install 按钮。" />
</div>

</div>

## 验证运行环境

打开终端，运行 `uname -a` 查看内核与架构，运行 `cat /etc/os-release` 查看发行版信息。Local Linux 共享 Android 主机内核，不能仅凭内核名称判断 Ubuntu 用户空间版本。

<div class="doc-screenshots">
  <DocScreenshot file="local-linux-terminal-uname-a.jpg" caption="Local Linux 终端中的 uname -a 输出。" />
  <DocScreenshot file="local-linux-ai-print-os-info.jpg" caption="AI 根据 uname 与 /etc/os-release 输出汇总系统信息。" />
</div>

## 停止、重置或删除

通过 Local Linux 控制项管理环境。停止会中断当前工作，再次启动使用原有环境。重置、删除环境或清除应用数据会移除环境文件。内置 SSH 服务监听回环地址，供应用连接使用。Android 可能结束后台进程，回到应用后请检查环境状态。

## 参考资料

[安装入门](/zh/docs/local-linux/getting-started) · [架构](/zh/docs/local-linux/architecture) · [兼容性](/zh/docs/local-linux/compatibility) · [安全与完整性](/zh/docs/local-linux/security-integrity) · [Presets](/zh/docs/local-linux/presets) · [故障排查](/zh/docs/local-linux/troubleshooting) · [源码与许可证](/zh/docs/local-linux-source)
