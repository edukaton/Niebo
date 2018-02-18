import Preact from 'preact'
import Story from './Story'
import Form from './Form'
import SumUp from './SumUp'
import { storyPart1, formPart1, storyPart2, formPart2 } from './constants'
import Button from '../../Button'

import './index.sass'


const views = {
  STORY_PART_1: 0,
  FORM_PART_1: 1,
  STORY_PART_2: 2,
  FORM_PART_2: 3,
  SUMMING_UP: 4
}

export default class StoryChallenge extends Preact.Component {
    state = {
      view: views.STORY_PART_1
    }
    previousView = () => {
      this.setState({ view: this.state.view - 1 })
    }
    nextView = () => {
      this.setState({ view: this.state.view + 1 })
    }
    renderView() {
      const { view } = this.state
      switch (view) {
        case views.STORY_PART_1:
          return <Story content={storyPart1} />
        case views.FORM_PART_1:
          return <Form content={formPart1} />
        case views.STORY_PART_2:
          return <Story content={storyPart2} />
        case views.FORM_PART_2:
          return <Form content={formPart2} />
        case views.SUMMING_UP:
          return <SumUp />
        default:
          return <p>No view for: {view}</p>
      }
    }
    render() {
      console.log(this.state.view === 0)
      return (
        <div className="story-challenge">
          <header className="story-challenge">
            <h1>Wyzwanie #2</h1>
            <h2>Przeczytaj artykuł i odpowiedz na pytania</h2>
          </header>
          {this.renderView()}
          <div className="btns-container">
            <Button onClick={this.previousView} disabled={this.state.view === 0}>Cofnij</Button>
            <Button onClick={this.nextView} disabled={this.state.view === Object.keys(views).length - 1}>Dalej</Button>
          </div>
        </div>
      )
    }
}
