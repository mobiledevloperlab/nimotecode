---
title: "用手机通过 SSH 使用 Claude Code | NimoteCode"
description: "在开发主机运行 Claude Code，通过 Android 或 iPhone 上的 NimoteCode 访问。包含配置、会话恢复、Git 审查与分层排障步骤。"
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# 用手机通过 SSH 使用 Claude Code

希望项目继续留在开发机上，用手机接着处理 Claude Code 任务？本文通过 SSH 终端访问 Linux 或 macOS 主机上的 CLI，NimoteCode 在会话周围提供文件浏览、编辑、终端和 Git 审查。

SSH 是一种方式，不是唯一的移动入口。只需跟进 Agent 任务时，也应查看提供商当前的网页、移动端和远程访问方案。需要直接操作主机文件和项目命令时，NimoteCode 工作区更有价值。

## 1. 准备主机与账号

准备保持唤醒的 SSH 主机、可访问的仓库和项目依赖。先按官方说明在主机安装 Agent 并完成认证，再依赖手机连接。Agent 的账号、额度、权限与凭据独立于 NimoteCode。

请为主机选择 Claude Code 官方安装方式，例如：

```sh
curl -fsSL https://claude.ai/install.sh | bash
claude --version
```

[Claude Code quickstart](https://code.claude.com/docs/en/quickstart) · [Remote Control](https://code.claude.com/docs/en/remote-control)

## 2. 从手机打开仓库

创建 [SSH 工作区](/zh/docs/ssh)，核对主机密钥指纹并选择仓库根目录。在终端切换到同一路径，检查已有修改。下面的路径是示例，不是 NimoteCode 自动创建的目录。

以下 Shell 示例面向 Linux 或 macOS SSH 主机，请替换项目路径。Windows 主机应使用适合 PowerShell 的命令，参见 [Windows SSH 与 SFTP](/zh/docs/windows-ssh-sftp)。

```sh
cd /path/to/project
pwd
git status --short --branch
```

<figure class="seo-phone-capture">
  <a href="/images/ios/iphone-terminal.webp" target="_blank" rel="noopener">
    <img src="/images/ios/iphone-terminal.webp" width="660" height="1433" alt="NimoteCode 的 iPhone SSH 终端显示 Shell 命令。该图说明终端界面，并非 Claude Code 任务实录。" loading="lazy" decoding="async">
  </a>
  <figcaption>NimoteCode 的 iPhone SSH 终端显示 Shell 命令。该图说明终端界面，并非 Claude Code 任务实录。 来源：NimoteCode App Store 页面。此图为宣传截图，不是连续操作录屏。</figcaption>
</figure>

## 3. 在主机会话中启动任务

Linux 或 macOS 主机安装 tmux 后，可以在手机断线时保留主机上的终端会话。创建或连接命名会话，再在其中启动 Agent。重连时如果 Agent 仍在运行，继续使用该会话，不要重复启动另一个进程。

```sh
tmux new-session -A -s mobile-claude
claude
```

从一个范围明确的请求开始：

> 找到读取这个配置值的位置，说明相关文件并建议一项检查。先不要修改文件。

## 4. 区分重新连接与恢复对话

按 Ctrl+B，再按 D 可脱离 tmux。重新 SSH 登录后，连接同名会话。如果 Agent 已退出但保留了对话记录，可在同一仓库使用其恢复命令。已保存的对话和仍在运行的进程是两回事。

```sh
tmux attach-session -t mobile-claude
```

```sh
claude -r
```

[tmux](https://github.com/tmux/tmux/wiki/Getting-Started)

## 5. 在 Agent 对话之外验证结果

在 NimoteCode 中打开变更文件，保存编辑器修改，运行仓库约定的测试或构建，并阅读 Git diff。下列命令用于检查补丁，不能替代项目测试。

```sh
git diff --check
git diff --stat
git diff
```

Nimote Agent 的 Confirm 模式控制内置 Agent 工作流，不控制手动 SSH 命令，也不能代替外部 CLI 的权限设置。应配置 CLI 自己的权限，不要仅为减少手机输入而关闭确认。

## 按失败层次排查

| 现象 | 优先检查 |
| --- | --- |
| SSH 超时 | 主机休眠、地址、VPN、防火墙和网络通路 |
| 找不到 Agent 命令 | 该 SSH Shell 的安装路径和 PATH |
| 登录失败 | Agent 账号及官方无浏览器认证说明 |
| 会话消失 | tmux 会话、主机重启、进程退出，再考虑恢复对话 |
| 无法运行检查 | 仓库目录、主机依赖及执行权限 |

## 官方配置与相关指南

[Claude Code quickstart](https://code.claude.com/docs/en/quickstart) · [Remote Control](https://code.claude.com/docs/en/remote-control)

[SSH](/zh/docs/ssh) · [Git](/zh/docs/source-control) · [AI / ACP](/zh/docs/ai)

## 常见问题

<!-- faq:start -->

### NimoteCode 包含 Claude Code 订阅吗？

不包含。Claude Code 需单独安装和认证。NimoteCode 提供主机会话周围的移动工作区，不包含该 Agent 的账号或使用额度。

### 关闭应用会让 Agent 自动继续运行吗？

不会自动保证。主机会话工具可以帮助应对 SSH 断线，但主机和进程需要保持运行。重连时应检查状态。

### 这是 Claude Code 官方手机客户端吗？

不是。这是使用 NimoteCode 的独立 SSH 工作流指南。提供商支持的移动端或远程入口是其他可选方式。

<!-- faq:end -->

可以从本地或 SSH 编辑及基础终端开始。部分功能需要 Pro，参见[免费版与 Pro](/zh/pro)及应用内显示的访问状态。AI 需要配置自己的模型提供商，模型使用费用由提供商另行收取。

<div class="seo-cta">
  <p><strong>下载 NimoteCode</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="/zh/docs/quick-start" class="home-page-btn secondary">快速入门</a>
  </p>
</div>
