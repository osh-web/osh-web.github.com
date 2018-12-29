// @flow strict
type Speaker = {
  furi: string,
  name: string,
  description: string,
  key: string,
  twitter?: string,
  github?: string,
  blog?: string,
  company: {
    name: string,
    uri: string,
  },
  title?: string[],
  session?: {
    name: string,
    description: string,
  },
}

export const mao_instantlife: Spaker = {
  furi: 'あべ しんすけ',
  name: '阿部 信介',
  key: 'mao_instantlife',
  title: 'クラスメソッド株式会社 サーバーレス開発部マネージャ',
  description: `パチンコ店向けWin32ネイティブアプリの開発、教育系企業のシステム子会社での社内システム開発、ショッピングセンター向けソリューションの開発チームマネージャなどを経て現在。現職ではエンジニアリングマネージャとして、
  分散受託チームのマネジメントをフルリモートでチャレンジ中。
  前々職より岡山を中心にコミュニティに参加し始め、現在はOkayama Managers Meetingの主催や合同勉強会での発表を中心に活動している。`,
  company: {
    name: 'クラスメソッド株式会社 ',
    uri: 'https://classmethod.jp/',
  },
}

export const tatsuo310: Speaker = {
  furi: 'さとう たつお',
  name: '佐藤 達男',
  key: 'tatsuo310',
  title: ['広島修道大学 経済科学部准教授', 'キャリアセンター長'],
  description:
    'SIerとして数多くのシステム開発にプロジェクトマネジャーとして参画し、人事課長、技術部長、PM部長などを経た後、フィールドを大学に移し、現在に至る。技術経営、UX/HCD、アジャイル、プロジェクトマネジメントなどを領域横断的にカバーし、新たな価値創造型のマネジメントをテーマに研究活動を展開している。著書に「プロジェクトマネージャ育成法」（日科技連出版社）ほか。Ph.D.,PMP, PMS,CSPO, CSM',
  company: {
    name: '広島修道大学',
    uri: 'http://www.shudo-u.ac.jp/',
  },
}

export const tatsuyatakemura: Speaker = {
  furi: 'たけむら たつや',
  name: '武村 達也',
  key: 'tatsuyatakemura',
  title: ['広島県商工労働局 イノベーション推進チーム'],
  description:
    '某銀行から広島県に出向中。ハッカソン、NT広島などIT系のイベントの企画・運営および広島県のAI/IoT事業「ひろしまサンドボックス」の人材育成事業において中小企業のIoT人材育成に携わる。7年前、41歳のときに独学でiPhoneアプリを制作、現在まで12作品をリリース。うち１作品が面白法人カヤック主催クソゲー供養会で大賞を受賞。1年前、電子工作を独学で始めMakefFaire東京、台北などに出展。',
  company: {
    name: '広島県商工労働局',
    uri: 'https://www.pref.hiroshima.lg.jp/soshiki/8.html',
  },
}

export const speakers = [mao_instantlife, tatsuo310, tatsuyatakemura]
