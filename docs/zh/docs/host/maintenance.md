---
title: "服务管理与升级 | NimoteHost"
description: "NimoteHost 服务管理与升级说明与操作步骤。"
---

# 服务管理与升级

用 SSH 登录时的同一账号，在运行 Host 的电脑上执行命令。下面假设安装目录已加入 PATH。找不到命令时，请使用下方的完整路径。

先用一条命令确认服务是否可用。下文命令里的 `nimotehost` 也可以换成完整路径。

```sh
"$HOME/.local/share/nimotehost/nimotehost" deploy status
```

```powershell
& "$env:LOCALAPPDATA\NimoteHost\nimotehost.exe" deploy status
```

## 查看状态与启动服务

| 命令 | 作用 |
| --- | --- |
| `nimotehost --version` | 查看已安装 CLI 的版本。 |
| `nimotehost deploy status` | 查看后台服务状态。`"running": false` 表示服务已停止。 |
| `nimotehost deploy start` | 启动已安装的后台服务，等待服务可用。 |
| `nimotehost deploy stop` | 停止空闲的后台服务。有任务正在执行时，命令会拒绝中断。 |
| `nimotehost agents` | 检查运行中的 Host 能找到哪些 Agent 工具。 |
| `nimotehost tools refresh` | 安装或调整工具后刷新发现结果，无需重启现有会话。 |

## 更新 Nimote Connect

先结束正在运行的 Host 任务，再在受支持的 macOS 或 Linux 上使用 NimoteCode 的 Nimote Connect 更新入口。手动升级或卸载请按 [Nimote Connect 指南](/zh/docs/connect)操作，并使用原安装账号。

[Nimote Connect Releases](https://github.com/mobiledevloperlab/nimote-connect/releases) · [概览](/zh/docs/host)
