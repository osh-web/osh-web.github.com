// @flow strict
type Staff = {
  name: string,
  key: string,
  twitter?: string,
  facebook?: string,
  github?: string,
  uri?: string,
  title?: string,
}

const kakenavi = {
  key: 'kakenavi',
  name: '山城戸 祐樹',
  twitter: 'kakenavi',
}

const mu2in = {
  key: 'mu2in',
  name: 'mu2in',
  twitter: 'mu2in',
}

const m_ando_japan = {
  key: 'm_ando_japan',
  name: '安藤 光昭',
  twitter: 'm_ando_japan',
  facebook: 'ando.mitsuaki',
  uri: 'https://bitriver.jp/',
}

const nobuske = {
  key: 'nobuske',
  name: '佐々木 宣介',
}

const nanarichi = {
  key: '7richi',
  name: '田中 靖也',
  title: '実行委員長',
  twitter: '7richi',
}

const kwgch = {
  key: 'kwgch',
  name: '川口 稔',
}

const soudai1025 = {
  key: 'soudai1025',
  name: '曽根 壮大',
  twitter: 'soudai1025',
  facebook: 'soudai.sone',
}

const isabasi1484 = {
  key: 'isabasi1484',
  name: '石橋 伸介',
  twitter: 'isabisi1484',
}

const nishimotz = {
  key: '24motz',
  name: '西本 卓也',
  title: '副委員長',
  uri: 'https://shuaruta.com/',
}

const mmorito = {
  key: 'mmorito',
  name: '森藤 敏之',
  twitter: 'mmorito_0318',
  facebook: 'toshi.val',
  github: 'mmorito',
}

const hiroyuki = {
  key: 'hiroyuki',
  name: '前田 浩幸',
  twitter: '@hiroyukimaeda_3',
}

const naoyuki = {
  key: 'naoyuki',
  name: '濱田 直之',
}

const eiel = {
  key: 'eiel',
  name: '火村 智彦',
  twitter: 'eielh',
  facebook: 'eielh',
  github: 'eiel',
  uri: 'https://eiel.info/',
}

export const staff: Staff[] = [
  nanarichi,
  nishimotz,
  kakenavi,
  mu2in,
  m_ando_japan,
  nobuske,
  kwgch,
  soudai1025,
  isabasi1484,
  mmorito,
  hiroyuki,
  naoyuki,
  eiel,
]
