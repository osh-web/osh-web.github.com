// @flow
export type Sponsor = {
    name: string,
    key: string,
    url: string,
    banner: string,
}

export const platinum: Sponsor[] = [];

const shuaruta = {
    name: '株式会社シュアルタ',
    key: 'shuaruta',
    url: 'https://shuaruta.com/',
    banner: '/img/2019/shuaruta.svg',
};

export const gold: Sponsor[] = [shuaruta];

export const silver: Sponsor[] = [];


export const sponsors = [...platinum, ...gold, ...silver];
