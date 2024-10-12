// @flow
export type Sponsor = {
  name: string,
  key: string,
  url: string,
  banner: string,
  height: number,
}

export const shuaruta: Sponsor = {
  name: '株式会社シュアルタ',
  key: 'shuaruta',
  url: 'https://shuaruta.com/',
  banner: '/img/2024/shuaruta.svg',
  height: 120,
}

export const subthread = {
  name: '株式会社サブスレッド',
  key: 'subthread',
  url: 'https://www.subthread.co.jp/',
  banner: '/img/2024/subthread.png',
  height: 200,
}

export const eventHandler = {
  name: '株式会社イベントハンドラ',
  key: 'eventHandler',
  url: 'https://eventhandler.jp/',
  banner: '/img/2024/eventhandler.png',
  height: 120,
}

export const ulsystems: Sponsor = {
  name: 'ウルシステムズ株式会社',
  key: 'ulsystems',
  url: 'https://www.ulsystems.co.jp/',
  banner: '/img/2024/ulsystems.png',
  height: 200,
}

export const cybozu: Sponsor = {
  name: 'サイボウズ株式会社',
  key: 'cyboz',
  url: 'https://cybozu.co.jp/',
  banner: '/img/2024/cybozu.png',
  height: 200,
}

export const bitriver: Sponsor = {
  name: 'ビットリバー株式会社',
  key: 'bitriver',
  url: 'https://bitriver.jp',
  banner: '/img/2024/bitriver.png',
  height: 200,
}


export const platinum: Sponsor[] = [
  subthread,
  ulsystems,
  bitriver,
]
export const gold: Sponsor[] = [
  cybozu,
]
export const silver: Sponsor[] = [
  shuaruta,
]
export const supporter: Suponsor[] = [
  eventHandler,
]
export const sponsors = { platinum, gold, silver, supporter }

