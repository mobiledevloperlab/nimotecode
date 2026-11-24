<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import MockIcon from './MockIcon.vue'
import MockCode from './MockCode.vue'
import MockAgent from './MockAgent.vue'

const showcase = ref<HTMLElement>()
const visible = ref(false)
const pageVisible = ref(true)
let observer: IntersectionObserver | undefined
function syncVisibility() { pageVisible.value = !document.hidden }
onMounted(() => {
  syncVisibility()
  document.addEventListener('visibilitychange', syncVisibility)
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(([entry]) => { visible.value = entry.isIntersecting })
    if (showcase.value) observer.observe(showcase.value)
  } else {
    visible.value = true
  }
})
onUnmounted(() => {
  observer?.disconnect()
  document.removeEventListener('visibilitychange', syncVisibility)
})

const tools = ['search', 'share', 'terminal', 'spark', 'more']
const rail = ['cloud', 'search', 'branch', 'github', 'debug', 'confirm', 'docker', 'sliders', 'grid']
const files = [
  { name: '.git', folder: true }, { name: 'reports', folder: true },
  { name: 'sorting_demo', folder: true }, { name: 'tests', folder: true },
  { name: 'benchmark.py', python: true }, { name: 'quick_sort.py', python: true, selected: true },
  { name: 'webapp.py', python: true, modified: true }, { name: 'README.md' },
  { name: 'requirements.txt' }, { name: 'test_sort.py', python: true },
]
const nav = [
  { icon: 'folder', label: 'Explore' }, { icon: 'code', label: 'Editor' },
  { icon: 'spark', label: 'AI' }, { icon: 'terminal', label: 'Terminal' },
  { icon: 'bell', label: 'Inbox' },
]
</script>

