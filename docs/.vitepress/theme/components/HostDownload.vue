<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import translations from '../i18n/host-download.json'
import '../styles/host-download.css'

const { lang } = useData()
const locale = computed(() => {
  const key = lang.value.split('-')[0]
  return key in translations ? key as keyof typeof translations : 'en'
})
const installPage = computed(() => `${locale.value === 'en' ? '' : '/' + locale.value}/docs/host/getting-started`)
const copy = computed(() => translations[locale.value])
const releases = 'https://github.com/mobiledevloperlab/nimotehost/releases'
const latest = `${releases}/latest`
</script>

<template>
  <section class="host-download" aria-labelledby="download-nimotehost">
    <div class="host-download-main">
      <p class="host-download-label">{{ copy.label }}</p>
      <a class="host-download-primary" :href="latest"><span aria-hidden="true">↓</span>{{ copy.download }}</a>
      <p class="host-download-intro">{{ copy.intro }}</p>
      <p class="host-download-hint">{{ copy.hint }}</p>
      <div class="host-download-shortcuts"><a :href="installPage.replace('getting-started', 'compatibility')">{{ copy.compatibility }}</a><a :href="`${installPage}#host-install`">{{ copy.install }}</a><a :href="`${installPage}#host-source`">{{ copy.source }}</a></div>
    </div>
    <div class="host-download-platforms">
      <article v-for="platform in copy.platforms" :key="platform[0]">
        <h3>{{ platform[0] }}</h3><p>{{ platform[1] }}</p>
        <a :href="latest">{{ platform[2] }} <span aria-hidden="true">↗</span></a>
      </article>
    </div>
    <div class="host-download-editions"><p>{{ copy.desktop }}</p><p>{{ copy.cli }}</p></div>
    <ol class="host-download-steps"><li v-for="(step, index) in copy.steps" :key="step"><span>{{ index + 1 }}</span>{{ step }}</li></ol>
    <p class="host-download-note">{{ copy.note }} <a :href="releases">{{ copy.all }} →</a></p>
  </section>
</template>
