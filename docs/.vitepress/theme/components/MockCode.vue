<script setup lang="ts">
withDefaults(defineProps<{ phone?: boolean }>(), { phone: false })
const lines = [
  '#!/usr/bin/env python3',
  '"""Sorting algorithms, made simple."""',
  '',
  'from typing import Sequence',
  '',
  'def quick_sort(items: Sequence[int]):',
  '    if len(items) <= 1:',
  '        return list(items)',
  '',
  '    pivot = items[len(items) // 2]',
  '    lower = [x for x in items if x < pivot]',
  '    equal = [x for x in items if x == pivot]',
  '    upper = [x for x in items if x > pivot]',
  '',
  '    return (',
  '        quick_sort(lower)',
  '        + equal',
  '        + quick_sort(upper)',
  '    )',
  '',
  'def test_quick_sort():',
  '    values = [8, 3, 1, 5, 2]',
  '    assert quick_sort(values) == sorted(values)',
  '',
  'if __name__ == "__main__":',
  '    test_quick_sort()',
]
function tokens(line: string) {
  return line.split(/(#[^\n]*|"[^"]*"|\b(?:def|if|return|from|import|for|in|assert)\b|\b(?:quick_sort|test_quick_sort|len|list|sorted|Sequence)\b|\b\d+\b)/g).filter(Boolean).map(text => ({
    text,
    kind: text.startsWith('#') ? 'comment' : text.startsWith('"') ? 'string' : /^(def|if|return|from|import|for|in|assert)$/.test(text) ? 'keyword' : /^\d+$/.test(text) ? 'number' : /^(quick_sort|test_quick_sort|len|list|sorted|Sequence)$/.test(text) ? 'function' : '',
  }))
}
</script>

<template>
  <div class="mock-code" :class="{ 'mock-code--phone': phone }">
    <template v-for="(line, index) in lines" :key="index">
      <div v-if="[5, 20].includes(index)" class="code-lens">Explain code &nbsp; Refactor &nbsp; Generate tests</div>
      <div class="code-line" :class="{ 'code-line--active': index === 16 }"><span class="line-number">{{ index + 1 }}</span><span class="source"><span v-for="(token, i) in tokens(line)" :key="i" :class="token.kind">{{ token.text }}</span></span></div>
    </template>
  </div>
</template>

<style scoped>
.mock-code { flex: 1; min-height: 0; overflow: hidden; padding: 1em 0; font: 1.13em/1.9 var(--vp-font-family-mono); color: var(--mock-ink); background: var(--mock-editor); }
.code-line { display: flex; white-space: pre; height: 1.9em; }
.line-number { width: 3.3em; flex: none; padding-right: 1.25em; text-align: right; color: #777d89; font-size: .9em; }
.source { white-space: pre; }
.code-lens { padding-left: 3.3em; margin: .65em 0 .25em; font: .83em/1.5 var(--vp-font-family-base); color: var(--mock-muted); white-space: nowrap; }
.keyword { color: #8065d9; }.function { color: #3267ba; }.number { color: #b17b49; }.string { color: #599276; }.comment { color: #777d89; font-style: italic; }
.code-line--active { background: #ededf0; }.code-line--active .source::after { content: ''; display: inline-block; width: 1px; height: 1.2em; background: var(--mock-accent); vertical-align: middle; }
.mock-code--phone { font-size: 1.08em; line-height: 2.05; }.mock-code--phone .code-line { height: 2.05em; }
@media (prefers-reduced-motion: no-preference) {
  .code-line--active .source::after {
    animation: mock-caret 1.2s steps(1, end) infinite;
    animation-play-state: var(--mock-motion, paused);
  }
}
@keyframes mock-caret { 0%, 55% { opacity: 1; } 56%, 100% { opacity: 0; } }
</style>
