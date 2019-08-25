'use strict'

require('dotenv').config()

const contentful = require('contentful-management')
const SPACE_ID = process.env.CTF_SPACE_ID
const PERSONAL_ACCESS_TOKEN = process.env.CTF_PERSONAL_ACCESS_TOKEN

const client = contentful.createClient({
  accessToken: PERSONAL_ACCESS_TOKEN
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function createSpeakers() {
  const speakers = [
    {
      title: { 'en-US': 'Vue Vixens 創設者兼 CEO' },
      name: { 'en-US': 'Jen Looper' },
      twitter: { 'en-US': 'jenlooper' },
      github: { 'en-US': 'jlooper' },
      description: {
        'en-US':
          'Microsoft のクラウドデベロッパーアドボケイトリード、Google Developer Expert として Web およびモバイル開発者として 18年以上の経験を持ち、クロスプラットフォームのモバイルアプリケーション制作を専門としています。\n\n' +
          'ハードウェアハッキング、モバイルアプリ、Vue.js、機械学習、そして毎日新しいことの発見に情熱を注いでいる多言語多文化主義者です。Vue.js コミュニティの多様性を促進する先駆けである Vue Vixens の創設者兼 CEO です。'
      }
    },
    {
      title: { 'en-US': 'VuePress デベロッパー' },
      name: { 'en-US': 'ULIVZ' },
      twitter: { 'en-US': '_ulivz' },
      github: { 'en-US': 'ulivz' },
      description: {
        'en-US':
          'Ant Financial（Alipay）に勤めながら、VuePress の開発をしています。エンジニアリングとプロダクト構築の能力に優れています。\n\n' +
          '文章を書くこと（文学）、写真、映画が好きで、『ハチミツとクローバー』のような芸術的な風味を漂わせる作品がお気に入りです。'
      }
    },
    {
      title: { 'en-US': 'Vue.js コアチームメンバー' },
      name: { 'en-US': 'Chris Fritz' },
      twitter: { 'en-US': 'chrisvfritz' },
      github: { 'en-US': 'chrisvfritz' },
      description: {
        'en-US':
          'アメリカ合衆国ミシガン州ランシングに住んでおり、オープンソースに取り組みながら世界中の企業における素晴らしい Web フロントエンド構築を手助けしています。\n\n' +
          'Vue.js コアチームの一員としての仕事でよく知られており、Web 開発者にとって人生をよりシンプルで楽しいものにするための他のリソースとともに、Vue.js のドキュメント執筆やキュレーションをしています。'
      }
    },
    {
      title: { 'en-US': 'ギルドワークス株式会社' },
      name: { 'en-US': '沼田 佳介' },
      twitter: { 'en-US': 'keinuma15' },
      github: { 'en-US': 'keinuma' },
      description: {
        'en-US':
          'モバイルアプリのバックエンドや Web アプリのフロントエンドを開発しています。\n\n' +
          '何を作るのかを探求し、プロダクトの価値を出すことを大事にしています。ユーザーと共に作れるような開発に挑戦しています。'
      }
    },
    {
      title: { 'en-US': 'Retty 株式会社' },
      name: { 'en-US': '高瀬 悠磨' },
      twitter: { 'en-US': null },
      github: { 'en-US': 'retty-y-takase' },
      description: {
        'en-US':
          '2018年から Retty にフロントエンドエンジニアとして参画。Vue.js を用いた Web アプリケーションの開発・運用を行なっています。2児の父、最近の特技は息子の「俺の必殺技」にカウンターアタックをいれることです。'
      }
    },
    {
      title: { 'en-US': 'STUDIO 株式会社' },
      name: { 'en-US': '甲斐 啓真' },
      twitter: { 'en-US': 'keimakai1993' },
      github: { 'en-US': 'keimakai' },
      description: {
        'en-US':
          'STUDIO 株式会社 Founder / CPO\n\n' +
          '「STUDIO」というコードを書かずに Web サイトを作れるデザインツールを制作中。前職である UI デザイン会社のオハコでエンジニア兼デザイナーとして、Web サイト・アプリケーションを作っていく中でデザインと開発の間のギャップを体感。イラストベースでデザインする最近のデザインプロセスを脱して、実際のコードと同様の CSS（ボックスモデル）ベースでデザインするために 2016年から STUDIO の制作を始めました。'
      }
    },
    {
      title: { 'en-US': 'DeNA' },
      name: { 'en-US': '吉井 健文' },
      twitter: { 'en-US': 'takepepe' },
      github: { 'en-US': 'takefumi-yoshii' },
      description: {
        'en-US':
          'デザイナーからフロントエンドエンジニアに転身、現職では Node.js サーバーサイド実装も担当。「TypeScript3.4 型の強化書」「実践 TypeScript」著者。'
      }
    },
    {
      title: { 'en-US': '株式会社一休' },
      name: { 'en-US': '浅野 慧' },
      twitter: { 'en-US': 'ninjinkun' },
      github: { 'en-US': 'ninjinkun' },
      description: {
        'en-US':
          '一休.com レストランを開発するエンジニアリングマネージャー。最近 iOS、Android アプリエンジニアから Web フロントエンドエンジニアにジョブチェンジしました。Product Managers Japan というプロダクトマネージャーのコミュニティも主催しています。'
      }
    },
    {
      title: { 'en-US': '株式会社プレイド' },
      name: { 'en-US': '大山 奥人' },
      twitter: { 'en-US': 'yamanoku' },
      github: { 'en-US': 'yamanoku' },
      description: {
        'en-US':
          '1989年生まれの一児の父です。インターネット徘徊が大好きです。制作会社の Web デザイナーとして働き出し、株式会社 GEEK でマークアップ・フロントエンドエンジニアとして従事した後、2019年1月よりデザインエンジニアとして株式会社プレイドに入社しました。アクセシビリティの視点をもったフロントエンド実装、情報設計・非機能要件を重視した業務に取り組んでいます。'
      }
    },
    {
      title: { 'en-US': '株式会社 ROXX' },
      name: { 'en-US': '石岡 将明' },
      twitter: { 'en-US': 'masaakikunsan' },
      github: { 'en-US': 'masaakikunsan' },
      description: {
        'en-US':
          '2016年からプログラミングを始め、数多くのベンチャーでエンジニアを経験したのちフリーランスを経て、現在は株式会社 ROXX の back check というサービスの PM をやっています。フリーランス時代は、Vue.js や React での SPA 開発を中心とし、Web デザインや PM やフロントエンドの技術顧問業やハンズオンでの講師・メンターをしプログラミングを教えたりなどしていました。\n\n' +
          '最近は、フロントでのテストの重要性を感じているので、テストに関心があります。'
      }
    },
    {
      title: { 'en-US': 'Retty 株式会社' },
      name: { 'en-US': '宇野 航平' },
      twitter: { 'en-US': null },
      github: { 'en-US': 'konu96' },
      description: {
        'en-US':
          'Retty 新卒 Web エンジニアです。サーバーサイドからフロントエンドまで幅広くやっています。最近では、アーキテクチャ刷新プロジェクトを進めており、Go + Nuxt.js + TypeScript で開発をしています。'
      }
    },
    {
      title: { 'en-US': '株式会社マーク・オン' },
      name: { 'en-US': '黒川 智' },
      twitter: { 'en-US': 'blackawa0' },
      github: { 'en-US': 'blackawa' },
      description: {
        'en-US':
          '株式会社マーク・オンの創業メンバーであり開発者です。SIer で技術者としての基礎を、Web 系企業でビジネスとプロダクトの関係性を学びました。そして今はスタートアップで、顧客に思いを馳せながらコードを書いています。\n\n' +
          '所属する株式会社マーク・オンは、チームの開発速度を高く保つために Vue.js を採用しました。Vue.js は現在その期待に完全に応えてくれています。'
      }
    },
    {
      title: { 'en-US': 'GAOGAO Pte. Ltd.' },
      name: { 'en-US': '手島 拓也' },
      twitter: { 'en-US': 'tejitak' },
      github: { 'en-US': 'tejitak' },
      description: {
        'en-US':
          '新卒で入社した IBM 研究所にてソフトウェアエンジニアとして検索・テキスト解析プロダクトの開発に従事した後、LINE 株式会社に転職し多くのサービス開発に携わりました。その後、共同創業者兼 CTO として起業、高級志向の民泊サービスを運営・事業売却し、現在はシンガポール本社 GAOGAO Pte. Ltd. の代表として創業し、海外拠点のスタートアップ・スタジオを運営しています。共著に『Vue.js入門』があります。'
      }
    }
  ]

  speakers.forEach(speaker => {
    client
      .getSpace(SPACE_ID)
      .then(space => space.getEnvironment('master'))
      .then(environment =>
        environment.createEntry('speaker', {
          fields: speaker
        })
      )
      .then(entry => {
        console.log(entry)
      })
      .catch(error => {
        console.error(error)
      })
  })
}

function createSessions() {
  console.log('Not yet implemented')
}

// createSpeakers()
createSessions()
