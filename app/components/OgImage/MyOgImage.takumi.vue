<script setup lang="ts">
import { SITE_URL } from '~/constants/socials.constant'

withDefaults(defineProps<{
  title?: string
  description?: string
}>(), {
  title: 'Aimee Summers',
  description: 'Friendly, reliable UK conveyancing support from offer to completion.',
})
</script>

<template>
  <div
    :style="{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      width: '100%',
      height: '100%',
      padding: '60px',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      fontFamily: 'sans-serif',
      color: 'white',
    }"
  >
    <div
      :style="{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }"
    >
      <div
        :style="{
          fontSize: '64px',
          fontWeight: 400,
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
        }"
      >
        {{ title }}
      </div>
      <div
        :style="{
          fontSize: '28px',
          fontWeight: 400,
          color: '#94a3b8',
          lineHeight: 1.4,
          maxWidth: '80%',
        }"
      >
        {{ description }}
      </div>
    </div>
    <div
      :style="{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginTop: '40px',
      }"
    >
      <div
        :style="{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          background: '#10b981',
        }"
      />
      <div
        :style="{
          fontSize: '22px',
          color: '#64748b',
        }"
      >
        {{ SITE_URL }}
      </div>
    </div>
  </div>
</template>
