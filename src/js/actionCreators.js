import { actions } from './constants'

export const coursesFetchedRequested = () => ({
  type: actions.COURSES_FETCH_REQUESTED
})

export const coursesFetched = courses => ({
  type: actions.COURSES_FETCHED,
  courses
})

export const challengesFetchedRequested = () => ({
  type: actions.CHALLENGES_FETCH_REQUESTED
})

export const challengesFetched = challenges => ({
  type: actions.CHALLENGES_FETCHED,
  challenges
})

export const coursePicked = id => ({
  type: actions.COURSE_PICKED,
  id
})

export const challengePicked = id => ({
  type: actions.CHALLENGE_PICKED,
  id
})
