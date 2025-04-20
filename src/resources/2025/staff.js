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

// 2024年からの継続スタッフとして、主要メンバーを仮定義しています
// 実際のスタッフ編成が決まり次第、更新してください

const mmorito = {
  key: 'mmorito',
  name: 'mmorito',
  title: '実行委員長',
  twitter: 'mmorito_0318',
}

const nishimotz = {
  key: '24motz',
  name: '西本 卓也',
  twitter: '24motz',
  facebook: 'takuya.nishimoto',
  uri: 'https://shuaruta.com/',
}

const isabasi1484 = {
  key: 'isabasi1484',
  name: '石橋 伸介',
  twitter: 'isabisi1484',
  github: 'isabisi1484',
}

const kakenavi = {
  key: 'kakenavi',
  name: '山城戸 祐樹',
  twitter: 'kakenavi',
}

const m_ando_japan = {
  key: 'm_ando_japan',
  name: '安藤 光昭',
  twitter: 'm_ando_japan',
  facebook: 'ando.mitsuaki',
  uri: 'https://bitriver.jp/',
}

// スタッフ一覧
// 実際のスタッフが確定次第、更新してください
export const staff: Staff[] = [
  mmorito,
  nishimotz,
  isabasi1484,
  kakenavi,
  m_ando_japan,
]
