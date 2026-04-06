<script setup lang="ts">
import Nav from '../nav/Nav.vue'
</script>

<template>
  <div
    class="
      z-20 min-h-dvh w-full p-4
      sm:p-6
      lg:h-screen lg:px-16 lg:py-10
      xl:px-24 xl:py-14
    "
  >
    <div
      class="
        custom-card-glow h-full min-h-0 grid-cols-1 gap-6 rounded-2xl border
        border-white/10 bg-gray-800/50 p-4 backdrop-blur-md
        sm:p-6
        lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-8 lg:p-10
      "
    >
      <div class="relative min-h-0 overflow-y-auto rounded-xl pr-1">
        <slot />
      </div>

      <div
        class="
          hidden
          lg:block
        "
      >
        <Nav />
      </div>
    </div>
  </div>
</template>
