import Preact from 'preact'
import { connect } from 'react-redux'

import { challengesFetchedRequested } from '../actionCreators'
import Challenge from './Challenge'

class Course extends Preact.Component {
  componentDidMount() {
    this.props.actions.requestFetchChallenges()
  }

  renderChallenges() {
    return this.props.challenges.map(({ title, id }) => <Challenge id={id} title={title} />)
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
    requestFetchChallenges: () => dispatch(challengesFetchedRequested())
  }
})

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Course)
