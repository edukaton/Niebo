import Preact from 'preact'
import { connect } from 'react-redux'
import StoryChallenge from '../components/Challenges/StoryChallenge'

const Challenge = ({ type }) => {
  switch (type) {
    case 'type2':
      return <StoryChallenge />
    default:
      return <p>No matching challenge for type: {type}</p>
  }
}

const mapStateToProps = state => ({
  type: state.get('challengeType')
})

export default connect(
  mapStateToProps
)(Challenge)
