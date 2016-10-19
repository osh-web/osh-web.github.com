import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';
import AppBar from 'material-ui/AppBar';
import Seminar from './Seminar';


class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <div className="Header">
                        <AppBar
                            title="オープンセミナー広島"
                            iconClassNameRight="muidocs-icon-navigation-expand-more"
                        />
                    </div>
                    <div className="Hero">
                        <h1>オープンセミナー2017@広島 <br />「市民目線」</h1>
                        <h2>2017年2月25日(土) 開催決定</h2>
                    </div>
                    <p className="App-intro">
                    </p>
                    <Seminar/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
