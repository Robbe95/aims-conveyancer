// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-01-15',

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
  routeRules: {
    '/': {
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
