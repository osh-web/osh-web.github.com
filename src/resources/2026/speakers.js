// @flow strict
type Speaker = {
  furi: string,
  name: string,
  description: string,
  key: string,
  twitter?: string,
  github?: string,
  blog?: string,
  memberships: {
    name: string,
    uri: string,
  }[],
  title?: string[],
  session?: {
    name: string,
    description: string,
  },
}

export const tomooka: Speaker = {
  furi: '',
  name: '友岡 賢二',
  key: 'tomooka',
  title: [],
  description:
    'フジテック株式会社 専務執行役員 デジタルイノベーション本部長。\n' +
    'パナソニックの情報部門で長らく働き、ファーストリテイリングを経て2014年から現職。\n' +
    '呉で生まれ、広島カープをこよなく愛する生粋の鯉党。',
  memberships: [],
  session: {
    name: '準備中',
    description: '',
  },
  twitter: '',
}

export const marumoto: Speaker = {
  furi: '',
  name: '丸本 健二郎',
  key: 'marumoto',
  title: [],
  description:
    'Optarc合同会社 CEO、AWS Data Hero、JAWS FESTA 2024 Hiroshima 実行委員長\n' +
    '監訳『クラウドデータレイク』（オライリー）\n' +
    '小売企業向けに、自動発注 SaaS「Optarc-REAL」を提供。\n' +
    'AWS を活用したデータ基盤構築（Iceberg / Athena / Redshift）、需要予測、価格最適化ロジックの設計を専門とし、データを活かした"現場運用に強い仕組みづくり"を得意としている。\n' +
    '趣味は F1、ゴルフ、スキー。',
  memberships: [],
  session: {
    name: '広島から全国へ。地方発 自動発注システムのチャレンジ',
    description:
      '東広島の小さなシステム会社が、自動発注システム「Optarc-REAL」をゼロから開発し、現在までに7社へ導入してきました。\n' +
      '大企業の情シス経験からスタートし、10名規模のチームで自動発注・需要予測・価格最適化を実現する仕組みを作り上げるまでには、地方ならではの制約、組織課題、そして技術的チャレンジが数多くありました。\n' +
      '本セッションでは、\n' +
      '- 巨大小売の現場ITで学んだ "新しいテクノロジーを採用するメリット"\n' +
      '- 地方企業でも全国と戦えるプロダクトづくりの心得\n' +
      '- 地方エンジニアや情シスが強くなるためのキャリア観・技術観\n' +
      'を、実体験に基づいてお話しします。',
  },
  twitter: '',
}

export const tachibana: Speaker = {
  furi: '',
  name: '立花 拓也',
  key: 'tachibana',
  title: [],
  description:
    '東北大学経済学部卒。大学在学中から仙台市にある ISP・サーバーホスティング会社のインフラエンジニアとして活躍。\n' +
    '東日本大震災を機に地元である青森県三沢市に戻り、ヘプタゴンを創業。\n' +
    '現在は東北地方の中小企業や自治体などに対し、クラウドを活用したサービス開発支援やコンサルティングサービスを提供している。\n' +
    '加えて、AWS 普及黎明期に国内のユーザーコミュニティを牽引。\n' +
    '国内外のコミュニティとの関わりも深く、地方に根ざしたクラウドの活用を広げる活動にも積極的に取り組んでいる。\n' +
    'AWS Ambassador / AWS Community HERO',
  memberships: [],
  session: {
    name: '地方におけるユーザー企業とベンダーの上手な付き合い方',
    description: '地方での事例をもとにユーザー企業とベンダーが互いに価値を最大化しながら協働するための具体的なアプローチを紹介します',
  },
  twitter: '',
}

export const sugitani: Speaker = {
  furi: '',
  name: '杉谷 智宏',
  key: 'sugitani',
  title: [],
  description:
    '株式会社エネコム　ITインテグレーション部\n' +
    '他力本願堂本舗　代表　たりき\n' +
    '過去にはハッカージャパンにて10年にわたる長期連載を持っていた。\n' +
    'MicrosoftMVP Consumer Security部門受賞歴あり。著作・共著あり。',
  memberships: [],
  session: {
    name: 'ローカルLLMとDifyで作るセキュアな閉鎖系AI利用基盤（仮）',
    description:
      '弊社内で構築した閉鎖系NWで利用する生成AI利用基盤をもとに，ローカルLLMを導入して，よりセキュアな環境とすることで，経営情報や人事情報，個人情報を含む本番データ，社内文書等を安全に扱える生成AI利用環境を構築する',
  },
  twitter: '',
}

export const hiroyukimaeda: Speaker = {
  furi: '',
  name: '前田 浩幸',
  key: 'hiroyukimaeda',
  title: [],
  description:
    '東京都多摩市出身。\n' +
    '大学院修了後、広島県福山市の「猪原［食べる］総合歯科医療クリニック」に入職し、医療情報・広報業務を担当。\n' +
    '現在は歯科医院のIT部門を担い、\n' +
    '・NoCodeツール「kintone」を活用したシステム開発\n' +
    '・情報システム業務全般\n' +
    '・組織拡大（20名→50名）に伴う仕組みづくり\n' +
    'に取り組んでいる。\n' +
    '医療とITをつなぐ橋渡し役として、現場が使いやすい仕組みを考えるのが得意。\n' +
    '論理的に考える一方で、相手の気持ちやタイミングを大切にしたコミュニケーションを心がけている。',
  memberships: [],
  session: {
    name: 'IT人材が参謀的に働ける可能性について',
    description:
      'ITを専門とする立場から、システムの実装や運用にとどまらず、事業や現場の判断にどのように関われるのかをお話しします。\n' +
      '参謀的に働くとは具体的にどんな関わり方なのか、実際の経験をもとに、うまくいった点や難しさを交えながら、IT人材が担える可能性について共有します。',
  },
  twitter: '',
}

