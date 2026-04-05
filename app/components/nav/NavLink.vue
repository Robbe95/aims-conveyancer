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
      group flex items-center justify-between rounded-lg p-3 text-base
      duration-200
      hover:bg-slate-900
      sm:text-lg
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

        <p
          class="
            hidden text-sm text-stone-400
            sm:block
          "
        >
          {{ props.description }}
        </p>
      </div>
      <UIcon
        :name="props.icon ?? `material-symbols:chevron-right`"
        :class="{
          'opacity-100': isActive,
        }"
        class="
          opacity-100 duration-200
          group-hover:opacity-100
          sm:opacity-0
        "
      />
    </template>
  </NuxtLinkLocale>
</template>
