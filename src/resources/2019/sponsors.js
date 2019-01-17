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

export const platinum: Sponsor[] = [orangesystem, cybozu];

const shuaruta = {
    name: '株式会社シュアルタ',
    key: 'shuaruta',
    url: 'https://shuaruta.com/',
    banner: '/img/2019/shuaruta.svg',
};

export const gold: Sponsor[] = [shuaruta];

export const silver: Sponsor[] = [];


export const sponsors = { platinum, gold, silver };
