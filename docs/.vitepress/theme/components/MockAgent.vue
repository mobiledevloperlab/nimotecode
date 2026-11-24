<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import MockIcon from './MockIcon.vue'

const props = defineProps<{ running: boolean }>()
// One illustrative run, with an explicit approval before any tool activity.
const frames = [
  { duration: 2600, status: 'Planning', detail: 'Preparing a plan', count: 0 },
  { duration: 2800, status: 'Approval required', detail: 'Waiting for approval', count: 0 },
  { duration: 1200, status: 'Approved', detail: 'Plan approved', count: 0 },
  { duration: 1800, status: 'Running', detail: 'Reading files', count: 0 },
  { duration: 1800, status: 'Running', detail: 'Reading README.md', count: 1 },
  { duration: 1800, status: 'Running', detail: 'Exploring sorting_demo', count: 2 },
  { duration: 1800, status: 'Running', detail: 'Inspecting webapp.py', count: 3 },
  { duration: 2400, status: 'Running', detail: 'Summarizing the project', count: 4 },
  { duration: 5500, status: 'Completed', detail: 'Project explained', count: 4 },
]
const tasks = ['Listed 17 entries in workspace', 'Read README.md · 98 lines', 'Listed 5 entries in sorting_demo', 'Summarized webapp.py · 24 symbols']
const activeTasks = ['Listing workspace…', 'Reading README.md…', 'Exploring sorting_demo…', 'Inspecting webapp.py…']
const conversation = ref<HTMLElement>()
const step = ref(0)
const reduced = ref(true)
const ready = ref(false)
const phase = computed(() => reduced.value ? frames.length - 1 : step.value)
const frame = computed(() => frames[phase.value])
const done = computed(() => phase.value === frames.length - 1)
const approved = computed(() => phase.value >= 2)
let timer: ReturnType<typeof setTimeout> | undefined
let started = 0
let remaining = frames[0].duration
let media: MediaQueryList | undefined
let resizeObserver: ResizeObserver | undefined
let disposed = false

function pause() {
  if (timer === undefined) return
  clearTimeout(timer)
  timer = undefined
  remaining = Math.max(0, remaining - (performance.now() - started))
}
function resume() {
  if (disposed || !ready.value || !props.running || reduced.value || timer !== undefined) return
  started = performance.now()
  timer = setTimeout(() => {
    timer = undefined
    step.value = (step.value + 1) % frames.length
    remaining = frames[step.value].duration
    resume()
  }, remaining)
}
function syncMotion() { reduced.value = media?.matches ?? true }
watch(() => [props.running, reduced.value, ready.value], () => {
  pause()
  resume()
})
// Follow the newest tool/result as a real chat does. Reset at the next run.
watch(() => [phase.value, ready.value], () => {
  const el = conversation.value
  if (!el) return
  el.scrollTo({
    top: phase.value < 3 ? 0 : el.scrollHeight,
    behavior: reduced.value || phase.value === 0 ? 'instant' : 'smooth',
  })
}, { flush: 'post' })
onMounted(() => {
  media = window.matchMedia('(prefers-reduced-motion: reduce)')
  syncMotion()
  media.addEventListener('change', syncMotion)
  if ('ResizeObserver' in window) {
    resizeObserver = new ResizeObserver(() => {
      const el = conversation.value
      if (el && phase.value >= 3) el.scrollTo({ top: el.scrollHeight, behavior: 'instant' })
    })
    if (conversation.value) resizeObserver.observe(conversation.value)
  }
  ready.value = true
})
onUnmounted(() => {
  disposed = true
  pause()
  resizeObserver?.disconnect()
  media?.removeEventListener('change', syncMotion)
})
</script>

