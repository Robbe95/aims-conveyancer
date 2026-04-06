<script setup lang="ts">
import { Motion } from 'motion-v'

withDefaults(defineProps<{
  delay?: number
  tag?: 'div' | 'li' | 'section' | 'span'
}>(), {
  delay: 0,
  tag: 'div',
})
</script>

<template>
  <Motion
    :as="tag"
    :animate="{
      opacity: 1,
      x: 0,
    }"
    :initial="{
      opacity: 0,
      x: 12,
    }"
    :transition="{
      delay,
      duration: 0.4,
      ease: 'easeOut',
    }"
  >
    <slot />
  </Motion>
</template>
