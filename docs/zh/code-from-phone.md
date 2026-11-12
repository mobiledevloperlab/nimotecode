---
title: "用手机写代码：本地文件、Linux 与 SSH 入门 | NimoteCode"
description: "用 Android 或 iPhone 开始编程：选择本地编辑、Android 本地 Linux 或 SSH，在正确环境运行第一个 Python 脚本，并验证实际结果。"
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# 用手机写代码：先决定项目在哪里运行

手机可以编写和编辑代码，运行代码还需要支持对应语言和依赖的环境。NimoteCode 提供本地文件编辑、SSH 工作区，以及受支持 Android 设备上的本地 Linux。先选想做的项目，不必一次安装所有工具。

## 选择一种起步方式

| 当前需求 | 从哪里开始 | 执行条件 |
| --- | --- | --- |
| 改文字、HTML 或配置 | 已授权的本地文件夹 | 单纯编辑不会提供运行时 |
| 在 Android 学 Shell 或运行兼容脚本 | Android 8+ ARM64/x86_64 本地 Linux | 设备上的 Ubuntu 用户空间，需安装语言工具 |
| 继续电脑上的项目 | 连接 Windows、Mac 或 Linux SSH 主机 | 使用主机工具和依赖 |

本地 Linux 基于 PRoot，无需 root，不支持 iPhone 和 iPad。只改文字时基础编辑器就够了，开始编程也不需要配置 AI。

<figure class="seo-phone-capture">
  <a href="/images/ios/iphone-editor.webp" target="_blank" rel="noopener">
    <img src="/images/ios/iphone-editor.webp" width="660" height="1433" alt="在 iPhone 上编辑源码；运行仍需要配置执行环境。" loading="lazy" decoding="async">
  </a>
  <figcaption>在 iPhone 上编辑源码；运行仍需要配置执行环境。 来源：NimoteCode App Store 页面。此图为宣传截图，不是连续操作录屏。</figcaption>
</figure>

## 运行第一个 Python 脚本

在可写项目目录用编辑器新建 `hello.py`，输入：

```python
print("Hello from NimoteCode")
```

保存后，在已安装 Python 3 的本地 Linux 或 Linux/macOS SSH 主机中，将终端切到该目录并运行：

```sh
python3 hello.py
```

预期输出为 `Hello from NimoteCode`。找不到命令时，在执行环境使用其包管理器安装 Python。打开本地文件不等于已安装 Python。Windows 应使用主机实际安装的 Python 命令。准备步骤见[本地 Linux](/zh/docs/local-linux)或[远程编程](/zh/remote-coding)。

## 从示例进入真实项目

打开仓库根目录，阅读配置说明并检查已有修改，在所选运行环境安装依赖。编辑后先保存，再运行项目检查并审查 Git。大范围改动前可以先熟悉[编辑器](/zh/docs/editor)和[源代码管理](/zh/docs/source-control)。

## 什么时候更换开发环境

手机可以控制性能强大的主机，但不能自动解决缺少依赖的问题。不兼容 PRoot 的工具或较重构建适合转移到 SSH 主机。大型重构和复杂可视化调试应使用便于清晰审查的屏幕与输入方式。[移动 IDE](/zh/mobile-ide)介绍工作区选择。

可以从本地或 SSH 编辑及基础终端开始。部分功能需要 Pro，参见[免费版与 Pro](/zh/pro)及应用内显示的访问状态。AI 需要配置自己的模型提供商，模型使用费用由提供商另行收取。

<div class="seo-cta">
  <p><strong>下载 NimoteCode</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="/zh/docs/quick-start" class="home-page-btn secondary">快速入门</a>
  </p>
</div>
