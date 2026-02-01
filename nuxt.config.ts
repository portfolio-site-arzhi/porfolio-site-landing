// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['vuetify/styles'],
  app: {
    head: {
      style: [
        {
          key: 'layout-offset-fallback',
          innerHTML: ':root{--app-bar-fallback:64px}@media (max-width: 600px){:root{--app-bar-fallback:56px}}.v-main{padding-top:max(var(--v-layout-top,0px),var(--app-bar-fallback))!important}'
        }
      ]
    }
  },
  runtimeConfig: {
    public: {
      backendUrl: process.env.NUXT_PUBLIC_BACKEND_URL || '',
      siteTitle: process.env.NUXT_PUBLIC_SITE_TITLE || ''
    }
  },
  modules: ['@nuxt/eslint', '@nuxt/test-utils/module', 'vuetify-nuxt-module', '@nuxtjs/i18n'],
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
  },
  i18n: {
    locales: [
      { code: 'id', iso: 'id-ID', name: 'Bahasa Indonesia' },
      { code: 'en', iso: 'en-US', name: 'English' }
    ],
    defaultLocale: 'id',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false
  }
})
