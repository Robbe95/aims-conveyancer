<script setup lang="ts">
withDefaults(defineProps<{
  gap?: '1' | '2' | '3' | '4' | '6'
  tag?: string
}>(), {
  gap: '4',
  tag: 'div',
})

const gapClassMap = {
  1: 'gap-1',
  2: 'gap-2',
  3: 'gap-3',
  4: 'gap-4',
  6: 'gap-6',
} as const
</script>

<template>
  <component
    :is="tag"
    :class="gapClassMap[gap]"
    class="flex flex-row"
  >
    <slot />
  </component>
</template>
