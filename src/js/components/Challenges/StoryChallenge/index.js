import Preact from 'preact'
import Story from './Story'
import Form from './Form'
import SumUp from './SumUp'
import { storyPart1, formPart1, storyPart2, formPart2 } from './constants'
import Button from '../../Button'

import './index.sass'


const views = {
  PART_1: 0,
  PART_2: 1,
  SUMMING_UP: 2
}

export default class StoryChallenge extends Preact.Component {
    state = {
      view: views.PART_1
    }
    previousView = () => {
      window.scrollTo(0, 0)
      this.setState({ view: this.state.view - 1 })
    }
    nextView = () => {
      window.scrollTo(0, 0)
      this.setState({ view: this.state.view + 1 })
    }
    renderView() {
      const { view } = this.state
      switch (view) {
        case views.PART_1:
          return (
            <div>
              <Story content={storyPart1} />
              <Form content={formPart1} index={this.state.view} />
            </div>)
        case views.PART_2:
          return (
            <div>
              <Story content={storyPart2} />
              <Form content={formPart2} index={this.state.view} />
            </div>)
        case views.SUMMING_UP:
          return <SumUp />
        default:
          return <p>No view for: {view}</p>
      }
    }
    render() {
      return (
        <div className="story-challenge">
          <header className="story-challenge">
            <h4>{this.state.view !== views.SUMMING_UP ? 'Przeczytaj artykuł i odpowiedz na pytania' : 'Podsumowanie zadania:'}</h4>
          </header>
          {this.renderView()}
          <div className="btns-container">
            <Button onClick={this.previousView} disabled={this.state.view === 0}>Cofnij</Button>
            <Button
              onClick={this.nextView}
              disabled={this.state.view === Object.keys(views).length - 1}
            >
            Dalej
            </Button>
          </div>
        </div>
      )
    }
}
