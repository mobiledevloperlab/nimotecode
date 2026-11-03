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

## 在工作区中使用 GitHub

从 **NimoteCode 2.2.0** 开始，Android、iPhone 和 iPad 均支持 GitHub 工作流。打开 **GitHub** 页面，通过浏览器设备授权或个人访问令牌登录，再选择有权限访问的仓库。选择 **This device** 可克隆到本机存储；选择 **SSH host** 则会克隆到已选远程主机。项目命令与 Git 操作由目标主机执行，NimoteCode 则在移动设备上将仓库浏览与工作区放在一起。

<div class="doc-screenshots">
  <DocScreenshot file="github_entry.png" caption="GitHub 仓库选择器，可选择克隆到本机设备或 SSH 主机。" />
</div>

## 打开仓库并协作

选择仓库后，可在打开代码前查看默认分支、其他分支、Issue、拉取请求、评审和检查状态。你可以筛选 Issue 与拉取请求、创建 Issue，或从 Issue 发起带上下文的 Agent 任务。改动准备好后，创建或切换分支，使用当前账户的仓库权限推送，并创建拉取请求。发布前仍应阅读 diff 并运行项目检查；GitHub 状态提供协作上下文，不能替代对仓库改动的审查。

<div class="doc-screenshots">
  <DocScreenshot file="github.png" caption="GitHub 页面中的仓库视图，可访问 Issue、拉取请求与分支。" />
</div>

## 选择安全的克隆位置

克隆前，请确认目标工作区、目标目录和分支。若要在 SSH 主机上克隆私有仓库，请在该主机上配置 GitHub SSH 密钥与 known_hosts 条目；应用不会将应用内令牌发送到主机。只有在项目工作流不依赖完整提交历史时才使用浅克隆。克隆会打开所选工作区，但不会自动配置或安装项目依赖。

<div class="doc-screenshots">
  <DocScreenshot file="github_conf.png" caption="SSH 工作区的克隆选项，包含目标目录、分支、浅克隆和 SSH 密钥认证。" />
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
