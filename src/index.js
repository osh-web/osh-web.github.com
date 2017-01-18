import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import App from './App';
import OSH2017 from './OSH2017';
import './index.css';
import reducer from './2017/reducers';


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const root = document.getElementById('root');
if (root) {
    ReactDOM.render(
        <App />, root
    );
}

const osh2017 = document.getElementById('osh2017');
if (osh2017) {
    ReactDOM.render(
        <Provider store={store}>
            <OSH2017 />
        </Provider>,
        osh2017
    )
}
