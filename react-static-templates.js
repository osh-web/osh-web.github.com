
import universal, { setHasBabelPlugin } from '/Users/cw-himura/ghq/github.com/osh-web/osh-web.github.com/node_modules/react-universal-component/dist/index.js'


setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
}

const t_0 = universal(import('../node_modules/react-static/lib/browser/components/Default404'), universalOptions)
const t_1 = universal(import('../src/pages/2018/Home.js'), universalOptions)
const t_2 = universal(import('../src/pages/About.js'), universalOptions)
const t_3 = universal(import('../src/pages/History.js'), universalOptions)
const t_4 = universal(import('../src/pages/Home.js'), universalOptions)
const t_5 = universal(import('../src/pages/Home'), universalOptions)
const t_6 = universal(import('../src/pages/2018/Home'), universalOptions)
const t_7 = universal(import('../src/pages/About'), universalOptions)
const t_8 = universal(import('../src/pages/History'), universalOptions)


// Template Map
export default [
  t_0,
t_1,
t_2,
t_3,
t_4,
t_5,
t_6,
t_7,
t_8
]
