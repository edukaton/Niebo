import Preact from 'preact'
import './form.sass'

const Checkbox = ({ data, index }) => (
  <div className="checkbox checkbox--challenge-3">
    <input id={`checkbox-${index}`} name="checkbox" type="checkbox" />
    <label htmlFor={`checkbox-${index}`} className="checkbox-label">{data}</label>
  </div>
)

const Form = ({ content }) => (
  <div className="fake-news-checklist--form">
    <h4>
      {content.question}
    </h4>
    <div>
      {content.options.map((text, i) => <Checkbox data={text} index={i} />)}
    </div>
  </div>
)

export default Form
