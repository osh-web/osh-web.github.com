// @flow
export type Sponsor = {
  name: string,
  key: string,
  url: string,
  banner: string,
  height: number,
}

// 2025年のスポンサーはまだ確定していません
// 以下はスポンサーデータのサンプルです。実際のスポンサーが決定次第、更新してください。

export const sampleSponsor: Sponsor = {
  name: 'サンプル株式会社',
  key: 'sample',
  url: 'https://example.com/',
  banner: '/img/2025/sponsors/sample.png',
  height: 200,
}

export const subthread = {
  name: '株式会社サブスレッド',
  key: 'subthread',
  url: 'https://subthread.jp/?osh2025',
  banner: '/img/2025/sponsors/subthread.png',
  height: 200,
}

export const smarthr = {
  name: '株式会社SmartHR',
  key: 'smarthr',
  url: 'https://smarthr.co.jp/',
  banner: '/img/2025/sponsors/SmartHR_Logo.png',
  height: 250,
}

export const cybozu: Sponsor = {
  name: 'サイボウズ株式会社',
  key: 'cyboz',
  url: 'https://tech.cybozu.io/',
  banner: '/img/2025/sponsors/cybozu.png',
  height: 120,
}

export const pyconjp2025: Sponsor = {
  name: 'PyCon JP 2025',
  key: 'pyconjp2025',
  url: 'https://2025.pycon.jp/ja',
  banner: '/img/2025/sponsors/pyconjp2025.png',
  height: 140,
}

export const nextvision: Sponsor = {
  name: '株式会社ネクストビジョン',
  key: 'nextvision',
  url: 'https://www.nextvision.co.jp/',
  banner: '/img/2025/sponsors/nextvision2.png',
  height: 120,
}

export const eventHandler = {
  name: '株式会社イベントハンドラ',
  key: 'eventHandler',
  url: 'https://eventhandler.jp/',
  banner: '/img/2025/sponsors/eventhandler.png',
  height: 120,
}

// スポンサーカテゴリ
export const platinum: Sponsor[] = [subthread, smarthr]
export const gold: Sponsor[] = [cybozu, pyconjp2025]
export const silver: Sponsor[] = [nextvision]
export const supporter: Sponsor[] = [eventHandler]
export const sponsors = { platinum, gold, silver, supporter }
