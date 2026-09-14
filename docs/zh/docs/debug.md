---
title: 远程调试 | NimoteCode Pro
description: 在已配置的远程调试适配器工作流中，使用 NimoteCode Pro 的断点、执行控制、调用栈、变量、Watch 表达式和输出功能。
---

# 远程调试

调试面板为移动工作区提供结构化的运行时可见性：控制一个已配置会话、检查暂停位置，并让证据回到代码与终端上下文中。Debug 属于 **Pro** 工作流。

<ImagePlaceholder image-key="debugging" alt="NimoteCode 远程调试">
  <strong>图片占位符 —— 检查暂停的调试会话</strong>
  <span>请替换为展示断点、调用栈、变量与对应源码行的截图。</span>
</ImagePlaceholder>

## 已配置会话可以提供

- 启动、暂停、继续、单步和停止控制。
- 断点与当前执行位置。
- 线程与调用栈导航。
- 变量、作用域和 Watch 表达式。
- 表达式求值与调试输出。

## 开始前

调试能否使用取决于语言、项目启动配置，以及远程主机上的兼容调试适配器。不要在故障中第一次才验证这些前置条件。初步排查可先结合 [终端](/zh/docs/terminal) 与 [LSP](/zh/docs/lsp) 缩小问题范围。
