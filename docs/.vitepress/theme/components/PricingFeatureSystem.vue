<script setup lang="ts">
import { computed } from 'vue'
import translations from '../i18n/pricing-features.json'

type Locale = keyof typeof translations

const props = defineProps<{
  lang?: Locale
  mode?: 'full' | 'preview'
}>()

const copy = computed(() => translations[props.lang || 'en'] || translations.en)
const showFeatures = computed(() => props.mode !== 'preview')
const trialCopy = computed(() => copy.value.pricing.trial)
</script>

<template>
  <div class="pricing-feature-system">
    <section class="home-page-section dense pf-pricing-section">
      <div class="home-page-section-head home-page-section-head-centered">
        <p class="home-page-eyebrow">{{ copy.pricing.eyebrow }}</p>
        <p class="home-page-section-copy">{{ copy.pricing.summary }}</p>
        <p class="pf-campaign-notice"><strong>{{ copy.pricing.earlyAccessDeadline }}</strong></p>
      </div>

      <div class="pf-pricing-grid">
        <article
          v-for="plan in copy.pricing.plans"
          :key="plan.name"
          class="pf-plan-card"
          :class="{ 'is-featured': plan.highlight }"
        >
          <div class="pf-plan-topline">
            <h3>{{ plan.highlight ? plan.name : copy.features.freeTitle }}</h3>
            <span v-if="plan.badge">{{ plan.badge }}</span>
          </div>
          <div class="pf-price-row">
            <strong>{{ plan.price }}</strong>
            <span>{{ plan.period }}</span>
          </div>
          <p class="pf-plan-summary">{{ plan.highlight ? plan.summary : copy.features.freeDescription }}</p>
          <a :href="plan.link" class="home-page-btn" :class="plan.highlight ? 'primary' : 'secondary'">
            {{ plan.cta }}
          </a>
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
    </section>

    <section v-if="showFeatures" class="home-page-section dense alt pf-features-section" aria-labelledby="pro-benefits-title">
      <div class="home-page-section-head home-page-section-head-centered">
        <h2 id="pro-benefits-title" class="home-page-section-title">{{ copy.features.proTitle }}</h2>
      </div>
      <div class="pf-feature-grid">
        <article v-for="group in copy.features.groups" :key="group.id" class="pf-feature-card" :data-benefit="group.id">
          <div class="pf-card-head">
            <h3>{{ group.name }}</h3>
          </div>
          <p>{{ group.description }}</p>
          <p v-if="'note' in group" class="pf-benefit-note">{{ group.note }}</p>
        </article>
      </div>
    </section>
  </div>
</template>
