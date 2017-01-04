import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red500, green500} from 'material-ui/styles/colors';
import {speakers} from 'toml!./2017/speaker.toml';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: red500,
        accent1Color: green500
    },
    appBar: {
        height: 50,
    },
});

const Hero = () => {
    return (
        <Card>
            <CardTitle title="エンジニアがより良い社会を作れる!!" subtitle="MAY THE ENGINEERING BE WITH YOU" />

            <CardMedia
                overlay={<CardTitle title="オープンセミナー2017@広島" subtitle="2017年2月25日(土)" />}
            >
                <img src="/img/2017_header.jpg" />
            </CardMedia>
            <CardText>
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
                <RaisedButton label="申し込みする" href="" primary={true}/>
            </CardActions>
        </Card>
        );
};

class Speaker extends Component {
    render() {
        const chip_style = {
            margin: 4,
        };

        let chips = this.props.tags.map((tag) => {
            return (
                <Chip style={chip_style}>{tag}</Chip>
            );
        });

        const style = {
            display: 'flex',
            flexWrap: 'wrap',
            paddingBottom: 14,
            paddingLeft: 10,
            paddingRight: 10,
        };

        return (
            <Card>
                <CardTitle
                    title={this.props.title}
                />
                <div style={style}>
                    {chips}
                </div>
                <CardHeader
                    title={this.props.name}
                    subtitle={this.props.furi}
                    avatar={this.props.avatar}
                />
            </Card>
        );
    }
};

class App extends Component {
    render() {
        let Speakers = speakers.map((speaker) => {
            return (<Speaker
                title={speaker.title}
                name={speaker.name}
                furi={speaker.furi}
                tags={speaker.tags}
                avatar={speaker.image}
            />);
        });

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <AppBar
                        title="オープンセミナー2017@広島"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        titleStyle={{'font-size': 16}}
                    />

                    <Hero />

                    <Subheader>スピーカー</Subheader>
                    {Speakers}


                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
