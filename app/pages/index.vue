<script setup lang="ts">
import UIColumn from '~/components/ui/UIColumn.vue'
import UIContentTitle from '~/components/ui/UIContentTitle.vue'
import UIList from '~/components/ui/UIList.vue'
import UISubtitle from '~/components/ui/UISubtitle.vue'
import UIText from '~/components/ui/UIText.vue'

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
  <UIColumn
    tag="section"
    gap="6"
    class="text-white"
  >
    <UIContentTitle
      :title="t('home.title')"
      :description="t('home.description')"
    />

    <UIText>
      {{ t('home.intro') }}
    </UIText>

    <UIColumn gap="2">
      <UISubtitle>
        {{ t('home.services.heading') }}
      </UISubtitle>
      <UIList gap="1">
        <li
          v-for="service in services"
          :key="service"
        >
          {{ service }}
        </li>
      </UIList>
    </UIColumn>

    <UIText>
      {{ t('home.outro') }}
    </UIText>

    <UIText tone="muted">
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
    </UIText>
  </UIColumn>
</template>
