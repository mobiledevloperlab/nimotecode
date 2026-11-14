<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData } from 'vitepress'
import AppMockup from './AppMockup.vue'
import WorkspaceModes from './WorkspaceModes.vue'
import MockIcon from './MockIcon.vue'
import reviewSnapshot from '../data/google-play-reviews.json'
import { latestRelease } from '../data/releases'
import translations from '../i18n/home.json'
import '../styles/product-home.css'

const { lang } = useData()
const locale = computed(() => {
  const key = lang.value.split('-')[0]
  return key in translations ? key as keyof typeof translations : 'en'
})
const copy = computed(() => translations[locale.value])
const local = (path: string) => `${locale.value === 'en' ? '' : `/${locale.value}`}${path}`
const android = 'https://play.google.com/store/apps/details?id=com.nimote.nimotecode&utm_source=nimotecode&utm_medium=website&utm_campaign=homepage'
const ios = 'https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253'
// Explicit codec hints let browsers without H.264 select the WebM fallback.
const demoMimeTypes = ['video/mp4; codecs="avc1.64001F"', 'video/mp4; codecs="avc1.640032, mp4a.40.2"']
const activeDemo = ref(0)
const demoOpen = ref(true)
const expandedReviews = ref<string[]>([])
function toggleReview(id: string) {
  expandedReviews.value = expandedReviews.value.includes(id) ? expandedReviews.value.filter(value => value !== id) : [...expandedReviews.value, id]
}
const demoVideo = ref<HTMLVideoElement>()
function selectDemo(index: number) {
  if (activeDemo.value === index) return
  demoVideo.value?.pause()
  activeDemo.value = index
}
const capabilityLinks = ['source-control', 'lsp', 'debug', 'editor', 'tasks', 'plugins']
const reviewUrl = (id: string) => `https://play.google.com/store/apps/details?id=com.nimote.nimotecode&reviewId=${encodeURIComponent(id)}`
const formatReviewDate = (date: string) => new Intl.DateTimeFormat(locale.value, { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`))
</script>

<template>
  <div class="product-home">
    <section class="product-hero">
      <div class="product-container product-hero-grid">
        <div class="product-hero-copy">
          <p class="product-announcement">
            <span class="product-announcement-badge">{{ copy.previewLabel }}</span>
            <strong>{{ copy.previewMessage }}</strong>
          </p>
          <div class="product-hero-heading">
            <p class="product-eyebrow">NimoteCode <span aria-hidden="true">/</span> {{ copy.badge }}</p>
            <h1>{{ copy.title }} <span>{{ copy.accent }}</span></h1>
          </div>
          <div class="product-hero-description">
            <p class="product-intro">{{ copy.intro }}</p>
            <div class="product-actions">
              <a class="product-button" :href="android" target="_blank" rel="noopener noreferrer"><MockIcon name="android" />{{ copy.android }}</a>
              <a class="product-button product-button-secondary" :href="ios" target="_blank" rel="noopener noreferrer"><MockIcon name="apple" />{{ copy.ios }}</a>
              <a class="product-demo-link" href="#product-demo" @click="demoOpen = true"><span class="product-play" aria-hidden="true">▶</span>{{ copy.watch }}</a>
            </div>
            <div class="product-hero-meta"><p class="product-start-note">{{ copy.startNote }}</p><p class="product-hero-tasks">{{ copy.heroTasks }}</p></div>
          </div>
        </div>
        <figure class="product-showcase" :aria-label="copy.illustration">
          <AppMockup />
          <figcaption><span>{{ copy.caption }}</span><span>{{ copy.available }}</span></figcaption>
        </figure>
      </div>
    </section>

    <section class="product-container product-section" aria-labelledby="workflow-title">
      <WorkspaceModes />
      <div id="product-demo" class="product-demo-section">
        <details class="product-demo-disclosure" :open="demoOpen" @toggle="demoOpen = ($event.target as HTMLDetailsElement).open">
          <summary class="product-demo-heading"><h2><span class="product-eyebrow">{{ copy.demoLabel }}</span><span class="product-demo-title">{{ copy.demoTitle }}</span></h2><span class="product-disclosure-icon" aria-hidden="true"><MockIcon name="down" /></span></summary>
        <div v-if="demoOpen" class="product-demo-panel">
          <p class="product-demo-copy">{{ copy.demoCopy }}</p>
          <div class="product-demo-toolbar"><div class="product-demo-tabs" role="group" :aria-label="copy.demoLabel"><button v-for="(tab, index) in copy.demoTabs" :key="tab" type="button" :aria-pressed="activeDemo === index" aria-controls="demo-player" @click="selectDemo(index)"><MockIcon :name="index === 0 ? 'spark' : 'code'" />{{ tab }}</button></div><a class="product-text-link product-demo-resource" :href="local('/use-cases/')">{{ copy.resources[1][0] }}<span aria-hidden="true">→</span></a></div>
          <div class="product-demo-layout" :class="{ 'is-workspace': activeDemo === 1 }">
          <div id="demo-player" class="product-demo-stage" :class="{ 'is-portrait': activeDemo === 0 }">
            <video :key="activeDemo" ref="demoVideo" controls playsinline preload="none" :poster="activeDemo === 0 ? '/videos/nimotecode-poster.jpg' : '/videos/workspace-demo-poster.jpg'" :aria-label="copy.demoTabs[activeDemo]"><source :src="activeDemo === 0 ? '/videos/nimotecode.mp4' : '/videos/pad_workflow.mp4'" :type="demoMimeTypes[activeDemo]"><source :src="activeDemo === 0 ? '/videos/ai-agent-demo.webm' : '/videos/workspace-demo.webm'" type="video/webm"><a :href="activeDemo === 0 ? '/videos/nimotecode.mp4' : '/videos/pad_workflow.mp4'">{{ copy.watch }}</a></video>
          </div>
          <div v-if="activeDemo === 0" class="product-demo-guide">
            <h3>{{ copy.demoContext }}</h3>
            <ol><li v-for="(step, index) in copy.demoSteps" :key="step"><span>{{ String(index + 1).padStart(2, '0') }}</span><div><strong>{{ step }}</strong><p>{{ copy.demoDetails[index] }}</p></div></li></ol>
            <p class="product-demo-access">{{ copy.modeNotes[2] }}</p>
          </div>
          </div>
        </div>
        </details>
      </div>
      <details class="product-technical-details" open>
        <summary>{{ copy.capabilityDetails }}<span class="product-disclosure-icon" aria-hidden="true"><MockIcon name="down" /></span></summary>
      <div class="product-capabilities">
        <div class="product-capability-heading"><h3>{{ copy.capabilityTitle }}</h3><a class="product-text-link" :href="local('/features')">{{ copy.allFeatures }}<span aria-hidden="true">→</span></a></div>
        <div class="product-capability-grid"><a v-for="(capability, index) in copy.capabilities" :key="capability[0]" :href="local(`/docs/${capabilityLinks[index]}`)"><MockIcon :name="['branch', 'code', 'search', 'globe', 'terminal', 'plus'][index]" /><div><h3>{{ capability[0] }}</h3><p>{{ capability[1] }}</p></div></a></div>
        <div class="product-access"><div class="product-access-conditions"><p class="product-capability-note">{{ copy.capabilityNote }}</p>
        <p class="product-byok-note">{{ copy.byok }}</p>
        </div><div class="product-access-actions"><div class="product-access-links"><a class="product-text-link" :href="local('/pro')">{{ copy.planLink }}<span aria-hidden="true">→</span></a><a class="product-release" :href="local(`/releases/${latestRelease.version}`)"><span>v{{ latestRelease.version }}</span>{{ copy.release }} →</a></div>
        <p class="product-deadline"><a :href="local('/pro')">{{ copy.earlyAccessDeadline }} →</a></p></div></div>
      </div>
      </details>
    </section>

    <section v-if="reviewSnapshot.reviews.length" class="product-container product-reviews" aria-labelledby="reviews-title">
      <div class="product-section-heading">
        <div><p class="product-eyebrow">Google Play</p><h2 id="reviews-title">{{ copy.reviewsTitle }}</h2></div>
        <a class="product-text-link" :href="reviewSnapshot.source" target="_blank" rel="noopener noreferrer">{{ copy.reviewsLink }} <span aria-hidden="true">↗</span></a>
      </div>
      <p class="product-reviews-note">{{ copy.reviewsNote }} · {{ copy.reviewsUpdated }} {{ formatReviewDate(reviewSnapshot.retrievedAt) }}</p>
      <div class="product-review-grid">
        <figure v-for="review in reviewSnapshot.reviews" :key="review.id" class="product-review-card">
          <div class="product-review-rating"><span aria-hidden="true">{{ '★'.repeat(review.rating) }}{{ '☆'.repeat(5 - review.rating) }}</span><span class="product-review-score">{{ review.rating }}/5 · Google Play</span></div>
          <div :id="`review-${review.id}`" class="product-review-content" :class="{ 'is-expanded': expandedReviews.includes(review.id) }"><blockquote lang="en" dir="ltr">{{ review.quote }}</blockquote></div>
          <button v-if="review.quote.length > 200" type="button" class="product-review-toggle" :aria-expanded="expandedReviews.includes(review.id)" :aria-controls="`review-${review.id}`" @click="toggleReview(review.id)">{{ expandedReviews.includes(review.id) ? copy.reviewCollapse : copy.reviewExpand }} <span aria-hidden="true">{{ expandedReviews.includes(review.id) ? '−' : '+' }}</span></button>
          <figcaption><div><strong>{{ review.author }}</strong><time :datetime="review.date">{{ formatReviewDate(review.date) }}</time></div><a :href="reviewUrl(review.id)" target="_blank" rel="noopener noreferrer">{{ copy.reviewOriginal }} <span aria-hidden="true">↗</span></a></figcaption>
        </figure>
      </div>
    </section>

    <section class="product-container product-getting-started" aria-labelledby="getting-started-title">
      <div class="product-section-heading"><div><p class="product-eyebrow">{{ copy.resources[0][0] }}</p><h2 id="getting-started-title">{{ copy.gettingStartedTitle }}</h2></div><a class="product-text-link" :href="local('/docs/quick-start')">{{ copy.startLink }} <span aria-hidden="true">↗</span></a></div>
      <p class="product-getting-started-copy">{{ copy.gettingStartedCopy }}</p>
      <ol class="product-start-steps"><li v-for="(step, index) in copy.gettingStartedSteps" :key="step[0]"><span>{{ String(index + 1).padStart(2, '0') }}</span><h3>{{ step[0] }}</h3><p>{{ step[1] }}</p></li></ol>
      <p class="product-start-condition">{{ copy.byokLabel }}</p>
    </section>
  </div>
</template>
