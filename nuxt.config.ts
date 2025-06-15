// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  logLevel: "info",
  runtimeConfig: {
    databaseName: "main",
  },
  future: {
    compatibilityVersion: 4,
  },
  // To re-enable _all_ Nuxt v3 behaviour, set the following options:
  // srcDir: '.',
  // dir: {
  //   app: 'app'
  // },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@prisma/nuxt', '@nuxt/test-utils'],
  css: ['assets/css/main.css'],
  $test: { 
    logLevel: "silent",
    runtimeConfig: {
      databaseName: "test",
    },
  },
  $development: { 
    logLevel: "verbose",
    runtimeConfig: {
      databaseName: "dev",
    },
  },
})