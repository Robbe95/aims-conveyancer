<script setup lang="ts">
import type { RouteLocationNamedI18n } from 'vue-router'
import type { RouteNamedMapI18n } from 'vue-router/auto-routes'

interface Props {
  title: string
  description: string
  icon: string
  to: RouteLocationNamedI18n<keyof RouteNamedMapI18n>
}
const props = defineProps<Props>()
</script>

<template>
  <NuxtLinkLocale
    :to="props.to"
    class="
      group flex items-center justify-between rounded-lg px-2 py-1 text-lg
      duration-200
      hover:bg-slate-900
    "
    active-class="text-primary"
    inactive-class="text-white data-active"
  >
    <template #default="{ isActive }">
      <div>
        <p
          class="
            font-medium
            group-hover:text-primary
          "
        >
          {{ props.title }}
        </p>

        <p class="text-sm text-stone-400">
          {{ props.description }}
        </p>
      </div>
      <UIcon
        :name="props.icon ?? `material-symbols:chevron-right`"
        :class="{
          'opacity-100': isActive,
        }"
        class="
          opacity-0 duration-200
          group-hover:opacity-100
        "
      />
    </template>
  </NuxtLinkLocale>
</template>
