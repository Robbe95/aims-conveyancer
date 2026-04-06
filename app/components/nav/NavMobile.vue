<script setup lang="ts">
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
    <UIDivider />
    <NavLink
      :title="t('nav.home')"
      to="index"
      icon="material-symbols:family-home-rounded"
      description="Go to the home page"
    />
    <UIDivider />
    <NavLink
      :title="t('nav.about')"
      to="about"
      icon="material-symbols:person-rounded"
      description="Learn more about me and my work"
    />
    <UIDivider />
    <NavLink
      :title="t('nav.contact')"
      to="contact"
      icon="material-symbols:calendar-add-on-rounded"
      description="Get in touch with me"
    />
    <UIDivider />
    <NavLink
      :title="t('nav.guide')"
      :description="t('nav.guide_description')"
      to="guide"
      icon="material-symbols:book-2-rounded"
    />
    <UIDivider />
    <NavMeeting />
    <NavSocials />
  </div>
</template>
