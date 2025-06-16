import { defineVitestConfig } from '@nuxt/test-utils/config'
import { coverageConfigDefaults } from 'vitest/config.js'

export default defineVitestConfig({
  test: {
    environment: "nuxt",
    coverage: {
      exclude: [
        ...coverageConfigDefaults.exclude,
        'nuxt.config.ts',
      ],
    },
  },
})

