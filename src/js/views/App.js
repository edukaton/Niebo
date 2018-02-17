import Preact from 'preact'

import { connect } from 'react-redux'

import { coursesFetchedRequested } from '../actionCreators'


class App extends Preact.Component {
  componentDidMount() {
    this.props.actions.requestFetchCourses()
  }
  render() {
    const { courses } = this.props

    return (
      <div>
        {
          courses.map(course => (
            <div>{course.name}</div>
          ))
        }
      </div>
    )
  }
}


const mapStateToProps = state => ({
  courses: state.get('courses').toArray()
})

const mapActionsToProps = dispatch => ({
  actions: {
    requestFetchCourses: () => dispatch(coursesFetchedRequested())
  }
})

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App)
