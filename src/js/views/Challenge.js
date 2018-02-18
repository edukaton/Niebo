import Preact from 'preact'
import { connect } from 'react-redux'
import StoryChallenge from '../components/Challenges/StoryChallenge'
import CommentModeration from '../components/Challenges/CommentModeration'
import FakeNewsChecklist from '../components/Challenges/FakeNewsChecklist'
import FakePromoChallenge from '../components/Challenges/FakePromoChallenge'
import ChallengeWrapper from '../components/ChallangeWrapper'
import { challengePicked } from '../actionCreators';

function renderChallenge(type) {
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

const Challenge = ({
  type, id, challengesCount, actions
}) => (
  <ChallengeWrapper
    id={id}
    prevBtnDisabled={id === 1}
    nextBtnDisabled={id === challengesCount}
    prevBtnCb={() => actions.previousChallenge(id)}
    nextBtnCb={() => actions.nextChallenge(id)}
  >
    {renderChallenge(type)}
  </ChallengeWrapper>
)

const mapStateToProps = state => ({
  type: state.get('challengeType'),
  id: state.get('challengeId'),
  challengesCount: state.get('challenges').size
})

const mapActionsToProps = dispatch => ({
  actions: {
    previousChallenge: id => dispatch(challengePicked(id - 1)),
    nextChallenge: id => dispatch(challengePicked(id + 1))
  }
})

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Challenge)
