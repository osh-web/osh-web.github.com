import { RESIZE } from '../actions'

export default (state={width: window.innerWidth, height: window.innerHeight}, action) => {
    switch (action.type) {
        case RESIZE:
            return action.value;
        default:
            return state;
    }
}