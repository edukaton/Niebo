import Preact from 'preact'
import Thread from './Thread'

const MainContainer = ({
  disableCheckButton,
  disableModerateButton,
  contenteditable,
  moderatedCommentContent,
  approved,
  threadComplete,
  moderateComment,
  checkModeratedComment,
  setModerateCommentRef,
  compareComments
}) => (
  <div className="container">
    <div className="headers-container" id="headersContainer">
      <h4>{!threadComplete ? 'Usuń fragment komentarza obrażający odbiorcę.' : 'Gratulacje!'}</h4>
    </div>
    <Thread
      contenteditable={contenteditable}
      moderatedCommentContent={moderatedCommentContent}
      approved={approved}
      threadComplete={threadComplete}
      setModerateCommentRef={setModerateCommentRef}
      compareComments={compareComments}
      moderateComment={moderateComment}
    />
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
  </div>
)

export default MainContainer
