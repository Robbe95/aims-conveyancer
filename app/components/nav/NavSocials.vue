<script setup lang="ts">
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  WHATSAPP_URL,
} from '~/constants/socials.constant'
</script>

<template>
  <div class="flex flex-row justify-end gap-1">
    <UButton
      :to="FACEBOOK_URL"
      icon="ic:baseline-facebook"
      size="lg"
      color="neutral"
      variant="ghost"
      target="_blank"
    />
    <UButton
      :to="INSTAGRAM_URL"
      icon="mdi:instagram"
      size="lg"
      color="neutral"
      variant="ghost"
      target="_blank"
    />
    <UButton
      :to="WHATSAPP_URL"
      icon="ic:baseline-whatsapp"
      size="lg"
      color="neutral"
      variant="ghost"
      target="_blank"
    />
  </div>
</template>
