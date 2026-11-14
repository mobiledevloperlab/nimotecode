<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import MockIcon from './MockIcon.vue'
import translations from '../i18n/home.json'
import '../styles/workspace-modes.css'

const { lang } = useData()
const locale = computed(() => {
  const key = lang.value.split('-')[0]
  return key in translations ? key as keyof typeof translations : 'en'
})
const copy = computed(() => translations[locale.value])
</script>

<template>
  <div class="workspace-modes">
    <div class="workspace-modes-heading">
      <div><p class="workspace-modes-eyebrow">{{ copy.eyebrow }}</p><h2 id="workflow-title">{{ copy.heading }}</h2></div>
      <p>{{ copy.description }}</p>
    </div>
    <div class="workspace-mode-descriptions">
      <article v-for="(feature, index) in copy.features" :key="feature[0]" class="workspace-mode-description">
        <MockIcon :name="['code', 'terminal', 'spark'][index]" />
        <h3>{{ feature[0] }}</h3>
        <p>{{ copy.modeSummaries[index] }}</p>
      </article>
    </div>
  </div>
</template>
