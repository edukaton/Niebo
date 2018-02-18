import Preact from 'preact'
import { connect } from 'react-redux'

import { challengesFetchedRequested, challengePicked } from '../actionCreators'
import ChallengeLink from '../components/ChallengeLink'
import CourseWrapper from '../components/CourseWrapper'

class Course extends Preact.Component {
  componentDidMount() {
    this.props.actions.requestFetchChallenges()
  }

  renderChallenges() {
    const { challenges, actions } = this.props

    return challenges.map(
      ({
        name, id, courseId
      }) =>
        (<ChallengeLink
          id={id}
          courseId={courseId}
          name={name}
          onClick={() => actions.pickChallenge(id)}
        />)
    )
  }

  render() {
    return (
      <CourseWrapper>{this.renderChallenges()}</CourseWrapper>
    )
  }
}

const mapStateToProps = state => ({
  challenges: state.get('challenges').toArray()
})

const mapActionsToProps = dispatch => ({
  actions: {
    requestFetchChallenges: () => dispatch(challengesFetchedRequested()),
    pickChallenge: (...args) => dispatch(challengePicked(...args))
  }
})

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Course)
