// @flow
import { connect } from 'react-redux'
import Speaker from '../components/Speaker'
import { speakerDetail } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return ownProps;
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onShowDetail: () => {
            return dispatch(speakerDetail(ownProps.id));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Speaker);
