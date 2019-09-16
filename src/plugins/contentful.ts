import { ContentfulClientApi } from 'contentful/index'

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

export const getSpeakers = (): Promise<any[]> => {
  return clientWithoutResolveLinks
    .getEntries({
      content_type: 'speaker'
    })
    .then(response => response.items)
}

export const getSessions = (): Promise<any[]> => {
  return clientWithoutResolveLinks
    .getEntries({
      content_type: 'session'
    })
    .then(response => response.items)
}

// 実際には戻り値は Promise<TimeTableSection[]> だが、型エラーが発生する
// error: Type 'Promise<TimeTableSection[] | Entry<unknown>[]>' is not assignable to type 'Promise<TimeTableSection[]
export const getTimeTableSections = (): Promise<any[]> => {
  return clientWithoutResolveLinks
    .getEntries({
      content_type: 'timeTableSection',
      order: 'fields.startAt'
    })
    .then(response => response.items)
}

export const getEventContainers = (): Promise<any[]> => {
  return clientWithResolveLinks
    .getEntries({
      content_type: 'eventContainer'
    })
    .then(response => response.items)
}

export const getEventContainerParts = (): Promise<any[]> => {
  return clientWithResolveLinks
    .getEntries({
      content_type: 'eventContainerPart'
    })
    .then(response => response.items)
}

export const getRooms = (): Promise<any[]> => {
  return clientWithoutResolveLinks
    .getEntries({
      content_type: 'room'
    })
    .then(response => response.items)
}

export const getEvents = (): Promise<any[]> => {
  return clientWithoutResolveLinks
    .getEntries({
      content_type: 'event'
    })
    .then(response => response.items)
}

export const getSponsors = (): Promise<any[]> => {
  return clientWithResolveLinks
    .getEntries({
      content_type: 'sponsor'
      // FIXME: order: '-appliedAt'
    })
    .then(response => response.items)
}
