// @flow
type Sponsor = {
  name: string,
  url: string,
}

export const atlassian: Sponsor = {
  name: 'アトラシアン株式会社',
  url: 'https://ja.atlassian.com/company',
}

export const orange: Sponsor = {
  name: '株式会社オレンジシステム広島',
  url: 'http://www.orange.co.jp/',
}

export const subthread: Sponsor = {
  name: '株式会社サブスレッド',
  url: 'http://www.subthread.co.jp/',
}

export const platinum: Sponsor[] = [
  atlassian,
  orange,
  subthread,
]

export const gold: Sponsor[] = []

export const nextvision: Sponsor = {
  name: '株式会社ネクストビジョン',
  url: 'https://www.nextvision.co.jp/',
}

export const linkroad: Sponsor = {
  name: '株式会社リンクロード',
  url: 'http://linkroad.biz/',
}

export const silver: Sponsor[] = [
  nextvision,
  linkroad,
]

export default [...platinum, ...gold, ...silver]
