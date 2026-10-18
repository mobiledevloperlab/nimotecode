<script setup lang="ts">
import { computed, ref } from 'vue'
import { competitors, featureDetail, featureRows, REVIEW_DATE, statusLabels, statusSymbols, type Locale } from '../data/mobileDevelopmentCompetitors'

const props = withDefaults(defineProps<{lang?:Locale}>(),{lang:'en'})
const zh = computed(()=>props.lang==='zh')
const nimote = competitors.find(product=>product.id==='nimotecode')!
const alternatives = competitors.filter(product=>product.id!=='nimotecode')
const selectedId = ref('termius')
const selected = computed(()=>alternatives.find(product=>product.id===selectedId.value)!)
const featureKeys = ['nativeSsh','sshIde','nativeEditor','gitUi','builtInAgent','androidLinux']
const rows = featureRows.filter(row=>featureKeys.includes(row.key))
const compareUrl = computed(()=>zh.value?'/zh/compare/mobile-ai-development-tools':'/compare/mobile-ai-development-tools')
</script>

<template>
  <div class="home-tool-comparison">
    <div class="home-tool-comparison-picker">
      <p>{{ zh?'NimoteCode 与一款工具并排查看；功能条件来自完整对比资料。':'Compare NimoteCode with one tool; conditions come from the full evidence matrix.' }}</p>
      <label><span>{{ zh?'选择工具':'Compare with' }}</span><select v-model="selectedId"><option v-for="product in alternatives" :key="product.id" :value="product.id">{{ product.name }}</option></select></label>
    </div>
    <div class="home-tool-comparison-rows">
      <article v-for="row in rows" :key="row.key" class="home-tool-comparison-row">
        <h3>{{ row.label[lang] }}</h3>
        <div class="home-tool-comparison-results">
          <div v-for="product in [nimote,selected]" :key="product.id" class="home-tool-comparison-result" :class="{'is-nimote':product.id==='nimotecode'}">
            <div class="home-tool-comparison-result-head"><strong>{{ product.name }}</strong><span class="home-tool-status" :class="`status-${product.features[row.key].status.replaceAll(' ','-')}`"><span aria-hidden="true">{{ statusSymbols[product.features[row.key].status] }}</span>{{ statusLabels[lang][product.features[row.key].status] }}</span></div>
            <p v-if="featureDetail(product.features[row.key],lang)">{{ featureDetail(product.features[row.key],lang) }}</p>
            <a v-if="product.features[row.key].evidence" :href="product.features[row.key].evidence!.url" target="_blank" rel="noopener noreferrer">{{ zh?'官方依据':'Evidence' }} ↗</a>
          </div>
        </div>
      </article>
    </div>
    <p class="home-tool-comparison-note">{{ zh?'资料核实':'Evidence reviewed' }}: {{ REVIEW_DATE }} · {{ zh?'问号表示未核实；查看更多产品、条件与来源。':'A question mark means unverified. See all products, conditions and sources.' }} <a :href="compareUrl">{{ zh?'查看完整对比':'See full comparison' }} <span aria-hidden="true">→</span></a></p>
  </div>
</template>
