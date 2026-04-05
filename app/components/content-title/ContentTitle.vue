<script setup lang="ts">
interface Props {
  title: string
  description: string
}
const props = defineProps<Props>()
</script>

<template>
  <header class="space-y-2">
    <h1 class="text-5xl text-primary">
      {{ props.title }}
    </h1>
    <p>
      {{ props.description }}
    </p>
  </header>
</template>
