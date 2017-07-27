// @flow
import { RESIZE } from '../actions'

type State = {width: number, height: number}

const defaultState: State = {
  width: 640,
  height: 480
}

export default (state = defaultState, action: { type: string, value: State}) => {
    switch (action.type) {
        case RESIZE:
            return action.value;
        default:
            return state;
    }
}
