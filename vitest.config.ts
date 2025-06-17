import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: "nuxt",
    coverage: {
      exclude: [
        'nuxt.config.ts',
      ],
    },
  },
})

