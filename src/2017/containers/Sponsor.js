import { connect } from 'react-redux'
import Sponsor from '../components/Sponsor'

const mapStateToProps = (state, ownProps) => {
    const margin = 40;
    return {
        ...ownProps,
        width: state.window.width < 468 + margin ? state.window.width - margin : 468
    };
};

export default connect(mapStateToProps, null)(Sponsor);
