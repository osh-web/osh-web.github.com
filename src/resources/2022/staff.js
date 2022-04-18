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
  twitter: '7richi',
}

const isabasi1484 = {
  key: 'isabasi1484',
  name: '石橋 伸介',
  twitter: 'isabisi1484',
}

const nishimotz = {
  key: '24motz',
  name: '西本 卓也',
  title: '実行委員長',
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
  twitter: 'hiroyukimaeda_3',
}

const naoyuki = {
  key: 'naoyuki',
  name: '濱田 直之',
  title: '副実行委員長',
}

const mosugi = {
  key: 'mosugi',
  name: 'Masaki Osugi',
}

export const staff: Staff[] = [
  nishimotz,
  naoyuki,
  isabasi1484,
  m_ando_japan,
  nobuske,
  nanarichi,
  mu2in,
  mmorito,
  mosugi,
]
