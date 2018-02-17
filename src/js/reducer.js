import { Map, List } from 'immutable'
import { actions } from './constants'


const defaultState = Map({
  loading: false,
  courses: List()
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.COURSES_FETCH_REQUESTED:
      return state.set('loading', false)
    case actions.COURSES_FETCHED:
      return state.set('courses', List(action.courses))
    default:
      return state
  }
}

export default reducer
