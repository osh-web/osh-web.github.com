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

export const cero_t: Speaker = {
  furi: 'たにもと しん',
  name: '谷本 心',
  key: 'cero_t',
  title: ['Acroquest Technology株式会社 ', '日本Javaユーザーグループ'],
  description:
    'Acroquest Technology株式会社にて、アーキテクトやコンサルタントの仕事に従事。コミュニティ活動として、日本Javaユーザーグループの幹事や、関西Javaエンジニアの会の立ち上げを務めるほか、JavaOneやSpringOneなど国内外で多数登壇し、2018年にJavaチャンピオンとして任命される。著書に「Java本格入門」、監訳書に「Javaパフォーマンス」好きなアーティストはBABYMETALデス！',
  memberships: [
    {
      name: 'Acroquest Technology株式会社',
      uri: 'https://www.acroquest.co.jp/',
    },
    {
      name: '日本Javaユーザーグループ',
      uri: 'http://www.java-users.jp/',
    },
  ],
}

export const piacere: Speaker = {
  furi: 'もり まさかず',
  name: '森 正和',
  key: 'piacere',
  title: [
    'カラビナテクノロジー株式会社 CTO 常務取締役',
    'Elixirコミュニティ「fukuoka.ex」代表',
    '技術顧問（福岡企業3社）／IT企業経営（東京2社）',
    'enPiT Pro（社会人向け実践型人材育成）パーソナリティ、教材制作',
    'AIジョブカレ福岡代表、講師',
    'Elixirプログラマ／重力プログラマ／AI・MLデータサイエンティスト',
  ],
  description: ` 小4でプログラミングを始め、小6でZ80アセンブラ習得、大学でVM・マークロカーネルOS・コンパイラを開発。
大手SIerでのリードプログラマ・PL、OSSベンチャー企業でのPM・事業部長を経験した後、独立。
マーケティングプロダクト販売と、自動トレーディングシステム運用を行いつつ、国内最大手SIerの超大規模通信インフラ開発案件のPMO・性能統括を経て、2016年10月に福岡へ移住。
福岡では、200社を超える大規模マーケティングSaaSを事業展開し、先端ITを駆使した地元企業向けの自社サービス展開中。
先端ITは、主に、Elixirでの分散Webサービス、データサイエンス、AI・ML、IoT、量子コンピュータを専門領域とする。
5つの技術コミュニティ（fukuoka.ex、福岡 理学部、IAI Fukuoka、福岡「通常の3倍」、OpenQL）も主催する。
AI学校「AIジョブカレ」福岡代表、文科省社会人向け教育PJ「enPiT」のパーソナリティと教材制作も務める。
最近は、複数の市を跨ぐ技術アドバイザーや、地方創生事業を手掛ける。
得意技は、未来予測に基づくマーケティングと事業戦略立案、性能設計・改善、それと、ライブコーディング。
  `,
  memberships: [
    {
      name: 'カラビナテクノロジー株式会社',
      uri: 'https://www.karabiner.tech/',
    },
    {
      name: 'Elixirコミュニティ「fukuoka.ex」',
      uri: 'https://fukuokaex.fun/',
    },
  ],
}

export const mao_instantlife: Speaker = {
  furi: 'あべ しんすけ',
  name: '阿部 信介',
  key: 'mao_instantlife',
  title: ['クラスメソッド株式会社 サーバーレス開発部マネージャ'],
  description: `パチンコ店向けWin32ネイティブアプリの開発、教育系企業のシステム子会社での社内システム開発、ショッピングセンター向けソリューションの開発チームマネージャなどを経て現在。現職ではエンジニアリングマネージャとして、
  分散受託チームのマネジメントをフルリモートでチャレンジ中。
  前々職より岡山を中心にコミュニティに参加し始め、現在はOkayama Managers Meetingの主催や合同勉強会での発表を中心に活動している。`,
  memberships: [
    {
      name: 'クラスメソッド株式会社 ',
      uri: 'https://classmethod.jp/',
    },
  ],
}

export const tatsuo310: Speaker = {
  furi: 'さとう たつお',
  name: '佐藤 達男',
  key: 'tatsuo310',
  title: ['広島修道大学 経済科学部教授', 'キャリアセンター長'],
  description:
    'SI企業で数多くのシステム開発にプロジェクトマネジャーとして参画し、人事課長、技術部長、PM部長などを経た後、大学にフィールドを移して現在に至る。技術経営、UX/HCD、アジャイル、プロジェクトマネジメントなどを領域横断的にカバーし、新たな価値創造型のマネジメントをテーマに研究活動を展開している。著書に「プロジェクトマネージャ育成法」（日科技連出版社）ほか。Ph.D.,PMP, PMS,CSPO, CSM',
  memberships: [
    {
      name: '広島修道大学',
      uri: 'http://www.shudo-u.ac.jp/',
    },
  ],
}

export const tatsuyatakemura: Speaker = {
  furi: 'たけむら たつや',
  name: '武村 達也',
  key: 'tatsuyatakemura',
  title: ['広島県商工労働局 イノベーション推進チーム'],
  description:
    '某銀行から広島県に出向中。ハッカソン、NT広島などIT系のイベントの企画・運営および広島県のAI/IoT事業「ひろしまサンドボックス」の人材育成事業において中小企業のIoT人材育成に携わる。7年前、41歳のときに独学でiPhoneアプリを制作、現在まで12作品をリリース。うち１作品が面白法人カヤック主催クソゲー供養会で大賞を受賞。1年前、電子工作を独学で始めMakefFaire東京、台北などに出展。',
  memberships: [
    {
      name: '広島県商工労働局',
      uri: 'https://www.pref.hiroshima.lg.jp/soshiki/8.html',
    },
  ],
}

export const speakers = [
  cero_t,
  piacere,
  mao_instantlife,
  tatsuo310,
  tatsuyatakemura,
]
