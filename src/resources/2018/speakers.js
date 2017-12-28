// @flow
type Speaker = {
  furi: string,
  name: string,
  twitter?: string,
  blog?: string,
  company: {
    name: string,
    uri: string,
  }
}

export const ryuzee: Speaker = {
  furi: 'よしば りゅうたろう',
  name: '吉羽 龍太郎',
  twitter: 'ryuzee',
  blog: 'http://www.ryuzee.com/',
  company: {
    name: '株式会社アトラクタ',
    uri: 'https://www.attractor.co.jp/about/',
  },
}

export const shoyoshi: Speaker = {
  furi: 'よしはら　しょうざぶろう',
  name: '吉原 庄三郎',
  company: {
    name: '株式会社ウフル',
    uri: 'http://uhuru.co.jp/about/',
  },
}

export const ma2shita: Speaker = {
  furi: 'まつした こうへい',
  name: '松下 享平',
  company: {
    name: '株式会社ソラコム',
    uri: 'https://soracom.jp/share/company/',
  },
}

export const seratch: Speaker = {
  furi: 'せら かずひろ',
  name: '瀬良 和弘',
  twitter: 'seratch_ja',
  company: {
    name: 'スマートニュース株式会社',
    uri: 'http://about.smartnews.com/ja/about/',
  },
}

export const tatsuo310: Speaker = {
  furi: 'さとう たつお',
  name: '佐藤 達男',
  company: {
    name: '広島修道大学',
    uri: 'http://www.shudo-u.ac.jp/',
  },
}

export const mkiskt: Speaker = {
  furi: 'むかい さきと',
  name: '向井 咲人',
  twitter: 'mki_skt',
  company: {
    name: 'ヤフー株式会社',
    uri: 'http://docs.yahoo.co.jp/info/company/',
  },
}

export default [
  ryuzee,
  shoyoshi,
  ma2shita,
  seratch,
  tatsuo310,
  mkiskt,
]
