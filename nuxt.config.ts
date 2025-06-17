// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  // nuxt 4
  future: {
    compatibilityVersion: 4,
  },
  // additional config
  vite: {
    resolve: {
      alias: {
        '.prisma/client/index-browser': './node_modules/.prisma/client/index-browser.js',
      },
    },
  },
  modules: ['@nuxt/ui', '@prisma/nuxt', '@nuxt/test-utils'],
  devtools: { enabled: true },
  css: ['assets/css/main.css'],

  // var
  logLevel: "info",
  $test: { 
    logLevel: "silent",
  },
  $development: { 
    logLevel: "verbose",
  },
})