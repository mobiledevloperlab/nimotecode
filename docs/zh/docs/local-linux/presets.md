---
title: "Linux Presets 开发工具集：Python、Node.js 与 C++ | NimoteCode"
description: "了解 Android 本地 Linux 可选的 Ubuntu 开发工具集，安装前检查实验状态、支持架构、依赖和 SHA-256。"
---

# NimoteCode Linux Presets

可选的本地 Linux 开发工具集维护在 [Linux Presets 仓库](https://github.com/mobiledevloperlab/nimote-linux-presets)。按项目选择工具集，安装前确认其兼容性声明。

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
