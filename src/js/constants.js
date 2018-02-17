const createConstants = (...actions) => actions.reduce((acc, key) => ({ ...acc, [key]: key }), {})

export const actions = createConstants(
  'COURSES_FETCH_REQUESTED',
  'COURSES_FETCHED',
)
