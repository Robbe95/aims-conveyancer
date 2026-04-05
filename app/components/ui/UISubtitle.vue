<script setup lang="ts">
withDefaults(defineProps<{
  tag?: string
}>(), {
  tag: 'h2',
})
</script>

<template>
  <component
    :is="tag"
    class="text-2xl font-semibold"
  >
    <slot />
  </component>
</template>
