import { ANSWERS_LOAD_SUCCESS } from './types'

export function answersLoad(questionId, answerIds) {
  return {
    'BAQEND': {
      type: {
        type: ANSWERS_LOAD_SUCCESS,
        payload: (answers) => ({
          questionId,
          answers,
        })
      },
      payload: (db) => db.Answer.find().ascending('createdAt').in('id', answerIds).limit(1).resultList()
    }
  }
}
