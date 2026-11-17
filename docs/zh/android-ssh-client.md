---
title: "Android SSH 客户端：终端、SFTP 与代码编辑器 | NimoteCode"
description: "使用 NimoteCode 从 Android 连接 Linux、macOS 或 Windows，通过 SSH 执行命令、通过 SFTP 浏览和编辑文件，并在远程工作区审查 Git 变更。"
lastUpdated: "2026-11-17"
pageClass: "seo-product-guide"
---

# Android SSH 客户端：终端、SFTP 与代码编辑器

NimoteCode 让 Android 手机或平板通过 SSH 连接远程主机。在同一个应用中执行终端命令、通过 SFTP 浏览项目文件、编辑代码；仓库、依赖和构建工具保留在主机上。

离开电脑时，可以用它检查服务、修改配置文件或处理代码变更。需要操作整个项目时，将仓库打开为远程工作区，便可在使用终端的同时浏览文件、检查修改。

## 执行命令，处理项目文件

| 任务 | 在 NimoteCode 中的操作 |
| --- | --- |
| 执行命令 | 通过 SSH 终端使用主机的 Shell 和已安装的工具。 |
| 浏览远程文件 | 在远程资源管理器中选择目录，通过 SFTP 访问文件。 |
| 编辑代码或配置 | 在编辑器中打开远程文件，保存时写回主机；账号需具备对应的写入权限。 |
| 审查变更 | 提交前在源代码管理中查看差异。主机需安装 Git，部分高级 Git 功能可能需要 Pro。 |

Linux 和 macOS 使用主机配置的 Shell。Windows 工作区使用 PowerShell 与 SFTP；服务端安装、防火墙和文件访问设置见 [Windows OpenSSH 指南](/zh/docs/windows-ssh-sftp)。

## 从 Android 连接 SSH 主机

连接前，先在主机上启用 SSH 服务，确认账号能够访问项目目录。主机需要保持唤醒，并能从 Android 设备所在的网络访问。

1. 在 NimoteCode 中选择 **Connect Remote Workspace**，再选择 **Connect**，新建连接配置。
2. 填写主机地址、SSH 端口、用户名，以及服务端允许的认证方式。两台设备处于同一局域网时，使用主机当前的 Wi-Fi 或以太网地址。
3. 首次连接时，将主机密钥指纹与通过可信渠道取得的服务端记录核对，确认后再接受连接。
4. 连接后，在 **Remote Directory** 中选择项目目录。Git 项目应选择仓库根目录。
5. 开始编辑前，检查远程资源管理器显示的主机、账号和根目录路径。

<div class="doc-screenshots">
  <DocScreenshot file="remote-connection-form.jpg" caption="SSH 连接设置：主机、端口、用户名、认证方式及可选代理。" />
  <DocScreenshot file="remote-workspace-connected.jpg" caption="远程资源管理器显示已连接的主机和选定的项目根目录。" />
</div>

**端口测试的作用：** **Ping / test SSH port** 只测试到指定主机和端口的直连 TCP 连接，不测试已配置的代理、不验证账号，也不检查 SFTP。测试通过仅表示这一步网络检查成功。

从主机所在局域网之外访问时，需先配置 VPN 等安全网络通路。网络要求使用代理时，可在连接表单中设置 SOCKS5 或 HTTP CONNECT。具体设置见 [SSH 工作区说明](/zh/docs/ssh)。

## 用一次实际修改验证连接

在自己有权限的测试目录中打开文件，做一处小修改并保存，再次打开，确认内容已写入。这样可以单独验证文件访问和写入权限，避免把终端连接成功当成文件操作正常。

执行命令前，在终端中确认当前目录和 Git 分支。Linux 或 macOS 可以使用：

```sh
pwd
git status --short --branch
```

在主机上执行项目规定的检查，提交前再查看差异。终端调用的是主机上已安装的软件；Git、语言服务和外部编程 Agent 均需另行安装、配置，并具备相应权限。

## Android SSH 常见故障排查

| 现象 | 检查项 |
| --- | --- |
| 连接超时 | 主机是否开机或休眠，地址是否正确，VPN、防火墙及网络隔离设置是否影响访问。 |
| 连接被拒绝 | SSH 服务是否运行，是否监听所填写的端口。 |
| 认证失败 | 用户名、密码或密钥是否正确，是否符合服务端的账号及认证策略。 |
| 终端可用，但文件打不开 | 服务端是否启用 SFTP，账号是否有权访问选定目录。 |
| 文件能打开，但无法保存 | 文件归属、写入权限，以及文件系统是否只读。 |
| 项目命令执行失败 | 终端当前目录、主机上的依赖和工具执行权限。 |

完整的连接与验证流程见[远程编程配置指南](/zh/remote-coding)。

## 常见问题

### 必须有另一台电脑或服务器吗？

使用 SSH 时需要。NimoteCode 连接已有的 SSH 主机，构建和运行命令都在该主机上执行。如果希望完全在支持的 Android 设备上工作，可查看 [Android IDE 与本地 Linux](/zh/android-ide)。

### 终端连接成功，是否代表 SFTP 也能使用？

不一定。SSH Shell 和 SFTP 文件访问取决于各自的服务端设置。账号还需要项目目录的读取权限，以及待修改文件的写入权限。

### 免费版可以做什么？

免费版包含本地与 SSH 工作区、文件编辑和基础终端。高级 Git 工作流、多终端和语言服务等功能可能需要 Pro。具体以[免费版与 Pro](/zh/pro)说明及应用内当前账号显示的可用功能为准。

<div class="seo-cta">
  <p><strong>安装 Android 版 NimoteCode</strong></p>
  <p>连接 SSH 主机，打开项目目录即可开始工作。</p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">前往 Google Play</a>
    <a href="/zh/docs/quick-start" class="home-page-btn secondary">快速入门</a>
  </p>
</div>
