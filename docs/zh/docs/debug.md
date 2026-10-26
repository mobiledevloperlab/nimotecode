---
title: 调试 | NimoteCode
description: "调试的配置、操作步骤与界面说明。"
---

# 调试

<div class="doc-section">
<div class="doc-section__copy">

## 准备调试会话

调试需要目标主机具备兼容的调试适配器和项目启动配置。准备完成后，打开 Debug 面板并选择 **Start Debug**。调试需要 Pro 权益。

</div>

<div class="doc-screenshots">
  <DocScreenshot file="debugger-standby.png" caption="未启动会话的 Debug 面板，尚未加载变量或调用栈。" />
</div>

</div>

## 检查暂停的程序

设置断点并运行已配置的会话。程序暂停后，可在 **Variables**、**Watch** 和 **Call Stack** 中检查运行状态，并通过会话控制继续或单步执行。无法启动会话时，先检查主机上的适配器和启动命令，再考虑调整断点。
