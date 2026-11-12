---
title: "手机与平板远程编程：SSH 配置与排障 | NimoteCode"
description: "配置 Android、iPhone 和 iPad 远程编程：准备 SSH 主机、验证 SFTP、选择仓库、运行检查，并按网络、账号和运行环境排查问题。"
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# 远程编程：把手机连接到已有项目

让仓库、依赖和服务继续留在开发机上，用 NimoteCode 从手机或平板浏览和编辑。本文提供连接与验证顺序，应用功能说明见 [SSH IDE](/zh/ssh-ide)。

## 1. 准备主机和网络

开启主机 SSH 服务，保持唤醒，确认目标账号能访问仓库。首次使用实际局域网地址测试，外网访问需 VPN 等安全通路。不要以为添加防火墙规则就能让主机自动可达。

## 2. 连接并检查文件访问

1. 创建 SSH 配置，填写地址、端口、账号及允许的认证方式，核对主机指纹。
2. 在 Remote Explorer 选择项目根目录，在用户可写目录打开并保存测试文件，验证 SFTP 和写权限。
3. 打开终端，独立确认目录和分支。在 Linux 或 macOS 上可使用下列命令。

```sh
pwd
git status --short --branch
```

<figure class="seo-phone-capture">
  <a href="/images/ios/iphone-ssh.webp" target="_blank" rel="noopener">
    <img src="/images/ios/iphone-ssh.webp" width="660" height="1433" alt="iPhone Remote Explorer 显示已连接的 SSH 项目。" loading="lazy" decoding="async">
  </a>
  <figcaption>iPhone Remote Explorer 显示已连接的 SSH 项目。 来源：NimoteCode App Store 页面。此图为宣传截图，不是连续操作录屏。</figcaption>
</figure>

## 3. 验证一次真实修改

保存编辑，在主机运行仓库约定的检查，提交前审查 Git 变更。能连接 Shell 不代表已安装依赖，编辑器标签页也不能证明终端处于同一个 checkout。长任务需主机会话管理，断线后先检查状态。

## 按层次排查

| 现象 | 检查内容 |
| --- | --- |
| 超时 | 电源、地址、VPN、防火墙和网络隔离 |
| 连接拒绝 | SSH 服务和监听端口 |
| 认证失败 | 用户名、账号策略、密码或密钥 |
| Shell 正常但文件失败 | SFTP 子系统和目录权限 |
| 命令失败 | 工作目录、主机依赖与权限 |

Windows 用户可按 [OpenSSH/SFTP 教程](/zh/docs/windows-ssh-sftp)配置。没有主机时可阅读[用手机编程](/zh/code-from-phone)，应用设置见 [SSH 文档](/zh/docs/ssh)。

可以从本地或 SSH 编辑及基础终端开始。部分功能需要 Pro，参见[免费版与 Pro](/zh/pro)及应用内显示的访问状态。AI 需要配置自己的模型提供商，模型使用费用由提供商另行收取。

<div class="seo-cta">
  <p><strong>下载 NimoteCode</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="/zh/docs/quick-start" class="home-page-btn secondary">快速入门</a>
  </p>
</div>
