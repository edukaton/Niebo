import Preact from 'preact'
import { connect } from 'react-redux'
import StoryChallenge from '../components/Challenges/StoryChallenge'
import CommentModeration from '../components/Challenges/CommentModeration'
import FakeNewsChecklist from '../components/Challenges/FakeNewsChecklist'
import FakePromoChallenge from '../components/Challenges/FakePromoChallenge'

const Challenge = ({ type }) => {
  switch (type) {
    case 'comment_moderation':
      return <CommentModeration />
    case 'story_challenge':
      return <StoryChallenge />
    case 'fake_news_checklist':
      return <FakeNewsChecklist />
    case 'fake_promo_challenge':
      return <FakePromoChallenge />
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
