import { EntrySys } from '~/types/contentful'
import EventContainerPart from '~/types/eventContainerPart'
import Session from '~/types/session'
import Event from '~/types/event'
import Room from '~/types/room'

export default interface EventContainer {
  sys: EntrySys
  fields: {
    titleForContentful: string
    contents: (EventContainerPart | Session | Event)[]
    room?: Room
  }
}
