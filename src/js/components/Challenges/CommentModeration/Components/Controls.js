import Preact from 'preact'

const Controls = ({
  disableCheckButton,
  disableModerateButton,
  moderateComment,
  checkModeratedComment
}) => (
  <div className="controls-container">
    <button
      className="btn moderate-btn"
      disabled={disableModerateButton}
      onClick={moderateComment}
    >
      Zacznij edycję
    </button>
    <button
      className="btn next-btn"
      disabled={disableCheckButton}
      onClick={checkModeratedComment}
    >
      Sprawdź
    </button>
  </div>
)

export default Controls
