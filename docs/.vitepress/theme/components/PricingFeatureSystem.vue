<script setup lang="ts">
import { computed } from 'vue'
import translations from '../i18n/pricing-features.json'
import { productCopy } from '../product'

type Locale = keyof typeof translations

const props = defineProps<{
  lang?: Locale
  mode?: 'full' | 'preview'
}>()

const copy = computed(() => translations[props.lang || 'en'] || translations.en)
const showFeatures = computed(() => props.mode !== 'preview')
const language = computed(() => (props.lang === 'zh' ? 'zh' : 'en'))
const trialCopy = computed(() => copy.value.pricing.trial)
</script>

<template>
  <div class="pricing-feature-system">
    <section class="home-page-section dense pf-pricing-section">
      <div class="home-page-section-head home-page-section-head-centered">
        <p class="home-page-eyebrow">{{ copy.pricing.eyebrow }}</p>
        <h2 class="home-page-section-title">{{ copy.pricing.title }}</h2>
        <p class="home-page-section-copy">{{ copy.pricing.summary }}</p>
      </div>

      <div class="pf-pricing-grid">
        <article
          v-for="plan in copy.pricing.plans"
          :key="plan.name"
          class="pf-plan-card"
          :class="{ 'is-featured': plan.highlight }"
        >
          <div class="pf-plan-topline">
            <h3>{{ plan.name }}</h3>
            <span v-if="plan.badge">{{ plan.badge }}</span>
          </div>
          <div class="pf-price-row">
            <strong>{{ plan.price }}</strong>
            <span>{{ plan.period }}</span>
          </div>
          <p class="pf-plan-summary">{{ plan.summary }}</p>
          <a :href="plan.link" class="home-page-btn" :class="plan.highlight ? 'primary' : 'secondary'">
            {{ plan.cta }}
          </a>
          <ul class="pf-plan-features">
            <li v-for="feature in plan.features" :key="feature">{{ feature }}</li>
          </ul>
        </article>
      </div>

      <div class="pf-trial-banner">
        <div class="pf-trial-copy">
          <strong>{{ trialCopy.title }}</strong>
          <span>{{ trialCopy.body }}</span>
        </div>
        <a :href="trialCopy.link" class="home-page-btn primary">{{ trialCopy.cta }}</a>
      </div>

      <p class="pf-trust-line">{{ copy.pricing.trustLine }}</p>
      <p class="pf-trust-line">{{ productCopy[language].byok }}</p>
    </section>

    <section v-if="showFeatures" class="home-page-section dense alt pf-features-section">
      <div class="home-page-section-head home-page-section-head-centered">
        <p class="home-page-eyebrow">{{ copy.features.eyebrow }}</p>
        <h2 class="home-page-section-title">{{ copy.features.title }}</h2>
        <p class="home-page-section-copy">{{ copy.features.summary }}</p>
      </div>
      <div class="pf-feature-grid">
        <article v-for="group in copy.features.groups" :key="group.name" class="pf-feature-card">
          <div class="pf-card-head">
            <h3>{{ group.name }}</h3>
            <span>{{ group.badge }}</span>
          </div>
          <ul>
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
    </section>
  </div>
</template>
