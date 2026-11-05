<script setup lang="ts">
import { computed, nextTick, onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { useRoute } from 'vitepress'
import { analyticsChoice, privacyKey, setAnalyticsChoice, startAnalytics, trackPage } from '../websitePrivacy'
const route = useRoute()
const open = ref(false)
const ready = ref(false)
const launcher = ref<HTMLButtonElement>()
const panel = ref<HTMLElement>()
const locale = computed(() => route.path.match(/^\/(zh|ja|ko|es)(?:\/|$)/)?.[1] || 'en')
const translations: Record<string, string[]> = {
 en: ['Website privacy settings', 'Optional website analytics', 'Allow Google Analytics to measure visits and link clicks? It may use cookies and identifiers. Declining does not affect access. This choice applies to this website, not the mobile app.', 'Decline analytics', 'Allow analytics', 'Privacy policy', 'Close'],
 zh: ['网站隐私设置', '可选的网站统计', '是否允许 Google Analytics 统计访问和链接点击？统计可能使用 Cookie 和标识符。拒绝不影响访问。此选择仅适用于网站，不控制移动应用统计。', '拒绝统计', '允许统计', '隐私政策', '关闭'],
 ja: ['サイトのプライバシー設定', '任意のアクセス解析', 'Google Analytics による訪問・リンククリックの計測を許可しますか？Cookie や識別子を使用する場合があります。拒否しても利用できます。この選択はサイトのみに適用され、アプリの解析には適用されません。', '解析を拒否', '解析を許可', 'プライバシーポリシー', '閉じる'],
 ko: ['웹사이트 개인정보 설정', '선택적 웹사이트 분석', 'Google Analytics의 방문 및 링크 클릭 분석을 허용하시겠습니까? 쿠키와 식별자가 사용될 수 있습니다. 거부해도 이용할 수 있습니다. 이 선택은 웹사이트에만 적용되며 앱 분석에는 적용되지 않습니다.', '분석 거부', '분석 허용', '개인정보처리방침', '닫기'],
 es: ['Privacidad del sitio web', 'Analítica web opcional', '¿Permitir que Google Analytics mida visitas y clics? Puede usar cookies e identificadores. Rechazar no limita el acceso. Esta elección solo afecta al sitio web, no a la app.', 'Rechazar analítica', 'Permitir analítica', 'Política de privacidad', 'Cerrar']
}
const copy = computed(() => translations[locale.value])
const privacyHref = computed(() => `${locale.value === 'en' ? '' : '/' + locale.value}/privacy#analytics`)
function choose(value: 'allow' | 'deny') {
 setAnalyticsChoice(value)
 open.value = false
 nextTick(() => launcher.value?.focus({ preventScroll: true }))
}
function show() {
 open.value = true
 nextTick(() => panel.value?.focus({ preventScroll: true }))
}
function sync(event: StorageEvent) {
 if (event.key !== privacyKey && event.key !== null) return
 // A fresh document applies the other tab's choice before any new loading.
 window.location.reload()
}
onMounted(() => {
 ready.value = true
 open.value = analyticsChoice() === null
 startAnalytics(window.location.pathname)
 window.addEventListener('storage', sync)
})
onBeforeUnmount(() => window.removeEventListener('storage', sync))
watch(() => route.path, () => {
 if (typeof window !== 'undefined') trackPage(window.location.pathname)
})
</script>
<template>
  <div class="website-privacy">
    <button v-if="ready" ref="launcher" type="button" class="privacy-launcher" :aria-expanded="open" aria-controls="website-privacy-panel" @click="show">{{ copy[0] }}</button>
    <section v-if="open" id="website-privacy-panel" ref="panel" class="privacy-panel" tabindex="-1" aria-labelledby="website-privacy-title" @keydown.esc="open = false">
      <div class="privacy-panel-heading"><strong id="website-privacy-title">{{ copy[1] }}</strong><button type="button" :aria-label="copy[6]" @click="open = false">×</button></div>
      <p>{{ copy[2] }} <a :href="privacyHref">{{ copy[5] }}</a></p>
      <div class="privacy-actions"><button type="button" @click="choose('deny')">{{ copy[3] }}</button><button type="button" @click="choose('allow')">{{ copy[4] }}</button></div>
    </section>
  </div>
</template>
