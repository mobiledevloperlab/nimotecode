<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()

const localePrefix = computed(() => {
  const match = route.path.match(/^\/(?:zh|ja|ko|es)(?=\/|$)/)
  return match?.[0] ?? ''
})

const locale = computed(() => localePrefix.value.slice(1) || 'en')

const copy = computed(() => locale.value === 'zh' ? {
  positioning: '移动 AI 开发工作台：Editor + Explorer + SSH + Terminal + Git + AI Agent。',
  product: '产品',
  features: '功能特性',
  workflows: '使用场景',
  resources: '技术资源',
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
  note: '为开发者的移动时刻而构建。',
  exploreLinks: [
    { text: '移动 IDE', href: '/mobile-ide' },
    { text: '工具对比', href: '/compare/mobile-ai-development-tools' },
    { text: 'SSH IDE', href: '/ssh-ide' },
    { text: '移动 AI 编程', href: '/mobile-ai-coding' }
  ]
} : locale.value === 'ja' ? {
  positioning: 'モバイル AI 開発ワークスペース：Editor + Explorer + SSH + Terminal + Git + AI Agent。', product: '製品', features: '機能', workflows: 'ワークフロー', resources: 'リソース', docs: 'ドキュメント', download: 'ダウンロード', explore: '探索', guides: 'ガイド', changelog: '更新情報', social: 'フォロー', youtube: 'YouTube', x: 'X / Twitter', github: 'GitHub', demo: 'デモを見る', company: 'サポートとプライバシー', support: 'サポート', privacy: 'プライバシー', terms: '利用規約', deletion: 'アカウント削除', openSource: 'オープンソース', note: '移動中の開発者のために。', exploreLinks: [{ text: 'モバイル IDE', href: '/mobile-ide' }, { text: 'ツール比較', href: '/compare/mobile-ai-development-tools' }, { text: 'SSH IDE', href: '/ssh-ide' }, { text: 'モバイル AI コーディング', href: '/mobile-ai-coding' }]
} : locale.value === 'ko' ? {
  positioning: '모바일 AI 개발 워크스페이스: Editor + Explorer + SSH + Terminal + Git + AI Agent.', product: '제품', features: '기능', workflows: '워크플로', resources: '리소스', docs: '문서', download: '다운로드', explore: '둘러보기', guides: '가이드', changelog: '새 소식', social: '팔로우', youtube: 'YouTube', x: 'X / Twitter', github: 'GitHub', demo: '데모 보기', company: '지원 및 개인정보', support: '지원', privacy: '개인정보', terms: '이용 약관', deletion: '계정 삭제', openSource: '오픈 소스', note: '이동 중인 개발자를 위해 만들었습니다.', exploreLinks: [{ text: '모바일 IDE', href: '/mobile-ide' }, { text: '도구 비교', href: '/compare/mobile-ai-development-tools' }, { text: 'SSH IDE', href: '/ssh-ide' }, { text: '모바일 AI 코딩', href: '/mobile-ai-coding' }]
} : locale.value === 'es' ? {
  positioning: 'Espacio de desarrollo con IA móvil: Editor + Explorer + SSH + Terminal + Git + AI Agent.', product: 'Producto', features: 'Funciones', workflows: 'Flujos de trabajo', resources: 'Recursos', docs: 'Documentación', download: 'Descargar', explore: 'Explorar', guides: 'Guías', changelog: 'Novedades', social: 'Seguir', youtube: 'YouTube', x: 'X / Twitter', github: 'GitHub', demo: 'Ver demo', company: 'Soporte y privacidad', support: 'Soporte', privacy: 'Privacidad', terms: 'Términos', deletion: 'Eliminar cuenta', openSource: 'Código abierto', note: 'Creado para desarrolladores en movimiento.', exploreLinks: [{ text: 'IDE móvil', href: '/mobile-ide' }, { text: 'Comparar herramientas', href: '/compare/mobile-ai-development-tools' }, { text: 'IDE SSH', href: '/ssh-ide' }, { text: 'Programación móvil con IA', href: '/mobile-ai-coding' }]
} : {
  positioning: 'Mobile AI Development Workspace: Editor + Explorer + SSH + Terminal + Git + AI Agent.',
  product: 'Product',
  features: 'Features',
  workflows: 'Workflows',
  resources: 'Resources',
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
  exploreLinks: [
    { text: 'Mobile IDE', href: '/mobile-ide' },
    { text: 'Compare Tools', href: '/compare/mobile-ai-development-tools' },
    { text: 'SSH IDE', href: '/ssh-ide' },
    { text: 'Mobile AI Coding', href: '/mobile-ai-coding' }
  ]
})

function localized(path: string) {
  // Localized primary pages stay in their locale. Long-form articles and
  // supporting legal pages intentionally retain their English source route.
  if (['/ja', '/ko', '/es'].includes(localePrefix.value)) {
    if (path.includes('blog')) return '/blog/'
    if (path.includes('download')) return `${localePrefix.value}/download`
    if (path.includes('features') || path.includes('mobile-ide') || path.includes('ssh-ide') || path.includes('mobile-ai-coding')) return `${localePrefix.value}/features`
    if (path.includes('use-cases')) return `${localePrefix.value}/use-cases/`
    if (path.includes('resources')) return `${localePrefix.value}/resources/`
    if (path.includes('compare')) return `${localePrefix.value}/compare/mobile-ai-development-tools`
    if (path.includes('docs/quick-start')) return `${localePrefix.value}/docs/quick-start`
    return path
  }
  return `${localePrefix.value}${path}` || '/'
}
</script>

<template>
  <footer class="nimote-site-footer">
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
          <a :href="localized('/use-cases/')">{{ copy.workflows }}</a>
          <a :href="localized('/resources/')">{{ copy.resources }}</a>
          <a :href="localized('/docs/quick-start')">{{ copy.docs }}</a>
          <a :href="localized('/download?utm_source=footer&utm_medium=website&utm_campaign=navigation')">{{ copy.download }}</a>
        </nav>

        <nav :aria-label="copy.explore">
          <h2>{{ copy.explore }}</h2>
          <a v-for="link in copy.exploreLinks" :key="link.href" :href="localized(link.href)">{{ link.text }}</a>
        </nav>

        <nav :aria-label="copy.social">
          <h2>{{ copy.social }}</h2>
          <a href="https://www.youtube.com/watch?v=gW2wFNIBNws" target="_blank" rel="noreferrer">{{ copy.youtube }}</a>
          <a href="https://x.com/mobiledevlab" target="_blank" rel="noreferrer">{{ copy.x }}</a>
          <a href="https://github.com/mobiledevloperlab" target="_blank" rel="noreferrer">{{ copy.github }}</a>
          <a :href="localized('/blog/')">{{ copy.guides }}</a>
          <a :href="localized('/changelog')">{{ copy.changelog }}</a>
        </nav>

        <nav :aria-label="copy.company">
          <h2>{{ copy.company }}</h2>
          <a :href="localized('/support')">{{ copy.support }}</a>
          <a :href="localized('/privacy')">{{ copy.privacy }}</a>
          <a :href="localized('/terms')">{{ copy.terms }}</a>
          <a :href="localized('/docs/local-linux-source')">{{ copy.openSource }}</a>
          <a :href="localized('/account-delete')">{{ copy.deletion }}</a>
        </nav>
      </div>
      <div class="nimote-site-footer-meta">
        <span>{{ copy.note }}</span>
        <span>Copyright © 2026 NimoteCode. All rights reserved.</span>
      </div>
    </div>
  </footer>
</template>
