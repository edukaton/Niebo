import Preact from 'preact'
import './form.sass'

const Checkbox = ({
  data, index, checked, isBad, onCheckClick
}) => (
  <div
    className={`checkbox checkbox--challenge-3 ${checked && isBad ? 'checkbox-error' : ''}`}
    onClick={e => onCheckClick(e, index)}
  >
    <input id={`checkbox-${index}`} name="checkbox" type="checkbox" checked={checked} />
    <label htmlFor={`checkbox-${index}`} className="checkbox-label">{data}</label>
  </div>
)

class Form extends Preact.Component {
  constructor(props) {
    super(props)

    this.state = {
      indexesChecked: props.content.options.map(() => false)
    }

    this.badIndexes = [2, 5, 7]
  }
  onCheckBoxClick = (e, i) => {
    e.preventDefault()
    const indexesChecked = [...this.state.indexesChecked]
    indexesChecked[i] = !indexesChecked[i]
    this.setState({
      indexesChecked
    }, () => {
      const leftIndexes = indexesChecked.map((_, ind) => ind).filter(_ => !indexesChecked[_])
      console.log(JSON.stringify(leftIndexes), JSON.stringify(this.badIndexes))
      if (JSON.stringify(leftIndexes) === JSON.stringify(this.badIndexes)) {
        this.props.allowNext()
      } else {
        this.props.disallowNext()
      }
    })
  }
  render() {
    const { content } = this.props
    const { indexesChecked } = this.state
    return (
      <div className="fake-news-checklist--form">
        <h3>
          {content.question}
        </h3>
        <div>
          {
            content.options.map((text, i) =>
              (
                <Checkbox
                  data={text}
                  checked={indexesChecked[i]}
                  isBad={!!this.badIndexes.find(_ => _ === i)}
                  index={i}
                  onCheckClick={this.onCheckBoxClick}
                />
              ))
          }
        </div>
      </div>
    )
  }
}

export default Form
