import Preact from 'preact'

const views = {
  STORY_PART_1: 0,
  FORM_PART_1: 1,
  STORY_PART_2: 2,
  FORM_PART_2: 3
}

export default class StoryChallenge extends Preact.Component {
    state = {
      view: views.STORY_PART_1
    }
    render() {
      return (
        <div>
      StoryChallenge: {this.state.view}
        </div>
      )
    }
}
