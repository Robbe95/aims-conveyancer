<script setup lang="ts">
import Nav from '../nav/Nav.vue'
</script>

<template>
  <div class="z-20 h-screen w-screen px-40 py-20">
    <div
      class="
        grid size-full grid-cols-[1fr_auto] gap-12 rounded-2xl bg-gray-800/50
        p-12 backdrop-blur-md
      "
    >
      <div class="relative overflow-hidden rounded-xl">
        <slot />
      </div>
      <Nav />
    </div>
  </div>
</template>
