import { Sys, EntryLink } from '~/types/contentful'

export type TimeTableSection = {
  sys: Sys
  fields: {
    titleForContentful: string
    startAt: string
    endAt: string
    eventContainers: EntryLink[]
  }
}
