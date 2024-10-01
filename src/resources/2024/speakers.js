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
    name: '',
    description:
      '',
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
    name: '信頼性を高めるって結局何だったの？\n',
    description:
      'SREやDBRE、CRE…様々な「信頼性を高める」エンジニアリングがありますが、信頼性とは？信頼性を高めて何が嬉しいの？\n' +
      'を、かみ砕いて説明します。',
  },
  twitter: '',
}

export const speakers = [
  seiud07,
  plageoj,
  dyoshikawa,
  kentahi,
  tomo,
]
