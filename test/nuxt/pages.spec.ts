import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it, vi } from 'vitest'
import TheHeadSection from '../../src/components/TheHeadSection.vue'
import ContactPage from '../../src/pages/contact.vue'
import HomePage from '../../src/pages/index.vue'
import SponsorsPage from '../../src/pages/sponsors.vue'
import SessionPage from '../../src/pages/sessions/[speakerId].vue'

describe('nuxt pages', () => {
  it('renders the homepage sections', async () => {
    const page = await mountSuspended(HomePage, {
      route: '/',
    })

    expect(page.html()).toContain('Vue Fes Japan 2019')
    expect(page.html()).toContain('SPEAKERS')
    expect(page.html()).toContain('SPONSORS')
  })

  it('renders the contact page', async () => {
    const page = await mountSuspended(ContactPage, {
      route: '/contact',
    })

    expect(page.html()).toContain('お問い合わせ')
    expect(page.html()).toContain('お名前')
  })

  it('renders sponsor and session detail pages', async () => {
    const sponsors = await mountSuspended(SponsorsPage, {
      route: '/sponsors',
    })
    const session = await mountSuspended(SessionPage, {
      route: '/sessions/jlooper',
    })

    expect(sponsors.html()).toContain('SPONSORS')
    expect(sponsors.html()).toContain('PLATINUM')
    expect(session.html()).toContain('SESSION')
    expect(session.html()).toContain('Jen Looper')
  })

  it('renders real svg shapes for the head visual', async () => {
    const section = await mountSuspended(TheHeadSection)

    await vi.waitFor(() => {
      expect(
        section
          .find(
            'svg.main-visual rect, svg.main-visual circle, svg.main-visual polygon',
          )
          .exists(),
      ).toBe(true)
    })

    expect(section.find('svg.main-visual head-horizontal').exists()).toBe(false)
    expect(section.find('svg.main-visual head-circle').exists()).toBe(false)
    expect(section.find('svg.main-visual head-photo').exists()).toBe(false)
  })
})
