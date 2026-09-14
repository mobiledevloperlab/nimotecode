---
title: 安全与防护 | NimoteCode
description: NimoteCode SSH 工作区、AI Provider 凭据、AI Agent 审查、终端命令与 Git 改动的实用安全建议。
---

# 安全与防护

NimoteCode 可处理 SSH 访问、Provider 凭据、终端命令和文件改动。应用提供安全存储与受控工作流机制，但远程开发的安全性仍取决于每次主机和操作选择。

## 凭据与访问

- 敏感环境使用独立、最小权限的 SSH 账户。
- 关键主机优先使用私钥认证；每次会话确认主机和项目根路径。
- 将 AI Provider 凭据视为敏感数据，通过应用的受保护存储流程配置，并按 Provider 要求轮换。

## AI Agent 与写入动作

AI Agent 将工具执行与普通对话区分开，并为文件和命令工作提供校验与锁定层。即便如此，在拥有生产访问权限的工作区中，也必须审查每个建议命令和改动。提交或推送前使用 [Source Control](/zh/docs/source-control) 查看 diff。

## 更安全的远程流程

1. 确认 SSH 主机、用户和项目根路径。
2. 从检查或低风险命令开始。
3. 结合上下文阅读终端输出与 AI 建议。
4. 完成最小必要改动。
5. 测试后再审查 Git diff 并交付。
