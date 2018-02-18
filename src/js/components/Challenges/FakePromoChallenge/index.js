import Preact from 'preact'
import Form from './Form'
import { form } from './constants'

import Button from '../../Button'

import './index.sass'

const views = {
  INTRO: 0,
  CHALLENGE: 1,
  FORM: 2,
  SUMMING_UP: 3
}

export default class FakePromoChallenge extends Preact.Component {
    state = {
      view: views.INTRO
    }
    previousView = () => {
      this.setState({ view: this.state.view - 1 })
    }
    nextView = () => {
      this.setState({ view: this.state.view + 1 })
    }
    render() {
      return (
        <div className="fake-promo-challenge">
          <header className="fake-promo-challenge">
            <h2>Przeanalizuj post</h2>
          </header>
          {<Form content={form} />}
          <div className="btns-container">
            <Button onClick={this.previousView} disabled={this.state.view === 0}>Cofnij</Button>
            <Button onClick={this.nextView} disabled={this.state.view === Object.keys(views).length - 1}>Dalej</Button>
          </div>
        </div>
      )
    }
}
