// @flow
export type Sponsor = {
  name: string,
  key: string,
  url: string,
  banner: string,
  height: number,
}

export const ulsystems: Sponsor = {
  name: 'ウルシステムズ株式会社',
  key: 'ulsystems',
  url: 'https://www.ulsystems.co.jp/',
  banner: '/img/2023/ulsystems.png',
  height: 200,
}

export const shuaruta: Sponsor = {
  name: '株式会社シュアルタ',
  key: 'shuaruta',
  url: 'https://shuaruta.com/',
  banner: '/img/2023/shuaruta.svg',
  height: 120,
}

export const future_life_partners: Sponsor = {
  name: 'Future Life Partners 合同会社',
  key: 'future_life_partners',
  url: 'https://future-life-partners.com/',
  banner: '/img/2023/futurelifepartners.png',
  height: 250,
}

export const hmcn: Sponsor = {
  name: '特定非営利活動法人HMCN',
  key: 'hmcn',
  url: '',
  banner: '/img/2023/hmcn.png',
  height: 120,
}

export const nextvision: Sponsor = {
  name: '株式会社ネクストビジョン',
  key: 'nextvision',
  url: 'https://www.nextvision.co.jp/',
  banner: '/img/2023/nextvision.png',
  height: 120,
}

export const cybozu: Sponsor = {
  name: 'サイボウズ株式会社',
  key: 'cyboz',
  url: 'https://cybozu.co.jp/',
  banner: '/img/2023/cybozu.png',
  height: 200,
}

export const platinum: Sponsor[] = [
  ulsystems,
  future_life_partners,
]
export const gold: Sponsor[] = [
  cybozu,
]
export const silver: Sponsor[] = [
  shuaruta,
  hmcn,
  nextvision,
]
export const sponsors = { platinum, gold, silver }
