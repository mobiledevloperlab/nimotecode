---
title: NimoteCode 功能 | 移动开发工作区
description: 在手机或平板打开项目，连接开发电脑，在同一工作区编辑文件、运行命令并检查 Git 改动。了解 SSH、Android Local Linux、AI、Docker 与 Pro 适用场景。
---

# NimoteCode 功能

NimoteCode 是面向手机和平板的移动开发工作区，用于处理已有项目。它不会替代你的代码仓库、服务器、包管理器、模型服务商或项目工具链；它将文件、编辑器、Shell 环境、版本控制和可选 AI 协助集中在同一处。

<div class="guide-actions">

[快速开始](/zh/docs/quick-start) · [阅读文档](/zh/docs) · [下载 NimoteCode](/zh/download)

</div>

## 选择适合工作的环境

| 工作区 | 适用场景 | 重要边界 |
| --- | --- | --- |
| **本地工作区** | 打开操作系统已授权给 NimoteCode 的文件夹，编辑文件并查看设备上的 Git 仓库。 | 本地文件夹本身不提供 Linux Shell、编译器或项目运行环境。 |
| **SSH 工作区** | 使用远程主机上已有的项目与工具。 | 命令以所选远程账户及其权限运行；工具、依赖和访问控制仍由该主机负责。 |
| **Android Local Linux** | 在支持的 Android 设备上运行免 root 的 Ubuntu 用户空间，并在工作区使用 Bash、Git 和 SSH。 | 仅限 Android；工具链与项目依赖需另行安装，并非取得 Android root 权限。 |
| **演示工作区** | 在连接项目之前浏览示例文件和界面。 | 它是示例项目，不是可部署的开发环境。 |

请参阅[本地与 SSH 工作区](/zh/docs/ssh)和[Android Local Linux](/zh/docs/local-linux)，了解配置和兼容性。

## 在同一工作区中开发、检查和审查

| 能力 | 可以完成的工作 |
| --- | --- |
| **[代码编辑器](/zh/docs/editor)** | 打开本地或远程文件，使用标签页或分栏编辑，执行撤销、重做和剪贴板操作；在语言服务可用时进行符号导航，并预览 Markdown 或静态 HTML。 |
| **[终端](/zh/docs/terminal)** | 在 SSH 和 Local Linux 工作区运行命令、搜索和复制输出、为终端会话命名，并在修改 Shell 配置后刷新远程登录环境。 |
| **[源代码管理](/zh/docs/source-control)** | 查看状态、暂存变更、差异、分支和历史；在具备写入权限时，按正常 Git 流程创建分支、提交、推送或暂存。 |
| **[GitHub 工作流](/zh/docs/source-control#在工作区中使用-github)** | 登录、将仓库克隆到设备、Local Linux 或 SSH 主机，并根据 GitHub 权限处理 Issue、拉取请求、评审、检查、工作流运行和构建产物。 |
| **[任务](/zh/docs/tasks)** | 保存命名命令，并从已连接的 SSH 或 Local Linux 项目目录运行。 |
| **[工作区搜索](/zh/docs/search)** | 在 SSH 工作区搜索文件内容，支持区分大小写和正则表达式。 |

构建、测试或 Git 操作的实际行为由项目决定。执行会改动文件或发布代码的操作前，请确认工作目录、命令、差异和远程地址。

## 以明确上下文和控制使用 AI

AI 为可选功能，需要自行配置模型服务。NimoteCode 提供 OpenAI、Anthropic、Google Gemini、xAI Grok、DeepSeek、阿里云 Qwen、OpenRouter、Groq、SiliconFlow、StepFun、智谱 AI/GLM、Moonshot AI、Ollama 以及兼容 OpenAI 接口的配置模板。服务商账户、网络、模型可用性和模型用量费用均由相应服务商决定。

- **[AI Chat](/zh/docs/ai)** 可根据你选择的工作区或文本上下文回答问题。
- **Nimote Agent** 可规划并完成多步骤工作区任务；Confirm 模式会先展示计划并请求批准，时间线会记录其执行过程。
- **外部 ACP Agent** 可在 SSH 或 Local Linux 环境中按需启用兼容运行时；这是具有独立凭据、策略和能力的第三方进程。
- **MCP 服务器** 可以配置为本地/远程命令进程或 HTTP 服务；仅添加可信服务器，并检查凭据和每次工具调用。

AI 输出仅供协助，不保证正确性、安全性或执行成功。使用前请审查生成的代码、命令和说明。

## 围绕项目扩展工作区

| 能力 | 作用 |
| --- | --- |
| **[自定义插件](/zh/docs/plugins)** | 创建可复用面板，组合工作区数据、表单、文件操作、HTTP 请求以及经确认的命令或脚本。 |
| **[语言服务（LSP）](/zh/docs/lsp)** | 当工作区目标已安装并配置兼容语言服务器时，提供诊断和代码操作。 |
| **[调试](/zh/docs/debug)** | 通过已配置的调试适配器检查断点、变量、监视表达式、调用栈和程序输出。 |
| **[同步与缓存](/zh/docs/sync-cache)** | 在本地存储和远程工作区之间传输项目内容，开始前可选择方向并核对路径。 |

插件、语言服务和调试工具不会静默安装依赖或增加主机权限。插件脚本以所选 SSH 或 Local Linux 账户的权限运行；文件、网络和执行类操作需要用户确认。

## 权益和可用性

功能可用性会因平台、应用版本、账户权益、发布渠道和商店地区而不同。应用会在当前账户对应的操作位置显示可用状态；如果某项能力以 Pro 方式提供，限制的是应用内操作，不会改变远程主机账户原本拥有的权限。请参阅[账户与订阅](/zh/docs/account-subscription)了解如何查看或恢复权益。

具体工作流的配置步骤和限制请以相应功能文档为准。

## 界面概览

以下截图展示了上文介绍的工作区、代码审查、诊断与项目传输界面。

<div class="feature-showcase" role="region" tabindex="0" aria-label="NimoteCode 功能亮点">
  <div class="feature-showcase__track">
    <figure class="feature-showcase__item"><img src="/screenshots/p1.png" alt="NimoteCode 中的本地文件、SSH、代码编辑与 AI Agent" width="1604" height="901" loading="eager"><figcaption>工作区、编辑与 AI Agent</figcaption></figure>
    <figure class="feature-showcase__item"><img src="/screenshots/p2.png" alt="NimoteCode 中的 SSH 终端、Source Control 与代码诊断" width="1597" height="896" loading="lazy"><figcaption>终端、Git 与诊断</figcaption></figure>
    <figure class="feature-showcase__item"><img src="/screenshots/p3.png" alt="NimoteCode 的调试、远程工作区同步与智能缓存" width="1598" height="893" loading="lazy"><figcaption>调试与工作区同步</figcaption></figure>
  </div>
</div>

## 2.3.0 工作区与 Docker

可在 IDE、终端和 AI 模式间切换，同时保留项目与资源管理器状态。SSH 主机上的 Docker 面板可列出容器、镜像、卷、网络和 Compose 项目。以下浅色主题截图展示 Docker 镜像列表及 Debian bookworm-slim 镜像详情。Dev Container 从项目的 `devcontainer.json` 读取配置。

<div class="doc-screenshots">
  <DocScreenshot file="docker-images.png" caption="浅色主题下的 Docker 镜像列表，包含 Debian bookworm-slim。" />
  <DocScreenshot file="docker-image-detail.png" caption="浅色主题下的 Debian bookworm-slim 镜像详情。" />
</div>
