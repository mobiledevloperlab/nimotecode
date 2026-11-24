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

## 更新或卸载社区版

手动更新时，先结束正在执行的任务，下载并校验适合电脑的新包，再从新解压的目录运行 `setup`。通过 Nimote Connect 安装的 Host 请在 Connect 中更新。

`deploy uninstall` 会移除空闲的后台服务和已安装的程序包，同时保留凭据与会话记录。请从解压后的社区版包运行，或使用安装目录之外已验证的部署程序。需要切换版本时，请先阅读[社区版指南](https://github.com/mobiledevloperlab/nimotehost/blob/master/docs/community.md)。

[高级部署与恢复](https://github.com/mobiledevloperlab/nimotehost/blob/master/docs/deployment.md)

[概览](/zh/docs/host) · [故障排查](/zh/docs/host/troubleshooting)
