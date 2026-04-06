<script setup lang="ts">
import MotionSlideUp from '~/components/motion/MotionSlideUp.vue'
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
  <section
    tag="section"
    gap="6"
    class="
      flex flex-col gap-6 text-white
      lg:flex-row
    "
  >
    <UIContentTitle
      :title="t('about.title')"
      :description="t('about.description')"
    />

    <UIRow
      gap="6"
      class="
        flex-col!
        lg:flex-row
      "
    >
      <UIColumn
        gap="6"
        class="text-white"
      >
        <MotionSlideUp :delay="0.15">
          <UIText>
            {{ t('about.intro') }}
          </UIText>
        </MotionSlideUp>

        <UIColumn gap="2">
          <MotionSlideUp :delay="0.25">
            <UISubtitle>
              {{ t('about.values.heading') }}
            </UISubtitle>
          </MotionSlideUp>
          <UIList gap="1">
            <MotionSlideUp
              v-for="(value, index) in values"
              :key="value"
              :delay="0.3 + index * 0.08"
              tag="li"
            >
              {{ value }}
            </MotionSlideUp>
          </UIList>
        </UIColumn>

        <MotionSlideUp :delay="0.55">
          <UIText>
            {{ t('about.outro') }}
          </UIText>
        </MotionSlideUp>

        <MotionSlideUp :delay="0.65">
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
              >
                {{ t('about.cta.contact_button') }}
              </UButton>
            </UIRow>
          </UIColumn>
        </MotionSlideUp>
      </UIColumn>

      <MotionSlideUp :delay="0.3">
        <NuxtImg
          src="/me.jpg"
          alt="Picture of Aimee Summers, conveyancer"
          class="relative size-auto w-full max-w-sm rounded-lg object-contain"
        />
      </MotionSlideUp>
    </UIRow>
  </section>
</template>
