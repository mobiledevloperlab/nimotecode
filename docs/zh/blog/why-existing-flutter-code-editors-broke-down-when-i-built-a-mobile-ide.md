---
title: "在构建移动 IDE 时，为什么现有 Flutter 代码编辑器会失效"
description: 本文仅有英文版。当我构建移动 IDE 时发现：接入 SSH、LSP、Git diff 与远程文件后，现有 Flutter 编辑器包会逐处崩坏。
noindex: true
---

# 在构建移动 IDE 时，为什么现有 Flutter 代码编辑器会失效

本文当前只有英文版，请查看 [英文原文](/blog/why-existing-flutter-code-editors-broke-down-when-i-built-a-mobile-ide)。

编辑器不是「渲染文本的组件」，而是共享基础设施。接入 SSH、LSP、Git diff 与远程文件后，现有 Flutter 编辑器包会逐处崩坏。了解更多：[编辑器](/zh/docs/editor)、[LSP](/zh/docs/lsp)、[Source Control](/zh/docs/source-control)。
