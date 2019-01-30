// @flow
export type Sponsor = {
    name: string,
    key: string,
    url: string,
    banner: string,
}

export const orangesystem: Sponsor = {
    name: '株式会社 オレンジシステム広島',
    key: 'orangesystem',
    url: 'https://www.orange.co.jp/',
    banner: '/img/2019/orangesystem.svg',
}

export const cybozu: Sponsor = {
    name: 'サイボウズ株式会社',
    key: 'cyboz',
    url: 'https://cybozu.co.jp/',
    banner: '/img/2019/cybozu.svg',
}

export const dreamarts = {
    name: '株式会社ドリーム・アーツ',
    key: 'dreamarts',
    url: 'https://www.dreamarts.co.jp/',
    banner: '/img/2019/dreamarts.png',
}

export const platinum: Sponsor[] = [orangesystem, cybozu, dreamarts];

const shuaruta = {
    name: '株式会社シュアルタ',
    key: 'shuaruta',
    url: 'https://shuaruta.com/',
    banner: '/img/2019/shuaruta.svg',
};

export const gold: Sponsor[] = [shuaruta];

export const pmaj: Sponsor = {
    name: '日本プロジェクトマネジメント協会',
    key: 'pmaj',
    url: 'http://www.pmaj.or.jp/',
    banner: '/img/2018/pmaj.png',
}

export const nextvision: Sponsor = {
    name: '株式会社ネクストビジョン',
    key: 'nextvision',
    url: 'https://www.nextvision.co.jp/',
    banner: '/img/2018/nextvision.png',
}

export const silver: Sponsor[] = [pmaj, nextvision];


export const sponsors = { platinum, gold, silver };
