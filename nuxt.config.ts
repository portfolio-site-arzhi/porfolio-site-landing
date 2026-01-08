// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/test-utils/module', 'vuetify-nuxt-module'],
  nitro: {
    prerender: {
      routes: [
        '/portfolio/ecommerce-dashboard',
        '/portfolio/task-management-app',
        '/portfolio/portfolio-website',
        '/portfolio/payments-api'
      ]
    }
  },
  vuetify: {
    moduleOptions: {},
    vuetifyOptions: {}
  },
  typescript: {
    typeCheck: false,
  }
})
