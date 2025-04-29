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

export const seiud07: Speaker = {
  furi: '',
  name: '宇田 誠之朗',
  key: 'seiud07',
  title: [],
  description:
    '株式会社Skillnote インフラSRE/エンジニアリングマネージャー。\n' +
    '広島地場SIerにてインフラエンジニア10年、Webアプリ開発4年、技術営業4年を経て、2022年に広島からフルリモートで株式会社Skillnote(本社東京)へ入社。\n' +
    'インフラ設計構築、スクラムチームのマネージャやスクラムマスター、コンプライアンス整備などを担当しています。',
  memberships: [],
  session: {
    name: 'プロダクトと開発を支えるSREの力',
    description:
      '品質に対する要求が厳しいエンタープライズにクラウドサービスを提供するには、サイトの信頼性は非常に重要です。\n' +
      'またセールス、カスタマーサクセス、開発といった異なる目標を持つ部門が協力しビジネスを成長させていくためにも信頼性は欠かせない要素です。\n' +
      '本セッションではサイトの信頼性とSREの関わりについてSaas事業会社での実例を交えてお話します。',
  },
  twitter: '',
}

export const plageoj: Speaker = {
  furi: '',
  name: '菅原 政行',
  key: 'plageoj',
  title: [],
  description:
    '1998年広島県福山市生まれ。2019年合同会社Team IshiHaraを設立。\n' +
    'ウェブサービス開発・運用支援を行うほか、向洋駅前でコワーキングスペースを運営。\n' +
    '2023年株式会社Faber Companyに新卒入社し、主に開発者体験の向上・パフォーマンス改善に取り組む。\n' +
    '2024年秋からベトナム・ホーチミンの子会社へ異動し、現地でのSRE組織立ち上げを目指して活動中。\n' +
    'お好み焼きはうどん派。',
  memberships: [],
  session: {
    name: '野良SREが考えるひとりめの仕事、透明性の作り方',
    description:
      'SREという役割がまだない会社で勝手にSREを名乗る、それが「野良」SREです。\n' +
      '肩書きがなくても文化は作れるという信念をもとに、日々奔走しています。\n' +
      'SRE組織は後から立ち上がることが多く、立ち上げにあたって既存の会社文化とどう折り合いをつけていくかが課題になるでしょう。このときに必要となるのが取り組みの透明性です。\n' +
      '野良である自由さを活かしながら、ボトムアップでエンジニアの活躍を支援していくための試みをお伝えします。',
  },
  twitter: '',
}

export const dyoshikawa: Speaker = {
  furi: '',
  name: 'dyoshikawa',
  key: 'dyoshikawa',
  title: [],
  description:
    '広島市でリモート勤務するソフトウェアエンジニア。\n' +
    '現職では月間PV数1000万以上、会員数10万以上のエンジニア向け情報共有プラットフォームZennにおいてNext.jsやRuby on Railsを用いた開発業務に参画。\n' +
    'それ以前は受託開発案件におけるテックリードとしてチーム開発を主導。\n' +
    'バックエンドアプリケーション開発をメイン領域としながらも、ReactフロントエンドやAWSインフラの開発も行うT型的人材であり、Webアプリケーションの構成要素全体について技術選定、初期構築フェーズから対応している。\n' +
    'OSS活動も行っており、aws-cdkやopenGraphScraperへのコミット経験がある。\n' +
    '保有資格は応用情報技術者、AWS認定 セキュリティ - 専門知識など。',
  memberships: [],
  session: {
    name: 'エンジニアのための情報共有コミュニティサービスZennの開発チームを支える自動化の仕組み',
    description:
      'Zennはエンジニアのための新しい情報共有サービスです。\n' +
      '月間PV数1000万以上のWebサービスでありながら、エンジニア3人、デザイナー1人、ビジネス1人、オペレーター1人という少人数チームで企画や開発・運用、そして問い合わせ対応のすべてを担っており、あらゆる方面において自動化の仕組みによる開発の合理化・効率化が不可欠な状況にあります。\n' +
      '本セッションでは、ZennチームにおけるLinter/Formatterによるレビュー工数の削減、自動テストとCIによる品質の担保、デプロイ自動化による属人性の排除、そして生成AIの活用の取り組みなどを紹介します。開発・運用業務の生産性向上のヒントを得る一助となれば幸いに思います。',
  },
  twitter: '',
}

export const kentahi: Speaker = {
  furi: '',
  name: '菱田健太@トポタル',
  key: 'kentahi',
  title: [],
  description:
    'Topotal COO/CFOをやっています。\n' +
    'もう一度読むSREというPodcastの相槌兼編集担当、SRE NEXT 2023 Staff、SRE NEXT 2024 Co-Chairなどの活動をしています。',
  memberships: [],
  session: {
    name: 'SREの組織類型に応じたリーダーシップの考察',
    description:
      'TopotalではSRE組織に対して技術支援を行っています。\n' +
      '様々な企業の技術支援を観察していると、SREが組織を牽引することが求められると感じます。\n' +
      '組織を牽引するためにはリーダーシップを持って活動しなければなりません。\n' +
      'しかし、SREの組織には様々なタイプがあり、リーダーシップのあり方も異なると考えられます。\n' +
      '今回の発表では、SREの組織類型に応じたリーダーシップのあり方を共有します。',
  },
  twitter: '',
}

