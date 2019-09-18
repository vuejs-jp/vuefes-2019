import { EntrySys } from '~/types/contentful'
import EventContainerPart from '~/types/eventContainerPart'
import Session from '~/types/session'
import Event from '~/types/event'
import Room from '~/types/room'

export default interface EventContainer {
  sys: EntrySys
  fields: {
    titleForContentful: string // Contentful での操作時にどうしても識別するタイトルが必要であるため

    // sys.contentType.sys.id によって
    // Event なのか Session なのか EventContainerPart なのかを判定する
    contents: (EventContainerPart | Session | Event)[]

    // Room が null のときは部屋がないという意味ではなく、
    // どこか 1つのルームに限定しないという意味。
    // 2つ以上のルームを合体させた場合など。
    room?: Room
  }
}
