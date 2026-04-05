<script setup lang="ts">
import {
  AnimatePresence,
  easeOut,
  Motion,
} from 'motion-v'

import {
  useHead,
  useSeoMeta,
} from '#app'

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      href: '/favicon.ico',
      rel: 'icon',
    },
  ],
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],
})

const title = 'Nuxt Starter Template'
const description = 'A production-ready starter template powered by Nuxt UI. Build beautiful, accessible, and performant applications in minutes, not hours.'

useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  ogTitle: title,
  twitterCard: 'summary_large_image',
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
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
