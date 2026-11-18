<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import translations from '../i18n/explore.json'
import MockIcon from './MockIcon.vue'
import '../styles/resource-hub.css'

const { lang } = useData()
const locale = computed(() => {
  const key = lang.value.split('-')[0]
  return key in translations ? key as keyof typeof translations : 'en'
})
const copy = computed(() => translations[locale.value])
const local = (path: string) => path === '/blog/' && !['en', 'zh'].includes(locale.value)
  ? '/blog/'
  : `${locale.value === 'en' ? '' : `/${locale.value}`}${path}`
const isEnglish = (path: string) => !['en', 'zh'].includes(locale.value)
  && ['/blog/', '/compare/mobile-ai-development-tools'].includes(path)
</script>

<template>
  <div class="resource-hub">
    <header class="resource-hub-intro">
      <p class="resource-hub-eyebrow">{{ copy.nav }}</p>
      <h1>{{ copy.title }}</h1>
      <p>{{ copy.intro }}</p>
    </header>

    <nav class="resource-hub-topics" :aria-label="copy.jump">
      <a v-for="section in copy.sections" :key="section.id" :href="`#${section.id}`">{{ section.title }}</a>
    </nav>

    <section v-for="(section, index) in copy.sections" :key="section.id" class="resource-hub-section" :aria-labelledby="`${section.id}-title`">
      <header :id="section.id" class="resource-hub-section-head">
        <MockIcon :name="['terminal', 'branch', 'book'][index]" />
        <div><h2 :id="`${section.id}-title`">{{ section.title }}</h2><p>{{ section.description }}</p></div>
      </header>
      <div class="resource-hub-grid" :class="{ 'is-pair': section.items.length === 2 }">
        <a v-for="item in section.items" :key="item.link" :href="local(item.link)" class="resource-hub-card">
          <span class="resource-hub-card-title">{{ item.title }}<span v-if="isEnglish(item.link)" class="resource-hub-language">{{ copy.english }}</span></span>
          <span class="resource-hub-card-description">{{ item.description }}</span>
          <span class="resource-hub-arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </section>

    <aside class="resource-hub-help">
      <p>{{ copy.help }}</p>
      <a :href="local('/docs/quick-start')">{{ copy.helpLink }} <span aria-hidden="true">→</span></a>
    </aside>
  </div>
</template>
