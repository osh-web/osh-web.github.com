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
  banner: '/img/2023/shuaruta.svg',
  height: 150,
}

export const platinum: Sponsor[] = []
export const gold: Sponsor[] = []
export const silver: Sponsor[] = [
  shuaruta
]
export const sponsors = { platinum, gold, silver }
