<script setup lang="ts">
import GuideDownloadPDF from '~/components/guide/GuideDownloadPDF.vue'
import GuideFAQ from '~/components/guide/GuideFAQ.vue'
import GuideHeader from '~/components/guide/GuideHeader.vue'
import GuideTabs from '~/components/guide/GuideTabs.vue'
import GuideTerminology from '~/components/guide/GuideTerminology.vue'
import MotionSlideUp from '~/components/motion/MotionSlideUp.vue'
import UIColumn from '~/components/ui/UIColumn.vue'
</script>

<template>
  <UIColumn
    tag="section"
    gap="4"
    class="relative"
  >
    <GuideHeader />

    <GuideDownloadPDF />

    <!-- Buy/Sell Tabs -->
    <GuideTabs />

    <MotionSlideUp :delay="0.3">
      <div
        class="
          my-6 h-px w-full bg-linear-to-r from-transparent via-white/20
          to-transparent
        "
      />
    </MotionSlideUp>

    <!-- FAQ Section -->
    <GuideFAQ />

    <MotionSlideUp :delay="0.5">
      <div
        class="
          my-6 h-px w-full bg-linear-to-r from-transparent via-white/20
          to-transparent
        "
      />
    </MotionSlideUp>

    <!-- Terminology Grid -->
    <GuideTerminology />
  </UIColumn>
</template>
