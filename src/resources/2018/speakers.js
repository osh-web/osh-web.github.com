// @flow
type Speaker = {
  furi: string,
  name: string,
  key: string,
  twitter?: string,
  github?: string,
  blog?: string,
  company: {
    name: string,
    uri: string,
  },
  title: string[],
  session?: {
    name: string,
    description: string,
  }
}

export const ryuzee: Speaker = {
  furi: 'よしば りゅうたろう',
  name: '吉羽 龍太郎',
  twitter: 'ryuzee',
  key: 'ryuzee',
  blog: 'http://www.ryuzee.com/',
  title: [
    '株式会社アトラクタ 取締役最高技術責任者',
    'アジャイルコーチ',
  ],
  company: {
    name: '株式会社アトラクタ',
    uri: 'https://www.attractor.co.jp/about/',
  },
  session: {
    name: 'Effective Team Building',
    description: 'ソフトウェア開発のコンサルティングを多数行ってきた経験上、プロジェクトやプロダクトを成功させるためには、よい要求とよいチームが必要です。 ダメな要求をよいチームに渡してもダメなものしかできません。よい要求をよくないチームに渡しても結果は芳しくありません。 本セッションでは、よいチームをどのようにして作っていくべきか、その方法を説明します。',
  },
}

export const shoyoshi: Speaker = {
  furi: 'よしはら　しょうざぶろう',
  name: '吉原 庄三郎',
  key: 'shoyoshi',
  title: [
    '株式会社ウフル　デリバリーイノベーション本部 本部長',
  ],
  company: {
    name: '株式会社ウフル',
    uri: 'http://uhuru.co.jp/about/',
  },
  session: {
    name: '組織再生とアジャイル',
    description: 'アジャイルの考え方は企業の組織再生にも応用できます。組織を再生するには仕事のやり方（プロセス）を変更するだけでなく、そもそものマインドセットを変える必要がある。アジャイルの考え方を組織再生に適用した事例をご紹介します。',
  },
}

export const ma2shita: Speaker = {
  furi: 'まつした こうへい',
  name: '松下 享平',
  key: 'ma2shita',
  title: [
    '株式会社ソラコム　テクノロジー・エバンジェリスト　事業開発マネージャー',
  ],
  company: {
    name: '株式会社ソラコム',
    uri: 'https://soracom.jp/share/company/',
  },
  session: {
    name: '疎結合で非同期なソラコムの開発スタイル',
    description: 'ます。お客様からのフィードバック元に新サービスや新機能の開発を行うソラコムの開発スタイルや、非同期組織の作り方、リーダーシップステートメントや組織の特徴についてご紹介します。',
  },
}

export const seratch: Speaker = {
  furi: 'せら かずひろ',
  name: '瀬良 和弘',
  key: 'seratch',
  twitter: 'seratch_ja',
  github: 'seratch',
  title: [
    'スマートニュース株式会社 ヴァイス・プレジデント エンジニアリング担当',
  ],
  company: {
    name: 'スマートニュース株式会社',
    uri: 'http://about.smartnews.com/ja/about/',
  },
}

export const tatsuo310: Speaker = {
  furi: 'さとう たつお',
  name: '佐藤 達男',
  key: 'tatsuo310',
  title: [
    '広島修道大学　経済科学部准教授',
  ],
  company: {
    name: '広島修道大学',
    uri: 'http://www.shudo-u.ac.jp/',
  },
  session: {
    name: 'マネジメントの歴史からみるチームビルディングの未来',
    description: '多くのエンジニアにとってチームとの関係性は重要なテーマだと思います。マネジメントのスタイルが変われば、チームのスタイルも変わります。本セッションではマネジメントの歴史を振り返りながら、これからのチームビルディングについて考えてます。',
  },
}

export const mkiskt: Speaker = {
  furi: 'むかい さきと',
  name: '向井 咲人',
  key: 'mkiskt',
  twitter: 'mki_skt',
  company: {
    name: 'ヤフー株式会社',
    uri: 'http://docs.yahoo.co.jp/info/company/',
  },
  title: [
    'ヤフー株式会社　フロントエンジニア',
  ],
  session: {
    name: '広島と東京を経験したエンジニアから伝えたいこと',
    description: '広島のベンチャー企業で過ごした経験と、現在東京で経験している大企業の経験を元に実際に現場で働いているエンジニアから現場の声をお伝えします。',
  },
}

export default [
  ryuzee,
  shoyoshi,
  ma2shita,
  seratch,
  tatsuo310,
  mkiskt,
]
