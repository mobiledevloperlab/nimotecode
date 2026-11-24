---
title: "Linux Presets 开发工具集：Python、Node.js 与 C++ | NimoteCode"
description: "了解 Android 本地 Linux 可选的 Ubuntu 开发工具集，安装前检查实验状态、支持架构、依赖和 SHA-256。"
---

# NimoteCode Linux Presets

可选的本地 Linux 开发工具集维护在 [Linux Presets 仓库](https://github.com/mobiledevloperlab/nimote-linux-presets)。按项目选择工具集，安装前确认其兼容性声明。

## 在 Android 应用内安装工具包 {#android-app}

在 NimoteCode 2.5.0 中安装 Ubuntu 后，打开本地 Linux 管理页的 **开发工具包**。选择工具包可查看依赖和预估占用，再确认安装。使用检查操作可验证已安装的工具。应用会校验固定版本的目录和脚本哈希。社区配置需要经过维护者审核并采用对应版本后才会进入应用。可安装项目以应用目录为准，实验性 C++ 工具包仍受限。

## 有哪些工具集

| 工具集 | 用途 |
| --- | --- |
| `minimal` | 基础命令行开发工具 |
| `python` | Python 3、pip 与虚拟环境 |
| `web` | Ubuntu 软件源中的 Node.js 与 npm |
| `cpp` | GCC、CMake、GDB 与原生构建工具 |

仓库声明的环境为 ARM64 或 AMD64 上的 Ubuntu 24.04。这些工具集标记为 **experimental（实验性）**，具体状态、依赖和运行要求以所选版本的 manifest 为准。

## 安装前检查

1. 选择与当前环境匹配的发布版本或修订。
2. 阅读 manifest，核对 `checksums.sha256` 与所选脚本的哈希，再按仓库说明安装。
3. 查看 Android PRoot 测试记录。仅通过 Ubuntu 容器测试，不代表已验证你的设备兼容性。

首次使用请看[安装入门](/zh/docs/local-linux/getting-started)；运行限制见[兼容性](/zh/docs/local-linux/compatibility)，校验方法见[安全与完整性](/zh/docs/local-linux/security-integrity)。
