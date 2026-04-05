<script setup lang="ts">
import UIColumn from '~/components/ui/UIColumn.vue'
import UIContentTitle from '~/components/ui/UIContentTitle.vue'
import UIList from '~/components/ui/UIList.vue'
import UIRow from '~/components/ui/UIRow.vue'
import UISubtitle from '~/components/ui/UISubtitle.vue'
import UIText from '~/components/ui/UIText.vue'

const {
  t,
} = useI18n()
const localeRoute = useLocaleRoute()

const values = [
  t('about.values.clear'),
  t('about.values.careful'),
  t('about.values.timely'),
]
</script>

<template>
  <UIColumn
    tag="section"
    gap="6"
    class="text-white"
  >
    <UIContentTitle
      :title="t('about.title')"
      :description="t('about.description')"
    />

    <UIRow
      gap="6"
      class="
        flex-col
        lg:flex-row
      "
    >
      <UIColumn
        gap="6"
        class="text-white"
      >
        <UIText>
          {{ t('about.intro') }}
        </UIText>

        <UIColumn gap="2">
          <UISubtitle>
            {{ t('about.values.heading') }}
          </UISubtitle>
          <UIList gap="1">
            <li
              v-for="value in values"
              :key="value"
            >
              {{ value }}
            </li>
          </UIList>
        </UIColumn>

        <UIText>
          {{ t('about.outro') }}
        </UIText>

        <UIColumn gap="3">
          <UIText tone="muted">
            {{ t('about.cta.contact') }}
          </UIText>

          <UIRow
            gap="3"
            class="flex-wrap"
          >
            <UButton
              :to="localeRoute('contact')"
              color="primary"
              variant="solid"
              trailing-icon="material-symbols:contact-page"
              class=""
            >
              {{ t('about.cta.contact_button') }}
            </UButton>
          </UIRow>
        </UIColumn>
      </UIColumn>
      <div>
        <NuxtImg
          src="/me.jpg"
          alt="Picture of Aimée Summers, conveyancer"
          class="size-auto max-w-sm rounded-lg object-contain"
        />
      </div>
    </UIRow>
  </UIColumn>
</template>
