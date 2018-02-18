import Preact from 'preact'
import './index.sass'
import MainContainer from './Components/MainContainer'

class CommentModeration extends Preact.Component {
  state = {
    disableCheckButton: true,
    disableModerateButton: false,
    contenteditable: false,
    moderatedCommentContent: 'Film to dno! Każdy kto sądzi inaczej jest głupi i powinien wrócić do przedszkola. Nie podobało mi się jak twórcy liczyli na naiwność widza.',
    approved: false,
    threadComplete: false
  }

  setModerateCommentRef = (ref) => {
    this.moderateCommentRef = ref
  }

  moderateComment = () => {
    this.setState({
      disableModerateButton: true,
      contenteditable: true
    }, () => {
      this.moderateCommentRef.focus()
    })
  }

  compareComments = () => {
    const { innerText } = this.moderateCommentRef
    const contentAfterModeration = 'Film to dno! Nie podobało mi się jak twórcy liczyli na naiwność widza.'

    this.setState({
      moderatedCommentContent: innerText
    })

    if (innerText.replace(/\s/g, '') === contentAfterModeration.replace(/\s/g, '')) {
      this.setState({
        disableCheckButton: false,
        approved: true
      })
    } else {
      this.setState({
        disableCheckButton: true,
        approved: false
      })
    }
  }

  checkModeratedComment = () => {
    this.setState({
      disableCheckButton: true,
      contenteditable: false,
      threadComplete: true
    })
  }

  render() {
    const {
      disableCheckButton,
      disableModerateButton,
      contenteditable,
      moderatedCommentContent,
      approved,
      threadComplete
    } = this.state

    return (
      <MainContainer
        disableCheckButton={disableCheckButton}
        disableModerateButton={disableModerateButton}
        contenteditable={contenteditable}
        moderatedCommentContent={moderatedCommentContent}
        approved={approved}
        threadComplete={threadComplete}
        moderateComment={this.moderateComment}
        checkModeratedComment={this.checkModeratedComment}
        setModerateCommentRef={this.setModerateCommentRef}
        compareComments={this.compareComments}
      />
    )
  }
}

export default CommentModeration
