<script setup lang="ts">
withDefaults(defineProps<{
  tag?: string
  tone?: 'default' | 'muted' | 'soft'
}>(), {
  tag: 'p',
  tone: 'default',
})

const toneClassMap = {
  default: 'text-white',
  muted: 'text-white/80',
  soft: 'text-white/85',
} as const
</script>

<template>
  <component
    :is="tag"
    :class="toneClassMap[tone]"
  >
    <slot />
  </component>
</template>
