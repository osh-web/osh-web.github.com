// @flow
import React from 'react'
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import EntryButton from './EntryButton'


export default () => {
    return (
        <Card style={{maxWidth: 640}}>
            <CardTitle title="エンジニアがより良い社会を作れる!!" subtitle="MAY THE ENGINEERING BE WITH YOU" />

            <CardMedia
                overlay={<CardTitle title="オープンセミナー2017@広島" subtitle="2017年2月25日(土) 10時開始予定" />}
            >
                <img src="/img/2017_header.jpg" role="presentation"/>
            </CardMedia>
            <CardText>
                <h1>エンジニアがより良い社会を作れる!!<br /><span style={{fontSize: -2, color: '#999'}}>MAY THE ENGINEERING BE WITH YOU</span></h1>
                <p>
                    「人」や「モノ」あらゆるモノコトがネットに繋がるようになり、近年 ICT：Information and Communication Technology(インフォメーション・アンド・コミュニケーション・テクノロジー)やIoT：Internet of Things（モノのインターネット）といったキーワードも至る所で見聞きするようになってきました。
                </p>
                <p>

                    ITサービスやスマートフォンアプリを利用するコトが当たり前になりつつある今〜将来「エンジニアに求められるコト」はどんな事でしょう。
                </p>
                <p>
                    スマートシティやシビックテック、オープンデータといった「より生活に近いところ」でのエンジニアリングも日本国内で広まりつつあります。
                    エンジニアスキルを活用して「みんなに使ってもらえるサービス」「みんなの課題解決に繋がるサービス」「社会に役立つサービス」ってどのようなモノが有るんでしょうか。
                </p>
                <p>
                    エンジニアが自身のスキルを活かすコトで、より素敵なエンジニアリングライフを送るためには。
                    そういった事について様々な観点で登壇者の話を聞く中で考えを巡らしたり、気づきを他の人と共有したり、自身の現場に持ち帰ってチャレンジしてみてください。
                </p>
            </CardText>
            <CardActions>
                <EntryButton />
            </CardActions>
        </Card>
    );
};
