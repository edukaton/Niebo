import Preact from 'preact'
import { connect } from 'react-redux'

import { challengesFetchedRequested, challengePicked } from '../actionCreators'
import ChallengeLink from '../components/ChallengeLink'

class Course extends Preact.Component {
  componentDidMount() {
    this.props.actions.requestFetchChallenges()
  }

  renderChallenges() {
    const { challenges, actions } = this.props

    return challenges.map(
      ({ name, id, courseId }) =>
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
      <div>{this.renderChallenges()}</div>
    )
  }
}

const mapStateToProps = state => ({
  challenges: state.get('challenges').toArray()
})

const mapActionsToProps = dispatch => ({
  actions: {
    requestFetchChallenges: () => dispatch(challengesFetchedRequested()),
    pickChallenge: id => dispatch(challengePicked(id))
  }
})

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Course)
