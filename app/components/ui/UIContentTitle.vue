<script setup lang="ts">
import NavMobileMenu from '../nav/NavMobileMenu.vue'

interface Props {
  title: string
  description: string
}

const props = defineProps<Props>()

const scroll = inject('scroll') as {
  isTop: Ref<boolean>
}

const isTop = computed<boolean>(() => scroll.isTop.value)
</script>

<template>
  <header
    :class="{
      'bg-neutral-950/80': !isTop,
      'bg-transparent': isTop,
    }"
    class="sticky top-0 z-50 rounded-md py-1 backdrop-blur-lg duration-300"
  >
    <div class="flex items-start justify-between gap-3">
      <h1
        class="
          text-3xl/tight text-primary
          sm:text-4xl
          lg:text-5xl
        "
      >
        {{ props.title }}
      </h1>

      <div class="flex items-center gap-2">
        <slot name="actions" />
        <NavMobileMenu />
      </div>
    </div>

    <p>
      {{ props.description }}
    </p>
  </header>
</template>
