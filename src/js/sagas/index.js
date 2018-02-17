import { takeLatest, put, call, select } from 'redux-saga/effects'
import { actions } from '../constants'
import { challengesFetched, coursesFetched } from '../actionCreators'

const BASE_URL = 'http://localhost:3000'

const fetchJson = async (...args) => {
  const res = await fetch(...args)
  return res.json()
}

function* fetchCourses() {
  const courses = yield call(fetchJson, `${BASE_URL}/courses`)

  yield put(coursesFetched(courses))
}

function* fetchChallenges() {
  const courseId = yield select(_ => _.get('courseId'))
  const challenges = yield call(fetchJson, `${BASE_URL}/courses/${courseId}/challenges`)

  yield put(challengesFetched(challenges))
}

export default function* rootSaga() {
  yield takeLatest(actions.COURSES_FETCH_REQUESTED, fetchCourses)
  yield takeLatest(actions.CHALLENGES_FETCH_REQUESTED, fetchChallenges)
}
