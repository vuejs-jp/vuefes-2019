/**
 * このファイルは Contentful API スキーマ検討のためのものです。master にはマージしません
 */
type Speaker = {
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

type Session = {
  title: string
  time: number
  description: string // Markdown
  ogImage: string // Image の URL
  speakers: Speaker[] // ひとつのセッションに複数のスピーカーが入るものがある（例: Nuxt

  // Room が null のときは部屋がないという意味ではなく、
  // どこか 1つのルームに限定しないという意味。
  // 2つ以上のルームを合体させた場合など。
  room?: Room
}

/**
 * タイムテーブル = TimeTableSection[]
 */
type TimeTableSection = {
  titleForContentful: string // Contentful での操作時にどうしても識別するタイトルが必要であるため
  startAt: Date // タイムゾーン情報を持つ。例: '2019-10-12T09:30:00+09:00'
  endAt: Date // タイムゾーン情報を持つ。例: '2019-10-12T09:30:00+09:00'
  EventContainers: EventContainer[]
}

type EventContainer = {
  titleForContentful: string // Contentful での操作時にどうしても識別するタイトルが必要であるため

  // 最初の要素の sys.contentType.sys.id によって
  // Event なのか Session なのか EventContainerPart なのかを判定する
  contents: Event[] | Session[] | EventContainerPart[]

  // Room は EventContainer 内で共通である
  // contents 最初の Event、Session の Room
  // もしくは最初の EventContainerPart の content の Room が EventContainer の Room となる
}

type EventContainerPart = {
  titleForContentful: string // Contentful での操作時にどうしても識別するタイトルが必要であるため
  startAt: Date // タイムゾーン情報を持つ。例: '2019-10-12T09:30:00+09:00'
  endAt: Date // タイムゾーン情報を持つ。例: '2019-10-12T09:30:00+09:00'

  // sys.contentType.sys.id によって Event なのか Session なのかを判定する
  content: Event | Session
}

// type Event が既に存在するため interface にした
interface Event {
  title: string

  // Room が null のときは部屋がないという意味ではなく、
  // どこか 1つのルームに限定しないという意味。
  // 2つ以上のルームを合体させた場合など。
  room?: Room
}

type Room = {
  name: string
}
