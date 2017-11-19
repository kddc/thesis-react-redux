import { QUESTIONS_LOAD, QUESTIONS_LOAD_SUCCESS, QUESTIONS_LOAD_FAILURE } from '../actions/types'

const initalState = {
  loaded: false,
  loading: false,
  list: []
}

export default function messages(state = initalState, action = {}) {
  switch (action.type) {

    case QUESTIONS_LOAD:
      return { ...state, loading: true }
    case QUESTIONS_LOAD_SUCCESS:
      return { ...state, loaded: true, loading: false, list: action.payload }
    case QUESTIONS_LOAD_FAILURE:
      return { ...state, loaded: true, loading: false, list: [] }
    default:
      return state
  }
}
