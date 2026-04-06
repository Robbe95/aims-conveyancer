<script setup lang="ts">
import { Motion } from 'motion-v'

withDefaults(defineProps<{
  delay?: number
  tag?: string
}>(), {
  delay: 0,
  tag: 'div',
})
</script>

<template>
  <Motion
    :as="tag"
    :animate="{
      filter: 'blur(0px)',
      opacity: 1,
      x: 0,
    }"
    :initial="{
      filter: 'blur(6px)',
      opacity: 0,
      x: 30,
    }"
    :transition="{
      delay,
      duration: 0.6,
      ease: 'easeOut',
    }"
  >
    <slot />
  </Motion>
</template>