<template>
  <div ref="showcase" class="app-showcase" :class="{ 'is-running': visible && pageVisible }" aria-hidden="true">
    <div class="mock-stage">
      <div class="mock-phone mock-device">
        <div class="device-screen phone-screen">
          <div class="phone-status"><b>09:41 <i class="status-badge">N</i></b><span><MockIcon name="wifi" /><MockIcon name="airplane" /><MockIcon name="battery" /></span></div>
          <MockAgent :running="visible && pageVisible" />
          <div class="phone-navigation"><span v-for="item in nav" :key="item.label" :class="{ active: item.label === 'AI' }"><MockIcon :name="item.icon" /><span>{{ item.label }}</span></span></div>
          <div class="phone-home-indicator"></div>
        </div>
      </div>

      <div class="mock-tablet mock-device">
        <div class="device-screen tablet-screen">
          <div class="tablet-status"><b>09:41 <i class="status-badge">N</i></b><span><MockIcon name="wifi" /><MockIcon name="airplane" /><MockIcon name="battery" /></span></div>
          <div class="tablet-toolbar">
            <span class="remote-search"><MockIcon name="search" /> Search remote files</span>
            <span class="open-file"><span class="python-mark"></span> quick_sort.py</span>
            <span class="toolbar-icons"><span v-for="tool in tools" :key="tool" :class="{ selected: tool === 'spark' }"><MockIcon :name="tool" /></span></span>
          </div>
          <div class="tablet-workspace">
            <aside class="activity-rail"><span v-for="(tool, index) in rail" :key="tool" :class="{ selected: index === 0 }"><MockIcon :name="tool" /></span><span class="rail-settings"><MockIcon name="settings" /></span></aside>
            <aside class="explorer">
              <div class="panel-heading"><span>Remote Explorer</span><MockIcon name="close" /><MockIcon name="more" /></div>
              <div class="project-heading"><MockIcon name="folder" /><span>sorting-demo</span><MockIcon name="down" /><span class="connected"><i></i><MockIcon name="down" /></span></div>
              <div class="explorer-tools"><MockIcon v-for="tool in ['search', 'plus', 'folder-add', 'refresh', 'more']" :key="tool" :name="tool" /></div>
              <div class="files">
                <div v-for="file in files" :key="file.name" class="file-row" :class="{ active: file.selected }"><span v-if="file.folder" class="folder-chevron">›</span><span v-else-if="file.python" class="python-mark"></span><MockIcon v-else name="file" /><span>{{ file.name }}</span><b v-if="file.modified">M</b></div>
              </div>
            </aside>
            <div class="tablet-editor">
              <div class="editor-tabs"><span class="active"><span class="python-mark"></span> quick_sort.py <MockIcon name="close" /></span><MockIcon name="more" /></div>
              <div class="editor-breadcrumb">sorting_demo <span>›</span> <span class="python-mark"></span> quick_sort.py</div>
              <MockCode />
            </div>
            <aside class="ai-panel">
              <div class="ai-toolbar"><span>deepseek-flash <MockIcon name="down" /></span><MockIcon name="plus" /><MockIcon name="expand" /><MockIcon name="more" /></div>
              <div class="chat-content">
                <div class="user-message">Explain this sorting algorithm</div>
                <div class="assistant-heading"><MockIcon name="spark" /><b>A closer look at quick sort</b></div>
                <p>This implementation divides the list around a <strong>pivot</strong>, then sorts each partition recursively.</p>
                <div class="explanation"><span>01</span><div><b>Choose a pivot</b><p>Use the middle element to split the list.</p></div></div>
                <div class="explanation"><span>02</span><div><b>Partition the values</b><p>Group smaller, equal and larger items.</p></div></div>
                <div class="explanation"><span>03</span><div><b>Sort and combine</b><p>Recurse, then join the three groups.</p></div></div>
                <div class="complexity"><span>Average time</span><code>O(n log n)</code></div>
              </div>
              <div class="chat-composer"><span>Type a message or ask a question</span><div><span>N</span><span>/</span><MockIcon name="plus" /><span><MockIcon name="confirm" /> Confirm</span><MockIcon name="up" /></div></div>
            </aside>
          </div>
          <div class="tablet-footer"><span><MockIcon name="cloud" /> remote</span><span class="footer-end">Ln 17, Col 16</span><span>Spaces: 4</span><span>Python</span></div>
          <div class="tablet-home-indicator"></div>
        </div>
      </div>


    </div>
  </div>
</template>

