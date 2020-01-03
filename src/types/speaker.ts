import { EntrySys, EntryLink, Asset, AssetLink } from '~/types/contentful'

export default interface Speaker {
  sys: EntrySys
  fields: {
    name: string
    title: string // 肩書き
    avatar: Asset | AssetLink // Contentful から初回取得時には AssetLink で、その後 Asset に置き換えられる
    avatar2x: Asset | AssetLink // Contentful から初回取得時には AssetLink で、その後 Asset に置き換えられる
    twitter: string | null
    github: string
    description: string // Markdown

    // Vue Fes Japan 2019 では 1人のスピーカーが複数のセッションを持つことはないが、
    // 理論上はありうるので一般的にしておく
    sessions: EntryLink[]
  }
}
