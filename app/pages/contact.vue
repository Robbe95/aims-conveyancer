<script setup lang="ts">
import MeetingButton from '~/components/meeting-button/MeetingButton.vue'
import MotionScaleIn from '~/components/motion/MotionScaleIn.vue'
import MotionSlideUp from '~/components/motion/MotionSlideUp.vue'
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
    <MotionSlideUp :delay="0.05">
      <UIContentTitle
        :title="t('contact.title')"
        :description="t('contact.description')"
      />
    </MotionSlideUp>

    <MotionSlideUp :delay="0.15">
      <UIText tone="soft">
        {{ t('contact.intro') }}
      </UIText>
    </MotionSlideUp>

    <div
      class="
        grid gap-4
        sm:grid-cols-2
      "
    >
      <MotionScaleIn :delay="0.25">
        <MeetingButton />
      </MotionScaleIn>

      <MotionScaleIn :delay="0.35">
        <UButton
          :to="WHATSAPP_URL"
          target="_blank"
          rel="noopener noreferrer"
          color="neutral"
          size="lg"
          variant="solid"
          class="w-full text-center"
          trailing-icon="ic:baseline-whatsapp"
        >
          <span class="flex w-full items-center justify-center">
            {{ t('contact.cta.whatsapp') }}
          </span>
        </UButton>
      </MotionScaleIn>
    </div>

    <MotionSlideUp :delay="0.45">
      <div
        class="
          rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm
        "
      >
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
            class="font-medium transition-transform duration-200"
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
            class="font-medium transition-transform duration-200"
          >
            {{ t('contact.socials.instagram') }}
          </UButton>
        </UIRow>
      </div>
    </MotionSlideUp>
  </UIColumn>
</template>
