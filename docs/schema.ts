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
 * タイムテーブル = TimeSection[]
 */
type TimeSection = {
  titleForContentful: string // Contentful での操作時にどうしても識別するタイトルが必要であるため
  startAt: Date // タイムゾーン情報を持つ。例: '2019-10-12T09:30:00+09:00'
  endAt: Date // タイムゾーン情報を持つ。例: '2019-10-12T09:30:00+09:00'
  timeContainers: TimeContainer[]
}

type TimeContainer = {
  titleForContentful: string // Contentful での操作時にどうしても識別するタイトルが必要であるため

  // 最初の要素の sys.contentType.sys.id によって
  // TimeContent なのか Session なのか TimeContainerPart なのかを判定する
  contents: TimeContent[] | Session[] | TimeContainerPart[]

  // Room は TimeContainer 内で共通である
  // contents 最初の TimeContent、Session の Room
  // もしくは最初の TimeContainerPart の content の Room が TimeContainer の Room となる
}

type TimeContainerPart = {
  titleForContentful: string // Contentful での操作時にどうしても識別するタイトルが必要であるため
  startAt: Date // タイムゾーン情報を持つ。例: '2019-10-12T09:30:00+09:00'
  endAt: Date // タイムゾーン情報を持つ。例: '2019-10-12T09:30:00+09:00'

  // sys.contentType.sys.id によって TimeContent なのか Session なのかを判定する
  content: TimeContent | Session
}

type TimeContent = {
  title: string

  // Room が null のときは部屋がないという意味ではなく、
  // どこか 1つのルームに限定しないという意味。
  // 2つ以上のルームを合体させた場合など。
  room?: Room
}

type Room = {
  name: string
}
