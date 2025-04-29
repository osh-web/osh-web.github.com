// @flow
export type Sponsor = {
  name: string,
  key: string,
  url: string,
  banner: string,
  height: number,
}

export const orangesystem: Sponsor = {
  name: '株式会社 オレンジシステム広島',
  key: 'orangesystem',
  url: 'https://www.orange.co.jp/',
  banner: '/img/2022/sponsors/osh2022_logo_orangesystem.png',
  // banner: '/img/2022/sponsors/orange_logo_orange_small_tp.png',
  height: 200,
}

export const ulsystems = {
  name: 'ウルシステムズ株式会社',
  key: 'ulsystems',
  url: 'https://www.ulsystems.co.jp/',
  banner: '/img/2022/sponsors/osh2022_logo_ulsystems.png',
  height: 200,
}

export const futureLifePartners = {
  name: 'Future Life Partners 合同会社',
  key: 'futureLifePartners',
  url: 'https://future-life-partners.com/',
  banner: '/img/2022/sponsors/osh2022_logo_futurelifepartners.png',
  height: 200,
}

export const subthread = {
  name: '株式会社サブスレッド',
  key: 'subthread',
  url: 'https://www.subthread.co.jp/',
  banner: '/img/2022/sponsors/osh2022_logo_subthread.png',
  height: 200,
}

export const bitriver: Sponsor = {
  name: 'ビットリバー株式会社',
  key: 'bitriver',
  url: 'https://bitriver.jp',
  banner: '/img/2022/sponsors/osh2022_logo_bitriver.png',
  height: 200,
}

export const tesuto = {
  name: '株式会社てすと',
  key: 'tesuto',
  url: 'https://tesuto.jp/',
  banner: '/img/2022/sponsors/osh2022_logo_tesuto.png',
  height: 150,
}

export const cybozu: Sponsor = {
  name: 'サイボウズ株式会社',
  key: 'cyboz',
  url: 'https://cybozu.co.jp/',
  banner: '/img/2022/sponsors/osh2022_logo_cybozu.png',
  height: 100,
}

export const shuaruta: Sponsor = {
  name: '株式会社シュアルタ',
  key: 'shuaruta',
  url: 'https://shuaruta.com/',
  banner: '/img/2022/sponsors/osh2022_logo_shuaruta.png',
  height: 100,
}

export const hmcn = {
  name: '特定非営利活動法人HMCN',
  key: 'hmcn',
  url: '',
  banner: '/img/2022/sponsors/osh2022_logo_hmcn.png',
  height: 100,
}

export const nextvision: Sponsor = {
  name: '株式会社ネクストビジョン',
  key: 'nextvision',
  url: 'https://www.nextvision.co.jp/',
  banner: '/img/2022/sponsors/osh2022_logo_nextvision.png',
  height: 100,
}

export const eventHandler = {
  name: '株式会社イベントハンドラ',
  key: 'eventHandler',
  url: 'https://eventhandler.jp/',
  banner: '/img/2022/sponsors/osh2022_logo_eventhandler.png',
  height: 100,
}

export const funaffect = {
  name: 'ファナフェクト株式会社',
  key: 'funaffect',
  url: 'https://www.funaffect.jp/',
  banner: '/img/2022/sponsors/osh2022_logo_funaffect.png',
  height: 100,
}

export const platinum: Sponsor[] = [
  ulsystems, futureLifePartners, orangesystem, subthread, bitriver,
]
export const gold: Sponsor[] = [
  // TBD
  tesuto,
]
export const silver: Sponsor[] = [
  cybozu, shuaruta, nextvision, hmcn,
]

// 運営協力（司会・配信）
export const supporter: Suponsor[] = [
  // ロゴデータ受領待
  eventHandler, funaffect,
]
export const sponsors = { platinum, gold, silver, supporter }
