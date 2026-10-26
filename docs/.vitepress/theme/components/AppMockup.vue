<script setup lang="ts">
import MockIcon from './MockIcon.vue'
import MockCode from './MockCode.vue'

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
  <div class="app-showcase" aria-hidden="true">
    <div class="mock-stage">
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

      <div class="mock-phone mock-device">
        <div class="device-screen phone-screen">
          <div class="phone-status"><b>9:41</b><span><MockIcon name="wifi" /><MockIcon name="battery" /></span></div>
          <div class="phone-toolbar"><MockIcon name="back" /><span><MockIcon v-for="tool in ['keyboard', 'search', 'code', 'globe', 'more']" :key="tool" :name="tool" /></span></div>
          <div class="phone-tabs"><span><span class="python-mark"></span> webapp.py <b>M</b></span><span class="active"><span class="python-mark"></span> quick_sort.py <i>×</i></span></div>
          <div class="phone-breadcrumb"><span class="python-mark"></span> sorting_demo / quick_sort.py</div>
          <MockCode phone />
          <div class="phone-navigation"><span v-for="item in nav" :key="item.label" :class="{ active: item.label === 'Editor' }"><MockIcon :name="item.icon" /><span>{{ item.label }}</span></span></div>
          <div class="phone-home-indicator"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* All device geometry uses the same canvas unit: resizing never reflows the
   app UI. Ratios and overlap follow public/screenshots/homepage_bk.jpg. */
