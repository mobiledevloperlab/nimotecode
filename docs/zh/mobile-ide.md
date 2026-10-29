---
title: "手机 IDE 怎么选：从打开项目到验证一次修改 | NimoteCode"
description: "手机上写代码，先想清楚代码在哪里运行。结合 Termux、Termius、Blink 和远程 Agent 工具的区别，用 NimoteCode 走一遍编辑、预览和 Git 审查。"
pageClass: mobile-ide-article
---

# 手机 IDE 怎么选：从打开项目到验证一次修改

你发现项目 README 里的一条命令写错了。仓库在开发机上，电脑却不在手边。改掉那一行不难，但改完还得看看排版、跑一下项目检查，再确认 diff 里没有带上别的东西。

这件小事很适合用来判断一个手机 IDE 是否顺手：能打开文件只是开始，你能不能把这次修改做完，而不用先在手机上重新搭一套开发环境？

我们正在开发 NimoteCode，一款支持 Android、iPhone 和 iPad 的编辑器与开发工作区。下面用它举例。不过，选任何工具之前，都值得先回答一个问题：**代码和工具到底在哪里运行？**

<figure class="article-hero">
  <a href="/blog/why-existing-flutter-code-editors-broke-down-when-i-built-a-mobile-ide/image-2.png" target="_blank" rel="noopener">
    <img src="/blog/why-existing-flutter-code-editors-broke-down-when-i-built-a-mobile-ide/image-2.png" width="1414" height="878" alt="平板上的 NimoteCode：源代码管理和代码编辑器并排显示。" loading="eager" decoding="async">
  </a>
  <figcaption>平板上的 NimoteCode：源代码管理和代码编辑器并排显示。</figcaption>
</figure>

## 先选工作方式，再选应用

“用手机写代码”可能是在改本地文件，也可能是连回开发机，或者看看远程 AI Agent 做到了哪一步。它们需要的工具不一样。

