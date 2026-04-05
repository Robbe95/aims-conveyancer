<script setup lang="ts">
import ContentTitle from '~/components/content-title/ContentTitle.vue'

const {
  t,
} = useI18n()

const values = [
  t('about.values.clear'),
  t('about.values.careful'),
  t('about.values.timely'),
]
</script>

<template>
  <section class="space-y-6 text-white">
    <ContentTitle
      :title="t('about.title')"
      :description="t('about.description')"
    />

    <p>
      {{ t('about.intro') }}
    </p>

    <div class="space-y-2">
      <h2 class="text-2xl font-semibold">
        {{ t('about.values.heading') }}
      </h2>
      <ul class="list-disc space-y-1 pl-6">
        <li
          v-for="value in values"
          :key="value"
        >
          {{ value }}
        </li>
      </ul>
    </div>

    <p>
      {{ t('about.outro') }}
    </p>

    <div class="space-y-3">
      <p class="text-white/80">
        {{ t('about.cta.contact') }}
      </p>

      <div class="flex flex-wrap gap-3">
        <UButton
          to="/contact"
          color="primary"
          variant="solid"
          trailing-icon="material-symbols:contact-page"
          class=""
        >
          {{ t('about.cta.contact_button') }}
        </UButton>
      </div>
    </div>
  </section>
</template>
