<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
const { lang } = useData()
const locale = computed(() => lang.value.split('-')[0])
const labels: Record<string, string> = { en: 'Download', zh: '下载', ja: '入手', ko: '다운로드', es: 'Descargar' }
const href = computed(() => `${locale.value in labels && locale.value !== 'en' ? `/${locale.value}` : ''}/download`)
</script>

<template><a class="nimote-nav-download" :href="href">{{ labels[locale] || labels.en }}</a></template>