| 你要做的事 | 可以从哪里开始 | 先确认什么 |
| --- | --- | --- |
| 修改 Markdown、配置或静态 HTML | 带所需预览能力的本地编辑器 | 改完的文件怎样回到仓库 |
| 在 Android 上运行脚本和命令行工具 | [Termux](https://termux.dev/en/) 或兼容的本地 Linux 环境 | 项目依赖能否在设备上运行 |
| 管理服务器，主要在远程 Shell 中工作 | [Termius](https://termius.com/) 或 [Blink Shell](https://docs.blink.sh/advanced/code) | 键盘操作、文件访问和常用终端工具是否顺手 |
| 继续另一台机器上的 Agent 任务 | [Redock](https://redock.dev/)、[ServerCC](https://servercc.app/) 或 [Moshi](https://getmoshi.app/docs/introduction)；已使用 Orca 桌面环境时也可看 [Orca](https://www.onorca.dev/) | 主机如何配置，怎样检查 Agent 的改动 |
| 在手机界面中浏览项目、编辑文件并审查 Git 改动 | NimoteCode 这类开发工作区 | 运行环境，以及哪些功能需要 Pro |

这些工具的能力有重叠。Blink Code 能编辑本地和远程文件；Termux 可以安装编辑器和 Git；SSH 终端也能使用主机上已有的工具。一些 Agent 客户端还提供 diff 和预览。选型时更有用的问题，是哪种操作方式适合你手头的任务。

想逐项核对功能、平台和付费限制，可以看[工具对比](/zh/compare/mobile-ai-development-tools)，里面附有官方依据。还没决定在手机还是远程机器上运行项目，可以先看[开发方式对比](/zh/compare/mobile-development-approaches)。

## 项目已经在电脑上跑起来，就先沿用那套环境

对于已有项目，SSH 的实际好处很直接：依赖、测试命令和构建环境仍留在原来的机器上。手机负责浏览和编辑，远程主机负责执行命令。前提是主机可访问、网络连接可用。

在 NimoteCode 中选择 **Connect Remote Workspace**，填好 SSH 连接信息，再选择仓库根目录。具体配置见 [SSH 指南](/zh/docs/ssh)。打开后先核对 Explorer 中的主机和路径，再单独检查终端：

```sh
pwd
git status --short --branch
```

确认 Shell 当前就在目标仓库里。切换编辑器标签页不会改变终端的工作目录。如果仓库里已经有修改，先弄清楚哪些是原来的，避免和这次任务混在一起。

<figure class="mobile-ide-screenshot">
  <a href="/images/placeholders/remote-workspace-connected.jpg" target="_blank" rel="noopener">
    <img src="/images/placeholders/remote-workspace-connected.jpg" width="1080" height="2376" alt="已连接的 SSH 工作区：打开文件前，先核对主机和项目根目录。" loading="lazy" decoding="async">
  </a>
  <figcaption>已连接的 SSH 工作区：打开文件前，先核对主机和项目根目录。</figcaption>
</figure>

## 从头到尾做完一个小修改

第一次可以就选 README 里的那条错误命令。范围小，手机上容易审查，又能实际走过文件访问、编辑、预览和 Git 检查。下面的截图用于说明相关界面，并非这次示例修改的前后对照记录。

### 1. 打开文件，改掉那一行

在 Explorer 中找到 `README.md`，打开后先读一遍前后的说明，再修改命令。第一次尝试只处理这个问题。顺手重排整篇文档，会让小屏幕上的 diff 难读很多。

### 2. 看预览，再保存

打开 Markdown 预览，确认命令仍在代码块里，前后的列表也没有排乱。如果改的是静态 HTML，NimoteCode 可以预览当前编辑内容，包括未保存的修改。需要服务端执行的应用仍要有自己的运行环境，[编辑器指南](/zh/docs/editor)解释了这一区别。

跑检查前记得保存。终端命令读取的是文件里已经保存的内容，编辑器里还没落盘的修改不会自动参与检查。

### 3. 跑这个项目自己的检查

在 SSH 主机上运行仓库文档中约定的文档检查、链接检查或构建命令。不同项目的命令不同，不能一律套用同一条测试命令。预览能检查排版，却不能证明你写进 README 的命令确实正确。

也可以额外检查一下空白字符问题：

```sh
git diff --check
```

这条命令只能发现部分空白字符错误，不能验证文档中的操作步骤或应用行为。

### 4. 提交前，自己读一遍 diff

打开 **Source Control**，找到修改过的文件，查看差异。核对文件名、刚改的那一行，以及有没有意外出现的其他文件。NimoteCode 免费版可以查看 Git 状态、diff 和历史；Git 写入与分支操作需要 Pro，具体见[免费与 Pro](/zh/pro)。

到这里，也可以先保留已保存、已检查的修改，回电脑前再继续。如果在应用中提交，仍按项目原有的评审和交付方式处理。

下面四张图把这套流程放在一起看：从编辑到审查，始终在同一个工作区内完成。

<div class="mobile-ide-workflow-gallery">
  <figure class="mobile-ide-screenshot">
    <a href="/images/placeholders/markdown-source-editor.jpg" target="_blank" rel="noopener">
      <img src="/images/placeholders/markdown-source-editor.jpg" width="1080" height="2376" alt="在手机编辑器中打开 README.md。这是文档源码视图，可与渲染预览对照查看。" loading="lazy" decoding="async">
    </a>
    <figcaption>1. 在编辑器中完成这次聚焦的修改。</figcaption>
  </figure>
  <figure class="mobile-ide-screenshot">
    <a href="/images/placeholders/markdown-preview.jpg" target="_blank" rel="noopener">
      <img src="/images/placeholders/markdown-preview.jpg" width="1080" height="2376" alt="Markdown 预览会渲染标题、代码块和表格，便于检查源码之外的阅读效果。" loading="lazy" decoding="async">
    </a>
    <figcaption>2. 继续之前，先确认渲染结果。</figcaption>
  </figure>
  <figure class="mobile-ide-screenshot">
    <a href="/images/placeholders/terminal-command-output.png" target="_blank" rel="noopener">
      <img src="/images/placeholders/terminal-command-output.png" width="1080" height="2376" alt="工作区终端中的 ls 目录列表。此图展示命令输出界面，不代表测试已通过。" loading="lazy" decoding="async">
    </a>
    <figcaption>3. 在终端中运行项目自己的命令。</figcaption>
  </figure>
  <figure class="mobile-ide-screenshot">
    <a href="/images/placeholders/git-diff-view.jpg" target="_blank" rel="noopener">
      <img src="/images/placeholders/git-diff-view.jpg" width="1080" height="2376" alt="Diff 界面用颜色区分新增和删除。这张已有截图包含演示性修改，不是上文 README 示例的结果。" loading="lazy" decoding="async">
    </a>
    <figcaption>4. 交接前，把 diff 自己读一遍。</figcaption>
  </figure>
</div>

## 这件事里，AI 能帮什么忙？

如果 README 引用了你不熟悉的脚本，可以问一个具体问题：“找到这条命令调用的脚本，解释参数含义，先不要修改文件。”这样得到的回答有明确的核对对象。

NimoteCode 提供 AI Chat，Pro 中还提供 AI Agent 工作流。模型访问需要配置；外部 ACP Agent 还需要在 SSH 主机上安装兼容的运行时。[AI 指南](/zh/docs/ai)介绍了配置方法，以及如何在 Confirm 模式下先查看计划再允许执行。

只改一行字，自己动手可能更快。接手不熟悉的项目时，帮你找到相关文件，可能比直接生成修改更有用。无论是谁改的，最后都要读 diff，做相应检查。

## 如果想直接在手机上运行项目呢？

在受支持的 Android 设备上，NimoteCode 的 Local Linux 通过 PRoot 提供免 root 的 Ubuntu 环境，要求 Android 8+，以及 ARM64 或 x86_64 的 64 位应用。语言工具链需要另行安装，具体兼容性取决于项目。iOS 不支持这项功能。打算用它构建项目之前，先看[本地 Linux 说明](/zh/docs/local-linux)。

通过系统文件选择器打开文件夹，又是另一种情况。你可以浏览和编辑文件，但 Git、语言服务、Tasks 和 Agent 等能力需要原生文件系统路径。文件夹能打开，并不意味着所有项目工具都能使用它。

手机适合范围明确的修正、一次集中审查，或离开工位时读一段错误信息。长时间重构在小屏幕上难以跟踪；远程工作依赖网络，应用重连也不能保证主机进程一直存活。第一次尝试，选一个你能在手机上完整检查的任务就好。

## 常见问题

### NimoteCode 只是 SSH 客户端吗？

不是。NimoteCode 把编辑器、Explorer、SSH、终端、Git 与 AI Agent 结合在同一个移动开发工作区中。

### 能用手机或平板处理远程项目吗？

可以。通过 SSH 连接远程项目，在同一个工作区中检查文件、编辑代码、运行终端命令并审查 Git 改动。

### NimoteCode 支持 Android 和 iOS 吗？

NimoteCode 已上架 Google Play（Android）与 App Store（iPhone 与 iPad）。

## 从一个熟悉的项目开始

选一个你了解的仓库，找一处一句话就能讲清楚的修改。打开项目、改完、验证，再读一遍 diff。这样试一次，比看功能清单更容易判断手机 IDE 是否适合自己的工作。

你可以先看[工作区演示](/zh/use-cases/mobile-workspace-demo)，也可以[下载 NimoteCode](/zh/download?utm_source=mobile_ide&utm_medium=organic&utm_campaign=project_workflow)，跟着[快速入门](/zh/docs/quick-start)打开第一个项目。
