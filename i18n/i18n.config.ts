import en from './locales/en.json'

export default defineI18nConfig(() => ({
  bundle: {
    optimizeTranslationDirective: false,
  },
  defaultLocale: 'en',
  flatJson: true,
  keystyle: 'nested',
  legacy: false,
  locales: [
    'en',
  ],
  messages: {
    en,
  },
  warnHtmlInMessage: 'off',
}))
