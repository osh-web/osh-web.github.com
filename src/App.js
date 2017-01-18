import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton'
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import {red500, green500} from 'material-ui/styles/colors';

import EntryButton from './2017/components/EntryButton'
import './App.css';
import Seminar from './Seminar';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: red500,
        accent1Color: green500
    },
    appBar: {
        height: 50,
    },
});

class Hero extends Component {
    static style = {

    };

    render() {
       return (
           <Card style={{maxWidth: 460, marginTop: 20}}>
               <CardTitle
                   title="エンジニアがより良い社会を作れる!!"
                   subtitle="MAY THE ENGINEERING BE WITH YOU"
                   titleStyle={{fontSize: 20}} />

               <CardMedia overlay={<CardTitle title="オープンセミナー2017@広島" subtitle="2017年2月25日(土)" />} >
                   <img src="/img/2017_header.jpg" />
               </CardMedia>
               <CardActions>
                   <RaisedButton label="詳細情報" href="/2017/" />
                   <EntryButton />
               </CardActions>
           </Card>
       )
    }
}

const Bar = () => {
    return (
        <AppBar
            title="オープンセミナー広島"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            titleStyle={{fontSize: 20}}
        />
    );
};

const App = () => {
    const style = {
        display: 'flex',
        justifyContent: 'center',
    };
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <div className="App">
                <Bar />
                <div style={style}>
                    <Hero />
                </div>
                <p className="App-intro">
                </p>
                <Seminar/>
            </div>
        </MuiThemeProvider>
    );
};

export default App;
