<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData } from 'vitepress'
import AppMockup from './AppMockup.vue'
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
const featureLinks = ['/docs/ssh', '/docs/source-control', '/docs/ai']
const resourceLinks = computed(() => [local('/docs/quick-start'), local('/use-cases/'), local('/resources/')])
// Explicit codec hints let browsers without H.264 select the WebM fallback.
const demoMimeTypes = ['video/mp4; codecs="avc1.64001F"', 'video/mp4; codecs="avc1.640032, mp4a.40.2"']
const activeFeature = ref(0)
const activeDemo = ref(0)
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
          <p class="product-deadline"><a :href="local('/pro')">{{ copy.earlyAccessDeadline }} <span aria-hidden="true">→</span></a></p>
          <div class="product-actions">
            <a class="product-button" :href="android" target="_blank" rel="noopener noreferrer"><MockIcon name="android" />{{ copy.android }}</a>
            <a class="product-button product-button-secondary" :href="ios" target="_blank" rel="noopener noreferrer"><MockIcon name="apple" />{{ copy.ios }}</a>
          </div>
          <p class="product-start-note"><span>{{ copy.startNote }}</span><span>{{ copy.byokLabel }}</span></p>
          <div class="product-hero-links"><a class="product-start-link" :href="local('/docs/quick-start')">{{ copy.startLink }} <span aria-hidden="true">→</span></a><a class="product-demo-link" href="#product-demo"><span class="product-play" aria-hidden="true">▶</span>{{ copy.watch }}<span aria-hidden="true">↗</span></a>
          <a class="product-release" :href="local(`/releases/${latestRelease.version}`)"><span>v{{ latestRelease.version }}</span>{{ copy.release }}<span aria-hidden="true">→</span></a></div>
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

    <section id="product-demo" class="product-demo-section" aria-labelledby="demo-title">
      <div class="product-container product-section">
        <div class="product-demo-heading"><p class="product-eyebrow">{{ copy.demoLabel }}</p><h2 id="demo-title">{{ copy.demoTitle }}</h2><p>{{ copy.demoCopy }}</p></div>
        <div class="product-demo-panel">
          <div class="product-demo-tabs" role="group" :aria-label="copy.demoLabel"><button v-for="(tab, index) in copy.demoTabs" :key="tab" type="button" :aria-pressed="activeDemo === index" aria-controls="demo-player" @click="selectDemo(index)"><MockIcon :name="index === 0 ? 'spark' : 'code'" />{{ tab }}</button></div>
          <div id="demo-player" class="product-demo-stage" :class="{ 'is-portrait': activeDemo === 0 }">
            <video :key="activeDemo" ref="demoVideo" controls playsinline preload="none" :poster="activeDemo === 0 ? '/videos/nimotecode-poster.jpg' : '/videos/workspace-demo-poster.jpg'" :aria-label="copy.demoTabs[activeDemo]"><source :src="activeDemo === 0 ? '/videos/nimotecode.mp4' : '/videos/pad_workflow.mp4'" :type="demoMimeTypes[activeDemo]"><source :src="activeDemo === 0 ? '/videos/ai-agent-demo.webm' : '/videos/workspace-demo.webm'" type="video/webm"><a :href="activeDemo === 0 ? '/videos/nimotecode.mp4' : '/videos/pad_workflow.mp4'">{{ copy.watch }}</a></video>
            <div v-if="activeDemo === 0" class="product-demo-guide"><h3>{{ copy.demoContext }}</h3><ol><li v-for="(step, index) in copy.demoSteps" :key="step"><span>0{{ index + 1 }}</span><div><strong>{{ step }}</strong><p>{{ copy.demoDetails[index] }}</p></div></li></ol></div>
          </div>
          <div class="product-demo-footer"><span>{{ copy.caption }}</span><a class="product-text-link" :href="local('/use-cases/')">{{ copy.resources[1][0] }}<span aria-hidden="true">→</span></a></div>
        </div>
      </div>
    </section>

    <section class="product-container product-section" aria-labelledby="workflow-title">
      <div class="product-section-heading">
        <div><p class="product-eyebrow">{{ copy.eyebrow }}</p><h2 id="workflow-title">{{ copy.heading }}</h2></div>
        <p class="product-section-description">{{ copy.description }}</p>
      </div>
      <div class="product-workflow-tabs" role="group" :aria-label="copy.eyebrow">
        <button v-for="(feature, index) in copy.features" :key="feature[0]" type="button" :aria-pressed="activeFeature === index" :aria-controls="`workflow-panel-${index}`" @click="activeFeature = index"><MockIcon :name="['cloud', 'code', 'spark'][index]" /><span>{{ feature[0] }}</span><span class="product-tab-number" aria-hidden="true">0{{ index + 1 }}</span></button>
      </div>
      <div class="product-feature-grid">
        <article v-for="(feature, index) in copy.features" :key="feature[0]" v-show="activeFeature === index" :id="`workflow-panel-${index}`" class="product-feature">
          <div class="product-feature-visual" aria-hidden="true">
            <template v-if="index === 0">
              <div class="product-preview-bar"><MockIcon name="folder" /><span>WORKSPACES</span><MockIcon name="plus" /></div>
              <div class="product-workspace-row"><span class="product-preview-icon"><MockIcon name="cloud" /></span><div><strong>production</strong><small>SSH · dev@192.168.1.8</small></div><i></i></div>
              <div class="product-workspace-row"><span class="product-preview-icon"><MockIcon name="folder" /></span><div><strong>my-project</strong><small>Local workspace</small></div><MockIcon name="down" /></div>
              <div class="product-preview-foot"><span class="product-live-dot"></span> Connected <span>main ↗</span></div>
            </template>
            <template v-else-if="index === 1">
              <div class="product-preview-bar"><MockIcon name="code" /><span>app.py</span><span>M</span></div>
              <div class="product-code-preview"><div><span>12</span><em>def</em> health_check():</div><div class="product-code-removed"><span>13</span>− &nbsp;return None</div><div class="product-code-added"><span>13</span>+ &nbsp;return {"ok": True}</div><div><span>14</span></div></div>
              <div class="product-preview-foot"><MockIcon name="terminal" /><span>pytest</span><b>8 passed</b></div>
            </template>
            <template v-else>
              <div class="product-preview-bar"><MockIcon name="spark" /><span>AGENT</span><span class="product-preview-chip">Plan → Run</span></div>
              <div class="product-ai-request">Review this change and run the tests.</div>
              <div class="product-ai-step"><MockIcon name="check" /> Read project context</div>
              <div class="product-ai-step"><MockIcon name="check" /> Review changes & run tests</div>
              <div class="product-preview-foot"><MockIcon name="check" /><span>Ready for your review</span></div>
            </template>
          </div>
          <div class="product-feature-body"><p class="product-eyebrow"><span>0{{ index + 1 }}</span>{{ feature[0] }}</p><h3>{{ feature[1] }}</h3><p>{{ feature[2] }}</p><a class="product-text-link" :href="local(featureLinks[index])">{{ feature[3] }}<span aria-hidden="true">→</span></a></div>
        </article>
      </div>
      <div class="product-capabilities">
        <div class="product-capability-heading"><h3>{{ copy.capabilityTitle }}</h3><a class="product-text-link" :href="local('/features')">{{ copy.allFeatures }}<span aria-hidden="true">→</span></a></div>
        <div class="product-capability-grid"><a v-for="(capability, index) in copy.capabilities" :key="capability[0]" :href="local(`/docs/${capabilityLinks[index]}`)"><MockIcon :name="['branch', 'code', 'search', 'globe', 'terminal', 'plus'][index]" /><div><h3>{{ capability[0] }}</h3><p>{{ capability[1] }}</p></div></a></div>
        <p class="product-capability-note">{{ copy.capabilityNote }}</p>
        <p class="product-byok-note">{{ copy.byok }}</p>
        <a class="product-text-link" :href="local('/pro')">{{ copy.planLink }}<span aria-hidden="true">→</span></a>
      </div>
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
          <blockquote lang="en" dir="ltr">{{ review.quote }}</blockquote>
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
