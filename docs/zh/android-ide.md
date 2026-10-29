---
title: "Android IDE：SSH、Git 与 AI 编程 | NimoteCode"
description: "不在电脑前，也能把一处小修改认真做完：从 SSH 打开项目、确认目录、编辑和验证，到审查 Git diff。"
---

# Android IDE：SSH、Git 与 AI 编程

真正让我开始认真看待 Android IDE 的，并不是“能不能在手机上写代码”，而是那些很具体的时刻：下班路上收到一条告警；同事问一个配置到底从哪里读；发布前发现 README 的命令少了一个参数。电脑不在身边，问题却不该等到明天。

这时我不需要在手机上重建一台桌面电脑。我需要的是：连回原来的开发机，找到项目，改对那一处，跑该跑的检查，然后看清楚自己到底改了什么。NimoteCode 把 Explorer、编辑器、SSH 终端、Git 和 AI 放到一个工作区里，就是为了完成这个闭环。

<figure class="article-hero">
  <a href="/images/placeholders/remote-workspace-connected.jpg" target="_blank" rel="noopener">
    <img src="/images/placeholders/remote-workspace-connected.jpg" width="1080" height="2376" alt="NimoteCode 已连接到远程 SSH 工作区，显示项目根目录和文件列表。" loading="eager" decoding="async">
  </a>
  <figcaption>连上以后，先看主机和项目根目录；这一步比马上打开文件更重要。</figcaption>
</figure>

## 先说结论：手机适合完成“小而完整”的工作

手机并不适合连续几个小时的大型重构，也不适合一边查十个窗口、一边盯着复杂的调试器。但它很适合把一个边界清楚的任务做完整。

| 在 Android 上做，通常很顺手 | 还是交给桌面更舒服 |
| --- | --- |
| 看日志、排查一条报错、修改一个配置 | 跨很多模块的大规模重构 |
| 修一个小 bug，并运行项目已有的检查 | 长时间本地编译和复杂环境搭建 |
| 审查 diff、补一处文档、处理发布前的小问题 | 多窗口、多显示器调试 |
| 在路上接手一个范围明确的任务 | 看不清、也说不清如何验证的改动 |

如果项目本来就在 Mac、Linux 主机或服务器上运行，我建议先走 SSH。依赖、密钥、服务和测试命令都还在原来的机器上；手机只是一个更轻的入口，不必再复制仓库，更不必在移动设备上重新配一遍环境。

## 我会怎样在手机上处理一次修改

下面不是“功能清单”，而是一套我觉得能避免失误的顺序。无论是改一行环境变量，还是修一个小逻辑问题，都可以照着走。

### 1. 先确认：我连的是哪台机器，在哪个目录

在 NimoteCode 中创建 [SSH 工作区](/zh/docs/ssh)，选择仓库根目录。Explorer 会显示连接的主机和路径，但我还是会在终端里再确认一次：

```sh
pwd
git status --short --branch
```

这两行很朴素，却救过不少麻烦。编辑器里打开了一个文件，不代表终端就在同一个目录；名字很像的两个 checkout 也很常见。`git status` 还能让我先看到别人留下的修改，避免不小心一起提交。

### 2. 从现象往回找，不急着让 AI 写代码

我通常从一条失败命令、一段日志、一个 issue 链接开始。先用 Explorer 和搜索读一读附近的代码和项目说明，再决定该改哪里。屏幕小时，范围越小越好：你不仅更容易判断，也更容易在最后把 diff 看明白。

遇到陌生项目，AI 最适合帮我省掉“翻目录”的时间，而不是代替我下结论。比如我会问：

> 找到读取这个环境变量的位置，说明它经过了哪些校验；先不要修改文件。

这样得到的是一张待核对的地图。我仍会打开它提到的文件确认一遍。

### 3. 只做这次任务需要的修改，并且保存

在编辑器里完成修改后先保存。较大的 Android 平板可以分栏；在手机上，我反而喜欢只盯住一个文件和一个问题，不去勉强模仿桌面布局。

通过 SSH 打开的项目仍留在远程主机上，编辑内容经由连接写回；打开本地文件夹时，文件则在设备上。两种情况有一件事相同：终端命令只会读到已经保存的文件，编辑器里还没落盘的内容不会自动参与测试。

### 4. 跑项目自己的检查，而不是找一条“万能命令”

接着在[终端](/zh/docs/terminal)里运行仓库约定的 test、lint、构建或验证命令。不同项目要验证的东西不同，能通过一条通用命令的情况其实很少。

我常会多跑一条：

```sh
git diff --check
```

