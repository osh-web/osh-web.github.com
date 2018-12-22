// @flow strict
type Speaker = {
    furi: string,
    name: string,
    description: string,
    key: string,
    twitter?: string,
    github?: string,
    blog?: string,
    company: {
        name: string,
        uri: string,
    },
    title?: string[],
    session?: {
        name: string,
        description: string,
    },
}

export const tatsuo310: Speaker = {
    furi: 'さとう たつお',
    name: '佐藤 達男',
    key: 'tatsuo310',
    title: ['広島修道大学　経済科学部准教授', 'キャリアセンター長'],
    description: 'SIerとして数多くのシステム開発にプロジェクトマネジャーとして参画し、人事課長、技術部長、PM部長などを経た後、フィールドを大学に移し、現在に至る。技術経営、UX/HCD、アジャイル、プロジェクトマネジメントなどを領域横断的にカバーし、新たな価値創造型のマネジメントをテーマに研究活動を展開している。著書に「プロジェクトマネージャ育成法」（日科技連出版社）ほか。Ph.D.,PMP, PMS,CSPO, CSM',
    company: {
        name: '広島修道大学',
        uri: 'http://www.shudo-u.ac.jp/',
    },
}
