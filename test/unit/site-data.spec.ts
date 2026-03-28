import { describe, expect, it } from 'vitest'
import {
  createFallbackSiteData,
  loadSiteData,
  sponsorPlansHavingSponsors,
  sponsorsByPlan,
} from '../../src/lib/site-data'

describe('site-data fallback', () => {
  it('hydrates linked assets for local fallback content', () => {
    const siteData = createFallbackSiteData()
    const speaker = siteData.speakers[0]
    const session = siteData.sessions[0]

    expect(siteData.speakers.length).toBeGreaterThan(0)
    expect(siteData.sessions.length).toBeGreaterThan(0)
    expect(siteData.sponsors.length).toBeGreaterThan(0)
    expect(speaker?.fields.avatar).toMatchObject({
      fields: {
        file: {
          url: expect.stringMatching(/^https:\/\//),
        },
      },
    })
    expect(session?.fields.ogImage).toMatchObject({
      fields: {
        file: {
          url: expect.stringMatching(/^https:\/\//),
        },
      },
    })
  })

  it('keeps sponsor plans aligned with available sponsors', () => {
    const siteData = createFallbackSiteData()
    const plans = sponsorPlansHavingSponsors(siteData)

    expect(plans.length).toBeGreaterThan(0)
    expect(
      plans.every((plan) => sponsorsByPlan(siteData, plan.plan).length > 0),
    ).toBe(true)
  })

  it('falls back when contentful credentials are not configured', async () => {
    const siteData = await loadSiteData({})

    expect(siteData).toEqual(createFallbackSiteData())
  })
})
