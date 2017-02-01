// @flow
import h from 'react-hyperscript'
import Markdown from 'react-markdown'
import Dialog from 'material-ui/Dialog';


const SpeakerDetail = ({open, title, name, description, profile, onRequestClose}) => {
  return h(Dialog, {
    title: `${title} ${name}`,
    modal: false,
    open,
    onRequestClose,
    autoScrollBodyContent: true,
  },[
    h('h1', {}, 'セッション内容'),
    h(Markdown, {source: description}),
    h('h1', {}, 'プロフィール'),
    h(Markdown, {source: profile}),
  ]);
}

export default SpeakerDetail
