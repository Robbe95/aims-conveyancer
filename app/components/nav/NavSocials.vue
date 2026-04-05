<script setup lang="ts">
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  WHATSAPP_URL,
} from '~/constants/socials.constant'

const {
  t,
} = useI18n()
</script>

<template>
  <div
    class="
      mt-1 flex flex-wrap items-center justify-start gap-1
      lg:justify-end
    "
  >
    <UButton
      :to="FACEBOOK_URL"
      :name="t('nav.socials.link_to_facebook')"
      icon="ic:baseline-facebook"
      size="lg"
      color="neutral"
      variant="ghost"
      target="_blank"
    />
    <UButton
      :to="INSTAGRAM_URL"
      :name="t('nav.socials.link_to_instagram')"
      icon="mdi:instagram"
      size="lg"
      color="neutral"
      variant="ghost"
      target="_blank"
    />
    <UButton
      :to="WHATSAPP_URL"
      :name="t('nav.socials.link_to_whatsapp')"
      icon="ic:baseline-whatsapp"
      size="lg"
      color="neutral"
      variant="ghost"
      target="_blank"
    />
  </div>
</template>
