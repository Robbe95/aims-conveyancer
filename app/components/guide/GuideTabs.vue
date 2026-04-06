<script setup lang="ts">
import MotionSlideUp from '~/components/motion/MotionSlideUp.vue'

const {
  t,
} = useI18n()

const buyingSteps = [
  {
    title: t('guide.buying.step5.title'),
    description: t('guide.buying.step5.desc'),
    icon: 'i-lucide-handshake',
  },
  {
    title: t('guide.buying.step1.title'),
    description: t('guide.buying.step1.desc'),
    icon: 'i-lucide-file-text',
  },
  {
    title: t('guide.buying.step2.title'),
    description: t('guide.buying.step2.desc'),
    icon: 'i-lucide-search',
  },
  {
    title: t('guide.buying.step3.title'),
    description: t('guide.buying.step3.desc'),
    icon: 'i-lucide-file-check',
  },
  {
    title: t('guide.buying.step4.title'),
    description: t('guide.buying.step4.desc'),
    icon: 'i-lucide-key',
  },
]

const sellingSteps = [
  {
    title: t('guide.selling.step5.title'),
    description: t('guide.selling.step5.desc'),
    icon: 'i-lucide-handshake',
  },
  {
    title: t('guide.selling.step1.title'),
    description: t('guide.selling.step1.desc'),
    icon: 'i-lucide-file-text',
  },
  {
    title: t('guide.selling.step2.title'),
    description: t('guide.selling.step2.desc'),
    icon: 'i-lucide-messages-square',
  },
  {
    title: t('guide.selling.step3.title'),
    description: t('guide.selling.step3.desc'),
    icon: 'i-lucide-calculator',
  },
  {
    title: t('guide.selling.step4.title'),
    description: t('guide.selling.step4.desc'),
    icon: 'i-lucide-key',
  },
]

const tabs = [
  {
    key: 'buying',
    label: t('guide.buying.title'),
  },
  {
    key: 'selling',
    label: t('guide.selling.title'),
  },
]

const active = ref(8)
</script>

<template>
  <MotionSlideUp :delay="0.15">
    <UTabs
      :items="tabs"
      class="w-full"
    >
      <template #content="{ item }">
        <MotionSlideUp :delay="0.2">
          <UTimeline
            v-model="active"
            :items="item.key === 'buying' ? buyingSteps : sellingSteps"
            class="mt-10"
          />
        </MotionSlideUp>
      </template>
    </UTabs>
  </MotionSlideUp>
</template>
