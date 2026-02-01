import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils/e2e'

describe('portfolio detail routes', async () => {
  await setup()

  it('serves /portfolio/ecommerce-dashboard on direct request', async () => {
    const html = await $fetch('/portfolio/ecommerce-dashboard')
    expect(html).toContain('Dashboard E-Commerce')
    expect(html).toContain('Merancang arsitektur informasi dashboard')
    expect(html).not.toContain('Buka halaman detail untuk melihat peran, kontribusi, dan stack tiap project.')
    expect(html).toContain('https://github.com')
    expect(html).toContain('https://linkedin.com')
    expect(html).toContain('layout-offset-fallback')
  })
})
