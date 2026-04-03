<script setup lang="ts">
import BackgroundImage from '~/components/background/BackgroundImage.vue'
import ContentWrapper from '~/components/content-wrapper/ContentWrapper.vue'
</script>

<template>
  <div class="relative flex h-screen w-screen items-center justify-center">
    <BackgroundImage class="absolute top-0 left-0" />
    <ContentWrapper />
  </div>
</template>
