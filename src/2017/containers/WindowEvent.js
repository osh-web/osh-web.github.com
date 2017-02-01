// @flow
import { connect } from 'react-redux'
import EventListener from 'react-event-listener';

import { resize } from '../actions'

const mapStateToProps = (state, ownProps) => {
    return {
        target: window
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onResize: () => {
            return dispatch(resize(window.innerWidth, window.innerHeight));
        }
    }
};

const ResizeEvent = connect(mapStateToProps, mapDispatchToProps)(EventListener);

export default ResizeEvent
