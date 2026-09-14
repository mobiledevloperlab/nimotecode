---
title: 本地与远程 SSH 工作区 | NimoteCode 移动 IDE
description: 在 NimoteCode 中打开本地项目或通过 SSH 连接远程项目，并在明确的项目根路径中完成工作。
---

# 本地与远程 SSH 工作区

NimoteCode 从工作区开始：可以是在设备中保存的本地项目，也可以是通过 SSH 访问的远程项目。Explorer、编辑器和终端都会保持指向同一项目根路径，让任务从检查到验证始终可理解。要在 Android 中使用内置 Ubuntu，请查看 [Android 本地 Linux](/zh/docs/local-linux)。

<ImagePlaceholder image-key="localWorkspace" alt="NimoteCode 手机上的本地工作区">
  <strong>本地工作区</strong>
  <span>通过 Local Explorer 打开保存在设备中的项目。</span>
</ImagePlaceholder>

## 打开本地工作区

选择 **Local Explorer** 浏览保存在设备中的项目。编辑文件、执行命令或使用 Source Control 审查改动前，先确认当前文件夹。

## 连接 SSH 工作区

<ImagePlaceholder image-key="sshWorkspace" alt="NimoteCode SSH 工作区配置">
  <strong>SSH 工作区配置</strong>
  <span>连接远程主机后，在 Remote Explorer 中打开项目根目录。</span>
</ImagePlaceholder>

通过以下四步连接：

1. 新建或选择 SSH 配置档。
2. 填写主机、端口和用户名。
3. 使用密码、私钥文件或粘贴私钥认证。
4. 确认远程项目根路径，然后在 Remote Explorer 中打开它。

## 选择并确认远程目录

Explorer 是 SSH 项目的起点。连接后选择 **Remote Explorer**，再确认主机和项目根路径，之后再打开文件或执行命令。

<ImagePlaceholder image-key="explorerPage" alt="NimoteCode 手机上的 Explorer 选择页面">
  <strong>选择工作区 Explorer</strong>
</ImagePlaceholder>

<ImagePlaceholder image-key="explorerPopup" alt="NimoteCode 手机上的 Explorer 选择弹窗">
  <strong>Explorer 选择控件</strong>
</ImagePlaceholder>

应选择项目根目录，而不是服务器的主目录。这样编辑器、终端、搜索和 Source Control 才会共享明确边界，也能降低在错误位置执行命令的风险。

<ImagePlaceholder image-key="remoteDirectory" alt="NimoteCode 手机上的远程目录选择对话框">
  <strong>选择远程项目目录</strong>
</ImagePlaceholder>

## 保持在同一上下文中的操作

- 在远程项目中浏览文件并用 [编辑器](/zh/docs/editor) 打开。
- 在对应项目中使用 [终端](/zh/docs/terminal) 执行命令。
- 使用[远程代码搜索](/zh/docs/search)定位配置、报错或函数引用。
- 在 [Source Control](/zh/docs/source-control) 中审查聚焦补丁；交付需要受限 Git 写入操作时再使用 Pro。

## 更稳妥的远程习惯

为每个环境设置独立配置档；敏感主机优先使用低权限账号与私钥认证；工作区根目录应明确。断线重连感知与连接复用让远程命令和预览隧道更可靠，但在执行写入操作前，始终重新确认当前主机和目录。

下一步：[终端](/zh/docs/terminal) · [手机远程热修](/zh/use-cases/remote-hotfix)
