import Preact from 'preact'
import Story from './Story'
import Form from './Form'
import SumUp from './SumUp'
import { story, form } from './constants'
import Button from '../../Button'

import './index.sass'


const views = {
  STORY: 0,
  SUMMING_UP: 1
}

export default class StoryChallenge extends Preact.Component {
    state = {
      view: views.STORY,
      canNext: false
    }
    previousView = () => {
      this.setState({ view: this.state.view - 1 })
    }
    nextView = () => {
      this.setState({ view: this.state.view + 1 })
    }
    allowNext = () => {
      this.setState({ canNext: true })
    }
    disallowNext = () => {
      this.setState({ canNext: false })
    }
    renderView() {
      const { view } = this.state
      switch (view) {
        case views.STORY:
          return (
            <div>
              <Story content={story} />
              <Form content={form} allowNext={this.allowNext} disallowNext={this.disallowNext} />
            </div>)
        case views.SUMMING_UP:
          return <SumUp />
        default:
          return <p>No view for: {view}</p>
      }
    }
    render() {
      return (
        <div className="fake-news-checklist">
          {this.renderView()}
          <div className="btns-container">
            <Button onClick={this.previousView} disabled={this.state.view === 0}>Cofnij</Button>
            <Button onClick={this.nextView} disabled={this.state.view === Object.keys(views).length - 1 || !this.state.canNext}>Dalej</Button>
          </div>
        </div>
      )
    }
}
