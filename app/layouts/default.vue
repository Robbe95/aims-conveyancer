<script setup lang="ts">
import BackgroundImage from '~/components/background/BackgroundImage.vue'
import ContentWrapper from '~/components/content-wrapper/ContentWrapper.vue'
</script>

<template>
  <div
    class="
      relative flex h-dvh w-full items-stretch justify-center overflow-hidden
      lg:h-screen lg:items-center
    "
  >
    <BackgroundImage class="absolute top-0 left-0 max-h-dvh overflow-hidden" />
    <ContentWrapper class="max-h-dvh max-w-500 overflow-hidden">
      <slot />
    </ContentWrapper>
  </div>
</template>
