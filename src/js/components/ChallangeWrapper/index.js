import Preact from 'preact'
import './index.sass'

const ChallengeWrapper = ({
  children, id = 1, prevBtnDisabled, nextBtnDisabled, prevBtnCb, nextBtnCb
}) => (
  <div className="challenge">
    <h1>Wyzwanie #{id}</h1>
    <div className="challenge--nav-container">
      <button className="prev" disabled={prevBtnDisabled} onClick={prevBtnCb}>Poprzednie wyzwanie</button>
      <div className="challenge--container">
        {children}
      </div>
      <button className="next" disabled={nextBtnDisabled} onClick={nextBtnCb}>Kolejne wyzwanie</button>
    </div>
  </div>
)

export default ChallengeWrapper