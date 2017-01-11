import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import Subheader from 'material-ui/Subheader'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {red500, green500} from 'material-ui/styles/colors'

import './App.css'
import Hero from './2017/components/Hero'
import Speaker from './2017/components/Speaker'
import { speakers } from 'toml!./2017/speaker.toml'
import h from 'react-hyperscript'

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: red500,
        accent1Color: green500
    },
    appBar: {
        height: 50,
    },
});

const EntryButton = () => {
    return <RaisedButton label="申し込みする" href="https://osh.connpass.com/event/48114/" primary={true}/>
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
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 5,
        marginRight: 5,
        ...centering
    };

    return h('div', {style}, [
        h(Hero, {style: {display: 'block', width: 640}}),
        h(Subheader, "スピーカー"),
        Speakers

        ]
    )
};

const App = () => {
    return h(MuiThemeProvider, {muiTheme},
        h('div', [
                h(AppBar, {
                    title: "オープンセミナー2017@広島",
                    iconClassNameRight: "muidocs-icon-navigation-expand-more",
                    titleStyle: {'font-size': 16}
                }),
                h(Content)
            ]
        )
    );
};

export default App;
