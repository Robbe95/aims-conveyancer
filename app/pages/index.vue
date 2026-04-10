<script setup lang="ts">
import MotionSlideUp from '~/components/motion/MotionSlideUp.vue'
import UIColumn from '~/components/ui/UIColumn.vue'
import UIContentTitle from '~/components/ui/UIContentTitle.vue'
import UISubtitle from '~/components/ui/UISubtitle.vue'
import UIText from '~/components/ui/UIText.vue'

const {
  t,
} = useI18n()

useSeoMeta({
  title: t('home.title'),
  description: t('home.description'),
})

defineOgImage('MyOgImageTakumi', {
  title: t('home.title'),
  description: t('home.description'),
})

const SERVICES = [
  t('home.services.sales'),
  t('home.services.first_time_buyers'),
  t('home.services.remortgages'),
  t('home.services.transfer_of_equity'),
  t('home.services.bridging_loans'),
  t('home.services.auctions'),
  t('home.services.updates'),
]
</script>

<template>
  <UIColumn
    tag="section"
    gap="6"
    class="text-white"
  >
    <MotionSlideUp :delay="0.05">
      <UIContentTitle
        :title="t('home.title')"
        :description="t('home.description')"
      />
    </MotionSlideUp>

    <MotionSlideUp :delay="0.15">
      <UIText>
        {{ t('home.intro') }}
      </UIText>
    </MotionSlideUp>

    <UIColumn gap="2">
      <MotionSlideUp :delay="0.25">
        <UISubtitle>
          {{ t('home.services.heading') }}
        </UISubtitle>
      </MotionSlideUp>
      <ul class="flex list-none flex-col gap-2 pl-0">
        <MotionSlideUp
          v-for="(service, index) in SERVICES"
          :key="service"
          :delay="0.3 + index * 0.07"
          tag="li"
          class="flex items-center gap-3"
        >
          <span class="flex size-2 shrink-0 rounded-full bg-primary" />
          <span>{{ service }}</span>
        </MotionSlideUp>
      </ul>
    </UIColumn>

    <MotionSlideUp :delay="0.65">
      <UIText>
        {{ t('home.outro') }}
      </UIText>
    </MotionSlideUp>

    <MotionSlideUp :delay="0.75">
      <UIText tone="muted">
        <NuxtLink
          class="
            underline decoration-primary/50 underline-offset-4 transition-colors
            duration-300
            hover:decoration-primary
          "
          to="/about"
        >
          {{ t('home.cta.about') }}
        </NuxtLink>
        {{ ` ${t('home.cta.join')} ` }}
        <NuxtLink
          class="
            underline decoration-primary/50 underline-offset-4 transition-colors
            duration-300
            hover:decoration-primary
          "
          to="/contact"
        >
          {{ t('home.cta.contact') }}
        </NuxtLink>{{ t('home.cta.end') }}
      </UIText>
    </MotionSlideUp>
  </UIColumn>
</template>
