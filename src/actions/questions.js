import { QUESTIONS_LOAD, QUESTIONS_LOAD_SUCCESS, QUESTIONS_LOAD_FAILURE } from './types'

export function questionsLoad(args) {
  return {
    'BAQEND': {
      types: [
        QUESTIONS_LOAD,
        QUESTIONS_LOAD_SUCCESS,
        QUESTIONS_LOAD_FAILURE
      ],
      payload: (db) => db.Question.find().descending('upvotes').resultList()
    }
  }
}
