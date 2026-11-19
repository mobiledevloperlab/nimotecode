<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import { useData, withBase } from 'vitepress'
import { screenshotUrl } from '../screenshot-assets'
import MockIcon from './MockIcon.vue'
import translations from '../i18n/product.json'
import '../styles/product-features.css'

const { lang } = useData()
const locale = computed(() => {
  const key = lang.value.split('-')[0]
  return key in translations ? key as keyof typeof translations : 'en'
})
const copy = computed(() => translations[locale.value])
const local = (path: string) => withBase(`${locale.value === 'en' ? '' : `/${locale.value}`}${path}`)
const activeView = ref(0)
const controls = ref<HTMLDivElement>()
// Keep complete, unmodified phone captures; Docker lives in the additional tools.
const views = [
  { image: 'editor-multiple-files', extension: 'jpg', guide: 'editor', icon: 'code' },
  { image: 'terminal-command-output', extension: 'png', guide: 'terminal', icon: 'terminal' },
  { image: 'ai-plan-approval', extension: 'jpg', guide: 'ai', icon: 'spark' },
  { image: 'git-diff-view', extension: 'jpg', guide: 'source-control', icon: 'branch' }
]
const environments = [
  { guide: 'quick-start', icon: 'folder' },
  { guide: 'ssh', icon: 'cloud' },
  { guide: 'local-linux', icon: 'terminal' }
]
const current = computed(() => views[activeView.value])
const currentCopy = computed(() => copy.value.views[activeView.value])
const imageSource = computed(() => withBase(screenshotUrl(`/images/placeholders/thumbs/${current.value.image}.webp`)))
const originalSource = computed(() => withBase(screenshotUrl(`/images/placeholders/${current.value.image}.${current.value.extension}`)))
const hostSource = withBase(screenshotUrl('/images/placeholders/thumbs/host-sessions.webp'))
const hostOriginal = withBase(screenshotUrl('/images/placeholders/host-sessions.png'))

async function selectView(index: number, focus = false) {
  activeView.value = index
  await nextTick()
  const button = controls.value?.querySelectorAll('button')[index]
  if (!button || !controls.value) return
  if (focus) button.focus({ preventScroll: true })
  controls.value.scrollTo({ left: button.offsetLeft - (controls.value.clientWidth - button.clientWidth) / 2 })
}

function navigateViews(event: KeyboardEvent) {
  let index = activeView.value
  if (event.key === 'ArrowRight') index = (index + 1) % views.length
  else if (event.key === 'ArrowLeft') index = (index + views.length - 1) % views.length
  else if (event.key === 'Home') index = 0
  else if (event.key === 'End') index = views.length - 1
  else return
  event.preventDefault()
  selectView(index, true)
}
</script>

