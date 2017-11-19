import { ANSWERS_LOAD, ANSWERS_LOAD_SUCCESS, ANSWERS_LOAD_FAILURE } from '../actions/types'

const initalState = {
  loaded: false,
  loading: false,
}

export default function answers(state = initalState, action = {}) {
  switch (action.type) {

    case ANSWERS_LOAD:
      return { ...state, loading: true }
    case ANSWERS_LOAD_SUCCESS:
      const { questionId, answers } = action.payload
      return { ...state, [questionId]: answers }
    case ANSWERS_LOAD_FAILURE:
      return { ...state, loaded: true, loading: false, list: [] }
    default:
      return state
  }
}
