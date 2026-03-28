import { createClient } from 'contentful'
import assetFixture from '../../test/fixtures/contentful/asset'
import eventContainerPartsFixture from '../../test/fixtures/contentful/eventContainerParts'
import eventContainersFixture from '../../test/fixtures/contentful/eventContainers'
import sessionsFixture from '../../test/fixtures/contentful/sessions'
import speakersFixture from '../../test/fixtures/contentful/speakers'
import sponsorsFixture from '../../test/fixtures/contentful/sponsors'
import timeTableSectionsFixture from '../../test/fixtures/contentful/timeTableSections'
import type { Asset, AssetLink } from '~/types/contentful'
import type EventContainerPart from '~/types/eventContainerPart'
import type EventContainer from '~/types/eventContainer'
import type Session from '~/types/session'
import type Speaker from '~/types/speaker'
import type Sponsor from '~/types/sponsor'
import type SponsorPlan from '~/types/sponsorPlan'
import type TimeTableSection from '~/types/timeTableSection'

export interface SiteData {
  speakers: Speaker[]
  sessions: Session[]
  timeTableSections: TimeTableSection[]
  eventContainers: EventContainer[]
  eventContainerParts: EventContainerPart[]
  sponsors: Sponsor[]
  sponsorPlans: SponsorPlan[]
}

export const sponsorPlans: SponsorPlan[] = [
  { plan: 'platinum', name: 'PLATINUM' },
  { plan: 'gold', name: 'GOLD' },
  { plan: 'silver', name: 'SILVER' },
  { plan: 'bronze', name: 'BRONZE' },
  { plan: 'special', name: 'SPECIAL' },
  { plan: 'room', name: 'ROOM' },
  { plan: 'translation', name: '同時通訳' },
  { plan: 'commercial', name: '幕間 CM' },
  { plan: 'toast', name: 'カンパイ' },
  { plan: 'lunch', name: 'LUNCH' },
  { plan: 'refreshment', name: 'REFRESHMENT' },
  { plan: 'video', name: 'VIDEO' },
  { plan: 'media', name: 'MEDIA' },
]

interface ContentfulClientLike {
  getEntries(query: Record<string, unknown>): Promise<{ items: unknown[] }>
  getAsset(id: string): Promise<unknown>
}

function isAsset(value: Asset | AssetLink): value is Asset {
  return 'fields' in value
}

function normalizeAssetUrl(url: string): string {
  return url.startsWith('//') ? `https:${url}` : url
}

function normalizeAsset(asset: Asset): Asset {
  return {
    ...asset,
    fields: {
      ...asset.fields,
      file: {
        ...asset.fields.file,
        url: normalizeAssetUrl(asset.fields.file.url),
      },
    },
  }
}

function cloneAsset(): Asset {
  return structuredClone(assetFixture)
}

function createGithubAvatarAsset(github: string, size: number): Asset {
  const asset = cloneAsset()

  asset.sys.id = `${github}-${size}`
  asset.fields.title = github
  asset.fields.file.url = `https://github.com/${github}.png?size=${size}`
  asset.fields.file.fileName = `${github}.png`
  asset.fields.file.contentType = 'image/png'
  asset.fields.file.details.image = {
    width: size,
    height: size,
  }

  return asset
}

function createSessionOgAsset(github: string): Asset {
  const asset = cloneAsset()

  asset.sys.id = `${github}-og`
  asset.fields.title = github
  asset.fields.file.url = `https://vuefes.jp/2019/session-og-images/${github}.jpg`
  asset.fields.file.fileName = `${github}.jpg`
  asset.fields.file.contentType = 'image/jpeg'
  asset.fields.file.details.image = {
    width: 1200,
    height: 630,
  }

  return asset
}

function resolveSpeakerAssetsWithFallback(speaker: Speaker): Speaker {
  const nextSpeaker = structuredClone(speaker)

  nextSpeaker.fields.avatar = isAsset(speaker.fields.avatar)
    ? normalizeAsset(speaker.fields.avatar)
    : createGithubAvatarAsset(speaker.fields.github, 500)
  nextSpeaker.fields.avatar2x = isAsset(speaker.fields.avatar2x)
    ? normalizeAsset(speaker.fields.avatar2x)
    : createGithubAvatarAsset(speaker.fields.github, 1000)

  return nextSpeaker
}

function resolveSessionAssetsWithFallback(
  session: Session,
  speakers: Speaker[],
): Session {
  const nextSession = structuredClone(session)
  const primarySpeakerId = session.fields.speakers[0]?.sys.id
  const primarySpeaker = speakers.find(
    (speaker) => speaker.sys.id === primarySpeakerId,
  )

  nextSession.fields.ogImage = isAsset(session.fields.ogImage)
    ? normalizeAsset(session.fields.ogImage)
    : createSessionOgAsset(primarySpeaker?.fields.github || 'default')

  return nextSession
}

