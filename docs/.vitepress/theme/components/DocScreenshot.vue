<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'
import { useData, withBase } from 'vitepress'

const props = defineProps<{ file: string; caption: string }>()
const { lang } = useData()
const translations = {
  en: { enlarge: 'Enlarge', enlargeLabel: 'Enlarge image', preview: 'Screenshot preview', original: 'Open original ↗', close: 'Close preview' },
  zh: { enlarge: '放大查看', enlargeLabel: '放大查看', preview: '截图预览', original: '打开原图 ↗', close: '关闭预览' },
  ja: { enlarge: '拡大表示', enlargeLabel: '画像を拡大', preview: 'スクリーンショットのプレビュー', original: '元の画像を開く ↗', close: 'プレビューを閉じる' },
  ko: { enlarge: '확대 보기', enlargeLabel: '이미지 확대', preview: '스크린샷 미리보기', original: '원본 열기 ↗', close: '미리보기 닫기' },
  es: { enlarge: 'Ampliar', enlargeLabel: 'Ampliar imagen', preview: 'Vista previa', original: 'Abrir original ↗', close: 'Cerrar vista previa' }
}
const labels = computed(() => translations[lang.value.split('-')[0] as keyof typeof translations] ?? translations.en)
const source = computed(() => withBase(`/images/placeholders/${props.file}`))
const thumbnail = computed(() => withBase(`/images/placeholders/thumbs/${props.file.replace(/\.[^.]+$/, '')}.webp`))
const dialog = ref<HTMLDialogElement>()
let previousOverflow: string | undefined

function open(event: MouseEvent) {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
  if (!dialog.value?.showModal) return
  event.preventDefault()
  previousOverflow = document.body.style.overflow
  dialog.value.showModal()
  document.body.style.overflow = 'hidden'
}

function unlockScroll() {
  if (previousOverflow === undefined) return
  document.body.style.overflow = previousOverflow
  previousOverflow = undefined
}

function close() {
  dialog.value?.close()
  unlockScroll()
}

onBeforeUnmount(unlockScroll)
</script>

<template>
  <figure class="doc-screenshot">
    <a class="doc-screenshot__stage" :href="source" target="_blank" rel="noopener" :aria-label="`${labels.enlargeLabel}: ${caption}`" @click="open">
      <img :src="thumbnail" :alt="caption" width="1080" height="2376" loading="lazy" decoding="async">
      <span class="doc-screenshot__zoom" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5" /></svg>
        {{ labels.enlarge }}
      </span>
    </a>
    <figcaption>{{ caption }}</figcaption>
  </figure>
  <Teleport to="body">
    <dialog ref="dialog" class="doc-image-viewer" :aria-label="labels.preview" @close="unlockScroll" @click="($event.target === dialog) && close()">
      <div class="doc-image-viewer__panel">
        <header class="doc-image-viewer__header">
          <span>{{ labels.preview }}</span>
          <div class="doc-image-viewer__actions">
            <a :href="source" target="_blank" rel="noopener">{{ labels.original }}</a>
            <button type="button" autofocus :aria-label="labels.close" @click="close">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m6 6 12 12M18 6 6 18" /></svg>
            </button>
          </div>
        </header>
        <div class="doc-image-viewer__canvas"><img :src="source" :alt="caption" width="1080" height="2376" loading="lazy"></div>
        <p class="doc-image-viewer__caption">{{ caption }}</p>
      </div>
    </dialog>
  </Teleport>
</template>

