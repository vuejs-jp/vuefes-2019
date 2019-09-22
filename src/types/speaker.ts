import { EntrySys, EntryLink, AssetLink } from '~/types/contentful'

export default interface Speaker {
  sys: EntrySys
  fields: {
    name: string
    title: string // 肩書き
    avatar: AssetLink
    avatar2x: AssetLink
    twitter: string | null
    github: string
    description: string // Markdown

    // Vue Fes Japan 2019 では 1人のスピーカーが複数のセッションを持つことはないが、
    // 理論上はありうるので一般的にしておく
    sessions: EntryLink[]
  }
}
