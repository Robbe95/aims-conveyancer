import en from './locales/en.json'
import nl from './locales/nl.json'

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
    'nl',
  ],
  messages: {
    en,
    nl,
  },
  warnHtmlInMessage: 'off',
}))