export const tomo: Speaker = {
  furi: '',
  name: 'tomo',
  key: 'tomo',
  title: [],
  description:
    'SIer→ECサイトのSRE&DBRE→PdMという変わった職歴のエンジニア。\n' +
    '過去の経験から「様々なバックグラウンドの方に、わかりやすく説明する」をモットーに、イベントに参加させていただきます！',
  memberships: [],
  session: {
    name: '信頼性を高めるって結局何だったの？',
    description:
      'SREやDBRE、CRE…様々な「信頼性を高める」エンジニアリングがありますが、信頼性とは？信頼性を高めて何が嬉しいの？\n' +
      'を、かみ砕いて説明します。',
  },
  twitter: '',
}

export const chanyou: Speaker = {
  furi: '',
  name: 'chanyou',
  key: 'chanyou',
  title: [],
  description:
    '呉工業高等専門学校卒業後、スタートアップスタジオ事業を展開する企業にエンジニアとして入社。\n' +
    'SNSコンサルティング事業でコンサルタントやアナリストを技術面で支えながら、エンジニアチームの立ち上げやエンジニア向けのコミュニケーション施策など幅広く活動する。\n' +
    'その後、MaaS事業を行うスタートアップに転職。データエンジニアとして本格始動し、交通データ分析ツールの開発や運用を経験した後、2024年3月にタイミーへ入社。\n' +
    'データ基盤の構築・運用に注力している。',
  memberships: [],
  session: {
    name: 'データの信頼性を支える仕組みと技術',
    description:
      'タイミーでは、施策の意思決定やレコメンドエンジンの開発など、あらゆる場面でデータを活用しています。 本セッションでは、タイミーのデータ基盤にフォーカスを当てながら、データの信頼性とは何か、データの信頼性を保つための仕組みと技術について、事例を交えながらご紹介します。',
  },
  twitter: '',
}

export const gr1m0h: Speaker = {
  furi: '',
  name: 'Wataru Tsuda / gr1m0h',
  key: 'gr1m0h',
  title: [],
  description:
    '広島商船高等専門学校卒業後、ソフトウェアベンダーで開発、運用、SRE、企画を経験。\n' +
    '2023年2月に株式会社Luupに入社。IoT領域のSREとして主にSLI・SLO、Incident Response周りを推進。\n' +
    'SRE Lounge Staff。\n' +
    'SRE NEXT 2022・SRE NEXT 2024 Staff、SRE NEXT 2023 Chair。\n' +
    'Platform Engineering Kaigi 2024・Platform Engineering Meetup Staff。',
  memberships: [],
  session: {
    name: '"君は見ているが観察していない" で考えるインシデントマネジメント',
    description:
      'シャーロック・ホームズの名言『君は見ているが観察していない』を通じて、SREにおけるインシデントマネジメント、インシデントレスポンス、ポストモーテムの重要性を解説。\n' +
      '実例を交え、これらがシステム信頼性向上にどう寄与するかを紹介します。',
  },
  twitter: '',
}

export const tmasa: Speaker = {
  furi: '',
  name: '谷 昌典',
  key: 'tmasa',
  title: [],
  description:
    '広島大学情報科学部を2023年に卒業し、新卒でサイボウズに入社。\n' +
    '現在は東広島からリモートで働いている。瀬戸内海の小さな島に写真を撮りに行くのが好き。\n' +
    '生産性向上チームでは1年間社内の GitHub Actions セルフホストランナー基盤に従事し、現在は開発生産性指標の一つ Four keys の社内推進に関わっている。\n' +
    'Software Design 2024年7月号 GitHub Actions実践講座 では3章の Rulesets とセキュリティを担当。\n' +
    'デプロイパイプラインにおけるセキュリティに興味がある。',
  memberships: [],
  session: {
    name: '開発組織を横断して支える生産性向上チームの取り組み',
    description:
      'サイボウズの開発組織の中に、「生産性向上チーム」という変わった名前のチームがあります。\n' +
      '2015年に生産性向上チームが設立されてから10年ほど経過し、その間に様々な取り組みを行ってきました。\n' +
      'その取り組みはどれも、開発者の生産性を上げる目的で行っています。\n' +
      '本セッションでは、生産性向上チームの紹介とこれまでの取り組みから得た学びをお伝えします。\n' +
      '長く開発生産性に取り組む中で見えてきた変わっていくもの、変わらないもの、そしてこれからの話をします。',
  },
  twitter: '',
}


export const speakers = [
  seiud07,
  plageoj,
  dyoshikawa,
  kentahi,
  tomo,
  chanyou,
  gr1m0h,
  tmasa,
]
