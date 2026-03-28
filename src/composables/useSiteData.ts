import {
  createFallbackSiteData,
  loadSiteData,
  sponsorPlansHavingSponsors,
  sponsorsByPlan,
  type SiteData,
} from '~/lib/site-data'
import type EventContainer from '~/types/eventContainer'
import type EventContainerPart from '~/types/eventContainerPart'
import type Session from '~/types/session'
import type Speaker from '~/types/speaker'

export async function useSiteDataFetch() {
  const runtimeConfig = useRuntimeConfig()
  const siteData = useState<SiteData>('site-data', createFallbackSiteData)

  if (import.meta.server) {
    await callOnce('site-data', async () => {
      siteData.value = await loadSiteData({
        contentfulSpaceId: runtimeConfig.contentfulSpaceId,
        contentfulAccessToken: runtimeConfig.contentfulAccessToken,
      })
    })
  }

  return siteData
}

export function useSiteData() {
  const siteData = useState<SiteData>('site-data', createFallbackSiteData)

  const speakers = computed(() => siteData.value.speakers)
  const sessions = computed(() => siteData.value.sessions)
  const timeTableSections = computed(() =>
    [...siteData.value.timeTableSections].sort((a, b) =>
      a.fields.startAt.localeCompare(b.fields.startAt),
    ),
  )
  const eventContainers = computed(() => siteData.value.eventContainers)
  const eventContainerParts = computed(() => siteData.value.eventContainerParts)
  const sponsors = computed(() => siteData.value.sponsors)
  const sponsorPlans = computed(() => siteData.value.sponsorPlans)

  const findSpeakerById = (id: string): Speaker | undefined =>
    speakers.value.find((speaker) => speaker.sys.id === id)
  const findSpeakerByGithub = (github: string): Speaker | undefined =>
    speakers.value.find((speaker) => speaker.fields.github === github)
  const findSessionById = (id: string): Session | undefined =>
    sessions.value.find((session) => session.sys.id === id)
  const findEventContainerById = (id: string): EventContainer | undefined =>
    eventContainers.value.find((eventContainer) => eventContainer.sys.id === id)
  const findEventContainerPartById = (
    id: string,
  ): EventContainerPart | undefined =>
    eventContainerParts.value.find((part) => part.sys.id === id)

  return {
    siteData,
    speakers,
    sessions,
    timeTableSections,
    eventContainers,
    eventContainerParts,
    sponsors,
    sponsorPlans,
    findSpeakerById,
    findSpeakerByGithub,
    findSessionById,
    findEventContainerById,
    findEventContainerPartById,
    sponsorsByPlan: (plan: string) => sponsorsByPlan(siteData.value, plan),
    sponsorPlansHavingSponsors: computed(() =>
      sponsorPlansHavingSponsors(siteData.value),
    ),
  }
}
