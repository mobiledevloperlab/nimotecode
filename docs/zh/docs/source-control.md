---
title: 源代码管理 | NimoteCode
description: "源代码管理的配置、操作步骤与界面说明。"
---

# 源代码管理

<div class="doc-section">
<div class="doc-section__copy">

## 查看仓库状态

在 Git 工作区打开 Source Control。**Changes** 列出已修改、已删除和未跟踪的文件；**Staged Changes** 列出待提交的已暂存文件。在应用外执行 Git 操作后，可刷新状态。

</div>

<div class="doc-screenshots">
  <DocScreenshot file="source-control-changes.png" caption="修改与未跟踪文件列表，下方分别提供暂存区和提交历史。" />
</div>

</div>

## 审查差异与提交

打开变更文件可比较修改前后的内容。在 **Commit History** 中打开提交，可按文件检查该次提交的改动。截图中的 diff 包含临时文本修改，仅用于展示审查界面，并非代码修改建议。

<div class="doc-screenshots">
  <DocScreenshot file="git-diff-view.jpg" caption="文件修改前后的内容，新增与删除以不同颜色标记。" />
  <DocScreenshot file="git-commit-details.jpg" caption="提交详情及按文件展开的补丁。" />
</div>

<div class="doc-section">
<div class="doc-section__copy">

## 切换分支

点击顶部的分支名，可搜索分支、创建分支或检出已有分支。切换前检查未提交的修改。Git 写入操作需要相应 Pro 权益及仓库权限。

</div>

<div class="doc-screenshots">
  <DocScreenshot file="git-branch-checkout.jpg" caption="Checkout Branch 对话框，提供搜索与 Create New Branch。" />
</div>

</div>

<div class="doc-section">
<div class="doc-section__copy">

## 使用 Git AI 工具

打开 **AI Tools**，选择 Provider 和文件，再选择 **Commit Message**、**Explanation** 或 **Risk Analysis**。解释改动时点击 **Explain Changes**。生成文本用于辅助阅读 diff，提交或审查前仍需核对其准确性。

</div>

<div class="doc-screenshots">
  <DocScreenshot file="git-ai-explanation.jpg" caption="Explanation 标签页中针对选定改动生成的解释。" />
</div>

</div>
