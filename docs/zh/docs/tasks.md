---
title: 远程 Tasks | NimoteCode
description: 在 NimoteCode Tasks 中保存、分组和运行可复用的 SSH 终端命令。
---

# 远程 Tasks

Tasks 将已经验证过的远程命令流程保存为可命名、可复用的操作。它适合构建检查、测试、格式化、健康检查和日志查询等不应在小屏幕上反复输入的工作。

<ImagePlaceholder image-key="tasksPage" alt="NimoteCode 手机上的 Tasks 页面">
  <strong>可复用的远程任务目录</strong>
</ImagePlaceholder>

## 围绕结果组织任务

- 将 **构建与测试** 命令放到一个清晰分组。
- 将 **检查与格式化** 与部署操作分开。
- 让 **重启、健康检查、日志** 任务的影响一眼可见。
- 在 SSH 终端上下文中运行，并跟踪输出和状态。

## 安全使用 Tasks

Tasks 运行在 SSH 工作流中，因此应在任务名称和命令里清晰体现环境。先从只读或低风险流程开始，记录前置条件，不要用模糊名称隐藏破坏性操作。创建和运行任务不区分单独的 Pro 档位。

相关：[SSH 工作区](/zh/docs/ssh) · [终端](/zh/docs/terminal) · [配置指南](/zh/docs/configuration)
