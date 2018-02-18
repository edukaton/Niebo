import Preact from 'preact'

import Post from './Post'
import CompleteModal from './CompleteModal'

class Thread extends Preact.Component {
  renderThread() {
    const {
      contenteditable,
      moderatedCommentContent,
      setModerateCommentRef,
      compareComments,
      approved,
      threadComplete,
      moderateComment
    } = this.props

    const threadCompleteClass = threadComplete ? 'thread thread--complete' : 'thread'
    const commentContentClass = approved ? 'comment-content approved' : 'comment-content';

    return (
      <div className={threadCompleteClass} id="thread">
        <Post />
        <div className="comments">
          <div className="comments-name">Komentarze:</div>
          <div className="comment">
            <div className="comment-author">Jacek</div>
            <div className="comment-content">Jak dla mnie super 💪💗 Świetna historia.</div>
          </div>
          <div className="comment">
            <div className="comment-author">Tomek</div>
            <div
              className={commentContentClass}
              contentEditable={contenteditable}
              ref={setModerateCommentRef}
              onInput={compareComments}
              onDblClick={moderateComment}
            >
              {moderatedCommentContent}
            </div>
          </div>
          <div className="comment">
            <div className="comment-author">Grzegorz</div>
            <div className="comment-content">Jako fan GW stwierdzam, że film jest beznadziejny 💔😢. Jak nigdy chciałem z niego wyjść. Bez fabuły, emocji, tego, co było mocną stroną tej serii. Może dlatego, że robił go Disney i zrobili chłam dla dzieci. Filmu nie polecam, chociaż fani tacy jak ja, na pewno go nie odpuszczą - i na to chyba liczyli jego twórcy. Szok i niedowierzanie.
            </div>
          </div>
        </div>
        <CompleteModal />
      </div>
    )
  }

  render() {
    return (
      <div>{this.renderThread()}</div>
    )
  }
}

export default Thread
