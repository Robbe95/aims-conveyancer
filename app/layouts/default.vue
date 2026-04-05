<script setup lang="ts">
import BackgroundImage from '~/components/background/BackgroundImage.vue'
import ContentWrapper from '~/components/content-wrapper/ContentWrapper.vue'
</script>

<template>
  <div
    class="
      relative flex min-h-dvh w-full items-stretch justify-center
      lg:h-screen lg:items-center
    "
  >
    <BackgroundImage class="absolute top-0 left-0" />
    <ContentWrapper>
      <slot />
    </ContentWrapper>
  </div>
</template>
