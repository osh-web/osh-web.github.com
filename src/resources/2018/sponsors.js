// @flow
type Sponsor = {
  name: string,
  key: string,
  url: string,
  bannar: boolean, // バナーがあるかどうか
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
  bannar: true,
}

export const cloudgarage: Sponsor = {
  name: 'CloudGarage',
  key: 'cloudgarage',
  url: 'https://cloudgarage.jp/',
  bannar: true,
}

export const platinum: Sponsor[] = [atlassian, cloudgarage, orange, subthread]

export const bitriver: Sponsor = {
  name: 'ビットリバー株式会社',
  key: 'bitriver',
  url: 'https://bitriver.jp',
  bannar: true,
}

export const gold: Sponsor[] = [bitriver]

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

export const pmaj: Sponsor = {
  name: '日本プロジェクトマネジメント協会',
  key: 'pmaj',
  url: 'http://www.pmaj.or.jp/',
  bannar: true,
}

export const silver: Sponsor[] = [nextvision, linkroad, pmaj]

export default [...platinum, ...gold, ...silver]
