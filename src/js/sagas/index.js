import { takeLatest, put, call } from 'redux-saga/effects'
import { actions } from '../constants'
import { coursesFetched } from '../actionCreators'

const fetchJson = async (...args) => {
  const res = await fetch(...args)
  return res.json()
}

function* fetchCourses() {
  const courses = yield call(fetchJson, 'http://localhost:3000/courses')

  yield put(coursesFetched(courses))
}

export default function* rootSaga() {
  yield takeLatest(actions.COURSES_FETCH_REQUESTED, fetchCourses)
}
