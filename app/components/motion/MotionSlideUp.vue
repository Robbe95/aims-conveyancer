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
      y: 0,
    }"
    :initial="{
      filter: 'blur(4px)',
      opacity: 0,
      y: 18,
    }"
    :transition="{
      delay,
      duration: 0.5,
      ease: 'easeOut',
    }"
  >
    <slot />
  </Motion>
</template>
