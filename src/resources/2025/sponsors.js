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
  banner: '/img/2025/sample.png',
  height: 200,
}

export const subthread = {
  name: '株式会社サブスレッド',
  key: 'subthread',
  url: 'https://subthread.jp/?osh2025',
  banner: '/img/2025/subthread.png',
  height: 200,
}

export const cybozu: Sponsor = {
  name: 'サイボウズ株式会社',
  key: 'cyboz',
  url: 'https://tech.cybozu.io/',
  banner: '/img/2025/cybozu.png',
  height: 120,
}

// スポンサーカテゴリ
export const platinum: Sponsor[] = [subthread]
export const gold: Sponsor[] = [cybozu]
export const silver: Sponsor[] = []
export const supporter: Sponsor[] = []
export const sponsors = { platinum, gold, silver, supporter }
