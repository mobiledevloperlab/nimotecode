<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import MockIcon from './MockIcon.vue'

const { lang } = useData()
const translations = {
  en: { title: 'Download NimoteCode', intro: 'Bring your development workspace to Android, iPhone and iPad.', section: 'Mobile & tablet', description: 'Choose your device and install from the official app store.', releases: 'All releases', android: 'Get it on Google Play', ios: 'Download on the App Store', note: 'Free to start. Store availability varies by region.', start: 'Quick start', help: 'Getting started' },
  zh: { title: '下载 NimoteCode', intro: '在 Android、iPhone 和 iPad 上，随时继续你的开发工作。', section: '手机与平板', description: '选择你的设备，从官方应用商店安装。', releases: '更新日志', android: '前往 Google Play 下载', ios: '前往 App Store 下载', note: '免费开始使用。商店可用性因地区而异。', start: '快速开始', help: '开始使用' },
  ja: { title: 'NimoteCode をダウンロード', intro: 'Android、iPhone、iPad で、いつでも開発を続けられます。', section: 'スマートフォンとタブレット', description: 'デバイスを選び、公式アプリストアからインストール。', releases: 'リリースノート', android: 'Google Play から入手', ios: 'App Store から入手', note: '無料で始められます。提供状況は地域によって異なります。', start: 'クイックスタート', help: '使い始める' },
  ko: { title: 'NimoteCode 다운로드', intro: 'Android, iPhone, iPad에서 언제든 개발을 이어가세요.', section: '휴대폰 및 태블릿', description: '기기를 선택하고 공식 앱 스토어에서 설치하세요.', releases: '릴리스 노트', android: 'Google Play에서 다운로드', ios: 'App Store에서 다운로드', note: '무료로 시작하세요. 스토어 이용 가능 여부는 지역에 따라 다릅니다.', start: '빠른 시작', help: '시작하기' },
  es: { title: 'Descarga NimoteCode', intro: 'Lleva tu espacio de desarrollo a Android, iPhone y iPad.', section: 'Móvil y tablet', description: 'Elige tu dispositivo e instala desde la tienda oficial.', releases: 'Todas las versiones', android: 'Descargar en Google Play', ios: 'Descargar en App Store', note: 'Empieza gratis. La disponibilidad varía según la región.', start: 'Inicio rápido', help: 'Primeros pasos' }
}
const locale = computed(() => lang.value.split('-')[0] as keyof typeof translations)
const copy = computed(() => translations[locale.value] ?? translations.en)
const local = (path: string) => `${locale.value in translations && locale.value !== 'en' ? `/${locale.value}` : ''}${path}`
const campaign = computed(() => locale.value === 'zh' ? 'zh_download_page' : 'download_page')
const platforms = computed(() => [
  { name: 'Android', icon: 'android', store: copy.value.android, href: `https://play.google.com/store/apps/details?id=com.nimote.nimotecode&utm_source=nimotecode&utm_medium=website&utm_campaign=${campaign.value}_android` },
  { name: 'iPhone / iPad', icon: 'apple', store: copy.value.ios, href: `https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253?pt=120058258&ct=${campaign.value}_ios&mt=8` }
])
</script>

<template>
  <div class="download-page">
    <header class="download-page__intro">
      <h1>{{ copy.title }}</h1>
      <p>{{ copy.intro }}</p>
    </header>
    <section id="choose-platform" aria-labelledby="download-platform-heading">
      <div class="download-page__section-heading">
        <div><h2 id="download-platform-heading">{{ copy.section }}</h2><p>{{ copy.description }}</p></div>
        <a class="download-page__releases" :href="local('/releases/')">{{ copy.releases }} <span aria-hidden="true">↗</span></a>
      </div>
      <div class="download-page__platforms">
        <a v-for="platform in platforms" :key="platform.name" class="download-page__platform" :href="platform.href" target="_blank" rel="noopener noreferrer">
          <MockIcon :name="platform.icon" class="download-page__platform-icon" />
          <span><strong>{{ platform.name }}</strong><span>{{ platform.store }}</span></span>
          <svg class="download-page__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12m-4-4 4 4 4-4M4 16v5h16v-5" /></svg>
        </a>
      </div>
      <p class="download-page__note">{{ copy.note }}</p>
    </section>
    <nav class="download-page__help" :aria-label="copy.help">
      <a :href="local('/docs/quick-start')">{{ copy.start }} <span aria-hidden="true">→</span></a>
      <a :href="local('/pro')">Early Access Pro <span aria-hidden="true">→</span></a>
    </nav>
  </div>
