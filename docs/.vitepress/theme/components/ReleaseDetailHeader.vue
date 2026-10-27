<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { page } = useData()
const locale = computed(() => page.value.relativePath.match(/^(zh|es|ja|ko)\//)?.[1] ?? 'en')

const copy = computed(() => ({
  en: {
    eyebrow: 'Latest release', current: 'Current', version: 'Version', build: 'Build', released: 'Released', platforms: 'Platforms', date: 'October 27, 2026', platformsValue: 'Android · iPhone · iPad · Desktop', overview: 'In this release', new: 'Improved · 5', improved: '', fixed: '', highlights: ['A more efficient Agent for large and minified files', 'A more consistent workspace across every device', 'Landscape editor tabs, direct search, and smoother mobile controls']
  },
  zh: {
    eyebrow: '最新版本', current: '当前版本', version: '版本', build: 'Build', released: '发布日期', platforms: '平台', date: '2026 年 10 月 27 日', platformsValue: 'Android · iPhone · iPad · 桌面端', overview: '本次内容', new: '改进 · 5', improved: '', fixed: '', highlights: ['更高效处理大型和压缩文件的 Agent', '全设备更统一的工作区', '横屏编辑器标签、直接搜索与更顺畅的移动端操作']
  },
  es: {
    eyebrow: 'Última versión', current: 'Actual', version: 'Versión', build: 'Build', released: 'Publicado', platforms: 'Plataformas', date: '27 de octubre de 2026', platformsValue: 'Android · iPhone · iPad · Escritorio', overview: 'En esta versión', new: 'Mejorado · 5', improved: '', fixed: '', highlights: ['Un Agente más eficiente para archivos grandes y minimizados', 'Un espacio de trabajo más coherente en todos los dispositivos', 'Pestañas en horizontal, búsqueda directa y controles móviles más fluidos']
  },
  ja: {
    eyebrow: '最新リリース', current: '現在', version: 'バージョン', build: 'Build', released: 'リリース日', platforms: 'プラットフォーム', date: '2026 年 10 月 27 日', platformsValue: 'Android · iPhone · iPad · デスクトップ', overview: 'このリリース', new: '改善 · 5', improved: '', fixed: '', highlights: ['大きなファイルや圧縮ファイル向けに効率化された Agent', 'すべてのデバイスでより一貫したワークスペース', '横向きタブ、直接検索、よりスムーズなモバイル操作']
  },
  ko: {
    eyebrow: '최신 릴리스', current: '현재', version: '버전', build: 'Build', released: '출시일', platforms: '플랫폼', date: '2026년 10월 27일', platformsValue: 'Android · iPhone · iPad · 데스크톱', overview: '이번 릴리스', new: '개선됨 · 5', improved: '', fixed: '', highlights: ['대용량 및 압축 파일에 더 효율적인 Agent', '모든 기기에서 더 일관된 작업 공간', '가로 탭, 직접 검색, 더 부드러운 모바일 조작']
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
      <div><dt>{{ copy.version }}</dt><dd>2.1.0</dd></div>
      <div><dt>{{ copy.build }}</dt><dd>59</dd></div>
      <div><dt>{{ copy.released }}</dt><dd>{{ copy.date }}</dd></div>
      <div><dt>{{ copy.platforms }}</dt><dd>{{ copy.platformsValue }}</dd></div>
    </dl>
    <ul class="release-outcomes">
      <li v-for="highlight in copy.highlights" :key="highlight">{{ highlight }}</li>
    </ul>
    <nav class="release-section-nav" :aria-label="copy.overview">
      <span>{{ copy.overview }}</span>
      <a href="#release-improved">{{ copy.new }}</a>
      <a v-if="copy.improved" href="#release-improved">{{ copy.improved }}</a>
      <a v-if="copy.fixed" href="#release-fixed">{{ copy.fixed }}</a>
    </nav>
  </section>
</template>
