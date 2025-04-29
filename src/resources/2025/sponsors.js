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

// スポンサーカテゴリ
export const platinum: Sponsor[] = []
export const gold: Sponsor[] = []
export const silver: Sponsor[] = []
export const supporter: Sponsor[] = []
export const sponsors = { platinum, gold, silver, supporter }
