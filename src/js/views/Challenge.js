import Preact from 'preact'
import { connect } from 'react-redux'

class Challenge extends Preact.Component {
  componentDidMount() {
    // TODO fetch challenge
  }

  render() {
    const { id } = this.props
    return (
      <div>Challenge #{id}</div>
    )
  }
}

const mapStateToProps = state => ({
  id: state.get('challengeId')
})

const mapActionsToProps = () => ({
  actions: {
  }
})

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Challenge)
