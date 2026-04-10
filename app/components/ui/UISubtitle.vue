<script setup lang="ts">
import UIDivider from './UIDivider.vue'

withDefaults(defineProps<{
  tag?: string
}>(), {
  tag: 'h2',
})
</script>

<template>
  <component
    :is="tag"
    class="text-lg font-semibold text-primary"
  >
    <slot />
  </component>
  <UIDivider class="my-2" />
</template>
