/**
 * このファイルは Contentful API スキーマ検討のためのものです。master にはマージしません
 */
interface Speaker {
  name: string
  title: string // 肩書き
  avatar: string // Image の URL
  avatar2x: string // Image の URL
  twitter?: string
  github?: string
  description: string // Markdown

  // Vue Fes Japan 2019 では 1人のスピーカーが複数のセッションを持つことはないが、
  // 理論上はありうるので一般的にしておく
  sessions: Session[]
}

interface Session {
  title: string
  time: number
  description: string // Markdown
  ogImage: string // Image の URL
  speakers: Speaker[] // ひとつのセッションに複数のスピーカーが入るものがある（例: Nuxt
  hasTranslation: boolean // 同時通訳の有無
}

/**
 * タイムテーブル = TimeTableSection[]
 */
interface TimeTableSection {
  titleForContentful: string // Contentful での操作時にどうしても識別するタイトルが必要であるため
  startAt: Date // タイムゾーン情報を持つ。例: '2019-10-12T09:30:00+09:00'
  endAt: Date // タイムゾーン情報を持つ。例: '2019-10-12T09:30:00+09:00'
  eventContainers: EventContainer[]
}

interface EventContainer {
  titleForContentful: string // Contentful での操作時にどうしても識別するタイトルが必要であるため

  // Room が null のときは部屋がないという意味ではなく、
  // どこか 1つのルームに限定しないという意味。
  // 2つ以上のルームを合体させた場合など。
  room?: Room

  // 最初の要素の sys.contentType.sys.id によって
  // Event なのか Session なのか EventContainerPart なのかを判定する
  contents: Event[] | Session[] | EventContainerPart[]
}

interface EventContainerPart {
  titleForContentful: string // Contentful での操作時にどうしても識別するタイトルが必要であるため
  startAt: Date // タイムゾーン情報を持つ。例: '2019-10-12T09:30:00+09:00'
  endAt: Date // タイムゾーン情報を持つ。例: '2019-10-12T09:30:00+09:00'

  // sys.contentType.sys.id によって Event なのか Session なのかを判定する
  content: Event | Session
}

interface Event {
  title: string
}

interface Room {
  name: string
}
