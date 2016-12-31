import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import OSH2017 from './OSH2017';
import './index.css';

const root = document.getElementById('root');
if (root) {
    ReactDOM.render(
        <App />, root
    );
}

const osh2017 = document.getElementById('osh2017');
if (osh2017) {
    ReactDOM.render(
        <OSH2017 />, osh2017
    )
}
