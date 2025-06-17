import { defineVitestConfig } from '@nuxt/test-utils/config'
import dotenv from 'dotenv';

export default defineVitestConfig({
  test: {
    environment: "nuxt",
    // coverage: {
    //   exclude: [
    //     'nuxt.config.ts',
    //   ],
    // },
    env: dotenv.config({ path: ".env.test" }).parsed,
  },
})

