---
title: Sync 与 Cache | NimoteCode Pro
description: 使用 NimoteCode Pro 的 Sync 与 Cache 在本地和远程工作区之间移动项目内容，并明确传输方向、工作区路径检查与操作历史。
---

# Sync 与 Cache

Sync / Cache 是用于在本地与远程工作区之间主动移动项目内容的 **Pro** 工作流。它会明确传输方向，并将目标路径限制在当前工作区边界内。

<ImagePlaceholder image-key="syncCache" alt="NimoteCode Sync 与 Cache">
  <strong>图片占位符 —— 选择安全的传输方向</strong>
  <span>请替换为展示 Sync 或 Cache 方向、工作区路径和传输历史的截图。</span>
</ImagePlaceholder>

## 两个清晰方向

- **Sync**：从本地项目向远程工作区传输。
- **Cache**：将远程项目内容带回本地工作区。

<ImagePlaceholder image-key="cacheToLocalWorkspace" alt="NimoteCode 手机上的远程项目缓存至本地工作区">
  <strong>将远程项目缓存到本地工作区</strong>
</ImagePlaceholder>

<ImagePlaceholder image-key="cacheToLocalWorkspaceComplete" alt="NimoteCode 手机上的本地工作区缓存传输完成">
  <strong>本地工作区缓存传输完成</strong>
</ImagePlaceholder>

传输前请阅读方向和目标路径、明确哪一份内容是权威版本，并在结束后检查记录结果。Sync / Cache 适合受控交接或离线检查，不应替代仓库正常的 Git 审查与备份策略。

相关：[SSH 工作区](/zh/docs/ssh) · [Source Control](/zh/docs/source-control)