<style scoped>
/* Dark UI sampled from the NimoteCode workspace and Android Agent captures. */
.app-showcase {
  --mock-surface: #181818;
  --mock-editor: #1f1f1f;
  --mock-panel: #1f1f1f;
  --mock-control: #303030;
  --mock-line: #2a2a2a;
  --mock-ink: #d6d6d6;
  --mock-secondary: #b8b8b8;
  --mock-muted: #8c8c8c;
  --mock-accent: #0e7ed4;
  --mock-accent-text: #59a9e6;
  --mock-accent-soft: #162b3a;
  --mock-selected: #05395b;
  --mock-green: #66b396;
  --mock-amber: #d6a557;
  --mock-elevated: #262626;
  --mock-keyword: #569cd6;
  --mock-function: #dcdcaa;
  --mock-string: #ce9178;
  --mock-number: #b5cea8;
  --mock-on-accent: #fff;
  --mock-python-blue: #3776ab;
  --mock-python-gold: #ffda54;
  --mock-accent-glow: #0e7ed444;
  --mock-hardware: #b2b2b2;
  --mock-motion: paused;
  width: 100%;
  min-width: 0;
  container-type: inline-size;
  align-self: center;
  position: relative;
  isolation: isolate;
}
.app-showcase.is-running { --mock-motion: running; }
.mock-stage {
  position: relative;
  width: 100%;
  height: 67em;
  /* The device group spans 1–130em inside a 131em canvas: equal outer gutters. */
  font-size: calc(100cqw / 131);
  line-height: 1.5;
  font-family: Roboto, "Helvetica Neue", sans-serif;
  color: var(--mock-ink);
  text-align: left;
  font-weight: 400;
  letter-spacing: normal;
}
.mock-stage *, .mock-stage *::before, .mock-stage *::after { box-sizing: border-box; }
.mock-stage svg { display: inline-block; width: 1.65em; height: 1.65em; flex: none; vertical-align: middle; }
.mock-stage p { margin: 0; font-size: 1em; line-height: 1.7; }
.mock-stage b, .mock-stage strong { font-weight: 600; }
/* Inline code belongs to the illustrated editor, not the documentation skin. */
.mock-stage :deep(code) { border: 0; box-shadow: none; }
.mock-device {
  position: absolute;
  padding: .3em;
  background: var(--mock-device-frame);
  border: .1em solid var(--mock-device-border);
  box-shadow: 0 1.2em 3em -1.5em var(--mock-device-shadow);
}
.device-screen { height: 100%; overflow: hidden; background: var(--mock-surface); border: .1em solid var(--mock-line); }
.mock-tablet {
  width: 97em;
  height: 63em;
  top: 2em;
  left: 33em;
  border-radius: 2em;
}
.tablet-screen, .phone-screen { display: flex; flex-direction: column; }
.tablet-screen { border-radius: 1.7em; }
.tablet-status, .phone-status {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: none;
  height: 3.65em;
  padding: 0 1.2em;
  font-size: 1.05em;
}
.tablet-status { height: 3.2em; }
.tablet-status > b, .phone-status > b,
.tablet-status > span, .phone-status > span { display: flex; align-items: center; gap: .42em; }
.tablet-status svg, .phone-status svg { width: 1.2em; height: 1.2em; }
.status-badge { padding: 0 .25em; border-radius: .25em; background: #2ec784; color: #fff; font: 600 .66em/1.5 system-ui; }
.tablet-toolbar {
  display: grid;
  grid-template-columns: 25% 1fr auto;
  align-items: center;
  gap: 1.5em;
  height: 4.25em;
  flex: none;
  padding: 0 1em 0 3.9em;
  border-bottom: .1em solid var(--mock-line);
}
.remote-search, .open-file { display: flex; align-items: center; gap: .65em; font-size: 1.1em; }
.remote-search {
  padding: .45em .75em;
  border-radius: 1em;
  background: var(--mock-control);
  color: var(--mock-secondary);
}
.remote-search svg, .toolbar-icons svg { width: 1.2em; height: 1.2em; }
.toolbar-icons { display: flex; align-items: center; gap: 1.7em; color: var(--mock-muted); }
.toolbar-icons > span { display: grid; place-items: center; width: 2.3em; height: 2.3em; }
.toolbar-icons > .selected { border-radius: .65em; background: var(--mock-accent-soft); color: var(--mock-ink); }
.python-mark { display: inline-block; position: relative; width: 1.15em; height: 1.15em; flex: none; }
.python-mark::before, .python-mark::after { content: ''; position: absolute; width: .75em; height: .65em; border-radius: .25em .25em .12em .25em; }
.python-mark::before { background: var(--mock-python-blue); left: 0; top: 0; }
.python-mark::after { background: var(--mock-python-gold); right: 0; bottom: 0; transform: rotate(180deg); }
.tablet-workspace { display: grid; grid-template-columns: 3.85em 25% minmax(0, 1fr) 25.5%; min-height: 0; flex: 1; }
.activity-rail {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: .25em;
  padding: .2em 0 .6em;
  border-right: .1em solid var(--mock-line);
  color: var(--mock-muted);
}
.activity-rail > span { display: grid; place-items: center; height: 3.55em; position: relative; }
.activity-rail svg { width: 1.45em; height: 1.45em; }
.activity-rail > .selected { color: var(--mock-ink); }
.activity-rail > .selected::before { content: ''; position: absolute; inset: 26% auto 26% 0; width: .16em; background: var(--mock-accent); }
.activity-rail .rail-settings { margin-top: auto; }
.explorer { border-right: .1em solid var(--mock-line); overflow: hidden; }
.panel-heading, .project-heading {
  display: flex;
  align-items: center;
  gap: .65em;
  padding: 0 .9em;
  height: 3.25em;
  font-size: 1.1em;
}
.panel-heading { border-bottom: .1em solid var(--mock-line); padding-right: 1.65em; gap: 1.9em; }
.panel-heading > span { margin-right: auto; white-space: nowrap; }
.panel-heading svg, .project-heading svg { width: 1.05em; height: 1.05em; color: var(--mock-muted); }
.connected { display: flex; align-items: center; gap: .4em; margin-left: auto; }
.connected i { width: .45em; height: .45em; background: var(--mock-green); border-radius: 50%; }
.explorer-tools {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 .9em;
  padding: .9em 1.1em 1.2em;
  border-bottom: .1em solid var(--mock-line);
  color: var(--mock-muted);
}
.explorer-tools svg { width: 1.15em; height: 1.15em; }
.files { padding: .75em 1.25em; }
.file-row { display: flex; align-items: center; gap: .55em; min-height: 3.1em; padding: .35em .4em; font-size: 1.08em; white-space: nowrap; color: var(--mock-secondary); }
.file-row svg { width: 1.05em; height: 1.05em; }
.file-row b { margin-left: auto; font-size: .85em; color: var(--mock-amber); }
.folder-chevron { color: var(--mock-muted); width: .7em; }
.file-row.active { background: var(--mock-selected); color: var(--mock-ink); border-radius: .6em; }
.tablet-editor { display: flex; flex-direction: column; min-width: 0; overflow: hidden; background: var(--mock-editor); }
.editor-tabs { display: flex; align-items: center; justify-content: space-between; height: 3.5em; flex: none; padding-right: 1.3em; font-size: 1.02em; color: var(--mock-muted); }
.editor-tabs > .active { display: flex; align-items: center; align-self: stretch; gap: .5em; padding: 0 .65em; border-bottom: .14em solid var(--mock-accent); color: var(--mock-ink); white-space: nowrap; }
.editor-tabs svg { width: 1em; height: 1em; color: var(--mock-muted); }
.editor-breadcrumb { display: flex; align-items: center; gap: .75em; padding: .35em 1.7em; font-size: .98em; color: var(--mock-secondary); }
.ai-panel { display: flex; flex-direction: column; min-width: 0; border-left: .1em solid var(--mock-line); padding: 0 .9em .9em; overflow: hidden; }
.ai-toolbar { display: flex; align-items: center; justify-content: space-between; gap: .55em; height: 3.25em; flex: none; font-size: 1.08em; white-space: nowrap; }
.ai-toolbar > span { display: flex; align-items: center; gap: .35em; margin-right: auto; }
.ai-toolbar svg { width: 1.05em; height: 1.05em; color: var(--mock-muted); }
.chat-content { flex: 1; padding: .45em 0; font-size: 1.08em; overflow: hidden; }
.user-message { background: var(--mock-control); border-radius: .7em; padding: .75em .9em; margin: 0 0 1.3em 1.2em; font-size: .97em; }
.assistant-heading { display: flex; align-items: center; gap: .55em; margin-bottom: .65em; color: var(--mock-ink); }
.assistant-heading svg { width: 1.12em; height: 1.12em; }
.chat-content > p { color: var(--mock-secondary); }
.explanation { display: flex; gap: .7em; margin-top: .9em; color: var(--mock-secondary); }
.explanation > span { color: var(--mock-muted); line-height: 1.65; }
.explanation p { margin-top: .2em; }
.complexity { display: flex; gap: .65em; margin: 1em 0; color: var(--mock-secondary); }
.complexity code { padding: 0; background: transparent; font-size: 1em; color: var(--mock-accent-text); }
.chat-composer { flex: none; padding: .65em 1em 1em; border-radius: 1.15em; background: var(--mock-control); font-size: 1.05em; color: var(--mock-secondary); }
.chat-composer > div { display: flex; align-items: center; gap: 1.05em; margin-top: .95em; }
.chat-composer > div > span { display: flex; align-items: center; gap: .4em; font-size: .9em; }
.chat-composer svg { width: 1.25em; height: 1.25em; }
.chat-composer > div > svg:last-child { margin-left: auto; }
.tablet-footer { display: flex; align-items: center; gap: 1.5em; height: 2.1em; flex: none; padding: 0 1.1em; border-top: .1em solid var(--mock-line); font-size: .85em; color: var(--mock-muted); }
.tablet-footer > span { display: flex; align-items: center; gap: .5em; }
.tablet-footer > span:first-child { color: var(--mock-green); }
.tablet-footer svg { width: 1.2em; height: 1.2em; }
.footer-end { margin-left: auto; }
.mock-phone { width: 28.5em; height: 63em; top: 2em; left: 1em; border-radius: 2.7em; z-index: 2; }
.phone-screen { border-radius: 2.4em; }
.phone-status { padding: 0 1.6em; }
.phone-navigation { display: flex; margin: .25em .8em 0; padding: .25em; border: .1em solid var(--mock-line); border-radius: 3em; flex: none; }
.phone-navigation > span { display: flex; flex: 1; flex-direction: column; align-items: center; gap: .2em; padding: .42em .1em; color: var(--mock-secondary); }
.phone-navigation svg { width: 1.55em; height: 1.55em; }
.phone-navigation > span > span { font-size: .82em; }
.phone-navigation > .active { border-radius: 2em; background: var(--mock-selected); color: var(--mock-ink); }
.phone-home-indicator, .tablet-home-indicator { height: .3em; flex: none; margin: .48em auto; border-radius: 1em; background: var(--mock-hardware); }
.phone-home-indicator { width: 33%; }
.tablet-home-indicator { width: 18%; margin-top: 0; }
/* A readable phone composition on portrait screens, not a miniature tablet. */
@media (max-width: 760px) {
  .app-showcase { max-width: 320px; }
  .mock-stage { font-size: 3.50877cqw; height: 63em; }
  .mock-tablet { display: none; }
  .mock-phone { width: 28.5em; height: 63em; left: 0; top: 0; }
}

@media (prefers-reduced-motion: no-preference) {
  .mock-stage {
    animation: mock-arrive 1.2s cubic-bezier(.2,.7,.2,1) both;
    animation-play-state: var(--mock-motion);
  }
  .connected i { position: relative; }
  .connected i::after {
    content: '';
    position: absolute;
    inset: -.3em;
    border: .1em solid var(--mock-green);
    border-radius: 50%;
    animation: connection-pulse 3.6s ease-out infinite;
    animation-play-state: var(--mock-motion);
  }
  .chat-content > * {
    animation: response-reveal .75s cubic-bezier(.2,.7,.2,1) both;
    animation-delay: 1.2s;
    animation-play-state: var(--mock-motion);
  }
  .chat-content > :nth-child(2) { animation-delay: 1.6s; }
  .chat-content > :nth-child(3) { animation-delay: 1.9s; }
  .chat-content > :nth-child(4) { animation-delay: 2.2s; }
  .chat-content > :nth-child(5) { animation-delay: 2.5s; }
  .chat-content > :nth-child(6) { animation-delay: 2.8s; }
  .chat-content > :nth-child(7) { animation-delay: 3.1s; }
}
@keyframes mock-arrive {
  from { opacity: 0; transform: translateY(2em); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes connection-pulse {
  0% { opacity: .5; transform: scale(.6); }
  60%, 100% { opacity: 0; transform: scale(1.6); }
}
@keyframes response-reveal {
  from { opacity: 0; transform: translateY(.6em); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
