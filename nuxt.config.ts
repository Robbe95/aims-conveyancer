// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

import {
  EMAIL_ADDRESS,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  SITE_URL,
  WHATSAPP_URL,
} from './app/constants/socials.constant'
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
      meta: [
        {
          name: 'google-site-verification',
          content: '53eUekBlHZaU8i0ArxiB05TNxtUxqNiWro4UYgGoszs',
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
    payloadExtraction: false,
    typedPages: true,
  },
  i18n: {
    baseUrl: 'https://aimeesummers.co.uk',
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
    '@nuxt/fonts',
    'nuxt-calendly',
    'motion-v/nuxt',
    '@vueuse/nuxt',
  ],

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/about',
        '/contact',
        '/guide',
      ],
    },

  },
  ogImage: {
    enabled: true,
    zeroRuntime: true,
  },
  routeRules: {
    '/**': {
      prerender: true,
    },
  },
  schemaOrg: {
    identity: {
      name: 'Aimee Summers',
      email: EMAIL_ADDRESS,
      image: `${SITE_URL}/me.jpg`,
      jobTitle: 'Conveyancer',
      sameAs: [
        FACEBOOK_URL,
        INSTAGRAM_URL,
        WHATSAPP_URL,
      ],
      type: 'Person',
      url: SITE_URL,
      worksFor: {
        name: 'Hudson Conveyancing',
        type: 'Organization',
      },
    },
  },
  site: {
    name: 'Aimee Summers | UK Conveyancing',
    defaultLocale: 'en-GB',
    description: 'Friendly, reliable UK conveyancing support from offer to completion. Clear communication, careful legal work, and honest timelines.',
    indexable: true,
    trailingSlash: false,
    url: 'https://aimeesummers.co.uk',
  },
  sitemap: {
    zeroRuntime: true,
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
