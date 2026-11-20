<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useData, withBase } from 'vitepress'
import { products, rows, reviewedAtUtc, reviewWindowHours } from '../data/majorCompetitors.mjs'
import translations from '../i18n/product-comparison.json'
import '../styles/product-comparison.css'

const props = defineProps({ full: Boolean })
const { lang } = useData()
const locale = computed(() => lang.value.split('-')[0] in translations ? lang.value.split('-')[0] : 'en')
const copy = computed(() => translations[locale.value])
const evidenceLocale = computed(() => locale.value === 'zh' ? 'zh' : 'en')
const selectedIndex = ref(3)
const stale = ref(false)
let freshnessTimer
onMounted(() => {
  const checkFreshness = () => { stale.value = Date.now() - Date.parse(reviewedAtUtc) > reviewWindowHours * 3600000 }
  checkFreshness()
  freshnessTimer = setInterval(checkFreshness, 60000)
})
onUnmounted(() => clearInterval(freshnessTimer))
const capabilities = [
  'Graphical code editor', 'Graphical Git operations', 'On-device Linux environment', 'Mosh',
  'Develop on your own computer', 'Persistent terminal sessions',
  'Agent session recovery and approvals', 'Project task inbox'
]
const comparisonRows = computed(() => props.full ? rows : capabilities.map(key => rows.find(([label]) => label.en === key)))
const labelFor = label => copy.value.labels?.[capabilities.indexOf(label.en)] || label[evidenceLocale.value]
const kind = cell => cell.text.en.startsWith('✅') ? 'supported' : cell.text.en.startsWith('◐') ? 'conditional' : 'unconfirmed'
const suffix = cell => cell.text[evidenceLocale.value].replace(/^[✅◐—]\s*/, '')
const fullComparison = computed(() => withBase(`${evidenceLocale.value === 'zh' ? '/zh' : ''}/compare/mobile-ai-development-tools`))
const evidenceUrl = url => url.replace('https://nimotecode.com/docs/', `https://nimotecode.com/${locale.value === 'en' ? '' : `${locale.value}/`}docs/`)
const status = cell => {
  const value = cell.text[evidenceLocale.value]
  // Describe statuses in the current language for screen readers and link titles.
  return `${value} · ${value.startsWith('✅') ? copy.value.supported : value.startsWith('◐') ? copy.value.conditional : copy.value.unconfirmed} · ${cell.evidence?.summary[evidenceLocale.value] || copy.value.unknownNote}`
}
</script>

<template>
  <section id="product-comparison" class="product-comparison" :class="{ 'product-comparison-full': full }" aria-labelledby="product-comparison-title">
    <header class="product-comparison-heading">
      <p class="product-comparison-eyebrow">{{ copy.eyebrow }}</p>
      <h2 id="product-comparison-title">{{ copy.title }}</h2>
      <p class="product-comparison-intro">{{ copy.intro }}</p>
    </header>
    <div class="product-comparison-picker">
      <span class="product-comparison-picker-label">{{ copy.select }}</span>
      <div class="product-comparison-options" role="group" :aria-label="copy.select">
        <button v-for="(product, index) in products.slice(1)" :key="product[0]" type="button" :aria-pressed="selectedIndex === index + 1" @click="selectedIndex = index + 1">{{ product[0] }}</button>
      </div>
    </div>
    <div class="product-comparison-board">
      <table class="product-comparison-table" aria-labelledby="product-comparison-title" aria-describedby="product-comparison-legend">
        <thead><tr>
          <th scope="col"><span class="product-comparison-column-label">{{ copy.capability }}</span></th>
          <th scope="col"><span class="product-comparison-brand">NimoteCode</span><small>{{ copy.workspace }}</small></th>
          <th scope="col" aria-live="polite"><span class="product-comparison-brand">{{ products[selectedIndex][0] }}</span><small>{{ copy.alternative }}</small></th>
        </tr></thead>
        <tbody>
          <tr v-for="([label, cells]) in comparisonRows" :key="label.en">
            <th scope="row">{{ labelFor(label) }}</th>
            <td v-for="productIndex in [0, selectedIndex]" :key="productIndex">
              <component :is="cells[productIndex].url ? 'a' : 'span'" class="product-comparison-status" :class="`is-${kind(cells[productIndex])}`" :href="cells[productIndex].url ? evidenceUrl(cells[productIndex].url) : undefined" :title="status(cells[productIndex])" :aria-label="`${products[productIndex][0]}: ${labelFor(label)} — ${status(cells[productIndex])}`">
                <span class="product-comparison-mark" aria-hidden="true">{{ kind(cells[productIndex]) === 'supported' ? '✓' : kind(cells[productIndex]) === 'conditional' ? '◐' : '—' }}</span>
                <span>{{ copy.short[kind(cells[productIndex])] }}<small v-if="suffix(cells[productIndex])">{{ suffix(cells[productIndex]) }}</small></span>
              </component>
            </td>
          </tr>
        </tbody>
      </table>
      <div id="product-comparison-legend" class="product-comparison-legend">
        <span><i class="is-supported" aria-hidden="true">✓</i>{{ copy.supported }}</span>
        <span><i aria-hidden="true">◐</i>{{ copy.conditional }}</span>
        <span><i aria-hidden="true">—</i>{{ copy.unconfirmed }}</span>
      </div>
    </div>
    <details class="product-comparison-method">
      <summary>{{ copy.conditions }}</summary>
      <p>{{ copy.note }}</p>
      <p>{{ copy.requirements }}</p>
    </details>
    <details class="product-comparison-method product-comparison-evidence">
      <summary>{{ copy.evidence }}</summary>
      <dl>
        <div v-for="([label, cells]) in comparisonRows" :key="label.en">
          <dt>{{ labelFor(label) }}</dt>
          <dd v-for="productIndex in [0, selectedIndex]" :key="productIndex">
            <strong>{{ products[productIndex][0] }}</strong>
            <p>{{ cells[productIndex].evidence?.summary[evidenceLocale] || copy.unknownNote }}</p>
            <a v-if="cells[productIndex].url" :href="evidenceUrl(cells[productIndex].url)">{{ copy.conditions }}</a>
          </dd>
        </div>
      </dl>
    </details>
    <p class="product-comparison-freshness" :class="{ 'is-stale': stale }" role="status">{{ stale ? copy.stale : copy.snapshot }}</p>
    <footer class="product-comparison-footer">
      <p>{{ copy.reviewed }} <time :datetime="reviewedAtUtc">{{ reviewedAtUtc.replace('T', ' ').replace('Z', '') }}</time> · UTC</p>
      <a v-if="!full" class="product-comparison-link" :href="fullComparison">{{ copy.full }}</a>
      <a v-else class="product-comparison-link" :href="withBase(`${locale === 'en' ? '' : `/${locale}`}/docs/host`)">{{ copy.hostGuide }}</a>
    </footer>
  </section>
</template>
