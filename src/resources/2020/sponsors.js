// @flow
export type Sponsor = {
    name: string,
    key: string,
    url: string,
    banner: string,
}

export const cybozu: Sponsor = {
    name: 'サイボウズ株式会社',
    key: 'cyboz',
    url: 'https://cybozu.co.jp/',
    banner: '/img/2020/cybozu.svg',
}

export const test: Sponsor = {
    name: '株式会社てすと',
    key: 'test',
    url: 'https://tesuto.jp/',
    banner: '/img/2020/test.png',
}

export const pmaj: Sponsor = {
    name: '日本プロジェクトマネジメント協会',
    key: 'pmaj',
    url: 'http://www.pmaj.or.jp/',
    banner: '/img/2020/pmaj.png',
}

// export const orangesystem: Sponsor = {
//     name: '株式会社 オレンジシステム広島',
//     key: 'orangesystem',
//     url: 'https://www.orange.co.jp/',
//     banner: '/img/2020/orangesystem.svg',
// }

// export const dreamarts = {
//     name: '株式会社ドリーム・アーツ',
//     key: 'dreamarts',
//     url: 'https://www.dreamarts.co.jp/',
//     banner: '/img/2020/dreamarts.png',
// }

// export const nextvision: Sponsor = {
//     name: '株式会社ネクストビジョン',
//     key: 'nextvision',
//     url: 'https://www.nextvision.co.jp/',
//     banner: '/img/2020/nextvision.png',
// }

export const platinum: Sponsor[] = [cybozu, test];
export const gold: Sponsor[] = [];
export const silver: Sponsor[] = [pmaj];
export const sponsors = { platinum, gold, silver };
