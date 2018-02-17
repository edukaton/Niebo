import Preact from 'preact'
import { Switch, Route } from 'react-router'

import LandingPage from './LandingPage'
import Course from './Course'
import Challenge from './Challenge';

const App = () => (
  <Switch>
    <Route path="/" exact component={LandingPage} />
    <Route path="/course/:id" exact component={Course} />
    <Route path="/course/:courseId/challenge/:id" component={Challenge} />
  </Switch>
)

export default App
