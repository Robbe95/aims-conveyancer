import { projectConfig } from '@wisemen/eslint-config-vue'

export default [

  ...(await projectConfig({
    localesFolderPath: './i18n/locales/*.json',
    tailwindConfigPath: './app/assets/css/main.css',
    tailwindRootFontSize: 16,
  })),
  {
    rules: {
      'project-structure/independent-modules': 'off',
      'vue/no-undef-components': 'off',
    },
  },
]
