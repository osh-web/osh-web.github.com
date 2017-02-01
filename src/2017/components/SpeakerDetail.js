// @flow
import h from 'react-hyperscript'
import Markdown from 'react-markdown'
import Dialog from 'material-ui/Dialog';

import { Github, Twitter, Facebook} from './SNSLinkButton'

const toUl = (links: {name: string, href: string}[], title) => {
  return [
    h('h1', {}, title),
    h('ul', {}, links.map(({name, href}) => {
      return h('li', {}, h('a', {href}, name))
    }))
  ];
}

const SpeakerDetail = ({open, title, name, furi, description, profile, image, github, twitter, facebook, links, oraganizatinos, sessions, onRequestClose}) => {
  const raw_title = title && title.replace('\\', '');
  const contentStyle = {
    width: '95%',
    maxWidth: 'none',
  };
  return h(Dialog, {
    title: raw_title,
    modal: false,
    open,
    contentStyle,
    onRequestClose,
    autoScrollBodyContent: true,
  },[
    h('h1', {}, 'セッション内容'),
    h(Markdown, {source: description}),
    h('h1', {}, [
      name,
      h('span', { style: {fontSize: 16, fontWeight: 'normal', marginLeft: '10px'} } , furi),
    ]),
    h('img', {
      src: image ? image : '/img/2017_no_image@2x.jpg',
      role: "presentation",
      width: 200
     }),
     h('br'),
     github ? h(Github, {github}) : null,
     twitter ? h(Twitter, {twitter}) : null,
     facebook ? h(Facebook, {facebook}): null,
     h(Markdown, {source: profile}),
     links ? toUl(links, 'ブログなど') : null,
     oraganizatinos ? toUl(oraganizatinos, '所属組織') : null,
     sessions ? toUl(sessions, '登壇履歴') : null,
  ]);
}

export default SpeakerDetail
