<script setup lang="ts">
import UIContentTitle from '../ui/UIContentTitle.vue'

const {
  t,
} = useI18n()
</script>

<template>
  <UIContentTitle
    :title="t('guide.title')"
    :description="t('guide.description')"
  />
</template>
