<script setup lang="ts">
import { CALENDLY_URL } from '~/constants/calendly.constant'

const {
  t,
} = useI18n()
const calendly = useCalendly()

function openCalendly(): void {
  calendly.showPopupWidget(CALENDLY_URL)
}
</script>

<template>
  <UButton
    color="primary"
    class="w-full text-center"
    variant="solid"
    trailing-icon="material-symbols:calendar-add-on-rounded"
    size="lg"
    @click="openCalendly"
  >
    <div class="flex w-full items-center justify-center">
      {{ t('nav.schedule_a_meeting') }}
    </div>
  </UButton>
</template>