export const nakagawara: Speaker = {
  furi: '',
  name: '中河原 芳真',
  key: 'nakagawara',
  title: [],
  description:
    '広島県東広島市出身。\n' +
    '現在は中小企業の総務部に所属。\n' +
    '業務内容は総務はもちろん、情シス的な仕事やDX推進もやってる何でも屋さん。',
  memberships: [],
  session: {
    name: '準備中',
    description: '',
  },
  twitter: '',
}

export const masaki_m: Speaker = {
  furi: '',
  name: '森 将記',
  key: 'masaki_m',
  title: [],
  description:
    '広島県竹原市出身。\n' +
    '新卒で独立系SIerに就職し、主にクレジットカード会社の様々な業務のプロジェクトや保守を担当。\n' +
    '2014年に広島銀行に転職。\n' +
    '入行後は勘定系、ATM、営業店システム、全銀など基幹系システム関連のシステムを担当。\n' +
    '2020年に係替えでクラウド担当になり、それ以降、AWSにどっぷりはまり、コミュニティ活動にもはまってしまった。\n' +
    '好きなものはAWSとコリラックマ。',
  memberships: [],
  session: {
    name: '準備中',
    description: '',
  },
  twitter: '',
}

export const arima: Speaker = {
  furi: '',
  name: '有馬 和彦',
  key: 'arima',
  title: [],
  description:
    '株式会社アスカネット　経営企画部\n' +
    '広島市出身。東京のSIerでERP開発に従事した後、地元広島へUターン。2008年より現職。\n' +
    'インフラエンジニアとしてキャリアを積み、社内システムのクラウド移行や情報セキュリティ体制の構築、ISMS認証取得などを主導してきました。\n' +
    '現在は経営企画として、技術的知見を活かした組織運営にも携わっています。\n' +
    '趣味はランニング。',
  memberships: [],
  session: {
    name: '準備中',
    description: '',
  },
  twitter: '',
}

export const yoshida: Speaker = {
  furi: '',
  name: '吉田 豪',
  key: 'yoshida',
  title: [],
  description:
    'Microsoft 365 / Power Platform を中心に、企業や組織のDXを支援。\n' +
    '研修・伴走支援を通じて、DXを「能力開発・能力発揮の場」として設計しています。\n' +
    '現場のユニークな人材との出会いが一番面白い！\n' +
    'そんな人たちと、価値ある仕事をしたいと考えています。',
  memberships: [],
  session: {
    name: '準備中',
    description: '',
  },
  twitter: '',
}

export const sato: Speaker = {
  furi: '',
  name: '佐藤 晃司',
  key: 'sato',
  title: [],
  description:
    '新卒で電力系IT子会社に入社し、システムの開発・運用に従事した。\n' +
    'その後、OSSの活用、入退管理、ID管理、セキュリティ分野における相関分析など、IT基盤およびセキュリティ領域を中心に取り組んできた。\n' +
    '東広島にある「ひろしまデジタルイノベーションセンター」には出向という形で参画し、準備室の段階から立ち上げに関わった。\n' +
    'モデルベース開発研修やスーパーコンピュータ・CAEの活用を推進すると同時に、産学官連携の構築や「CIOの会」の設立など、地域DXを支える取り組みを行った。\n' +
    '現職では、広島県SANDBOX実証事業「海の共創基盤～せとうちマリンプロムナード～」の支援や、「バーチャルワールド広島」を主体的に実施した。\n' +
    '実証事業終了後は、広島東洋カープのファンクラブ会員向けサービス「メタカープ」として3年間運営し、毎試合3,000人以上が参加するメタバース空間を創出した。\n' +
    'また、広島ドラゴンフライズと連携した5G×MECを活用した遠隔バスケットボール教室、中外テクノスと連携したCAE解析による平和記念公園の3Dマップ構築、スポーツ庁主催のスポーツ・オープン・イノベーション・プラットフォーム（SOIP）におけるメンターなど、デジタル技術とスポーツ、平和を掛け合わせた取り組みを重点的に進めてきた。\n' +
    'さらに「テレビ局」らしい取り組みとして、広島県の「おいしい！広島」PR支援業務や、広島市と連携した「HIROSHIMA URBAN SPORTS FESTIVAL」をプロデューサー兼ディレクターとして実施してきた。\n' +
    '直近では、呉市の大和ミュージアム指定管理業務において、代表企業として公募の責任者を務め、事業提案の取りまとめから体制構築、関係者調整までを含むプロジェクトマネジメントを担当した。\n' +
    '現在はリニューアル改修後のオープンに向けた準備室の統括責任者を務め、2026年4月からの本格始動に向けて準備を進めている。\n' +
    '本日は、この大和ミュージアムで新たに取り組む「サイバーセキュリティ人材育成」について紹介する。',
  memberships: [],
  session: {
    name: '準備中',
    description: '',
  },
  twitter: '',
}

export const speakers = [
  tomooka,
  marumoto,
  tachibana,
  sugitani,
  hiroyukimaeda,
  nakagawara,
  masaki_m,
  arima,
  yoshida,
  sato,
]
