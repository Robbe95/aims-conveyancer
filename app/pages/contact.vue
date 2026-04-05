<script setup lang="ts">
import MeetingButton from '~/components/meeting-button/MeetingButton.vue'
import UIColumn from '~/components/ui/UIColumn.vue'
import UIContentTitle from '~/components/ui/UIContentTitle.vue'
import UIRow from '~/components/ui/UIRow.vue'
import UISubtitle from '~/components/ui/UISubtitle.vue'
import UIText from '~/components/ui/UIText.vue'
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
  <UIColumn
    tag="section"
    gap="4"
    class="text-white"
  >
    <UIContentTitle
      :title="t('contact.title')"
      :description="t('contact.description')"
    />

    <UIText tone="soft">
      {{ t('contact.intro') }}
    </UIText>

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
      <UISubtitle class="mb-3 text-xl">
        {{ t('contact.socials.heading') }}
      </UISubtitle>
      <UIRow
        gap="3"
        class="flex-wrap"
      >
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
      </UIRow>
    </div>
  </UIColumn>
</template>
