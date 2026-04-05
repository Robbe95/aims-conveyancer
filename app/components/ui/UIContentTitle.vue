<script setup lang="ts">
import NavMobileMenu from '../nav/NavMobileMenu.vue'

interface Props {
  title: string
  description: string
}

const props = defineProps<Props>()
</script>

<template>
  <header class="space-y-2">
    <div class="flex items-start justify-between gap-3">
      <h1
        class="
          text-3xl/tight text-primary
          sm:text-4xl
          lg:text-5xl
        "
      >
        {{ props.title }}
      </h1>

      <NavMobileMenu />
    </div>

    <p>
      {{ props.description }}
    </p>
  </header>
</template>
