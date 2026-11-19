<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import WebsitePrivacy from './components/WebsitePrivacy.vue'

defineProps<{ compact?: boolean }>()

const route = useRoute()

const localePrefix = computed(() => {
  const match = route.path.match(/^\/(?:zh|ja|ko|es)(?=\/|$)/)
  return match?.[0] ?? ''
})

const locale = computed(() => localePrefix.value.slice(1) || 'en')
const securityLabel = computed(() => ({
  en: 'Security & compatibility', zh: '安全与兼容性', ja: 'セキュリティと互換性',
  ko: '보안 및 호환성', es: 'Seguridad y compatibilidad'
}[locale.value] || 'Security & compatibility'))

const copy = computed(() => locale.value === 'zh' ? {
  positioning: '移动 AI 开发工作台：Editor + Explorer + SSH + Terminal + Git + AI Agent。',
  product: '产品',
  features: '功能特性',
  docs: '文档',
  download: '下载',
  explore: '探索',
  guides: '使用指南',
  changelog: '更新日志',
  social: '关注我们',
  youtube: 'YouTube',
  x: 'X / Twitter',
  github: 'GitHub',
  demo: '观看演示',
  company: '帮助与隐私',
  support: '支持',
  privacy: '隐私政策',
  terms: '服务条款',
  deletion: '账号删除',
  openSource: '开源与源码',
  note: '为开发者的移动时刻而构建。'
} : locale.value === 'ja' ? {
  positioning: 'モバイル AI 開発ワークスペース：Editor + Explorer + SSH + Terminal + Git + AI Agent。', product: '製品', features: '機能', docs: 'ドキュメント', download: 'ダウンロード', explore: '探索', guides: 'ガイド', changelog: '更新情報', social: 'フォロー', youtube: 'YouTube', x: 'X / Twitter', github: 'GitHub', demo: 'デモを見る', company: 'サポートとプライバシー', support: 'サポート', privacy: 'プライバシー', terms: '利用規約', deletion: 'アカウント削除', openSource: 'オープンソース', note: '移動中の開発者のために。'
} : locale.value === 'ko' ? {
  positioning: '모바일 AI 개발 워크스페이스: Editor + Explorer + SSH + Terminal + Git + AI Agent.', product: '제품', features: '기능', docs: '문서', download: '다운로드', explore: '둘러보기', guides: '가이드', changelog: '새 소식', social: '팔로우', youtube: 'YouTube', x: 'X / Twitter', github: 'GitHub', demo: '데모 보기', company: '지원 및 개인정보', support: '지원', privacy: '개인정보', terms: '이용 약관', deletion: '계정 삭제', openSource: '오픈 소스', note: '이동 중인 개발자를 위해 만들었습니다.'
} : locale.value === 'es' ? {
  positioning: 'Espacio de desarrollo con IA móvil: Editor + Explorer + SSH + Terminal + Git + AI Agent.', product: 'Producto', features: 'Funciones', docs: 'Documentación', download: 'Descargar', explore: 'Explorar', guides: 'Guías', changelog: 'Novedades', social: 'Seguir', youtube: 'YouTube', x: 'X / Twitter', github: 'GitHub', demo: 'Ver demo', company: 'Soporte y privacidad', support: 'Soporte', privacy: 'Privacidad', terms: 'Términos', deletion: 'Eliminar cuenta', openSource: 'Código abierto', note: 'Creado para desarrolladores en movimiento.'
} : {
  positioning: 'Mobile AI Development Workspace: Editor + Explorer + SSH + Terminal + Git + AI Agent.',
  product: 'Product',
  features: 'Features',
  docs: 'Documentation',
  download: 'Download',
  explore: 'Explore',
  guides: 'Guides',
  changelog: 'What’s New',
  social: 'Follow',
  youtube: 'YouTube',
  x: 'X / Twitter',
  github: 'GitHub',
  demo: 'Watch demo',
  company: 'Support & Privacy',
  support: 'Support',
  privacy: 'Privacy',
  terms: 'Terms',
  deletion: 'Account deletion',
  openSource: 'Open Source',
  note: 'Built for developers on the move.',
})

function localized(path: string) {
  if (path === '/blog/' && ['ja', 'ko', 'es'].includes(locale.value)) return '/blog/'
  return `${localePrefix.value}${path}` || '/'
}

</script>

<template>
  <footer v-if="compact" class="nimote-doc-footer">
    <nav :aria-label="copy.company">
      <a :href="localized('/support')">{{ copy.support }}</a>
      <a :href="localized('/security')">{{ securityLabel }}</a>
      <a :href="localized('/privacy')">{{ copy.privacy }}</a>
      <a :href="localized('/terms')">{{ copy.terms }}</a>
    </nav>
    <span class="nimote-doc-footer-copyright">© 2026 NimoteCode</span>
    <WebsitePrivacy />
  </footer>
  <footer v-else class="nimote-site-footer">
    <div class="nimote-site-footer-content">
      <div class="nimote-site-footer-inner">
        <section class="nimote-footer-brand" aria-label="NimoteCode">
          <a class="nimote-footer-logo" :href="localized('/')">
            <img src="/app_icon.png" alt="" width="40" height="40">
            <span>NimoteCode</span>
          </a>
          <p>{{ copy.positioning }}</p>
        </section>

        <nav :aria-label="copy.product">
          <h2>{{ copy.product }}</h2>
          <a :href="localized('/features')">{{ copy.features }}</a>
          <a :href="localized('/pro')">Pro</a>
          <a :href="localized('/resources/')">{{ copy.explore }}</a>
          <a :href="localized('/docs/quick-start')">{{ copy.docs }}</a>
          <a :href="localized('/download?utm_source=footer&utm_medium=website&utm_campaign=navigation')">{{ copy.download }}</a>
        </nav>

        <nav :aria-label="copy.explore">
          <h2>{{ copy.explore }}</h2>
          <a :href="localized('/blog/')">{{ copy.guides }}</a>
          <a :href="localized('/releases/')">{{ copy.changelog }}</a>
        </nav>

        <nav :aria-label="copy.company">
          <h2>{{ copy.company }}</h2>
          <a :href="localized('/support')">{{ copy.support }}</a>
          <a :href="localized('/security')">{{ securityLabel }}</a>
          <a :href="localized('/privacy')">{{ copy.privacy }}</a>
          <a :href="localized('/terms')">{{ copy.terms }}</a>
          <a :href="localized('/docs/local-linux-source')">{{ copy.openSource }}</a>
          <a :href="localized('/account-delete')">{{ copy.deletion }}</a>
          <span class="nimote-footer-follow">{{ copy.social }}</span>
          <span class="nimote-footer-social-links">
            <a href="https://www.youtube.com/watch?v=gW2wFNIBNws" target="_blank" rel="noreferrer">{{ copy.youtube }}</a>
            <a href="https://x.com/mobiledevlab" target="_blank" rel="noreferrer">{{ copy.x }}</a>
            <a href="https://discord.gg/tTxbpqYmhR" target="_blank" rel="noreferrer">Discord</a>
            <a href="https://github.com/mobiledevloperlab" target="_blank" rel="noreferrer">{{ copy.github }}</a>
          </span>
        </nav>
      </div>
      <div class="nimote-site-footer-meta">
        <span>{{ copy.note }}</span>
        <span>Copyright © 2026 NimoteCode. All rights reserved.</span>
      </div>
    </div>
    <WebsitePrivacy />
  </footer>
</template>
