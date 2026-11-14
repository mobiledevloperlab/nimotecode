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
const blogRoot = computed(() => locale.value === 'zh' ? '/zh/blog/' : '/blog/')
const blogSlugs = ['best-ssh-clients', 'can-an-ai-agent-really-code-from-a-phone', 'tailscale-ssh-android-mac-linux']
const android = 'https://play.google.com/store/apps/details?id=com.nimote.nimotecode&utm_source=nimotecode&utm_medium=website&utm_campaign=homepage'
const ios = 'https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253'
const resourceLinks = computed(() => [local('/docs/quick-start'), local('/use-cases/'), local('/resources/')])
// Explicit codec hints let browsers without H.264 select the WebM fallback.
const demoMimeTypes = ['video/mp4; codecs="avc1.64001F"', 'video/mp4; codecs="avc1.640032, mp4a.40.2"']
const activeDemo = ref(0)
const demoOpen = ref(false)
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
          <p class="product-eyebrow"><span class="product-live-dot" aria-hidden="true"></span>{{ copy.badge }}</p>
          <h1>{{ copy.title }} <span>{{ copy.accent }}</span></h1>
          <p class="product-intro">{{ copy.intro }}</p>
          <div class="product-actions">
            <a class="product-button" :href="android" target="_blank" rel="noopener noreferrer"><MockIcon name="android" />{{ copy.android }}</a>
            <a class="product-button product-button-secondary" :href="ios" target="_blank" rel="noopener noreferrer"><MockIcon name="apple" />{{ copy.ios }}</a>
          </div>
          <p class="product-start-note">{{ copy.startNote }}</p>
          <div class="product-hero-links"><a class="product-demo-link" href="#product-demo" @click="demoOpen = true"><span class="product-play" aria-hidden="true">▶</span>{{ copy.watch }}<span aria-hidden="true">↓</span></a></div>
        </div>
        <figure class="product-showcase" :aria-label="copy.illustration">
          <div class="product-showcase-heading"><span><span class="product-live-dot" aria-hidden="true"></span>NimoteCode</span><span>{{ copy.illustration }}</span><a href="#workflow-title">{{ copy.allFeatures }} <span aria-hidden="true">↓</span></a></div>
          <AppMockup />
          <figcaption><span class="product-caption-line" aria-hidden="true"></span>{{ copy.caption }}</figcaption>
        </figure>
      </div>
      <div class="product-container">
        <div class="product-facts">
          <span class="product-platforms">{{ copy.available }}</span>
          <span v-for="(fact, index) in copy.facts" :key="fact"><MockIcon :name="['cloud', 'terminal', 'spark'][index]" />{{ fact }}</span>
        </div>
      </div>
    </section>

    <section class="product-container product-section" aria-labelledby="workflow-title">
      <WorkspaceModes />
    </section>

    <section id="product-demo" class="product-demo-section" aria-labelledby="demo-title">
      <div class="product-container product-section">
        <div class="product-demo-heading"><p class="product-eyebrow">{{ copy.demoLabel }}</p><h2 id="demo-title">{{ copy.demoTitle }}</h2><p>{{ copy.demoCopy }}</p></div>
        <details class="product-demo-disclosure" :open="demoOpen" @toggle="demoOpen = ($event.target as HTMLDetailsElement).open">
          <summary><span class="product-play" aria-hidden="true">▶</span>{{ copy.watch }}<span class="product-disclosure-plus" aria-hidden="true">+</span></summary>
        <div v-if="demoOpen" class="product-demo-panel">
          <div class="product-demo-tabs" role="group" :aria-label="copy.demoLabel"><button v-for="(tab, index) in copy.demoTabs" :key="tab" type="button" :aria-pressed="activeDemo === index" aria-controls="demo-player" @click="selectDemo(index)"><MockIcon :name="index === 0 ? 'spark' : 'code'" />{{ tab }}</button></div>
          <div id="demo-player" class="product-demo-stage" :class="{ 'is-portrait': activeDemo === 0 }">
            <video :key="activeDemo" ref="demoVideo" controls playsinline preload="none" :poster="activeDemo === 0 ? '/videos/nimotecode-poster.jpg' : '/videos/workspace-demo-poster.jpg'" :aria-label="copy.demoTabs[activeDemo]"><source :src="activeDemo === 0 ? '/videos/nimotecode.mp4' : '/videos/pad_workflow.mp4'" :type="demoMimeTypes[activeDemo]"><source :src="activeDemo === 0 ? '/videos/ai-agent-demo.webm' : '/videos/workspace-demo.webm'" type="video/webm"><a :href="activeDemo === 0 ? '/videos/nimotecode.mp4' : '/videos/pad_workflow.mp4'">{{ copy.watch }}</a></video>
          </div>
          <div class="product-demo-footer"><span>{{ copy.caption }}</span><a class="product-text-link" :href="local('/use-cases/')">{{ copy.resources[1][0] }}<span aria-hidden="true">→</span></a></div>
        </div>
        </details>
      </div>
    </section>

    <section class="product-container product-secondary" :aria-label="copy.capabilityTitle">
      <details class="product-technical-details">
        <summary>{{ copy.capabilityDetails }}<span class="product-disclosure-plus" aria-hidden="true">+</span></summary>
      <div class="product-capabilities">
        <div class="product-capability-heading"><h3>{{ copy.capabilityTitle }}</h3><a class="product-text-link" :href="local('/features')">{{ copy.allFeatures }}<span aria-hidden="true">→</span></a></div>
        <div class="product-capability-grid"><a v-for="(capability, index) in copy.capabilities" :key="capability[0]" :href="local(`/docs/${capabilityLinks[index]}`)"><MockIcon :name="['branch', 'code', 'search', 'globe', 'terminal', 'plus'][index]" /><div><h3>{{ capability[0] }}</h3><p>{{ capability[1] }}</p></div></a></div>
        <p class="product-capability-note">{{ copy.capabilityNote }}</p>
        <p class="product-byok-note">{{ copy.byok }}</p>
        <div class="product-access-links"><a class="product-text-link" :href="local('/pro')">{{ copy.planLink }}<span aria-hidden="true">→</span></a><a class="product-release" :href="local(`/releases/${latestRelease.version}`)"><span>v{{ latestRelease.version }}</span>{{ copy.release }} →</a></div>
        <p class="product-deadline"><a :href="local('/pro')">{{ copy.earlyAccessDeadline }} →</a></p>
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

    <section class="product-container product-blog" aria-labelledby="blog-title">
      <div class="product-blog-heading"><h2 id="blog-title">{{ copy.blogHeading }}</h2><a class="product-text-link" :href="blogRoot">{{ copy.blogAll }}<span aria-hidden="true">→</span></a></div>
      <div class="product-blog-grid">
        <a v-for="(article, index) in copy.blogArticles" :key="blogSlugs[index]" class="product-blog-card" :href="`${blogRoot}${blogSlugs[index]}`">
          <p class="product-eyebrow">{{ article[0] }}</p><h3>{{ article[1] }}</h3><p class="product-blog-summary">{{ article[2] }}</p><span class="product-blog-arrow" aria-hidden="true">↗</span>
        </a>
      </div>
    </section>

    <nav class="product-container product-explore-links" :aria-label="copy.resourcesTitle">
      <a v-for="(resource, index) in copy.resources" :key="resource[0]" :href="resourceLinks[index]">{{ resource[0] }} <span aria-hidden="true">→</span></a>
      <a :href="locale === 'zh' ? '/zh/compare/mobile-ai-development-tools' : '/compare/mobile-ai-development-tools'" :hreflang="locale === 'zh' ? 'zh' : 'en'">{{ copy.fullComparisonLink }} <span aria-hidden="true">→</span></a>
      <a href="https://discord.gg/tTxbpqYmhR" target="_blank" rel="noopener noreferrer">Discord <span aria-hidden="true">↗</span></a>
    </nav>

    <section class="product-container product-download-section" aria-labelledby="download-title">
      <div class="product-download"><img src="/app_icon.png" width="64" height="64" alt="" loading="lazy" decoding="async" /><h2 id="download-title">{{ copy.ctaTitle }}</h2><p>{{ copy.ctaCopy }}</p><div class="product-actions"><a class="product-button" :href="android" target="_blank" rel="noopener noreferrer"><MockIcon name="android" />{{ copy.android }}</a><a class="product-button product-button-secondary" :href="ios" target="_blank" rel="noopener noreferrer"><MockIcon name="apple" />{{ copy.ios }}</a></div><p class="product-start-note"><span>{{ copy.startNote }}</span><span>{{ copy.byokLabel }}</span></p><a class="product-text-link" :href="local('/download')">{{ copy.allDownloads }}<span aria-hidden="true">→</span></a></div>
    </section>
  </div>
</template>
