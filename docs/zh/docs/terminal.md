---
title: 移动终端 | NimoteCode SSH 工作区
description: 在 NimoteCode 工作区中执行命令、从项目 URL 打开应用内预览、搜索终端输出、使用快捷命令，并通过 Pro 保持进阶多终端上下文。
---

# 移动终端

Terminal 是 NimoteCode 工作区的验证层。在正在编辑的项目中执行命令、搜索输出，并让结果继续服务于下一次决策。

<ImagePlaceholder image-key="terminal" alt="NimoteCode 移动终端">
  <strong>图片占位符 —— 当前工作区中的 Terminal</strong>
  <span>请替换为真实 SSH 项目的终端输出、搜索及相邻编辑器标签截图。</span>
</ImagePlaceholder>

## 核心终端流程

- 在当前本地或 SSH 工作区执行命令。
- 查看实时输出，并在长日志中搜索错误和警告。
- 用快捷或自定义命令复用已知流程。
- 本地或远程 Web 项目输出 URL 时，可直接在应用内浏览器预览中打开；AI 回复和工具输出中的网页链接也使用同一入口。
- 将关键输出交给 [AI Chat 与 Agent](/zh/docs/ai) 协助理解。
- 远程重连后继续工作，但先确认主机和目录。移动端终端输入支持组合输入法文本、按键重复和实体键盘快捷键的可靠处理。

SSH 工作区可从 Terminal 菜单刷新远程账户的登录环境。Terminal、Tasks、Debug、语言服务、Git、外部 CLI 与 ACP Agent 会使用同一套解析后的 Shell 环境，包括其中的 `PATH`、语言区域与 SSH Agent 配置。

## 多个 Shell 同时重要时

Pro 提供进阶多终端工作流，适合并行保留日志、测试、服务与部署等上下文。高风险命令应保持清晰可见；已恢复的终端会话并不代表远程状态没有变化。

<ImagePlaceholder image-key="terminalMenu" alt="NimoteCode 手机上的终端菜单">
  <strong>终端操作与会话控制</strong>
</ImagePlaceholder>

下一步：[SSH 工作区](/zh/docs/ssh) · [Tasks](/zh/docs/tasks) · [移动值班诊断](/zh/use-cases/on-call-diagnostics)
