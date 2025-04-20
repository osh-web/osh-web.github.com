// @flow strict
type Speaker = {
  furi: string,
  name: string,
  description: string,
  key: string,
  twitter?: string,
  github?: string,
  blog?: string,
  memberships: {
    name: string,
    uri: string,
  }[],
  title?: string[],
  session?: {
    name: string,
    description: string,
  },
}

// 2025年のスピーカーはまだいません。
// 以下はサンプルです。実際のスピーカーが決定次第、更新してください。
export const sampleSpeaker: Speaker = {
  furi: 'やまだ たろう',
  name: '山田 太郎',
  key: 'yamada',
  title: [],
  description: 'サンプルの説明文です。',
  memberships: [],
  session: {
    name: 'サンプルセッション',
    description: 'サンプルセッションの説明です。',
  },
  twitter: '',
}

// 現時点でスピーカーは未定です
export const speakers = []
