<script setup lang="ts">
import { Motion } from 'motion-v'
import {
  onMounted,
  ref,
} from 'vue'

interface FloatingDot {
  id: number
  delay: number
  duration: number
  left: number
  opacity: number
  size: number
}

const dots = ref<FloatingDot[]>([])

onMounted(() => {
  const generatedDots: FloatingDot[] = []

  for (let i = 0; i < 40; i++) {
    generatedDots.push({
      id: i,
      delay: Math.random() * 15,
      duration: 18 + Math.random() * 22,
      left: Math.random() * 100,
      opacity: 1,
      size: 1.5 + Math.random() * 2.5,
    })
  }

  dots.value = generatedDots
})
</script>

<template>
  <div
    class="
      pointer-events-none absolute inset-0 z-0 size-full overflow-hidden
      bg-neutral-950
    "
  >
    <NuxtImg
      src="/bg.jpg"
      alt=""
      class="absolute inset-0 z-0 size-full object-cover opacity-80"
    />
    <!-- Dark overlay for contrast -->
    <div class="absolute inset-0 z-0 bg-neutral-950/60" />

    <!-- Center Gradient Glow -->
    <div
      class="
        absolute top-1/2 left-1/2 z-10 h-[60vw] max-h-200 w-[60vw] max-w-200
        -translate-1/2 animate-pulse rounded-full bg-emerald-500/20 blur-[120px]
        transition-opacity duration-1000
      "
    />

    <!-- Floating Dots -->
    <div class="absolute inset-0 z-10 overflow-hidden">
      <Motion
        v-for="dot in dots"
        :key="dot.id"
        :initial="{
          opacity: 0,
          y: '100vh',
        }"
        :animate="{
          opacity: [1],
          y: ['100vh', '60vh', '30vh', '-10vh'],
        }"
        :transition="{
          delay: dot.delay,
          duration: dot.duration,
          ease: 'linear',
          repeat: Infinity,
        }"
        :style="{
          height: `${dot.size}px`,
          left: `${dot.left}%`,
          width: `${dot.size}px`,
        }"
        class="absolute rounded-full bg-white"
      />
    </div>
  </div>
</template>
