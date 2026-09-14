---
title: Android 本地 Linux 快速开始 | NimoteCode
description: 在受支持的 Android 设备上准备并打开 NimoteCode 本地 Linux，然后选择合适的本地或远程开发方式。
---

# Android 本地 Linux 快速开始

本地 Linux 适合在 Android 上使用小型 Ubuntu 开发环境。它支持 Android 8+ 的 64 位 ARM64 与 x86_64 设备，不需要 Android root，也不支持 iPhone 或 iPad。

## 安装前

- 为基础环境和需要安装的项目工具预留设备存储空间。
- 首次准备与后续通过 APT 安装软件包均可能需要网络。
- 小型本地工作可选择本地 Linux；依赖既有工作站、服务器、容器或长时间构建时，应选择 [SSH](/zh/docs/ssh)。

## 打开工作区

1. 在工作区或 Explorer 选择器中选择 **Local Linux**。
2. 选择 **安装**，完成后选择 **启动**。
3. 打开默认 `/workspace` 目录。
4. 先在[终端](/zh/docs/terminal)检查环境，再安装项目实际需要的工具链。
5. 在同一工作区中使用 Explorer、编辑器与 [Source Control](/zh/docs/source-control)。

基础环境包含 Ubuntu、Bash、Git 与 SSH；它不保证所有桌面工具在 PRoot 下行为相同。选择工作负载前请阅读[兼容性](/zh/docs/local-linux/compatibility)，选择可选工具集前请阅读 [Linux Presets](/zh/docs/local-linux/presets)。
