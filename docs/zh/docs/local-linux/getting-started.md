---
title: Android 本地 Linux 安装教程：运行第一条命令 | NimoteCode
description: "在兼容的 Android 手机上安装 Ubuntu、打开工作区并运行第一条命令。"
---

# 安装 Android 本地 Linux

按以下步骤打开设备上的 Linux 终端。开始前请确认[设备与账号要求](/zh/docs/local-linux#local-linux-requirements)，并为环境和项目工具预留存储空间。无需先配置 AI。

## 安装并打开工作区

1. 在欢迎页或 Explorer 中选择 **Local Linux**。
2. 点击 **Install（安装）**，等待安装完成。
3. 点击 **Start（启动）**，打开 `/workspace`。

首次安装使用应用内置镜像，环境文件保存在应用私有存储中。后续下载软件包需要联网。

<DocScreenshot file="local-linux-deploy.jpg" caption="在 Local Linux 安装对话框中选择 Install。" />

## 运行第一条命令

在当前工作区打开[终端](/zh/docs/terminal)，依次运行：

```sh
pwd
printf 'Hello from Local Linux\n'
```

如果打开的是 `/workspace`，终端会先显示该路径，再打印 `Hello from Local Linux`。

<DocScreenshot file="local-linux-terminal-uname-a.jpg" caption="Local Linux 终端直接在设备上执行命令。" />

## 准备项目工具

在 `/workspace` 中打开或创建项目文件，使用编辑器和[源代码管理](/zh/docs/source-control)。通过 Ubuntu 包管理器安装项目需要的工具即可；可选的 [Linux Presets](/zh/docs/local-linux/presets) 有独立的兼容性和安装要求。

遇到软件包错误或 PRoot 下的工具运行差异，请查看[故障排查](/zh/docs/local-linux/troubleshooting)。

## 停止、重置或删除

停止会中断当前工作，但保留环境。重置、删除环境或清除应用数据会移除环境文件，请先备份项目。

如果 Android 在后台结束了应用，返回后重新启动 Local Linux。
