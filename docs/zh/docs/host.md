---
title: "NimoteHost 社区版 | NimoteCode"
description: "在 Linux、macOS 或 Windows 电脑上安装 NimoteHost 社区版。断开连接后，托管任务继续运行。通过 NimoteCode 以 SSH 重新连接，即可查看输出、处理 Agent 审批并接续工作。"
---

# NimoteHost 社区版

在 Linux、macOS 或 Windows 电脑上安装 NimoteHost 社区版。断开连接后，托管任务继续运行。通过 NimoteCode 以 SSH 重新连接，即可查看输出、处理 Agent 审批并接续工作。

在开发主机中选择 SSH 连接。已配对设备可通过 Nimote Connect 获取网络路径。NimoteHost 可独立运行，通过已认证的 SSH 提供高级执行能力。

NimoteHost 社区版采用 Apache-2.0 开源许可，可通过 CLI 或桌面管理器独立运行。在手机上使用 NimoteHost 会话需要兼容的 NimoteCode（2.4.1 或更新版本）与 Pro 权益。

## 下载 NimoteHost 社区版 {#download-nimotehost}

<HostDownload />

[安装 NimoteHost](/zh/docs/host/getting-started) · [故障排查](/zh/docs/host/troubleshooting)

NimoteHost 社区版支持终端、任务、兼容的编程 Agent 和社区插件。GitHub Issue 派发由 Nimote Connect 随附的 Host 提供。升级或切换版本请参阅[社区版指南](https://github.com/mobiledevloperlab/nimotehost/blob/master/docs/community.md)。

## Host 能做什么，能为你带来什么？

Host 将开发电脑变成可从手机随时回来的工作台。项目和工具链继续留在熟悉的电脑上，执行由电脑负责，你用 NimoteCode 查看进展、审查结果、处理需要自己决定的事项。

| 能力 | 带来的价值 |
| --- | --- |
| 托管终端与任务 | 启动构建、测试、脚本或交互 Shell；客户端断线不会结束托管进程，重新连接即可查看保留的输出并继续操作。 |
| 结构化 Agent 协作 | 使用兼容的 Codex、Claude Code、OpenCode，阅读对话和工具结果，回复权限请求，并在支持时向执行中的 Agent 追加指令。 |
| 会话与任务收件箱 | 搜索、筛选、固定工作，集中找到待审批、执行失败和完成待审的任务，减少逐个打开会话确认的操作。 |
| 验证与代码审查 | 检查实际测试记录、退出码和 Diff，再决定是否接受结果。 |
| 沿用已有开发环境 | 在 Linux、macOS、Windows 上直接使用项目现有文件和工具链；服务器选 CLI，桌面选管理器，两者操作同一个 Host 服务。 |
| 开源与按需定制 | 审查 Host 完整源码、自行编译、修改行为、扩展集成，并在 Apache-2.0 许可下贡献改进。 |

例如，离开电脑前从手机启动项目测试，稍后回来查看退出码；让 Agent 完成一处明确的修复，途中处理权限请求，完成后审查 Diff 和验证记录。执行一直发生在开发电脑上，手机负责呈现进展和操作入口。

Host 和托管进程需要保持运行，Host 或系统重启不会恢复原进程。Agent、收件箱、验证、Issue 和插件入口取决于所连接主机及已安装工具。先在运行项目的电脑部署 Host，再连接手机使用。

## NimoteCode 和 NimoteHost 分别做什么？

**NimoteCode 是操作客户端，NimoteHost 在电脑上执行和托管工作。** NimoteHost 提供独立 CLI 和可选的桌面管理器，支持 Linux、macOS、Windows，以 Apache-2.0 许可证在 [NimoteHost 仓库](https://github.com/mobiledevloperlab/nimotehost)开放完整源码。NimoteCode 应用仍为商业闭源软件。Host 也可独立运行，通过 RPC、Go 客户端包和按需启用的 MCP 接口接入其他工具。

连接关系是：**NimoteCode → 已有 SSH 连接 → NimoteHost → 项目工具与 Agent**。无需额外的 Nimote 账号、公网中继或 Host 入站端口；本地 API 需要认证，Host 凭据保留在电脑上。命令默认以 Host 所属的系统账号权限运行；需要隔离用户或访问范围时，应使用独立系统账号。

截图来自早期的 Android 客户端与 Host 构建，包括 NimoteCode 2.3.1（Build 64）和本地构建的 Host 2.4.0。实际功能和界面取决于所连接的 Host、客户端版本和已配置的工具。

## 完整开源：可审查、可自定义、可参与贡献

**NimoteHost 完整源码采用 Apache-2.0 许可证开放**，范围包括 Host 服务端、CLI、桌面管理器与集成 SDK。你可以检查远程执行、凭据处理和会话持久化的实现，自行编译部署，并按自己的开发环境修改。该许可适用于 NimoteHost；NimoteCode 客户端仍是商业闭源软件。

- **查看与自行构建：** 阅读源码和依赖，核对许可证声明，按[源码安装指南](/zh/docs/host/getting-started#host-source)构建，无需只依赖预编译包。
- **修改与自定义：** Fork 仓库，调整 Host 行为、桌面界面或部署方式，维护自己的构建；与 App 连接时保持协议和能力协商兼容。
- **扩展工作流：** 使用 `pkg/pluginsdk` 开发社区插件，通过 RPC、MCP 接入自己的工具，或用 `pkg/hostclient` 编写 Go 集成。MCP 默认只读，写操作需明确启用。
- **贡献代码与文档：** 通过 Issue 反馈可复现问题或提出方案，通过 Pull Request 贡献修复、Agent 适配、插件、翻译和文档；较大的协议或架构调整先讨论，再按贡献指南完成检查。

[浏览完整源码](https://github.com/mobiledevloperlab/nimotehost) · [Apache-2.0 许可证](https://github.com/mobiledevloperlab/nimotehost/blob/master/LICENSE) · [贡献指南](https://github.com/mobiledevloperlab/nimotehost/blob/master/CONTRIBUTING.zh-CN.md) · [插件 SDK](https://github.com/mobiledevloperlab/nimotehost/blob/master/docs/plugin-system/plugin-sdk.md)

### 实现透明，访问由你掌握

Host 沿用已有的 SSH 认证连接，本地 HTTP API 仅监听回环地址并要求认证；Host 凭据保留在电脑上，无需额外的 Nimote 中继或公开 API 端口。你决定服务部署在哪里，也可以审查和修改处理访问的代码。

命令默认使用 Host 所属系统账号的权限，应按项目需要分配账号、审查 Agent 与插件权限，并保持依赖更新。Agent 的提示词与项目上下文可能发送给该 Agent 配置的模型服务商。开源让安全审查可验证，并不等于保证零漏洞或已经完成独立安全审计；漏洞反馈请按[安全政策与私密报告流程](https://github.com/mobiledevloperlab/nimotehost/blob/master/SECURITY.zh-CN.md)处理。

## 下载与安装 {#host-install}

[下载与安装](/zh/docs/host/getting-started#host-install)

### 从源码安装 {#host-source}

[下载与安装](/zh/docs/host/getting-started#host-source)