<template>
  <div class="mock-agent-run" :data-phase="phase">
    <div class="agent-topbar">
      <span>deepseek-flash <MockIcon name="down" /></span>
      <MockIcon name="plus" /><MockIcon name="more" />
    </div>

    <div ref="conversation" class="agent-conversation">
      <div class="agent-prompt">explain this project <MockIcon name="file" /></div>
      <div class="agent-progress">
        <MockIcon v-if="done || phase === 2" name="check" class="success-icon" />
        <i v-else class="agent-spinner" :class="{ 'is-still': phase === 1 }"></i>
        <div><b>{{ frame.detail }}</b><span>{{ frame.status }}</span></div>
        <span class="progress-count">{{ frame.count }}/4</span>
      </div>

      <div class="agent-plan">
        <div class="plan-header"><MockIcon :name="approved ? 'check' : 'spark'" /><span>Planning</span><span>{{ done ? '1/1' : '0/1' }}</span><MockIcon name="down" /></div>
        <div class="plan-description">Inspect files, understand the project,<br>then explain how to run it.</div>
        <div v-if="!approved" class="plan-approval" :class="{ 'awaiting-approval': phase === 1 }">
          <span>Tools start after your approval.</span>
          <span class="approve-action"><MockIcon name="check" /> Approve this run</span>
        </div>
        <div v-else class="plan-approved"><MockIcon name="check" /> Plan approved <span>Read-only inspection</span></div>
      </div>

      <div v-if="phase >= 3" class="agent-tools">
        <div v-for="(task, index) in tasks" v-show="index <= frame.count" :key="task" class="tool-row" :class="{ 'tool-done': index < frame.count }">
          <MockIcon v-if="index < frame.count" name="check" /><i v-else class="agent-spinner"></i>
          <span>{{ index < frame.count ? task : activeTasks[index] }}</span><MockIcon name="down" />
        </div>
      </div>
      <div v-else-if="!approved" class="agent-plan-note"><MockIcon name="spark" /><p>I'll map the repository and inspect its entry points. No files will be changed.</p></div>

      <div v-if="done" class="agent-result">
        <div><MockIcon name="spark" /><b>Here's how it works</b></div>
        <p>A Python sorting benchmark with a local web dashboard.</p>
        <code>python webapp.py</code>
        <span><MockIcon name="check" /> 4 tools completed · No files changed</span>
      </div>
      <div v-else-if="phase === 7" class="agent-thinking"><span></span><span></span><span></span> Putting it all together</div>
    </div>

    <div class="agent-composer">
      <span>Type a message or ask a question</span>
      <div><span>N</span><span>/</span><MockIcon name="plus" /><span><MockIcon name="confirm" /> Confirm</span><b>LOW</b><MockIcon name="up" /></div>
    </div>
  </div>
</template>

