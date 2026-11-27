---
title: "故障排查 | NimoteHost"
description: "NimoteHost 故障排查说明与操作步骤。"
---

# 故障排查

先确认普通 SSH 可用。使用电脑可访问的 SSH 地址，或在「开发主机」里选择可用的已配对连接。使用 Nimote Connect 公网连接前，请先绑定设备并启用公网访问。

## 连不上时，按这个顺序查

| 看到的情况 | 先检查什么 |
| --- | --- |
| SSH 本身连不上 | 地址、端口、账号、网络和主机密钥；先让普通 SSH 能登录。 |
| 未找到 Host | 是否安装在当前 SSH 账号下；Unix 检查 SSH 环境的 PATH，Windows 检查该账号的发现记录和安装路径。 |
| 找到 Host，但服务没启动 | 已安装服务时，可用 `nimotehost deploy status` 查看状态，用 `nimotehost deploy start` 启动。 |
| 协议不兼容 | 将 App 与 Host 更新到配套版本，再连接。 |
| 没有可选 Agent | 如果已在电脑上安装并登录 Agent，但 Host 找不到它，请运行 `nimotehost tools refresh`，再用 `nimotehost agents` 检查。 |
| 列表能看，不能输入 | 可能只是已加载的历史；先确认已重新连接，且会话还在运行。 |
| 目录不存在或没有权限 | 使用远程电脑上的绝对路径，确认 SSH 账号可以进入该目录。 |
| 已启动却没收到结果 | 先刷新列表查找原会话；结果不明时不要直接重复创建。 |

停止、重启或更新 Host 前，先处理完正在运行的任务。更新会保留记录，但不能把运行中的进程迁移到新服务。

进一步了解：[SSH 工作区](/zh/docs/ssh) · [AI 与 Agent](/zh/docs/ai) · [任务](/zh/docs/tasks) · [NimoteHost 实现说明](https://github.com/mobiledevloperlab/nimotehost/blob/master/docs/completed.md)

[概览](/zh/docs/host) · [硬件支持与版本选择](/zh/docs/host/compatibility)
