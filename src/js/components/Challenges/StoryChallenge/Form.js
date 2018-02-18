import Preact from 'preact'
import './form.sass'

const Radio = ({ data, index }) => (
  <div className="radio">
    <input id={`radio-${index}`} name="radio" type="radio" />
    <label htmlFor={`radio-${index}`} className="radio-label">{data}</label>
  </div>
)

const Form = ({ content }) => (
  <div className="story-challenge--form">
    <h4>
      {content.question}
    </h4>
    <div>
      {content.options.map((_, i) => <Radio data={_} index={i} />)}
    </div>
  </div>
)

export default Form