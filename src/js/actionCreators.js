import { actions } from './constants'

export const coursesFetchedRequested = () => ({
  type: actions.COURSES_FETCH_REQUESTED
})

export const coursesFetched = courses => ({
  type: actions.COURSES_FETCHED,
  courses
})
