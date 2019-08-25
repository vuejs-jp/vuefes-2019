/**
 * このファイルは Contentful API スキーマ検討のためのものです。master にはマージしません
 */
type Speaker = {
  name: string
  title: string // 肩書き
  avatar: string // Image の URL
  avatar2x: string // Image の URL
  twitter: string
  github: string
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
