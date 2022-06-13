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

export const yukiSaito: Speaker = {
  furi: 'Yuki Saito',
  name: '斎藤　友樹',
  key: 'yukiSaito',
  title: [''],
  description:
    '官公庁、年金、広告などの業界でソフトウェアエンジニア -> サーバーサイドエンジニア -> データエンジニアとキャリアを歩む。\n データエンジニアとしては、データ分析基盤の設計構築、データ活用のための仕組みづくりを経験し現在もなおデータ活用の推進を行う部署に所属。\n コミュニティ活動では、執筆活動、アドバイザリー活動(ビッグデータを扱うデータ分析基盤の構築・設計、データ活用)、オンライン動画講座を通してデータ活用ノウハウの発信を行なっている。\n 著書に「[エンジニアのための]データ分析基盤入門 データ活用を促進する! プラットフォーム&データ品質の考え方 」、成果を出すための7つのマインドセット システムの老朽化、ブラックボックス時代にどう立ち向うか？」がある。',
  memberships: [
    {
      name: 'MENTA(アドバイザリー)',
      uri: 'https://menta.work/plan/2650',
    },
    {
      name: 'Udemy(オンライン講師)',
      uri: 'https://www.udemy.com/user/yuki-saito-7/',
    },
  ],
  session: {
    name: 'データエンジニア"と"作るデータ文化',
    description:
      '',
  },
  twitter: '@yuki_saito_en',
}

export const hirakawa: Speaker = {
  furi: 'Naoya Hirakawa',
  name: '平河　直也',
  key: 'hirakawa',
  title: ['広島県商工労働局イノベーション推進チーム'],
  description:
    '製造業での管理・営業経験を経て、2021年に広島県入庁。\n 広島県が運営するAI人材育成プラットフォーム「ひろしまQuest」の運営担当になったことをきっかけに、全くの素人の状態からAI・プログラミングの学習を始める\n これまで馴染みがなかった分野に悪戦苦闘しながらも、ひろしまQuestが県民向けに無償提供しているe-ラーニング（株式会社SIGNATE）を活用し、コツコツ学習しています。',
  memberships: [
    {
      name: '商工労働局 | 広島県',
      uri: 'https://www.pref.hiroshima.lg.jp/soshiki/8.html',
    },
    {
      name: 'ひろしまQuest',
      uri: 'https://hiroshima-sandbox.jp/hiroshima-quest.html',
    }
  ],
  session: {
    name: '広島県が提供するAI人材開発プラットフォーム「ひろしまQuest」ご紹介',
    description:
      '',
  },
}

export const hk_hiroshima: Speaker = {
  furi: 'H.K@Hiroshima',
  name: 'H.K@Hiroshima',
  key: 'hk-hiroshima',
  title: [''],
  description:
    '',
  memberships: [
    {
      name: '',
      uri: '',
    },
  ],
  session: {
    name: '（タイトル調整中）',
    description:
      'データ分析に興味がある方は、「基礎がわかったらデータ分析コンペに参加しよう！」と誘われたりすることでしょう。\n 一方で同僚に「コンペに参加したものの楽しみ方がわからなかった」と言われ一歩が踏み出せなくなったりもします。 \n 私も、コンペ（kaggle）に登録後なかなか手がつきませんでしたが、今年になって継続的に参加しています。\n 本セッションではデータコンペの見どころ、取り組み方を紹介し、登録だけでも「楽しめる」ようになっていただければと考えています。',
  },
}

export const speakers = [
  yukiSaito, 
  // hirakawa, hk_hiroshima,
]
