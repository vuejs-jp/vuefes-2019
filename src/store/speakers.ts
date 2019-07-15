import { Getters } from '~/types/store'

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

namespace Speakers {
  export type State = {
    speakers: Speaker[]
  }

  export type Getters = {
    all: Speaker[]
    speakerById: (id: string) => Speaker
  }
}

export const state = (): Speakers.State => ({
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
    // {
    //   id: 'ulivz',
    //   avatar: require('~/assets/images/speakers/.jpg'),
    //   avatar2x: require('~/assets/images/speakers/@2x.jpg'),
    //   title: '',
    //   name: 'ULIVZ',
    //   twitter: '_ulivz',
    //   github: 'ulivz',
    //   paragraphs: []
    // },
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
    },
    {
      id: 'keinuma',
      avatar: require('~/assets/images/speakers/keinuma.jpg'),
      avatar2x: require('~/assets/images/speakers/keinuma@2x.jpg'),
      title: 'ギルドワークス株式会社',
      name: '沼田 佳介',
      twitter: 'keinuma15',
      github: 'keinuma',
      paragraphs: [
        'モバイルアプリのバックエンドやWebアプリのフロントエンドを開発しています。',
        '何を作るのかを探求し、プロダクトの価値を出すことを大事にしています。ユーザーと共に作れるような開発に挑戦しています。'
      ]
    },
    // {
    //   id: '',
    //   avatar: require('~/assets/images/speakers/.jpg'),
    //   avatar2x: require('~/assets/images/speakers/@2x.jpg'),
    //   title: '',
    //   name: '高瀬 悠磨',
    //   twitter: '',
    //   github: '',
    //   paragraphs: []
    // },
    {
      id: 'keimakai',
      avatar: require('~/assets/images/speakers/keimakai.jpg'),
      avatar2x: require('~/assets/images/speakers/keimakai@2x.jpg'),
      title: 'STUDIO 株式会社',
      name: '甲斐 啓真',
      twitter: 'keimakai1993',
      github: 'keimakai',
      paragraphs: [
        'STUDIO 株式会社 Founder / CPO',
        '「STUDIO」というコードを書かずに Web サイトを作れるデザインツールを制作中。前職である UI デザイン会社のオハコでエンジニア兼デザイナーとして、Web サイト・アプリケーションを作っていく中でデザインと開発の間のギャップを体感。イラストベースでデザインする最近のデザインプロセスを脱して、実際のコードと同様の CSS（ボックスモデル）ベースでデザインするために 2016年から STUDIO の制作を始めました。'
      ]
    },
    {
      id: 'takefumi-yoshii',
      avatar: require('~/assets/images/speakers/takefumi-yoshii.jpg'),
      avatar2x: require('~/assets/images/speakers/takefumi-yoshii@2x.jpg'),
      title: 'DeNA',
      name: '吉井 健文',
      twitter: 'takepepe',
      github: 'takefumi-yoshii',
      paragraphs: [
        'デザイナーからフロントエンドエンジニアに転身、現職では Node.js サーバーサイド実装も担当。「TypeScript3.4 型の強化書」「実践 TypeScript」著者。'
      ]
    },
    {
      id: 'ninjinkun',
      avatar: require('~/assets/images/speakers/ninjinkun.png'),
      avatar2x: require('~/assets/images/speakers/ninjinkun@2x.png'),
      title: '株式会社一休',
      name: '浅野 慧',
      twitter: 'ninjinkun',
      github: 'ninjinkun',
      paragraphs: [
        '一休.com レストランを開発するエンジニアリングマネージャー。最近 iOS、Android アプリエンジニアから Web フロントエンドエンジニアにジョブチェンジしました。Product Managers Japan というプロダクトマネージャーのコミュニティも主催しています。'
      ]
    },
    {
      id: 'yamanoku',
      avatar: require('~/assets/images/speakers/yamanoku.jpg'),
      avatar2x: require('~/assets/images/speakers/yamanoku@2x.jpg'),
      title: '株式会社プレイド',
      name: '大山 奥人',
      twitter: 'yamanoku',
      github: 'yamanoku',
      paragraphs: [
        '1989年生まれの一児の父です。インターネット徘徊が大好きです。制作会社の Web デザイナーとして働き出し、株式会社 GEEK でマークアップ・フロントエンドエンジニアとして従事した後、2019年 1月よりデザインエンジニアとして株式会社プレイドに入社しました。アクセシビリティの視点をもったフロントエンド実装、情報設計・非機能要件を重視した業務に取り組んでいます。'
      ]
    },
    {
      id: 'masaakikunsan',
      avatar: require('~/assets/images/speakers/masaakikunsan.jpg'),
      avatar2x: require('~/assets/images/speakers/masaakikunsan@2x.jpg'),
      title: '株式会社 ROXX',
      name: '石岡 将明',
      twitter: 'masaakikunsan',
      github: 'masaakikunsan',
      paragraphs: [
        '2016年からプログラミングを始め、数多くのベンチャーでエンジニアを経験したのちフリーランスを経て、現在は株式会社 ROXX の back check というサービスの PM をやっています。フリーランス時代は、Vue.js や React での SPA 開発を中心とし、Web デザインや PM やフロントエンドの技術顧問業やハンズオンでの講師・メンターをしプログラミングを教えたりなどしていました。',
        '最近は、フロントでのテストの重要性を感じているので、テストに関心があります。'
      ]
    },
    // {
    //   id: '',
    //   avatar: require('~/assets/images/speakers/.jpg'),
    //   avatar2x: require('~/assets/images/speakers/@2x.jpg'),
    //   title: '',
    //   name: '宇野 航平',
    //   twitter: '',
    //   github: '',
    //   paragraphs: []
    // },
    {
      id: 'blackawa',
      avatar: require('~/assets/images/speakers/blackawa.jpg'),
      avatar2x: require('~/assets/images/speakers/blackawa@2x.jpg'),
      title: '株式会社マーク・オン',
      name: '黒川 智',
      twitter: 'blackawa0',
      github: 'blackawa',
      paragraphs: [
        '株式会社マーク・オンの創業メンバーであり開発者です。SIer で技術者としての基礎を、Web 系企業でビジネスとプロダクトの関係性を学びました。そして今はスタートアップで、顧客に思いを馳せながらコードを書いています。',
        '所属する株式会社マーク・オンは、チームの開発速度を高く保つために Vue.js を採用しました。Vue.js は現在その期待に完全に応えてくれています。'
      ]
    }
    // {
    //   id: '',
    //   avatar: require('~/assets/images/speakers/.jpg'),
    //   avatar2x: require('~/assets/images/speakers/@2x.jpg'),
    //   title: '',
    //   name: '手島 拓也',
    //   twitter: '',
    //   github: '',
    //   paragraphs: []
    // },
  ]
})

export const getters: Getters<Speakers.State, Speakers.Getters> = {
  all: state => {
    return state.speakers
  },
  speakerById: state => id => {
    const speaker = state.speakers.find(speaker => speaker.id === id)
    if (speaker) return speaker
    throw new Error('Speaker Not Found')
  }
}
