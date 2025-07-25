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

// 2025年のスピーカーはまだいません。
// 以下はサンプルです。実際のスピーカーが決定次第、更新してください。
// export const seiud07: Speaker = {
//   furi: '',
//   name: '宇田 誠之朗',
//   key: 'seiud07',
//   title: [],
//   description:
//     '株式会社Skillnote インフラSRE/エンジニアリングマネージャー。\n' +
//     '広島地場SIerにてインフラエンジニア10年、Webアプリ開発4年、技術営業4年を経て、2022年に広島からフルリモートで株式会社Skillnote(本社東京)へ入社。\n' +
//     'インフラ設計構築、スクラムチームのマネージャやスクラムマスター、コンプライアンス整備などを担当しています。',
//   memberships: [],
//   session: {
//     name: 'プロダクトと開発を支えるSREの力',
//     description:
//       '品質に対する要求が厳しいエンタープライズにクラウドサービスを提供するには、サイトの信頼性は非常に重要です。\n' +
//       'またセールス、カスタマーサクセス、開発といった異なる目標を持つ部門が協力しビジネスを成長させていくためにも信頼性は欠かせない要素です。\n' +
//       '本セッションではサイトの信頼性とSREの関わりについてSaas事業会社での実例を交えてお話します。',
//   },
//   twitter: '',
// }

export const hiroyukimaeda: Speaker = {
  furi: '',
  name: '前田 浩幸',
  key: 'hiroyukimaeda',
  title: [],
  description: '-',
  memberships: [],
  session: {
    name: '現場仕事中心の組織でSaaSを動かす',
    description:
      '仕組みが“使われ続ける”までの試行錯誤 \n' +
      '「君はどこで動かすか？」\n' +
      'ITシステムは導入するだけでなく、現場で“どう動かし続けられるか”が問われています。\n' +
      '私たちの現場は、ほとんどが診療を提供する歯科医師や歯科衛生士――\n' +
      'デスクに座っている時間がほとんどない、いわゆる現場仕事中心の組織です。\n' +
      'こうした“現場が主役”の職場は、医療に限った話ではありません。\n' +
      '工場、建設、物流、介護、店舗…現場が動いて初めて成り立つ組織は、思った以上に多いはずです。\n' +
      '今回の発表では、私たちがサイボウズ株式会社のkintoneを活用して、\n' +
      '現場の困りごとをどう解決し、どこで動かし、どう「当たり前」に使われる仕組みにできたのか、\n' +
      'そして“作って終わり”にしないためにどんな試行錯誤を重ねてきたのかをお話しします。\n' +
      '「ウチの現場でも活かせそうだな」\n' +
      'そんなヒントを持ち帰っていただけたら幸いです。',
  },
  twitter: '',
}

export const sankyo: Speaker = {
  furi: '',
  name: '3kyo',
  key: '3kyo',
  title: [],
  description:
    '大学卒業後、東京のIT企業（SIer）に入社し、業務システムの構築・運用や、音声認識を活用したサービス開発に従事。\n' +
    '2020年に故郷・広島へUターンし、「スーパーに美味しい魚を並べたい」という想いから、株式会社ウーオに参画。\n' +
    'プロダクトマネージャー兼エンジニアとして、水産マーケットプレイス「UUUO（ウーオ）」の立ち上げに携わる。\n' +
    '同サービスは、2023年に Ruby biz グランプリ大賞 を受賞。',
  memberships: [],
  session: {
    name: '広島発、スタートアップ開発の裏側（仮）',
    description: '',
  },
  twitter: '',
}

export const gr1m0h: Speaker = {
  furi: '',
  name: 'Wataru Tsuda',
  key: 'gr1m0h',
  title: [],
  description:
    '広島商船高等専門学校卒業後、\n' +
    '株式会社OPTiMでIoTプラットフォームの開発・運用・企画を6年間経験。2023年2月に株式会社Luupに入社し、\n' +
    'IoT領域のSREとしてシェアリングモビリティサービスの信頼性向上を推進。\n' +
    'SRE NEXT / SRE Loungeコミュニティでの活動を通じて、SRE文化の普及・発展にも貢献。',
  memberships: [],
  session: {
    name: 'TBD',
    description: '',
  },
  twitter: '',
}

