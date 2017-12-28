// @flow
type Sponsor = {
  name: string,
  key: string,
  url: string,
  bannar: bool, // バナーがあるかどうか
}

export const atlassian: Sponsor = {
  name: 'アトラシアン株式会社',
  key: 'atlassian',
  url: 'https://ja.atlassian.com/company',
  bannar: false,
}

export const orange: Sponsor = {
  name: '株式会社オレンジシステム広島',
  key: 'orange',
  url: 'http://www.orange.co.jp/',
  bannar: true,
}

export const subthread: Sponsor = {
  name: '株式会社サブスレッド',
  key: 'subthread',
  url: 'http://www.subthread.co.jp/',
  bannar: false,
}

export const platinum: Sponsor[] = [
  atlassian,
  orange,
  subthread,
]

export const gold: Sponsor[] = []

export const nextvision: Sponsor = {
  name: '株式会社ネクストビジョン',
  key: 'nextvision',
  url: 'https://www.nextvision.co.jp/',
  bannar: true,
}

export const linkroad: Sponsor = {
  name: '株式会社リンクロード',
  key: 'linkroad',
  url: 'http://linkroad.biz/',
  bannar: true,
}

export const silver: Sponsor[] = [
  nextvision,
  linkroad,
]

export default [...platinum, ...gold, ...silver]
