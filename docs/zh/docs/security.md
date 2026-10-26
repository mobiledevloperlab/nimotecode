---
title: 凭据与操作审查 | NimoteCode
description: "凭据与操作审查的配置、操作步骤与界面说明。"
---

# 凭据与操作审查

## SSH 访问

使用具备项目所需权限的 SSH 账户。打开会话时检查主机、用户名和工作区根路径。代理设置只影响到达主机的连接方式，不改变账户权限。

## Provider 凭据

在 Provider 配置表单中填写 API Key。不要将凭据写入提示词、项目文件或共享日志。凭据泄露后，应通过 Provider 撤销并重新生成。

## 计划与文件改动

在 Confirm 模式下批准工具执行前，审查 Agent 计划。安装或更新插件时，检查权限请求。提交改动前，通过 [Git diff](/zh/docs/source-control)审查内容并执行项目检查。
