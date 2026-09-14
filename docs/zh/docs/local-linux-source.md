---
title: 本地 Linux 对应源码与许可证 | NimoteCode
description: 下载 NimoteCode Android 本地 Linux 内置 Ubuntu 环境的完整对应源码包，并提供 SHA-256、清单、溯源信息和第三方许可证声明。
---

<script setup>
import { data } from './local-linux-source.data.js'
import { computed } from 'vue'

const release = data.release

// 与发布目录落地页保持同一种格式，避免同一个文件在两处显示出不同的大小。
const size = computed(() => {
  const bytes = Number(release.size) || 0
  return `${(bytes / 1024 / 1024).toFixed(1)} MiB（${bytes.toLocaleString('en-US')} 字节）`
})

const releaseDirectory = computed(() => `${release.releaseUrl}/`)
</script>

# 本地 Linux 对应源码与许可证

NimoteCode 本地 Linux 会在 Android 应用内附带一套 Ubuntu 根文件系统。该文件系统包含 GPL、LGPL 等 copyleft 组件，因此随应用实际分发的每个二进制文件，其完整对应源码都会与应用一同发布：既在应用内的开源许可证页面提供，也在本页提供。

完整源码包体积达数百 MB，因此托管在本网站之外供下载；用于标识和校验该源码包的全部信息都保留在本页。

## 当前版本

| 项目 | 内容 |
| -- | -- |
| 产品 | {{ release.product }} |
| 版本 | {{ release.version }} |
| 发行版 | {{ release.distribution }} |
| 架构 | {{ release.architectures.join('、') }} |
| 文件 | `{{ release.filename }}` |
| 大小 | {{ size }} |
| SHA-256 | `{{ release.sha256 }}` |

<div class="seo-cta">
  <p v-if="release.published"><strong>NimoteCode 本地 Linux {{ release.version }} 的完整对应源码。</strong></p>
  <p v-else><strong>NimoteCode 本地 Linux {{ release.version }} 的源码包发布尚未完成。</strong></p>
  <p class="seo-cta-actions">
    <a v-if="release.published" :href="release.downloadUrl" class="home-page-btn primary">下载完整源码包</a>
    <a :href="release.checksumsUrl" class="home-page-btn secondary">SHA256SUMS</a>
    <a :href="release.manifestUrl" class="home-page-btn secondary">源码清单</a>
  </p>
</div>

源码包固定发布在带版本号的地址上，不会原地替换。解包前请先核对下载文件：

<pre><code>curl -O {{ release.downloadUrl }}
sha256sum {{ release.filename }}</code></pre>

本页渲染所依据的元数据也以机器可读形式提供：[`source-download.json`](/opensource/local-linux/source-download.json)。

## 源码包包含什么

压缩包内含内置 Ubuntu 根文件系统中第三方组件的对应源码：对于每个需要交付源码的源码包，都包含其精确的 `.dsc`、`.orig.tar` 和 `.debian.tar` 构件，并附上将这些源码与随应用分发的二进制对应起来的软件包清单。

源码包**不包含** NimoteCode 专有应用源码，因此它不是应用本身的构建输入。单独随应用分发的 PRoot 与 talloc 可执行文件另有对应的源码交付方式，位于应用内许可证文件；其许可证文本也镜像在 <a :href="release.licensesUrl">本版本的 `licenses/` 目录</a>中。

## 构建脚本、清单与许可证

用于构建和校验该版本的全部内容都与本页一同纳入版本管理，因此整条链路都可以审计或复现。每个版本同时会发布成一个可直接浏览的目录，内容与仓库一致：

- <a :href="releaseDirectory">本地 Linux {{ release.version }} 发布目录</a>——本站提供的 `SHA256SUMS`、`source-manifest.json`、清单、溯源信息、许可证声明和校验和。
- <a :href="release.metadataRepositoryUrl">仓库中的同一份元数据</a>——该版本的记录来源。
- <a :href="release.repositoryUrl + '/tree/main/docs/public/opensource/local-linux'">已发布的所有本地 Linux 版本</a>——每个版本，以及该目录的组织方式。
- <a :href="release.buildScriptUrl">发布脚本</a>——`scripts/publish-local-linux-source.sh`，负责通过现有本地 Linux 构建链生成源码包、校验、上传到对象存储并重写上述元数据。

对应源码按各组件自身的许可证交付，而非 NimoteCode 的许可条款。环境本身的产品文档见 [Android 本地 Linux](/zh/docs/local-linux)。

下一步：[Android 本地 Linux](/zh/docs/local-linux) · [服务条款](/zh/terms) · [隐私政策](/zh/privacy)