<style>
.vp-doc .doc-screenshots {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 24px;
  margin: 24px 0 28px;
}
.vp-doc figure.doc-screenshot {
  width: 246px;
  max-width: 100%;
  min-width: 0;
  margin: 24px auto 28px;
}
.vp-doc .doc-screenshots > .doc-screenshot {
  flex: 0 1 246px;
  margin: 0;
}
.vp-doc .doc-screenshots > .doc-screenshot:only-child { flex-basis: 246px; }
.vp-doc .doc-screenshot__stage {
  position: relative;
  display: flex;
  justify-content: center;
  padding: 12px 12px 30px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 28px;
  background: var(--nimote-bg-subtle);
  text-decoration: none;
  cursor: zoom-in;
  transition: border-color 160ms ease, background-color 160ms ease;
}
.vp-doc .doc-screenshot__stage:hover { border-color: var(--vp-c-text-3); }
.vp-doc .doc-screenshot__stage:focus-visible { outline: 2px solid var(--vp-c-brand-1); outline-offset: 4px; }
.vp-doc .doc-screenshot img {
  display: block;
  width: 220px;
  max-width: 100%;
  height: auto;
  margin: 0;
  border: 0;
  object-fit: contain;
  border-radius: 20px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 7%), 0 3px 6px rgb(0 0 0 / 5%), 0 14px 32px -12px rgb(0 0 0 / 24%);
}
.dark .vp-doc .doc-screenshot img { box-shadow: 0 0 0 1px rgb(255 255 255 / 12%), 0 14px 32px -12px rgb(0 0 0 / 65%); }
.doc-screenshot__zoom { position: absolute; right: 16px; bottom: 8px; display: flex; align-items: center; gap: 6px; font-size: 11px; line-height: 16px; color: var(--vp-c-text-2); }
.doc-screenshot__zoom svg { width: 14px; height: 14px; }
.vp-doc .doc-screenshot figcaption {
  padding: 0 4px;
  margin-top: 12px;
  color: var(--vp-c-text-2);
  font-size: 13px;
  line-height: 1.6;
  text-align: left;
}
.doc-image-viewer { width: min(960px, calc(100vw - 48px)); max-width: none; max-height: calc(100dvh - 48px); padding: 0; margin: auto; border: 1px solid var(--vp-c-divider); border-radius: 16px; color: var(--vp-c-text-1); background: var(--vp-c-bg); box-shadow: 0 24px 80px rgb(0 0 0 / 35%); }
.doc-image-viewer::backdrop { background: rgb(12 16 24 / 72%); backdrop-filter: blur(6px); }
.doc-image-viewer__header { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 12px 20px; border-bottom: 1px solid var(--vp-c-divider); font-size: 13px; }
.doc-image-viewer__actions { display: flex; align-items: center; gap: 16px; }
.doc-image-viewer__actions a { color: var(--vp-c-text-2); }
.doc-image-viewer__actions button { display: grid; place-items: center; width: 32px; height: 32px; border-radius: 6px; cursor: pointer; }
.doc-image-viewer__actions button:hover { background: var(--vp-c-bg-soft); }
.doc-image-viewer__actions svg { width: 20px; height: 20px; }
.doc-image-viewer__actions :focus-visible { outline: 2px solid var(--vp-c-brand-1); outline-offset: 3px; }
.doc-image-viewer__canvas { display: flex; justify-content: center; padding: 20px; background: var(--vp-c-bg-soft); }
.doc-image-viewer__canvas img { width: auto; height: auto; max-width: 100%; max-height: calc(100dvh - 230px); object-fit: contain; border-radius: 6px; }
.doc-image-viewer__caption { margin: 0; padding: 14px 20px; font-size: 13px; line-height: 1.6; color: var(--vp-c-text-2); }
@media (max-width: 639px) {
  .vp-doc .doc-screenshots > .doc-screenshot { flex-basis: 246px; }
  .doc-image-viewer { width: calc(100vw - 20px); max-height: calc(100dvh - 20px); border-radius: 12px; }
  .doc-image-viewer__header { padding: 10px 12px; }
  .doc-image-viewer__canvas { padding: 12px; }
  .doc-image-viewer__caption { padding: 12px; }
}
@media (prefers-reduced-motion: reduce) {
  .vp-doc .doc-screenshot__stage { transition: none; }
}
</style>
