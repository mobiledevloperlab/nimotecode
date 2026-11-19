---
title: "安全与兼容性 | NimoteCode"
description: "集中了解 SSH 凭据存储、代码发送给模型的条件、同步与缓存边界、Host 要求，以及系统和 Agent 的验证范围。"
pageClass: trust-page compatibility-page
---

<TrustNav />

# 安全与兼容性

连接项目前，先看清数据去向、运行条件与验证范围。具体设置和限制见各项详细说明。

<p class="compatibility-scroll-hint">小屏幕可横向滚动表格，查看全部列。</p>

## 数据与执行边界 {#boundaries}

<div class="compatibility-table" role="region" aria-label="数据与执行边界" tabindex="0">

| 你关心的问题 | 简要回答 | 详细说明 |
| --- | --- | --- |
| SSH 凭据存在哪里？ | 连接元数据保存在设备。应用管理的密码、私钥和私钥口令使用系统安全存储：iOS Keychain，或 Android Keystore 支撑的加密存储。删除已保存的 SSH 配置会移除对应安全凭据。 | [凭据存储](/zh/privacy#storage) |
| 什么情况下代码会发给模型？ | AI 请求可包含提示词、所选内容、相关文件、路径和工具输出。直接请求发送到你配置的服务；Agent 可按任务读取文件作为上下文。外部 Agent、MCP 工具有各自的接收方与政策；BYOK 不代表服务商零留存。 | [AI 数据流向](/zh/privacy#integrations) · [Agent 控制](/zh/docs/ai) |
| Sync / Cache 会写入什么？ | **Sync：本地 → 远程；Cache：远程 → 本地。** 开始前确认项目和目标路径。现有指南未列明同名覆盖、删除传播与冲突处理规则。传输前明确以哪份文件为准并备份；历史记录不能替代备份。 | [同步与缓存](/zh/docs/sync-cache) |
| Host 需要什么？ | 具备 Host 权益的 NimoteCode **2.4.1+**、在 Linux / macOS / Windows 电脑上单独安装的兼容 NimoteHost、可用的 SSH 连接及项目权限。电脑须保持唤醒；Agent 需另行安装、登录。 | [安装 Host](/zh/docs/host/getting-started) · [Pro 权益](/zh/pro) |
| Host 在哪里执行？ | 在你的电脑上，以 Host 系统账户权限执行。需认证的 API 仅监听回环地址，通过 SSH 访问；Host 凭据保留在电脑。断开客户端后托管任务可继续，Host 或系统重启会中断进程。 | [Host 访问边界](/zh/docs/host) · [会话限制](/zh/docs/host/sessions) |

</div>

## 兼容性与实测范围 {#compatibility}

**发布构建、界面截图和完整实测是不同证据。** 以下按现有记录说明范围，不把支持列表写成“所有组合均已实测”。

<div class="compatibility-table" role="region" aria-label="兼容性与实测范围" tabindex="0">

| 系统或 Agent | 已有记录与状态 | 依据与边界 |
| --- | --- | --- |
| Android 应用 | **2.4.1 / build 66**：有经审查的 ADB 界面截图；尚不等于逐机型、逐系统版本的完整验收表。 | [截图记录](/images/placeholders/sources.json) · [界面索引](/zh/docs/screenshot-guide) |
| iPhone / iPad | **2.4.1+66、iOS 26.0 模拟器**：iPhone 17 Pro、iPad Pro 11-inch (M5)。SSH、终端测试和 Git 使用临时 Mac 项目；AI 截图为配置模型服务前的界面。不是对应真机或模型任务的完整实测。 | [截图来源与范围](/images/ios/sources.json) |
| Linux / macOS / Windows Host | **2.4.0 发布目标**：x64、ARM64 的 CLI / 桌面包；Linux、Windows 另有 x86 CLI。完整原生平台及移动端 / Agent 验收仍待完成。Linux 桌面需 glibc 2.35+；macOS 包未签名、公证。 | [Host 兼容性](/zh/docs/host/compatibility) |
| Codex / Claude Code / OpenCode | Host 文档说明可发现兼容安装；Claude 结构化会话另需兼容的 `claude-agent-acp` 适配器。所链接指南未公布逐 Agent 版本 × 系统的完整验收表。 | [Host Agent](/zh/docs/host/agents) · [验证范围](/zh/docs/host/compatibility) |
| 终端 AI 工具 | 工作流页面有终端运行录像；CLI 能在终端运行，不等于 Host / ACP 结构化会话已验收。 | [终端工作流](/zh/use-cases/terminal-ai-tools) |
| Android Local Linux | 文档支持 Android 8+、64 位 ARM64 / x86_64；不支持 iOS 或 32 位 ARM。是否兼容仍取决于具体任务，容器测试不能替代 Android PRoot 实测。 | [兼容性与限制](/zh/docs/local-linux/compatibility) |

</div>

功能权益取决于账户与平台，模型服务费用另计。查看 [Pro](/zh/pro)、[隐私政策](/zh/privacy)，或通过[支持中心](/zh/support)确认具体环境。
