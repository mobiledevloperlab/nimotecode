<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { page } = useData()
const locale = computed(() => page.value.relativePath.match(/^(zh|es|ja|ko)\//)?.[1] ?? 'en')

const copy = computed(() => ({
  en: {
    eyebrow: 'Latest release', current: 'Current', version: 'Version', build: 'Build', released: 'Released', platforms: 'Platforms', date: 'November 2, 2026', platformsValue: 'Android · iPhone · iPad', overview: 'In this release', new: 'New · 3', improved: 'Improved · 5', fixed: 'Fixed · 2', highlights: ['Native GitHub workflows for repositories, issues, pull requests, and CI', 'Experimental Android Local Linux development toolkits', 'More dependable GitHub operations, search, and workbench controls']
  },
  zh: {
    eyebrow: '最新版本', current: '当前版本', version: '版本', build: 'Build', released: '发布日期', platforms: '平台', date: '2026 年 11 月 2 日', platformsValue: 'Android · iPhone · iPad', overview: '本次内容', new: '新增 · 3', improved: '改进 · 5', fixed: '修复 · 2', highlights: ['原生 GitHub 工作流：仓库、Issue、拉取请求与 CI', '实验性的 Android Local Linux 开发工具包', '更可靠的 GitHub 操作、搜索与工作台控件']
  },
  es: {
    eyebrow: 'Última versión', current: 'Actual', version: 'Versión', build: 'Build', released: 'Publicado', platforms: 'Plataformas', date: '2 de noviembre de 2026', platformsValue: 'Android · iPhone · iPad', overview: 'En esta versión', new: 'Nuevo · 3', improved: 'Mejorado · 5', fixed: 'Corregido · 2', highlights: ['Flujos nativos de GitHub para repositorios, incidencias, pull requests y CI', 'Herramientas experimentales de Android Local Linux', 'Operaciones de GitHub, búsqueda y controles del entorno más fiables']
  },
  ja: {
    eyebrow: '最新リリース', current: '現在', version: 'バージョン', build: 'Build', released: 'リリース日', platforms: 'プラットフォーム', date: '2026 年 11 月 2 日', platformsValue: 'Android · iPhone · iPad', overview: 'このリリース', new: '新機能 · 3', improved: '改善 · 5', fixed: '修正 · 2', highlights: ['リポジトリ、Issue、プルリクエスト、CI のネイティブ GitHub ワークフロー', '実験的な Android Local Linux 開発ツールキット', 'より安定した GitHub 操作、検索、ワークベンチ操作']
  },
  ko: {
    eyebrow: '최신 릴리스', current: '현재', version: '버전', build: 'Build', released: '출시일', platforms: '플랫폼', date: '2026년 11월 2일', platformsValue: 'Android · iPhone · iPad', overview: '이번 릴리스', new: '새 기능 · 3', improved: '개선됨 · 5', fixed: '수정됨 · 2', highlights: ['저장소, 이슈, 풀 리퀘스트 및 CI를 위한 네이티브 GitHub 워크플로', '실험적인 Android Local Linux 개발 도구 키트', '더 안정적인 GitHub 작업, 검색 및 워크벤치 조작']
  }
}[locale.value]))
</script>

<template>
  <section class="release-detail-header" aria-label="Release information">
    <div class="release-detail-header-top">
      <p class="release-eyebrow">{{ copy.eyebrow }}</p>
      <span class="release-status">{{ copy.current }}</span>
    </div>
    <dl class="release-metadata">
      <div><dt>{{ copy.version }}</dt><dd>2.2.0</dd></div>
      <div><dt>{{ copy.build }}</dt><dd>60</dd></div>
      <div><dt>{{ copy.released }}</dt><dd>{{ copy.date }}</dd></div>
      <div><dt>{{ copy.platforms }}</dt><dd>{{ copy.platformsValue }}</dd></div>
    </dl>
    <ul class="release-outcomes">
      <li v-for="highlight in copy.highlights" :key="highlight">{{ highlight }}</li>
    </ul>
    <nav class="release-section-nav" :aria-label="copy.overview">
      <span>{{ copy.overview }}</span>
      <a href="#release-new">{{ copy.new }}</a>
      <a v-if="copy.improved" href="#release-improved">{{ copy.improved }}</a>
      <a v-if="copy.fixed" href="#release-fixed">{{ copy.fixed }}</a>
    </nav>
  </section>
</template>
