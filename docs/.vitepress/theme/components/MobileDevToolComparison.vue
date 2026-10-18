<script setup lang="ts">
import { computed, ref } from 'vue'
import { accessNotes, competitors, featureDetail, featureRows, statusLabels, statusSymbols, type FeatureCell, type Locale } from '../data/mobileDevelopmentCompetitors'
const props = withDefaults(defineProps<{lang?:Locale}>(),{lang:'en'})
const zh = computed(()=>props.lang==='zh')
const groups = [...new Set(featureRows.map(row=>row.group.en))]
const rowsIn = (group:string)=>featureRows.filter(row=>row.group.en===group)
const nimote = competitors.find(product=>product.id==='nimotecode')!
const alternatives = competitors.filter(product=>product.id!=='nimotecode')
const firstId = ref('termius')
const secondId = ref('blink-shell')
const selectedProducts = computed(()=>[
  nimote,
  alternatives.find(product=>product.id===firstId.value)!,
  alternatives.find(product=>product.id===secondId.value)!
])
const detail = (cell:FeatureCell)=>featureDetail(cell,props.lang)
</script>

<template>
  <div class="cmp">
    <h2>{{ zh ? '如何选择' : 'Where each tool fits' }}</h2>
    <dl class="cmp-picks">
      <div v-for="product in competitors" :key="product.id" class="cmp-pick"><dt>{{ product.name }} · {{ product.positioning[lang] }}</dt><dd>{{ product.summary[lang] }} <small class="cmp-product-meta">{{ product.platforms }} · {{ zh && product.version==='Version not verified' ? '版本未核实' : product.version }}</small></dd></div>
    </dl>
    <h2>{{ zh ? '选择要对比的工具' : 'Choose tools to compare' }}</h2>
    <p>{{ zh ? 'NimoteCode 始终显示。手机可与一款竞品对照，较宽屏幕可同时查看两款。下方可展开全部产品的完整证据。' : 'NimoteCode stays in view. Compare one alternative on a phone or two on a wider screen. Full evidence for every product is available below.' }}</p>
    <div class="cmp-picker">
      <div class="cmp-picker-fixed"><span class="cmp-picker-kicker">{{ zh?'基准产品':'Baseline' }}</span><strong>NimoteCode</strong></div>
      <label class="cmp-picker-field"><span>{{ zh?'对比产品':'Compare with' }}</span><select v-model="firstId"><option v-for="product in alternatives" :key="product.id" :value="product.id" :disabled="product.id===secondId">{{ product.name }}</option></select></label>
      <label class="cmp-picker-field cmp-picker-extra"><span>{{ zh?'再选一款（宽屏）':'Second alternative (wide screens)' }}</span><select v-model="secondId"><option v-for="product in alternatives" :key="product.id" :value="product.id" :disabled="product.id===firstId">{{ product.name }}</option></select></label>
    </div>
    <h2>{{ zh ? '按工作流分类的功能对比' : 'Feature comparison by workflow' }}</h2>
    <p>{{ zh ? '每一行将同一能力并排对照。状态、限制和官方依据均来自共享数据；问号表示未核实，不代表不支持。' : 'Each row compares the same capability side by side. Status, limitations and evidence come from shared data; a question mark means unverified, not unsupported.' }}</p>
    <p class="cmp-methodology-reviewed">{{ zh ? '资料核实日期' : 'Evidence reviewed' }}: 2026-10-19 · {{ zh ? '版本或资料范围见产品表头' : 'Version or documentation scope appears in each product heading' }}</p>
    <div class="cmp-legend" role="group" :aria-label="zh?'状态说明':'Status legend'"><ul class="cmp-legend-list"><li v-for="(label,status) in statusLabels[lang]" :key="status"><span class="cmp-legend-symbol" aria-hidden="true">{{ statusSymbols[status] }}</span>{{ label }}</li></ul></div>
    <nav class="cmp-jump" :aria-label="zh?'功能分类导航':'Feature categories'">
      <a v-for="(group,index) in groups" :key="group" :href="`#cmp-group-${index}`">{{ featureRows.find(row=>row.group.en===group)?.group[lang] }}</a>
    </nav>
    <section v-for="(group,index) in groups" :id="`cmp-group-${index}`" :key="group" class="cmp-feature-section">
      <h3>{{ featureRows.find(row=>row.group.en===group)?.group[lang] }}</h3>
      <div class="cmp-compare-list">
        <article v-for="row in rowsIn(group)" :key="row.key" class="cmp-compare-row">
          <h4>{{ row.label[lang] }}</h4>
          <div v-for="(product,productIndex) in selectedProducts" :key="product.id" class="cmp-result" :class="{'cmp-result-nimote':productIndex===0,'cmp-result-extra':productIndex===2}">
              <div class="cmp-product-line">
                <span class="cmp-product-name">{{ product.name }}</span>
                <span class="cmp-status" :class="`cmp-status-${product.features[row.key].status.replaceAll(' ','-')}`"><span class="cmp-symbol" aria-hidden="true">{{ statusSymbols[product.features[row.key].status] }}</span>{{ statusLabels[lang][product.features[row.key].status] }}</span>
              </div>
              <p v-if="detail(product.features[row.key])" class="cmp-note">{{ detail(product.features[row.key]) }}</p>
              <a v-if="product.features[row.key].evidence" class="cmp-evidence" :href="product.features[row.key].evidence!.url" target="_blank" rel="noopener noreferrer" :title="product.features[row.key].evidence!.excerpt">{{ zh?'官方依据':'Evidence' }} ↗</a>
          </div>
        </article>
      </div>
    </section>
    <h2>{{ zh?'全部产品的逐项依据':'Full evidence for every product' }}</h2>
    <p>{{ zh?'选择产品展开其 23 项能力记录。展开内容已包含在页面的静态 HTML 中。':'Open a product to inspect all 23 feature records. These records are included in the static HTML.' }}</p>
    <div class="cmp-profiles">
      <details v-for="product in alternatives" :key="product.id" class="cmp-profile">
        <summary><strong>{{ product.name }}</strong><span>{{ product.positioning[lang] }}</span></summary>
        <div class="cmp-profile-body">
          <section v-for="group in groups" :key="group">
            <h3>{{ featureRows.find(row=>row.group.en===group)?.group[lang] }}</h3>
            <dl><div v-for="row in rowsIn(group)" :key="row.key"><dt>{{ row.label[lang] }}</dt><dd><span class="cmp-status">{{ statusSymbols[product.features[row.key].status] }} {{ statusLabels[lang][product.features[row.key].status] }}</span><span v-if="detail(product.features[row.key])" class="cmp-note">{{ detail(product.features[row.key]) }}</span><a v-if="product.features[row.key].evidence" class="cmp-evidence" :href="product.features[row.key].evidence!.url" target="_blank" rel="noopener noreferrer">{{ zh?'官方依据':'Evidence' }} ↗</a></dd></div></dl>
          </section>
        </div>
      </details>
    </div>
    <h2>{{ zh?'免费、付费与主机条件':'Free, paid and host requirements' }}</h2>
    <dl class="cmp-picks"><div v-for="product in competitors" :key="product.id" class="cmp-pick"><dt>{{ product.name }}</dt><dd>{{ accessNotes[product.id].note[lang] }} <a :href="accessNotes[product.id].evidence.url" target="_blank" rel="noopener noreferrer">{{ zh?'官方依据':'Official source' }} ↗</a></dd></div></dl>
    <h2>{{ zh?'方法与限制':'Method and limits' }}</h2>
    <p>{{ zh?'所有明确能力均链接到对应官方资料。CLI 能力、主机依赖、Pro 门槛和平台限制分别标注；未核实不代表不支持。SSH 重连、Mosh 漫游与主机进程持续运行分别比较。NimoteCode 外部授权目录可浏览编辑，但需原生路径的 Git、LSP、Debug、Tasks、文件监听和 Agent 工作流受限。':'Every affirmative claim links to a specific first-party source. CLI access, host setup, Pro access and platform limits are separate fields. Unverified does not mean unsupported. SSH reconnect, Mosh roaming and persistent host processes are separate rows. NimoteCode can browse and edit system-granted folders, while Git, LSP, Debug, Tasks, file watching and Agent workflows require a native filesystem path.' }}</p>
    <p>{{ zh?'本仓库仅包含网站与发布资料，应用实现源码不在此仓库；NimoteCode 能力根据发布说明与产品文档核实，尚未完成应用源码级验证。':'This repository contains the website and release material, not the application implementation. NimoteCode claims were checked against release notes and product docs; application-source verification remains outstanding.' }}</p>
    <h2>{{ zh?'延伸比较与下载':'Further comparison and download' }}</h2>
    <p>{{ zh?'Port22 是 Mac+iPhone Agent Companion；AgentsRoom 是桌面 Agent 环境配合 iOS/Android 应用。两者定位相近，适合下一次在获得逐项证据后加入正式对比。':'Port22 is a Mac+iPhone agent companion; AgentsRoom is a desktop agent environment with iOS/Android companions. Both are relevant candidates for a future comparison update after feature-level evidence is recorded.' }}</p>
    <p><a :href="zh?'/zh/download':'/download'">{{ zh?'下载 NimoteCode':'Download NimoteCode' }}</a> · <a :href="zh?'/zh/releases/':'/releases/'">{{ zh?'发布记录':'Release notes' }}</a> · <a :href="zh?'/zh/pro':'/pro'">{{ zh?'免费与 Pro':'Free and Pro' }}</a></p>
  </div>
</template>
