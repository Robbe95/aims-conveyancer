<script setup lang="ts">
withDefaults(defineProps<{
  gap?: '1' | '2' | '3'
}>(), {
  gap: '1',
})

const gapClassMap = {
  1: 'gap-1',
  2: 'gap-2',
  3: 'gap-3',
} as const
</script>

<template>
  <ul
    :class="gapClassMap[gap]"
    class="flex list-disc flex-col pl-6"
  >
    <slot />
  </ul>
</template>
