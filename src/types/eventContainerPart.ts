import { EntrySys, EntryLink } from '~/types/contentful'
import Session from '~/types/session'

export default interface EventContainerPart {
  sys: EntrySys
  fields: {
    titleForContentful: string
    startAt: string
    endAt: string
    content: Session | Event | EntryLink
  }
}
