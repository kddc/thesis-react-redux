import { AUTHOR_LOAD, AUTHOR_LOAD_SUCCESS } from '../actions/types'

const initalState = {}

export default function authors(state = initalState, action = {}) {
  switch (action.type) {
    case AUTHOR_LOAD:
      return { ...state, [action.payload.id]: {} }
    case AUTHOR_LOAD_SUCCESS:
      return { ...state, [action.payload.id]: action.payload }
    default:
      return state
  }
}
