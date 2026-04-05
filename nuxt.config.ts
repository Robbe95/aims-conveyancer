// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

import { cryptoUuidPolyfillScript } from './app/utils/cryptoUuidPolyfillScript'

export default defineNuxtConfig({
  compatibilityDate: '2025-01-15',

  app: {
    head: {
      script: [
        {
          id: 'crypto-uuid-polyfill-early',
          innerHTML: cryptoUuidPolyfillScript,
          tagPosition: 'head',
        },
      ],
    },
  },

  components: [],

  css: [
    '~/assets/css/main.css',
  ],

  devtools: {
    enabled: true,
  },
  experimental: {
    nitroAutoImports: true,
    typedPages: true,
  },
  i18n: {
    baseUrl: 'https://example.com',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      redirectOn: 'all',
    },
    experimental: {
      typedOptionsAndMessages: 'default',
      typedPages: true,
    },
    langDir: 'locales',
    locales: [
      {
        iso: 'en-GB',
        code: 'en',
        file: 'en.json',
        language: 'en-GB',
      },
    ],
    strategy: 'prefix',
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/scripts',
    '@nuxt/a11y',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    'nuxt-calendly',
    'motion-v/nuxt',

  ],
  ogImage: {
    enabled: false,
  },
  routeRules: {
    '/**': {
      prerender: true,
    },

  },
  typescript: {
    tsConfig: {
      include: [
        '../**/*',
      ],
    },
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
