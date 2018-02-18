import Preact from 'preact'
import { connect } from 'react-redux'
import CourseLink from '../components/CourseLink'
import LandingPageWrapper from '../components/LandingPageWrapper'
import { coursesFetchedRequested, coursePicked } from '../actionCreators'

class LandingPage extends Preact.Component {
  componentDidMount() {
    this.props.actions.requestFetchCourses()
  }

  renderCourses() {
    const { courses, actions } = this.props

    return courses.map(
      ({ id, name }) =>
        <CourseLink id={id} name={name} onClick={() => actions.pickCourse(id)} />
    )
  }

  render() {
    return (
      <LandingPageWrapper>{this.renderCourses()}</LandingPageWrapper>
    )
  }
}

const mapStateToProps = state => ({
  courses: state.get('courses').toArray()
})

const mapActionsToProps = dispatch => ({
  actions: {
    requestFetchCourses: () => dispatch(coursesFetchedRequested()),
    pickCourse: id => dispatch(coursePicked(id))
  }
})

export default connect(
  mapStateToProps,
  mapActionsToProps
)(LandingPage)