function normalizeSponsors(sponsors: Sponsor[]): Sponsor[] {
  return sponsors.map((sponsor) => ({
    ...sponsor,
    fields: {
      ...sponsor.fields,
      banner: normalizeAsset(sponsor.fields.banner),
    },
  }))
}

function createFallbackSpeakers(): Speaker[] {
  return structuredClone(speakersFixture).map(resolveSpeakerAssetsWithFallback)
}

function createFallbackSessions(speakers: Speaker[]): Session[] {
  return structuredClone(sessionsFixture).map((session) =>
    resolveSessionAssetsWithFallback(session, speakers),
  )
}

export function createFallbackSiteData(): SiteData {
  const speakers = createFallbackSpeakers()

  return {
    speakers,
    sessions: createFallbackSessions(speakers),
    timeTableSections: structuredClone(timeTableSectionsFixture),
    eventContainers: structuredClone(eventContainersFixture),
    eventContainerParts: structuredClone(eventContainerPartsFixture),
    sponsors: normalizeSponsors(structuredClone(sponsorsFixture)),
    sponsorPlans: structuredClone(sponsorPlans),
  }
}

async function fetchEntries<T>(
  client: ContentfulClientLike,
  query: Record<string, unknown>,
): Promise<T[]> {
  const response = await client.getEntries(query)
  return response.items as T[]
}

async function fetchAsset(
  client: ContentfulClientLike,
  id: string,
): Promise<Asset> {
  const asset = (await client.getAsset(id)) as Asset
  return normalizeAsset(asset)
}

export async function loadSiteData(config: {
  contentfulSpaceId?: string
  contentfulAccessToken?: string
}): Promise<SiteData> {
  const { contentfulSpaceId = '', contentfulAccessToken = '' } = config

  if (!contentfulSpaceId || !contentfulAccessToken) {
    return createFallbackSiteData()
  }

  const clientWithResolveLinks = createClient({
    space: contentfulSpaceId,
    accessToken: contentfulAccessToken,
  })

  const clientWithoutResolveLinks = clientWithResolveLinks.withoutLinkResolution

  const [
    rawSpeakers,
    rawSessions,
    timeTableSections,
    eventContainers,
    eventContainerParts,
    rawSponsors,
  ] = await Promise.all([
    fetchEntries<Speaker>(clientWithoutResolveLinks, {
      content_type: 'speaker',
    }),
    fetchEntries<Session>(clientWithoutResolveLinks, {
      content_type: 'session',
    }),
    fetchEntries<TimeTableSection>(clientWithoutResolveLinks, {
      content_type: 'timeTableSection',
      order: 'fields.startAt',
    }),
    fetchEntries<EventContainer>(clientWithResolveLinks, {
      content_type: 'eventContainer',
    }),
    fetchEntries<EventContainerPart>(clientWithResolveLinks, {
      content_type: 'eventContainerPart',
    }),
    fetchEntries<Sponsor>(clientWithResolveLinks, {
      content_type: 'sponsor',
      order: 'fields.appliedAt',
    }),
  ])

  const speakers = await Promise.all(
    rawSpeakers.map(async (speaker) => {
      const nextSpeaker = structuredClone(speaker)

      nextSpeaker.fields.avatar = isAsset(speaker.fields.avatar)
        ? normalizeAsset(speaker.fields.avatar)
        : await fetchAsset(
            clientWithoutResolveLinks,
            speaker.fields.avatar.sys.id,
          )
      nextSpeaker.fields.avatar2x = isAsset(speaker.fields.avatar2x)
        ? normalizeAsset(speaker.fields.avatar2x)
        : await fetchAsset(
            clientWithoutResolveLinks,
            speaker.fields.avatar2x.sys.id,
          )

      return nextSpeaker
    }),
  )

  const sessions = await Promise.all(
    rawSessions.map(async (session) => {
      const nextSession = structuredClone(session)

      nextSession.fields.ogImage = isAsset(session.fields.ogImage)
        ? normalizeAsset(session.fields.ogImage)
        : await fetchAsset(
            clientWithoutResolveLinks,
            session.fields.ogImage.sys.id,
          )

      return nextSession
    }),
  )

  return {
    speakers,
    sessions,
    timeTableSections,
    eventContainers,
    eventContainerParts,
    sponsors: normalizeSponsors(rawSponsors),
    sponsorPlans: structuredClone(sponsorPlans),
  }
}

export function sponsorsByPlan(siteData: SiteData, plan: string): Sponsor[] {
  return siteData.sponsors.filter((sponsor) => sponsor.fields.plan === plan)
}

export function sponsorPlansHavingSponsors(siteData: SiteData): SponsorPlan[] {
  return siteData.sponsorPlans.filter(
    (sponsorPlan) => sponsorsByPlan(siteData, sponsorPlan.plan).length > 0,
  )
}
