<script setup lang="ts">
import MotionFadeIn from '../motion/MotionFadeIn.vue'
import UIDivider from '../ui/UIDivider.vue'
import NavLink from './NavLink.vue'
import NavMeeting from './NavMeeting.vue'
import NavSocials from './NavSocials.vue'

const {
  t,
} = useI18n()
</script>

<template>
  <div
    class="
      flex w-full flex-col gap-2
      lg:w-[320px]
    "
  >
    <MotionFadeIn :delay="0.1">
      <UIDivider />
    </MotionFadeIn>
    <MotionFadeIn :delay="0.15">
      <NavLink
        :title="t('nav.home')"
        to="index"
        icon="material-symbols:family-home-rounded"
        description="Reliable UK conveyancing"
      />
    </MotionFadeIn>
    <MotionFadeIn :delay="0.2">
      <UIDivider />
    </MotionFadeIn>
    <MotionFadeIn :delay="0.25">
      <NavLink
        :title="t('nav.about')"
        to="about"
        icon="material-symbols:person-rounded"
        description="Learn more about me and my work"
      />
    </MotionFadeIn>
    <MotionFadeIn :delay="0.3">
      <UIDivider />
    </MotionFadeIn>
    <MotionFadeIn :delay="0.35">
      <NavLink
        :title="t('nav.contact')"
        to="contact"
        icon="material-symbols:calendar-add-on-rounded"
        description="Get in touch with me"
      />
    </MotionFadeIn>
    <MotionFadeIn :delay="0.4">
      <UIDivider />
    </MotionFadeIn>
    <MotionFadeIn :delay="0.45">
      <NavLink
        :title="t('nav.guide')"
        :description="t('nav.guide_description')"
        to="guide"
        icon="material-symbols:book-2-rounded"
      />
    </MotionFadeIn>
    <MotionFadeIn :delay="0.5">
      <UIDivider />
    </MotionFadeIn>
    <MotionFadeIn :delay="0.55">
      <NavMeeting />
    </MotionFadeIn>
    <MotionFadeIn :delay="0.65">
      <NavSocials />
    </MotionFadeIn>
  </div>
</template>
