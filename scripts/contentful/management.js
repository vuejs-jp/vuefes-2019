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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const sessions = [
    {
      title: { 'en-US': 'TBD' },
      time: { 'en-US': 40 },
      description: { 'en-US': 'TBD' }
    },
    {
      title: { 'en-US': 'The Present and Future about VuePress' },
      time: { 'en-US': 40 },
      description: { 'en-US': 'TBD' }
    },
    {
      title: { 'en-US': 'Enterprise Vue: Patterns That Scale' },
      time: { 'en-US': 40 },
      description: {
        'en-US':
          "Thinking about or currently using Vue in a very large application, potentially also with a large, diverse team? Or are you integrating Vue into a legacy app or complex architecture? Eager to learn how to avoid common mistakes, as well as battle-tested patterns to help you build an application you won't dread maintaining? As an enterprise consultant, member of the Vue team, and trained educator, Chris will share the most important lessons he's learned in his work."
      }
    },
    {
      title: { 'en-US': 'アンチパターンから学ぶ Atomic Design with Vue.js' },
      time: { 'en-US': 40 },
      description: {
        'en-US':
          '誰かに教わったデザインフレームワークやプラクティスをそのまま現場に適応しようとして、うまくいかなかった経験はないでしょうか。これはフロントエンド開発に限らずアジャイル開発やインフラ設計など普遍的な問題です。\n\n' +
          '本セッションでは、Vue.js と Atomic Design をフレーム通りにそのまま導入、実践をしてどう失敗したのかと、そこから得られた学びを発表します。さらに Atomic Design を発展させて、プロダクトやチーム、Vue.js に適応させた例を共有します。\n\n' +
          'TL;DR\n\n' +
          '- 思考を停止して Atomic Design を導入した結果の発表\n' +
          '    - ロジックの集中、コンポーネントの量産\n' +
          '- 導入するときは現場との差分（Vue.js、チーム、プロダクトの性質 etc..）を考えて追加する\n' +
          '- 視座をプロダクトのレベルまで高めて、設計判断をする\n' +
          '- 改めて Vue.js と Atomic Design ベースでコンポーネント開発を実践した時に考えたこと\n' +
          '    - ドメインを持たせたコンポーネントの組み合わせ\n' +
          '    - ロジックをリポジトリパターンで組み直す'
      }
    },
    {
      title: {
        'en-US':
          '4000万人が使うサービスを jQuery から Nuxt.js にまで置き換えていった話'
      },
      time: { 'en-US': 40 },
      description: {
        'en-US':
          'Retty は、月間 4000万人のユニークユーザーを持つ実名型グルメサービスです。9年間運用されてきましたが、当時の JavaScript はフル jQuery で書かれていました。本セッションでは、ここ数年で実施したフロントエンドの改善、サービス運用と並行しながら部分的に Vue.js、Nuxt.js に移行した軌跡をお話しします。\n\n' +
          '具体的には、jQuery や gulp/webpack との格闘、Jest 導入、SEO 要件、アーキテクチャ刷新による Nuxt.js の導入から拡充まで、施策との相性やログ機構などです。\n\n' +
          '時代とともにフロントエンド技術の移り変わりがあるなか、Retty はどのタイミングで jQuery から移行し、どう運用しているのかについて紹介します。'
      }
    },
    {
      title: { 'en-US': '次世代のデザインとフロントエンド開発の GUI 化' },
      time: { 'en-US': 40 },
      description: {
        'en-US':
          'STUDIO はコードを書かずに Web サイトを作れるデザインツールです（もちろん Vue.js 製！）。別の視点から見ると GUI でコードを生成するジェネレーターでもあります。\n\n' +
          'これまで静的な Web サイトしか作れなかった STUDIO が、今年に入ってから動的なものを作れるように開発を進めています。このとき重要になってくるのが Vue.js や React など昨今のフロントエンド開発で登場する「Component」の概念の可視化（GUI 化）です。また、GUI 化によって Vue.js と React の Component の設計思想の違いが見える形で現れてきました。\n\n' +
          '本セッションでは、「Component」の GUI 化を通じて見えてきた知見を中心に、実際にデモをしながら新しいデザインプロセスを提案します。'
      }
    },
    {
      title: { 'en-US': 'TypeScript CompilerAPI で挑む Vuex の型推論' },
      time: { 'en-US': 40 },
      description: {
        'en-US':
          'Vue.js のみならず、Nuxt.js でコア機能として存在する Vuex。Vue.js アプリケーションに TypeScript を導入するにあたり、Vuex の型定義は誰しもが悩んできた課題です。vuex-module-decorators などによるアプローチもありますが、TypeScript の機能をフル活用すれば、純粋な Vuex であっても、隅々まで TypeScript に最適化することが可能です。これは、既存の Vuex コードを TypeScript 化することはもちろん、デコレーターを利用したくないシーンで役に立つ TIPS です。本セッションでは、TypeScript CompilerAPI による codegen 手法により、型推論が不可能とされていた領域に挑戦します。'
      }
    },
    {
      title: {
        'en-US':
          'Vue CLI、GraphQL を用いた一休.com レストラン管理画面のリニューアル'
      },
      time: { 'en-US': 20 },
      description: {
        'en-US':
          'Vue CLI、GraphQL、Vue Router、Vuex、Bulma を用いて、一休.com レストランの管理画面リニューアルプロジェクトを高速に立ち上げ、リリースした知見を紹介します。具体的には以下のトピックについてお話しします。\n\n' +
          '- なぜ Nuxt.js ではなく Vue CLI なのか\n- Apollo Server を使いフロントエンドエンジニアがモックを書いて API 開発をリードするスタイル\n- SPA と MPA の混成'
      }
    },
    {
      title: { 'en-US': 'Vue.js meets Web Accessibility' },
      time: { 'en-US': 20 },
      description: {
        'en-US':
          '「Web アクセシビリティ」とは、あらゆるユーザーが共通のコストで情報にアクセスしたりサービスを利用できるようになることです。\n\n' +
          'Web の進化によりこれまでできなかった表現や UI が登場したり、利用するサービス自体もリッチな体験なものに変化してきています。しかし実際は、一部のユーザーには特定のコストをかけないと見れなかったり利用ができなかったりと、世に出ているサイトやアプリがなかなかアクセシブルなものとなっていないことがあります。\n\n' +
          '本セッションでは、Vue.js・Nuxt.js の開発においてどうアクセシビリティを担保するのか、UI コンポーネント開発においてどうやって取り組むのか、作ったものがどうアクセシブルであるかをチェックするか、について紹介します。\n\n' +
          'そして、今こそ「アクセシビリティをやる意味」について一緒に考えましょう。'
      }
    },
    {
      title: { 'en-US': 'Nuxt.js + TypeScript で 01 開発' },
      time: { 'en-US': 20 },
      description: {
        'en-US':
          'TypeScript のニーズが急速に高まっていますが、実際には日本国内での知見共有や、企業における事例はまだまだ少ない状況です。Vuex で TypeScript をどう扱うかについても、未だに物議を醸しています。\n\n' +
          'また、Vue.js 3.0 で Class API がドロップされる発表があり話題になりましたが、Nuxt.js 公式では Decorator が推奨されており、Nuxt.js がどう対応していくかにも注目が集まっています。\n\n' +
          '本セッションでは、スピーカーがフリーランスや会社員として携わった多数の Vue.js、Nuxt.js、TypeScript 開発で得た知見を共有します。具体的には、実際に Nuxt.js と TypeScript を現場レベルで使う場合、何に気を付けるべきか、Vuex の話、Storybook でのコンポーネント開発などを紹介します。'
      }
    },
    {
      title: { 'en-US': '型がある楽しさとつらさ' },
      time: { 'en-US': 20 },
      description: {
        'en-US':
          '大規模サービスになると、型に守られた世界でコードを書きたいものです。実名型グルメサービス Retty でも、一部アーキテクチャの刷新時に、フロントエンドに Nuxt.js + TypeScript、サーバーとの通信に GraphQL を導入しました。\n\n' +
          '型がある安全な世界になった一方で、型のない世界に型を持ち込んだ辛さもあります。また、型定義ファイルが提供されていない外部パッケージの変化に追従していく大変さもあります。\n\n' +
          '本セッションでは、型のない世界にどのように型を組み込んだか、開発速度、運用コストについてお話しします。具体的には、VueTypes からの移行や API のインタフェース などについて紹介します。'
      }
    },
    {
      title: { 'en-US': '“何もない” を作る、コンポーネント指向な余白設計' },
      time: { 'en-US': 20 },
      description: {
        'en-US':
          'Vue.js がそうであるように、限定されたスコープの CSS を使って UI コンポーネントを設計することが世の中の当たり前になってきました。それを用いて UI コンポーネントを実装する時に必ず突き当たる難題のひとつが「余白」です。本セッションでは、UI コンポーネントの開発時に検討すべき余白設計についてお話しします。\n\n' +
          '余白は、目に見えないがために境界が曖昧ですから、「この UI はどんなコンポーネントに分割すべきだろうか？」という目に見える問題に比べて見落とされがちです。しかし実際に開発を行うとなると、「この余白をどのコンポーネントに実装すべきか？」、「取ることのできる選択肢は何で、それぞれにどんな影響があるのか？」と悩むことになります。\n\n' +
          'そしてひとたび方針を間違えれば、手を入れるたびに複雑化していく UI コンポーネントができ上がってしまいます。にもかかわらず余白設計の問題について語られる機会はそう多くはありません。\n\n' +
          '実際に開発と運用を行って得られた「何もない」を作るための余白設計の知見を共有します。'
      }
    },
    {
      title: { 'en-US': 'とある Nuxt.js 案件の本当にあった怖い話。' },
      time: { 'en-US': 20 },
      description: {
        'en-US':
          'これまで 15件以上 Vue.js 案件のコンサルティングと開発に携わってきた内の 1つ、某スタートアップでの Nuxt.js 開発案件は、参加した時点で既にメンテナンス不能状態となっていました。\n\n' +
          '例えば、以下のような問題です。\n\n' +
          '- ページをまたがるグローバルなストアが混沌としている\n' +
          '- 関係ないページ用のストアの冗長なロードが起きパフォーマンスが悪い\n' +
          '- SEO が重要にも関わらずサーバーサイドレンダリングを導入できていない\n' +
          '- Firebase 認証に関連し一部のユーザーが永遠にログインできない致命的なバグの発生\n' +
          '- ページ遷移時の UI チラツキが頻発\n' +
          '- など\n\n' +
          'なぜそのようなことが起こってしまったのでしょうか？結果的に、サービスの質の低下に繋がってしまう状況が続き、改善のプロセスを早急に見出していく必要がありました。開発チームの体制の問題もありましたが、現在進行形でコード・設計レベルで改善を行っています。\n\n' +
          '本セッションでは、本案件を通じて得られた「Nuxt.js バッドプラクティス」の知見と改善方法提案を紹介します。'
      }
    }
  ]

  sessions.forEach(session => {
    client
      .getSpace(SPACE_ID)
      .then(space => space.getEnvironment('master'))
      .then(environment =>
        environment.createEntry('session', {
          fields: session
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

// createSpeakers()
createSessions()
