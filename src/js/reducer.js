import { Map, List } from 'immutable'
import { actions } from './constants'


const defaultState = Map({
  coursesLoading: false,
  courses: List(),
  challengesLoading: false,
  challenges: List(),
  courseId: null,
  challengeId: null
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.COURSES_FETCH_REQUESTED:
      return state.set('coursesLoading', false)
    case actions.COURSES_FETCHED:
      return state.set('courses', List(action.courses))
    case actions.CHALLENGES_FETCH_REQUESTED:
      return state.set('challengesLoading', true)
    case actions.CHALLENGES_FETCHED:
      return state.set('challenges', List(action.challenges))
    case actions.COURSE_PICKED:
      return state.set('courseId', action.id)
    case actions.CHALLENGE_PICKED:
      return state.set('challengeId', action.id)
    default:
      return state
  }
}

export default reducer
