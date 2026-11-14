<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { latestRelease } from '../data/releases'

const { page } = useData()
const locale = computed(() => page.value.relativePath.match(/^(zh|es|ja|ko)\//)?.[1] ?? 'en')

const copy = computed(() => ({
  en: {
    eyebrow: 'Latest release', current: 'Current', version: 'Version', build: 'Build', released: 'Released', platforms: 'Platforms', platformsValue: 'Android · iPhone · iPad', overview: 'In this release', new: 'New', improved: 'Improved', fixed: ''
  },
  zh: {
    eyebrow: '最新版本', current: '当前版本', version: '版本', build: 'Build', released: '发布日期', platforms: '平台', platformsValue: 'Android · iPhone · iPad', overview: '本次内容', new: '新增', improved: '改进', fixed: ''
  },
  es: {
    eyebrow: 'Última versión', current: 'Actual', version: 'Versión', build: 'Build', released: 'Publicado', platforms: 'Plataformas', platformsValue: 'Android · iPhone · iPad', overview: 'En esta versión', new: 'Nuevo', improved: 'Mejorado', fixed: ''
  },
  ja: {
    eyebrow: '最新リリース', current: '現在', version: 'バージョン', build: 'Build', released: 'リリース日', platforms: 'プラットフォーム', platformsValue: 'Android · iPhone · iPad', overview: 'このリリース', new: '新機能', improved: '改善', fixed: ''
  },
  ko: {
    eyebrow: '최신 릴리스', current: '현재', version: '버전', build: 'Build', released: '출시일', platforms: '플랫폼', platformsValue: 'Android · iPhone · iPad', overview: '이번 릴리스', new: '새 기능', improved: '개선됨', fixed: ''
  }
}[locale.value]))
const releaseLocale = computed(() => locale.value as keyof typeof latestRelease.date)
</script>

<template>
  <section class="release-detail-header" :aria-label="copy.overview">
    <div class="release-detail-header-top">
      <p class="release-eyebrow">{{ copy.eyebrow }}</p>
      <span class="release-status">{{ copy.current }}</span>
    </div>
    <dl class="release-metadata">
      <div><dt>{{ copy.version }}</dt><dd>{{ latestRelease.version }}</dd></div>
      <div><dt>{{ copy.build }}</dt><dd>{{ latestRelease.build }}</dd></div>
      <div><dt>{{ copy.released }}</dt><dd>{{ latestRelease.date[releaseLocale] }}</dd></div>
      <div><dt>{{ copy.platforms }}</dt><dd>{{ copy.platformsValue }}</dd></div>
    </dl>
    <ul class="release-outcomes">
      <li v-for="highlight in latestRelease.highlights[releaseLocale]" :key="highlight">{{ highlight }}</li>
    </ul>
    <nav class="release-section-nav" :aria-label="copy.overview">
      <span>{{ copy.overview }}</span>
      <a href="#release-new">{{ copy.new }} · {{ latestRelease.newCount }}</a>
      <a v-if="copy.improved" href="#release-improved">{{ copy.improved }}</a>
      <a v-if="copy.fixed" href="#release-fixed">{{ copy.fixed }}</a>
    </nav>
  </section>
</template>
