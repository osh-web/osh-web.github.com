// @flow
export type Sponsor = {
  name: string,
  key: string,
  url: string,
  banner: string,
  height: number,
}

export const cybozu: Sponsor = {
  name: 'サイボウズ株式会社',
  key: 'cyboz',
  url: 'https://cybozu.co.jp/',
  banner: '/img/2020/cybozu.svg',
  height: 150,
}

export const test: Sponsor = {
  name: '株式会社てすと',
  key: 'test',
  url: 'https://tesuto.jp/',
  banner: '/img/2020/test.png',
  height: 150,
}

export const pmaj: Sponsor = {
  name: '日本プロジェクトマネジメント協会',
  key: 'pmaj',
  url: 'http://www.pmaj.or.jp/',
  banner: '/img/2020/pmaj.png',
  height: 150,
}

export const freee: Sponsor = {
  name: 'freee株式会社',
  key: 'freee',
  url: 'https://www.freee.co.jp/',
  banner: '/img/2020/freee_logo.png',
  height: 200,
}

export const shuaruta: Sponsor = {
  name: '株式会社シュアルタ',
  key: 'shuaruta',
  url: 'https://shuaruta.com/',
  banner: '/img/2020/shuaruta.svg',
  height: 150,
}

export const bitriver: Sponsor = {
  name: 'ビットリバー株式会社',
  key: 'bitriver',
  url: 'https://bitriver.jp',
  banner: '/img/2020/bitriver.png',
  height: 150,
}

export const orangesystem: Sponsor = {
  name: '株式会社 オレンジシステム広島',
  key: 'orangesystem',
  url: 'https://www.orange.co.jp/',
  banner: '/img/2020/orangesystem.svg',
  height: 150,
}

export const nextvision: Sponsor = {
  name: '株式会社ネクストビジョン',
  key: 'nextvision',
  url: 'https://www.nextvision.co.jp/',
  banner: '/img/2020/nextvision.png',
  height: 150,
}

export const dreamarts = {
  name: '株式会社ドリーム・アーツ',
  key: 'dreamarts',
  url: 'https://www.dreamarts.co.jp/',
  banner: '/img/2020/dreamarts.png',
  height: 150,
}

export const ulsystems = {
  name: 'ウルシステムズ株式会社',
  key: 'ulsystems',
  url: 'https://www.ulsystems.co.jp/',
  banner: '/img/2020/ulsystems.png',
  height: 200,
}

export const platinum: Sponsor[] = [
  // cybozu,
  // test,
  // freee,
  // orangesystem,
  // dreamarts,
  // ulsystems,
]
export const gold: Sponsor[] = [
  // shuaruta, bitriver
]
export const silver: Sponsor[] = [
  // pmaj, nextvision
]
export const sponsors = { platinum, gold, silver }
