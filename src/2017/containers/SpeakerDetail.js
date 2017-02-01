// @flow
import { connect } from 'react-redux'
import SpeakerDetail from '../components/SpeakerDetail'
import { speakerDetail } from '../actions'
import { speakers } from 'toml!../speaker.toml'

const speakerObject = speakers.reduce((acc, speaker) => {
  return {
    ...acc,
    [speaker.id]: speaker,
  };
}, {})

const mapStateToProps = (state, ownProps) => {
  const speaker = speakerObject[state.speakerDialog] || {};
  return {
    ...speaker,
    ...ownProps,
    open: state.speakerDialog !== 'none'
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      onRequestClose: () => {
        return dispatch(speakerDetail('none'));
      }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(SpeakerDetail);
