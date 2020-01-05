import { EntrySys, Asset, EntryLink, AssetLink } from '~/types/contentful'

export default interface Session {
  sys: EntrySys
  fields: {
    title: string
    time: number
    description: string // Markdown
    ogImage: Asset | AssetLink // Contentful から初回取得時には AssetLink で、その後 Asset に置き換えられる
    speakers: EntryLink[] // ひとつのセッションに複数のスピーカーが入るものがある（例: Nuxt
    hasTranslation: boolean // 同時通訳の有無
  }
}