它能抓出一部分空白字符问题，但它不等于测试通过，更不能替代预发布或监控流程。涉及运行中的服务时，还是要按团队已有的流程来。

### 5. 最后读 diff：这是移动端最值得花时间的一步

打开[源代码管理](/zh/docs/source-control)，检查变更文件，再逐行阅读 diff。我会问自己三个问题：这个文件对吗？每一行都和任务有关吗？有没有把生成文件、密钥或别人的修改带进来？

<figure class="mobile-ide-screenshot">
  <a href="/images/placeholders/git-diff-view.jpg" target="_blank" rel="noopener">
    <img src="/images/placeholders/git-diff-view.jpg" width="1080" height="2376" alt="NimoteCode 的 Git diff 视图，展示新增和删除内容。" loading="lazy" decoding="async">
  </a>
  <figcaption>测试结果只能说明一部分事情；真正要交出去的，是这份 diff。截图中的修改仅作界面演示。</figcaption>
</figure>

Git 状态、diff 和历史可以直接查看。需要提交、切换分支等写入操作时，还需具备相应的 Pro 和仓库权限。如果这次任务不适合在手机上完成提交，也完全可以停在这里：留下一个已保存、已验证、已审查的修改，等回到电脑再继续。

## 为什么不只用一个 SSH 客户端

SSH 终端当然能完成很多事；独立编辑器也能修改一个文件。真正容易卡住的，是在两者之间来回找路径、复制命令、确认改动。项目树帮你定位，编辑器让你修改，终端运行项目自己的工具，Git 让你看清最终结果——这些最好都围绕同一个工作区。

NimoteCode 的思路就是把这些环节放在一起。语言服务器和调试适配器可以配置在远程主机上运行，所以主机提供工具能力，Android 负责随手可用的界面。值班修复、代码审查、发布检查和旅途中的小任务，往往比“完整替代桌面”更能体现它的价值。

## AI 可以参与，但最后一关还是人

AI Chat 和 Agent 能结合工作区内容解释代码、查找线索、整理计划。要使用模型，需要先完成配置；外部 ACP Agent 也需要在 SSH 主机上有兼容的运行时。

我的习惯是让 AI 先帮我定位和解释，涉及写文件或运行工具时再切到 **Confirm** 模式，先看计划再批准。之后仍要看实际文件、读 Git diff、运行该运行的检查。[AI 指南](/zh/docs/ai)里有配置和确认流程的详细说明。这样用 AI，不会把“快一点”变成“多一次难追的事故”。

## Android IDE 的边界也很明确

手机不会让性能不足的主机变快；SSH 断线后，也不能保证一个长时间运行的进程仍然活着。重型编译、大范围重构和复杂可视化调试，桌面依然更合适。

如果确实需要直接在受支持的 Android 设备上运行工具，NimoteCode 的[本地 Linux](/zh/docs/local-linux)通过 PRoot 提供免 root 的 Ubuntu 环境。不过工具链仍要自己安装，项目是否兼容也要自己验证。它是另一种选择，不是远程开发的替代品。

我给自己的判断标准很简单：如果这项工作能在手机上看清、验证清、出问题也容易撤销，就值得做；一旦开始看不清上下文，或者不知道该怎么证明它是对的，就回到电脑。

## 常见问题

### 能用 Android 手机或平板做真实开发吗？

可以，尤其适合修复、值班排查、审查和小功能。通过 SSH 连接开发机后，你可以检查项目、编辑文件、运行终端命令、审查 Git 改动，并使用 AI 辅助。

### 需要把仓库复制到 Android 上吗？

不需要。SSH 工作区中的项目仍在远程主机上，NimoteCode 通过连接访问文件和终端输出。项目本来就在设备上时，也可以直接打开本地文件夹。

### NimoteCode 也支持 iOS 吗？

支持。NimoteCode 已上架 Google Play（Android）与 App Store（iPhone 和 iPad）。

<div class="seo-cta">
  <p><strong>下次离开电脑时，试着把一项小而完整的任务做完。</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode&utm_source=nimotecode&utm_medium=organic&utm_campaign=android_ide" class="home-page-btn primary" target="_blank" rel="noreferrer">下载 Android 版</a>
    <a href="https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noreferrer">下载 iOS 版</a>
    <a href="/zh/demo?utm_source=android_ide&utm_medium=organic&utm_campaign=watch_demo" class="home-page-btn secondary">观看演示</a>
  </p>
</div>

## 相关页面

- [手机 IDE：从项目到验证的完整流程](/zh/mobile-ide)
- [面向远程开发的 SSH IDE](/zh/ssh-ide)
- [用手机或平板远程编程](/zh/remote-coding)
- [用手机写代码](/zh/code-from-phone)
