import { Getters } from 'vuex'

export type Session = {
  speakerId: string
  title: string
  time: number
  paragraphs: string[]
  ogImage: string
}

namespace Sessions {
  export type State = {
    sessions: Session[]
  }

  export type Getters = {
    sessionBySpeakerId: (speakerId: string) => Session
  }
}

export const state = (): Sessions.State => ({
  sessions: [
    {
      speakerId: 'yyx990803',
      title: 'Keynote',
      time: 50,
      paragraphs: ['Keynote'],
      ogImage: 'yyx990803.jpg'
    },
    {
      speakerId: 'Atinux',
      title: 'Introduction to Nuxt 3',
      time: 40,
      paragraphs: [
        'This talk will introduce Nuxt 3, what are the changes and what benefits it brings for Web development and Developer Experience.'
      ],
      ogImage: 'Atinux.jpg'
    },
    {
      speakerId: 'alexchopin',
      title: "What's Nuxt?",
      time: 40,
      paragraphs: [
        'Discover the story and philosophy of Nuxt.js and his team. Where does it come from and where do we wish to go in the future.'
      ],
      ogImage: 'alexchopin.jpg'
    },
    {
      speakerId: 'octref',
      title: 'Vue Tooling について語るときに僕の語ること',
      time: 40,
      paragraphs: [
        'With over two million installs, today Vetur is the most popular editor tooling plugin for editing Vue single file components.',
        "This talk will starts with an overview of Vetur's features and then dive deep into specific features such as auto completion and type checking in Vue templates.",
        "Besides, I'll explain Vetur's role in the overall Vue ecosystem, especially in improving the TypeScript integration. Finally, I'll talk about how Vetur could offer next generation development experience from its unique position."
      ],
      ogImage: 'octref.jpg'
    },
    {
      speakerId: 'jlooper',
      title: 'TBD',
      time: 40,
      paragraphs: ['TBD'],
      ogImage: 'jlooper.jpg'
    },
    // {
    //   speakerId: 'ulivz',
    //   title: 'TBD',
    //   time: 40,
    //   paragraphs: ['TBD'],
    //   ogImage: 'ulivz.jpg'
    // },
    {
      speakerId: 'chrisvfritz',
      title: 'Enterprise Vue: Patterns That Scale',
      time: 40,
      paragraphs: [
        "Thinking about or currently using Vue in a very large application, potentially also with a large, diverse team? Or are you integrating Vue into a legacy app or complex architecture? Eager to learn how to avoid common mistakes, as well as battle-tested patterns to help you build an application you won't dread maintaining? As an enterprise consultant, member of the Vue team, and trained educator, Chris will share the most important lessons he's learned in his work."
      ],
      ogImage: 'chrisvfritz.jpg'
    },
    {
      speakerId: 'keinuma',
      title: 'アンチパターンから学ぶ Atomic Design with Vue.js',
      time: 40,
      paragraphs: [
        '誰かに教わったデザインフレームワークやプラクティスをそのまま現場に適応しようとして、うまくいかなかった経験はないでしょうか。これはフロントエンド開発に限らずアジャイル開発やインフラ設計など普遍的な問題です。',
        '本セッションでは、Vue.js と Atomic Design をフレーム通りにそのまま導入、実践をしてどう失敗したのかと、そこから得られた学びを発表します。さらに Atomic Design を発展させて、プロダクトやチーム、Vue.js に適応させた例を共有します。',
        'TL;DR',
        '- 思考を停止して Atomic Design を導入した結果の発表<br>' +
          '&nbsp;&nbsp;&nbsp;&nbsp;- ロジックの集中、コンポーネントの量産<br>' +
          '- 導入するときは現場との差分（Vue.js、チーム、プロダクトの性質 etc..）を考えて追加する<br>' +
          '- 視座をプロダクトのレベルまで高めて、設計判断をする<br>' +
          '- 改めて Vue.js と Atomic Design ベースでコンポーネント開発を実践した時に考えたこと<br>' +
          '&nbsp;&nbsp;&nbsp;&nbsp;- ドメインを持たせたコンポーネントの組み合わせ<br>' +
          '&nbsp;&nbsp;&nbsp;&nbsp;- ロジックをリポジトリパターンで組み直す'
      ],
      ogImage: 'keinuma.jpg'
    },
    // {
    //   speakerId: 'TAKASE Yuma',
    //   title: '4000万人が使うサービスを jQuery から Nuxt.js にまで置き換えていった話',
    //   time: 40,
    //   paragraphs: [],
    //   ogImage: 'default.jpg'
    // },
    {
      speakerId: 'keimakai',
      title: '次世代のデザインとフロントエンド開発の GUI 化',
      time: 40,
      paragraphs: [
        'STUDIO はコードを書かずに Web サイトを作れるデザインツールです（もちろん Vue.js 製！）。別の視点から見ると GUI でコードを生成するジェネレーターでもあります。',
        'これまで静的な Web サイトしか作れなかった STUDIO が、今年に入ってから動的なものを作れるように開発を進めています。このとき重要になってくるのが Vue.js や React など昨今のフロントエンド開発で登場する「Component」の概念の可視化（GUI 化）です。また、GUI 化によって Vue.js と React の Component の設計思想の違いが見える形で現れてきました。',
        '本セッションでは、「Component」の GUI 化を通じて見えてきた知見を中心に、実際にデモをしながら新しいデザインプロセスを提案します。'
      ],
      ogImage: 'keimakai.jpg'
    },
    {
      speakerId: 'takefumi-yoshii',
      title:
        'TypeScript CompilerAPI で挑む Vuex の型推論次世代のデザインとフロントエンド開発の GUI 化',
      time: 40,
      paragraphs: [
        'Vue.js のみならず、Nuxt.js でコア機能として存在する Vuex。Vue.js アプリケーションに TypeScript を導入するにあたり、Vuex の型定義は誰しもが悩んできた課題です。vuex-module-decorators などによるアプローチもありますが、TypeScript の機能をフル活用すれば、純粋な Vuex であっても、隅々まで TypeScript に最適化することが可能です。これは、既存の Vuex コードを TypeScript 化することはもちろん、デコレーターを利用したくないシーンで役に立つ TIPS です。本セッションでは、TypeScript CompilerAPI による codegen 手法により、型推論が不可能とされていた領域に挑戦します。'
      ],
      ogImage: 'takefumi-yoshii.jpg'
    },
    {
      speakerId: 'ninjinkun',
      title:
        'Vue CLI、GraphQL を用いた一休.com レストラン管理画面のリニューアル',
      time: 20,
      paragraphs: [
        'Vue CLI、GraphQL、Vue Router、Vuex、Bulma を用いて、一休.com レストランの管理画面リニューアルプロジェクトを高速に立ち上げ、リリースした知見を紹介します。具体的には以下のトピックについてお話しします。',
        '- なぜ Nuxt.js ではなく Vue CLI なのか <br> - Apollo Server を使いフロントエンドエンジニアがモックを書いて API 開発をリードするスタイル <br> - SPA と MPA の混成'
      ],
      ogImage: 'ninjinkun.jpg'
    },
    {
      speakerId: 'yamanoku',
      title: 'Vue.js meets Web Accessibility',
      time: 20,
      paragraphs: [
        '「Web アクセシビリティ」とは、あらゆるユーザーが共通のコストで情報にアクセスしたりサービスを利用できるようになることです。',
        'Web の進化によりこれまでできなかった表現や UI が登場したり、利用するサービス自体もリッチな体験なものに変化してきています。しかし実際は、一部のユーザーには特定のコストをかけないと見れなかったり利用ができなかったりと、世に出ているサイトやアプリがなかなかアクセシブルなものとなっていないことがあります。',
        '本セッションでは、Vue.js・Nuxt.js の開発においてどうアクセシビリティを担保するのか、UI コンポーネント開発においてどうやって取り組むのか、作ったものがどうアクセシブルであるかをチェックするか、について紹介します。',
        'そして、今こそ「アクセシビリティをやる意味」について一緒に考えましょう。'
      ],
      ogImage: 'yamanoku.jpg'
    },
    {
      speakerId: 'masaakikunsan',
      title: 'Nuxt.js + TypeScript で 01 開発',
      time: 20,
      paragraphs: [
        'TypeScript のニーズが急速に高まっていますが、実際には日本国内での知見共有や、企業における事例はまだまだ少ない状況です。Vuex で TypeScript をどう扱うかについても、未だに物議を醸しています。',
        'また、Vue.js 3.0 で Class API がドロップされる発表があり話題になりましたが、Nuxt.js 公式では Decorator が推奨されており、Nuxt.js がどう対応していくかにも注目が集まっています。',
        '本セッションでは、スピーカーがフリーランスや会社員として携わった多数の Vue.js、Nuxt.js、TypeScript 開発で得た知見を共有します。具体的には、実際に Nuxt.js と TypeScript を現場レベルで使う場合、何に気を付けるべきか、Vuex の話、Storybook でのコンポーネント開発などを紹介します。'
      ],
      ogImage: 'masaakikunsan.jpg'
    },
    // {
    //   speakerId: 'UNO Kouhei',
    //   title: '型がある楽しさとつらさ',
    //   time: 20,
    //   paragraphs: [],
    //   ogImage: 'default.jpg'
    // },
    {
      speakerId: 'blackawa',
      title: '“何もない”を作る、コンポーネント指向な余白設計',
      time: 20,
      paragraphs: [
        'Vue.js がそうであるように、限定されたスコープの CSS を使って UI コンポーネントを設計することが世の中の当たり前になってきました。それを用いて UI コンポーネントを実装する時に必ず突き当たる難題のひとつが「余白」です。本セッションでは、UI コンポーネントの開発時に検討すべき余白設計についてお話しします。',
        '余白は、目に見えないがために境界が曖昧ですから、「この UI はどんなコンポーネントに分割すべきだろうか？」という目に見える問題に比べて見落とされがちです。しかし実際に開発を行うとなると、「この余白をどのコンポーネントに実装すべきか？」、「取ることのできる選択肢は何で、それぞれにどんな影響があるのか？」と悩むことになります。',
        'そしてひとたび方針を間違えれば、手を入れるたびに複雑化していく UI コンポーネントができ上がってしまいます。にもかかわらず余白設計の問題について語られる機会はそう多くはありません。',
        '実際に開発と運用を行って得られた「何もない」を作るための余白設計の知見を共有します。'
      ],
      ogImage: 'default.jpg'
    }
    // {
    //   speakerId: 'TEJIMA Takuya',
    //   title: 'とある Nuxt.js 案件の本当にあった怖い話。',
    //   time: 20,
    //   paragraphs: [],
    //   ogImage: 'default.jpg'
    // },
  ]
})

export const getters: Getters<Sessions.State, Sessions.Getters> = {
  sessionBySpeakerId: state => speakerId => {
    const session = state.sessions.find(
      session => session.speakerId === speakerId
    )
    if (session) return session
    throw new Error('Session Not Found')
  }
}
