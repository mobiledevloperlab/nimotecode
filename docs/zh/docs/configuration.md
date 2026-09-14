---
title: 配置指南 | NimoteCode
description: 使用实用的 AI Provider、SSH 工作区和远程 Tasks 配置清单，让 NimoteCode 移动开发工作流更稳定可靠。
---

# 配置指南

围绕你实际要完成的任务配置 NimoteCode。一组小而经过验证的配置，比在紧急时刻面对大量陌生配置档更可靠。

## AI：保留主配置与备用配置

填入 Provider 端点、凭据和模型后，先在 AI Chat 中验证，再把它用于 Agent。保留一个主配置和一个已测试的备用配置，有助于平衡可靠性与成本。精确代码任务可选择较低随机性；需要更快反馈时可开启流式输出；上下文行为应按任务明确设置。

<ImagePlaceholder image-key="aiModelConfig" alt="NimoteCode 手机上的 AI 模型配置">
  <strong>AI 模型配置</strong>
</ImagePlaceholder>

<ImagePlaceholder image-key="aiEditConfig" alt="NimoteCode 手机上的 AI 编辑配置">
  <strong>AI 编辑配置</strong>
</ImagePlaceholder>

## SSH：先命名环境，再划定边界

为每个环境创建独立配置档，并设置易识别的名称、主机、端口、用户和认证方式。连接后确认项目根路径。敏感主机建议使用私钥和最小权限账号；不要因为配置档名称熟悉，就假定它仍指向安全环境。

## Tasks：记录已知流程，不记录猜测

可为构建/测试、检查/格式化、健康检查和日志查询创建任务。按用途分组，并让重启、部署或会改变数据的命令非常醒目。Tasks 运行在 SSH 工作流中，执行前需要确认权限和当前目录。

## 开始日常使用前的检查

1. AI Chat 可以通过目标配置正常响应。
2. SSH 配置能连接到预期主机与项目根路径。
3. 至少一条低风险终端命令可运行。
4. 至少一个熟悉的任务能成功完成。
5. 使用 Pro Git 工作流时，先确认 Source Control 能读到正确仓库状态。

继续阅读：[设置](/zh/docs/settings) · [AI Chat 与 Agent](/zh/docs/ai)
