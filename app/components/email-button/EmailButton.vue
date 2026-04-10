<script setup lang="ts">
import { EMAIL_ADDRESS } from '~/constants/socials.constant'

const props = defineProps<{
  isMedium?: boolean
}>()
const {
  t,
} = useI18n()

const {
  copied, copy,
} = useClipboard()

const toast = useToast()

function onCopyEmail(): void {
  copy(EMAIL_ADDRESS)
  toast.add({
    title: t('nav.socials.email_copied'),
    color: 'success',
    description: t('nav.socials.email_copied_desc'),
  })
}
</script>

<template>
  <div
    class="flex items-center gap-1"
  >
    <p
      :name="EMAIL_ADDRESS"
      :class="{
        'text-sm': !props.isMedium,
      }"
      class="text-neutral-400"
    >
      {{ EMAIL_ADDRESS }}
    </p>
    <UButton
      :name="t('nav.socials.open_email_client')"
      :to="`mailto:${EMAIL_ADDRESS}`"
      :aria-label="t('nav.socials.open_email_client')"
      icon="cuida:open-in-new-tab-outline"
      size="sm"
      class="flex-none text-right duration-200"
      color="neutral"
      variant="ghost"
    />

    <Motion
      :key="`copied-${copied}`"
      :initial="{
        opacity: 0,
        y: -10,
      }"
      :animate="{
        opacity: 1,
        y: 0,
      }"
    >
      <UButton
        v-if="!copied"
        :name="t('nav.socials.copy_email')"
        :aria-label="t('nav.socials.copy_email')"
        icon="ic:baseline-content-copy"
        size="sm"
        class="flex-none text-right duration-200"
        color="neutral"
        variant="ghost"
        @click="onCopyEmail"
      />
      <UButton
        v-else
        :name="t('nav.socials.copy_email')"
        :aria-label="t('nav.socials.copy_email')"
        icon="ic:baseline-check"
        size="sm"
        class="flex-none text-right duration-200"
        color="neutral"
        variant="ghost"
        @click="onCopyEmail"
      />
    </Motion>
  </div>
</template>
