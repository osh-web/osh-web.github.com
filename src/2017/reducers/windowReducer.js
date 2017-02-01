// @flow
import { RESIZE } from '../actions'

type State = {width: number, height: number}

const defaultState: State = {
  width: window.innerWidth,
  height: window.innerHeight
}

export default (state = defaultState, action: { type: string, value: State}) => {
    switch (action.type) {
        case RESIZE:
            return action.value;
        default:
            return state;
    }
}
