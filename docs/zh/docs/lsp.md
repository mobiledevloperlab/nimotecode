---
title: 语言服务（LSP） | NimoteCode
description: "语言服务（LSP）的配置、操作步骤与界面说明。"
---

# 语言服务（LSP）

<div class="doc-section">
<div class="doc-section__copy">

## 检查语言服务配置

打开源码文件后进入 LSP 面板，检查 **LSP Setup** 以及当前语言对应的服务。截图显示 Python 的 pyright-langserver 已安装，错误与警告均为零。安装状态并不代表项目依赖全部就绪，也不保证每项代码动作均可用。

</div>

<div class="doc-screenshots">
  <DocScreenshot file="lsp-python-status.png" caption="Python 语言服务配置状态，以及 Problems 和 Code Actions 区域。" />
</div>

</div>

## 使用诊断与代码动作

展开 **Problems**，选择诊断项跳转到对应源码位置。在 **Code Actions** 中检查当前光标位置可用的操作，具体能力由语言服务决定。应用操作后保存文件，并重新执行项目检查。LSP 需要 Pro 权益。
