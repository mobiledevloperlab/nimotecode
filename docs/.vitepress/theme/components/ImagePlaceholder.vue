<script setup lang="ts">
import { computed } from 'vue'
import {
  placeholderImages,
  type PlaceholderImage,
  type PlaceholderImageKey
} from '../image-registry'

const props = defineProps<{
  imageKey: PlaceholderImageKey
  alt: string
}>()

const image = computed<PlaceholderImage>(() => ({
  ipad: { src: null },
  ...placeholderImages[props.imageKey]
}))
const hasImages = computed(() => Boolean(image.value.phone?.src || image.value.ipad?.src))
const hasSingleDeviceImage = computed(
  () => Boolean(image.value.phone?.src) !== Boolean(image.value.ipad?.src)
)
</script>

<template>
  <div
    class="seo-media-placeholder"
    :class="[
      'seo-media-placeholder--device-pair',
      {
        'has-image': hasImages,
        'has-single-device-image': hasSingleDeviceImage
      }
    ]"
    :role="hasImages ? undefined : 'img'"
    :aria-label="hasImages ? undefined : alt"
  >
    <div v-if="hasImages" class="seo-media-placeholder__device-pair">
      <figure v-if="image.phone?.src" class="seo-media-placeholder__device seo-media-placeholder__device--phone">
        <img
          class="seo-media-placeholder__image"
          :src="image.phone?.src"
          :alt="`${alt} — phone`"
          :width="image.phone?.width"
          :height="image.phone?.height"
          loading="lazy"
          decoding="async"
        >
        <figcaption class="seo-media-placeholder__caption">{{ alt }}</figcaption>
      </figure>
      <figure v-if="image.ipad?.src" class="seo-media-placeholder__device seo-media-placeholder__device--ipad">
        <img
          class="seo-media-placeholder__image"
          :src="image.ipad.src"
          :alt="`${alt} — iPad`"
          :width="image.ipad.width"
          :height="image.ipad.height"
          loading="lazy"
          decoding="async"
        >
        <figcaption class="seo-media-placeholder__caption">{{ alt }}</figcaption>
      </figure>
    </div>
    <slot v-else />
  </div>
</template>
