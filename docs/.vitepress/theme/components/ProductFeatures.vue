<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData, withBase } from 'vitepress'
import MockIcon from './MockIcon.vue'
import translations from '../i18n/product.json'
import homeTranslations from '../i18n/home.json'
import '../styles/product-features.css'

const { lang } = useData()
const locale = computed(() => {
  const key = lang.value.split('-')[0]
  return key in translations ? key as keyof typeof translations : 'en'
})
const copy = computed(() => translations[locale.value])
const local = (path: string) => withBase(`${locale.value === 'en' ? '' : `/${locale.value}`}${path}`)
const activeView = ref(0)
// Real phone captures only. Keep the full portrait frame in every tool view.
const views = [
  { image: 'editor-code-selection', extension: 'png', guide: 'editor', icon: 'code' },
  { image: 'terminal-command-output', extension: 'png', guide: 'terminal', icon: 'terminal' },
  { image: 'ai-plan-approval', extension: 'jpg', guide: 'ai', icon: 'spark' },
  { image: 'git-diff-view', extension: 'jpg', guide: 'source-control', icon: 'branch' },
  { image: 'docker-images', extension: 'png', guide: 'docker', icon: 'cloud' }
]
const cardPaths = ['ssh', 'local-linux', 'host']
const current = computed(() => views[activeView.value])
const currentCopy = computed(() => copy.value.views[activeView.value])
const imageSource = computed(() => withBase(`/images/placeholders/thumbs/${current.value.image}.webp`))
const originalSource = computed(() => withBase(`/images/placeholders/${current.value.image}.${current.value.extension}`))
</script>

<template>
  <div class="product-features">
    <header class="features-hero" aria-labelledby="features-title">
      <p class="features-eyebrow">NimoteCode / {{ copy.eyebrow }}</p>
      <h1 id="features-title">{{ copy.title }}</h1>
      <p class="features-intro">{{ copy.intro }}</p>
      <div class="features-actions"><a class="features-primary" href="#features-gallery-title">{{ copy.browse }} <span aria-hidden="true">↓</span></a><a :href="local('/docs')">{{ copy.guide }} <span aria-hidden="true">→</span></a></div>
    </header>

    <section class="features-gallery" aria-labelledby="features-gallery-title">
      <header><h2 id="features-gallery-title">{{ copy.gallery }}</h2></header>
      <div class="features-view-controls" role="group" :aria-label="copy.gallery">
        <button v-for="(view, index) in views" :key="view.guide" type="button" :aria-pressed="activeView === index" aria-controls="features-view" @click="activeView = index"><MockIcon :name="view.icon" />{{ copy.views[index][0] }}</button>
      </div>
      <div id="features-view" class="features-view">
        <div class="features-view-copy" aria-live="polite" aria-atomic="true">
          <p class="features-eyebrow">0{{ activeView + 1 }} / {{ currentCopy[0] }}</p>
          <h3>{{ currentCopy[1] }}</h3>
          <p>{{ currentCopy[2] }}</p>
          <ul class="features-tool-points"><li v-for="point in copy.points[activeView]" :key="point">{{ point }}</li></ul>
          <a :href="local(`/docs/${current.guide}`)">{{ copy.learn }} <span aria-hidden="true">→</span></a>
        </div>
        <figure class="features-phone">
          <a :href="originalSource" target="_blank" rel="noopener" :aria-label="`${copy.open}: ${currentCopy[0]}`"><img :key="current.image" :src="imageSource" :alt="`${copy.docSource} · ${currentCopy[0]}`" width="720" height="1584" decoding="async" fetchpriority="high"></a>
          <figcaption>{{ currentCopy[0] }} · {{ copy.open }} ↗</figcaption>
        </figure>
      </div>
    </section>

    <section class="features-extensions" aria-labelledby="features-extensions-title">
      <h2 id="features-extensions-title">{{ copy.extensions }}</h2>
      <div class="features-extension-grid"><article v-for="(card, index) in copy.cards" :key="card[0]"><p class="features-tag">{{ card[2] }}</p><h3>{{ card[0] }}</h3><p>{{ card[1] }}</p><a :href="local(`/docs/${cardPaths[index]}`)">{{ copy.learn }} <span aria-hidden="true">→</span></a></article></div>
      <p class="features-deadline"><a :href="local('/pro')">{{ homeTranslations[locale].earlyAccessDeadline }} →</a></p>
    </section>
    <h2 class="features-details-title">{{ copy.details }}</h2>
  </div>
</template>
