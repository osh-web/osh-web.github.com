// @flow
import { SPEAKER_DETAIL } from '../actions'

export default (state = 'none', action: { type: string, value: string}) => {
    switch (action.type) {
        case SPEAKER_DETAIL:
            return action.value;
        default:
            return state;
    }
}
