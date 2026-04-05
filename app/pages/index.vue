<script setup lang="ts">
import ContentTitle from '~/components/content-title/ContentTitle.vue'

const {
  t,
} = useI18n()

const services = [
  t('home.services.sales'),
  t('home.services.first_time_buyers'),
  t('home.services.remortgages'),
  t('home.services.transfer_of_equity'),
  t('home.services.updates'),
]
</script>

<template>
  <section class="space-y-6 text-white">
    <ContentTitle
      :title="t('home.title')"
      :description="t('home.description')"
    />

    <p>
      {{ t('home.intro') }}
    </p>

    <div class="space-y-2">
      <h2 class="text-2xl font-semibold">
        {{ t('home.services.heading') }}
      </h2>
      <ul class="list-disc space-y-1 pl-6">
        <li
          v-for="service in services"
          :key="service"
        >
          {{ service }}
        </li>
      </ul>
    </div>

    <p>
      {{ t('home.outro') }}
    </p>

    <p class="text-white/80">
      <NuxtLink
        class="underline"
        to="/about"
      >
        {{ t('home.cta.about') }}
      </NuxtLink>
      {{ ` ${t('home.cta.join')} ` }}
      <NuxtLink
        class="underline"
        to="/contact"
      >
        {{ t('home.cta.contact') }}
      </NuxtLink>
      {{ t('home.cta.end') }}
    </p>
  </section>
</template>
