import { ContentfulClientApi, Entry } from 'contentful/index'

const contentful = require('contentful')

const clientWithResolveLinks: ContentfulClientApi = contentful.createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
  resolveLinks: true
})

const clientWithoutResolveLinks: ContentfulClientApi = contentful.createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
  resolveLinks: false
})

export const getSpeakers = (): Promise<Entry<any>[]> => {
  return clientWithoutResolveLinks
    .getEntries({
      content_type: 'speaker'
    })
    .then(response => response.items)
}

export const getSessions = (): Promise<Entry<any>[]> => {
  return clientWithoutResolveLinks
    .getEntries({
      content_type: 'session'
    })
    .then(response => response.items)
}

export const getTimeTableSections = (): Promise<Entry<any>[]> => {
  return clientWithoutResolveLinks
    .getEntries({
      content_type: 'timeTableSection'
    })
    .then(response => response.items)
}

export const getEventContainers = (): Promise<Entry<any>[]> => {
  return clientWithoutResolveLinks
    .getEntries({
      content_type: 'eventContainer'
    })
    .then(response => response.items)
}

export const getEventContainerParts = (): Promise<Entry<any>[]> => {
  return clientWithoutResolveLinks
    .getEntries({
      content_type: 'eventContainerPart'
    })
    .then(response => response.items)
}

export const getRooms = (): Promise<Entry<any>[]> => {
  return clientWithoutResolveLinks
    .getEntries({
      content_type: 'room'
    })
    .then(response => response.items)
}

export const getEvents = (): Promise<Entry<any>[]> => {
  return clientWithoutResolveLinks
    .getEntries({
      content_type: 'event'
    })
    .then(response => response.items)
}

export const getSponsors = (): Promise<Entry<any>[]> => {
  return clientWithResolveLinks
    .getEntries({
      content_type: 'sponsor'
      // FIXME: order: '-appliedAt'
    })
    .then(response => response.items)
}
