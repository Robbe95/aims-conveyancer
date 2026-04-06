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

const title = 'Aimee Summers | UK Conveyancing'
const description = 'Friendly, reliable UK conveyancing support from offer to completion. Clear communication, careful legal work, and honest timelines.'

useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogTitle: title,
  twitterCard: 'summary_large_image',
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
