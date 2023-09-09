

import React from 'react'
import universal, { setHasBabelPlugin } from '/Users/mmorito/develop/mmorito/osh-web.github.com/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('../node_modules/react-static/lib/browser/components/Default404'), universalOptions)
      t_0.template = '../node_modules/react-static/lib/browser/components/Default404'
      
const t_1 = universal(import('../src/pages/2018/index.js'), universalOptions)
      t_1.template = '../src/pages/2018/index.js'
      
const t_2 = universal(import('../src/pages/2019/index.js'), universalOptions)
      t_2.template = '../src/pages/2019/index.js'
      
const t_3 = universal(import('../src/pages/2020/index.js'), universalOptions)
      t_3.template = '../src/pages/2020/index.js'
      
const t_4 = universal(import('../src/pages/2022/index.js'), universalOptions)
      t_4.template = '../src/pages/2022/index.js'
      
const t_5 = universal(import('../src/pages/2023/index.js'), universalOptions)
      t_5.template = '../src/pages/2023/index.js'
      
const t_6 = universal(import('../src/pages/about.js'), universalOptions)
      t_6.template = '../src/pages/about.js'
      
const t_7 = universal(import('../src/pages/history.js'), universalOptions)
      t_7.template = '../src/pages/history.js'
      
const t_8 = universal(import('../src/pages/index.js'), universalOptions)
      t_8.template = '../src/pages/index.js'
      

// Template Map
export default {
  '../node_modules/react-static/lib/browser/components/Default404': t_0,
'../src/pages/2018/index.js': t_1,
'../src/pages/2019/index.js': t_2,
'../src/pages/2020/index.js': t_3,
'../src/pages/2022/index.js': t_4,
'../src/pages/2023/index.js': t_5,
'../src/pages/about.js': t_6,
'../src/pages/history.js': t_7,
'../src/pages/index.js': t_8
}
// Not Found Template
export const notFoundTemplate = "../node_modules/react-static/lib/browser/components/Default404"

