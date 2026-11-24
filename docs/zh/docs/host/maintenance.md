---
title: "服务管理与升级 | NimoteHost"
description: "NimoteHost 服务管理与升级说明与操作步骤。"
---

# 服务管理与升级

## 服务管理、升级与本地数据

社区版请使用 Community 发布渠道更新。通过 Nimote Connect 安装的 Host 请在 Connect 中更新。切换版本前先完成运行中的任务，并按社区版指南保留现有数据。 [社区版升级指南](https://github.com/mobiledevloperlab/nimotehost/blob/master/docs/community.md)

在 NimoteCode 2.5.0 中，从 **Host → 远程连接** 连接并检查安装状态。使用当前连接中显示的安装或更新入口，或打开 Host 帮助查看已安装版本。若需要停止正在运行的会话，请先核对影响再确认。

日常维护请使用安装后的 CLI。Linux/macOS 路径为 `~/.local/share/nimotehost/nimotehost`；Windows PowerShell 用 `& "$env:LOCALAPPDATA\NimoteHost\nimotehost.exe"` 调用。下表假定安装目录已加入 PATH，否则将命令中的程序名替换为完整路径。

| 命令 | 作用 |
| --- | --- |
| `nimotehost version` | 查看当前执行文件的版本。 |
| `nimotehost status` | 检查服务是否响应；运行中返回 `running: true`。 |
| `nimotehost capabilities` | 查看协议、平台、功能与已发现的工具。 |
| `nimotehost agents` | 检测已安装的 Agent 版本。 |
| `nimotehost install` | 从固定程序路径注册并启动用户服务。 |
| `nimotehost stop` | 停止 Host，同时结束正在托管的任务。 |
| `nimotehost restart` | 重启已安装服务，会结束运行中的任务。 |
| `nimotehost uninstall` | 停止并移除服务，保留凭据和记录。 |

已安装服务停止后，可用 `nimotehost restart` 启动；`nimotehost start` 是前台运行。`setup` 用于校验并安装整个包，`install` 用于注册固定位置上已有的程序。不要换账号或用 sudo 执行这些操作。

### 检查 SSH 实际使用的环境

在另一台电脑上执行，把 `user@host` 换成你的 SSH 目标。以下示例用于 Unix 主机：

```sh
ssh user@host 'command -v nimotehost && nimotehost status'
```

如果找不到命令，再检查固定路径：

```sh
ssh user@host '$HOME/.local/share/nimotehost/nimotehost status'
```

完整路径能运行时，应让 SSH 非交互环境的 PATH 包含安装目录，再回 App 重试。Windows 按前文检查同账号的发现记录和固定路径。Host 服务也需要找到 Agent 工具；Unix 安装时会记录 PATH 中的绝对路径和 `XDG_CONFIG_HOME`。改动工具路径后，先完成当前任务，再用已安装的程序执行 `nimotehost stop`，在修正后的环境执行 `nimotehost install`，刷新服务环境。

### 升级与卸载

下载并校验新的兼容完整包，结束当前任务，以原账号重新运行新包中的安装器。安装流程会保留旧包、检查新服务就绪，并拒绝中断活动任务；对未变化且健康的安装重复执行不会重启服务。先关闭旧 GUI。使用过旧程序名的预览版时，按仓库迁移说明操作，不要自行重命名状态目录。

升级后检查 `version`、`status` 和 `capabilities`，重新连接并创建一个小测试会话。降级前先备份状态；旧二进制可能无法读取新版记录。需要移除登录启动时，在已安装程序仍存在的情况下运行 `nimotehost uninstall`，之后按需删除安装包文件。卸载服务会保留本地身份、凭据和任务记录。

| 系统 | 安装目录 | 默认配置与状态目录 |
| --- | --- | --- |
| Linux | `~/.local/share/nimotehost` | `~/.config/nimotehost`，设置 XDG 时为 `$XDG_CONFIG_HOME/nimotehost` |
| macOS | `~/.local/share/nimotehost` | `~/Library/Application Support/nimotehost` |
| Windows | `%LOCALAPPDATA%\NimoteHost` | `%APPDATA%\nimotehost` |

状态目录包含私有身份、凭据、配置和会话记录。仅在 Host 停止时备份，保留仅所属用户可访问的权限，勿上传到公开仓库或问题附件。项目文件和 Agent 提供方的数据需要单独备份；复制 Host 记录不能恢复正在运行的进程。

### 查看服务启动失败的原因

- Linux：`systemctl --user status nimotehost.service`，日志用 `journalctl --user -u nimotehost.service -n 50 --no-pager`。缺少用户服务管理器时先前台运行；注销后继续运行需符合系统 lingering 策略。
- macOS：在已登录用户会话中执行 `launchctl print gui/$(id -u)/com.nimotehost`；没有图形登录会话时先尝试 CLI 前台运行。
- Windows：`schtasks.exe /Query /TN NimoteHost /V /FO LIST`，核对是否以目标登录账号安装。

[概览](/zh/docs/host) · [故障排查](/zh/docs/host/troubleshooting)
