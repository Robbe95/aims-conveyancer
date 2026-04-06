<!-- eslint-disable @intlify/vue-i18n/no-dynamic-keys -->
<script setup lang="ts">
import MotionSlideUp from '~/components/motion/MotionSlideUp.vue'
import UIColumn from '~/components/ui/UIColumn.vue'
import UIText from '~/components/ui/UIText.vue'

const {
  t,
} = useI18n()

const terminologyItems = Array.from({
  length: 15,
}).map((_, i) => ({
  def: t(`guide.terminology.t${i + 1}.def`),
  term: t(`guide.terminology.t${i + 1}.term`),
}))
</script>

<template>
  <MotionSlideUp :delay="0.55">
    <UIColumn gap="4">
      <div
        class="
          flex flex-col gap-2 text-center
          md:text-left
        "
      >
        <h2 class="mb-1 text-3xl font-extrabold tracking-tight text-white">
          {{ t('guide.terminology.title') }}
        </h2>
        <UIText
          tone="muted"
          class="text-lg"
        >
          {{ t('guide.terminology.desc') }}
        </UIText>
      </div>

      <div
        class="
          grid grid-cols-1 gap-5
          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        <MotionSlideUp
          v-for="(term, index) in terminologyItems"
          :key="term.term"
          :delay="0.6 + index * 0.03"
          class="h-full"
        >
          <div
            class="
              group flex h-full flex-col gap-2 rounded-2xl border
              border-white/10 bg-linear-to-br from-white/10 to-white/5 p-6
              backdrop-blur-md transition-all duration-500
            "
          >
            <h3 class="text-lg font-bold text-white transition-colors">
              {{ term.term }}
            </h3>
            <UIText
              tone="muted"
              class="text-sm/relaxed"
            >
              {{ term.def }}
            </UIText>
          </div>
        </MotionSlideUp>
      </div>
    </UIColumn>
  </MotionSlideUp>
</template>
