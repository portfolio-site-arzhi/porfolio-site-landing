import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils/e2e'

describe('portfolio detail routes', async () => {
  await setup()

  it('serves /portfolio/ecommerce-dashboard on direct request', async () => {
    const html = await $fetch('/portfolio/ecommerce-dashboard')
    expect(html).toContain('E-Commerce Dashboard')
    expect(html).toContain('What I did')
    expect(html).not.toContain('Buka halaman detail untuk melihat peran, kontribusi, dan stack tiap project.')
  })
})
