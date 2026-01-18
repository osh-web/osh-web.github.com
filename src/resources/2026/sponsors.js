// @flow
export type Sponsor = {
  name: string,
  key: string,
  url: string,
  banner: string,
  height: number,
}

// プラチナスポンサー
export const subthread: Sponsor = {
  name: '株式会社サブスレッド',
  key: 'subthread',
  url: 'https://subthread.jp/?osh2026',
  banner: '/img/2026/sponsors/subthread.png',
  height: 200,
}

export const chugaiTec: Sponsor = {
  name: '中外テクノス株式会社',
  key: 'chugai-tec',
  url: 'https://www.chugai-tec.co.jp/',
  banner: '/img/2026/sponsors/chugai-tec.png',
  height: 200,
}

// シルバースポンサー
export const nextvision: Sponsor = {
  name: '株式会社ネクストビジョン',
  key: 'nextvision',
  url: 'https://www.nextvision.co.jp/',
  banner: '/img/2026/sponsors/nextvision.png',
  height: 120,
}

// サポーター
export const eventHandler: Sponsor = {
  name: '株式会社イベントハンドラ',
  key: 'eventHandler',
  url: 'https://eventhandler.jp/',
  banner: '/img/2026/sponsors/eventhandler.png',
  height: 120,
}

// スポンサーカテゴリ
export const platinum: Sponsor[] = [subthread, chugaiTec]
export const gold: Sponsor[] = []
export const silver: Sponsor[] = [nextvision]
export const supporter: Sponsor[] = [eventHandler]
export const personal: Sponsor[] = []
export const sponsors = { platinum, gold, silver, supporter, personal }
