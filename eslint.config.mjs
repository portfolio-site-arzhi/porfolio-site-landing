// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    name: 'custom/allow-v-html',
    files: ['app/pages/experience.vue'],
    rules: {
      'vue/no-v-html': 'off'
    }
  }
)
