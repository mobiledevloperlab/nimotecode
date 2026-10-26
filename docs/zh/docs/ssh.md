---
title: 本地与 SSH 工作区 | NimoteCode
description: "本地与 SSH 工作区的配置、操作步骤与界面说明。"
---

# 本地与 SSH 工作区

## 选择工作区

Explorer 提供本地、远程 SSH、Local Linux 和演示入口，Recent History 列出最近打开的位置。当前工作区决定文件访问范围及可用工具。

<div class="doc-screenshots">
  <DocScreenshot file="workspace-start-light.png" caption="尚未打开工作区的 Explorer，浅色主题。" />
  <DocScreenshot file="workspace-start-dark.jpg" caption="尚未打开工作区的 Explorer，深色主题。" />
</div>

## 打开本地目录

选择 **Open Local Workspace**，通过系统选择器选择存储位置并授权访问项目目录。该目录将作为 Local Explorer 的根目录。选择器外观和可用位置由操作系统决定。

### 选择存储位置

点击 **Open Local Workspace** 后，在系统选择器中找到项目所在的存储位置。下图以 Android 为例，其他系统的界面可能不同。

<div class="doc-screenshots">
  <DocScreenshot file="local-storage-picker.png" caption="Android 存储位置选择器。" />
</div>

### 授权项目目录

进入项目文件夹，确认目录后点击 **Use this folder** 授权访问。选择项目目录，而不是只选择某个文件。

<div class="doc-screenshots">
  <DocScreenshot file="local-file-browser.png" caption="Android 目录选择器及 Use this folder 授权按钮。" />
</div>

### 确认本地工作区

返回 Local Explorer 后，检查当前根目录是否正确。截图中的目录为空；打开自己的项目后，应在这里确认项目文件。

<div class="doc-screenshots">
  <DocScreenshot file="local-workspace-files.png" caption="选定目录后的 Local Explorer；示例目录未列出项目文件。" />
</div>

## 配置 SSH 连接

1. 选择 **Connect Remote Workspace**，再通过 **Connect** 添加连接配置。
2. 填写主机、端口、用户名和认证方式。
3. 网络需要代理时，在 **Proxy Settings** 中选择 SOCKS5 或 HTTP CONNECT。
4. 连接成功后选择远程项目目录。

**Ping / test SSH port** 仅检查主机与端口的直接 TCP 连通性，不经过代理，也不验证登录凭据。端口测试成功不代表 SSH 登录成功。

<div class="doc-screenshots">
  <DocScreenshot file="remote-connection-form.jpg" caption="SSH 连接表单，包括端口测试、代理和认证设置。" />
  <DocScreenshot file="remote-connection-history.png" caption="Recent History 中保存的 SSH 连接。" />
</div>

## 选择项目根目录

在远程目录选择器中输入路径或逐级浏览到项目目录。打开后，检查 Explorer 显示的服务器、用户、端口和根路径。点击 **Select** 进入文件选择模式。切换目录会改变项目工具使用的工作区。

### 定位远程目录

在 **Remote Directory** 中输入项目路径，或逐级浏览目录，然后选择需要打开的项目根目录。

<div class="doc-screenshots">
  <DocScreenshot file="remote-directory-picker.jpg" caption="Remote Directory 对话框，用于选择工作区根目录。" />
</div>

### 核对连接与路径

打开工作区后，核对 Remote Explorer 显示的主机、用户、端口和根路径，确认正在操作预期的远程项目。

<div class="doc-screenshots">
  <DocScreenshot file="remote-workspace-connected.jpg" caption="已连接的 Remote Explorer，显示当前主机与根路径。" />
</div>

### 进入文件选择模式

需要选择文件时，点击 **Select** 进入选择模式。先确认当前工作区，再选择目标文件。

<div class="doc-screenshots">
  <DocScreenshot file="remote-file-selection.jpg" caption="Remote Explorer 的文件选择模式。" />
</div>
