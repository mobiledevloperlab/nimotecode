<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { page } = useData()
const locale = computed(() => page.value.relativePath.match(/^(zh|es|ja|ko)\//)?.[1] ?? 'en')

const copy = computed(() => ({
  en: {
    eyebrow: 'Major release', current: 'Current', version: 'Version', build: 'Build', released: 'Released', platforms: 'Platforms', date: 'October 25, 2026', platformsValue: 'Android · iPhone · iPad · Desktop', overview: 'In this release', new: 'New · 5', improved: 'Improved · 6', fixed: 'Fixed · 5', highlights: ['Custom plugins and workspace panels', 'Continuous AI Agent collaboration', 'Git branches, proxy SSH, and one editor across devices']
  },
  zh: {
    eyebrow: '重大版本更新', current: '当前版本', version: '版本', build: 'Build', released: '发布日期', platforms: '平台', date: '2026 年 10 月 25 日', platformsValue: 'Android · iPhone · iPad · 桌面端', overview: '本次内容', new: '新增 · 5', improved: '改进 · 6', fixed: '修复 · 5', highlights: ['自定义插件与工作台面板', '持续推进的 AI Agent 协作', 'Git 分支、代理 SSH 与全设备统一编辑器']
  },
  es: {
    eyebrow: 'Actualización principal', current: 'Actual', version: 'Versión', build: 'Build', released: 'Publicado', platforms: 'Plataformas', date: '25 de octubre de 2026', platformsValue: 'Android · iPhone · iPad · Escritorio', overview: 'En esta versión', new: 'Nuevo · 5', improved: 'Mejorado · 6', fixed: 'Corregido · 5', highlights: ['Plugins y paneles personalizados', 'Colaboración continua con el Agente de IA', 'Ramas de Git, SSH mediante proxy y un editor para todos los dispositivos']
  },
  ja: {
    eyebrow: '大型アップデート', current: '現在', version: 'バージョン', build: 'Build', released: 'リリース日', platforms: 'プラットフォーム', date: '2026 年 10 月 25 日', platformsValue: 'Android · iPhone · iPad · デスクトップ', overview: 'このリリース', new: '新機能 · 5', improved: '改善 · 6', fixed: '修正 · 5', highlights: ['カスタムプラグインとワークスペースパネル', '継続的な AI Agent 連携', 'Git ブランチ、プロキシ SSH、全デバイス共通のエディター']
  },
  ko: {
    eyebrow: '대규모 업데이트', current: '현재', version: '버전', build: 'Build', released: '출시일', platforms: '플랫폼', date: '2026년 10월 25일', platformsValue: 'Android · iPhone · iPad · 데스크톱', overview: '이번 릴리스', new: '새로운 기능 · 5', improved: '개선됨 · 6', fixed: '수정됨 · 5', highlights: ['맞춤 플러그인과 작업 공간 패널', '연속적인 AI Agent 협업', 'Git 브랜치, 프록시 SSH, 모든 기기에서 하나의 편집기']
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
      <div><dt>{{ copy.version }}</dt><dd>2.0.0</dd></div>
      <div><dt>{{ copy.build }}</dt><dd>58</dd></div>
      <div><dt>{{ copy.released }}</dt><dd>{{ copy.date }}</dd></div>
      <div><dt>{{ copy.platforms }}</dt><dd>{{ copy.platformsValue }}</dd></div>
    </dl>
    <ul class="release-outcomes">
      <li v-for="highlight in copy.highlights" :key="highlight">{{ highlight }}</li>
    </ul>
    <nav class="release-section-nav" :aria-label="copy.overview">
      <span>{{ copy.overview }}</span>
      <a href="#release-new">{{ copy.new }}</a>
      <a href="#release-improved">{{ copy.improved }}</a>
      <a href="#release-fixed">{{ copy.fixed }}</a>
    </nav>
  </section>
</template>