export const takao2704: Speaker = {
  furi: '',
  name: '井出 尭夫',
  key: 'takao2704',
  title: [],
  description:
    '三度の飯よりラーメンが好きなソリューションアーキテクト。\n' +
    '新卒で国内機械メーカーに入社し、宇宙開発事業を担当する子会社に出向し宇宙用ロケットの電気系システム設計を6年間、同機械メーカーの本社部門にてグループ企業内共通のIoTプラットフォームおよびIoTデバイスの企画開発を4年間担当し、2022年9月より現職。得意領域はIoTデバイス。製造業からラーメン店まで現場をメインに奮闘中。冬はゲレンデでテレマークスキーを嗜む。\n' +
    '共著『IoTの知識地図』（技術評論社）',
  memberships: [],
  session: {
    name: '誰かが動かすもの、自分で動かすもの、そして価値を届けること',
    description:
      'IoTやクラウドの普及、さらには生成AIの進化によって、世の中には新しいサービスや価値が次々と生まれ、技術もますます使いやすくなってきました。\n' +
      'そんな中で「何を自分で動かし、何を活用すれば、より早く価値を届けられるか」を考えることがますます重要になっています。\n' +
      '本セッションでは、SORACOMのエコシステムの現場から、「誰かが動かすもの」「自分で動かすもの」、そして「価値を届けること」について、これからの選択とバランス、そのヒントをいっしょに考えていきたいと思います。',
  },
  twitter: '',
}

export const ici_mici: Speaker = {
  furi: '',
  name: '中道 一志',
  key: 'ici_mici',
  title: [],
  description:
    '株式会社ヌーラボ所属。島根県の西端からフルリモートで働くエンジニア。\n' +
    '2022年6月にそれまで勤めていたSIerからリモートで働ける企業に転職。子育てのために広島を離れて妻の実家に移住した。\n' +
    '現在はPjM, PMOとして世界中のメンバーと協力しながらヌーラボのサービス開発を進めている。',
  memberships: [],
  session: {
    name: '人を動かすことについて考える',
    description: '',
  },
  twitter: '',
}

export const kyokucho: Speaker = {
  furi: '',
  name: 'Kyokucho',
  key: 'kyokucho',
  title: [],
  description:
    '広島在住の機械系エンジニア。機械設計の傍ら、趣味でやっていたWEB開発が業務の一部となってきた。\n' +
    'ブログ\n' +
    'マトリョーシカ的日常\n' +
    'http://matoyomi.hatenablog.com',
  memberships: [],
  session: {
    name: 'TBD',
    description: '',
  },
  twitter: '',
}

export const S_O_F_Science: Speaker = {
  furi: '',
  name: '中村 哲也',
  key: 'S_O_F_Science',
  title: [],
  description:
    '花屋、家具屋を経て、IT知識ゼロからIT企業に就職。コールセンター、インフラエンジニア、サービス企画を経て自社クラウドサービスのマーケティングを従事。その後、SIerに転職し広報・マーケティング室長として業務を実施。\n' +
    '前職では、AWS専業のSIerにてトレーニング部門の拡大とトレーナーとして活動。\n' +
    '現職TOPPANデジタルでは、AIを活用した事業開発とTOPPAN全社のAI CoEとして社内のAI活用推進を行っております。\n' +
    '2024、2025 Japan All AWS Certifications Engineers受賞',
  memberships: [],
  session: {
    name: 'TBD',
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
    name: 'TBD',
    description: '',
  },
  twitter: '',
}

// 現時点でスピーカーは未定です
export const speakers = [
  hiroyukimaeda,
  sankyo,
  gr1m0h,
  takao2704,
  ici_mici,
  kyokucho,
  S_O_F_Science,
  masaki_m,
]