<template>
  <div class="product-features">
    <section class="features-stage" aria-labelledby="features-title">
      <header class="features-hero">
        <p class="features-eyebrow">NimoteCode <span aria-hidden="true">/</span> {{ copy.eyebrow }}</p>
        <h1 id="features-title">{{ copy.title }}</h1>
        <p class="features-intro">{{ copy.intro }}</p>
        <div class="features-actions">
          <a class="features-primary" :href="local('/download')">{{ copy.download }} <span aria-hidden="true">↗</span></a>
          <a :href="local('/docs/quick-start')">{{ copy.guide }} <span aria-hidden="true">→</span></a>
        </div>
      </header>

      <div ref="controls" class="features-view-controls" role="tablist" :aria-label="copy.gallery" @keydown="navigateViews">
        <button v-for="(view, index) in views" :id="`feature-tab-${view.guide}`" :key="view.guide" type="button" role="tab" :aria-selected="activeView === index" :tabindex="activeView === index ? 0 : -1" :aria-controls="`feature-panel-${view.guide}`" @click="selectView(index)"><MockIcon :name="view.icon" />{{ copy.views[index][0] }}</button>
      </div>
      <div v-for="(view, index) in views" :id="`feature-panel-${view.guide}`" :key="view.guide" class="features-view" role="tabpanel" :aria-labelledby="`feature-tab-${view.guide}`" :hidden="activeView !== index">
        <template v-if="activeView === index">
          <div class="features-view-copy">
            <h2>{{ currentCopy[1] }}</h2>
            <p class="features-description">{{ currentCopy[2] }}</p>
            <ul class="features-tool-points"><li v-for="point in copy.points[activeView]" :key="point"><MockIcon name="check" />{{ point }}</li></ul>
            <p class="features-note">{{ copy.notes[activeView] }}</p>
            <a class="features-text-link" :href="local(`/docs/${current.guide}`)">{{ copy.learn }} <span aria-hidden="true">→</span></a>
          </div>
          <figure class="features-phone">
            <a :href="originalSource" target="_blank" rel="noopener" :aria-label="`${copy.open}: ${currentCopy[0]}`"><img :key="current.image" :src="imageSource" :alt="`${copy.docSource} · ${currentCopy[0]}`" width="720" height="1584" decoding="async" fetchpriority="high"></a>
            <figcaption>{{ copy.open }} <span aria-hidden="true">↗</span></figcaption>
          </figure>
        </template>
      </div>
    </section>

    <section class="features-host" aria-labelledby="features-host-title">
      <div class="features-host-copy">
        <p class="features-eyebrow">NimoteHost</p>
        <h2 id="features-host-title">{{ copy.host.title }}</h2>
        <p class="features-description">{{ copy.host.intro }}</p>
        <ol class="features-host-steps"><li v-for="(step, index) in copy.host.steps" :key="step"><span aria-hidden="true">0{{ index + 1 }}</span>{{ step }}</li></ol>
        <a class="features-text-link" :href="local('/docs/host')">{{ copy.host.link }} <span aria-hidden="true">→</span></a>
        <p class="features-note">{{ copy.host.note }}</p>
      </div>
      <figure class="features-host-image">
        <a :href="hostOriginal" target="_blank" rel="noopener" :aria-label="`${copy.open}: NimoteHost`"><img :src="hostSource" :alt="copy.host.caption" width="720" height="1584" loading="lazy" decoding="async"></a>
        <figcaption>{{ copy.host.caption }}</figcaption>
      </figure>
    </section>

    <section class="features-extensions" aria-labelledby="features-extensions-title">
      <h2 id="features-extensions-title">{{ copy.extensions }}</h2>
      <div class="features-extension-grid">
        <article v-for="(environment, index) in environments" :key="environment.guide">
          <MockIcon :name="environment.icon" />
          <p class="features-tag">{{ copy.cards[index][2] }}</p>
          <h3>{{ copy.cards[index][0] }}</h3>
          <p class="features-description">{{ copy.cards[index][1] }}</p>
          <p class="features-note">{{ copy.cardNotes[index] }}</p>
          <a class="features-text-link" :href="local(`/docs/${environment.guide}`)">{{ copy.learn }} <span aria-hidden="true">→</span></a>
        </article>
      </div>
    </section>

    <section class="features-details" aria-labelledby="features-details-title">
      <h2 id="features-details-title">{{ copy.details }}</h2>
      <div class="product-reference features-docker">
        <details>
          <summary>{{ copy.docker.title }}</summary>
          <p>{{ copy.docker.intro }}</p>
          <ul><li v-for="point in copy.docker.points" :key="point">{{ point }}</li></ul>
          <a class="features-text-link" :href="local('/docs/docker')">{{ copy.learn }} <span aria-hidden="true">→</span></a>
        </details>
      </div>
      <slot />
    </section>

    <section class="features-closing" aria-labelledby="features-closing-title">
      <p class="features-eyebrow">{{ copy.availability }}</p>
      <h2 id="features-closing-title">{{ copy.closingTitle }}</h2>
      <p class="features-description">{{ copy.closingIntro }}</p>
      <div class="features-actions">
        <a class="features-primary" :href="local('/download')">{{ copy.download }} <span aria-hidden="true">↗</span></a>
        <a :href="local('/docs/quick-start')">{{ copy.quickStart }} <span aria-hidden="true">→</span></a>
      </div>
    </section>
  </div>
</template>
