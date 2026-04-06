<script setup lang="ts">
const {
  t,
} = useI18n()
</script>

<template>
  <div class="flex items-center gap-2">
    <p>{{ t('guide.download_pdf.label') }}</p>
    <UButton
      to="/Conveyancing Guide.pdf"
      target="_blank"
      color="primary"
      variant="link"
      icon="lucide:download"
      label="download the guide as a PDF"
      external
    />
  </div>
</template>
