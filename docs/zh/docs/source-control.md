---
title: 移动 Git Source Control | NimoteCode
description: 使用 NimoteCode 在移动端审查 Git：所有用户均可查看状态、diff 与历史；Pro 解锁受限 Git 写入工作流。
---

# 移动 Git Source Control

Source Control 将 Git 中最需要审查的部分带回刚刚编辑和验证过的工作区。所有用户均可查看仓库状态、diff 与历史；只有交付步骤需要受限 Git 写入操作时才需要 **Pro**，它也不替代团队的分支与评审规范。

<ImagePlaceholder image-key="sourceControl" alt="NimoteCode 移动 Git 审查">
  <strong>图片占位符 —— 在移动端审查 Git diff</strong>
  <span>请替换为展示改动文件、可读 diff 与提交操作的 Source Control 面板截图。</span>
</ImagePlaceholder>

## 可以完成的操作

- 查看已暂存、未暂存和有冲突的文件。
- 检查文件 diff 与仓库历史。
- 在当前工作区刷新本地与远程仓库状态，也支持首次提交的仓库。
- 选择性暂存，并在审查 diff 后准备提交。
- 有 Pro 时，可在仓库与远程权限允许时使用提交、推送和 stash 等受限 Git 写入操作。
- 通过 Git AI 辅助解释改动、起草提交信息或进行风险导向审查。

## 一条审慎的移动提交流程

1. 保存修改，并在 [终端](/zh/docs/terminal) 中验证。
2. 打开 Source Control，阅读真实 diff，而不只看自动生成的摘要。
3. 暂存目标改动，编写或生成提交信息。
4. 有 Pro 时，仅在符合仓库流程的前提下提交、拉取或推送。

<ImagePlaceholder image-key="gitCommitRecord" alt="NimoteCode 手机上的 Git 提交记录">
  <strong>Git 提交记录</strong>
</ImagePlaceholder>

<ImagePlaceholder image-key="localWorkspaceGitPanel" alt="NimoteCode 手机上的本地工作区 Source Control 面板">
  <strong>审查本地工作区改动</strong>
</ImagePlaceholder>

AI 可以加快审查，但无法替代对环境与业务意图的验证。该执行的 CI、分支保护和人工评审仍应保留。

相关：[手机远程热修](/zh/use-cases/remote-hotfix) · [AI Chat 与 Agent](/zh/docs/ai)