.app-showcase {
  width: 100%;
  min-width: 0;
  container-type: inline-size;
  align-self: center;
  position: relative;
  isolation: isolate;
}
.mock-stage {
  position: relative;
  width: 100%;
  height: 80em;
  font-size: 1cqw;
  line-height: 1.5;
  font-family: var(--vp-font-family-base);
  color: #555965;
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
  background: linear-gradient(135deg, #ffffff 0%, #f5f5f8 38%, #d8dce5 75%, #fff 100%);
  border: .12em solid #dfe2e9;
  box-shadow: 0 .2em .4em #4f567319, 0 2em 3em -1em #303d5d26, 0 5em 7em -3em #303d5d33, inset 0 0 0 .13em #fff;
}
.device-screen { height: 100%; overflow: hidden; background: #f8f8fb; border: .1em solid #e9e9ef; }
.mock-tablet { width: 97em; height: 62em; top: 3em; left: 0; border-radius: 3.5em; }
.tablet-screen { display: flex; flex-direction: column; border-radius: 2.9em; }
.tablet-status { height: 2.6em; flex: none; display: flex; justify-content: space-between; align-items: center; padding: 0 2em; position: relative; font-size: .9em; color: #858997; }
.tablet-status > span:last-child, .phone-status > span { display: flex; gap: .65em; }
.camera { position: absolute; width: 5.6em; height: .32em; background: #81838a; border-radius: 1em; top: .9em; left: 50%; transform: translateX(-50%); }
.tablet-toolbar { display: flex; height: 4em; align-items: center; border-bottom: .1em solid #e6e7ee; padding: 0 1.7em 0 3.8em; gap: 1.2em; }
.remote-search { display: flex; gap: .65em; align-items: center; width: 23%; font-size: 1.1em; color: #9b9fae; }
.remote-search svg { width: 1.35em; height: 1.35em; }
.open-file { display: flex; gap: .6em; align-items: center; flex: 1; font-size: 1.1em; }
.toolbar-icons { display: flex; gap: 1.8em; color: #9297a6; }
.toolbar-icons svg { width: 1.5em; height: 1.5em; }
.python-mark { display: inline-block; position: relative; width: 1.2em; height: 1.25em; flex: none; }
.python-mark::before, .python-mark::after { content: ''; position: absolute; width: .84em; height: .76em; border-radius: .25em .25em .12em .25em; }
.python-mark::before { background: #409ac7; left: 0; top: 0; }
.python-mark::after { background: #efc34c; right: 0; bottom: 0; transform: rotate(180deg); }
.tablet-workspace { display: grid; grid-template-columns: 3.6em 23% minmax(0, 1fr) 30%; min-height: 0; flex: 1; }
.activity-rail { display: flex; flex-direction: column; align-items: center; padding: 1.3em 0; gap: 2.4em; border-right: .1em solid #e7e8ef; color: #a3a5b1; }
.activity-rail > span { display: grid; place-items: center; width: 2.6em; height: 2.6em; }
.activity-rail > .selected { border-radius: 50%; background: #ece9f7; color: #8073bb; }
.activity-rail .rail-settings { margin-top: auto; }
.explorer { border-right: .1em solid #e5e6ed; overflow: hidden; padding: 0 1.1em; }
.panel-heading { display: flex; align-items: center; justify-content: space-between; height: 4.2em; font-size: 1.15em; font-weight: 600; color: #747b90; }
.project-heading { display: flex; align-items: center; gap: .6em; font-size: 1.15em; margin: .7em 0; }
.project-heading svg { width: 1em; height: 1em; color: #8b90a0; }
.connected { display: flex; gap: .5em; align-items: center; width: fit-content; padding: .35em .65em; margin: .6em 0 1em 1.7em; border-radius: 2em; background: #ecebf5; color: #87819d; font-size: .95em; }
.connected i { width: .55em; height: .55em; background: #64a782; border-radius: 50%; }.connected svg { width: 1em; height: 1em; }
.explorer-tools { display: flex; gap: 1.6em; padding: .8em .7em 1.4em; border-bottom: .1em solid #e8e8ee; color: #9299ab; }.explorer-tools svg { width: 1.35em; height: 1.35em; }
.files { padding-top: .8em; }.file-row { display: flex; align-items: center; gap: .8em; padding: .75em .7em; font-size: 1.12em; white-space: nowrap; }.file-row svg { width: 1.1em; height: 1.1em; color: #7db2df; }.file-row b { margin-left: auto; font-size: .85em; color: #b59663; }.folder-chevron { color: #969aaa; width: 1.2em; }.file-row.active { background: #e2eafa; color: #4e5977; border-radius: .8em; box-shadow: inset .2em 0 #a89ad6; font-weight: 600; }
.tablet-editor { display: flex; flex-direction: column; min-width: 0; overflow: hidden; }
.editor-tabs, .phone-tabs { display: flex; align-items: center; gap: .45em; height: 4em; flex: none; padding: 0 .7em; font-size: 1.05em; white-space: nowrap; color: #9297a5; }
.editor-tabs > span, .phone-tabs > span { display: flex; gap: .6em; align-items: center; padding: .7em .6em; }.editor-tabs > .active { border: .1em solid #dcd8ef; border-radius: 1.3em; background: #f0eff8; color: #646879; }
.editor-tabs i, .phone-tabs i { font-style: normal; color: #aaaab5; }
.editor-breadcrumb, .phone-breadcrumb { display: flex; gap: .6em; align-items: center; padding: .5em 1.4em; font-size: .95em; color: #9398a7; }
.ai-panel { display: flex; flex-direction: column; border-left: .1em solid #e5e6ed; padding: 0 1.1em 1em; box-shadow: -.4em 0 1.2em #4b527007; overflow: hidden; }
.ai-toolbar { height: 4.2em; display: flex; align-items: center; justify-content: space-between; font-size: 1.05em; color: #a1a3af; }.ai-toolbar > span { display: flex; align-items: center; gap: .6em; }.ai-toolbar svg { width: 1em; height: 1em; }.ai-switch { padding: .3em; border-radius: 2em; }.ai-switch b { padding: .35em 1em; border-radius: 2em; border: .1em solid #ddd8ef; color: #80769b; }
.chat-content { flex: 1; padding: .5em .3em; font-size: 1.13em; overflow: hidden; }
.user-message { background: #eeedf4; border: .1em solid #e7e6ee; border-radius: 1.4em 1.4em .4em 1.4em; padding: .9em 1em; margin-bottom: 1.8em; font-size: .95em; }
.assistant-heading { display: flex; gap: .6em; align-items: center; margin-bottom: 1em; color: #666479; }.assistant-heading svg { color: #a291ca; width: 1.4em; height: 1.4em; }
.chat-content > p { color: #8a8a98; }.explanation { display: flex; gap: .8em; margin-top: 1.6em; }.explanation > span { color: #aba0c9; font: .85em/1.8 var(--vp-font-family-mono); }.explanation b { font-size: .95em; color: #767383; }.explanation p { font-size: .9em; color: #9997a3; margin-top: .35em; }
.complexity { display: flex; justify-content: space-between; padding: .9em; margin-top: 1.8em; border: .1em solid #e4e1ee; border-radius: .7em; font-size: .85em; color: #8f8b9d; }.complexity code { padding: 0; background: transparent; font-size: 1em; color: #a38a63; }
.chat-composer { flex: none; padding: 1em; border: .1em solid #e5e3ed; border-radius: 1.5em; background: #f1f0f6; font-size: 1.05em; color: #aaa6b5; }.chat-composer > div { display: flex; align-items: center; gap: 1.2em; margin-top: 1.2em; }.chat-composer > div > span { display: flex; align-items: center; gap: .4em; font-size: .9em; }.chat-composer > div > svg:last-child { margin-left: auto; color: #8d82b1; }
.tablet-footer { display: flex; align-items: center; gap: 1.8em; height: 2.4em; flex: none; padding: 0 1.3em; border-top: .1em solid #e6e6ee; font-size: .95em; color: #a0a3b1; }.tablet-footer > span { display: flex; align-items: center; gap: .5em; }.tablet-footer > span:first-child { color: #9787c4; font-weight: 600; }.tablet-footer svg { width: 1.2em; height: 1.2em; }.footer-end { margin-left: auto; }
.mock-phone { width: 28.5em; height: 63em; top: 15em; left: 50em; border-radius: 3em; padding: .5em; z-index: 2; box-shadow: 0 .2em .5em #58617d1a, 0 2em 4em -1em #303d5d26, 0 5em 7em -2em #303d5d38, inset 0 0 0 .15em #fff; }
.phone-screen { display: flex; flex-direction: column; border-radius: 2.45em; }
.phone-status { display: flex; align-items: center; justify-content: space-between; flex: none; height: 3.5em; padding: 0 1.25em; font-size: 1.05em; color: #35353d; }.phone-status svg { width: 1.5em; height: 1.5em; }
.phone-toolbar { display: flex; justify-content: space-between; align-items: center; height: 3.6em; flex: none; padding: 0 1.1em; color: #828592; }.phone-toolbar > span { display: flex; gap: 1.7em; }.phone-toolbar svg { width: 1.65em; height: 1.65em; }
.phone-tabs { gap: .5em; height: 3.5em; padding: 0 .5em; font-size: 1.05em; border-top: .1em solid #eeeef3; }.phone-tabs > span { height: 100%; }.phone-tabs > .active { border-bottom: .2em solid #8b81b3; color: #505361; }.phone-tabs b { color: #a58449; font-size: .9em; }
.phone-breadcrumb { font-size: .88em; padding: .8em 1em .1em; color: #777c8b; }
.phone-navigation { display: flex; margin: .3em .6em 0; padding: .45em .3em; border: .15em solid #e5e3ed; border-radius: 3em; background: #f5f4fa; flex: none; }.phone-navigation > span { display: flex; flex: 1; flex-direction: column; align-items: center; gap: .35em; padding: .45em .1em; color: #7c7c88; }.phone-navigation svg { width: 1.9em; height: 1.9em; }.phone-navigation > span > span { font-size: .85em; }.phone-navigation > .active { border-radius: 2em; background: #e7e4f3; color: #6e638c; }
.phone-home-indicator { width: 9em; height: .35em; flex: none; margin: .9em auto .6em; border-radius: 1em; background: #b7b7c0; }
@media (max-width: 1024px) { .app-showcase { width: min(100%, 780px); margin-inline: auto; } }
@media (max-width: 600px) {
  .mock-stage { height: 88em; }
  .mock-tablet { top: 6em; }
  .mock-phone { width: 32em; height: 70.5em; left: 55em; top: 15em; }
}
</style>
