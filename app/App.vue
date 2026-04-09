<script setup lang="ts">
import {
  AnimatePresence,
  easeOut,
  Motion,
} from 'motion-v'

import { useHead } from '#app'

useHead({
  link: [
    {
      href: '/favicon.ico',
      rel: 'icon',
    },
    {
      href: '/apple-touch-icon.png',
      rel: 'apple-touch-icon',
      sizes: '180x180',
    },
  ],
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],
})

const pageInitial = {
  filter: 'blur(8px)',
  opacity: 0,
  scale: 1,
  y: 26,
}

const pageAnimate = {
  filter: 'blur(0px)',
  opacity: 1,
  scale: 1,
  y: 0,
}

const pageExit = {
  filter: 'blur(4px)',
  opacity: 0,
  scale: 1.01,
  y: -18,
}

const pageTransition = {
  duration: 0.3,
  ease: easeOut,
}
</script>

<template>
  <UApp>
    <UMain>
      <NuxtLayout>
        <NuxtPage v-slot="{ Component, route }">
          <AnimatePresence mode="popLayout">
            <Motion
              :key="route.path"
              :initial="pageInitial"
              :animate="pageAnimate"
              :exit="pageExit"
              :transition="pageTransition"
              class="will-change-transform"
            >
              <component :is="Component" />
            </Motion>
          </AnimatePresence>
        </NuxtPage>
      </NuxtLayout>
    </UMain>
  </UApp>
</template>
