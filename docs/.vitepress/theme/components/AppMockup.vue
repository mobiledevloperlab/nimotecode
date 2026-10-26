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

const tools = ['keyboard', 'search', 'code', 'branch', 'globe', 'more']
const rail = ['cloud', 'search', 'branch', 'globe', 'terminal', 'spark', 'check']
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
          <div class="phone-status"><b>9:41</b><span><MockIcon name="wifi" /><MockIcon name="battery" /></span></div>
          <MockAgent :running="visible && pageVisible" />
          <div class="phone-navigation"><span v-for="item in nav" :key="item.label" :class="{ active: item.label === 'AI' }"><MockIcon :name="item.icon" /><span>{{ item.label }}</span></span></div>
          <div class="phone-home-indicator"></div>
        </div>
      </div>

      <div class="mock-tablet mock-device">
        <div class="device-screen tablet-screen">
          <div class="tablet-status"><span>9:41 &nbsp; Mon, Oct 26</span><span class="camera"></span><span><MockIcon name="wifi" /><MockIcon name="battery" /></span></div>
          <div class="tablet-toolbar">
            <span class="remote-search"><MockIcon name="search" /> Search Remote Files</span>
            <span class="open-file"><span class="python-mark"></span> quick_sort.py</span>
            <span class="toolbar-icons"><MockIcon v-for="tool in tools" :key="tool" :name="tool" /></span>
          </div>
          <div class="tablet-workspace">
            <aside class="activity-rail"><span v-for="(tool, index) in rail" :key="tool" :class="{ selected: index === 0 }"><MockIcon :name="tool" /></span><span class="rail-settings"><MockIcon name="settings" /></span></aside>
            <aside class="explorer">
              <div class="panel-heading">Remote Explorer <MockIcon name="more" /></div>
              <div class="project-heading"><MockIcon name="down" /><b>sorting-demo</b></div>
              <div class="connected"><i></i> Connected <MockIcon name="down" /></div>
              <div class="explorer-tools"><MockIcon v-for="tool in ['search', 'plus', 'folder', 'refresh', 'more']" :key="tool" :name="tool" /></div>
              <div class="files">
                <div v-for="file in files" :key="file.name" class="file-row" :class="{ active: file.selected }"><span v-if="file.folder" class="folder-chevron">›</span><span v-else-if="file.python" class="python-mark"></span><MockIcon v-else name="file" /><span>{{ file.name }}</span><b v-if="file.modified">M</b></div>
              </div>
            </aside>
            <div class="tablet-editor">
              <div class="editor-tabs"><span><span class="python-mark"></span> benchmark.py</span><span class="active"><span class="python-mark"></span> quick_sort.py <i>×</i></span></div>
              <div class="editor-breadcrumb">sorting_demo <span>›</span> <span class="python-mark"></span> quick_sort.py</div>
              <MockCode />
            </div>
            <aside class="ai-panel">
              <div class="ai-toolbar"><span class="ai-switch">Agent <b>Chat</b></span><span>AI Assistant <MockIcon name="down" /></span></div>
              <div class="chat-content">
                <div class="user-message">Explain this sorting algorithm</div>
                <div class="assistant-heading"><MockIcon name="spark" /><b>A closer look at quick sort</b></div>
                <p>This implementation divides the list around a <strong>pivot</strong>, then sorts each partition recursively.</p>
                <div class="explanation"><span>01</span><div><b>Choose a pivot</b><p>Use the middle element to split the list.</p></div></div>
                <div class="explanation"><span>02</span><div><b>Partition the values</b><p>Group smaller, equal and larger items.</p></div></div>
                <div class="explanation"><span>03</span><div><b>Sort and combine</b><p>Recurse, then join the three groups.</p></div></div>
                <div class="complexity"><span>Average time</span><code>O(n log n)</code></div>
              </div>
              <div class="chat-composer"><span>Ask about your code…</span><div><MockIcon name="plus" /><span><MockIcon name="check" /> Confirm</span><MockIcon name="up" /></div></div>
            </aside>
          </div>
          <div class="tablet-footer"><span><MockIcon name="cloud" /> remote</span><span><MockIcon name="branch" /> main</span><span>Ln 17, Col 16</span><span>Spaces: 4</span><span class="footer-end">UTF-8 &nbsp; · &nbsp; Python</span></div>
        </div>
      </div>


    </div>
  </div>
