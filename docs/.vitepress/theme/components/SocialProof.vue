<script setup lang="ts">
defineProps<{ items?: Array<{ quote: string, author: string, href?: string }> }>()
</script>

<template>
  <section v-if="items?.length" class="social-proof" aria-label="Developer feedback">
    <article v-for="item in items" :key="item.quote">
      <blockquote>“{{ item.quote }}”</blockquote>
      <a v-if="item.href" :href="item.href" target="_blank" rel="noreferrer">{{ item.author }}</a>
      <span v-else>{{ item.author }}</span>
    </article>
  </section>
</template>
