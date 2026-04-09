<script setup lang="ts">
import { CALENDLY_URL } from '~/constants/socials.constant'

const {
  t,
} = useI18n()
const calendly = useCalendly()

function getCalendlyPopupUrl(): string {
  const url = new URL(CALENDLY_URL)

  url.searchParams.set('primary_color', '56d197')
  url.searchParams.set('hide_event_type_details', '1')
  url.searchParams.set('hide_landing_page_details', '1')

  return url.toString()
}

function openCalendly(): void {
  calendly.initPopupWidget({
    iframeTitle: t('nav.schedule_a_meeting'),
    url: getCalendlyPopupUrl(),
  })
}
</script>

<template>
  <UButton
    color="primary"
    class="text-center"
    variant="solid"
    trailing-icon="material-symbols:calendar-add-on-rounded"
    size="lg"
    @click="openCalendly"
  >
    <span class="flex w-full items-center justify-center">
      {{ t('nav.schedule_a_meeting') }}
    </span>
  </UButton>
</template>

<style>
.calendly-overlay {
  background-color: rgba(12, 26, 33, 0.72) !important;
  backdrop-filter: blur(2px);
}

.calendly-overlay .calendly-popup,
.calendly-overlay .calendly-popup-content,
.calendly-overlay .calendly-popup-content > div,
.calendly-overlay .calendly-popup-content > iframe {
  background: transparent !important;
  background-color: transparent !important;
}

.calendly-popup-content {
  border-radius: 16px !important;
  background-color: transparent !important;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45) !important;
  overflow: hidden !important;
}

.calendly-overlay .calendly-spinner,
.calendly-overlay .calendly-spinner > div {
  background: transparent !important;
}
</style>
