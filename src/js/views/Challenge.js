import Preact from 'preact'
import { connect } from 'react-redux'

class Challenge extends Preact.Component {
  componentDidMount() {

  }

  render() {
    const { id, title } = this.props

    return (
      <div>{id}{' '}{title}</div>
    )
  }
}

const mapStateToProps = () => ({

})

const mapActionsToProps = () => ({
  actions: {
  }
})

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Challenge)


// const Course = (props) => (
//   <div>{props.match.params.id}</div>
// )
