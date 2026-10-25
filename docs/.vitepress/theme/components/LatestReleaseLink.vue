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
const locale = computed(() => {
  const match = page.value.relativePath.match(/^(zh|es|ja|ko)\//)
  return match?.[1] ?? 'en'
})
const releaseUrl = computed(() => `${locale.value === 'en' ? '' : `/${locale.value}`}/releases/${latestRelease.version}`)
const isLatestReleasePage = computed(() =>
  page.value.relativePath === `${locale.value === 'en' ? '' : `${locale.value}/`}releases/${latestRelease.version}.md`
)

const copy = computed(() => ({
  zh: {
      latest: '最新版本',
      viewingLatest: `你正在查看最新版本 NimoteCode ${latestRelease.version}。`,
      latestLink: `NimoteCode ${latestRelease.version} 是当前最新版本。`,
      view: `查看 ${latestRelease.version} 发布说明`,
      date: latestRelease.date.zh,
      summary: latestRelease.homeSummary.zh
  },
  es: {
      latest: 'Última versión', viewingLatest: `Estás viendo la versión más reciente, NimoteCode ${latestRelease.version}.`, latestLink: `NimoteCode ${latestRelease.version} es la versión más reciente.`, view: `Ver las notas de la versión ${latestRelease.version}`, date: latestRelease.date.es, summary: latestRelease.homeSummary.es
  },
  ja: {
      latest: '最新リリース', viewingLatest: `最新リリース、NimoteCode ${latestRelease.version} を表示しています。`, latestLink: `NimoteCode ${latestRelease.version} は最新リリースです。`, view: `${latestRelease.version} のリリースノートを見る`, date: latestRelease.date.ja, summary: latestRelease.homeSummary.ja
  },
  ko: {
      latest: '최신 릴리스', viewingLatest: `최신 릴리스인 NimoteCode ${latestRelease.version}을 보고 있습니다.`, latestLink: `NimoteCode ${latestRelease.version}이 최신 릴리스입니다.`, view: `${latestRelease.version} 릴리스 노트 보기`, date: latestRelease.date.ko, summary: latestRelease.homeSummary.ko
  },
  en: {
      latest: 'Latest release',
      viewingLatest: `You are viewing the latest release, NimoteCode ${latestRelease.version}.`,
      latestLink: `NimoteCode ${latestRelease.version} is the latest release.`,
      view: `View the ${latestRelease.version} release notes`,
      date: latestRelease.date.en,
      summary: latestRelease.homeSummary.en
  }
}[locale.value]))
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
