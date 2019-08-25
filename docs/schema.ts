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
}

/**
 * タイムテーブル = TimeSection[]
 */
type TimeSection = {
  startAt: Date // タイムゾーン情報を持つ。例: '2019-10-12T09:30:00+09:00'
  endAt: Date // タイムゾーン情報を持つ。例: '2019-10-12T09:30:00+09:00'
  timeContainers: TimeContainer[]
}

type TimeContainer = {
  room?: Room

  // 最初の要素の sys.type.sys.id によって
  // TimeContent なのか Session なのか TimeContainerPart なのかを判定する
  contents: TimeContent[] | Session[] | TimeContainerPart[]
}

type TimeContainerPart = {
  startAt: Date // タイムゾーン情報を持つ。例: '2019-10-12T09:30:00+09:00'
  endAt: Date // タイムゾーン情報を持つ。例: '2019-10-12T09:30:00+09:00'

  // sys.type.sys.id によって TimeContent なのか Session なのかを判定する
  content: TimeContent | Session
}

type TimeContent = {
  title: string
}

type Room = {
  name: string
}
