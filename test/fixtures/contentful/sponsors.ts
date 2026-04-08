import type Sponsor from "~/types/sponsor";

const space = {
  sys: {
    type: "Link",
    linkType: "Space",
    id: "makqrw5hfm9d",
  },
} as const;

const environment = {
  sys: {
    id: "master",
    type: "Link",
    linkType: "Environment",
  },
} as const;

function createSponsor(config: {
  id: string;
  plan: string;
  name: string;
  url: string;
  pr: string;
  bannerUrl: string;
  fileName: string;
  order: number;
}): Sponsor {
  const timestamp = new Date(Date.UTC(2019, 5, config.order + 1)).toISOString();

  return {
    sys: {
      space,
      id: config.id,
      type: "Entry",
      createdAt: timestamp,
      updatedAt: timestamp,
      environment,
      revision: 1,
      contentType: {
        sys: {
          type: "Link",
          linkType: "ContentType",
          id: "sponsor",
        },
      },
      locale: "en-US",
    },
    fields: {
      plan: config.plan,
      name: config.name,
      url: config.url,
      banner: {
        sys: {
          space,
          id: `${config.id}-banner`,
          type: "Asset",
          createdAt: timestamp,
          updatedAt: timestamp,
          environment,
          revision: 1,
          locale: "en-US",
        },
        fields: {
          title: config.name,
          file: {
            url: config.bannerUrl,
            details: {
              size: 0,
              image: {
                width: 1200,
                height: 630,
              },
            },
            fileName: config.fileName,
            contentType: config.fileName.endsWith(".png")
              ? "image/png"
              : "image/jpeg",
          },
        },
      },
      pr: config.pr,
      appliedAt: timestamp,
    },
  };
}

