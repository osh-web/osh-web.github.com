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

export const takaking22: Speaker = {
  furi: 'Oibe Takeo',
  name: '及部 敬雄',
  key: 'takaking22',
  title: [
    '株式会社デンソーMaaS開発部  アジャイルモンスター',
    '一般社団法人アジャイルチームを支える会 理事'
  ],
  description:
    'エンジニアとして、たくさんのプロダクト開発・サービス運用・新規事業立ち上げに従事。アジャイル開発との出会いをきっかけに、最強のチームを作るために日々奮闘。2019年7月に楽天株式会社から現職にチームごと移籍。モットーは「自動車業界に金の雨を降らせる」、推しメンは福岡聖菜。',
  memberships: [
    {
      name: '株式会社デンソーMaaS開発部',
      uri: 'https://www.denso.com/jp/ja/',
    },
    {
      name: '一般社団法人アジャイルチームを支える会',
      uri: 'http://www.agileteam.jp/',
    },
  ],
  session: {
    name: 'アジャイル時代の「個」と「チーム」',
    description: '',
  },
}

export const kawaguti: Speaker = {
  furi: 'Kawaguchi Yasunobu',
  name: '川口 恭伸',
  key: 'kawaguti',
  title: ['アギレルゴコンサルティング株式会社 シニアアジャイルコーチ'],
  description:
    '北陸先端科学技術大学院大学修了ののち、金融情報サービスベンダー(株)QUICKにてデータメンテナンス/システム開発、プロダクト/サービス企画開発、仮想化インフラ構築などを担当。2008年スクラムに出会い、パイロットプロジェクトを始める。2011年イノベーションスプリント実行委員長、2011年からスクラムギャザリング東京実行委員。2012-2018年楽天にてアジャイルコーチ。楽天テクノロジーカンファレンス2012-2017実行委員。「Fearless Change」「ユーザーストーリーマッピング」監訳、「Joy, inc」共訳、「アジャイルエンタープライズ」監修。認定スクラムプロフェッショナル。ジム・コプリエン、ジェフ・パットン、ケン・ルービンなど、認定スクラムトレーニングの共同講師経験多数',
  memberships: [
    {
      name: 'アギレルゴコンサルティング株式会社',
      uri: 'https://www.jp.agilergo.com/',
    },
  ],
  session: {
    name: 'アジャイル開発の時代',
    description: 'アジャイル開発はどうのように生まれ、発展し、どこに向かっていくのか？ 日本のソフトウェア産業は？プロダクト開発はどうなっていきそうなのか？ アジャイルの起源、クラウドの勃興、DevOpsの着眼点、 実感駆動、スクラムの仕組み、モブプログラミングはどう有効なのか？ 米国 Agile Conference 日本人最多連続参加記録更新中(非公式)のスピーカーが、 単にいま気になっていることを淡々と話します。',
  },
}

export const soudai1025: Speaker = {
  furi: 'Sone Taketomo',
  name: '曽根 壮大',
  key: 'soudai1025',
  title: [
    '株式会社 オミカレ 副社長/CTO',
    '日本PostgreSQLユーザ会 理事 勉強会分科会座長',
  ],
  description:
    '数々の業務システム、Webサービスなどの開発・運用を担当し、2017年に株式会社はてなでサービス監視サービス「Mackerel」のCRE（Customer Reliability Engineer）を経て現職。 コミュニティでは、Microsoft MVPをはじめ、日本PostgreSQLユーザ会の理事として勉強会の開催を担当し、各地で登壇している。 builderscon 2017、YAPC::Kansaiなどのイベントでベストスピーカーを受賞し、分かりやすく実践的な内容のトークに定評がある。 他に、岡山Python勉強会を主催し、オープンラボ備後にも所属。著書に『Software Design』誌で、データベースに関する連載「RDBアンチパターン」をまとめた『失敗から学ぶRDBの正しい歩き方』を執筆。',
  memberships: [
    {
      name: '株式会社オミカレ',
      uri: 'https://party-calendar.net/corp',
    },
  ],
  session: {
    name: '35歳を超えた僕たちが、今と未来の技術と如何に向き合うか ~ 35歳の壁を超えていく ~',
    description: 'エンジニア35歳定年説、それは間違った論説であると理解しているものの、30歳を超え、責任、家庭、老い、様々なモノを背負ってくるとどうやって超えていくか？というのは多くの人達も一度は悩むのではないでしょうか。\n私も今年、35歳を越え、職場ではCTOとして決断を迫られる中、それでも新しい技術を理解し、向き合って行かねばなりません。\nもちろん一日は有限ですから勉強する時間も限られます。\nそんな中、私がどうやって新しい技術と理解し、未来の技術を予測し、今の技術を選定しているか。そのために日々をどう過ごしているか。そんな **"エンジニアとして生き残るためのhack"** を皆さんにお伝えします。',
  },
}

export const konishi: Speaker = {
  furi: 'Konishi Yudai',
  name: '小西 雄大',
  key: 'konishi',
  title: [],
  description:
    '21のときにフリーランスとしてWeb制作を始める。24のときに渋谷の小さなスタートアップにCTOとして関わる。iOSアプリやWebサービスをいくつか作った後、退職。現在、また広島でフリーランスとして活動しています。',
  memberships: [],
  session: {
    name: '大学を中退した文系エンジニアがその後どうなったか',
    description: '',
  },
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

export const speakers = [
  takaking22,
  kawaguti,
  soudai1025,
  konishi,
  tatsuo310,
]
