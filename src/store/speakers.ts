export type Speaker = {
  id: string
  avatar: string
  avatar2x: string
  title: string
  name: string
  twitter: string
  github: string
  paragraphs: string[]
}

type State = {
  speakers: Speaker[]
}

export const state = (): State => ({
  speakers: [
    {
      id: 'yyx990803',
      avatar: require('~/assets/images/speakers/yyx990803.jpg'),
      avatar2x: require('~/assets/images/speakers/yyx990803@2x.jpg'),
      title: 'Vue.js クリエーター',
      name: 'Evan You',
      twitter: 'youyuxi',
      github: 'yyx990803',
      paragraphs: [
        'Evan は開発者、デザイナー、そしてクリエイティブコーダーです。彼は、リアクティブなコンポーネントでモダンな Web インターフェイスを構築するための JavaScript フレームワーク、Vue.js の作者です。',
        'かつて、GitHub で最もスターを集めたフルスタック JavaScript フレームワークであった Meteor の開発グループでも働いていました。Google Creative Lab で、さまざまな Google プロダクト向けの実験的な UI プロトタイプに、2年間取り組んでいた経験もあります。'
      ]
    },
    {
      id: 'Atinux',
      avatar: require('~/assets/images/speakers/Atinux.jpg'),
      avatar2x: require('~/assets/images/speakers/Atinux@2x.jpg'),
      title: 'Nuxt.js 共同クリエーター',
      name: 'Sébastien Chopin',
      twitter: 'Atinux',
      github: 'Atinux',
      paragraphs: [
        '14歳から Web デベロッパーです。8年ほど前に Node.js を使い始めてからは、JavaScript だけを書いています。ユニバーサルアプリケーションを簡単に作ることができる Nuxt.js を共同で作っています。'
      ]
    },
    {
      id: 'alexchopin',
      avatar: require('~/assets/images/speakers/alexchopin.jpg'),
      avatar2x: require('~/assets/images/speakers/alexchopin@2x.jpg'),
      title: 'Nuxt.js 共同クリエーター',
      name: 'Alexandre Chopin',
      twitter: 'IamNuxt',
      github: 'alexchopin',
      paragraphs: [
        'Web デベロッパーであり、講師であり、スピーカーでもあります。デベロッパーライフに喜びをもたらすため、Nuxt.js の共同クリエーターとしてフルタイムで働いています。'
      ]
    },
    {
      id: 'octref',
      avatar: require('~/assets/images/speakers/octref.jpg'),
      avatar2x: require('~/assets/images/speakers/octref@2x.jpg'),
      title: 'Vetur クリエーター',
      name: 'Pine Wu',
      twitter: 'octref',
      github: 'octref',
      paragraphs: [
        'Microsoft で Visual Studio Code（VS Code）の開発に携わっています。VS Code の有名な Vue 拡張機能 Vetur の作者でもあります。Vetur という名前は、菅野よう子さんの歌『Von』に由来しています。好きなマンガは『バガボンド』で、時間があれば何度も読んでいます。'
      ]
    },
    {
      id: 'jlooper',
      avatar: require('~/assets/images/speakers/jlooper.jpg'),
      avatar2x: require('~/assets/images/speakers/jlooper@2x.jpg'),
      title: 'Vue Vixens 創設者兼 CEO',
      name: 'Jen Looper',
      twitter: 'jenlooper',
      github: 'jlooper',
      paragraphs: [
        'Microsoft のクラウドデベロッパーアドボケイトリード、Google Developer Expert として Web およびモバイル開発者として 18年以上の経験を持ち、クロスプラットフォームのモバイルアプリケーション制作を専門としています。',
        'ハードウェアハッキング、モバイルアプリ、Vue.js、機械学習、そして毎日新しいことの発見に情熱を注いでいる多言語多文化主義者です。Vue.js コミュニティの多様性を促進する先駆けである Vue Vixens の創設者兼 CEO です。'
      ]
    },
    {
      id: 'chrisvfritz',
      avatar: require('~/assets/images/speakers/chrisvfritz.jpg'),
      avatar2x: require('~/assets/images/speakers/chrisvfritz@2x.jpg'),
      title: 'Vue.js コアチームメンバー',
      name: 'Chris Fritz',
      twitter: 'chrisvfritz',
      github: 'chrisvfritz',
      paragraphs: [
        'アメリカ合衆国ミシガン州ランシングに住んでおり、オープンソースに取り組みながら世界中の企業における素晴らしい Web フロントエンド構築を手助けしています。',
        'Vue.js コアチームの一員としての仕事でよく知られており、Web 開発者にとって人生をよりシンプルで楽しいものにするための他のリソースとともに、Vue.js のドキュメント執筆やキュレーションをしています。'
      ]
    }
  ]
})

export const getters = {
  all: (state: State) => (): Speaker[] => {
    return state.speakers
  },
  speakerById: (state: State) => (id: string): Speaker => {
    const speaker = state.speakers.find(speaker => speaker.id === id)
    if (speaker) return speaker
    throw new Error('Speaker Not Found')
  }
}
