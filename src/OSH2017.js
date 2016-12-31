import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import AppBar from 'material-ui/AppBar';
import Seminar from './Seminar';
import Paper from 'material-ui/Paper';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red500, green500} from 'material-ui/styles/colors';

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
           <Paper zDepth={0} style={{margin: "100px 10px"}}>
               <h1 style={{'color': muiTheme.palette.accent1Color, 'font-size': 21}}>
                   オープンセミナー2017@広島
               </h1>
               <h2 style={{'font-size': 18, 'color': muiTheme.palette.accent1Color}}>2017年2月25日(土) 開催決定</h2>
           </Paper>
       )
    }
}



class App extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div className="App">
                    <AppBar
                        title="オープンセミナー2017@広島"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        titleStyle={{'font-size': 20}}
                    />
                    <Hero />
                    <p className="App-intro">
                    </p>
                    <Seminar/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
