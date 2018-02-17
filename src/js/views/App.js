import Preact from 'preact'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router'

import LandingPage from './LandingPage'
import Course from './Course'

import { coursesFetchedRequested } from '../actionCreators'

class App extends Preact.Component {
  componentDidMount() {
    this.props.actions.requestFetchCourses()
  }
  render() {
    return (
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/course" component={Course} />
      </Switch>
    )
  }
}


const mapStateToProps = state => ({
  courses: state.get('courses').toArray()
})

const mapActionsToProps = dispatch => ({
  actions: {
    requestFetchCourses: () => dispatch(coursesFetchedRequested())
  }
})

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App)
