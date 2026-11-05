<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useData } from 'vitepress'
const route = useRoute()
const { page } = useData()
const locale = computed(() => route.path.match(/^\/(zh|ja|ko|es)(?:\/|$)/)?.[1] || 'en')
const labels: Record<string, string[]> = {
  en: ['Help & policies', 'Support', 'Privacy', 'Terms', 'Account deletion', 'On this page'],
  zh: ['帮助与政策', '支持中心', '隐私政策', '服务条款', '账户删除', '本页内容'],
  ja: ['ヘルプとポリシー', 'サポート', 'プライバシー', '利用規約', 'アカウント削除', 'このページの内容'],
  ko: ['도움말 및 정책', '지원', '개인정보', '이용약관', '계정 삭제', '페이지 내용'],
  es: ['Ayuda y políticas', 'Soporte', 'Privacidad', 'Términos', 'Eliminar cuenta', 'En esta página']
}
const copy = computed(() => labels[locale.value])
const links = computed(() => ['support', 'privacy', 'terms', 'account-delete'].map((slug, i) => ({
  href: `${locale.value === 'en' ? '' : '/' + locale.value}/${slug}`, label: copy.value[i + 1], slug
})))
const current = computed(() => route.path.replace(/\.html$/, '').replace(/\/$/, '').split('/').pop())
</script>

<template>
  <div class="trust-nav">
    <p class="trust-eyebrow">NIMOTECODE / {{ copy[0] }}</p>
    <nav :aria-label="copy[0]" class="trust-tabs">
      <a v-for="link in links" :key="link.slug" :href="link.href" :aria-current="current === link.slug ? 'page' : undefined">{{ link.label }}</a>
    </nav>
    <details v-if="page.headers?.length" class="trust-toc">
      <summary>{{ copy[5] }}</summary>
      <nav :aria-label="copy[5]">
        <a v-for="heading in page.headers" :key="heading.slug" :href="`#${heading.slug}`">{{ heading.title }}</a>
      </nav>
    </details>
  </div>
</template>
