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
const freeLimits = [2, 10]
const presentation = computed(() => copy.value.features.presentation)
</script>

<template>
  <div class="pricing-feature-system">
    <section class="pf-pricing-section" :aria-label="copy.pricing.eyebrow">
      <div class="pf-pricing-grid">
        <article
          v-for="plan in copy.pricing.plans"
          :key="plan.name"
          class="pf-plan-card"
          :class="{ 'is-featured': plan.highlight }"
        >
          <div class="pf-plan-topline">
            <h2>{{ plan.highlight ? plan.name : copy.features.freeTitle }}</h2>
          </div>
          <div class="pf-price-row">
            <strong>{{ plan.price }}</strong>
            <span>{{ plan.period }}</span>
          </div>
          <template v-if="plan.highlight">
            <ul class="pf-highlights">
              <li v-for="group in copy.features.groups.slice(0, 3)" :key="group.id">{{ group.name }}</li>
            </ul>
          </template>
          <template v-else>
            <ul class="pf-free-limits">
              <li v-for="(label, index) in presentation.limits" :key="label">
                <strong>{{ freeLimits[index] }}</strong>
                <span>{{ label }}</span>
              </li>
            </ul>
            <ul class="pf-free-checklist">
              <li v-for="item in presentation.items" :key="item">{{ item }}</li>
            </ul>
          </template>
          <div class="pf-plan-actions">
            <a :href="plan.link" class="home-page-btn" :class="plan.highlight ? 'primary' : 'secondary'">{{ plan.cta }}</a>
            <a v-if="plan.highlight && showFeatures" class="pf-benefits-link" href="#pro-benefits-title">{{ presentation.benefits }} <span aria-hidden="true">↓</span></a>
          </div>
          <details class="pf-plan-details">
            <summary>{{ plan.highlight ? presentation.trialTerms : presentation.terms }}</summary>
            <p>{{ plan.highlight ? trialCopy.body : presentation.finePrint }}</p>
          </details>
        </article>
      </div>
      <p class="pf-trust-line">{{ copy.pricing.trustLine }}</p>
    </section>

    <section v-if="showFeatures" class="pf-features-section" aria-labelledby="pro-benefits-title">
      <div class="home-page-section-head home-page-section-head-centered">
        <h2 id="pro-benefits-title" class="home-page-section-title">{{ copy.features.proTitle }}</h2>
      </div>
      <div class="pf-feature-grid">
        <article v-for="group in copy.features.groups" :key="group.id" class="pf-feature-card" :data-benefit="group.id">
          <h3>{{ group.name }}</h3>
          <p>{{ group.description }}</p>
          <p v-if="'note' in group" class="pf-benefit-note">{{ group.note }}</p>
        </article>
      </div>
    </section>
  </div>
</template>
