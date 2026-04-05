import { fileURLToPath } from 'node:url'

import { defineVitestProject } from '@nuxt/test-utils/config'
import { playwright } from '@vitest/browser-playwright'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: 'unit',
          environment: 'node',
          include: [
            'test/unit/*.{test,spec}.ts',
          ],
        },
      },
      await defineVitestProject({
        test: {
          name: 'nuxt',
          browser: {
            enabled: true,
            instances: [
              {
                browser: 'chromium',
              },
            ],
            provider: playwright(),
          },
          environment: 'nuxt',
          environmentOptions: {
            nuxt: {
              rootDir: fileURLToPath(new URL('.', import.meta.url)),
            },
          },
          include: [
            'test/nuxt/*.{test,spec}.ts',
          ],
        },
      }),
    ],
  },
})
