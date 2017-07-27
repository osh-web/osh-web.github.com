// @flow
import { connect } from 'react-redux'
import EventListener from 'react-event-listener';

import { resize } from '../actions'

const mapStateToProps = (state, ownProps) => {
    return {
        target: this
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onResize: () => {
            return dispatch(resize(this.innerWidth, this.innerHeight));
        }
    }
};

const ResizeEvent = connect(mapStateToProps, mapDispatchToProps)(EventListener);

export default ResizeEvent
