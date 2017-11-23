import { AUTHOR_LOAD, AUTHOR_LOAD_SUCCESS } from './types'

export function authorLoad(id) {
  return {
    'BAQEND': {
      types: [
        {
          type: AUTHOR_LOAD,
          payload: { id: id }
        },
        AUTHOR_LOAD_SUCCESS
      ],
      payload: (db) => (id && db.User.load(id)) || new Promise((resolve) => resolve({}))
    }
  }
}
