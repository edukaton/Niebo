import Preact from 'preact'

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
        <div className="post">
          <div className="post-author">
            <img className="author-img" src="https://www.thesun.co.uk/wp-content/uploads/2017/03/nintchdbpict000139419726.jpg?strip=all&w=871" />
            <span className="author-name">Ania</span>
          </div>
          <div className="post-content">Hej, piszę artykuł do gazetki szkolnej, chciałabym dowiedzieć się od was co sądzicie o najnowszych "Gwiezdnych Wojnach"?</div>
        </div>
        <div className="comments">
          <div className="comments-name">Komentarze:</div>
          <div className="comment">
            <div className="comment-author">Jacek</div>
            <div className="comment-content">Jak dla mnie super! Świetna historia.</div>
          </div>
          <div className="comment">
            <div className="comment-author">Tomek</div>
            <div
              className={commentContentClass}
              contentEditable={contenteditable}
              ref={setModerateCommentRef}
              onInput={compareComments}
              onDblClick={moderateComment}
            >{moderatedCommentContent}
            </div>
          </div>
          <div className="comment">
            <div className="comment-author">Grzegorz</div>
            <div className="comment-content">Jako fan GW stwierdzam, że film jest beznadziejny. Jak nigdy chciałem z niego wyjść. Bez fabuły, emocji, tego, co było mocną stroną tej serii. Może dlatego, że robił go Disney i zrobili chłam dla dzieci. Filmu nie polecam, chociaż fani tacy jak ja, na pewno go nie odpuszczą - i na to chyba liczyli jego twórcy. Szok i niedowierzanie.
            </div>
          </div>
        </div>
        <div className="complete-modal">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arbcom_ru_ready.svg/2000px-Arbcom_ru_ready.svg.png" className="complete-modal__badge" />
        </div>
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
