import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import OSH2017 from './../../OSH2017';
import reducer from './../../2017/reducers';

const store = createStore(reducer);

export default () =>
  <Provider store={store}>
    <OSH2017 />
  </Provider>
