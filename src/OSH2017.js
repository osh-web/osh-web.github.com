// @flow
import h from 'react-hyperscript'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Subheader from 'material-ui/Subheader'
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {red500, green500} from 'material-ui/styles/colors'
import Markdown from 'react-markdown'
import CSSModules from 'react-css-modules';
import WindowEvent from './2017/containers/WindowEvent'

import './App.css'
import Hero from './2017/components/Hero'
import Speaker from './2017/containers/Speaker'
import SpeakerDetail from './2017/containers/SpeakerDetail'
import Sponsor from './2017/containers/Sponsor'
import { speakers } from 'toml!./2017/speaker.toml'
import infomation from 'raw-loader!./2017/table.html'
import tableStyles from './2017/table.css';
import Timetable from './2017/containers/Timetable'

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: red500,
        accent1Color: green500
    },
    appBar: {
        height: 50,
    },
});

const sponsors = [
    {
        url: 'http://www.orange.co.jp/',
        name: '株式会社オレンジシステム広島',
        image: '/img/orange_468.png',
        type: 'platinum',
    },
    {
        url: 'https://ex-cloud.jp/',
        name: 'エクスクラウド',
        image: '/img/ex-cloud.png',
        type: 'platinum',
    },
    {
        url: 'https://www.nextvision.co.jp/',
        name: '株式会社ネクストビジョン',
        image: '/img/nextvision_234.png',
        type: 'silver',
    }
];

const Sponsors = () => {
    const style = {
        textAlign: 'center'
    };
    return h('div', {style},
        sponsors.map((props) => { return h(Sponsor, props); })
    );
};

const Content = () => {
    let Speakers = speakers.map((speaker) => {
        return h(Speaker, {key: speaker.furi, ...speaker});
    });

    const centering = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    };

    const style = {
        marginTop: 80,
        marginBottom: 20,
        marginLeft: 5,
        marginRight: 5,
        ...centering
    };

    const subheaderStyle = {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 100,
        marginBottom: 100,
    };

    return h('div', {style}, [
        h(Hero, {style: {display: 'block', width: 640}}),
        h(Subheader, { style: subheaderStyle }, "Timetable"),
        h(Timetable),
        h(Subheader, { style: subheaderStyle }, "Speaker"),
        Speakers,
        h(Subheader, { style: subheaderStyle }, "Sponsor"),
        h(Sponsors),
        h(Subheader, { style: subheaderStyle }, "Infomation"),
        h(Paper, {style: {padding: "44px 24px", th: { textAlign: 'left' }} },
            h(CSSModules(Markdown, tableStyles), { className: tableStyles.root,  source: infomation }),
        )
        ]
    )
};

const Footer = () => {
    const style = {
        backgroundColor: muiTheme.palette.primary1Color,
        marginTop: 100,
        paddingTop: 20,
        paddingBottom: 20,
    };
    return h('div', {style}, [
        h('div', { style: { textAlign: 'center' } },
            h(FlatButton, {href: "/", color: 'white', label: "オープンセミナー広島", labelStyle: {color: 'white'} })
        ),
    ]);
};

const App = () => {
    return h(MuiThemeProvider, {muiTheme},
        h('div', [
                h(AppBar, {
                    title: "オープンセミナー2017@広島",
                    iconClassNameRight: "muidocs-icon-navigation-expand-more",
                    showMenuIconButton: false,
                    titleStyle: {'font-size': 16}
                }),
                h(Content),
                h(Footer),
                h(SpeakerDetail),
                h(WindowEvent)
            ]
        )
    );
};

export default App;