</template>

<style>
.vp-doc .download-page { padding-block: 24px 8px; }
.vp-doc .download-page__intro { margin-bottom: 48px; }
.vp-doc .download-page h1 {
  max-width: 1000px;
  margin: 0 0 20px;
  font-size: clamp(2.25rem, 4.6vw, 4rem);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -.04em;
  text-wrap: balance;
}
.vp-doc .download-page__intro p { max-width: 680px; margin: 0; font-size: 1.125rem; line-height: 1.7; }
.download-page__section-heading { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; margin-bottom: 24px; }
.vp-doc .download-page h2 { margin: 0 0 10px; padding: 0; border: 0; font-size: 1.75rem; line-height: 1.3; letter-spacing: -.025em; }
.vp-doc .download-page__section-heading p { margin: 0; font-size: var(--nimote-fs-sm); }
.vp-doc .download-page__releases { display: inline-flex; align-items: center; flex-shrink: 0; gap: 10px; min-height: 44px; padding: 8px 14px; border: 1px solid var(--nimote-border); border-radius: var(--nimote-radius-sm); color: var(--nimote-text-secondary); font-size: var(--nimote-fs-sm); }
.download-page__platforms { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border: 1px solid var(--nimote-border); border-radius: var(--nimote-radius-md); overflow: hidden; background: var(--nimote-card); }
.vp-doc .download-page__platform { display: flex; align-items: center; gap: 18px; min-width: 0; min-height: 112px; padding: 24px; border: 0; color: var(--nimote-text-primary); text-decoration: none; transition: background-color .18s; }
.vp-doc .download-page__platform + .download-page__platform { border-left: 1px solid var(--nimote-border); }
.download-page__platform > span { min-width: 0; }
.download-page__platform strong { display: block; font-size: 1rem; font-weight: 600; }
.download-page__platform > span > span { display: block; margin-top: 5px; color: var(--nimote-text-secondary); font-size: var(--nimote-fs-sm); font-weight: 400; }
.download-page__platform-icon { width: 26px; height: 26px; flex: none; }
.download-page__arrow { width: 20px; height: 20px; flex: none; margin-left: auto; color: var(--nimote-text-muted); }
.vp-doc .download-page__platform:hover { background: var(--nimote-bg-subtle); color: var(--nimote-link); }
.vp-doc .download-page__platform:focus-visible { outline-offset: -4px; }
.vp-doc .download-page__note { margin: 16px 0 0; font-size: var(--nimote-fs-xs); color: var(--nimote-text-muted); }
.download-page__help { display: flex; flex-wrap: wrap; gap: 12px 28px; margin-top: 32px; }
.download-page__help a { display: inline-flex; align-items: center; gap: 12px; min-height: 44px; font-size: var(--nimote-fs-sm); }
@media (max-width: 639px) {
  .vp-doc .download-page { padding-top: 8px; }
  .vp-doc .download-page__intro { margin-bottom: 32px; }
  .vp-doc .download-page__intro p { font-size: 1rem; }
  .download-page__section-heading { flex-wrap: wrap; gap: 12px; margin-bottom: 16px; }
  .vp-doc .download-page h2 { font-size: 1.375rem; }
  .download-page__platforms { grid-template-columns: 1fr; }
  .vp-doc .download-page__platform { min-height: 92px; padding: 20px; }
  .vp-doc .download-page__platform + .download-page__platform { border-left: 0; border-top: 1px solid var(--nimote-border); }
  .download-page__help { margin-top: 24px; }
}
@media (prefers-reduced-motion: reduce) {
  .vp-doc .download-page__platform { transition: none; }
}
</style>
