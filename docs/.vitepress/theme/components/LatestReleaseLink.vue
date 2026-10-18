<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { latestRelease } from '../data/releases'

const props = withDefaults(defineProps<{
  variant?: 'notice' | 'home' | 'list'
}>(), {
  variant: 'notice'
})

const { page } = useData()
const isChinese = computed(() => page.value.relativePath.startsWith('zh/'))
const releaseUrl = computed(() => `${isChinese.value ? '/zh' : ''}/releases/${latestRelease.version}`)
const isLatestReleasePage = computed(() =>
  page.value.relativePath === `releases/${latestRelease.version}.md` ||
  page.value.relativePath === `zh/releases/${latestRelease.version}.md`
)

const copy = computed(() => isChinese.value
  ? {
      latest: '最新版本',
      viewingLatest: `你正在查看最新版本 NimoteCode ${latestRelease.version}。`,
      latestLink: `NimoteCode ${latestRelease.version} 是当前最新版本。`,
      view: `查看 ${latestRelease.version} 发布说明`,
      date: latestRelease.date.zh,
      summary: latestRelease.homeSummary.zh
    }
  : {
      latest: 'Latest release',
      viewingLatest: `You are viewing the latest release, NimoteCode ${latestRelease.version}.`,
      latestLink: `NimoteCode ${latestRelease.version} is the latest release.`,
      view: `View the ${latestRelease.version} release notes`,
      date: latestRelease.date.en,
      summary: latestRelease.homeSummary.en
    }
)
</script>

<template>
  <a v-if="props.variant === 'home'" class="home-page-release-note" :href="`${releaseUrl}?utm_source=homepage&utm_medium=website&utm_campaign=latest_release`">
    <span>{{ copy.latest }}</span><strong>NimoteCode {{ latestRelease.version }}</strong><em>{{ copy.summary }}</em><b aria-hidden="true">→</b>
  </a>

  <p v-else-if="props.variant === 'list'" class="release-list-item">
    <a :href="releaseUrl">{{ latestRelease.version }} · {{ copy.date }}</a>
  </p>

  <div v-else class="custom-block tip">
    <p class="custom-block-title">{{ copy.latest }}</p>
    <p v-if="isLatestReleasePage">{{ copy.viewingLatest }}</p>
    <p v-else>{{ copy.latestLink }} <a :href="releaseUrl">{{ copy.view }}</a></p>
  </div>
</template>
