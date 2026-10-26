<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, watch } from 'vue'
import { useData, useRoute } from 'vitepress'
import NotFound from 'vitepress/dist/client/theme-default/NotFound.vue'
import VPHome from 'vitepress/dist/client/theme-default/components/VPHome.vue'
import VPNav from 'vitepress/dist/client/theme-default/components/VPNav.vue'
import VPSkipLink from 'vitepress/dist/client/theme-default/components/VPSkipLink.vue'
import SiteAnalytics from './SiteAnalytics.vue'
import SiteFooter from './SiteFooter.vue'
import NavDownload from './components/NavDownload.vue'

const { frontmatter, page } = useData()

/* Scroll reveal ---------------------------------------------------------
   Elements carrying `data-reveal` fade/slide in as they enter the viewport.
   Only observed elements receive a pending state. Content stays visible
   without JS, during navigation, and when reduced motion is requested. */
let revealObserver: IntersectionObserver | null = null
let motionPreference: MediaQueryList | null = null
let disposed = false
let spotlightFrame = 0
let spotlightPoint: { element: HTMLElement; x: number; y: number } | null = null

function moveSpotlight(event: PointerEvent): void {
  if (event.pointerType !== 'mouse' || motionPreference?.matches) return
  const element = (event.target as Element).closest<HTMLElement>(
    '.home-page-pillar, .home-page-community-card, .home-page-guide-card'
  )
  if (!element) return
  spotlightPoint = { element, x: event.clientX, y: event.clientY }
  if (spotlightFrame) return
  spotlightFrame = requestAnimationFrame(() => {
    spotlightFrame = 0
    if (!spotlightPoint?.element.isConnected) return
    const { element, x, y } = spotlightPoint
    const rect = element.getBoundingClientRect()
    element.style.setProperty('--pointer-x', `${x - rect.left}px`)
    element.style.setProperty('--pointer-y', `${y - rect.top}px`)
  })
}

function setupReveal(): void {
  if (typeof window === 'undefined' || disposed) return
  revealObserver?.disconnect()
  document.querySelectorAll('.reveal-pending').forEach(el => el.classList.remove('reveal-pending'))
  if (motionPreference?.matches || !('IntersectionObserver' in window)) return

  // Both locales use the same reveal rhythm, without requiring duplicate markup.
  const els = Array.from(document.querySelectorAll<HTMLElement>(
    '[data-reveal], .home-page-section-head, .home-page-pillar, .home-page-community-card, .home-page-guide-card'
  ))
  if (!els.length) return

  revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const el = entry.target as HTMLElement
        el.classList.add('is-revealed')
        el.classList.remove('reveal-pending')
        revealObserver?.unobserve(el)
      }
    },
    { threshold: 0, rootMargin: '0px 0px -24px 0px' }
  )

  const viewport = window.innerHeight
  for (const el of els) {
    el.setAttribute('data-reveal', '')
    const rect = el.getBoundingClientRect()
    if (rect.top < viewport || el.matches(':focus-within')) {
      el.classList.add('is-revealed')
    } else {
      el.classList.remove('is-revealed')
      el.classList.add('reveal-pending')
      revealObserver.observe(el)
    }
  }
}

const route = useRoute()
const isReleaseRoute = computed(() => /^\/(?:(?:zh|ja|ko|es)\/)?releases(?:\/|$)/.test(route.path))
const isReleaseIndex = computed(() => /^\/(?:(?:zh|ja|ko|es)\/)?releases\/?$/.test(route.path))
onMounted(() => {
  motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
  motionPreference.addEventListener('change', setupReveal)
  setupReveal()
  watch(
    () => route.path,
    () => nextTick(setupReveal)
  )
})
onBeforeUnmount(() => {
  disposed = true
  cancelAnimationFrame(spotlightFrame)
  spotlightPoint = null
  revealObserver?.disconnect()
  motionPreference?.removeEventListener('change', setupReveal)
})
</script>

<template>
  <SiteAnalytics />
  <div v-if="frontmatter.layout !== false" class="Layout nimote-marketing-layout" :class="[frontmatter.pageClass, { 'release-page': isReleaseRoute, 'release-index': isReleaseIndex, 'release-detail': isReleaseRoute && !isReleaseIndex }]" @pointermove="moveSpotlight">
    <VPSkipLink />
    <VPNav><template #nav-bar-content-before><NavDownload /></template></VPNav>
    <main id="VPContent" class="nimote-marketing-main">
      <NotFound v-if="page.isNotFound" />
      <VPHome v-else-if="frontmatter.layout === 'home'" />
      <div v-else class="nimote-marketing-doc">
        <Content class="vp-doc" />
      </div>
    </main>
    <SiteFooter />
  </div>
  <Content v-else />
</template>
