<script setup lang="ts">
defineProps<{ name: string }>()
const paths: Record<string, string> = {
  folder: 'M3 7V5h6l2 3h10v12H3Z',
  search: 'M20 20l-5-5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0',
  branch: 'M6 8v8M8 6h5a5 5 0 0 1 5 5v5M8 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0M8 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0M20 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0',
  cloud: 'M7 18a5 5 0 0 1-1-10 6 6 0 0 1 11-2 6 6 0 0 1 1 12Z',
  globe: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0M3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18',
  code: 'm8 6-6 6 6 6m8-12 6 6-6 6M14 3l-4 18',
  terminal: 'm4 5 6 6-6 6m9 1h7',
  spark: 'm10 3 2.5 6.5L19 12l-6.5 2.5L10 21l-2.5-6.5L1 12l6.5-2.5ZM19 2v6m-3-3h6',
  bell: 'M5 10a7 7 0 0 1 14 0c0 7 3 7 3 8H2c0-1 3-1 3-8m4 11h6',
  keyboard: 'M2 5h20v14H2ZM5 9h1m3 0h1m3 0h1m3 0h1M5 12h1m3 0h1m3 0h1m3 0h1M6 16h12',
  back: 'M20 12H4m6-6-6 6 6 6',
  more: 'M4 12h.01M12 12h.01M20 12h.01',
  plus: 'M12 4v16M4 12h16',
  refresh: 'M20 9a8 8 0 1 0 0 7M20 3v6h-6',
  settings: 'M9 3h6l1 3 3 1 2 5-2 5-3 1-1 3H9l-1-3-3-1-2-5 2-5 3-1ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0',
  check: 'm5 12 4 4L19 6',
  up: 'M12 21V3m-7 7 7-7 7 7',
  down: 'm6 9 6 6 6-6',
  file: 'M5 2h9l5 5v15H5ZM14 2v6h5M8 12h8m-8 4h8',
  book: 'M12 5v16M2 4c4-1 7-1 10 1 3-2 6-2 10-1v15c-4-1-7-1-10 2-3-3-6-3-10-2Z',
  wifi: 'M2 8a16 16 0 0 1 20 0M5 12a11 11 0 0 1 14 0m-11 4a6 6 0 0 1 8 0m-4 4h.01',
  battery: 'M2 6h17v12H2ZM22 10v4M5 9h11v6H5Z',
}
</script>

<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path :d="paths[name] || paths.file" /></svg>
</template>