</template>

<style scoped>
/* Equal-height devices share one scale and top edge on wide screens.
   Theme colors are shared with workflow previews through app-palette.css. */
.app-showcase {
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
  font-size: .76cqw;
  line-height: 1.5;
  font-family: var(--vp-font-family-base);
  color: var(--mock-ink);
  text-align: left;
  font-weight: 400;
  letter-spacing: normal;
}
.mock-stage *, .mock-stage *::before, .mock-stage *::after { box-sizing: border-box; }
.mock-stage svg { display: inline-block; width: 1.65em; height: 1.65em; flex: none; vertical-align: middle; }
.mock-stage p { margin: 0; font-size: 1em; line-height: 1.7; }
.mock-stage b, .mock-stage strong { font-weight: 600; }
.mock-device {
  position: absolute;
  padding: .55em;
  background: var(--mock-device-frame);
  border: .12em solid var(--mock-device-border);
  box-shadow: 0 3em 6em -2em var(--mock-device-shadow), inset 0 0 0 .1em var(--mock-device-highlight);
}
.device-screen { height: 100%; overflow: hidden; background: var(--mock-surface); border: .1em solid var(--mock-line); }
.mock-tablet {
  width: 97em;
  height: 63em;
  top: 2em;
  left: 33em;
  border-radius: 3.5em;
}
.tablet-screen { display: flex; flex-direction: column; border-radius: 2.9em; }
.tablet-status { height: 2.6em; flex: none; display: flex; justify-content: space-between; align-items: center; padding: 0 2em; position: relative; font-size: .9em; color: var(--mock-muted); }
.tablet-status > span:last-child, .phone-status > span { display: flex; gap: .65em; }
.camera { position: absolute; width: 5.6em; height: .32em; background: var(--mock-hardware); border-radius: 1em; top: .9em; left: 50%; transform: translateX(-50%); }
.tablet-toolbar { display: flex; height: 4em; align-items: center; border-bottom: .1em solid var(--mock-line); padding: 0 1.7em 0 3.8em; gap: 1.2em; }
.remote-search { display: flex; gap: .65em; align-items: center; width: 23%; font-size: 1.1em; color: var(--mock-muted); }
.remote-search svg { width: 1.35em; height: 1.35em; }
.open-file { display: flex; gap: .6em; align-items: center; flex: 1; font-size: 1.1em; }
.toolbar-icons { display: flex; gap: 1.8em; color: var(--mock-secondary); }
.toolbar-icons svg { width: 1.5em; height: 1.5em; }
.python-mark { display: inline-block; position: relative; width: 1.2em; height: 1.25em; flex: none; }
.python-mark::before, .python-mark::after { content: ''; position: absolute; width: .84em; height: .76em; border-radius: .25em .25em .12em .25em; }
.python-mark::before { background: #409ac7; left: 0; top: 0; }
.python-mark::after { background: #efc34c; right: 0; bottom: 0; transform: rotate(180deg); }
.tablet-workspace { display: grid; grid-template-columns: 3.6em 23% minmax(0, 1fr) 30%; min-height: 0; flex: 1; }
.activity-rail { display: flex; flex-direction: column; align-items: center; padding: 1.3em 0; gap: 2.4em; border-right: .1em solid var(--mock-line); color: var(--mock-muted); }
.activity-rail > span { display: grid; place-items: center; width: 2.6em; height: 2.6em; }
.activity-rail > .selected { border-radius: 50%; background: var(--mock-selected); color: var(--mock-accent-text); }
.activity-rail .rail-settings { margin-top: auto; }
.explorer { border-right: .1em solid var(--mock-line); overflow: hidden; padding: 0 1.1em; }
.panel-heading { display: flex; align-items: center; justify-content: space-between; height: 4.2em; font-size: 1.15em; font-weight: 600; color: var(--mock-secondary); }
.project-heading { display: flex; align-items: center; gap: .6em; font-size: 1.15em; margin: .7em 0; }
.project-heading svg { width: 1em; height: 1em; color: var(--mock-muted); }
.connected { display: flex; gap: .5em; align-items: center; width: fit-content; padding: .35em .65em; margin: .6em 0 1em 1.7em; border-radius: 2em; background: var(--mock-selected); color: var(--mock-accent-text); font-size: .95em; }
.connected i { width: .55em; height: .55em; background: var(--mock-green); border-radius: 50%; }.connected svg { width: 1em; height: 1em; }
.explorer-tools { display: flex; gap: 1.6em; padding: .8em .7em 1.4em; border-bottom: .1em solid var(--mock-line); color: var(--mock-muted); }.explorer-tools svg { width: 1.35em; height: 1.35em; }
.files { padding-top: .8em; }.file-row { display: flex; align-items: center; gap: .8em; padding: .75em .7em; font-size: 1.12em; white-space: nowrap; }.file-row svg { width: 1.1em; height: 1.1em; color: var(--mock-function); }.file-row b { margin-left: auto; font-size: .85em; color: var(--mock-amber); }.folder-chevron { color: var(--mock-muted); width: 1.2em; }.file-row.active { background: var(--mock-selection); color: var(--mock-secondary); border-radius: .8em; box-shadow: inset .2em 0 var(--mock-accent); font-weight: 600; }
.tablet-editor { display: flex; flex-direction: column; min-width: 0; overflow: hidden; }
.editor-tabs, .phone-tabs { display: flex; align-items: center; gap: .45em; height: 4em; flex: none; padding: 0 .7em; font-size: 1.05em; white-space: nowrap; color: var(--mock-muted); }
.editor-tabs > span, .phone-tabs > span { display: flex; gap: .6em; align-items: center; padding: .7em .6em; }.editor-tabs > .active { border: .1em solid var(--mock-line); border-radius: 1.3em; background: var(--mock-selected); color: var(--mock-secondary); }
.editor-tabs i, .phone-tabs i { font-style: normal; color: var(--mock-muted); }
.editor-breadcrumb, .phone-breadcrumb { display: flex; gap: .6em; align-items: center; padding: .5em 1.4em; font-size: .95em; color: var(--mock-muted); }
.ai-panel { display: flex; flex-direction: column; border-left: .1em solid var(--mock-line); padding: 0 1.1em 1em; box-shadow: -.4em 0 1.2em #4b527007; overflow: hidden; }
.ai-toolbar { height: 4.2em; display: flex; align-items: center; justify-content: space-between; font-size: 1.05em; color: var(--mock-muted); }.ai-toolbar > span { display: flex; align-items: center; gap: .6em; }.ai-toolbar svg { width: 1em; height: 1em; }.ai-switch { padding: .3em; border-radius: 2em; }.ai-switch b { padding: .35em 1em; border-radius: 2em; border: .1em solid var(--mock-line); color: var(--mock-accent-text); }
.chat-content { flex: 1; padding: .5em .3em; font-size: 1.13em; overflow: hidden; }
.user-message { background: var(--mock-panel); border: .1em solid var(--mock-line); border-radius: 1.4em 1.4em .4em 1.4em; padding: .9em 1em; margin-bottom: 1.8em; font-size: .95em; }
.assistant-heading { display: flex; gap: .6em; align-items: center; margin-bottom: 1em; color: var(--mock-secondary); }.assistant-heading svg { color: var(--mock-accent-text); width: 1.4em; height: 1.4em; }
.chat-content > p { color: var(--mock-secondary); }.explanation { display: flex; gap: .8em; margin-top: 1.6em; }.explanation > span { color: var(--mock-accent-text); font: .85em/1.8 var(--vp-font-family-mono); }.explanation b { font-size: .95em; color: var(--mock-secondary); }.explanation p { font-size: .9em; color: var(--mock-muted); margin-top: .35em; }
.complexity { display: flex; justify-content: space-between; padding: .9em; margin-top: 1.8em; border: .1em solid var(--mock-line); border-radius: .7em; font-size: .85em; color: var(--mock-muted); }.complexity code { padding: 0; background: transparent; font-size: 1em; color: var(--mock-amber); }
.chat-composer { flex: none; padding: 1em; border: .1em solid var(--mock-line); border-radius: 1.5em; background: var(--mock-panel); font-size: 1.05em; color: var(--mock-muted); }.chat-composer > div { display: flex; align-items: center; gap: 1.2em; margin-top: 1.2em; }.chat-composer > div > span { display: flex; align-items: center; gap: .4em; font-size: .9em; }.chat-composer > div > svg:last-child { margin-left: auto; color: var(--mock-accent-text); }
.tablet-footer { display: flex; align-items: center; gap: 1.8em; height: 2.4em; flex: none; padding: 0 1.3em; border-top: .1em solid var(--mock-line); font-size: .95em; color: var(--mock-muted); }.tablet-footer > span { display: flex; align-items: center; gap: .5em; }.tablet-footer > span:first-child { color: var(--mock-accent-text); font-weight: 600; }.tablet-footer svg { width: 1.2em; height: 1.2em; }.footer-end { margin-left: auto; }
.mock-phone { width: 28.5em; height: 63em; top: 2em; left: 1em; border-radius: 3em; padding: .5em; z-index: 2; border-color: var(--mock-device-border); box-shadow: 0 2em 5em -1em var(--mock-device-shadow), inset 0 0 0 .1em var(--mock-device-highlight); }
.phone-screen { display: flex; flex-direction: column; border-radius: 2.45em; }
.phone-status { display: flex; align-items: center; justify-content: space-between; flex: none; height: 3.5em; padding: 0 1.25em; font-size: 1.05em; color: var(--mock-ink); }.phone-status svg { width: 1.5em; height: 1.5em; }
.phone-toolbar { display: flex; justify-content: space-between; align-items: center; height: 3.6em; flex: none; padding: 0 1.1em; color: var(--mock-secondary); }.phone-toolbar > span { display: flex; gap: 1.7em; }.phone-toolbar svg { width: 1.65em; height: 1.65em; }
.phone-tabs { gap: .5em; height: 3.5em; padding: 0 .5em; font-size: 1.05em; border-top: .1em solid var(--mock-line); }.phone-tabs > span { height: 100%; }.phone-tabs > .active { border-bottom: .2em solid var(--mock-accent); color: var(--mock-ink); }.phone-tabs b { color: var(--mock-amber); font-size: .9em; }
.phone-breadcrumb { font-size: .88em; padding: .8em 1em .1em; color: var(--mock-secondary); }
.phone-navigation { display: flex; margin: .3em .6em 0; padding: .45em .3em; border: .15em solid var(--mock-line); border-radius: 3em; background: var(--mock-surface); flex: none; }.phone-navigation > span { display: flex; flex: 1; flex-direction: column; align-items: center; gap: .35em; padding: .45em .1em; color: var(--mock-secondary); }.phone-navigation svg { width: 1.9em; height: 1.9em; }.phone-navigation > span > span { font-size: .85em; }.phone-navigation > .active { border-radius: 2em; background: var(--mock-selected); color: var(--mock-accent-text); }
.phone-home-indicator { width: 9em; height: .35em; flex: none; margin: .9em auto .6em; border-radius: 1em; background: var(--mock-hardware); }
/* A readable phone composition on portrait screens, not a miniature tablet. */
@media (max-width: 760px) {
  .app-showcase { max-width: 320px; }
  .mock-stage { font-size: 3.50877cqw; height: 63em; }
  .mock-tablet { display: none; }
  .mock-phone { width: 28.5em; height: 63em; left: 0; top: 0; }
}

/* Composite-only motion. Each device floats independently, while the shared
   canvas preserves the reference composition; no layout or text reflow. */
@media (prefers-reduced-motion: no-preference) {
  .mock-stage {
    animation: mock-arrive 1.2s cubic-bezier(.2,.7,.2,1) both;
    animation-play-state: var(--mock-motion);
  }
  .mock-tablet {
    animation: none;
    animation-play-state: var(--mock-motion);
  }
  .mock-phone {
    animation: none;
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
@keyframes tablet-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-.7em); }
}
@keyframes phone-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-1.5em); }
}
@keyframes connection-pulse {
  0% { opacity: .5; transform: scale(.6); }
  60%, 100% { opacity: 0; transform: scale(1.6); }
}
@keyframes response-reveal {
  from { opacity: 0; transform: translateY(.6em); }
  to { opacity: 1; transform: translateY(0); }
}
@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
  .mock-device { transition: filter .45s ease; }
  .app-showcase:hover .mock-device { filter: drop-shadow(0 .7em 1.5em #303d5d18); }
}
</style>
