<script setup lang="ts">
import NavMobile from './NavMobile.vue'

const isMobileMenuOpen = ref(false)
</script>

<template>
  <UButton
    class="lg:hidden"
    color="neutral"
    variant="outline"
    size="lg"
    icon="lucide:menu"
    aria-label="Open menu"
    @click="isMobileMenuOpen = true"
  />

  <UDrawer
    v-model:open="isMobileMenuOpen"
    direction="bottom"
  >
    <template #body>
      <div
        class="h-full bg-gray-900/80 p-4 backdrop-blur-xl"
      >
        <NavMobile />
      </div>
    </template>
  </UDrawer>
</template>