const sponsors: Sponsor[] = [
  createSponsor({
    id: "1pRQBhtmJojoauF9nyISzv",
    plan: "platinum",
    name: "メドピア株式会社",
    url: "https://medpeer.co.jp/",
    pr: "メドピアは現役医師が経営するヘルステックカンパニーです。国内医師の 3人に 1人が参加するコミュニティサイトで医師を支援すると共に、医師や管理栄養士のネットワークを活かして一般向けのヘルスケアサービスを展開しています。",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/1UIO64y6lLJ7hhwlxFwzwj/7dc78082936cb853692c01ab2dfcbecb/60238712-43dd7e00-98e6-11e9-93e9-4f7ac1ee97ec.png",
    fileName: "60238712-43dd7e00-98e6-11e9-93e9-4f7ac1ee97ec.png",
    order: 0,
  }),
  createSponsor({
    id: "3mygkFlUmRRH7eGtLnp154",
    plan: "platinum",
    name: "ラクスル株式会社",
    url: "https://corp.raksul.com/",
    pr: "ラクスルは、「仕組みを変えれば、世界はもっと良くなる」というビジョンのもと、「toB 向けのプラットフォーム」を展開する TECH カンパニーです。テクノロジーを用いて古い産業構造をアップデートし、中小企業の生産効率や、ユーザー体験の圧倒的向上の両立を目指しています。\n私たちのフロントエンド開発において、Vue.js は最も活用されているフレームワークです。私たちはこのコミュニティの今後の成長を応援すると共に、より一層サービスを発展させていきたいと考えています。",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/2PAHtysEjiLwdUaaJe00j8/7f98522377c87b8031c9f7d9aa26cc66/raksul.png",
    fileName: "raksul.png",
    order: 1,
  }),
  createSponsor({
    id: "69Ho19vwMFdlAxtdFmUkMW",
    plan: "platinum",
    name: "LINE 株式会社",
    url: "https://linecorp.com/ja/",
    pr: "LINE では Web から LINE アプリまで、多くの領域で Vue.js を利用しています。Vue.js / Nuxt.js のコントリビューターも在籍する組織で、存分に力を発揮したいエキスパートを募集しています。",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/3JXE1cRIxxN2aUwQBFje7h/36e4fbbec32dd72237813d2f307e2811/line.png",
    fileName: "line.png",
    order: 2,
  }),
  createSponsor({
    id: "61aAzq2IF2EPOgENTDDmak",
    plan: "gold",
    name: "STORES.jp",
    url: "https://stores.jp/",
    pr: "最短2分で、驚くほど簡単にオンラインストアがつくれるサービス STORES.jp の開発・運営をしています。現在、サービスで利用している JavaScript フレームワークを Vue.js に刷新するプロジェクトを進めており、これからも Vue.js および Vue.js コミュニティの発展に貢献していきたいと考えています。\nSTORES.jp を提供するストアーズ・ドット・ジェーピー株式会社は、2018年2月1日付で事業者向けの決済サービス Coiney を提供するコイニー社と経営統合し、持株会社として hey を設立しました。グループとして「Just for Fun」というミッションを掲げ、個人、または小さなチームが「楽しみ」によって駆動される経済発展の支援を目指しています。",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/7LYjbXixhGITWtBvTYKbtZ/d82d34ddd110d467f7a3c352adf0059a/stores.png",
    fileName: "stores.png",
    order: 3,
  }),
  createSponsor({
    id: "6Ly6O09lDoG7iN1R5SvfGT",
    plan: "gold",
    name: "株式会社プレイド",
    url: "https://plaid.co.jp/",
    pr: "プレイドでは「あらゆるサイトのユーザーをデータベース化する」ことを技術ミッションとし、KARTE（https://karte.io/）という SaaS の自社サービスを開発しています。KARTE は、Web サイトやアプリ上でのユーザー行動をリアルタイムに解析し、それぞれのエンドユーザーにとって最適な体験を提供するための「CX（顧客体験）プラットフォーム」です。Vue.js は、リリースした 2014年から使用し、今では Vue Component 数が 1,100 を超えるような規模の大きいコードベースを運用しています。私たちが実現したい世界観までは進捗率 0.2％とまだまだこれからのプロダクトです。一緒に働いてくれる仲間も募集しています！（https://meet.plaid.co.jp/）",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/3vrqbEh7RYwI1rY1GWAtTg/db7788c415b106f99e2b6e33c522563b/plaid.png",
    fileName: "plaid.png",
    order: 4,
  }),
  createSponsor({
    id: "29MGEecC3Ni43nnkB0Q4Sr",
    plan: "gold",
    name: "note（のーと）",
    url: "https://note.mu/",
    pr: "メディアプラットフォーム note は、クリエイターが文章やマンガ、写真、音声を投稿することができ、ユーザーはそのコンテンツを楽しんで応援できるウェブサービスです。",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/4fLDE6cl6p8eF0NP6rcQla/91e05005544d54fc76456025966de759/note.png",
    fileName: "note.png",
    order: 5,
  }),
  createSponsor({
    id: "5vJOeKfByay1mumVtOHWRs",
    plan: "gold",
    name: "株式会社オムニス",
    url: "https://omnisinc.co/",
    pr: "2014年設立、シェアリングサービス「SUSTINA」を提供しています。2018年にアパレル大手の株式会社ワールド傘下に入り総合ファッションテック企業として新たなサービスの開発に取り組んでいます。",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/5fvIQqwm4eetNFfMoLc8Ao/69bf8ae7a43a65663a6f00ee2d178aad/omnis.png",
    fileName: "omnis.png",
    order: 6,
  }),
  createSponsor({
    id: "6x8A37LZpBKoLoqLvGPuMV",
    plan: "gold",
    name: "Repro",
    url: "https://repro.io/",
    pr: "Repro は 6000以上の web/app に利用されるマーケティングオートメーションサービスです。月間数千億のイベントデータを処理し、AI で自動セグメントを行い、毎日数億のプッシュなどの施策を配信しています。",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/n0pSnY3MGUlumwYek1CLA/07f266b5d4afdf8e4e5caa370f780975/59571973-ce530000-90e4-11e9-9f7b-edea2c992f13.png",
    fileName: "59571973-ce530000-90e4-11e9-9f7b-edea2c992f13.png",
    order: 7,
  }),
  createSponsor({
    id: "2BFAJcgszi9M8rtd1QcUwy",
    plan: "gold",
    name: "istyle",
    url: "https://www.istyle.co.jp/",
    pr: "アイスタイルは、1999年の創業以来、生活者を第一に考える美容系サービス「@cosme」を提供してきました。 更に拡大するサービスを支え、ユーザー様により大きな価値を提供するため、アイスタイルでは Vue.js を活用しています。",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/5NAR8DvGSYFlEAVvEbVJWC/2ad27cb614f2e919253c31bbf838ec8d/istyle__________.png",
    fileName: "istyle__________.png",
    order: 8,
  }),
  createSponsor({
    id: "7JWnRUkeCeerojxOhVBd22",
    plan: "gold",
    name: "パーソルキャリア株式会社",
    url: "https://www.persol-career.co.jp/",
    pr: "パーソルキャリア株式会社は「人と組織の成長創造インフラへ」という Group Vision のもと、改めて「はたらく」ことに着目した新しいサービスを作り続けています。\n特に技術的なチャレンジを重要視しており、現在は Vue.js、Nuxt.js、Firebase を中心としたサーバレス開発を推し進めています。\nまた、サービス企画段階から Design Sprint を活用することで顧客理解に努め、ユーザーへ新たな価値を提供できるサービスをエンジニアが中心となって生みだしています。\nすべての「はたらく」人々が活躍できる社会を実現するため、ともにチャレンジし、考えてくれる仲間を絶賛募集中です！",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/6csqAjSqg0iPYywaWVWdGG/4262607f748f5a16db70eb552922fd36/_____________________________________.png",
    fileName: "_____________________________________.png",
    order: 9,
  }),
  createSponsor({
    id: "1WNndwWaSNMmiT7O5vmRr9",
    plan: "silver",
    name: "株式会社イエソド",
    url: "https://yesod.co/",
    pr: "株式会社イエソドでは、挑戦し続ける企業を支える管理部門向け SaaS「YESOD」を、Vue.js と TypeScript とサーバサイド Kotlin で開発しています。",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/3IWal8uO5ZI3bsmIY1Y4Db/95d05679a40b305c2ad0f8b6e98c3759/yesod.png",
    fileName: "yesod.png",
    order: 10,
  }),
  createSponsor({
    id: "19YkVzQ0UCAoZ55T531WV5",
    plan: "silver",
    name: "ANDPAD（株式会社オクト）",
    url: "https://andpad.jp/",
    pr: "株式会社オクトは、建築・建設産業の「働く」を「幸せ」にする、というミッションを掲げ、クラウド型建設プロジェクト管理サービス「&ANDPAD」を提供しています。「施工現場を幸せに」我々は技術で挑み続けます。",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/5E8YeDX7EXfyyLhUND62Ab/4b28e32de3cd87b20a1c99ed38896123/59482625-9cebf180-8ea4-11e9-8bee-705614441cef.png",
    fileName: "59482625-9cebf180-8ea4-11e9-8bee-705614441cef.png",
    order: 11,
  }),
  createSponsor({
    id: "6E0hO1kLhpxpbLozYfMIkg",
    plan: "silver",
    name: "フリエン",
    url: "https://furien.jp/",
    pr: "アン・コンサルティング株式会社では、IT エンジニア向けの案件紹介サイト「フリエン」を Nuxt.js でフルリニューアルしました。弊社では Nuxt.js を使ったプロダクト開発をしており、Vue.js コミュニティの今後の発展を願っております。",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/5B0QMbmi3sChQMOQ8WeGTh/d62072d411ca3d4614e83e5e3d88440c/furien__________.png",
    fileName: "furien__________.png",
    order: 12,
  }),
  createSponsor({
    id: "6CpyVG8hqTXXFuIjoTxsfU",
    plan: "silver",
    name: "株式会社サムライズム",
    url: "https://samuraism.com/",
    pr: "JetBrains 社の WebStorm や PhpStorm、コラボレーションツールの GitHub、監視サービスの Datadog などデベロッパの必須ツールのデモ、割引券やノベルティの配布をしております。ブースへお気軽にお立ち寄りください。",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/5JdUkAC4YLWN9NDsp6d094/c8394bb393aa59c440301a05151b7fc1/samuraism.png",
    fileName: "samuraism.png",
    order: 13,
  }),
  createSponsor({
    id: "6b5hEWGxxs7znV2DkIropP",
    plan: "silver",
    name: "株式会社モバイルファクトリー",
    url: "https://www.mobilefactory.jp/",
    pr: "「私たちが創造するモノを通じて世界中の人々をハッピーにすること」をミッションとし、位置ゲーム「駅メモ！」やブロックチェーン技術を活用した分散型アプリケーションの普及を目指す「Uniqys Project」を展開しています。",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/4j2GUnbqMrXlGwMhMf0Ieu/5515fa204914f6e3b418888a684f6c46/mobilefactory.png",
    fileName: "mobilefactory.png",
    order: 14,
  }),
  createSponsor({
    id: "7xB7aYh02Y1eCFnxPzFhyi",
    plan: "silver",
    name: "株式会社リブセンス",
    url: "https://www.livesense.co.jp/",
    pr: 'わたしたちは "あたりまえを、発明しよう。" というビジョンを掲げ、新しい物の見方・行動の仕方によって世の中に新しい常識として定着するサービスをつくり、幸せを増やすことに挑戦しています。',
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/uYhEOSNqkiimToBH5LNVL/6c25bf90ab1cf74f2a5430fa09c8c922/livesense.png",
    fileName: "livesense.png",
    order: 15,
  }),
  createSponsor({
    id: "6V8QnQYMhSMl6yruqQCdQB",
    plan: "silver",
    name: "株式会社 HAMWORKS",
    url: "https://ham.works",
    pr: "HAMWORKS（ハムワークス）は北海道札幌市を拠点に、全国からの制作に対応している会社です。\nデザイン制作から効率的なコーディング、Vue.js などの JavaScript のフレームワーク利用、Movable Type、WordPress、a-blog cms など各種 CMS の設計・構築、に対応し、制作の力になります (´ ºムº `)",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/6ScTcsvZAdXE42whuovTvA/7ea69fff957c5f301539beee1a4c9766/hamworks__________.png",
    fileName: "hamworks__________.png",
    order: 16,
  }),
  createSponsor({
    id: "7jCSvdsKjcgGxX8THPc5RV",
    plan: "silver",
    name: "エムスリー株式会社",
    url: "https://m3.recruitment.jp/engineer/",
    pr: "エムスリーでは、日本、及び世界最大規模の医師プラットフォームを活かし、最新技術を駆使して医療の問題解決に取り組んでいます。現場エンジニアの判断で、Vue.js などモダンな技術を積極的に導入しています。現在エンジニアを積極募集中です！",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/vN6iI4T7fAfrEY1E56yvi/710c9ef281072cbd1433847ad74f2e36/60648865-d1d3de80-9e7b-11e9-9631-70b4d29c205f.png",
    fileName: "60648865-d1d3de80-9e7b-11e9-9631-70b4d29c205f.png",
    order: 17,
  }),
  createSponsor({
    id: "64Y892gA1azneUSVllIySP",
    plan: "silver",
    name: "株式会社 ABEJA",
    url: "https://abejainc.com/ja/",
    pr: "AI の社会実装事業を展開し、小売流通、製造、物流、インフラをはじめとしたあらゆる業界において、一気通貫した AI の導入、活用支援を行う企業です。2017年3月にシンガポール法人を設立、グローバル展開も進めています。",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/6gwiVRlYEdCrLHFgo1EctN/5805d174dcf111f9abb34a28976f716f/59482896-ce18f180-8ea5-11e9-9f16-e70ab5b9b99c.png",
    fileName: "59482896-ce18f180-8ea5-11e9-9f16-e70ab5b9b99c.png",
    order: 18,
  }),
  createSponsor({
    id: "gJDB4P0tKBMGuPuJlVbMw",
    plan: "silver",
    name: "GMOペパボ株式会社",
    url: "https://pepabo.com/",
    pr: "「もっとおもしろくできる」を企業理念に、レンタルサーバー「ロリポップ！」をはじめとする様々なサービスを提供しています。「いるだけで成長できる環境」をコンセプトにエンジニアの人材育成やコミュニティ支援を積極的に行っています。",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/2EL64YVw1bq3ncbUeak6a0/397ea167a72411a4092ad13c7663988c/gmo-paperboy__________.png",
    fileName: "gmo-paperboy__________.png",
    order: 19,
  }),
  createSponsor({
    id: "1hMxuuP426JySuxipoINQx",
    plan: "silver",
    name: "株式会社ゆめみ",
    url: "https://www.yumemi.co.jp/ja",
    pr: "ゆめみは、スマートデバイスに特化したアプリケーションの企画・開発・運用実績を強みに、最新アーキテクチャを採用した大規模開発を得意としています。",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/50cUGXiAPCSYYNJXP4j5Bq/b6fe49cac08d9cd8e687f875df946af5/yumemi.png",
    fileName: "yumemi.png",
    order: 20,
  }),
  createSponsor({
    id: "2KsXsfYOVa0Fvr3gs5Yowe",
    plan: "silver",
    name: "株式会社ビズリーチ",
    url: "https://www.bizreach.co.jp/recruit/",
    pr: "「インターネットの力で、世の中の選択肢と可能性を広げていく」をミッションとし、2009年4月より、人材領域を中心としたインターネットサービスを運営する HR テック・ベンチャー。",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/7614jYCIN605Xn4iA2iKvL/baf280ad639feef31473fd2878870d0e/bizreach.png",
    fileName: "bizreach.png",
    order: 21,
  }),
  createSponsor({
    id: "6QjwcoxBy7Q8Ldm9omDDwo",
    plan: "silver",
    name: "ハンズラボ株式会社",
    url: "https://www.hands-lab.com/",
    pr: "ハンズラボは小売業特化型 IT ソリューション企業です。東急ハンズ向けシステム開発の他、小売系企業様向け Web アプリ開発も行っており、近年は Vue.js による開発事例も増えてきました。ぜひ一緒に Vue.js を盛り上げていきましょう！",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/5EMAcvUBu1MhBnlPfsWmb7/7fc2d0510f7759cc9a3324328f73b11c/60065389-b7dd2200-973e-11e9-8330-dcb6d52130e0.png",
    fileName: "60065389-b7dd2200-973e-11e9-8330-dcb6d52130e0.png",
    order: 22,
  }),
  createSponsor({
    id: "1mznwDuIu8P3tQ8t4XmuFN",
    plan: "silver",
    name: "株式会社ギフティ",
    url: "https://giftee.co.jp/",
    pr: "ギフティは東京を拠点としている eGift の会社です。『ギフトで、「人と人」「人と企業」「人とまち」をつないでいく』をミッションに eGift を提供しています。日本の eGift の多数は、Vue.js で開発された私達のサービスで提供されています。",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/2XbuMbK9DAtpkItjRlv962/b0cab2f23568741a906c6253bcfb6266/giftee.png",
    fileName: "giftee.png",
    order: 23,
  }),
  createSponsor({
    id: "3XrXW6Lg6FjPCCbzMzwRV2",
    plan: "silver",
    name: "SATORI 株式会社",
    url: "https://satori.marketing/",
    pr: "SATORI 株式会社は「あなたのマーケティング活動を一歩先へ」をミッションとして掲げ、国産 MA ツールとして認知度 No.1（2017年 3月現在）の集客に強いマーケティングオートメーション（MA）ツール「SATORI」の開発を行っています。",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/6DAmWovTnxnwdVrl37xKnp/9d9ce9bbd6965799250be53dc7dea9b5/61179519-1c551800-a63f-11e9-9330-dadb7e2129c0.png",
    fileName: "61179519-1c551800-a63f-11e9-9330-dadb7e2129c0.png",
    order: 24,
  }),
  createSponsor({
    id: "2fug7DV2UWHVUTjggT9AOF",
    plan: "bronze",
    name: "NOWIST株式会社",
    url: "https://nowist.co.jp/",
    pr: "",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/5sxZcWvwls0U6u4hein1RQ/a498a4e3af6edcde49ad326a24e46d8f/60243896-329b6e00-98f4-11e9-9503-75e8fe89a3b0.png",
    fileName: "60243896-329b6e00-98f4-11e9-9503-75e8fe89a3b0.png",
    order: 25,
  }),
  createSponsor({
    id: "1G8GbdS7ZXY2xAWWSjLoLH",
    plan: "bronze",
    name: "株式会社エイプリルナイツ",
    url: "http://april-knights.com/",
    pr: "",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/5A9JZ6eszeeFvRxkDzPMkH/3c8953d1952d409ca460bfebe642eb85/april-knights__________.png",
    fileName: "april-knights__________.png",
    order: 26,
  }),
  createSponsor({
    id: "2uXjtOCtv3gdrhximrliNz",
    plan: "bronze",
    name: "株式会社ライデン",
    url: "https://www.ryden.co.jp/",
    pr: "",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/1r2XDhQZ9q2pT2KPZONDRT/6f11c9c834a4b1d7b912daa5bfe14b4b/ryden__________.png",
    fileName: "ryden__________.png",
    order: 27,
  }),
  createSponsor({
    id: "41sWg1rxi8xgM4O82hw7oV",
    plan: "bronze",
    name: "株式会社ラクス",
    url: "https://www.rakus.co.jp/",
    pr: "",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/agZAouWh6zSFPmf2JwFaO/de909475d2843670dfc71680af43af99/rakus.png",
    fileName: "rakus.png",
    order: 28,
  }),
  createSponsor({
    id: "3c1JVkaQSWLCktcOIpb4kg",
    plan: "bronze",
    name: "パーティーハード株式会社",
    url: "https://www.ptyhard.co.jp/",
    pr: "",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/3oDrOlx7baWko4ZZJvbbie/4d8456342742ae02d8f409bfe91e2964/ptyhard.png",
    fileName: "ptyhard.png",
    order: 29,
  }),
  createSponsor({
    id: "3qMASBpErxeyKMnNP5grY0",
    plan: "bronze",
    name: "グレープシティ株式会社",
    url: "https://www.grapecity.co.jp/developer",
    pr: "",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/6ViPngY48FnSY1lnmjoLiu/d453a561bcc4201e9ec8837bbeafd2eb/grapecity.png",
    fileName: "grapecity.png",
    order: 30,
  }),
  createSponsor({
    id: "FwlNpDO6OtoWy2Ck0kNZO",
    plan: "bronze",
    name: "株式会社ディー・エヌ・エー",
    url: "https://dena.com/",
    pr: "",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/2OT4B4j9tYLhhtzuYlA6iZ/46c5361b60737f063d5dc4f41234bc12/dena.png",
    fileName: "dena.png",
    order: 31,
  }),
  createSponsor({
    id: "3EfFZ9FECSXPwaDRr1Nv0n",
    plan: "bronze",
    name: "レアジョブ英会話",
    url: "https://www.rarejob.com/",
    pr: "",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/Km8tvAbeR2FNzCzbml7a2/ca6c0428c20840e3b3603f34412b1a6b/rarejob.png",
    fileName: "rarejob.png",
    order: 32,
  }),
  createSponsor({
    id: "64w5DnwuFr1BpxarOL7rt4",
    plan: "bronze",
    name: "Graspy（株式会社ITプロパートナーズ）",
    url: "https://graspy.jp/",
    pr: "",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/1SCeC5vqz26ogj3QN8eZC2/75a3fea5c899e4a262fcc7022dd1ae5d/Graspy__________.png",
    fileName: "Graspy__________.png",
    order: 33,
  }),
  createSponsor({
    id: "4BWRqVcv1fbY0xJT8CHq87",
    plan: "bronze",
    name: "esa.io",
    url: "https://esa.io",
    pr: "",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/6tueldrWjpWRuzuet2XeIz/83bf907b589ac4803c5a04c1e8a2582e/esa__________.png",
    fileName: "esa__________.png",
    order: 34,
  }),
  createSponsor({
    id: "4rFKLXEqdpRmlKonk4WytS",
    plan: "special",
    name: "アシアル株式会社",
    url: "https://asial.co.jp/",
    pr: "アシアルでは UX を主導として最先端の Web テクノロジーを組み合わせ、フルスタックなエンジニア陣がバックエンドからフロントエンドまでの開発をパワフルに推進します。",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/17Q8G5h9DFRWmYRXgteXTD/d1111fea2e46c3ce1344100c6b0133fe/Asial__________.png",
    fileName: "Asial__________.png",
    order: 35,
  }),
  createSponsor({
    id: "5wcy6orQUllgpnIcq3ObtI",
    plan: "room",
    name: "株式会社イエソド",
    url: "https://yesod.co/",
    pr: "株式会社イエソドでは、挑戦し続ける企業を支える管理部門向け SaaS「YESOD」を、Vue.js と TypeScript とサーバサイド Kotlin で開発しています。",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/3IWal8uO5ZI3bsmIY1Y4Db/95d05679a40b305c2ad0f8b6e98c3759/yesod.png",
    fileName: "yesod.png",
    order: 36,
  }),
  createSponsor({
    id: "60GHIrcUnHwLWeBjlRu5Nd",
    plan: "room",
    name: "株式会社プレイド",
    url: "https://plaid.co.jp/",
    pr: "プレイドでは「あらゆるサイトのユーザーをデータベース化する」ことを技術ミッションとし、KARTE（https://karte.io/）という SaaS の自社サービスを開発しています。KARTE は、Web サイトやアプリ上でのユーザー行動をリアルタイムに解析し、それぞれのエンドユーザーにとって最適な体験を提供するための「CX（顧客体験）プラットフォーム」です。Vue.js は、リリースした 2014年から使用し、今では Vue Component 数が 1,100 を超えるような規模の大きいコードベースを運用しています。私たちが実現したい世界観までは進捗率 0.2％とまだまだこれからのプロダクトです。一緒に働いてくれる仲間も募集しています！（https://meet.plaid.co.jp/）",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/3vrqbEh7RYwI1rY1GWAtTg/db7788c415b106f99e2b6e33c522563b/plaid.png",
    fileName: "plaid.png",
    order: 37,
  }),
  createSponsor({
    id: "5a5TsYvAAugDhphLOyrAIO",
    plan: "room",
    name: "株式会社ゆめみ",
    url: "https://www.yumemi.co.jp/ja",
    pr: "ゆめみは、スマートデバイスに特化したアプリケーションの企画・開発・運用実績を強みに、最新アーキテクチャを採用した大規模開発を得意としています。",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/50cUGXiAPCSYYNJXP4j5Bq/b6fe49cac08d9cd8e687f875df946af5/yumemi.png",
    fileName: "yumemi.png",
    order: 38,
  }),
  createSponsor({
    id: "7jgKtanoFHFpnCHXMGbdIo",
    plan: "commercial",
    name: "Repro",
    url: "https://repro.io/",
    pr: "Repro は 6000以上の web/app に利用されるマーケティングオートメーションサービスです。 月間数千億のイベントデータを処理し、AI で自動セグメントを行い、毎日数億のプッシュなどの施策を配信しています。",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/n0pSnY3MGUlumwYek1CLA/07f266b5d4afdf8e4e5caa370f780975/59571973-ce530000-90e4-11e9-9f7b-edea2c992f13.png",
    fileName: "59571973-ce530000-90e4-11e9-9f7b-edea2c992f13.png",
    order: 39,
  }),
  createSponsor({
    id: "3MYQxRDkqSCA0nJkTCuzKm",
    plan: "lunch",
    name: "株式会社ジェイキャスト トイダス",
    url: "https://toidas.net/",
    pr: "ニュースサイトを主に運営しているジェイキャストは、日本最大級のクイズ投稿型プラットフォーム「トイダス」を Vue.js、Nuxt.js で構築しています。",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/66g6TJPlItAiuHdBPnWE93/1594ca820aad45e1e2386d34d18eb46c/toidas__________.png",
    fileName: "toidas__________.png",
    order: 40,
  }),
  createSponsor({
    id: "t7KXRacCNV1yWQBONCVrW",
    plan: "lunch",
    name: "ANDPAD（株式会社オクト）",
    url: "https://andpad.jp/",
    pr: "株式会社オクトは、建築・建設産業の「働く」を「幸せ」にする、というミッションを掲げ、クラウド型建設プロジェクト管理サービス「&ANDPAD」を提供しています。「施工現場を幸せに」我々は技術で挑み続けます。",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/5E8YeDX7EXfyyLhUND62Ab/4b28e32de3cd87b20a1c99ed38896123/59482625-9cebf180-8ea4-11e9-8bee-705614441cef.png",
    fileName: "59482625-9cebf180-8ea4-11e9-8bee-705614441cef.png",
    order: 41,
  }),
  createSponsor({
    id: "1r5GsfbVIrk3eupYEnO9Lw",
    plan: "lunch",
    name: "フューチャー株式会社",
    url: "https://www.future.co.jp/",
    pr: "経営と IT をデザインする、フューチャー株式会社です。「お客様の未来価値を最大化させること」をミッションに掲げ、IT を武器とした課題解決型のコンサルティングサービスを提供します。",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/ShWjnkgsdkL4cAeXSCYvM/bcdae07a2d5d9cb24a18c6d35d097034/future.png",
    fileName: "future.png",
    order: 42,
  }),
  createSponsor({
    id: "35rFPIc8PSudqLffCxmiPI",
    plan: "lunch",
    name: "Retty",
    url: "https://corp.retty.me/",
    pr: "「Retty」は現在 4,000万 UU の規模まで拡大しました。現在は国内・海外でサービスを展開しています。近年ではフロントエンド開発でのグロースを盛んに行い、ユニーバーサル JS 化も進めています。",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/2vAgLjpCNLmNz7MTQjqjMM/bda08bca61a9fb295c80559ec9ac6a02/retty.png",
    fileName: "retty.png",
    order: 43,
  }),
  createSponsor({
    id: "70mnl0FDZGB9eFofWT3hsa",
    plan: "lunch",
    name: "株式会社 ROXX",
    url: "https://roxx.co.jp/",
    pr: "7/1 より SCOUTER から ROXX に社名が変更されました。Vue.js、Nuxt.js を 3年以上使用しており、NuxtMeetup や LaraVue 勉強会を主催しています。WEB+DB PRESS や技術ブログへの連載等外部発信を積極的に行っている会社です。",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/7nE1JZltELCltbAUix69hc/bde9fc8ff4ec738ad8c5df5437279324/61179481-422ded00-a63e-11e9-8830-d01e9c365d80.png",
    fileName: "61179481-422ded00-a63e-11e9-8830-d01e9c365d80.png",
    order: 44,
  }),
  createSponsor({
    id: "2NDcTP1emnU8KqXqlCk4VS",
    plan: "lunch",
    name: "富士フイルムソフトウエア株式会社",
    url: "http://ffs.fujifilm.co.jp/",
    pr: "我々は富士フイルムの製品、サービス開発を先進の IT 技術で支える会社です。\n\n2000年以降の写真フィルム需要の落ち込みを機に、メディカル IT・機器、医薬・再生医療、化粧品などの分野を拡大、AI、IoT 等の先進の IT 技術で魅力的な製品を世に送り出す努力を続けています。\n\nIT の進化が益々早まり、市場の要求も変化が激しく、従来の開発スタイルやフロントエンド技術では、その要求の変化に追い付くことが難しくなってきました。\n\nそんな中、近年コミュニティーを中心に盛り上がりを見せる Vue.js は、学習コストが低く、DevOps とも相性も抜群で、フロントエンド開発のスピード向上に力を発揮しています。\n\n今後、この技術とコミュニティーの発展に微力ながら貢献して参りたいと考えております。",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/1dJ3yjvjlO8B9t4tsEmn9j/16928de50ebb86e3a8e3237b75debf8f/fujifilm_basic.png",
    fileName: "fujifilm_basic.png",
    order: 45,
  }),
  createSponsor({
    id: "ldOysXX7tv1sHhAliAPGi",
    plan: "refreshment",
    name: "株式会社ギフティ",
    url: "https://giftee.co.jp/",
    pr: "ギフティは東京を拠点としている eGift の会社です。『ギフトで、「人と人」「人と企業」「人とまち」をつないでいく』をミッションに eGift を提供しています。日本の eGift の多数は、Vue.js で開発された私達のサービスで提供されています。",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/2XbuMbK9DAtpkItjRlv962/b0cab2f23568741a906c6253bcfb6266/giftee.png",
    fileName: "giftee.png",
    order: 46,
  }),
  createSponsor({
    id: "4gEk68ArKOUvDwOtiR75vz",
    plan: "refreshment",
    name: "株式会社 GameWith",
    url: "https://gamewith.co.jp/",
    pr: "株式会社 GameWith は「ゲームをより楽しめる世界を創る」をミッションに、ゲームを有利に進めるための情報を提供する「ゲーム攻略」、ゲームを見つけるための情報を提供する「ゲームレビュー」、専属のゲームタレントが YouTube 上で行う「動画配信」という主な 3つのコンテンツを提供しています。今後は日本のみならず海外展開やブロックチェーン、eスポーツなどの幅広いゲーム関連事業も展開していきます。",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/4U4FNpdzUOi2JuvLD5hgx/f0d2a4a187ef8f905c20d49b0cf85267/gamewith.png",
    fileName: "gamewith.png",
    order: 47,
  }),
  createSponsor({
    id: "rCStMEamufakbRjkSMK62",
    plan: "refreshment",
    name: "株式会社クラウドワークス",
    url: "https://crowdworks.co.jp/",
    pr: "クラウドワークスは、世界中の人と仕事を結ぶマッチングサービスを提供しています。2015年から Vue.js を採用し開発を進めており、今ではフロントエンド開発の中心として Vue.js を利用しています。",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/7g4sxcqEkX3k2ZhOIQzm56/05f666da92f29f775e82320da380df99/62509183-2d133b00-b845-11e9-900b-8e324a0c67ab.png",
    fileName: "62509183-2d133b00-b845-11e9-900b-8e324a0c67ab.png",
    order: 48,
  }),
  createSponsor({
    id: "3Hfb0NqsllucufX0bgRzpP",
    plan: "video",
    name: "crash.academy",
    url: "https://crash.academy/",
    pr: "さまざまな場所で IT エンジニアによる勉強会や meetup などのイベントが行われていますが、すべてのイベントに参加できるわけではありません。crash.academy なら、いつでも気軽に勉強会や meetup を視聴することができます。",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/7dMnGYGJtl9a1hasDr4Xrv/843524c885146d55255905767f98c2ed/crash_academy__________.png",
    fileName: "crash_academy__________.png",
    order: 49,
  }),
  createSponsor({
    id: "4a1vBRmFR7VFU0utnBCyqO",
    plan: "media",
    name: "株式会社技術評論社",
    url: "https://gihyo.jp/",
    pr: "技術評論社は創立50周年の IT・工学書出版社です。ビギナーからプロフェッショナルまで満足できる、価値あるコンテンツをお届けします。",
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/2c4p45g62qSmbHSqWYGSKp/f92f58c9f8318008c6a68bb4b571c7ab/gihyo.png",
    fileName: "gihyo.png",
    order: 50,
  }),
  createSponsor({
    id: "Tj7kYCraUinGGjHHxsuER",
    plan: "media",
    name: "Think IT",
    url: "https://thinkit.co.jp/",
    pr: '"オープンソース技術の実践活用メディア" をスローガンに、インプレスグループが運営するエンジニアのための技術解説サイト。開発の現場で役立つノウハウ記事を毎日公開しています。',
    bannerUrl:
      "//images.ctfassets.net/makqrw5hfm9d/1CqwjjRiBOQPe8vW36ibCO/2807de168edc95401d0fbb4a875b75f3/thinkit.png",
    fileName: "thinkit.png",
    order: 51,
  }),
];

export default sponsors;
