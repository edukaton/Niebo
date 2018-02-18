import Preact from 'preact'
import './form.sass'

const Radio = ({
  data, index, id, checked, onRadioClick
}) => (
  <div className="radio" onClick={e => onRadioClick(e, index)}>
    <input id={`radio-${id}-${index}`} name={`radio-${id}-${index}`} type="radio" checked={checked} />
    <label htmlFor={`radio-${id}-${index}`} className="radio-label">{data}</label>
  </div>
)

class Form extends Preact.Component {
  constructor(props) {
    super(props)

    this.state = {
      checkedIndexes: props.content.options.map(() => false)
    }
  }
  componentWillReceiveProps(props) {
    this.setState({
      checkedIndexes: props.content.options.map(() => false)
    })
  }
  onRadioClick = (e, i) => {
    e.preventDefault()
    const checkedIndexes = this.state.checkedIndexes.map(() => false)
    checkedIndexes[i] = true
    this.setState({ checkedIndexes })
  }
  render() {
    const { content, index } = this.props
    const { checkedIndexes } = this.state
    console.log(checkedIndexes)
    return (
      <div className="story-challenge--form">
        <h4>
          {content.question}
        </h4>
        <div>
          {content.options.map(
            (_, i) =>
              (<Radio
                data={_}
                index={i}
                id={index}
                checked={checkedIndexes[i]}
                onRadioClick={this.onRadioClick}
              />))}
        </div>
      </div>
    )
  }
}


export default Form