<style scoped>
.mock-agent-run { display: flex; flex: 1; flex-direction: column; min-height: 0; font-size: 1em; color: var(--mock-ink); }
.mock-agent-run svg { width: 1.65em; height: 1.65em; flex: none; }
.agent-topbar { display: flex; align-items: center; gap: 2.3em; height: 3.4em; padding: 0 1.15em; border-bottom: .1em solid var(--mock-line); flex: none; color: var(--mock-muted); }
.agent-topbar > span { display: flex; align-items: center; gap: .4em; margin-right: auto; color: var(--mock-ink); font-size: 1.12em; white-space: nowrap; }
.agent-topbar svg { width: 1.15em; height: 1.15em; }
.agent-spinner { display: inline-block; width: 1.3em; height: 1.3em; border: .18em solid currentColor; border-right-color: transparent; border-bottom-color: transparent; border-radius: 50%; color: var(--mock-accent-text); flex: none; }
.agent-conversation { flex: 1; min-height: 0; overflow: hidden; padding: 1.6em 1em .6em; }
.agent-prompt { display: flex; align-items: center; justify-content: space-between; margin-left: 3.2em; padding: .8em .95em; border-radius: .85em; background: var(--mock-control); font-size: 1.1em; }.agent-prompt svg { width: 1em; height: 1em; color: var(--mock-muted); }
.agent-progress { display: flex; align-items: center; gap: .8em; margin: 1.8em .3em 1.3em; }.agent-progress > div { display: flex; flex-direction: column; gap: .1em; }.agent-progress b { font-size: 1.12em; font-weight: 500; }.agent-progress > div > span { font-size: .95em; color: var(--mock-accent-text); }.progress-count { margin-left: auto; color: var(--mock-muted); font-size: .95em; }.success-icon { color: var(--mock-green); }
.agent-plan { border: .1em solid var(--mock-line); border-radius: .8em; background: var(--mock-panel); overflow: hidden; }
.plan-header { display: flex; align-items: center; gap: .6em; padding: .65em .8em; border-bottom: .1em solid var(--mock-line); font-size: 1.1em; }.plan-header svg { width: 1.1em; height: 1.1em; color: var(--mock-accent-text); }.plan-header > span:nth-of-type(2) { margin-left: auto; color: var(--mock-muted); font-size: .9em; }
.plan-description { margin: .6em; padding: .7em .8em; border-radius: .8em; background: var(--mock-panel); font-size: 1.02em; line-height: 1.55; }
.plan-approval { margin: .6em; padding: .7em; border-left: .2em solid var(--mock-amber); border-radius: .6em; background: var(--mock-elevated); display: flex; flex-direction: column; align-items: flex-start; gap: .65em; font-size: .95em; color: var(--mock-secondary); }
.approve-action { display: flex; align-items: center; gap: .5em; padding: .45em .85em; margin-left: auto; border-radius: 2em; background: var(--mock-accent); color: var(--mock-on-accent); }.approve-action svg { width: 1em; height: 1em; }
.plan-approved { display: flex; align-items: center; gap: .4em; padding: .2em .8em .8em; color: var(--mock-green); font-size: .85em; }.plan-approved svg { width: 1.1em; height: 1.1em; }.plan-approved > span { color: var(--mock-muted); margin-left: auto; font-size: .95em; }
.agent-tools { margin-top: 1.2em; }.tool-row { display: flex; align-items: center; gap: .6em; min-height: 2.35em; font-size: 1.02em; color: var(--mock-secondary); }.tool-row > svg:first-child { color: var(--mock-green); width: 1.2em; height: 1.2em; }.tool-row > svg:last-child { margin-left: auto; color: var(--mock-muted); width: 1em; height: 1em; }.tool-row .agent-spinner { width: 1.1em; height: 1.1em; }
.agent-plan-note { display: flex; gap: .7em; margin: 1.6em .3em; color: var(--mock-muted); font-size: 1.04em; }.agent-plan-note p { color: var(--mock-muted); }.agent-plan-note > svg { color: var(--mock-accent-text); }.mock-agent-run p { margin: 0; font-size: 1em; line-height: 1.6; }
.agent-result { margin-top: 1em; padding: .9em; border: .1em solid var(--mock-line); border-radius: .8em; background: var(--mock-surface); font-size: 1em; }.agent-result > div { display: flex; align-items: center; gap: .6em; margin-bottom: .5em; }.agent-result > div > svg { width: 1.2em; height: 1.2em; color: var(--mock-accent-text); }.agent-result p { color: var(--mock-secondary); }.agent-result code { display: block; margin: .6em 0; padding: .55em .7em; border-radius: .4em; font: .95em/1.4 var(--vp-font-family-mono); color: var(--mock-accent-text); background: var(--mock-panel); }.agent-result > span { display: flex; align-items: center; gap: .4em; color: var(--mock-green); font-size: .8em; }.agent-result > span > svg { width: 1em; height: 1em; }
.agent-thinking { display: flex; align-items: center; gap: .35em; margin: 1.5em .2em; color: var(--mock-muted); font-size: .95em; }.agent-thinking > span { width: .3em; height: .3em; background: var(--mock-accent); border-radius: 50%; }.agent-thinking > span:last-of-type { margin-right: .5em; }
.agent-composer { flex: none; margin: .55em .8em; padding: .55em .9em 1em; border-radius: 1.15em; background: var(--mock-control); color: var(--mock-secondary); }
.agent-composer > span { font-size: 1.04em; }
.agent-composer > div { display: flex; align-items: center; gap: 1.35em; margin: 1.25em .8em 0; color: var(--mock-muted); }
.agent-composer svg { width: 1.35em; height: 1.35em; }
.agent-composer > div > span { display: flex; align-items: center; gap: .4em; font-size: .86em; }
.agent-composer b { font-size: .82em; }
.agent-composer > div > svg:last-child { margin-left: auto; }
@media (prefers-reduced-motion: no-preference) {
  .agent-spinner:not(.is-still) { animation: agent-spin 1s linear infinite; animation-play-state: var(--mock-motion, paused); }
  .awaiting-approval .approve-action { animation: agent-approve 2.8s ease-in-out both; animation-play-state: var(--mock-motion, paused); }
  .tool-row, .agent-result { animation: agent-reveal .4s ease-out both; animation-play-state: var(--mock-motion, paused); }
  .agent-thinking > span { animation: agent-think 1.2s ease-in-out infinite; animation-play-state: var(--mock-motion, paused); }.agent-thinking > span:nth-child(2) { animation-delay: .15s; }.agent-thinking > span:nth-child(3) { animation-delay: .3s; }
}
@keyframes agent-spin { to { transform: rotate(360deg); } }
@keyframes agent-approve { 0%, 65% { box-shadow: 0 0 0 0 transparent; } 80% { box-shadow: 0 0 0 .4em var(--mock-accent-glow); transform: scale(1); } 90% { transform: scale(.96); } 100% { transform: scale(1); box-shadow: 0 0 0 0 transparent; } }
@keyframes agent-reveal { from { opacity: 0; transform: translateY(.4em); } to { opacity: 1; transform: translateY(0); } }
@keyframes agent-think { 0%, 100% { opacity: .3; } 50% { opacity: 1; } }
</style>
