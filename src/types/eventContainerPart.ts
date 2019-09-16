import { EntrySys } from '~/types/contentful'
import Event from '~/types/event'
import { Session } from '~/store/sessions'

export default interface EventContainerPart {
  sys: EntrySys
  fields: {
    titleForContentful: string
    startAt: string
    endAt: string
    content: Session | Event
  }
}
