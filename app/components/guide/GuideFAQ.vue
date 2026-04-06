<script setup lang="ts">
import MotionSlideUp from '~/components/motion/MotionSlideUp.vue'
import UIColumn from '~/components/ui/UIColumn.vue'
import UIText from '~/components/ui/UIText.vue'

const {
  t,
} = useI18n()

const faqItems = Array.from({
  length: 12,
}).map((_, i) => ({
  content: t(`guide.faq.a${i + 1}`),
  label: t(`guide.faq.q${i + 1}`),
}))
</script>

<template>
  <MotionSlideUp :delay="0.35">
    <UIColumn gap="6">
      <div
        class="
          flex flex-col gap-2 text-center
          md:text-left
        "
      >
        <h2 class="text-3xl font-extrabold tracking-tight text-white">
          {{ t('guide.faq.title') }}
        </h2>
        <UIText
          tone="muted"
          class="text-lg"
        >
          {{ t('guide.faq.desc') }}
        </UIText>
      </div>

      <UAccordion
        :items="faqItems"
        size="xl"
        multiple
      >
        <template #content="{ item }">
          <UIText
            tone="muted"
            class="ml-1 border-l-2 border-primary-500/50 pl-2"
          >
            {{ item.content }}
          </UIText>
        </template>
      </UAccordion>
    </UIColumn>
  </MotionSlideUp>
</template>
