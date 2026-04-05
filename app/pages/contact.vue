<script setup lang="ts">
import ContentTitle from '~/components/content-title/ContentTitle.vue'
import MeetingButton from '~/components/meeting-button/MeetingButton.vue'
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
  <section class="flex flex-col gap-4 text-white">
    <ContentTitle
      :title="t('contact.title')"
      :description="t('contact.description')"
    />

    <p class="text-white/85">
      {{ t('contact.intro') }}
    </p>

    <div
      class="
        grid gap-4
        sm:grid-cols-2
      "
    >
      <MeetingButton />

      <UButton
        :to="WHATSAPP_URL"
        target="_blank"
        rel="noopener noreferrer"
        color="neutral"
        variant="solid"
        trailing-icon="ic:baseline-whatsapp"
      >
        <span class="flex w-full items-center justify-center">
          {{ t('contact.cta.whatsapp') }}
        </span>
      </UButton>
    </div>

    <div class="rounded-xl border border-white/20 bg-black/20 p-5">
      <h2 class="mb-3 text-xl font-semibold">
        {{ t('contact.socials.heading') }}
      </h2>
      <div class="flex flex-wrap gap-3">
        <UButton
          :to="FACEBOOK_URL"
          target="_blank"
          rel="noopener noreferrer"
          color="neutral"
          variant="soft"
          size="lg"
          icon="ic:baseline-facebook"
          class="font-medium"
        >
          {{ t('contact.socials.facebook') }}
        </UButton>

        <UButton
          :to="INSTAGRAM_URL"
          target="_blank"
          rel="noopener noreferrer"
          color="neutral"
          variant="soft"
          size="lg"
          icon="mdi:instagram"
          class="font-medium"
        >
          {{ t('contact.socials.instagram') }}
        </UButton>
      </div>
    </div>
  </section>
</template>
