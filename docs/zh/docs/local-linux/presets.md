---
title: NimoteCode Linux Presets | Android 本地 Linux
description: 了解 NimoteCode Linux Presets 如何以 manifest 和 SHA-256 校验声明 Android 本地 Linux 的可选 Ubuntu 开发环境。
---

# NimoteCode Linux Presets

[NimoteCode Linux Presets](https://github.com/mobiledevloperlab/nimote-linux-presets) 是独立技术仓库，负责可选本地 Linux 开发环境的 manifest、安装器、验证器、schema、测试与发布资产；本站不复制其文件或 rootfs。

当前仓库声明 Ubuntu 24.04 的 `minimal`、`python`、`web` 与 `cpp` preset，支持 ARM64 和 AMD64，manifest 仍标记为 `experimental`。根 manifest 同时记录 PRoot runtime 版本、source URL、SHA-256、rootfs 输入元数据以及每个 preset 的哈希。

## 校验路径

1. 在 Presets 仓库选择已声明的 release 或修订。
2. 阅读根 manifest 与 preset manifest 的状态、架构、Ubuntu 版本、依赖和网络要求。
3. 校验 `checksums.sha256` 及目标脚本的 SHA-256。
4. 按仓库文档完成验证与测试后，再用于重要工作。

这并不宣称所有工具在 PRoot 下与桌面一致。container 检查验证普通 Ubuntu 行为，Android PRoot 报告才是 runtime 证据。参见[架构](/zh/docs/local-linux/architecture)、[兼容性](/zh/docs/local-linux/compatibility)和[主仓库的 Presets 入口](https://github.com/mobiledevloperlab/nimotecode/tree/main/presets)。
