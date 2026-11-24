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
const highlightedLines = lines.map(tokens)
</script>

<template>
  <div class="mock-code" :class="{ 'mock-code--phone': phone }">
    <div v-for="(line, index) in highlightedLines" :key="index" class="code-line" :class="{ 'code-line--active': index === 16 }"><span class="line-number">{{ index + 1 }}</span><span class="source"><span v-for="(token, i) in line" :key="i" :class="token.kind">{{ token.text }}</span></span></div>
    <div v-if="!phone" class="code-minimap"><div v-for="(line, index) in highlightedLines" :key="index"><span v-for="(token, i) in line" :key="i" :class="token.kind">{{ token.text }}</span></div></div>
  </div>
</template>

<style scoped>
.mock-code { position: relative; flex: 1; min-height: 0; overflow: hidden; padding: .1em 0; font: 1.02em/1.55 var(--vp-font-family-mono); color: var(--mock-ink); background: var(--mock-editor); }
.code-line { display: flex; white-space: pre; height: 1.55em; margin-right: 5.3em; overflow: hidden; }
.line-number { width: 3.1em; flex: none; padding-right: 1.15em; text-align: right; color: var(--mock-muted); font-size: .92em; }
.source { white-space: pre; }
.code-minimap { position: absolute; top: 0; right: 0; width: 25em; padding: .9em; border: .35em solid var(--mock-accent-soft); background: #1b2b38; white-space: pre; font-size: .2em; opacity: .8; overflow: hidden; }
.code-minimap > div { height: 1em; }
.keyword { color: var(--mock-keyword); }.function { color: var(--mock-function); }.number { color: var(--mock-number); }.string { color: var(--mock-string); }.comment { color: var(--mock-muted); font-style: italic; }
.code-line--active { background: var(--mock-elevated); }.code-line--active .source::after { content: ''; display: inline-block; width: 1px; height: 1.2em; background: var(--mock-amber); vertical-align: middle; }
.mock-code--phone { font-size: 1.08em; line-height: 2.05; }.mock-code--phone .code-line { height: 2.05em; margin-right: 0; }
@media (prefers-reduced-motion: no-preference) {
  .code-line--active .source::after {
    animation: mock-caret 1.2s steps(1, end) infinite;
    animation-play-state: var(--mock-motion, paused);
  }
}
@keyframes mock-caret { 0%, 55% { opacity: 1; } 56%, 100% { opacity: 0; } }
</style>
