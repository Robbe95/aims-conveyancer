<script setup lang="ts">
import Divider from '../divider/Divider.vue'
import NavLink from './NavLink.vue'
import NavMeeting from './NavMeeting.vue'
import NavSocials from './NavSocials.vue'

const {
  t,
} = useI18n()
</script>

<template>
  <div class="flex min-w-sm flex-col gap-2">
    <Divider />
    <NavLink
      :title="t('nav.home')"
      to="index"
      icon="material-symbols:family-home-rounded"
      description="Go to the home page"
    />
    <Divider />
    <NavLink
      :title="t('nav.about')"
      to="about"
      icon="material-symbols:person-rounded"
      description="Learn more about me and my work"
    />
    <Divider />
    <NavLink
      :title="t('nav.contact')"
      to="contact"
      icon="material-symbols:calendar-add-on-rounded"
      description="Get in touch with me"
    />
    <Divider />
    <NavMeeting />
    <NavSocials />
  </div>
</template>
