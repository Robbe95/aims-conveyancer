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

useSeoMeta({
  title: t('about.title'),
  description: t('about.description'),
})

defineOgImage('MyOgImageTakumi', {
  title: t('about.title'),
  description: t('about.description'),
})

const values = [
  t('about.values.clear'),
  t('about.values.careful'),
  t('about.values.timely'),
  t('about.values.whatsapp'),

]
</script>

<template>
  <UIColumn
    tag="section"
    gap="6"
    class="relative"
  >
    <UIContentTitle
      :title="t('about.title')"
      :description="t('about.description')"
    />

    <UIColumn
      gap="6"
      class="
        flex-col justify-between
        lg:flex-row!
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

      <div class="relative flex justify-end">
        <MotionSlideUp :delay="0.3">
          <NuxtImg
            src="/me.jpg"
            alt="Picture of Aimee Summers, conveyancer"
            class="
              relative size-auto rounded-xl border-4 border-primary
              lg:max-w-80
            "
          />
        </MotionSlideUp>
      </div>
    </UIColumn>
  </UIColumn>
</template>
